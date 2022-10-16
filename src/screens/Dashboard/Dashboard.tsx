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

export function Dashboard(){
    //     const data:DataListProps[]  = [];

    // criar um estado pra pegar os valores do asyncStorage
    const [data, setData] = useState<DataListProps[]>([]);

    async function loadTransaction(){
        const dataKey = '@gofinances:transactions';
        const response = await AsyncStorage.getItem(dataKey);

        const transactions = response ? JSON.parse(response) : [];
        // mostrar 1º sem formatação 
        // setData(transactions);
        // console.log(transactions)
        
        const transactionsFormatted: DataListProps[] = transactions.map((item:DataListProps) => {
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

        setData(transactionsFormatted);
        console.log(transactionsFormatted)

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
                    amount='R$ 17.400,00' 
                    lastTransaction='Última entrada dia 13 de abril'
                />
                <HighlightCard 
                    type='down' 
                    title='Saídas' 
                    amount='R$ 1.259,00' 
                    lastTransaction='Última saída dia 03 de abril'
                />
                <HighlightCard 
                    type='total' 
                    title='Total' 
                    amount='R$ 16.141,00' 
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
                    data={data}
                    //7
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                />
            </Transactions>

        </Container>
    )
}

