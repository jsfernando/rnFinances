import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

// 6.1 criar a interface para tipar o styled component icon pra receber 
// o type e mudar a cor do ícone
interface TypeProps {
  type: 'up' | 'down' | 'total';
}
export const Container = styled.View<TypeProps>`
  /* background-color: ${({ theme }) => theme.colors.shape}; */

  /* 7.1 */
  background-color: ${({ theme, type }) =>
  type === 'total' ? theme.colors.secondary :  theme.colors.shape}; 

  width: ${RFValue(300)}px;
  border-radius: 5px;

  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px; 

`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

// 8 para o título type
export const Title = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme, type }) =>
  type === 'total' ? theme.colors.shape :  theme.colors.text_dark};
`;

// 6.2 tipando com <typeProps>
export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;

  color: ${({ theme }) => theme.colors.text_dark};

  /* 6.3 */
  /* incluir css no import lin 1 */
  ${({ type }) => type === 'up' && css`
    color: ${({ theme }) => theme.colors.success};
  `};

  ${({ type }) => type === 'down' && css`
    color: ${({ theme }) => theme.colors.attention};
  `};

  ${({ type }) => type === 'total' && css`
    color: ${({ theme }) => theme.colors.shape};
  `};
`;

export const Footer = styled.View``;

//9
export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;

  /* color: ${({ theme }) => theme.colors.text_dark}; */

  color: ${({ theme, type }) =>
  type === 'total' ? theme.colors.shape :  theme.colors.text_dark};

  margin-top: 38px;
`;
// 10
export const LastTransaction = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;

  /* color: ${({ theme }) => theme.colors.text}; */

  color: ${({ theme, type }) =>
  type === 'total' ? theme.colors.shape :  theme.colors.text};
`;

