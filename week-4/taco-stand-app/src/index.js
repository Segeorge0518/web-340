/**
 * Author: Sara George
 * Date: 11/16/2024
 * File Name: index.js
 * Description:
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("../src/taco-stand");

const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// TODO: Set up event listeners for the tacoStand object
rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");

  // TODO: Handle the commands
});

console.log(`Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`);