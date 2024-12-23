/* Author: Sara George
Date: 12/21/2024

Filename: game-characters.spec.js */ 
const { GameCharacters } = require("../src/game-characters");

describe("GameCharacters", () => {
  let gameCharacters;

  beforeEach(() => {
    gameCharacters = new GameCharacters();
  });

  //test to see if character data can be retrieved from game-characters-data.js by the game-characters module.
  test("should return game characters data", (done) => {
    gameCharacters.getCharacters((data, error) => {
      expect(error).toBeNull();
      expect(data).toEqual([
        { Class: "Warrior", Gender: "Male", FunFact: "Loves to battle dragons." },
        { Class: "Mage", Gender: "Female", FunFact: "Can control the elements." },
        { Class: "Rogue", Gender: "Other", FunFact: "Expert in stealth." }
      ]);
      done();
    });
  });

  //test for whether or not the game-characters.js has proper error handling withing the model.
  test("should handle an error when the game characters data script is not found", (done) => {
    const invalidGameCharacters = new GameCharacters("invalid-path.js");
    invalidGameCharacters.getCharacters((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });

  
  //test to see if error message can be retrieved from failing-script.js by the game-characters module.
  test("should handle an error when the game characters data script fails", (done) => {
    const failingGameCharacters = new GameCharacters("failing-script.js");
    failingGameCharacters.getCharacters((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });
});