function countWords(inputWords) {
  return inputWords.reduce(function(totals, word) {
    totals[word] = totals.hasOwnProperty(word) ?
      totals[word] + 1 : 1;
    return totals;
  }, {});
}

module.exports = countWords;