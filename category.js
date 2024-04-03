const category = getOption();
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
  .then((response) => response.json())
  .then((data) => Cards(data.meals));

function Cards(info) {
  const cards = document.querySelector("#cards");
  console.log(info);
  // for (i = 0; i < meals.length; i++) {
  // var mealNum = meals[i];
  //for (l = 0; l < mealNum.length; l++) {
  info.forEach((meals) => {
    cards.innerHTML =
      cards.innerHTML +
      `<div class="card">
                <p class="recipeName"> ${meals[0][strMeal]} </p>
                <img src="${meals[0][strMealImage]}" class="recipeImage"></img>
                </div>`;
  });
  //}
  //}
}

function getOption() {
  selectElement = document.querySelector("#category");
  value = selectElement.value;
  document.querySelector(".value").textContent = value;
}
