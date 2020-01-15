import React, {createContext, useReducer} from 'react';
import {recipeReducer} from '../reducers/recipeReducer';

export const RecipeContext = createContext();

const RecipeContextProvider = props => {
  const [recipes, dispatch] = useReducer(recipeReducer,[{id:1,title:"Recipe Title", ingredients: ["1 palta","2 tomatto","salt"],cookTime:15, servings: 2}]);
  return (
    <RecipeContext.Provider value={{recipes,dispatch}}>
      {props.children}
    </RecipeContext.Provider>
  )
}

export default RecipeContextProvider;
