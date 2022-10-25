import React, { useEffect, useState, useCallback } from 'react';
import { ActivityIndicator } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from 'styled-components';

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
    LoadContainer,

} from './styles';
//9 e import lin3
//10 no styles importar
export interface DataListProps extends TransactionCardProps{
    id: string;
}

interface HighlightProps {
    amount: string;
    lastTransaction: string;
}

interface HighlightData{
    entries: HighlightProps;
    expensives: HighlightProps;
    total: HighlightProps;
}

export function Dashboard(){
    const [isLoading, setIsLoading] = useState(true);
    const [transactions, setTransactions] = useState<DataListProps[]>([]);
    const [highlightData, setHighlightData] = useState<HighlightData>({} as HighlightData);

    const theme = useTheme();

    function getLastTranscactionDate(
        collections: DataListProps[],
        type: 'positive' | 'negative'
    ) {
        //1º assim    
        // const lastTransaction = Math.max.apply(Math, 
        //     collections
        //     .filter(transaction => transaction.type === type)
        //     .map(transaction => new Date(transaction.date).getTime())
        // )
        // return Intl.DateTimeFormat('pt-BR', {
        //     day: '2-digit',
        //     month: '2-digit',
        //     year: '2-digit',
        // }).format(new Date(lastTransaction));

        //2º assim, por causa da data abreviada

        const lastTransaction = new Date( 
        Math.max.apply(Math,collections
            .filter(transaction => transaction.type === type)
            .map(transaction => new Date(transaction.date).getTime())
        ))


        return `${lastTransaction.getDate()} de ${lastTransaction.toLocaleString('pt-BR', { month: 'long'})}`;    

    }
    
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

        // const lastTransactionEntries = Math.max.apply(Math, 
        //     transactions
        //     .filter((transaction: DataListProps) => transaction.type === 'positive')
        //     .map((transaction: DataListProps) => new Date(transaction.date).getTime())
        // )

        // const lastTransactionEntriesFormatted = Intl.DateTimeFormat('pt-BR', {
        //     day: '2-digit',
        //     month: '2-digit',
        //     year: '2-digit',
        // }).format(new Date(lastTransactionEntries));

        const lastTransactionEntries = getLastTranscactionDate(transactions, 'positive');
        const lastTransactionExpensives = getLastTranscactionDate(transactions, 'negative');
        const totalInterval = `01 a ${lastTransactionExpensives}`
        // console.log(lastTransactionEntriesFormatted);

        const total = entriesTotal - expensiveTotal;

        setHighlightData({
            entries:{
                amount: entriesTotal.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }),
                lastTransaction:`Última entrada dia ${lastTransactionEntries}`,
            },
            expensives:{
                amount: expensiveTotal.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }),
                lastTransaction:`Última saída dia ${lastTransactionExpensives}`,
            },
            total:{
                amount: total.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }),
                lastTransaction:totalInterval,
            },
        })
        setIsLoading(false);
    }

    useEffect(() =>{
        loadTransaction();
        // limpar a lista
        // const dataKey = '@gofinances:transactions';
        // AsyncStorage.removeItem(dataKey);
        
    },[])
    
    useFocusEffect(
        useCallback( () => {
            loadTransaction();
        },
    []));

    return(
        <Container>
            { 
                isLoading ? 
                    <LoadContainer>
                         <ActivityIndicator 
                            color={theme.colors.primary} 
                            size="large"
                        />
                    </LoadContainer> 
                :
            <>
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
                        lastTransaction={highlightData.entries.lastTransaction}
                    />
                    <HighlightCard 
                        type='down' 
                        title='Saídas' 
                        amount={highlightData?.expensives?.amount}
                        lastTransaction={highlightData.expensives.lastTransaction}
                    />
                    <HighlightCard 
                        type='total' 
                        title='Total' 
                        amount={highlightData?.total?.amount}
                        lastTransaction={highlightData.total.lastTransaction}
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
                        keyExtractor={(item: DataListProps) => item.id}
                        renderItem={({ item }) => <TransactionCard data={item} />}
                    />
                </Transactions>
            </>
            }
        </Container>
    )
}

