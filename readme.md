# 1 desnecessário o useEffect e useFocusEffect
## deixar somente o useFocusEffect
# 2 criando o loading para o Gráfico carregar e na mudança de data
## criando o stado isLoading
###    const [isLoading, setIsLoading] = useState(true)
### aproveitar o que foi feito no Dashboard e copiar isLoading
### incluir 
## import { ActivityIndicator } from 'react-native'
## LoadContainer, trazer tbém do styles da dashboard
## incluir lin 143 a 151 e fechar 210
## isLoading começa como false
## carrega como true no inicio do loadData() quando começar carregar os dados .. 
## e no final quando carregar todos os dados antes o useFocusEffect
## setIsLoading(false);

# 4 statusbar no App.tsx

