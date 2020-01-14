import React from 'react';
import './App.css';
import Header from './components/nav/Header';

const App = props => {
  return (
    <div className="App">
     <Header/>
     {props.children}
    </div>
  );
}

export default App;
