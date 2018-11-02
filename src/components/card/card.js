import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardWrapper, CardContainer } from './style';
import CardDescription from './carddescription';
import CardHeader from './cardheader';
import CardFooter from './cardfooter';

class Card extends Component {
    
    static Description = CardDescription;
    static Header = CardHeader;
    static Footer = CardFooter;

    convertStringToObject(size){
        switch (size) {
            case 'small':   
                return {height:'100px',width:'50%'}; 
            case 'medium':
                return {height:'200px',width:'60%'};
            case 'large':
                return {height:'300px',width:'70%'};
            default:
                return {height:'200px',width:'60%'};
        }
    }

    render(){
        const { children, alignItems, size } = this.props;
        return(
            <CardWrapper>
                <CardContainer alignItems={alignItems} size={this.convertStringToObject(size)}>
                    { children }
                </CardContainer>
            </CardWrapper>
        )
    }
}

Card.propTypes = {
    alignItems: PropTypes.string,
    size: PropTypes.string,
    children: PropTypes.node
}

export { Card }