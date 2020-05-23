import React from 'react';
import RecipeList from './RecipeList'
import '../css/app.css'
import {v4 as uuidv4} from 'uuid'
import AddRecipe from './AddRecipe'
import {Route} from 'react-router-dom';
//import Recipe from './Recipe';
import RecipeContext from './RecipeContext';
//import Landing from './Landing';
//import CreateUser from './CreateUser';
import config from '../config'




export default class App extends React.Component{


  constructor(props){
    super(props)
    this.state = {
      recipes: [],
      error: ''
    }
  }
  

  handleRecipeAdd = (event) =>{

    const name = event.target.recipe.value;
    const cookTime = event.target.cook.value;
    //const ingredients = event.target.ingredients.value;
    const instructions = event.target.instructions.value;
    const servings = event.target.instructions.value;


    const newRecipe = {
      id : uuidv4(),
      name: name,
      cookTime: cookTime,
      servings: servings,
      instructions: instructions,
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
      
      const options = {
        method: 'GET',
        headers:{
          "Content-Type": "application/json" 
        }
      }

      

      fetch(`http://localhost:8000/recipes`,options)
        .then(res =>{
          if (!res.ok){
              throw new Error('Something went wrong, please try again later');
          }

            return res.json()
        })
        .then(recipes =>{
          this.setState({
            recipes:recipes
          })
        })
          .catch(err =>{
            this.setState({
                error: err.message
            });
        });
        



  }

  render(){
    
  const value = {
      recipes: this.state.recipes,
      handleRecipeDelete: this.handleRecipeDelete,
      handleRecipeAdd: this.handleRecipeAdd
    }
    
    return (
      <RecipeContext.Provider value={value}>
      <Route exact path ="/" component={RecipeList} />
      <Route path="/add" component={AddRecipe}/>
      {/*<Route path="/createUser" component={CreateUser} />*/}
      {/*<Route path="/list" component={RecipeList} />*/}
      </RecipeContext.Provider>
      
    )
  }
  
}


