import React, { Component } from 'react';
import { Header, Paragraph, ProgressWrap, Progress, ListUL, LI, Card } from '../components';
import { AppWrapper, Span, Anchor } from './style';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header>100 Days of Code</Header>

        <Paragraph>
          Hi! I am <Span>Marco Bustillo</Span> and here you can see what I've made during my 100 Days of Code, and how far along I've come<br/>
          <br/>
          Follow me on Twitter <Anchor href="https://twitter.com/HikariKnighto" target="_blank">@HikariKnighto</Anchor> to checkout my progress
        </Paragraph>

        <ProgressWrap>
          <Header> 5/100 </Header>
          <Progress percentage={5}/>
        </ProgressWrap>
        
          <ListUL>
            <LI>
              <Card>
                <Header> 5/100 </Header>
                <Header> 5/100 </Header>
              </Card>
            </LI>
          </ListUL>
      </AppWrapper>
    );
  }
}

export default App;
