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
            <p class="mealId" id="id"> Meal Id: ${meals.idMeal} </p>
            <button id="info">
              <a>More info </a>
            </button>
            </div>
            <div id="moreInfo"> </div>
            </div>
           `;
  });
}

function getInfo() {
  const id = `${meals.idMeal}`;
  console.log(id);

  let url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => Cards(data.meals));

  moreInfo.forEach((meals) => {
    innerHTML =
      innerHTML +
      `<div class="card">
           <div class="recipeInfo">
                    <p class="recipeName"> ${meals.strMeal} </p>
            <img src="${meals.strMealThumb}" class="recipeImage"></img>
            <p class="mealId" id="id"> Meal Id: ${meals.idMeal} </p>
           `;
  });
}
