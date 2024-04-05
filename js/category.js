const category = document.querySelector("#category").selectedOptions[0].value;
console.log(category);
const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category;
console.log(url);

fetch(url)
  .then((response) => response.json())
  .then((data) => Cards(data.meals));

function Cards(info) {
  const cards = document.querySelector("#recipeCards");
  console.log(info);
  info.forEach((meals) => {
    cards.innerHTML =
      cards.innerHTML +
      `<div class="card">
         <div class="recipeInfo">
                  <p class="recipeName"> ${meals.strMeal} </p>
          <img src="${meals.strMealThumb}" class="recipeImage"></img>
          <div class="recipeInfo">
          <p class="recipeCategory"> Category: ${meals.strCategory}</p>
          <p class="recipeArea"> Meal Area: ${meals.strArea}</p>
          <p class="recipeIngredients"> Ingredients:
          <ul>
          <li> ${meals.strIngredient1}: ${meals.strMeasure1} </li>
          <li> ${meals.strIngredient2}: ${meals.strMeasure2} </li>
          <li> ${meals.strIngredient3}: ${meals.strMeasure3} </li>
          <li> ${meals.strIngredient4}: ${meals.strMeasure4} <li>
          <li> ${meals.strIngredient5}: ${meals.strMeasure5} <li>
          <li> ${meals.strIngredient6}: ${meals.strMeasure6} <li>
          <li> ${meals.strIngredient7}: ${meals.strMeasure7} <li> 
          <li> ${meals.strIngredient8}: ${meals.strMeasure8} <li>
          <li> ${meals.strIngredient9}: ${meals.strMeasure9} <li>
          <li> ${meals.strIngredient10}: ${meals.strMeasure10} <li>
          <li> ${meals.strIngredient11}: ${meals.strMeasure11} <li>
          <li> ${meals.strIngredient12}: ${meals.strMeasure12} <li>
          <li> ${meals.strIngredient13}: ${meals.strMeasure13} <li>
          <li> ${meals.strIngredient14}: ${meals.strMeasure14} <li>
          <li> ${meals.strIngredient15}: ${meals.strMeasure15} <li>
          <li> ${meals.strIngredient16}: ${meals.strMeasure16} <li>
          <li> ${meals.strIngredient17}: ${meals.strMeasure17} <li>
          <li> ${meals.strIngredient18}: ${meals.strMeasure18} <li>
          <li> ${meals.strIngredient19}: ${meals.strMeasure19} <li>
          <li> ${meals.strIngredient20}: ${meals.strMeasure20} <li>
          </ul>
          </p>
          <p class="recipeInstructions"> Instructions: ${meals.strInstructions}</p>
          <p><a id="recipesource" href="${meals.strSource}">Source: ${meals.strSource}</a><p>
          </div>
          </div>`;
  });
}
