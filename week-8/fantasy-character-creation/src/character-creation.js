"use strict";

/*
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For callbacks" comment.
 * 3. Uncomment the 'module.exports' line under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For promises" comment.
 * 3. Uncomment the 'module.exports' line under the "For promises" comment.
 */

// For callbacks:
/*
const fs = require('fs');

function createCharacter(character, callback) {
  // TODO: Implement this function
}

function getCharacters(callback) {
  // TODO: Implement this function
}
*/

// For promises:

const fs = require('fs').promises;

async function createCharacter(character) {
  try {
    const data = await fs.readFile(charactersFile, 'utf8');
    const characters = JSON.parse(data);
    characters.push(character);
    await fs.writeFile(charactersFile, JSON.stringify(characters, null, 2));
  } catch (error) {
    console.error('Error creating character:', error);
  }
}

async function getCharacters() {
  try {
    const data = await fs.readFile(charactersFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error getting characters:', error);
    return [];
  }
}


// Uncomment the appropriate exports depending on whether you're using callbacks or promises:

// module.exports = { createCharacter, getCharacters }; // For callbacks
module.exports = { createCharacter, getCharacters };