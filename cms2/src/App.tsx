import React, { useReducer }from 'react';
import logo from './logo.svg';
import Header from './components/Header';

// components
import Layout from "./components/Layout";

import './App.css';

function App() {
  const [useDefaultTheme, toggle] = useReducer((theme) => !theme, true);

  return (
    <div className="App">
         <Layout toggleTheme={toggle} useDefaultTheme={useDefaultTheme}>
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
        </Layout>
    </div>
  );
}

export default App;
