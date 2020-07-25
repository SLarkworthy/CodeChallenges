// Given two strings, write a method to decide if one is a permutation of the other
//so...same letters, but a different order is okay.

function checkPermutation(string1, string2) {
    if (string1.length !== string2.length) return false;
    let obj = {};
    for (let char1 of string1) {
      if (obj[char1]) {
        obj[char1]++;
      } else {
        obj[char1] = 1;
      }
    }
    for (let char2 of string2) {
      if (obj[char2]) {
        obj[char2]--;
      } else {
        return false;
      }
    }
    return true;
  }
  
  checkPermutation("Hapy", "apyH")
  
  
  // check edge cases
  // questions I would ask: what about special characters? Does capitalization matter?
  // pseudocode:
  // if the lengths are not the same, go ahead and return false.
  //initialize an empty obj
  // pick one string and create a for..of loop
  // initialize a key or add one to the value
  //do a for..of loop for the second array, SUBTRACTING from the value of the keys of the second array.
  // if you read a key's value and it's zero or not found, that means you have a character that is in exess or not in the first string, and thus they are not permutations.

  //Book solution:
  var checkPermute = function(stringOne, stringTwo) {
    // if different lengths, return false
    if (stringOne.length !== stringTwo.length) {
      return false;
    // else sort and compare 
    // (doesnt matter how it's sorted, as long as it's sorted the same way)
    } else {
      var sortedStringOne = stringOne.split('').sort().join('');
      var sortedStringTwo = stringTwo.split('').sort().join('');
      return sortedStringOne === sortedStringTwo;
    }
};