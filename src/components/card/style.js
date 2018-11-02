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
    align-items: ${props => props.alignItems ? props.alignItems : 'left'};
    border: 1px solid #e0e0e0;
    box-shadow: 3px 5px #e0e0e0;
    width: ${props => props.size.width};
    transition: transform 1s;

    :hover{
        transform: scale(1.1);
    }
`;

export const CardHeaderStyle = styled.div`
    display:flex;
    flex-direction: column;
    align-items: ${props => props.alignItems ? props.alignItems : 'left'};
    padding:10px;
`;

export const CardDescriptionStyle = styled.div`
    display:flex;
    flex-direction: column;
    padding:10px;
    align-items: ${props => props.alignItems ? props.alignItems : 'left'};
`;

export const CardFooterStyle = styled.div`
    display:flex;
    flex-direction: column;
    border-top: 3px solid #D3D3D3;
    padding: 10px;
    align-items: ${props => props.alignItems ? props.alignItems : 'left'};
`;
