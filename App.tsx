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

// import { Dashboard } from './src/screens/Dashboard/Dashboard';
import { Register } from './src/screens/Register';
// import { CategorySelect } from './src/screens/CategorySelect';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] =useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })
  if(!fontsLoaded){
    return null;
  } 
  SplashScreen.hideAsync();

  return(
    <ThemeProvider theme={theme}>
      <Register />
    </ThemeProvider>
  ) 
}

