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
    text-decoration: none;
    color: #034f84;

    :hover {
        text-decoration: underline;
        color:#034f84;
    }

    :visited {
        color:#034f84;
    }

`;