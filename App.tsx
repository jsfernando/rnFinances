import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as SplashScreen from 'expo-splash-screen';

import theme from './src/global/styles/theme';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import { Dashboard } from './src/screens/Dashboard/Dashboard';
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] =useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })
  // a função do splash screen é pra fazer o papel de loading
  // para carregar as fontes para o celular do usuário
  // https://docs.expo.dev/versions/latest/sdk/splash-screen/
  // usado no lugar do expo-app-loading que já foi depreciado
  // https://docs.expo.dev/versions/latest/sdk/app-loading/
  if(!fontsLoaded){
    return null;
  } 
  SplashScreen.hideAsync();

  return(
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  ) 
}

