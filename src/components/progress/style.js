import styled from 'styled-components';

export const ProgressWrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
`;

export const ProgressBarContainer = styled.div`
    position:relative;
    height: 40px;
    width: 100%;
    border-radius: 50px;
    border: 3px solid #333; 
`;

export const ProgressBarFiller = styled.div`
    background: #034f84;
    height:100%;
    border-radius: inherit;
    transition: width .2s ease-in;
    width: ${props => props.percentage ? props.percentage : 0}%;
`;