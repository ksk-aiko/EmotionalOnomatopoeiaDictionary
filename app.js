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

function initializeApp() {
  const targetElement = document.getElementById("target");

  targetElement.appendChild(createEmotionGrid());
  targetElement.appendChild(createEmotoinDetails());
}

document.addEventListener("DOMContentLoaded", initializeApp);
