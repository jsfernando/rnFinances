import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
//11
import { FlatList } from 'react-native';
// import { getStatusBarHeight } from 'react-native-iphone-x-helper'
/* npm i react-native-iphone-x-helper --save */
//10

import { DataListProps } from './Dashboard/';



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

export const UserWrapper = styled.View`
    width:100%
    padding: 0 24px;
    margin-top:${RFValue(58)}px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;


export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
<<<<<<< HEAD
    /**1 */
    /* background-color:#999; */
    /*2 theme */
    /* background-color: ${(props) => props.theme.colors.primary}; */

    background-color: ${( {theme} ) => theme.colors.background}; 
=======
`;

export const Photo = styled.Image`
    width:${RFValue(48)}px;
    height:${RFValue(48)}px;
>>>>>>> NavegacaoTabNavigation9

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

export const Transactions = styled.View`
  flex: 1%;
  padding: 0 24px;

  margin-top: ${RFPercentage(12)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};

    margin-bottom: 16px;
`;
//12
// export const TransactionList = styled.FlatList.attrs({
//     showsVerticalScrollIndicator: false,
// })``;

// styles component TransactionCard margin-bottom do container lin15
// 12
export const TransactionList = styled(
    FlatList as new () => FlatList<DataListProps>
    ).attrs({
    showsVerticalScrollIndicator: false,
  })``;
  
