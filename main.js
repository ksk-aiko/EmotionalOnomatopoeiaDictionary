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
            return this.onomatopoeia.map(wordKey => {
                const wordObj = onomatopoeiaWords[wordKey];
                return `
                    <div class="col-5 row d-flex align-items-center justify-content-between bg-white m-2" style="color:black;">
                  <div class="col-5">
                    <h3>${wordObj.word}</h3>
                    <p>${wordObj.definition}</p>
                 </div>
                 <div class="col-5">
                  <img src="${wordObj.pictureUrl}">
                 </div>
                </div>
                    `
            }).join('');
        }


    getHtmlContainerString(index) {
        let htmlString = 
        `
            <a href="#sec${index}" class="d-flex flex-column justify-content-center align-items-center text-center small-square col-12 col-md-3 m-3" style="background-color: ${this.color}; color:white;">
                <h3>${this.emotion}</h3>
                <div class="facial">&#${expression[this.emotion]};</div>
                <p class="">${this.description}</p>
            </a>
        `; 

        return htmlString;
    }

    getDetailSectionString(index) {
        return `
            <div id="sec${index}" class="big-square text-white" style="background-color:${this.color};">
              <div class="container pt-4">
                <h2>${this.emotion}</h2>
                <p>${this.description}</p>
                <div class="row justify-content-between">
                  ${this.getOnomatopoeiaWords()}
                </div>
              </div>
            </div>
        `
    }
}

/**
 * Dictionary of onomatopoeia words with their definitions and associated images.
 * Each key represents an onomatopoeic word, and the value is a Word object containing
 * the word, its definition, and a URL to an illustrative image.
 */
const onomatopoeiaWords = {
    "bark": new Word("bark", "the sound made by a dog", "https://cdn.pixabay.com/photo/2013/07/25/11/59/german-shepherd-166972_1280.jpg"),
    "grunt": new Word("grunt", "issue a low, animal-like noise", "https://cdn.pixabay.com/photo/2010/11/29/nepal-419__480.jpg"),
    "roar": new Word("roar", "make a loud noise, as of an animal", "https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_1280.jpg"),
    "whack": new Word("whack", "the act of hitting vigorously", "https://cdn.pixabay.com/photo/2017/10/27/11/49/boxer-2894025_1280.jpg"),
    "smack": new Word("smack", "a blow from a flat object (as an open hand)", "https://cdn.pixabay.com/photo/2015/03/20/19/38/hammer-682767_1280.jpg"),
    "hiss": new Word("hiss", `make a sharp, elongated "s" sound`, "https://cdn.pixabay.com/photo/2016/10/13/23/30/cat-1739091_1280.jpg"),
    "ahem": new Word("ahem", "the utterance of a sound similar to clearing the throat", "https://cdn.pixabay.com/photo/2014/03/13/10/12/man-286476_1280.jpg"),
    "bawl": new Word("bawl", "cry loudly", "https://cdn.pixabay.com/photo/2015/06/26/10/17/smiley-822365_960_720.jpg"),
    "bling": new Word("bling", "flashy, ostentatious jewelry", "https://cdn.pixabay.com/photo/2017/12/30/13/37/happy-new-year-3050088_1280.jpg"),
    "boom": new Word("boom", "a deep prolonged loud noise", "https://cdn.pixabay.com/photo/2016/04/12/21/17/explosion-1325471_1280.jpg"),
    "buzz": new Word("buzz", "the sound of rapid vibration", "https://cdn.pixabay.com/photo/2020/02/13/10/29/bees-4845211_1280.jpg"),
    "caw": new Word("caw", "utter a cry, characteristic of crows, rooks, or ravens", "https://cdn.pixabay.com/photo/2017/02/16/11/13/bird-2071185_1280.jpg"),
    "chatter": new Word("chatter", "talk socially without exchanging too much information", "https://cdn.pixabay.com/photo/2014/07/25/08/55/bar-401546_1280.jpg"),
    "chant": new Word("chant", "a repetitive song in which syllables are assigned to a tone", "https://cdn.pixabay.com/photo/2016/07/19/07/43/parchment-1527650__340.jpg"),
    "clatter": new Word("clatter", "a continuous rattling sound as of hard objects falling or striking each other.", "https://cdn.pixabay.com/photo/2020/02/06/19/01/clutter-4825256_1280.jpg"),
    "clunk": new Word("clunk", "a heavy dull sound (as made by impact of heavy objects)", "https://cdn.pixabay.com/photo/2017/01/10/03/06/steel-1968194_1280.jpg"),
    "crawl": new Word("crawl", "move forward on the hands and knees or by dragging the body close to the ground.", "https://cdn.pixabay.com/photo/2017/11/23/07/47/baby-2972221__340.jpg"),
    "flick": new Word("flick", "throw or toss with a quick motion", "https://cdn.pixabay.com/photo/2012/02/23/08/48/disgust-15793_1280.jpg"),
    "giggle": new Word("giggle", "a light, silly laugh.", "https://cdn.pixabay.com/photo/2017/08/07/15/18/people-2604850_1280.jpg"),
    "gargle": new Word("gargle", "an act or instance or the sound of washing one's mouth and throat with a liquid kept in motion by exhaling through it.", "https://cdn.pixabay.com/photo/2017/04/03/16/32/girl-smoke-cigarette-2198839_1280.jpg"),
    "honk": new Word("honk", "the cry of a goose or any loud sound resembling it", "https://cdn.pixabay.com/photo/2017/02/28/14/37/geese-2105918_1280.jpg"),
    "oink": new Word("oink", "the short low gruff noise of the kind made by hogs", "https://cdn.pixabay.com/photo/2019/03/02/15/32/pig-4030013_1280.jpg"),
    "whine": new Word("whine", "a complaint uttered in a plaintive way", "https://cdn.pixabay.com/photo/2020/05/01/01/57/girl-5115192_960_720.jpg"),
    "waah": new Word("waah", "sound made when crying by babies", "https://cdn.pixabay.com/photo/2017/01/18/02/18/emotions-1988745_1280.jpg"),
    "zing": new Word("zing", "sound my by something energetic", "https://cdn.pixabay.com/photo/2017/09/14/16/38/fiber-optic-2749588_1280.jpg")
};

