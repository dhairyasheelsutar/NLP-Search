import React from 'react';
import './App.css';
import Search from './components/Search/Search';
import Container from '@material-ui/core/Container';
import Header from './components/Header/Header';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <Route path="/" exact render={() => <Container maxWidth="lg"><Search /></Container>} />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
