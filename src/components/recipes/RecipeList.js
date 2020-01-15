import React,{useContext} from 'react'
import {RecipeContext} from '../../contexts/RecipeContext';
import RecipeDetail from './RecipeDetail';
import './recipe.css';

const RecipeList = () => {
    const {recipes} = useContext(RecipeContext);
    return (
        <div className="Recipe">
                 {recipes.length ? 
                     recipes.map( recipe => (
                         <RecipeDetail  
                           key={recipe.id}
                           recipe={recipe}/>
                     ))
                  : <h3>Sorry not recipes yet :( ...</h3>}
        </div>
    )
}

export default RecipeList;
