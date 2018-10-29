import React from 'react';
import { ListWrapper, ListOrdered } from './style';

const ListOL = ({ children }) => (
    <ListWrapper>
        <ListOrdered>
            { children }
        </ListOrdered>
    </ListWrapper>
);

export { ListOL }