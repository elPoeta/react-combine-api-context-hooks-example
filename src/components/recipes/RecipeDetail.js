import React,{useContext} from 'react'
import {RecipeContext} from '../../contexts/RecipeContext';
const RecipeDetail = (props) => {
  const {recipes} = useContext(RecipeContext)
  const id = props.match.params.id;
 const {title, ingredients, cookTime, servings} = recipes.find(recipe => recipe.id.toString() === id.toString());
  return (
    <div>
<h2>{title}</h2>
{ingredients.map((ingredient,index) =>(
  <p key={index}>{ingredient}</p>
))}   
   <span><span role="img" aria-label="clock">🕒</span> {cookTime}</span>
            <span><span role="img" aria-label="people">👥</span> {servings}</span>
 </div>
  )
}

export default RecipeDetail;
