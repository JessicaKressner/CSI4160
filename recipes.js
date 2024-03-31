fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  .then((response) => response.json())
  .then((data) => Cards(data.meals));

function Cards(info) {
  const cards = document.querySelector("#cards");
  console.log(info);
  info.forEach((meals) => {
    cards.innerHTML =
      cards.innerHTML +
      `<div class="card">
                <p class="recipeName"> ${meals.strMeal} </p>
        <img src="${meals.strMealThumb}" class="recipeImage"></img>
        <p class="recipeCategory"> Category: ${meals.strCategory}</p>
        <p class="recipeArea"> Meal Area: ${meals.strArea}</p>
        <p class="recipeInstructions"> ${meals.strInstructions}</p>
        <a class="recipeSource" href="${meals.strSource}></a>
        </div>`;
  });
}
