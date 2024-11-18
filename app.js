const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const connectDB = require('./config/database');
const recipeRoutes = require('./routes/recipeRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the directory for EJS templates
app.set('views', path.join(__dirname, 'views'));

// Database Connection
connectDB();

// Routes for API
app.use('/api/recipes', recipeRoutes);

// Route to render the home page with recipes
app.get('/', async (req, res) => {
    try {
        const filePath = path.join(__dirname, 'data', 'recipes.json');

        // Read data from recipes.json
        const data = fs.readFileSync(filePath, 'utf8');
        const recipes = JSON.parse(data);

        // Render the index.ejs template with data
        res.render('index', { title: 'Recipe List', recipes });
    } catch (error) {
        console.error("Error fetching recipes:", error.message);
        res.status(500).send("Server Error");
    }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
