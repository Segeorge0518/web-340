/* Author: Sara George
Date: 12/21/2024

Filename: game-characters.js */

const { spawn } = require("child_process");
const { join } = require("path");
const dataFile = join(__dirname, "game-characters-data.js");

class GameCharacters {
  constructor(scriptPath = dataFile) {
    this.scriptPath = scriptPath;
  }

  getCharacters(callback) {
    const child = spawn("node", [this.scriptPath]);
    child.stdout.on("data", (data) => {
      const charactersData = JSON.parse(data.toString());
      callback(charactersData, null);
    });
    child.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
      callback(null, new Error(data.toString()));
    });
    child.on("error", (error) => {
      console.error(`spawn error: ${error}`);
      callback(null, error);
    });
  }
}

module.exports = { GameCharacters };