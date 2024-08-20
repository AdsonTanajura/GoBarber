import React from "react";
import { useTransition} from 'react-spring';

import { Container } from './styles';
import Toast from './Toast';
import { ToastMessage } from "../../hooks/ToastContext";

interface ToastContainerProps {
    messages: ToastMessage[];


}

const ToastContainer:React.FC<ToastContainerProps> = ({messages}) => {
    const messagesWithTransitions = useTransition(messages,
        {
            from: { right: '-120%', opacity: 0,},
            enter: { right: '0%', opacity: 1},
            leave: { right: '-120%', opacity: 0},
            keys: message => message.id,
        }
    );


    return (
        <Container>
            {messagesWithTransitions((style, item) => (
                <Toast key={item.id} message={item} style={style} />
            ))}
        </Container>
    )
};

export default ToastContainer;