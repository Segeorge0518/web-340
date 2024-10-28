/**
 * Author: Sara George
 * Date: 10/27/2024
 * File Name: weight-converter.js
 * Description: pounds to kilogram converter
*/

"use strict";

const readline = require("readline"); // imports the readline module

function convertLbsToKgs() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
});

//Asks for the weight in pounds
rl.question("Enter the weight in Pounds: ", function (weight) {
    if (isNaN(weight)) {
        console.error("Input must be a number."); // display error message
        process.exit(1); // exit with a non-zero error code
}

//converts pounds to kilograms
const kgs = (weight / 2.2046).toFixed(2); 

// displays the conversion of pounds to kilograms
console.log(
    `${weight}lbs is equivalent to ${kgs}kgs.`
);

rl.close(); // closes the readline object
});
}

convertLbsToKgs();