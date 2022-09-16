import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
// import { getStatusBarHeight } from 'react-native-iphone-x-helper'
export const Container = styled.View`
    flex:1;
    background-color: ${( {theme} ) => theme.colors.background}; 

`;
export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;


    background-color: ${({ theme }) => theme.colors.primary};

    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
`;

// margin-top: ${getStatusBarHeight() + RFValue(28)}px 
export const UserWrapper = styled.View`
    width:100%
    padding: 0 24px;
    margin-top:${RFValue(58)}px;

    flex-direction: row;
    justify-content: space-between;
    /* //somente para iphone a biblioteca */
    /* //react-native-iphone-x-helper, para cuidar do espaçamento no topo */
    /* npm i react-native-iphone-x-helper --save */
    align-items: center;
    /* // iphone */
    /* // margin-top da lin 23 */
`;


export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image`
    width:${RFValue(48)}px;
    height:${RFValue(48)}px;

    border-radius: 10px;
`;

export const User = styled.View`
    margin-left: 17px;
`;

export const UserGreething = styled.Text`
    color: ${( {theme} ) => theme.colors.shape };
    font-size: ${RFValue(18)}px;
    font-family: ${( {theme} ) => theme.fonts.regular };
`;

export const UserName = styled.Text`
    color: ${( {theme} ) => theme.colors.shape };
    font-size: ${RFValue(18)}px;
    font-family: ${( {theme} ) => theme.fonts.bold };
`;

export const Icon = styled(Feather)`
    color: ${( {theme} ) => theme.colors.secondary };
    font-size: ${RFValue(24)}px;

`;
export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {paddingHorizontal: 24} 
})`
    width: 100% ;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
`;

//2
export const Transactions = styled.View`
  flex: 1%;
  /* 3 */
  /* background:red; */
  padding: 0 24px;

  /* //5 */
  margin-top: ${RFPercentage(12)}px;
`;

export const Title = styled.Text`
    /* 4, verificar o tamanho e a font no figma */
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};

    margin-bottom: 16px;
`;

