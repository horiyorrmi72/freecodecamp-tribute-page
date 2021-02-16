function findLongestWordLength(str) {
    let splitWords = str.split(' ');
    let wordsMaxLength = 1;
    for(var i = 1; i < splitWords.length; i++){
      if(splitWords[i].length > wordsMaxLength){
         wordsMaxLength = splitWords[i].length
      }
    }
         return wordsMaxLength;
   }
   
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
   