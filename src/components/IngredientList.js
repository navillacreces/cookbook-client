import React, { Component } from 'react'

import Ingredient from './Ingredient'


export default class IngredientList extends Component {


    render() {

        const ingredients = this.props.ingredients

        const ingredientElement = ingredients.map(ingredient =>{
            return <Ingredient key={ingredient.id} {...ingredient}/>
        })

        return (
            <div className="ingredient_grid">
                {ingredientElement}
            </div>
        )
    }
}
