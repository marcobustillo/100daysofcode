import styled from 'styled-components';

export const CardWrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem auto;
`;

export const CardContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: ${props => props.alignItems ? props.alignItems : 'right'};
    border: 1px solid #e0e0e0;
    box-shadow: 3px 5px #e0e0e0;
    width: 50%;
    transition: transform 1s;

    :hover{
        transform: scale(1.1);
    }
`;

export const CardImageStyle = styled.div`

`;

export const CardHeaderStyle = styled.div`
    display:flex;
    flex-direction: column;
    align-items: ${props => props.alignItems ? props.alignItems : 'right'};
`;

export const CardDescriptionStyle = styled.div`
    display:flex;
    flex-direction: column;
    align-items: ${props => props.alignItems ? props.alignItems : 'right'};
`;

export const CardFooterStyle = styled.div`

`;
