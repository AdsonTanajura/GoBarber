import React from "react";
import { FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi';

import logoImg from '../../assets/Logo.svg';

import { Container, Content, Background } from './styles';
import Button from "../../components/Button";
import Input from "../../components/Input";

const SingnUp: React.FC = () =>(
 <Container>
    <Background />
    <Content>
        <img src={logoImg} alt="GoBarber" />

        <form>
            <h1>Faca seu logon</h1>
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
            <Button type="submit">Cadastrar</Button>
        </form>

        <a href="adw"><FiArrowLeft/>Voltar para o login</a>
    </Content>
 </Container>
);

export default SingnUp