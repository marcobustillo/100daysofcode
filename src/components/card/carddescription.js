import React from 'react';
import { CardDescriptionStyle } from './style';

const CardDescription = ({ children }) => (
    <CardDescriptionStyle>
        { children }
    </CardDescriptionStyle>
)

export { CardDescription }