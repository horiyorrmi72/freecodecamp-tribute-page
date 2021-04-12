// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  let newString = str.toLowerCase();
    let replaceRegex = /(^|\s)\S/g;

    return newString.replace(replaceRegex,subStr => subStr.toUpperCase());
  
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("Remove Elements from an Array Using slice Instead of splice"));


  
//   Code Explanation
// The solution works by first  changing to lowercase all the characters in the string and then only change the first character of each word to uppercase.

// Lowercase the whole string using str.toLowerCase().
// Replace every word’ first character to uppercase using .replace.
// Search for character at the beginning of each word i.e. matching any character following a space or matching the first character of the whole string, by using the following pattern.
// Regex explanation:
// Find all non-whitespace characters (\S)
// At the beginning of string (^)
// Or after any whitespace character (\s)
// The g modifier searches for other such word pattern in the whole string and replaces them.