//One Away: There are 3 tyes of edits that can be performed on strings: insert a character, remove a character, or replace a character.
//Given two strings, write a function to check if they are one edit (or zero edits) away.

//hmm...
//So we can easily check the length and if the difference is more than 1 it'll take multiple edits
//then we have to check each letter against the first string.
//we have to be extra careful if a letter is missing from the beginning or middle.
//lets split into two categories: inserting&removing vs. replacing a character.
//if the length is the same, we can check each char in string 1 against each char in string 2, and if only one/none are different, return true.
//if the length is 1 letter off, we check the shorter string against the longer string, and when we find that 2 chars are different, skip forward a letter in the longer string and coninue the check.

//my solution

function oneAway(str1, str2) {
    let lengthDiff = Math.abs(str1.length - str2.length);
    let longest = "";
    let shortest = "";
    let count = 0;
    let i = 0;
    let j = 0;
    if (lengthDiff > 1) return false;
    if (str1.length > str2.length) {
      longest = str1;
      shortest = str2;
    } else {
      longest = str2;
      shortest = str1; //these may be the same lgth
    }
    while (i < longest.length) {
      if (longest[i] !== shortest[j]) {
        if (count > 0) return false; 
        count++;
        if (lengthDiff === 1) i++; //only skip over if insertion or deletion
      }
      j++;
      i++;
    } return true;
  }
  
  oneAway("pale", "bake");


  //my solution was basically exactly what the book did!! nice.