import React from "react"

import { Container } from './styles'

interface TooltipsProps {
    tilte: string;
    className?: string;
    children: any;
}


const Tootip: React.FC<TooltipsProps> = ({tilte, className, children}) => {

    return (
        <Container className={className}>
            {children}
            <span>{tilte}</span>
        </Container>
    )

}

export default Tootip