import styled from "styled-components";


export const Container = styled.div`
    position: relative;

    span {
        width: 160px;
        background: #ff9000;
        padding: 8px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        opacity: 0;
        transition: opacity 0.4s;
        visibility: hidden;

        position: absolute;
        bottom: calc(100% + 12px);
        left: 50%;
        transform: translateX(-50%);

        color: #312e28;

        /* &::before {
            content: '';

            top: 100%;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        } */
    }
    &:hover span {
        opacity: 1;
        visibility: visible;
    }
`;