import React,{useContext} from 'react'
import {RecipeContext} from '../../contexts/RecipeContext';
const RecipeDetail = (props) => {
  const {recipes} = useContext(RecipeContext)
  const id = props.match.params.id;
 const {title, ingredients, cookTime, servings} = recipes.find(recipe => recipe.id.toString() === id.toString());
  return (
    <div className="card">
    <div className="card-title">
      <h2>{title}</h2>
    </div>
    <div className="card-ingredient">
      {ingredients.map((ingredient,index) =>(
  <p key={index}>{ingredient}</p>
))} 
    </div>
    <div className="card-misc">
      <div className="misc">
        <div className="value"><span role="img" aria-label="clock">🕒</span></div>
        <div className="type">{cookTime}</div>
      </div>
      <div className="misc">
        <div className="value"><span role="img" aria-label="people">👥</span></div>
        <div className="type">{servings}</div>
      </div>
    </div>
  </div>
  

  )
}

export default RecipeDetail;
