import React from 'react';
import { HeaderWrapper, HeaderH1 } from './style';

const Header = ({ children, fontSize }) => (
    <HeaderWrapper>
        <HeaderH1 fontSize={fontSize}>
            {children}
        </HeaderH1>
    </HeaderWrapper>
)

export { Header };