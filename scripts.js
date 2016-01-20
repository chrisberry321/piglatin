var pigLatin = function(englishWord) {
  englishWord = englishWord.toLowerCase();
  var vowels = ["a", "e", "i", "o", "u"]
  for (var i =0; i < vowels.length; i++) {
    if (englishWord[0] === vowels[i]) {
    var startsWithVowel = true;
    break;
    }
  };
  if (startsWithVowel) {
    var translatedWord = englishWord;
    return translatedWord + 'ay';
  } else {
    var re = /[aeiou]/;
    var match = re.exec(englishWord);
    var vowelPosition = match.index;
    var slicedLetters = englishWord.slice(0, (vowelPosition));
    var nowStartsWithVowel = englishWord.slice(vowelPosition, englishWord.length);
    return nowStartsWithVowel + slicedLetters + 'ay';

  }

};

$(document).ready(function() {
  $("form#wordInput").submit(function(event){
    var englishWord = $('input#input').val();
    var sentenceArray = englishWord.split(" ");
    var translatedWord = sentenceArray.map(pigLatin);
    var finalsentence = translatedWord.join(" ");

    $("#latinOutput").text(finalsentence);



    $(".output").show();
    event.preventDefault();
  });

});
