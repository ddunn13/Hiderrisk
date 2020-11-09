module.exports = function obfuscateText(text, symbol = '*', percent = 50) {
    const charArry = [];
    const percentageOfTextNum = Math.floor(percent * text.length / 100);
    const replaceChar = (origString, replaceChar, index) => {
      return origString.substr(0, index) + replaceChar + origString.substr(index + 1);
    };
  
    while (charArry.length < percentageOfTextNum) {
      const newNumber = Math.floor(Math.random() * text.length);
      if (charArry.indexOf(newNumber) < 0) {
        charArry.push(newNumber);
      }
    }
  
    charArry.forEach(itemPos => {
      text = replaceChar(text, symbol, itemPos);
    });
    
    return text;
};