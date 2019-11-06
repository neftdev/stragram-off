import hljs from "highlight.js/lib/highlight";
import json from "highlight.js/lib/languages/json";

import "highlight.js/styles/darcula.css";
import "../css/index.css";

hljs.registerLanguage("json", json);

const jsonWords = `{
  "words": [
    "hola",
    "imagen"
  ]
}
`;

let entryWord = document.getElementById("entry-word");
entryWord.innerHTML = hljs.highlight("json", jsonWords).value;
hljs.highlightBlock(entryWord);


let resWords = `{
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

let outputWord = document.getElementById("output-word1");
outputWord.innerHTML = hljs.highlight("json", resWords).value;
hljs.highlightBlock(outputWord);

resWords = `{
  "message": "Internal Server error"
}`;

outputWord = document.getElementById("output-word2");
outputWord.innerHTML = hljs.highlight("json", resWords).value;
hljs.highlightBlock(outputWord);
