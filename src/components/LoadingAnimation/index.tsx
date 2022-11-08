import React from 'react';
import LottieView from 'lottie-react-native';

import loadingPie from '../../assets/loadingPie.json';

import { Container } from './styles';

export function LoadingAnimation() {
  return (
    <Container>
        <LottieView 
            source={require('../../assets/spinning-pie-chart.json')} 
            style={{height: 300 }}
            resizeMode="contain"
            autoPlay 
            loop
        />
    </Container>
  )
}
