# 1 iniciando as variáveis let entriesSumTotal e expensiveTotal lin 45,46
## 2 se type for positive entriesSum += item.amount lin 51
## 3 depois do .map lin 60... fazemos os totais, criando as variáveis let fora do .map lin 54
## 4 lin 46 um estado para pegar o total
## 5 criando as intefaces lin 34 e 38, sendo que a 38 é baseado na 34
## 6 depois dos totais na lin 60, passamos para o estado lin 90 e formatamos
## 7 ao final fazemos o total - entradas e saidas lin 88  e formatamos na lin 103
## 8 mostrando nos cards, lin 152, 158 e 164
### 9        amount={highlightData?.entries?.amount} 
### as interrogações são para dados assincronos quando não foram carregados ainda
### são chamados de Optional Chaining 

### o local storage não carrega imediatamente

### Loading lin 47 useState(true) carregando... lin 115 false, já carregou
### ActivityIndicator component de loading
#### https://reactnative.dev/docs/activityindicator
### lin 134 a 143 com um LoadingContainer se Loading ActivityIndicator