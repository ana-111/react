import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rodape from './components/rodape';
import Titulo from './components/titulo'

function App() 
{
  return 
  (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        
        <h1> Titulo da Página </h1>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Rodape />
    </div>
  );
}

export default App;
