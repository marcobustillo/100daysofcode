import _ from 'lodash';
import React, { Component } from 'react';
import Moment from 'react-moment';
import { Header, Paragraph, ProgressWrap, Progress, List, Card } from '../components';
import { AppWrapper, Span, Anchor } from './style';
import values from '../data/projects.json';

class App extends Component {

  render() {
    return (
      <AppWrapper>
        <Header>100 Days of Code</Header>

        <Paragraph width='50%'>
          Hi! I am <Span>Marco Bustillo</Span> and here you can see what I've made during my 100 Days of Code, and how far along I've come<br/>
          <br/>
          Follow me on Twitter <Anchor href="https://twitter.com/HikariKnighto" target="_blank">@HikariKnighto</Anchor> to checkout my progress
        </Paragraph>

        <ProgressWrap>
          <Header> 5/100 </Header>
          <Progress percentage={5}/>
        </ProgressWrap>

        <List>
        {_.map(values, (val,i) =>{
            console.log(val);
            return(
              <List.Item key={i}>
                <Card>
                  <Card.Header alignItems='center'>
                    <Header fontSize='1rem'>{val.title}</Header>
                  </Card.Header>
                  <Card.Description alignItems='center'>
                    <Paragraph fontSize='16px'>{val.description}</Paragraph>
                    <Paragraph fontSize="14px">Demo Link: <Anchor href={val.demo} target="_blank">{val.title}</Anchor></Paragraph>
                    <Paragraph fontSize="14px">Github Link: <Anchor href={val.github} target="_blank">{val.title}</Anchor></Paragraph>
                  </Card.Description>
                  <Card.Footer alignItems='center'>
                    <Paragraph fontSize='16px'><Moment format="MMMM DD,YYYY" >{val.started}</Moment></Paragraph>
                    
                  </Card.Footer>
                </Card>
              </List.Item>
            )
        })}
        </List>

      </AppWrapper>
    );
  }
}

export default App;
