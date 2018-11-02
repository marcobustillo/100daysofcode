import React from 'react';
import { CardDescriptionStyle } from './style';

const CardDescription = ({ children, alignItems }) => (
    <CardDescriptionStyle alignItems={alignItems}>
        { children }
    </CardDescriptionStyle>
)

export default CardDescription