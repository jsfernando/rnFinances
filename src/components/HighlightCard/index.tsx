import React from 'react';

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from './styles';

// 1 começando propriedades do cartão
// 4 referir-se ao ícone mude conforme o tipo, acrescentar o type
interface Props {
  type: 'up' | 'down' | 'total';
  title: string;
  amount: string;
  lastTransaction: string;
}
// 5 fazendo o mesmo para personalizar os ícones
const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign'
}

// 2 passando a interface Props para o cartão
// 4
export function HighlightCard({
  type,
  title,
  amount,
  lastTransaction
} : Props){
  return (
    // 7
    <Container type={type}>
      <Header>
        <Title type={type}>
          {title}
        </Title>
        {/* agora colocar o icon */}
        {/* 6 */}
        {/* colocando uma proprieade type no Icon e acessando no  */}
        {/* styled component pra trabalhar com a cor dos ícones */}
        <Icon
          name={icon[type]}
          type={type}
        />

      </Header>

      <Footer>
        <Amount type={type}>
          {amount}
        </Amount>
        <LastTransaction type={type}>
          {lastTransaction}
        </LastTransaction>
      </Footer>

    </Container>
  )
}