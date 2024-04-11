// retrieve the selected category
const category = document.querySelector("#category").selectedOptions[0].value;
console.log(category);

// api call url with the selected category
const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category;
console.log(url);

// call the api with the fetch function
fetch(url)
  .then((response) => response.json())
  .then((data) => Cards(data.meals));

// displays the data from the api call in recipe cards
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
            </div>
            </div>
           `;
  });
}
