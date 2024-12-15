"use strict";

/**
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 */

// For callbacks:
// const fs = require('fs');

// For promises:
const fs = require('fs').promises;

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;

  beforeEach(() => {
    jest.resetModules();
    jest.mock('fs').promises;
    ({ createCharacter, getCharacters } = require('../src/character-creation'));
  });


  test('createCharacter writes a new character to the file', async () => {
    const character = { class: 'Warrior', gender: 'Male', funFact: 'Loves dragons' };
    await createCharacter(character);
    const characters = await getCharacters();
    expect(characters).toContainEqual(character);
  });

  test('getCharacters reads characters from the file', async () => {
    const characters = await getCharacters();
    expect(Array.isArray(characters)).toBe(true);
  });

  test('createCharacter handles errors when writing to the file', async () => {
    jest.spyOn(fs, 'writeFile').mockImplementationOnce(() => {
      throw new Error('Write error');
    });
    await expect(createCharacter({ class: 'Mage', gender: 'Female', funFact: 'Can fly' })).resolves.toBeUndefined();
  });
});