import React, { Component } from 'react'
import Recipe from './Recipe'
import {Link} from 'react-router-dom';

import RecipeContext from './RecipeContext'

export default class RecipeList extends Component {

    static contextType = RecipeContext;

    render(){

        const { handleRecipeDelete} = this.context
        
        return(<>
            <section>
                <h1>Full Stack Cookbook</h1>
            </section>
            <div className="recipe-list">
                <div className="add-button-container">
                   <Link to='/add'> <button className="bttn add-bttn">Add a recipe</button></Link>
                </div>
                <div>
                {this.context.recipes.map(recipe =>{
                  return  <Recipe key={recipe.id} handleRecipeDelete={handleRecipeDelete} {...recipe}></Recipe>
                })}
                </div>
            </div>
            </>
        )
    }


    
}

