import { onomatopoeiaWords, expression } from "./data.js";

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
          <article class="col-5 row d-flex align-items-center justify-content-between onomatopoeia-word m-2" role="article">
            <div class="col-5">
              <h3>${wordObj.word}</h3>
              <p>${wordObj.definition}</p>
            </div>
            <figure class="col-5">
              <img src="${wordObj.pictureUrl}" alt="${wordObj.word}を表現する画像" loading="lazy">
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
                 class="d-flex flex-column justify-content-center align-items-center text-center small-square emotion-card emotion-${
                   this.emotion
                 }"
                 aria-describedby="emotion-${index}-desc">
                 <header>
                  <h3>${this.emotion}</h3>
                  <div class="facial" aria-hidden="true">&#${
                    expression[this.emotion]
                  };</div>
                 </header>
                 <p id="emotion-${index}-desc" class="mt-2">${
      this.description
    }</p>
              </a>
            </article>
        `;
  }
  getDetailSectionString(index) {
    return `
            <section id="sec${index}" class="big-square emotion-detail emotion-${
      this.emotion
    }" aria-labelledby="emotion-title-${index}">
              <div class="container pt-4">
                <header>
                  <h2 id="emotion-title-${index}">${this.emotion}</h2>
                  <p class="lead">${this.description}</p>
                </header>
                <main class="row justify-content-between" role="region" aria-label="${
                  this.emotion
                }に関連するオノマトペ一覧">
                  ${this.getOnomatopoeiaWords()}
                </main>
              </div>
            </section>
        `;
  }
}

export default EmotionObject;
