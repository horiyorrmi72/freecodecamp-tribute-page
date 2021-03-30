/*
In this challenge, you will test your knowledge of strings.

THE PROBLEM:
A string can be in different cases:
 - lowercase e.g lowercase
 - uppercase e.g  UPPERCASE
 - camelcase e.g camelCase
 - sentencecase e.g Sentencecase

Your challenge is to complete the code below to convert a string to sentence
case where the first character is upper case and the remaining is lower case.
Good luck!
*/

// Don't touch the next line, we will cover functions later.
function capitalize(text) {

    let capitalized = text.charAt(0).toUpperCase() 
    + text.slice(1);//YOUR CODE HERE (approximately 1 line)

    return capitalized; // DON'T UPDATE THIS LINE
}
// THIS IS FOR YOUR TESTING ONLY.
console.log(capitalize('hello')) // should print 'Hello'
console.log(capitalize('WELCOME')) // should print 'Welcome'