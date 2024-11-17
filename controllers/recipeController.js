const fs = require('fs');
const path = require('path');

// Path to the JSON file
const filePath = path.join(__dirname, '../data/recipes.json');

// Helper to read data from the file
const readData = () => {
    if (!fs.existsSync(filePath)) {
        return []; // Return an empty array if file doesn't exist
    }
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data || '[]'); // Parse JSON or return an empty array
};

// Helper to write data to the file
const writeData = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
};

// Create a Recipe
const createRecipe = (req, res) => {
    const { name, ingredients, instructions } = req.body;

    if (!name || !ingredients || !instructions || !cookingTime) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const recipes = readData();
    const newRecipe = {
        id: recipes.length + 1,
        name,
        ingredients,
        instructions
    };

    recipes.push(newRecipe);
    writeData(recipes);

    res.status(201).json(newRecipe); // Respond with the created recipe
};

// Get All Recipes
const getAllRecipes = (req, res) => {
    const recipes = readData();
    res.status(200).json(recipes); // Return all recipes as JSON
};

// Get a Recipe by ID
const getRecipeById = (req, res) => {
    const recipes = readData();
    const recipe = recipes.find((r) => r.id === parseInt(req.params.id));

    if (!recipe) {
        return res.status(404).json({ error: 'Recipe not found' });
    }

    res.status(200).json(recipe); // Respond with the found recipe
};

// Update a Recipe by ID
const updateRecipe = (req, res) => {
    const { id } = req.params;
    const { name, ingredients, instructions, cookingTime } = req.body;

    const recipes = readData();
    const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

    if (recipeIndex === -1) {
        return res.status(404).json({ error: 'Recipe not found' });
    }

    const updatedRecipe = {
        ...recipes[recipeIndex],
        name,
        ingredients,
        instructions
    };

    recipes[recipeIndex] = updatedRecipe;
    writeData(recipes);

    res.status(200).json(updatedRecipe); // Respond with the updated recipe
};

// Delete a Recipe by ID
const deleteRecipe = (req, res) => {
    const { id } = req.params;

    const recipes = readData();
    const filteredRecipes = recipes.filter((r) => r.id !== parseInt(id));

    if (recipes.length === filteredRecipes.length) {
        return res.status(404).json({ error: 'Recipe not found' });
    }

    writeData(filteredRecipes);
    res.status(200).json({ message: 'Recipe deleted successfully' });
};

module.exports = {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe,
};
