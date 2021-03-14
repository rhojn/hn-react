import React from 'react';
import Header from './components/header';
import Container from './components/container';
import Router from './router';
import 'react-virtualized/source/styles.css';

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Router />
      </Container>
    </>
  )
}

export default App;
