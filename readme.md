# 1
# instalando o expo async-storage
ASYNC STORAGE [https:##docs.expo.dev/versions/latest/sdk/async-storage/]
## expo install @react-native-async-storage/async-storage
# 2
# register/index.tsx
## try catch error

# uuid react native
UUID [https://www.npmjs.com/package/react-native-uuid]
## npm install react-native-uuid

# reset formulário
## lin 63 ou useForm
## lin 117, 118, ...

# 3 proxima fase é fazer a navegação para primeira aba usando o useNavigation
## import useNavigation e declaração const navigation = useNavigation()
## ajuste conforme forum por conta da tipagem do useNavigation

# Listando transações
## não vamos mais usar o useEffect no register, pois vamos usar no dashboard
## 
### //     const data:DataListProps[]  = [
##         {
##             id: '1',
##             type: 'positive',
##             title:'Desenvolvimento de sites',
##             amount:'R$ 12.000,00',
##             category: {
##                 name:'Vendas',
##                 icon:'dollar-sign'
##             },
##             date:'13/10/2020'
##         },
##         {
##             id: '2',
##             type: 'negative',
##             title:'Hamburgueria Pizzy',
##             amount:'R$ 59,00',
##             category: {
##                 name:'Alimentação',
##                 icon:'coffee'
##             },
##             date:'10/04/2020'
##         },
##         {
##             id: '3',
##             type: 'negative',
##             title:'Aluguel do apartamento',
##             amount:'R$ 1.200,00',
##             category: {
##                 name:'Casa',
##                 icon:'shopping-bag'
##             },
##             date:'27/03/2020'
##         }
## ];

## declarando loadTransaction e useEffect pra recuperar as transações do async-storage
### formatando as strings que vem do async-storage
### https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString

# trocar no transactionCard o title para name
# para o android instalar o intl
## npm install intl
# importar no arquivo app.tsx
### import 'intl';
### import 'intl/locale-data/jsonp/pt-BR';

# 4 transactionCard mudar os icones para buscar a key da lista que está em utils
## remover
# lin 61 da dashboard, trocar por item.category

# 5 transactionCard buscar o categories do utils
## lin 32 e 49,51