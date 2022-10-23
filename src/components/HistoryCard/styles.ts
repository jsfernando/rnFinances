import styled from 'styled-components/native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

interface ContainerProps {
    color: string;
}


export const Container = styled.View<ContainerProps>`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.shape};
    flex-direction: row;
    justify-content: space-between;
    /* padding: ${RFPercentage(2)}px;  */
    /* border-radius: ${RFPercentage(0.7)}px;  */
    /* border-left-width: ${RFPercentage(0.7)}px;  */
 padding:  13px 24px;
 border-radius: 5px;
 border-left-width: 5px;

    border-left-color: ${({ color }) => color};
    /* margin-bottom: ${RFPercentage(2)}px;  */
 margin-bottom: 8px;

`;
// padding:  13px 24px;
// border-radius: 5px;
// border-left-width: 5px;
// margin-bottom: 8px;



export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(15)}px;
`;
/* font-size: ${RFPercentage(2)}px; */


export const Amount = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(15)}px;
`;
    /* font-size: ${RFPercentage(2)}px; */

