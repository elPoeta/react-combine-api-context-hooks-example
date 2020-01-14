import React, {createContext, useReducer} from 'react';
import {recipeReducer} from '../reducers/recipeReducer';

export const RecipeContext = createContext();

const RecipeContextProvider = props => {
  const [recipes, dispatch] = useReducer(recipeReducer,[]);
  return (
    <RecipeContext.Provider value={{recipes,dispatch}}>
      {props.children}
    </RecipeContext.Provider>
  )
}

export default RecipeContextProvider;
