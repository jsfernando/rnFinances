import React from 'react';

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

// type: 'positive' | 'negative';
export interface TransactionCardProps {
  title: string;
  amount: string;
  category: Category;
  date: string;
}
export interface Category{
  name: string,
  icon: string,
}
interface Props {
  data: TransactionCardProps;
}
export function TransactionCard({data}: Props){

  return (
    <Container>
      <Title>
        {data.title}
      </Title>

      <Amount >
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name='dollar-sign' />
          <CategoryName>
            {data.category.name}
          </CategoryName>
        </Category>

        <Date>
          {data.date}
        </Date>
      </Footer>
    </Container>
  )
}