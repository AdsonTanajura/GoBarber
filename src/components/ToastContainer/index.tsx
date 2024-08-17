import React from "react";

import { Container, Toast } from './styles';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

const ToastContainer:React.FC = () => {

    return (

        <Container>
            <Toast hasDescription>
                <FiAlertCircle size={20}/>

                <div>
                    <strong>Aconteceu um Error</strong>
                    <p>Nao foi possivel fazer login na aplicacao</p>
                </div>

                <button type="button">
                    <FiXCircle size={18}/>
                </button>
            </Toast>

            <Toast type="success" hasDescription={false}>
                <FiAlertCircle size={20}/>

                <div>
                    <strong>Aconteceu um Error</strong>
                </div>

                <button type="button">
                    <FiXCircle size={18}/>
                </button>
            </Toast>

            <Toast type="error" hasDescription>
                <FiAlertCircle size={20}/>

                <div>
                    <strong>Aconteceu um Error</strong>
                    <p>Nao foi possivel fazer login na aplicacao</p>
                </div>

                <button type="button">
                    <FiXCircle size={18}/>
                </button>
            </Toast>
        </Container>

    )
};

export default ToastContainer;