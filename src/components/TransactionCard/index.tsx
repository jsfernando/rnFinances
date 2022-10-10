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
//8 exportando a interface para usar o id
export interface TransactionCardProps {
  // 1
  type: 'positive' | 'negative';
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
      {/* 2,5 */}
      <Amount type={data.type}>
        { data.type === 'negative' && '- '} 
        { data.amount }
      </Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon} />
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