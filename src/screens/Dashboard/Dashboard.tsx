import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';

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

export function Dashboard(){
    // converter para array
    const data = [
        {
            title:'Desenvolvimento de sites',
            amount:'R$ 12.000,00',
            category: {
                name:'Vendas',
                icon:'dollar-sign'
            },
            date:'13/10/2020'
        },
        {
            title:'Desenvolvimento de sites',
            amount:'R$ 12.000,00',
            category: {
                name:'Vendas',
                icon:'dollar-sign'
            },
            date:'13/10/2020'
        },
        {
            title:'Desenvolvimento de sites',
            amount:'R$ 12.000,00',
            category: {
                name:'Vendas',
                icon:'dollar-sign'
            },
            date:'13/10/2020'
        }


];

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
                    data={data}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                />
            </Transactions>

        </Container>
    )
}

