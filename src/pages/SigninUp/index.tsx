import React, {useCallback} from "react";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';



import { FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi';

import logoImg from '../../assets/Logo.svg';

import { Container, Content, Background, AnimationContainer } from './styles';
import Button from "../../components/Button";
import Input from "../../components/Input";



const SingnUp: React.FC = () =>{


    const initialValues = {
        name: '',
        email: '',
        password: '',
    };
    const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string().required('O e-mail é obrigatório').email('Digite um E-mail válido'),
        password: Yup.string().required('Campo obrigatório').min(6, 'A senha tem que ter no minimo 6 digitos')

    });
    const handleSubmit = useCallback( async (data: object) => {
        console.log(data);
    }, []);

    return (


        <Container>
            <Background />
            <Content>
                <AnimationContainer>

                    <img src={logoImg} alt="GoBarber" />

                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={schema}
                    >
                        {() => (
                            <Form >
                                <h1>Faça seu logon</h1>
                                <Input name="name" icon={FiUser} placeholder="Nome" />
                                <Input name="email" icon={FiMail} placeholder="E-mail" />
                                <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
                                <Button type="submit">Cadastrar</Button>
                            </Form>
                        )}
                    </Formik>
                    <Link to={'/'}><FiArrowLeft/>Voltar para o login</Link>
                </AnimationContainer>
            </Content>
 </Container>
    )
};

export default SingnUp