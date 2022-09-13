import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex:1;
    background-color: ${( {theme} ) => theme.colors.background}; */

`;
 
export const Header = styled.View`
    width: 100%;
    /* height: 278px; */
    /* biblioteca pra trabalhar com proporções */
    /* https://www.npmjs.com/package/react-native-responsive-fontsize */
    /* npm install react-native-responsive-fontsize --save */
    /* height: ${RFPercentage(42)}; sem o px e depois com px */
    height: ${RFPercentage(42)}px;


    background-color: ${({ theme }) => theme.colors.primary};

    justify-content: center;
    align-items: center;
    flex-direction: row;
`;
