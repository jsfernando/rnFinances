import React from 'react';

import {
  Container,
  //2 components do cartão
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from './styles';

// não é necessário ainda
interface Props {
  type: 'up' | 'down' | 'total';
  title: string;
  amount: string;
  lastTransaction: string;
}

// não é necessário ainda
const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign'
}


export function HighlightCard(){
  return (
    // <Container type={type}>
    //   <Header>
    //     <Title type={type}>
    //       {title}
    //     </Title>
    //     <Icon
    //       name={icon[type]}
    //       type={type}
    //     />
    //   </Header>

    //   <Footer>
    //     <Amount type={type}>
    //       {amount}
    //     </Amount>
    //     <LastTransaction type={type}>
    //       {lastTransaction}
    //     </LastTransaction>
    //   </Footer>

    // </Container>
    <Container >
      <Header>
        <Title>
          Entrada
        </Title>
        <Icon
          name="arrow-up-circle"
        />
      </Header>

      <Footer>
        <Amount>
          R$ 17.400,00
        </Amount>
        <LastTransaction>
          Última entrada dia 13 de Abril
        </LastTransaction>
      </Footer>

    </Container>

    )
}