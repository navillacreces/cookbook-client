import React from 'react';
import RecipeList from './RecipeList'
import '../css/app.css'
import AddRecipe from './AddRecipe'
import {Route} from 'react-router-dom';
import RecipeContext from './RecipeContext';
import config from '../config'


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

      fetch(`${config.API_ENDPOINT}/recipes/${id}`,options)
        .then(res =>{
          if(!res.ok){
            throw new Error('Something went wrong, please try again later');
          }
         
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

      

      fetch(`${config.API_ENDPOINT}/recipes`,options)
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
      <footer>
        <div className='footer-container'>
        <a type='button' href="https://github.com/navillacreces/cookbook-client" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
      </footer>
      </RecipeContext.Provider>
      
    )
  }
  
}



