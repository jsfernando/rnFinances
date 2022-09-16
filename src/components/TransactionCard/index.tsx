import React from 'react';
// 4
// 5 criar o styles.ts
import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from './styles';

export interface TransactionCardProps {
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}
// 3
export function TransactionCard(){

  return (
    <Container>
      <Title>
        Desenvolvimento de Sites
      </Title>

      <Amount >
        R$ 12.000,00
      </Amount>

      <Footer>
        <Category>
          <Icon name='dollar-sign' />
          <CategoryName>
            Vendas
          </CategoryName>
        </Category>

        <Date>
          13/04/2020
        </Date>
      </Footer>
    </Container>
  )
}