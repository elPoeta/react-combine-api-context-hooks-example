import React, {useState, useContext} from 'react'
import {RecipeContext} from '../../contexts/RecipeContext';
import {ADD_RECIPE} from '../../actions/types';
const RecipeForm = () => {
  const { dispatch } = useContext(RecipeContext);
  const [title, setTitle] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [servings, setServings] = useState('');
   
  const handleSubmit = e =>{ 
     e.preventDefault();
     dispatch(
       {
         type:ADD_RECIPE, 
         recipe: {
           title,
           ingredients,
           cookTime,
           servings
         }
        })
        setTitle('');
        setIngredients('');
        setServings('');
        setCookTime('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <input type="text" name="title" placeholder="Title"  value={title} onChange={e => setTitle(e.target.value)} required />
        <textarea rows="10" placeholder="Ingredients" value={ingredients} onChange={e=> setIngredients(e.target.value)} required/>
        <input type="number" name="cookTime" placeholder="Cook Time" value={cookTime}  onChange={e => setCookTime(e.target.value)} required />
        <input type="number" name="servings" placeholder="Servings" value={servings} onChange={e=> setServings(e.target.value)} required />
        <input type="submit" value="add recipe" />
      </form>
    </div>
  )
}

export default RecipeForm;