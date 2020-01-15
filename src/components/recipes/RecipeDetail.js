import React from 'react'

const RecipeDetail = ({recipe}) => {
    const {title, ingredients, cookTime, servings} = recipe;
    return (
        <div className="Recipe-card">
            <h2 className="RecipeForm-full">{title}</h2>
            <p className="RecipeForm-full">{ingredients}</p>
            <span>&#128337; {cookTime}</span>
            <span>👥 {servings}</span>
        </div>
    )
}

export default RecipeDetail;
