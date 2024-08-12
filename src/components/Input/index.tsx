import React, { InputHTMLAttributes, useState, useCallback } from "react";
import { IconBaseProps } from 'react-icons';
import { Container } from "./styles";
import { useField } from 'formik';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    icon?: React.ComponentType<IconBaseProps>
};

const Input: React.FC<InputProps> = ({ icon: Icon, name, ...rest }) => { 
    const [usefield, meta] = useField(name);
    const { onBlur,...field } = usefield;

    const [isFocused, setFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);


    const handleInputBlur = useCallback(() => {
        setFocused(false)
        setIsFilled(!! usefield?.value);;
    }, [usefield?.value])

    const handInputFocused = useCallback(()=> (setFocused(true)), []);

    return (
        <Container isFilled= {isFilled} isFocused= {isFocused}>
            { Icon && <Icon size={20} /> }
            <input 
                onFocus={handInputFocused}
                onBlur={handleInputBlur}
                {...field} {...rest} 
            />
            <div>{meta.error}</div>
        </Container>
    );
};

export default Input;