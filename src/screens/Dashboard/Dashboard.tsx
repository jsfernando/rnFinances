import React from 'react';
// biblioteca de icones que já vem no expo
// https://icons.expo.fyi
// Incluindo o ícon de desligar no tsx e depois incluir no styled components
// import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import { 
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreething,
    UserName,
    Icon,
} from './styles';

export function Dashboard(){
    return(
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo 
                            source={ {uri: 'https://avatars.githubusercontent.com/u/3800865?v=4'} }
                        />
                        <User>
                            <UserGreething>Olá,</UserGreething>
                            <UserName>Fernando</UserName>
                        </User>
                    </UserInfo>
                    {/* <Feather name="power" size={RFValue(24)} color="#fff"/> */}
                    <Icon name="power" />
                </UserWrapper>
            </Header>
        </Container>
    )
}

