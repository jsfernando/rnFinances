## 1
# começamos por criar screen/Register
## 2 
# no App.tsx trocamos o Dashboard pelo Register para estilizar primeiro, depois será feita a navegaçãocom as Tabs
## 4
# Criaçao dos components de Formulário /components/Form/Input
## 5 
# cria o tipo no Register e importa o component Input

## 6
# voltamos ao estilo do component input

## 7
# Estilizar o espaçamento dos inputs através de um Form envolvendo os dois inputs Nome e Preço

## 8 
# criar o component Button e style
# tipo do component TouchableOpacity fazendo igual ao input declarando ...rest e tbém no styles

## 9 
# importando o compoment button no Register
# e depois estilizar Button title enviar

## 10 
# criando um elemento Fields pra envolver os inputs, pois o botão é lá embaixo, assim consigo empurrar o botão
# este elemento Fields é criado no style do component Register e estilizaçao se da no Form com justity-content: space-between

## 11 
# Criar o component TransactionTypeButton e importar ele no Register

## 12 
# Container TouchableOpacity
# no Component TransactionTypeButton criar a interface colocar o ...rest no Container e as props no component com as variáveis title e icon para os botoes income e outcome
# criar uma const para os icons up e down
# passar o type como props também para o component TransactionTypeButton
# incluir o ícone usando o type

## 13
# trabalhar na estilização do botão component TransactionTypeButton

## 14
# depois de estilizar o botão, duplicar no register
# envolver os dois botões por um elemento TransactionTypes para mudar a ordem pra row, um do lado do outro
# styles do TransactionsTypes no Register
# Alterar o Css do Component TransactionTypeButton para 48%

## 15 
# colocar as cores no income/outcome com uma propriedade type do component TransactionButtonType

## 16
# tipar com IconsProps o elemento Icon = syled(Father)

## 17
# mudar a cor de fundo quando pressionado os botoes income/outcome
# criar um estado no Register
# criar uma funcao handleTransactionsTypeSelect
# a função seta o estado 
# passar o estado para o Component Button como uma propriedade
# propriedade criada com isActive na interface do Component TransactionTypeButton
# faz a chamada no Register com isActive={transactionType === 'down'}

## 18 
# criar a interface ContainerProps e tipar o Container no styles do TransactionTypeButton
# importar o css pra mudar a cor
# trabalhar com border-width para tirar a borda quando clicar no botão
# trabalhar com ${({ isActive, type }) para mudar a cor do background

## 19
# Correção styles register, espaçamento
export const TransactionsTypes = styled.View`
# lin 37,38 - top para os botoes income e outcome e bottom para o select categorias

## 20
# criando o component CategorySelect

## 21
# copiando arquivo categories.ts e colocando na pasta util
# nesta aula vamos criar o modal para escolher as categorias
# començando o estilo da screens/CategorySelect
# Para acompanhar a construação da modal, trocar no App.tsx
# Trocar o Registre por CategorySelect
      <Register />
      <CategorySelect />
## 22
# agora volta para o styles.ts para fazer o layout
# incluir uma flatlist após estilizar Container, Header e title
# depois de criado a Flatlist, incluir os components Category, Icon, Name
# depois de arrumar o estilo     Category,    Icon,    Name com os tipos, as categories do Flatlist já aparecem em tela...
# agora estilizar ...Category, Icon e Name

## 23 estilizar o separator e incluí-lo na Flatlist
ItemSeparatorComponent={() => <Separator />

## 24 estilizar mais 3 components Footer
# incluido o component Button