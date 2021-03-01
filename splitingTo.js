// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    var splitter = [], i = 0, n = arr.length;
    while(i < n){
      splitter.push(arr.slice(i,i += size));
    }
    return splitter;
   }
   
   console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));