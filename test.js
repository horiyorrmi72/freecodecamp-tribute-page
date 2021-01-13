let names = ["tunde", "ademola","bamidele"];
let myRegEx = /tunde/;
let output = myRegEx.test(names);
console.log(output);
function finder(){
let secondNames = names;
let finding =  /Tunde/i;
let result = finding.test(secondNames);
return result
}
console.log(finder());