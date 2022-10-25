import React, { useEffect, useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { VictoryPie } from 'victory-native';
import { RFValue } from 'react-native-responsive-fontsize';
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
    const [totalsByCategories, setTotalsByCategories] = useState<CategoryData[]>([]);

    const theme = useTheme();

    async function loadData(){
        const dataKey = '@gofinances:transactions';
        const response = await AsyncStorage.getItem(dataKey);
        const responseFormatted = response ? JSON.parse(response) : [];

        // mostrar as transações
        // console.log(responseFormatted)
        // filtrar as transações, tipando com a interface
        const expensives = responseFormatted
        .filter((expensive:TransactionData) => expensive.type === 'negative')

        const totalByCategory: CategoryData[] = [];

        const expensivesTotal = expensives
        .reduce((acumulator: number, expensive:TransactionData) =>{
            return acumulator + Number(expensive.amount);
        }, 0)
        // acumulator teria a função de += 
        // expensive é o valor
        // 0 é o valor inicial do reducer

        // console.log(expensivesTotal);

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
    }
    useEffect( () =>{
        loadData();

    },[])

    useFocusEffect(
        useCallback( () => {
            loadData();
        },
    []));


    return (
        <Container>
            <Header>
                <Title>Resumo por Categoria</Title>
            </Header>

            {/* <Content contentContainerStyle={{padding:24}}> */}
            <Content
                showsVerticalScrollIndicator={false}
                contentContainterStyle={{
                    paddingBottom: useBottomTabBarHeight(),
                }}
            >

                <MonthSelect>
                    <MonthSelectButton>
                        <MonthSelectIcon name="chevron-left"/>
                    </MonthSelectButton>

                    <Month>Maio</Month>

                    <MonthSelectButton>
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

        </Container>
    )
}