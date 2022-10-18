import React, { useEffect, useState } from 'react';

import { useFocusEffect } from '@react-navigation/native';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

import AsyncStorage from '@react-native-async-storage/async-storage';


import { 
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreething,
    UserName,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionList,
    LogoutButton,

} from './styles';
//9 e import lin3
//10 no styles importar
export interface DataListProps extends TransactionCardProps{
    id: string;
}

interface HighlightProps {
    amount: string;
}

interface HighlightData{
    entries: HighlightProps;
    expensives: HighlightProps;
    total: HighlightProps;
}

export function Dashboard(){
    const [transactions, setTransactions] = useState<DataListProps[]>([]);
    const [highlightData, setHighlightData] = useState<HighlightData>({} as HighlightData);

    async function loadTransaction(){
        const dataKey = '@gofinances:transactions';
        const response = await AsyncStorage.getItem(dataKey);
        
        const transactions = response ? JSON.parse(response) : [];
        // 
        let entriesTotal = 0;
        let expensiveTotal = 0;
        
        const transactionsFormatted: DataListProps[] = transactions
        .map((item:DataListProps) => {

            if(item.type === 'positive') {
                entriesTotal += Number(item.amount);
            } else {
                expensiveTotal += Number(item.amount);
            }

            const amount = Number(item.amount)
            .toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            })
            const date = Intl.DateTimeFormat('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit',
            }).format(new Date(item.date));
            return {
                id: item.id,
                name: item.name,
                amount,
                type: item.type,
                // category: item.category,
                category: item.category,
                date
            };
        });

        setTransactions(transactionsFormatted);
        const total = entriesTotal - expensiveTotal;

        setHighlightData({
            entries:{
                amount: entriesTotal.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                })
            },
            expensives:{
                amount: expensiveTotal.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                })
            },
            total:{
                amount: total.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                })
            },
        })
        // console.log(transactionsFormatted)

    }

    useEffect(() =>{
        loadTransaction();
        // limpar a lista
        // const dataKey = '@gofinances:transactions';
        // AsyncStorage.removeItem(dataKey);
        
    },[])
    
    useFocusEffect(
        React.useCallback( () => {
            loadTransaction();
        },
    []));

    return(
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo 
                            source={ {uri: 'https://avatars.githubusercontent.com/u/3800865?v=4'} }
                        />
                        <User>
                            <UserGreething>Olá,</UserGreething>
                            <UserName>Fernando</UserName>
                        </User>
                    </UserInfo>
                    <LogoutButton onPress={() =>{}}>
                        <Icon name="power" />
                    </LogoutButton>
                </UserWrapper>
            </Header>
            <HighlightCards>
                {/* 3 passando as props do cartão sem o type ainda*/}
                {/* 4 incluir o type=' e mostrar o intelissence  */}
                <HighlightCard 
                    type='up'
                    title='Entradas' 
                    amount={highlightData?.entries?.amount} 
                    lastTransaction='Última entrada dia 13 de abril'
                />
                <HighlightCard 
                    type='down' 
                    title='Saídas' 
                    amount={highlightData?.expensives?.amount}
                    lastTransaction='Última saída dia 03 de abril'
                />
                <HighlightCard 
                    type='total' 
                    title='Total' 
                    amount={highlightData?.total?.amount}
                    lastTransaction='Última entrada dia 13 de abril'
                />
            </HighlightCards>
            <Transactions>
                <Title>Listagem</Title>
                {/* <TransactionCard 
                    data = {data[0]}
                /> */}

                <TransactionList
                    // colocar o mouse em cima do data
                    data={transactions}
                    //7
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                />
            </Transactions>

        </Container>
    )
}

