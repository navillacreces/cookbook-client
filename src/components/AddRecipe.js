import React, { Component } from 'react'
import RecipeContext from './RecipeContext'
import ValidationError from './ValidationError'

export default class AddRecipe extends Component {

  static contextType = RecipeContext; 

  constructor(props){
    super(props)
    this.state = {
      
        recipe : {
          name: '',
          servings: '',
          cooktime: '',
          instructions: '',
          ingredients: '',
          touched: false
        }
      
    }
  }
  

  updateName(name){
    this.setState({
        recipe:{name:name,touched:true}
    })
  }

  validateName(){

    const name = this.state.recipe.name.trim();

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
                <form className="recipe-form" onSubmit={this.handleAddRecipe}>
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
                <select name='servings-select'>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                  <option value='10'>10</option>
                  <option value='11'>11</option>
                  <option value='12'>12</option>
                </select>
            </div>
            <br />
            <div>
          <label htmlFor="cook-time">Cook time: </label>

          <select >
                  <option value='0:15'>:15</option>
                  <option value=':30'>:30</option>
                  <option value=':45'>:45</option>
                  <option value='1:00'>1:00</option>
                  <option value='1:15'>1:15</option>
                  <option value='1:30' >1:30</option>
                  <option value='1:45'>1:45</option>
                  <option value='2:00'>2:00</option>
                  <option value='2:15'>2:15</option>
                  <option value='2:30'>2:30</option>
                  <option value='2:45'>2:45</option>
                  <option value='3:00'>3:00</option>
                </select>
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
