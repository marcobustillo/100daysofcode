import React from 'react';
import { CardHeaderStyle } from './style';

const CardHeader = ({ children, alignItems }) => (
    <CardHeaderStyle alignItems={alignItems}>
        { children }
    </CardHeaderStyle>
)

export default CardHeader;