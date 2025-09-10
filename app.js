import EmotionObject from "./EmotionObject.js";

const emotions = [
  new EmotionObject(
    "angry",
    "feeling or showing strong annoyance, displeasure, or hostility; full of anger.",
    "red",
    ["bark", "grunt", "roar", "whack", "smack", "hiss"]
  ),
  new EmotionObject(
    "happy",
    "feeling or showing pleasure or contentment.",
    "pink",
    ["bling", "chatter", "chant", "giggle"]
  ),
  new EmotionObject(
    "bad",
    "not such as to be hoped for or desired; unpleasant or unwelcome.",
    "skyblue",
    ["ahem", "clatter", "clunk"]
  ),
  new EmotionObject("sad", "feeling or showing sorrow; unhappy.", "grey", [
    "bawl",
    "whine",
    "waah",
  ]),
  new EmotionObject(
    "surprised",
    "to feel mild astonishment or shock.",
    "purple",
    ["boom", "honk", "zing"]
  ),
  new EmotionObject(
    "fearful",
    "feeling afraid; showing fear or anxiety.",
    "green",
    ["buzz", "caw", "crawl"]
  ),
  new EmotionObject(
    "disgusted",
    "feeling or showing strong annoyance, displeasure, or hostility; full of anger.",
    "orange",
    ["flick", "gargle", "oink"]
  ),
];

/**
 * Sets up lazy loading for images using the Intersection Observer API.
 * Images with the 'lazy-image' class will be loaded when they enter the viewport.
 * Falls back to immediate loading if IntersectionObserver is not supported.
 * 
 * @function setupImageLazyLoading
 * @description This function observes images with the 'lazy-image' class and loads them
 * when they become visible in the viewport. The actual image source should be stored
 * in the 'data-src' attribute. When loaded, the image receives the 'image-loaded' class
 * and the 'lazy-image' class is removed.
 * 
 * @example
 * // HTML structure expected:
 * // <img class="lazy-image" data-src="path/to/image.jpg" alt="Description">
 * 
 * // Call the function to initialize lazy loading
 * setupImageLazyLoading();
 * 
 * @requires IntersectionObserver - Uses fallback if not supported
 * @since 1.0.0
 */
function setupImageLazyLoading() {
  // if browser doesn't support IntersectionObserver
  if (!('InterseciotnObservr') in window) {
    document.querySelectorAll('.lazy-image').forEach(loadImage);
    return;
  }

  // setting up options for IntersectionObserver
  const imageObserverOptions = {
    rootMargin: '50px 0px',
    threshold: 0.1
  };

  // process to load image
  const loadImage = (img) => {
    const src = img.getAttribute('data-src');
    if (src) {
      // load acutual image
      img.src = src;
      // remove data-src attribute after loading
      img.removeAttribute('data-src');
      // remove lazy-image class after loading
      img.classList.remove('lazy-image');
      // add loaded class after loading
      img.classList.add('image-loaded');
    }
  }

  // create IntersectionObserver instance
  const imageObserver = new IntersectionObserver((entries, observers) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // load image if the image is in the viewport
        loadImage(entry.target);
        // stop observing the image after loading
        observers.unobserve(entry.target);
      }
    });
  }, imageObserverOptions);

  // add all images with lazy-image class to the observer
  document.querySelectorAll('.lazy-image').forEach(img => {
    imageObserver.observe(img);
  });
}

function createEmotionGrid() {
  const fragment = document.createDocumentFragment();

  const emotionGridSection = document.createElement("section");
  emotionGridSection.className = "container";
  emotionGridSection.setAttribute("aria-label", "Categories of Emotions");

  const emotionCardsContainer = document.createElement("div");
  emotionCardsContainer.className = "row d-flex justify-content-center align-items-center";
  emotionCardsContainer.setAttribute("role", "grid");

  const emotionCardsHtml = emotions
    .map((emotion, index) => emotion.getHtmlContainerString(index))
    .join("");
  emotionCardsContainer.innerHTML = emotionCardsHtml;

  emotionGridSection.append(emotionCardsContainer);
  fragment.appendChild(emotionGridSection);

  return fragment;
}

function createEmotoinDetails() {
  const fragment = document.createDocumentFragment();

  const emotionDetailSection = document.createElement("section");
  emotionDetailSection.className = "container-fluid";
  emotionDetailSection.setAttribute(
    "aria-label",
    "Detailed information of Emotions"
  );

  const emotionDetailHtml = emotions
    .map((emotion, index) => emotion.getDetailSectionString(index))
    .join("");
  emotionDetailSection.innerHTML = emotionDetailHtml;

  fragment.appendChild(emotionDetailSection);

  return fragment;
}

/**
 * Initializes the application by setting up the main UI components and features.
 * Creates and appends the emotion grid and emotion details to the target element,
 * and configures lazy loading for images to optimize performance.
 * 
 * @function initializeApp
 * @returns {void}
 */
function initializeApp() {
  const targetElement = document.getElementById("target");

  // optimize control of DOM rendering by using DocumentFragment
  targetElement.appendChild(createEmotionGrid());
  targetElement.appendChild(createEmotoinDetails());

  // setup lazy loading for images
  setupImageLazyLoading();
}

document.addEventListener("DOMContentLoaded", initializeApp);
