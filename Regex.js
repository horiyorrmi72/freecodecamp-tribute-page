// if not => ^  (the start input)
//* if the first input not alphabet => [a-z]
//* the second input not alphabet => [a-z]+
//* the end string or input should be number \d*$
// or |
// the first should be alphabet => [a-z]
// followed by a number => [\d]
// and the end string or input should be number => \d+$
// ignore the case of the input => i
// globally => g
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z][\d]\d+$/ig; 
let result = username.match(userCheck);
console.log(result)
