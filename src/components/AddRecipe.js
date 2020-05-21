import React, { Component } from 'react'
import RecipeContext from './RecipeContext'

export default class AddRecipe extends Component {

  static contextType = RecipeContext; 


    render() {
        return (
            <div>
                 <header>
        <h3>Let's add a new recipe!</h3>
      </header>
      <form className="recipe-form" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="recipe-name">Recipe name: </label>
          <input
            placeholder="Recipe"
            type="text"
            name="recipe"
            id="recipe-name"
          />
        </div>
        <div>
          <label htmlFor="servings">Servings: </label>
          <input placeholder="servings" type="text" name="servings" id="servings" />
        </div>
        <div>
          <label htmlFor="cook-time">Cook time: </label>
          <input
            type="text"
            name="cook"
            id="cook-time"
            placeholder="Cook Time"
          />
        </div>
        <div>
          <label htmlFor="username">Ingredients: </label>
          <textarea type="text" name="ingredients" id="Ingredients" />
        </div>
        <div>
          <label htmlFor="instructions">Instructions: </label>
          <textarea name="instructions" id="instructions" />
        </div>
        <button type="submit">Add</button>
      </form>
            </div>
        )
    }
}
