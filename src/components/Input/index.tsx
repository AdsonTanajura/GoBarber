import React, { InputHTMLAttributes } from "react";
import { IconBaseProps } from 'react-icons';
import { Container } from "./styles";
import { useField } from 'formik';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    icon?: React.ComponentType<IconBaseProps>
};

const Input: React.FC<InputProps> = ({ icon: Icon, name, ...rest }) => {
    
    const [field] = useField(name);

    return (
        <Container>
            { Icon && <Icon size={20} /> }
            <input {...field} {...rest} />
        </Container>
    );
};

export default Input;