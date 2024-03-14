// import statements
import $ from "jquery";

// API key
const apiKey = b6d5b4dac4414fb09698cc9810300e29;
// cusine input
const cusine = document.getElementById("cusine");
// dish input
const dish = document.getElementById("dish");
// ingredients input
const ingredients = document.getElementById("ingredients");
$(document).ready(function () {
  $("#recipes").click(function () {
    const cusine = $("#cusine").val();
    const dish = $("#dish").val();
    const ingredients = $("ingredients").val();

    // api url
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cusine=${cusine}&query=${dish}&ingredients=${ingredients}`;
    // request
    request.onreadystatechange = function () {
      if (this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
    const request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.send();
  });
});

// fetch data
//fetch(url)
//.then((response) => response.json())
//.then((data) => (recipes.textContext = data));
