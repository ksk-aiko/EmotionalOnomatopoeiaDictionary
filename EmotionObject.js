import Word from "./Word.js";

/**
 * Represents an emotion with its associated properties and methods for HTML rendering.
 * This class encapsulates emotion data including visual representation and onomatopoeia words,
 * providing methods to generate HTML content for display purposes.
 *
 * @class EmotionObject
 */
class EmotionObject {
  constructor(emotion, description, color, onomatopoeia) {
    this.emotion = emotion;
    this.description = description;
    this.color = color;
    this.onomatopoeia = onomatopoeia;
  }

  getOnomatopoeiaWords() {
    return this.onomatopoeia
      .map((wordKey) => {
        const wordObj = onomatopoeiaWords[wordKey];
        return `
          <article class="col-5 row d-flex align-items-center justify-content-between bg-white m-2" style="color:black;" role="article">
            <div class="col-5">
              <h3>${wordObj.word}</h3>
              <p>${wordObj.definition}</p>
            </div>
            <figure class="col-5">
              <img src="${wordObj.pictureUrl}" alt="image to represent ${wordObj.word}" loading="lazy">
            </figure>
          </article>
        `;
      })
      .join("");
  }

  getHtmlContainerString(index) {
    return `
            <article class="col-12 col-md-3 m-3">
              <a href="#sec${index}"
                 class="d-flex flex-column justify-content-center align-items-center text-center small-square text-decoration-none"
                 style="background-color: ${this.color}; color:white;"
                 aria-describedby="emotion-${index}-desc">
                 <header>
                  <h3>${this.emotion}</h3>
                  <div class="facial" aria-hidden="true">&#${expression[this.emotion]};</div>
                 </header>
                 <p id="emotion-${index}-desc" class="mt-2">${this.description}</p>
              </a>
            </article>
        `;

  }

  getDetailSectionString(index) {
    return `
            <section id="sec${index}" class="big-square text-white" style="background-color:${
      this.color
    };">
              <div class="container pt-4">
                <header>
                  <h2>${this.emotion}</h2>
                  <p>${this.description}</p>
                </header>
                <main class="row justify-content-between" role="region" aria-label="${this.emotion} onomatopoeia words">
                  ${this.getOnomatopoeiaWords()}
                </main>
              </div>
            </section>
        `;
  }
}

export default EmotionObject;