const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  if (letters.length) {
    for (let rows = 0; rows < letters[0].length; rows++) {
      let tempWord = "";
      for (let cols = 0; cols < letters.length; cols++) {
        if (letters[cols][rows]) {
          tempWord += letters[cols][rows];
        } else {
          tempWord += "*";
        }
      }
      if (tempWord.includes(word)) return true;
    }
  }

  return false;
};

module.exports = wordSearch;
