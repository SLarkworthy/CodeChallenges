//Implement a method to perform basic string compression using the counts of repeated characters.
//For example, the string aabcccccaaa would become a2b1c5a3
//If the compressed string would not become smaller than the original string, your method should return the original string.
//You can assume the string has only uppercase and lowercase letters (a-z)

//So from that last line I am making the assumption that uppercase and lowercase letters should be treated as seperate letters. 

//pseudocode
//we don't want to mutate the original string, as we may need to return it
//initialize temp variable and count variable and a new string
//iterate over each char of the string.
//store that in a temporary variable.
//add 1 to count
//if the next char is the same, add another to count.
//if it is different, add it to the string along with the count value.
//reset count to 0 and temp variable
//coersion should auto convert this int to a string

//at the end, check the length of the new string against the original, and return the smallest.


function stringCompression(string) {
    let count = 0;
    let current = string[0];
    let compressedStr = "";
    for (let i = 0; i <= string.length; i++) {
      if (string[i] !== current){
       compressedStr = compressedStr + current + count;
       current = string[i];
       count = 1;
      } else {
        count++;
      }
    }
    if (string.length < compressedStr.length) {
      return string;
    } else {
      return compressedStr;
    }
 }
 
 stringCompression("satturnnnnnnnnnnnnnn");

 //this loop goes one more letter that returns undefined to get the last letter
 //I'm sure there's a better way.

 //The book gets around this by checking the letter against the NEXT letter, instead of the previous as I do here.
 //Concatenating a string is O(n^2) time!! oops!!

 //This is rather similar to the js solution so I will keep it, but the book has some fancy java ones using a StringBuilder.