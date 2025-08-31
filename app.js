
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

function initializeApp() {

let emotionGridSection = document.createElement("section");
emotionGridSection.classList.add("container");
emotionGridSection.setAttribute("aria-label", "Categories of Emotions");

let emotionCardsContainer = document.createElement("div");
emotionCardsContainer.classList.add(
  "row",
  "d-flex",
  "justify-content-center",
  "align-items-center"
);
emotionCardsContainer.setAttribute("role", "grid");

let emotionCardsHtml = emotions
  .map((emotion, index) => emotion.getHtmlContainerString(index))
  .join("");
emotionCardsContainer.innerHTML = emotionCardsHtml;
emotionGridSection.append(emotionCardsContainer);

let emotionDetailSection = document.createElement("section");
emotionDetailSection.classList.add("container-fluid");
emotionDetailSection.setAttribute("aria-label", "Detailed information of Emotions");

let emotionDetailHtml = emotions
  .map((emotion, index) => emotion.getDetailSectionString(index))
  .join("");
emotionDetailSection.innerHTML = emotionDetailHtml;

document.getElementById("target").append(emotionGridSection);
document.getElementById("target").append(emotionDetailSection);
}

document.addEventListener('DOMContentLoaded', initializeApp);