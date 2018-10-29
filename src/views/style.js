import styled from 'styled-components';

export const AppWrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Span = styled.span`
    font-weight: bold;
`;

export const Anchor = styled.a`
    color: blue;

    :hover {
        text-decoration: underline;
        color:blue;
    }

    :visited {
        color:blue;
    }

`;