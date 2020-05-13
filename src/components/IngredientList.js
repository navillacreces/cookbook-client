import React, { Component } from 'react'
import ingredient from './Ingredient'
import Ingredient from './Ingredient'


export default class IngredientList extends Component {


    render() {

        const ingredients = this.props.ingredients

        const ingredientElement = ingredients.map(ingredient =>{
            return <Ingredient key={ingredient.id} {...ingredient}/>
        })

        return (
            <div>
                {ingredientElement}
            </div>
        )
    }
}
