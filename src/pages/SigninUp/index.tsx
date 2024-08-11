import React from "react";
import { Formik, Form } from 'formik';


import { FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi';

import logoImg from '../../assets/Logo.svg';

import { Container, Content, Background } from './styles';
import Button from "../../components/Button";
import Input from "../../components/Input";


const SingnUp: React.FC = () =>{
    function handleSubmit(date: object): void {
        console.log(date);
    }

    const initialValues = {
        name: '',
        email: '',
        password: '',
    };

    return (


        <Container>
            <Background />
            <Content>
                <img src={logoImg} alt="GoBarber" />

                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                >
                    {({ handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <h1>Faça seu logon</h1>
                            <Input name="name" icon={FiUser} placeholder="Nome" />
                            <Input name="email" icon={FiMail} placeholder="E-mail" />
                            <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
                            <Button type="submit">Cadastrar</Button>
                        </Form>
                    )}
                </Formik>
                <a href="adw"><FiArrowLeft/>Voltar para o login</a>
            </Content>
 </Container>
    )
};

export default SingnUp