/**
 * Object containing emotional expressions mapped to their corresponding Unicode hex codes for emojis.
 * Each key represents an emotion and its value is the Unicode hex code (without 'U+' prefix) 
 * that can be used to display the associated emoji.
 */
const expression = {
    "angry" : "x1F620",
    "sad" : "x1F97A",
    "happy" : "x1F973",
    "bad" : "x1F630",
    "surprised" : "x1F632",
    "fearful" : "x1F616",
    "disgusted" : "x1F612"
};

const emotions = [
    new EmotionObject("angry", "feeling or showing strong annoyance, displeasure, or hostility; full of anger.", "red", ["bark","grunt", "roar","whack","smack","hiss"]),
    new EmotionObject("happy", "feeling or showing pleasure or contentment.", "pink", ["bling","chatter","chant","giggle"]),
    new EmotionObject("bad", "not such as to be hoped for or desired; unpleasant or unwelcome.", "skyblue", ["ahem","clatter","clunk"]),
    new EmotionObject("sad", "feeling or showing sorrow; unhappy.", "grey", ["bawl","whine","waah"]),
    new EmotionObject("surprised", "to feel mild astonishment or shock.", "purple", ["boom","honk","zing"]),
    new EmotionObject("fearful", "feeling afraid; showing fear or anxiety.", "green", ["buzz","caw","crawl"]),
    new EmotionObject("disgusted", "feeling or showing strong annoyance, displeasure, or hostility; full of anger.", "orange", ["flick","gargle","oink"])
];

let emotionGrid = document.createElement("section");
emotionGrid.classList.add("container");
emotionGrid.setAttribute("aria-label", "Categories of Emotions");

let cards = document.createElement("div");
cards.classList.add("row", "d-flex", "justify-content-center", "align-items-center");
cards.setAttribute("role", "grid");

let html = emotions.map((emotion, index) => emotion.getHtmlContainerString(index)).join("");
cards.innerHTML = html;
emotionGrid.append(cards);

let detailContainer = document.createElement("div");
detailContainer.classList.add("container-fluid");

let bigCard = emotions.map((emotion, index) => emotion.getDetailSectionString(index)).join("");
detailContainer.innerHTML = bigCard;

let domObj = document.getElementById("target");
domObj.append(emotionGrid);
domObj.append(detailContainer);

