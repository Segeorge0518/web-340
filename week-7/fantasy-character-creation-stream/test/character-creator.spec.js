const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator', () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    const characterData = JSON.stringify({ class: 'Warrior', gender: 'Male', funFact: 'Loves to fish' });
    characterCreator.write(characterData);
    characterCreator.on('data', (data) => {
      expect(data.toString()).toBe('Character Class: Warrior, Gender: Male, Fun Fact: Loves to fish');
      done();
    });
  });

  test("should emit 'error' when invalid data is written", (done) => {
    characterCreator.on('error', (err) => {
      expect(err.message).toBe('Empty string not allowed');
      done();
    });
    characterCreator.write('');
  });

  test("should transform data correctly when written to", (done) => {
    const characterData = JSON.stringify({ class: 'Mage', gender: 'Female', funFact: 'Can conjure fire' });
    characterCreator.write(characterData);
    characterCreator.on('data', (data) => {
      expect(data.toString()).toBe('Character Class: Mage, Gender: Female, Fun Fact: Can conjure fire');
      done();
    });
  });
});