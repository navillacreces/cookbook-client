import React from 'react';

const RecipeContext = React.createContext({
    recipes: [],
    handleRecipeAdd: () => {},
    handleRecipeDelete: () => {}
})


export default RecipeContext;