/**
 * Author: Sara George
 * Date: 11/01/2024
 * File Name: recipes.js
 * Description: Recipe file
*/

// Define the createRecipe function

function createRecipe(ingredients) {
  const recipe = ["ingredient1", " ingredient2"];
  return "Recipe created with ingredients: " + recipe.toString();
}

// Define the setTimer function
function setTimer(minutes) {  
  const durationInMilliseconds = minutes * 60000;

  return "Timer set for " + (minutes) + " minutes";

  setTimeout(() => {
    console.log("Timer has finished");
  }, durationMilliseconds);
}

setTimer(15);

// Define the quit function
function quit() {
  return "Program exited";
}


// TODO: Export the functions

module.exports = {
  createRecipe: createRecipe,
  setTimer: setTimer,
  quit:quit,
};
