import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
    /**1 */
    /* background-color:#999; */
    /*2 theme */
    /* background-color: ${(props) => props.theme.colors.primary}; */

    background-color: ${( {theme} ) => theme.colors.background}; 

`;
// PPI pixel per inch, ou pixel por polegada
// Densidade de Pixel é o número total de pixels que existe dentro de uma
// área física da tela
// cada tela de celular tem uma densidade de pixel diferente
export const Title = styled.Text`
    font-family: ${( {theme} ) => theme.fonts.bold};
    font-size: 24px;
    /* font-weight: bold; */
    /* color: purple; */
    color: ${( { theme }) => theme.colors.title}
`;