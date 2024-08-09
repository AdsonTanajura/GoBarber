import React from "react";
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/Logo.svg';

import { Container, Content, Background } from './styles';
import Button from "../../components/Button";
import Input from "../../components/Input";

const SingnIn: React.FC = () =>(
 <Container>
    <Content>
        <img src={logoImg} alt="GoBarber" />

        <form>
            <h1>Faca seu logon</h1>
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
            <Button type="submit">Entrar</Button>
            <a href="fotgot">Esqueci minha senha</a>
        </form>

        <a href="adw"><FiLogIn/>Criar conta</a>
    </Content>
    <Background />
 </Container>
);

export default SingnIn