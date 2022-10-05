## 1 começando com https://react-hook-form.com
# poderiamos criar dois estados name e amount
    onChangeText={text => setName(text)}
    ou 
    onChangeText={setName}
    function handleRegister(){
        const data ={
            name,
            amount,
            transactionType,
            category: category.key
        }
        console.log(data)
    }
    function handleInputChange(text: string){
        console.log(text)
    }
# ^para demonstrar que é possível usar o estado, mas que a cada mudança do input a tela é renderizada novamente, não compensa quando há muitos inputs, pode ocasionar problema de performance

### install yarn add react-hook-form
## controler https://react-hook-form.com/get-started#ReactNative

## 2 Criar um input Controlado conforme documentação do react-hook-form para que ao preencher o input só renderize os valores do component quando for enviado pelo botão (Enviar)

## Criado um component InputForm extendendo as propriedades do TextInputProps
## depois de configurado, vai ser usado no Register
### import useForm do react-hook-form
### import inputForm
### trocar os inputs por inputForm e passar as propriedade
    const {
        control,
        handleSubmit,
    } = useForm();
                <Button 
                    title="Enviar"
                    onPress={handleSubmit(handleRegister)}
                />

    function handleRegister(form){
        console.log(form)
    }
