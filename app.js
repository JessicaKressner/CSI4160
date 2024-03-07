fetch("https://api.spoonacular.com/recipes/complexSearch")
  .then((response) => response.json())
  .then((recipes) => console.log(recipes));
