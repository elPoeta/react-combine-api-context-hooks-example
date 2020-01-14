import React, {createContext, useReducer} from 'react';
import {recipeReducer} from '../reducers/recipeReducer';

export const RecipeContext = createContext();

const RecipeContextProvider = props => {
  const [recipes, dispatch] = useReducer(recipeReducer,[{
        id: 1,
        title:"test",
        ingredients: ["palta","salt"],
        preparation: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        cookTime: 15,
        servings: 2
  }]);
  return (
    <RecipeContext.Provider value={{recipes,dispatch}}>
      {props.children}
    </RecipeContext.Provider>
  )
}

export default RecipeContextProvider;
