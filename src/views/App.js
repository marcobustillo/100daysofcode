import React, { Component } from 'react';
import { Header, Paragraph } from '../components';
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
      </AppWrapper>
    );
  }
}

export default App;
