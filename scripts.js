var pigLatin = function(englishWord) {
  var vowels = ["a", "e", "i", "o", "u"]
  for (var i =0; i < vowels.length; i++) {
    if (englishWord[0] === vowels[i]) {
    var startsWithVowel = true;
    break;
    }
  };
  if (startsWithVowel) {
    var translatedWord = englishWord;
  } else if (startsWithVowel === false) {
    for (var i =0; i < englishWord.length; i++) {
      var startsWithConsonant = (englishWord[0] === vowels[i]);
      break;
    };
  } else {
    var translatedWord = englishWord.slice(1) + englishWord[0];
  }
  return translatedWord + 'ay';
};

// $(document).ready(function() {

//   var englishWord = $('input#input').val();
// })
