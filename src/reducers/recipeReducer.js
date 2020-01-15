import {ADD_RECIPE, REMOVE_RECIPE} from '../actions/types';
import uuid from 'uuid/v4';

export const recipeReducer = (state, action) =>{
  switch(action.type) {
    case ADD_RECIPE:
      return [...state, {
        id: uuid(),
        title: action.recipe.title,
        ingredients: action.recipe.ingredients,
        cookTime: action.recipe.cookTime,
        servings: action.recipe.servings
      }]
      case REMOVE_RECIPE:
        return state.filter(recipe => recipe.id !== action.id)
      default:
        return state;
  }
}
