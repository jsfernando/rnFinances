## 1 Instalação do Yup e validação dos campos do Form
### inputName    autoCapitalize='sentences' 
###        autoCorrect={false}
###        keyboardType='numeric' 

## Validação
### TouchableWithoutFeedback - ele aceita um único filho, por isso envolver o container
###  <TouchableWithoutFeedback onPress={Keyboard.dismiss}> fechar o teclado
###
###    function handleRegister(form: FormData) {
### Alert para transactionType e category.key

## validar inptus
### https://react-hook-form.com/get-started#SchemaValidation
### npm install @hookform/resolvers yup
### import * as Yup from 'yup';
### import { yupResolver }  from '@hookform/resolvers/yup'

    const {
        control,
        handleSubmit
    } = useForm({
        resolver: yupResolver()
    });
### o que o resolver vai fazer é forçar que o nosso submit do do formulário, siga um padrão e pra seguir esse padrão é necessário criar um schema
## Criando um schema
### const schema = Yup.object().shape({
### depois passo o schema para o resolver
###        resolver: yupResolver(schema)
### acrescentar no Component inputForm 
### mudar o amount para numeric na interface FormData

# Solução para o campo amount(númerico) para o iPhone
É só adicionar :
.transform((_value, originalValue) => Number(originalValue.replace(/,/, '.')))

assim:

amount: Yup
    .number()
    .transform((_value, originalValue) => Number(originalValue.replace(/,/, '.')))
    .typeError('Informe um valor numérico')
    .positive('O valor não pode ser negativo')
    .required('O valor é obrigatório')

    
