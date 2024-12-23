/* Author: Sara George
Date: 12/21/2024

Filename: game-characters-data.js */

// The data array to be retrieved by the game-character.js module.

const characters = [
    { Class: "Warrior", Gender: "Male", FunFact: "Loves to battle dragons." },
    { Class: "Mage", Gender: "Female", FunFact: "Can control the elements." },
    { Class: "Rogue", Gender: "Other", FunFact: "Expert in stealth." }
  ];
  
  //turns the array into a string.
  console.log(JSON.stringify(characters));