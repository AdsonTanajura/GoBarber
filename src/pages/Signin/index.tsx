import React, { useCallback } from "react";
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';



import logoImg from '../../assets/Logo.svg';

import { Container, Content, Background, AnimationContainer } from './styles';
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useAuth } from "../../hooks/AuthContext";
import { useToast } from "../../hooks/ToastContext";


interface SingInFormData {
    email: string;
    password: string;
}


const SingnIn: React.FC = () =>{

    const { singIn } = useAuth()

    const { addToast } = useToast();

    const initialValues = {
        email: '',
        password: '',
    }

    const schema = Yup.object().shape({
        email: Yup.string().required('O e-mail é obrigatório').email('Digite um E-mail válido'),
        password: Yup.string().required('Campo obrigatório').min(6, 'A senha tem que ter no minimo 6 digitos')

    });

    const handleSubmit = useCallback( async (data: SingInFormData) => {
        try {
            await schema.validate(data, {
                abortEarly: false,
            })
            await singIn({
                email: data.email,
                password: data.password,
            })
        } catch (err) {
            addToast({
                type: 'error',
                title: 'Error na autenticacao',
                description: 'Ocorreu um erro ao fazer login, cheque as credenciais'
            });
        }
    }, [schema, singIn, addToast]);

    return (
        <Container>
            <Content>
                <AnimationContainer>
                    <img src={logoImg} alt="GoBarber" />
                    <Formik 
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={schema}
                        >
                        <Form>
                            <h1>Faca seu logon</h1>
                            <Input name="email" icon={FiMail} placeholder="E-mail" />
                            <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
                            <Button type="submit">Entrar</Button>
                            <a href="fotgot">Esqueci minha senha</a>
                        </Form>
                    </Formik>
                    <Link to={'/singnup'}><FiLogIn/>Criar conta</Link>
                </AnimationContainer>
            </Content>
            <Background />
        </Container>
    )

};

export default SingnIn