import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    flex:1;
    background-color: ${( {theme} ) => theme.colors.background}; 

`;

//1
//https://www.npmjs.com/package/react-native-responsive-fontsize
export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px; //2


    background-color: ${({ theme }) => theme.colors.primary};

    justify-content: center;
    align-items: center;
    flex-direction: row;
`;
//7
export const UserWrapper = styled.View`
    width:100%
    /* background-color:red; */
    padding: 0 24px;
    /* 9 por ultimo ...alinhando o ícone */
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
//3
export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;

    /* usar a largura toda */
    /* background-color: red; */
`;
//2
export const Photo = styled.Image`
    width:${RFValue(48)}px;
    height:${RFValue(48)}px;

    border-radius: 10px;
`;
//4
export const User = styled.View`
    margin-left: 17px;
`;
//5
export const UserGreething = styled.Text`
    color: ${( {theme} ) => theme.colors.shape };
    font-size: ${RFValue(18)}px;
    font-family: ${( {theme} ) => theme.fonts.regular };
`;
//6
export const UserName = styled.Text`
    color: ${( {theme} ) => theme.colors.shape };
    font-size: ${RFValue(18)}px;
    font-family: ${( {theme} ) => theme.fonts.bold };
`;
//8
export const Icon = styled(Feather)`
    color: ${( {theme} ) => theme.colors.secondary };
    font-size: ${RFValue(24)}px;

`;