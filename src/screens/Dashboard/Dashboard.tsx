import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

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

} from './styles';
//9 e import lin3
//10 no styles importar
export interface DataListProps extends TransactionCardProps{
    id: string;
}

export function Dashboard(){
    // 10 exemplo do extends
    // const test : DataListProps;
    // test.id

    // 0
    // converter para array
    // 6 colocar id no array
    const data:DataListProps[]  = [
        {
            id: '1',
            type: 'positive',
            title:'Desenvolvimento de sites',
            amount:'R$ 12.000,00',
            category: {
                name:'Vendas',
                icon:'dollar-sign'
            },
            date:'13/10/2020'
        },
        {
            id: '2',
            type: 'negative',
            title:'Hamburgueria Pizzy',
            amount:'R$ 59,00',
            category: {
                name:'Alimentação',
                icon:'coffee'
            },
            date:'10/04/2020'
        },
        {
            id: '3',
            type: 'negative',
            title:'Aluguel do apartamento',
            amount:'R$ 1.200,00',
            category: {
                name:'Casa',
                icon:'shopping-bag'
            },
            date:'27/03/2020'
        }


];

    return(
<<<<<<< HEAD
            <Container>
                <Title>Dashboard</Title>
            </Container>
=======
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
                    <Icon name="power" />
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
>>>>>>> NavegacaoTabNavigation9
    )
}

