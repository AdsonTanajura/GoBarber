import { styled, css } from 'styled-components';
import Tootip from "../Tooltip";


interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
        background: #232129;
        border-radius: 10px;
        padding: 16px;
        width: 100%;
        display: flex;
        align-items: center;

        color: #666360;
        border: 2px solid #232129;

        & + div {
            margin-top: 8px;
        }
        ${props => props.isErrored && css`
            border-color: #c53030;
        `}
        
        ${props => props.isFocused && css`
            color: #FF9000;
            border-color: #FF9000;
        `}
        ${props => props.isFilled && css`
            color: #FF9000;
        `}

    input { 
        background: transparent;
        flex: 1;
        border: 0;
        color: #F4EDE8;

        &::placeholder {
            color: #666360;
        }
    }
    svg {
        margin-right: 16px;
    }
`;

export const Error = styled(Tootip)`
    height: 20px;
    margin-left: 16px;
    svg {
        margin: 0;
    }

    span {
        background: #c53030;
        color: #fff;

        &::before {
            border-color: #c53030 transparent;
        }
    }
`;