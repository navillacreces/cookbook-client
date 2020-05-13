import React, { Component } from 'react'

import Recipe from './Recipe'


export default class RecipeList extends Component {

    render(){
        return(
            <div>
                <button>Add Recipe</button>
                {this.props.recipes.map(recipe =>{
                  return  <Recipe key={recipe.id} {...recipe} ></Recipe>
                })}
            </div>
        )
    }


    
}
