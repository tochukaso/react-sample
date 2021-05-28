import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header title="My title"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
