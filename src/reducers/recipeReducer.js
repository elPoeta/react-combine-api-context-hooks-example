import {ADD_RECIPE, REMOVE_RECIPE} from '../actions/types';
import uuid from 'uuid/v4';

export const recipeReducer = (state, action) =>{
  switch(action.type) {
    case ADD_RECIPE:
      return [...state, {
        id: uuid(),
        title: action.recipe.title,
        ingredients: action.recipe.ingredients,
        preparation: action.recipe.preparation,
        cookTime: action.recipe.cookTime,
        servings: action.recipe.servings
      }]
      default:
        return state;
  }
}
