import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';

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
    HighlightCards

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
                    <Icon name="power" />
                </UserWrapper>
            </Header>
            <HighlightCards
                // horizontal 7.0
                // showHorizontalScrollIndicator={false}
                // contentContainerStyle={{paddingHorizontal: 24}}
            >
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
            </HighlightCards>
        </Container>
    )
}

