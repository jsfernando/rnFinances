import React from 'react';
import { categories } from '../../utils/categories';

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
  name: string;
  amount: string;
  // category: Category;
  category: string;
  date: string;
}
// export interface Category{
//   name: string,
//   icon: string,
// }
interface Props {
  data: TransactionCardProps;
}
export function TransactionCard({data}: Props){
  // const category = categories.filter(
  //   item => item.key === data.category
  // )[0];

  const [ category ] = categories.filter(
    item => item.key === data.category
  );

  return (
    <Container>
      <Title>
        {data.name}
      </Title>
      {/* 2,5 */}
      <Amount type={data.type}>
        { data.type === 'negative' && '- '} 
        { data.amount }
      </Amount>

      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>
            {category.name}
          </CategoryName>
        </Category>

        <Date>
          {data.date}
        </Date>
      </Footer>
    </Container>
  )
}