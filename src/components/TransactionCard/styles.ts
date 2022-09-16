import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface TransactionProps {
  type: 'positive' | 'negative';
}

// 6 definir cada um 

//7
export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  /* medir os espaçamentos no figma */
  padding: 17px 24px;
  margin-bottom: 16px;
`;

// 8
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

// 9
// export const Amount = styled.Text<TransactionProps>`
//   font-family: ${({ theme }) => theme.fonts.regular};
//   font-size: ${RFValue(20)}px;
//   color: ${({ theme, type }) =>
//   type === 'positive' ? theme.colors.success : theme.colors.attention};

//   margin-top: 2px;
// `;
//9
export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  margin-top: 2px;
`;

//10
export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 19px;
`;

//11
export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

//12
export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;

//13
export const CategoryName = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  /* checar espacamento no figma */
  margin-left: 17px;
`;

//14
export const Date = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;