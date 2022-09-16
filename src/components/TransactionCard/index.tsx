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

//1
// type: 'positive' | 'negative';
export interface TransactionCardProps {
  title: string;
  amount: string;
  category: Category;
  date: string;
}
// 2 
export interface Category{
  name: string,
  icon: string,
}
//5
interface Props {
  data: TransactionCardProps;
}
//3
// export function TransactionCard({
//   title,
//   amount,
//   category,
//   date
// }: TransactionCardProps
// ){
  //5
export function TransactionCard({data}: Props){

  return (
    <Container>
      <Title>
        {/* 3 */}
        {/* {title} */}
        {/* 5 data. */}
        {data.title}
      </Title>

      <Amount >
        {/* {amount} */}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name='dollar-sign' />
          <CategoryName>
            {/* {category.name} */}
            {data.category.name}
          </CategoryName>
        </Category>

        <Date>
          {/* {date} */}
          {data.date}
        </Date>
      </Footer>
    </Container>
  )
}