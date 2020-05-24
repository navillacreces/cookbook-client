import React from 'react';
import RecipeList from './RecipeList'
import '../css/app.css'
//import {v4 as uuidv4} from 'uuid'
import AddRecipe from './AddRecipe'
import {Route} from 'react-router-dom';
//import Recipe from './Recipe';
import RecipeContext from './RecipeContext';
//import Landing from './Landing';
//import CreateUser from './CreateUser';
//import config from '../config'




export default class App extends React.Component{


  constructor(props){
    super(props)
    this.state = {
      recipes: [],
      error: ''
    }
  }
  

  handleRecipeAdd = (newRecipe) =>{

    this.setState({
      recipes: [newRecipe,...this.state.recipes]
    })
  }

  handleRecipeDelete = (id) =>{

    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type' : 'application/json'
      }
    }

      fetch(`http://localhost:8000/recipes/${id}`,options)
        .then(res =>{
          if(!res.ok){
            throw new Error('Something went wrong, please try again later');
          }
          return res.json()
        })
        .then(res =>{
          console.log('Deleted:', res.message)
        })
        .catch(err => console.log(err))
    
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
      <Route exact path ='/' component={RecipeList} />
      <Route path='/add' component={AddRecipe}/>
      {/*<Route path="/createUser" component={CreateUser} />*/}
      {/*<Route path="/list" component={RecipeList} />*/}
      </RecipeContext.Provider>
      
    )
  }
  
}



