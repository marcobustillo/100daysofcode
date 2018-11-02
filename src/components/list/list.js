import React, { Component } from 'react';
import { ListWrapper, ListOrdered, ListUnordered } from './style';
import ListItem from './listitems';

class List extends Component {
    
    static Item = ListItem;

    render(){
        const { children, type } = this.props; 
        switch (type) {
            case 'ul':
                return(
                    <ListWrapper>
                        <ListUnordered>
                            {children}
                        </ListUnordered>
                    </ListWrapper>
                );
            case 'ol':
                return(
                    <ListWrapper>
                        <ListOrdered>
                            {children}
                        </ListOrdered>
                    </ListWrapper>
                );
            default:
                return(
                    <ListWrapper>
                        <ListUnordered>
                            {children}
                        </ListUnordered>
                    </ListWrapper>
                );
        }
    }
}

export { List }