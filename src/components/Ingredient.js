import React, { Component } from 'react'

export default class Ingredient extends Component {
    render() {

        const {
            name, amount
        } = this.props
        return (
            <div>
                <span>{name}</span>
                {' '}
                <span>{amount}</span>
            </div>
        )
    }
}
