// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
    let arr =  str.toLowerCase().split(' ');
    for(var i = 0; i < arr.length; i++){
    //   let firstChar = arr[i][0].toUpperCase();
      let replaceRegex = /(^|\s)\S/g;
  
      return str.replace(replaceRegex,subStr => subStr.toUpperCase());
    }
  }
  
  console.log(titleCase("I'm a little tea pot"));

//   Code Explanation
// The solution works by first lowercasing all the characters in the string and then only uppercasing the first character of each word.

// Lowercase the whole string using str.toLowerCase().
// Replace every word’ first character to uppercase using .replace.
// Search for character at the beginning of each word i.e. matching any character following a space or matching the first character of the whole string, by using the following pattern.
// Regex explanation:
// Find all non-whitespace characters (\S)
// At the beginning of string (^)
// Or after any whitespace character (\s)
// The g modifier searches for other such word pattern in the whole string and replaces them.