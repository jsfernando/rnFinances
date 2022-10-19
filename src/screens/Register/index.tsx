import React, { useState, useEffect } from 'react';
import { 
    Keyboard, 
    Modal, 
    TouchableWithoutFeedback,
    Alert 
} from 'react-native';


import * as Yup from 'yup';
import { yupResolver }  from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import { Control, FieldValues, useForm } from 'react-hook-form'
import {
    useNavigation,
    NavigationProp,
    ParamListBase,
  } from "@react-navigation/native";

import {InputForm} from '../../components/Form/InputForm';

import {Button} from '../../components/Form/Button';
import {TransactionTypeButton} from '../../components/Form/TransactionTypeButton';
import {CategorySelectButton} from '../../components/Form/CategorySelectButton';

import { CategorySelect } from '../../screens/CategorySelect'

import { 
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionsTypes,
} from './styles';

interface FormData {
    name: string;
    amount: number;
}
// transform pra trocar , por . no caso do teclado numérico do iphone
const schema = Yup.object().shape({
    name: Yup
    .string()
    .required('Nome é obrigatório'),
    amount: Yup
    .number()
    .transform((_value, originalValue) => Number(originalValue.replace(/,/, '.')))
    .typeError('Informe um valor númerico')
    .positive('O valor não pode ser negativo')
    .required('O valor é obrigatório')
})

export function Register() {
    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

    const dataKey = '@gofinances:transactions';

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    })

    // const navigation = useNavigation();
    const { navigate }: NavigationProp<ParamListBase> = useNavigation();

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const formControll = control as unknown as Control<FieldValues, any>


    function handleOpenSelectCategoryModal(){
        setCategoryModalOpen(true);
    }
    function handleCloseSelectCategoryModal(){
        setCategoryModalOpen(false);
    }

    function handleTransactionsTypeSelect(type: 'positive' | 'negative'){
        setTransactionType(type)
    }

    async function handleRegister(form: FormData) {
        if (!transactionType) 
            return Alert.alert('Selecione o tipo da Transação')

        if (category.key === 'category')
            return Alert.alert('Selecione a categoria')

        // inserindo a data da transação
        // 3ª etapa    
        // id uuid
        const newTransaction = {
            id: String(uuid.v4()),
            name: form.name,
            amount: form.amount,
            type: transactionType,
            category: category.key,
            date: new Date()

        }

        // console.log(data)
        try {
            const data = await AsyncStorage.getItem(dataKey);
            const currentData = data ? JSON.parse(data) : [];

            const dataFormated = [
                // ...currentData,
                // newTransaction
                newTransaction,
                ...currentData
            ]
            // 1ª etapa
            // await AsyncStorage.setItem(dataKey, JSON.stringify(data))
            // 2ª etapa
            await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormated))

            // resetando o formulario apos inserido novo lançamento
            reset();
            setTransactionType('');
            setCategory({
                key: 'category',
                name: 'Categoria'
            }) 

            navigate('Listagem');

        } catch (error) {
            console.log(error)
            Alert.alert("Não foi possivel salvar")
        }
    }

    // useEffect(() => {
    //     async function loadData(){
    //         const data = await AsyncStorage.getItem(dataKey);
    //         console.log(JSON.parse(data!)) // data! pode ser string | null  e assim dizemos que sempre terá algum valor
    //     }

    //     loadData();

    //     // Removendo a lista atual de transações
        // async function removeAll(){
        //     AsyncStorage.removeItem(dataKey);
        // }
        // removeAll();

    // },[])


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>
            <Form>
                <Fields>
                    <InputForm 
                        name="name"
                        control={formControll}
                        placeholder="Nome"
                        autoCapitalize='sentences' 
                        autoCorrect={false}
                        error={errors.name && errors.name.message}
                    />
                    <InputForm 
                        name="amount"
                        control={formControll}
                        placeholder="Preço"
                        keyboardType='numeric' 
                        error={errors.amount && errors.amount.message}
                    />
                    <TransactionsTypes>
                        <TransactionTypeButton 
                            type='up'
                            title='Income'
                            onPress={ () => handleTransactionsTypeSelect('positive')}
                            isActive={transactionType === 'positive'}
                        />
                        <TransactionTypeButton 
                            type='down'
                            title='Outcome'
                            onPress={ () => handleTransactionsTypeSelect('negative')}
                            isActive={transactionType === 'negative'}
                        />
                    </TransactionsTypes>
                    <CategorySelectButton 
                        title={category.name} 
                        onPress={handleOpenSelectCategoryModal}                        
                    />
                </Fields>
                
                <Button 
                    title="Enviar"
                    onPress={handleSubmit(handleRegister)}
                />
            </Form>

            <Modal visible={categoryModalOpen}>
                <CategorySelect 
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={handleCloseSelectCategoryModal}
                />
            </Modal>
        </Container>
        </TouchableWithoutFeedback>
    )
}