# 0 usar o useFocus que usamos no dashboard para atualizar o resume/gráfico
## import { useFocusEffect } from '@react-navigation/native';
## lin 103
# 1 estilização do filtro por mês
# Criando o estilo do mês com seta previous, next
##    MonthSelect,
##    MonthSelectButton,
##    MonthSelectIcon,
##    Month,

# 2 criar um estado para armazenar a data, mesmo que o interesse seja mes/ano
##    const [selectedDate, setSelectedDate] = useState(new Date());
## date-fns
## npm install date-fns
[https://date-fns.org/docs/Getting-Started#installation]
[https://date-fns.org/v2.29.3/docs/addMonths]
### movendo as datas 
### next
###            setSelectedDate(addMonths(selectedDate, 1));
### prev 
###            setSelectedDate(subMonths(selectedDate, 1));

###    function handleDateChange(action: 'next' | 'prev'){
### import { addMonths, subMonths, format } from 'date-fns';
# 3 formatar o month, importar 
### import { ptBR } from 'date-fns/locale'
###                    <Month>
###                        { format(selectedDate, 'MMMM, yyyy', {locale: ptBR} ) }
###                    </Month>

# 4 refletir a mudança do mês nos dados do resumo/gráfico
## chamar o selectedDate junto com o useFocusEffect/useEffect