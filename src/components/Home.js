import React,{useContext} from 'react'
import {RecipeContext} from '../contexts/RecipeContext';
const Home = () => {
    const {recipes} =  useContext(RecipeContext);
    return (
        <div>
            {recipes.length ? <h2>Recipes</h2> : <h3>Sorry not recipes yet :( ...</h3>}
        </div>
    )
}

export default Home;