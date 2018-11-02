import React from 'react';
import { CardFooterStyle } from './style';

const CardFooter = ({ children, alignItems }) => (
    <CardFooterStyle alignItems={alignItems}>
        { children }
    </CardFooterStyle>
)

export default CardFooter