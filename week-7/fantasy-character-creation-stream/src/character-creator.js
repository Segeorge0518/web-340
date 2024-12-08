const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    this.characterData = '';
  }

  _write(chunk, encoding, callback) {
    const data = chunk.toString();
    if (!data) {
      this.emit('error', new Error('Empty string not allowed'));
      return callback();
    }
    this.characterData = data;
    callback();
  }

  _read(size) {
    this.push(this.formatCharacterDescription());
    this.push(null);
  }

  formatCharacterDescription() {
    const { class: charClass, gender, funFact } = JSON.parse(this.characterData);
    return `Character Class: ${charClass}, Gender: ${gender}, Fun Fact: ${funFact}`;
  }
}

module.exports = CharacterCreator;