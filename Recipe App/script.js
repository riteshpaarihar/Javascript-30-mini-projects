async function searchRecipes() {
    const query = document.getElementById('search').value;
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=e52f9fbf74b745cf862d2a7cf6bbee00`);
    const data = await response.json();
    displayRecipes(data.results);
}

function displayRecipes(recipes) {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerText = recipe.title;
        recipeCard.onclick = () => displayRecipeDetail(recipe);
        recipeList.appendChild(recipeCard);
    });
}

function displayRecipeDetail(recipe) {
    const recipeDetail = document.getElementById('recipe-detail');
    recipeDetail.style.display = 'block';
    recipeDetail.innerHTML = `
      <h3>${recipe.title}</h3>
      <img src="${recipe.image}" alt="${recipe.title}">
      <p><strong>Ingredients:</strong></p>
      <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
      <p><strong>Instructions:</strong></p>
      <p>${recipe.instructions}</p>
      <button onclick="saveFavorite('${recipe.title}')">Save to Favorites</button>
    `;
  }
  
  function saveFavorite(title) {
    const favoriteList = document.getElementById('favorite-list');
    const favoriteItem = document.createElement('div');
    favoriteItem.classList.add('recipe-card');
    favoriteItem.innerText = title;
    favoriteList.appendChild(favoriteItem);
  }