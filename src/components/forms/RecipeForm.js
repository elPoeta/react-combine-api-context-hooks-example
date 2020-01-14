import React from 'react'

const RecipeForm = () => {
  return (
    <div>
      <form>
        <input type="text" name="title" placeholder="Title"  required />
        <textarea rows="10" placeholder="Ingredients" required/>
        <input type="number" name="cookTime" placeholder="Cook Time"  required />
        <input type="number" name="title" placeholder="Servings"  required />
        <input type="submit" value="add recipe" />
      </form>
    </div>
  )
}

export default RecipeForm;