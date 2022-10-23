import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HistoryCard } from '../../components/HistoryCard';
import { 
    Container,
    Header,
    Title,
    Content,
} from './styles';
import { categories } from '../../utils/categories';

interface TransactionCard {
    type: 'positive' | 'negative';
    name: string;
    amount: string;
    category: string;
    date: string;
}

interface CategoryData {
    key: string; // por ultimo
    name: string;
    total: string;
    color: string;
}

export function Resume() {
    const [totalsByCategories, setTotalsByCategories] = useState<CategoryData[]>([]);

    async function loadData(){
        const dataKey = '@gofinances:transactions';
        const response = await AsyncStorage.getItem(dataKey);
        const responseFormatted = response ? JSON.parse(response) : [];

        // mostrar as transações
        // console.log(responseFormatted)
        // filtrar as transações, tipando com a interface
        const expensives = responseFormatted
        .filter((expensive:TransactionCard) => expensive.type === 'negative')

        const totalByCategory: CategoryData[] = [];

        categories.forEach(category => {
            let categorySum = 0;

            expensives.forEach((expensive:TransactionCard)  =>{
                if(expensive.category === category.key){
                    categorySum += Number(expensive.amount)
                }
            })
            // só coloca no array totalByCategory as categorias que forem >0
            if (categorySum > 0){
                const total = categorySum
                .toLocaleString('pt-br', { 
                    style: 'currency', 
                    currency: 'BRL' 
                });
                totalByCategory.push({
                    key: category.key,
                    name: category.name,
                    color: category.color,
                    total,
                })
            }

        })
        // console.log(totalByCategory)
        setTotalsByCategories(totalByCategory)
    }
    useEffect( () =>{
        loadData();

    },[])

    return (
        <Container>
            <Header>
                <Title>Resumo por Categoria</Title>
            </Header>

            {/* <Content contentContainerStyle={{padding:24}}> */}
            <Content>
                { totalsByCategories.map(item => (
                    
                    <HistoryCard 
                    key= {item.key}
                    title={item.name}
                    amount={item.total}
                    color={item.color}
                    />
                    
                    ))
                    
                }
            </Content>

        </Container>
    )
}