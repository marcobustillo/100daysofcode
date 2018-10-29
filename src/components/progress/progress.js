import React from 'react';
import { ProgressBarContainer, ProgressBarFiller } from './style';

const Progress = ({ percentage }) => (
    <ProgressBarContainer>
        <ProgressBarFiller percentage={percentage} />  
    </ProgressBarContainer>
);

export { Progress }