import React, { Component } from 'react'
//import IngredientList from './IngredientList';
//import RecipeContext from './App'


export default class Recipe extends Component {

    

    render() {

        
       const {
           id,
           name,
           cooktime,
           instructions,
           servings,
           ingredients,
           handleRecipeDelete
           
       } = this.props;


        return (
            <div className="recipe">
      <div className="recipe_header">
        <h2 className="recipe_title">{name}</h2>
        <div>
         {/* <button className="bttn edit-bttn mr-1">Edit</button> */}
          <button className="bttn delete-bttn mr-1" onClick={() => handleRecipeDelete(id)}>Delete</button>
        </div>
      </div>
      <div className="recipe_row">
        <span className="recipe_label">Cook Time:</span>
        <span className="recipe_value">{cooktime}</span>
      </div>
      <div className="recipe_row">
        <span className="recipe_label">Servings:</span>
        <span className="recipe_value">{servings}</span>
      </div>
      <div className="recipe_row">
        <span className="recipe_label">Instructions:</span>
        <div className="recipe_value indented recipe_instructions">{instructions}</div>
      </div>
      <div className="recipe_row">
          <span className="recipe_label">Ingredients:</span>
          <div className="recipe_value indented">
            {/*  <IngredientList ingredients={ingredients} /> */}
            {ingredients}
          </div>
      </div>
    </div>
        )
    }
}
