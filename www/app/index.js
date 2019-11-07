import hljs from "highlight.js/lib/highlight";
import json from "highlight.js/lib/languages/json";

import "highlight.js/styles/darcula.css";
import "../css/index.css";

hljs.registerLanguage("json", json);

// Entradas JSON
const inputWords = `{
  "words": [
    "hola",
    "imagen"
  ]
}
`;

const inputImage = `{
  "image": "64-bit base string"
}`;

// Salidas JSON
const outputWords = `{
  "message": "Analyze of words",
  "analyze": [
      {
          "word": "hola",
          "isBadWord": false
      },
      {
          "word": "imagen",
          "isBadWord": false
      }
  ]
}
`;

const outputImage = `{
  "message": "Analyze of an image",
  "ModerationLabels": [
      {
          "Confidence": 96.31548309326172,
          "Name": "Violence",
          "ParentName": ""
      },
      {
          "Confidence": 96.31548309326172,
          "Name": "Weapon Violence",
          "ParentName": "Violence"
      }
  ]
}`;

const outputError = `{
  "message": "Internal Server error"
}`;

// WORDS
let myDiv = document.getElementById("entry-word");
myDiv.innerHTML = hljs.highlight("json", inputWords).value;
hljs.highlightBlock(myDiv);

myDiv = document.getElementById("output-word");
myDiv.innerHTML = hljs.highlight("json", outputWords).value;
hljs.highlightBlock(myDiv);

// IMAGE
myDiv = document.getElementById("entry-image");
myDiv.innerHTML = hljs.highlight("json", inputImage).value;
hljs.highlightBlock(myDiv);

myDiv = document.getElementById("output-image");
myDiv.innerHTML = hljs.highlight("json", outputImage).value;
hljs.highlightBlock(myDiv);

// ERROR
myDiv = document.getElementById("output-error");
myDiv.innerHTML = hljs.highlight("json", outputError).value;
hljs.highlightBlock(myDiv);
