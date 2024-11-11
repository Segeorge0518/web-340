// src/index.js
"use strict";

// import the getPlants and addPlant functions from the plant-list.js file
const { getPlants, addPlant } = require("./plant-list");

// function that displays the plants array to the console
function displayPlants() {
 const plants = getPlants(); // call the getPlants function
 
 // loop over the plants array and output the results
 for (let i = 0; i < plants.length; i++) {
    console.log("Plant: " + plants[i].name + "\nType: " + plants[i].type);
    console.log(""); // new line
 }
}

// main function for the program;
function main() {
 console.log("--Plant List--");
 displayPlants(); // call the displayPlants function
 // display a message to the console indicating we are adding a new plant
 console.log("Adding a new plant...");
 // add a new plant to the plants array
 addPlant("Lavender", "Herb");
 // display a message to the console displaying the new plants list
 console.log("\nPlant List");
 displayPlants(); // call the displayPlants function
}

main();