import React from 'react';
import { ListWrapper, ListUnordered } from './style';

const ListUL = ({ children }) => (
    <ListWrapper>
        <ListUnordered>
            { children }
        </ListUnordered>
    </ListWrapper>
);

export { ListUL }