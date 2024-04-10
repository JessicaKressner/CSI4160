const area = document.querySelector("#area").selectedOptions[0].value;
console.log(area);
const url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + area;
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
          `;
  });
}
