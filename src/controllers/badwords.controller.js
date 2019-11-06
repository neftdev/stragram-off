const badWords = require("./lang.json").words;

export const analyzeWords = (req, res) => {
  try {
    const { words } = req.body;

    let analyze = [];

    words.forEach(word => {
      let isBadWord = badWords.includes(word);
      analyze.push({
        word,
        isBadWord
      });
    });

    return res.status(200).json({
      message: "Analyze of words",
      analyze
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server error"});
  }
};
