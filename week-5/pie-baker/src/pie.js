/**
 * Author: Sara George
 * Date:  11/23/2024
 * File Name: pie.js
 * Description:
 */
"use strict";

function bakePie(pieType, ingredients) {
  const requiredIngredients = ['flour', 'sugar', 'butter'];
  for (const ingredient of requiredIngredients) {
    if (!ingredients.includes (ingredient)) {
      console.warn (`Missing essential ingredient: ${ingredient}`);
      process.exit(1);
    }
  }
  return 'You have successfully baked a ${pieType} pie!';
}

module.exports = { bakePie };