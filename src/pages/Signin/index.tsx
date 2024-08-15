import React, { useCallback, useContext } from "react";
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import logoImg from '../../assets/Logo.svg';

import { Container, Content, Background } from './styles';
import Button from "../../components/Button";
import Input from "../../components/Input";
import AuthContext from "../../context/AuthContext";


const SingnIn: React.FC = () =>{
    const auth = useContext(AuthContext);

    console.log(auth);

    const initialValues = {
        email: '',
        password: '',
    }

    const schema = Yup.object().shape({
        email: Yup.string().required('O e-mail é obrigatório').email('Digite um E-mail válido'),
        password: Yup.string().required('Campo obrigatório').min(6, 'A senha tem que ter no minimo 6 digitos')

    });

    const handleSubmit = useCallback( async (data: object) => {
        console.log(data);
    }, []);

    return (
        <Container>
            <Content>
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
                <a href="adw"><FiLogIn/>Criar conta</a>
            </Content>
            <Background />
        </Container>
    )

};

export default SingnIn