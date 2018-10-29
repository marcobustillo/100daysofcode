import React from 'react';
import { ParagraphWrapper, ParagraphP } from './style';

const Paragraph = ({children}) => (
    <ParagraphWrapper>
        <ParagraphP>
            {children}
        </ParagraphP>
    </ParagraphWrapper>
)


export { Paragraph };