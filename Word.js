/**
 * Represents a word with its definition and associated picture.
 * @class
 */
/**
 * Creates a new Word instance.
 * @constructor
 * @param {string} word - The word itself
 * @param {string} definition - The definition or meaning of the word
 * @param {string} pictureUrl - URL to an image that represents or illustrates the word
 */
class Word {
  constructor(word, definition, pictureUrl) {
    this.word = word;
    this.definition = definition;
    this.pictureUrl = pictureUrl;
  }
}

export default Word;
