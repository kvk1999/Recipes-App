Here’s a complete `README.md` file for your recipes application, covering the features you mentioned:

---

# Recipes Application

This is a simple RESTful API for managing recipes, built using Node.js, Express, and EJS. It includes routes to create, retrieve, update, and delete recipes. Additionally, it dynamically renders a list of recipes on the homepage using data from a JSON file.

---

## Features

- **Create a Recipe**: Add a new recipe to the database or JSON file.
- **Get All Recipes**: Retrieve all recipes in the database or JSON file.
- **Get Recipe by ID**: Retrieve a specific recipe using its ID.
- **Update Recipe**: Modify the details of an existing recipe by its ID.
- **Delete Recipe**: Remove a recipe by its ID.
- **JSON Output**: Recipe data is stored in a `recipes.json` file and dynamically rendered on the homepage.

---

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for creating routes and middleware.
- **EJS**: Templating engine for rendering HTML.
- **Body-Parser**: Middleware for parsing request bodies.
- **CORS**: Middleware for handling Cross-Origin Resource Sharing.
- **File System (fs)**: For reading and writing JSON files.
- **MongoDB (Optional)**: Database for storing recipe data (if using database storage).

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/recipes-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd recipes-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add your environment variables:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

---

## API Endpoints

### 1. **Create a Recipe**
   **POST** `/api/recipes`

   **Request Body:**
   ```json
   {
    "name": "Pancakes",
        "ingredients": ["flour", "milk", "eggs", "sugar", "butter"],
        "instructions": "Mix ingredients and cook in a pan."
   }
   ```

   **Response:**
   ```json
   {
  "_id": {
    "$oid": "6738e24c1ae71dc89c807bda"
  },
  "name": "Pancakes",
  "ingredients": [
    "flour",
    "milk",
    "eggs",
    "sugar",
    "butter"
  ],
  "instructions": "Mix ingredients and cook in a pan.",
  "__v": 0
   }
   ```

---

### 2. **Get All Recipes**
   **GET** `/api/recipes`

   **Response:**
   ```json
   [
       {
          "name": "Pancakes",
        "ingredients": ["flour", "milk", "eggs", "sugar", "butter"],
        "instructions": "Mix ingredients and cook in a pan."
       },
       {
          "name": "Chocolate Chip Cookies",
        "ingredients": ["flour", "sugar", "butter", "chocolate chips", "eggs"],
        "instructions": "Mix and bake at 350°F for 10 minutes."
       }
   ]
   ```

---

### 3. **Retrieve a Recipe by ID**
   **GET** `/api/recipes/:id`

   **Response:**
   ```json
   {
       "id": "6738e4831ae71dc89c807bf1",
       "name": "Baked Ziti",
        "ingredients": ["ziti pasta", "marinara sauce", "ricotta cheese", "mozzarella", "parmesan"],
        "instructions": "Layer pasta with cheese and sauce, then bake at 375°F for 20 minutes."
   }
   ```

---

### 4. **Update a Recipe**
   **PUT** `/api/recipes/:id`

   **Request Body:**
   ```json
   {
       "name": "BBQ Ribs",
       "ingredients": ["Salt", "Pepper"]
   }
   ```

   **Response:**
   ```json
   {
       "message": "Recipe updated successfully",
       "recipe": {
           "id": "",
           "name": "BBQ Ribs",
           "ingredients": ["Salt", "Pepper"]
       }
   }
   ```

---

### 5. **Delete a Recipe**
   **DELETE** `/api/recipes/:id`

   **Response:**
   ```json
   {
       "message": "Recipe deleted successfully"
   }
   ```

---

## Viewing Recipes in JSON Format

- Recipe data is stored in a file named `recipes.json` in the `data/` directory. This file can be edited or read dynamically.
- On the homepage (`/`), recipes from `recipes.json` are displayed dynamically using EJS templates.

---

## How to Run the Application

1. Start the server:
   ```bash
   node app.js
   ```

2. Open the application in your browser:

   - **Homepage:** [http://localhost:5000](http://localhost:5000)
   - **API Endpoints:** [http://localhost:5000/api/recipes](http://localhost:5000/api/recipes)

3. Modify `recipes.json` in the `data/` directory to update recipes directly.

---

## Folder Structure

```
recipes-app/
│
├── data/
│   └── recipes.json        # JSON file for storing recipe data
│
├── views/
│   └── index.ejs           # EJS template for rendering recipes
│
├── routes/
│   └── recipeRoutes.js     # Routes for API endpoints
│
├── controllers/
│   └── recipeController.js # Logic for handling API requests
│
├── config/
│   └── database.js         # MongoDB connection (if applicable)
│
├── app.js                  # Main application file
├── package.json            # Project dependencies
├── .env                    # Environment variables
└── README.md               # Project documentation
```

[GET POSTMAN DOCUMENTATION URL:](https://documenter.getpostman.com/view/38564233/2sAYBPkZKC)