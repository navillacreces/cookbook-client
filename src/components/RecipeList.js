import React, { Component } from 'react'
import Recipe from './Recipe'

export default class RecipeList extends Component {




    render(){

        const {recipes, handleRecipeDelete} = this.props
        return(
            <div className="recipe-list">
                <div className="add-button-container">
                    <button className="bttn add-bttn">Add a recipe</button>
                </div>
                <div>
                {this.props.recipes.map(recipe =>{
                  return  <Recipe key={recipe.id} handleRecipeDelete={handleRecipeDelete} {...recipe}></Recipe>
                })}
                </div>
            </div>
        )
    }


    
}

