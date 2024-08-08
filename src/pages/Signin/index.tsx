import React from "react";
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/Logo.svg';

import { Container, Content, Background } from './styles';

const SingnIn: React.FC = () =>(
 <Container>
    <Content>
        <img src={logoImg} alt="GoBarber" />

        <form>
            <h1>Faca seu logon</h1>
            <input placeholder="E-mail" />
            <input type="password" placeholder="Senha" />
            <button type="submit">Entrar</button>
            <a href="fotgot">Esqueci minha senha</a>
        </form>

        <a href=""><FiLogIn/>Criar conta</a>
    </Content>
    <Background />
 </Container>
);

export default SingnIn