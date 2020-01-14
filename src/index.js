import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import RecipeContextProvider from './contexts/RecipeContext'
import './index.css';
import App from './App';
import Home from './components/Home';
import RecipeForm from './components/forms/RecipeForm';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(  
<RecipeContextProvider>  
<BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/addrecipe" component={RecipeForm} />
      </Switch>
    </App>
  </BrowserRouter>
  </RecipeContextProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
