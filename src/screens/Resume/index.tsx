import React, { useEffect, useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { VictoryPie } from 'victory-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { addMonths, subMonths, format } from 'date-fns';
import { ptBR } from 'date-fns/locale'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import { useTheme } from 'styled-components';

import { HistoryCard } from '../../components/HistoryCard';
import { 
    Container,
    Header,
    Title,
    Content,
    ChartContainer,
    MonthSelect,
    MonthSelectButton,
    MonthSelectIcon,
    Month,
    LoadContainer,

} from './styles';
import { categories } from '../../utils/categories';

interface TransactionData {
    type: 'positive' | 'negative';
    name: string;
    amount: string;
    category: string;
    date: string;
}

interface CategoryData {
    key: string; // por ultimo
    name: string;
    total: number;
    totalFormatted: string;
    color: string;
    percent: string;
}

export function Resume() {
    const [isLoading, setIsLoading] = useState(false)
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [totalsByCategories, setTotalsByCategories] = useState<CategoryData[]>([]);

    const theme = useTheme();

    function handleDateChange(action: 'next' | 'prev'){
        if(action === 'next'){
            // const newDate = addMonths(selectedDate, 1);
            // setSelectedDate(newDate);
            setSelectedDate(addMonths(selectedDate, 1));
            // ver mudar o mês e ano
            // console.log(newDate);
        } else {
            // const newDate = subMonths(selectedDate, 1);
            // setSelectedDate(newDate);
            setSelectedDate(subMonths(selectedDate, 1));

            // ver mudar o mês e ano
            // console.log(newDate);

        }
    }

    async function loadData(){
        setIsLoading(true);
        const dataKey = '@gofinances:transactions';
        const response = await AsyncStorage.getItem(dataKey);
        const responseFormatted = response ? JSON.parse(response) : [];

        // filtro baseado somente nas transações negativas
        // incluir a data no filtro
        const expensives = responseFormatted
        .filter((expensive:TransactionData) => 
            expensive.type === 'negative' &&
            new Date(expensive.date).getMonth() === selectedDate.getMonth() &&
            new Date(expensive.date).getFullYear() === selectedDate.getFullYear()
        );

        // checar que tem a data pra fazer comparação com ano/mes
        // console.log(expensives);

        const totalByCategory: CategoryData[] = [];

        const expensivesTotal = expensives
        .reduce((acumulator: number, expensive:TransactionData) =>{
            return acumulator + Number(expensive.amount);
        }, 0)

        categories.forEach(category => {
            let categorySum = 0;

            expensives.forEach((expensive:TransactionData)  =>{
                if(expensive.category === category.key){
                    categorySum += Number(expensive.amount)
                }
            })
            // só coloca no array totalByCategory as categorias que forem >0
            if (categorySum > 0){
                const totalFormatted = categorySum
                .toLocaleString('pt-br', { 
                    style: 'currency', 
                    currency: 'BRL' 
                });

                const percent = `${(categorySum / expensivesTotal *100).toFixed(0)}%`;

                totalByCategory.push({
                    key: category.key,
                    name: category.name,
                    color: category.color,
                    total: categorySum,
                    totalFormatted,
                    percent
                })
            }

        })
        // console.log(totalByCategory)
        setTotalsByCategories(totalByCategory)
        setIsLoading(false);
    }

    
    useFocusEffect(
        useCallback( () => {
            loadData();
        },
    [selectedDate]));


    return (
        <Container>
            <Header>
                <Title>Resumo por Categoria</Title>
            </Header>

            
            { 
                isLoading ? 
                <LoadContainer>
                         <ActivityIndicator 
                            color={theme.colors.primary} 
                            size="large"
                            />
                </LoadContainer> 
                :
                <Content
                    showsVerticalScrollIndicator={false}
                    contentContainterStyle={{
                        paddingBottom: useBottomTabBarHeight(),
                    }}
                >
                    <MonthSelect>
                        <MonthSelectButton onPress={() => handleDateChange('prev')}>
                            <MonthSelectIcon name="chevron-left"/>
                        </MonthSelectButton>

                        <Month>
                            { format(selectedDate, 'MMMM, yyyy', {locale: ptBR} ) }
                        </Month>

                        <MonthSelectButton onPress={() => handleDateChange('next')}>
                            <MonthSelectIcon name="chevron-right"/>
                        </MonthSelectButton>
                    </MonthSelect>

                    <ChartContainer>

                        <VictoryPie 
                            data={totalsByCategories}
                            colorScale={totalsByCategories.map(category => category.color)}
                            style={{
                                labels:{
                                    fontSize:RFValue(18),
                                    fontWeight:'bold',
                                    fill: theme.colors.shape
                                }
                            }}
                            labelRadius={60}
                            x="percent"
                            y="total"
                        />

                    </ChartContainer>
                    { 
                        // [1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
                        //     <HistoryCard 
                        //         key= "{item.key}"
                        //         title="{item.name}"
                        //         amount="{item.totalFormatted}"
                        //         color="{item.color}"
                        //     />
                        // ))
                        totalsByCategories.map(item => (
                            <HistoryCard 
                                key= {item.key}
                                title={item.name}
                                amount={item.totalFormatted}
                                color={item.color}
                            />
                        ))
                    }
                </Content>
            
            }    
        </Container>
    )
}