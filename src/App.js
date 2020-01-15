import React from 'react';
import './App.css';
import Header from './components/nav/Header';

const App = props => {
  return (
    <div className="App">
     <Header/>
     <h2>DEMO - API CONTEXT - HOOKS</h2>
     {props.children}
    </div>
  );
}

export default App;
