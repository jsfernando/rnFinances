import React from 'react';
// 1
import { Text, View } from 'react-native';

import { 
    Container,
    Header

} from './styles';

export function Dashboard(){
    return(
        <Container>
            <Header>
                {/* 1 pra visualizar que existe conteúdo */} 
                {/* <Text>Senac Campinas</Text> */}
                <Text>Imagem</Text>
                <View>
                    <Text>Olá,</Text>
                    <Text>Senac</Text>
                </View>
            </Header>

        </Container>
    )
}

