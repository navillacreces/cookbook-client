import React from 'react';
import RecipeList from './RecipeList'
import '../css/app.css'
import {v4 as uuidv4} from 'uuid'

import {Route} from 'react-router-dom';

const sampleRecipes = [
  {
    id: 1,
    name: "pasta and chicken",
    servings: 5,
    cookTime: "1:45",
    ingredients: [
      {
        id: 1,
        name: "chicken",
        amount: "16 oz"
      },
      {
        id: 2,
        name: "pasta",
        amount: "15 oz"
      }
    ],
    instructions:
      "1. Season your chicken.\n2. Put chicken in oven \n3. boil your pasta till tender\n4.mix\n5. Enjoy"
  },
  {
    id: 2,
    name: "latin chicken",
    servings: 3,
    cookTime: "2:35",
    ingredients: [
      {
        id: 1,
        name: "chicken",
        amount: "5 Lbs"
      },
      {
        id: 2,
        name: "adobo",
        amount: "1 can"
      }
    ],
    instructions: "1.season the chicken\n2. put chicken in oven\n3.eat the chicken"
  }
];



export default class App extends React.Component{


  constructor(props){
    super(props)
    this.state = {
      recipes: []
    }
  }

  
  

  handleRecipeAdd = () =>{

    const newRecipe = {
      id : uuidv4(),
      name: 'new',
      cookTime: '1:00',
      servings: 3,
      instructions: 'instruc',
      ingredients: [{id:uuidv4(),name:'name',amount:'one Tablespoon'}]

    }

    this.setState({
      recipes: [...this.state.recipes,newRecipe]
    })
  }

  handleRecipeDelete = id =>{
    console.log(id)
    this.setState({
      recipes : this.state.recipes.filter(recipe => recipe.id !== id)
    });
  }

  
  componentDidMount(){
    this.setState({
      recipes: sampleRecipes
    })
  }

  render(){
    
    const value = {
      recipes: this.state.recipes,
      handleRecipeDelete: this.handleRecipeDelete,
      handleRecipeAdd: this.handleRecipeAdd
    }
    
    return (
     
      <div className="App">
       <RecipeList 
          recipes={this.state.recipes}
          handleRecipeAdd={this.handleRecipeAdd}
          handleRecipeDelete={this.handleRecipeDelete} />
      </div>
      
      
    )
  }
  
}


