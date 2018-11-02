import styled from 'styled-components';

export const ParagraphWrapper = styled.div`
    width: ${props => props.width ? props.width : 'inherit'};
`;

export const ParagraphP = styled.p`
    font-family: 'Proxima Nova Soft', 'Helvetica Neue', sans-serif;
    font-size: ${props => props.fontSize ? props.fontSize : '1.5rem'};
`;