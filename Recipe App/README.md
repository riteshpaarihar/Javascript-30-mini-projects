# Recipe Finder

Recipe Finder is a web application that allows users to search for recipes using the Spoonacular API. Users can enter a query to search for recipes and view detailed information about each recipe.

## Features

- Search for recipes by keyword
- View detailed information about each recipe
- Display list of ingredients and instructions for each recipe

## Technologies Used

- HTML
- CSS
- JavaScript
- Spoonacular API

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/riteshpaarihar/recipe-app.git
   ```
2. Navigate to the project directory:cd recipe-app
3. Open index.html in your browser to run the application.

## Usage

1. Enter a query in the search bar and click "Search".
2. Browse the list of recipes displayed.
3. Click on a recipe to view detailed information, including ingredients and instructions.

## API Key

1. This project uses the Spoonacular API to fetch recipe data. You will need an API key to use the application. Follow these steps to get your API key:

2. Go to Spoonacular API and sign up for an account.
3. Navigate to the API section and generate an API key.
4. Replace YOUR_API_KEY in the script.js file with your actual API key:

const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=YOUR_API_KEY`);



Thank you for checking out the Recipe Finder! If you have any questions or feedback, feel free to reach out.