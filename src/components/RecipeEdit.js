import React, { Component } from 'react'

export default class RecipeEdit extends Component {
    render() {
        return (
            <form className="recipe-form" onSubmit={this.handle}>
            <div>
              <label for="recipe-name">Recipe name: </label>
              <input
                placeholder="Recipe"
                type="text"
                name="recipe"
                id="recipe-name"
              />
            </div>
            <div>
              <label for="servings">Servings: </label>
              <input placeholder="servings" type="text" name="servings" id="servings" />
            </div>
            <div>
              <label for="cook-time">Cook time: </label>
              <input
                type="text"
                name="cook"
                id="cook-time"
                placeholder="Cook Time"
              />
            </div>
            <div>
              <label for="username">Ingredients: </label>
              <input type="text" name="ingredients" id="Ingredients" />
            </div>
            <div>
              <label for="instructions">Instructions: </label>
              <input name="instructions" id="instructions" />
            </div>
            <button type="submit">Add</button>
          </form>
        )
    }
}
