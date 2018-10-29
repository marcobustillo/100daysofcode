import React from 'react';
import { CardWrapper, CardContainer } from './style';

const Card = ({ children }) => (
    <CardWrapper>
        <CardContainer>
            { children }
        </CardContainer>
    </CardWrapper>
)

export { Card }