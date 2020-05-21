import React, { Component } from 'react'
import RecipeContext from './RecipeContext'
import ValidationError from './ValidationError'

export default class AddRecipe extends Component {

  static contextType = RecipeContext; 

  constructor(props){
    super(props)
    this.state = {
      
        recipe : {
          value: '',
          touched: false
        }
      
    }
  }

  updateName(name){
    this.setState({
        recipe:{value:name,touched:true}
    })
  }

  validateName(){

    const name = this.state.recipe.value.trim();

    if(name.length === 0){
        return 'name is required'
    } else if (name.length < 3){
        return 'name must be longer than 3 characters'
    }
  }

    render() {

      const nameError = this.validateName()


        return (
            <>
              <header>
                <h1>Full Stack Cookbook</h1>
                <h3>Let's add a recipe</h3>
              </header>
                <form className="recipe-form" onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="recipe-name">Recipe name: </label>
            <input
            placeholder="Recipe"
            type="text"
            name="recipe"
            id="recipe-name"
            onChange={ e => this.updateName(e.target.value)} 
            />
            {this.state.recipe.touched && <ValidationError className="add-recipe-error" message={nameError} />}
            </div>
            <br />
            <div>
                <label htmlFor="servings">Servings: </label>
                <input placeholder="Servings" type="text" name="servings" id="servings" />
            </div>
            <br />
            <div>
          <label htmlFor="cook-time">Cook time: </label>
          <input
            type="text"
            name="cook"
            id="cook-time"
            placeholder="Cook Time"
          />
        </div>
        <br />
        <div>
          <label htmlFor="username">Ingredients: </label>
          <textarea type="text" name="ingredients" id="Ingredients" />
        </div>
        <br />
        <div>
          <label htmlFor="instructions">Instructions: </label>
          <textarea name="instructions" id="instructions" />
        </div>
        <br />
        <button type="submit" className="bttn add-recipe-bttn">Add</button>
      </form>
            </>
        )
    }
}
