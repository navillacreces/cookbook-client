import React, { Component } from 'react'
import RecipeContext from './RecipeContext'
import ValidationError from './ValidationError'
import config from '../config';

export default class AddRecipe extends Component {

  static contextType = RecipeContext; 

  static defaultProps = {
    history: {
      push: () => { }
    },
  }

  constructor(props){
    super(props)
    this.state = {

          name: {
            value: '',
            touched: false
        },
          servings:{
            value: '',
            touched: false
        },
          cooktime:{
            value: '',
            touched: false
          },
          instructions:{
            value: '',
            touched: false
          },
          ingredients:{
            value: '',
            touched: false
          }     
    }
  }

  goBack = (event) =>{
    
    this.props.history.push('/');

  }

  onSubmit = (event) =>{

    event.preventDefault();

    const name = event.target.name.value;
    const servings = event.target.servings.value;
    const cooktime = event.target.cooktime.value;
    const ingredients = event.target.ingredients.value;
    const instructions = event.target.instructions.value;

    const newRecipe = {
      name : name,
      servings : servings,
      cooktime: cooktime,
      ingredients: ingredients,
      instructions: instructions
    }
   
   const options = {
    method: 'POST',
    body: JSON.stringify(newRecipe),
    headers:{
      "Content-Type": "application/json" 
     }
    };

    fetch(`${config.API_ENDPOINT}/recipes`,options)
        .then(res =>{
            if(!res.ok){
                throw new Error('Something went wrong, please try again later');
            }
            
            return res.json();
        })
        .then(data =>{
            this.context.handleRecipeAdd(data);
            this.props.history.push('/');
        })
        .catch(err =>{

          console.log(err);
            this.setState({
                
                error: err.message
            });
        });
  }

  

  updateName(name){
    this.setState({
       name:{
         value: name,
         touched: true
       }
    })
  }

  updateIngredients(ingredients){
    this.setState({
      ingredients:{
        value: ingredients,
        touched: true
      }
    })
  }

  updateInstructions(instructions){
    this.setState({
      instructions:{
        value: instructions,
        touched: true 
      }
    })
  }



  validateIngredients(){

    const ingredients = this.state.ingredients.value.trim();

    if (ingredients.length === 0){
      return 'recipes need ingredients!'
    } else if (ingredients.length < 4){
      return 'please complete the ingredients'
    }

  }

  validateInstructions(){

    const instructions = this.state.instructions.value.trim();

    if (instructions.length === 0){
      return 'recipes need instructions!'
    } else if (instructions.length < 5){
      return 'please complete instructions'
    }

  }

  validateName(){

    const name = this.state.name.value.trim();

    if(name.length === 0){
        return 'name is required'
    } else if (name.length < 3){
        return 'name must be longer than 3 characters'
    }
  }

    render() {

      const nameError = this.validateName()
      const instructionsError = this.validateInstructions()
      const ingredientsError = this.validateIngredients()


        return (
            <>
              <header>
                <h1>Full Stack Cookbook</h1>
                <h3>Let's add a recipe</h3>
              </header>
              {this.state.name.touched && <ValidationError className="add-recipe-error" message={nameError} />}
              {this.state.ingredients.touched && <ValidationError className="ingredients-recipe-error" message={ingredientsError} />}
              {this.state.instructions.touched && <ValidationError className="instructions-recipe-error" message={instructionsError} />}

          <div className="form-container">

                <form className="recipe-form" onSubmit={this.onSubmit}>
            <div className="recipe-name">
                <label htmlFor="recipe-name">Recipe name: </label>
            <input
            placeholder="Recipe"
            type="text"
            name="name"
            id="name"
            onChange={ e => this.updateName(e.target.value)} 
            />
            
            </div>
           
            <div className="recipe-servings">
                <label htmlFor="servings">Servings: </label>
                <select name='servings'>
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
           
            <div className="recipe-cooktime">
          <label htmlFor="cook-time">Cook time: </label>

          <select name='cooktime'>
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
        
        <div className="recipe-ingredients">
          <label htmlFor="username">Ingredients: </label>
          <textarea 
            type="text" 
            name="ingredients" 
            id="Ingredients"
            onChange={ e => this.updateIngredients(e.target.value)} />
           
        </div>
        
        <div>
          <label htmlFor="instructions">Instructions: </label>
          <textarea 
            type="text"
            name="instructions"
            id="instructions"
            onChange={ e => this.updateInstructions(e.target.value)} />
           
        </div>
        <div className="button-container">
        <button type="submit" className="bttn add-recipe-bttn" disabled={this.validateInstructions()}>Add</button>
        <button type="button" className="bttn back-bttn" onClick={(e) => this.goBack(e)}>Back </button>
        </div>
      </form>
      </div>
            </>
        )
    }
}
