# Navegação, Tab Navigation
## https://reactnavigation.org/docs/getting-started
## https://reactnavigation.org/docs/getting-started#installation
### npm install @react-navigation/native
# dependências do expo
## https://reactnavigation.org/docs/getting-started#installing-dependencies-into-an-expo-managed-project
### expo install react-native-screens react-native-safe-area-context

# aqui exemplos da estratégia de navegação
### https://reactnavigation.org/docs/getting-started#wrapping-your-app-in-navigationcontainer

# Agora instalar a nossa estratégia de navegação
## https://reactnavigation.org/docs/tab-based-navigation
### npm install @react-navigation/bottom-tabs

# começando a configuração da Navegação no App
## criar routes/app.routes.tsx
## no App 
### fazer a importação
## import { NavigationContainer} from '@react-navigation/native';
## import { AppRoutes } from './src/routes/app.routes';
### e uso no return()
### e após essas configurações no App, parar e iniciar expo start

# estilizando a tabs
## Trabalhando no app.routes.tsx
###        <Navigator
###            screenOptions={{
###    headerShown: false, desabilitar cabeçalho
###    tabBarActiveTintColor = Cor do menu Ativo
###    tabBarActiveTextColor = Cor do menu não Ativo
###    tabBarLabelPosition: 'beside-icon' = icone ao lado
                tabBarStyle: {
                    height:88,
                    paddingVertical:
                }
## import Platform

### importar do styled-component o theme
### import { MaterialIcons } from '@expo/vector-icons'
# rnFinances
