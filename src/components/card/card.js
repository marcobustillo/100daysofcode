import React from 'react';
import { CardWrapper, CardContainer } from './style';

const Card = ({ children, alignItems }) => (
    <CardWrapper>
        <CardContainer alignItems={alignItems}>
            { children }
        </CardContainer>
    </CardWrapper>
)

export { Card }