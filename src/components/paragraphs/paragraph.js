import React from 'react';
import { ParagraphWrapper, ParagraphP } from './style';

const Paragraph = ({children, fontSize, width}) => (
    <ParagraphWrapper width={width}>
        <ParagraphP fontSize={fontSize}>
            {children}
        </ParagraphP>
    </ParagraphWrapper>
)


export { Paragraph };