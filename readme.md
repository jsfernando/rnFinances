
# 1 victorypie react native - gráfico de pizza
[https://formidable.com/open-source/victory/docs/victory-pie/]
[https://formidable.com/open-source/victory/docs/native]
## npm install victory-native
## import { VictoryPie } from 'victory-native';
### <VictoryPie /> dentro do Content que é nossa scrollView
### antes de contruir o gráfico incluo mais um total no CategoryData
###    totalFormatted: string;
#### trocar 
            if (categorySum > 0){
                const totalFormatted = categorySum

            totalByCategory.push({
                total: categorySum,
                totalFormatted
            <HistoryCard 
                amount={item.totalFormatted}
## instalar 
# npm install --save react-native-svg
## expo doctor --fix-dependencies
##    "react-native-svg": "12.3.0",
##    "victory-native": "^36.6.8",
### gráfico ficou meio para o lado, ChartContainer para centralizar
## calcular o percentual de cada categoria
### expensivesTotal com reduce
###        console.log(expensivesTotal);

## criar um percent pra descobrir o percentual de cada total
### percent inserindo no push, inserindo na interface e trocando o name do grafico, por percent
## acrescentar cor e o percentual deve estar dentro do gráfico
## colorScale
## style=={{labels}}
## labelRadius pra ficar 50% do eixo de dentro pra fora
## import useTheme do styled-components and lin38


