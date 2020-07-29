//Given a string, write a function to check if it is a permutation of a palindrome. 
//A palindrome is a word or phrase that is the same forwards and backwards. 
//A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. 
//You can ignore casing and non-letter characters.

//notes:
//so ignore non-letter characters
//DONT ignore capitals - use toDowncase()
//so there must be an even number of each letter, with the exception of a single middle letter. so ONE can be odd.
//Now...how to ensure we are only worried about letter characters.....

//my solution

function palidromePermutation(str) {
    let obj = {"a":0, "b":0, "c":0, "d":0, "e":0, "f":0, "g":0, "h":0, "i":0, "j":0, "k":0, "l":0, "m":0, "n":0, "o":0, "p":0, "q":0, "r":0, "s":0, "t":0, "u":0, "v":0, "w":0, "x":0, "y":0, "z":0};
    let strDowncase = str.toLowerCase();
    for (let el of strDowncase){
      if (obj[el] || obj[el] === 0) {
        obj[el]++;
      }
    }
    let oddCount = 0;
    for (let key in obj) {
      if (obj[key] % 2 === 1){
        oddCount++;
      }
    }
    return (oddCount > 1) ? false : true
  }
  
  palidromePermutation("Tacmmm a");

  //here is a solution using a Map:

  function palinPerm(s) {
    const sanitized = s.toUpperCase().split(" ").join("");
    const freq = new Map();
    for (let i = 0; i < sanitized.length; i++) {
      const char = sanitized.charAt(i);
      const prevFreq = freq.get(char) || 0;
      freq.set(char, prevFreq + 1);
    }
    let oddCount = 0;
    for (let char of freq) {
      if (char[1] % 2 !== 0) {
        oddCount++;
      }
    }
    return oddCount < 2;
  }

  //so this one gets rid of spaces but not non-letter characters.
  //mine was obviously overkill on this but ensures that nonletter charactes are not counted
  //also i did not need to do the ternary operator at the end
  