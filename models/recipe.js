const mongoose = require('mongoose');

// Define the schema for the recipe
const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    cookingTime: {
        type: Number,  // Or you can use `Number` if you want the cooking time as minutes
        required: false
    }
});

// Create and export the Recipe model
const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
