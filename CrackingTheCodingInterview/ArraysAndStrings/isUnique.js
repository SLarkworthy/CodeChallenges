// Is unique: Implement an algorithm to determin if a string has all unique charaqcters. What if you cannot use additional data structures?

// My solution:

function isUnique(str) {
    if (str.length === 0) return true;
    let uniqueObj = {};
    for (let char of str) {
      if (uniqueObj[char]) {
        return false;
      } else {
        uniqueObj[char] = 1;
      }
    }
    return true;
  }
  
  isUnique("Hapy Birthd")
  
  // pseudocode:
  // check edge cases: "": true
  // initialize an object
  // for...of loop? for each letter, initialize it in a hash, if it already exists, stop and return false. Else,continue looping. If we reach the end of the string, we can safely return true.
  //What about spaces or non-letter characters?
  // Are we counting capital letters as different or the same char?
  // 9min14sec

  //Book solution:

  var allUniqueChars = function(string) {
  
    // O(n^2) approach, no additional data structures used
    // for each character, check remaining characters for duplicates
    for (var i = 0; i < string.length; i++) {
      for (var j = i + 1; j < string.length; j++) {
        if (string[i] === string[j]) {
          return false; // if match, return false
        }
      }
    }
    return true; // if no match, return true
  };