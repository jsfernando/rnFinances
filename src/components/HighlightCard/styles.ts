import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

interface TypeProps {
  type: 'up' | 'down' | 'total';
}
//1 Container
export const Container = styled.View<TypeProps>`
  /* 1 */
  background-color: ${({ theme }) => theme.colors.secondary};

  /* background-color: ${({ theme, type }) =>
  type === 'total' ? theme.colors.secondary :  theme.colors.shape};  */

  /* 2, olhar o figma os espaçamentos e tamanhos*/
  width: ${RFValue(300)}px;
  border-radius: 5px;

  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  /* 8 */
  margin-right: 16px; /* espaçamento entre os cartões, mostrar depois */
  /* retirar depois a altura */
  height: 300px;
`;

//6
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme, type }) =>
  type === 'total' ? theme.colors.shape :  theme.colors.text_dark};
`;

//5
export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;

  color: ${({ theme }) => theme.colors.text_dark};

  /* ${({ type }) => type === 'up' && css`
    color: ${({ theme }) => theme.colors.success};
  `};

  ${({ type }) => type === 'down' && css`
    color: ${({ theme }) => theme.colors.attention};
  `};

  ${({ type }) => type === 'total' && css`
    color: ${({ theme }) => theme.colors.shape};
  `}; */
`;

export const Footer = styled.View``;

//3
export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;

  color: ${({ theme }) => theme.colors.text_dark};

  /* color: ${({ theme, type }) =>
  type === 'total' ? theme.colors.shape :  theme.colors.text_dark}; */

  margin-top: 38px;
`;

//4
export const LastTransaction = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;

  color: ${({ theme }) => theme.colors.text};

  /* color: ${({ theme, type }) =>
  type === 'total' ? theme.colors.shape :  theme.colors.text}; */
`;

