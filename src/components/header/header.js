import React from 'react';
import { HeaderWrapper, HeaderH1 } from './style';

const Header = ({children}) => (
    <HeaderWrapper>
        <HeaderH1>
            {children}
        </HeaderH1>
    </HeaderWrapper>
)

export { Header };