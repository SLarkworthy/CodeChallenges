//URLify: write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. Ex
//input 'Mr John Smith'
//output 'Mr%20John%20Smith'

//I had to look up this regex...It is also easily done with split() and join(), but that would be a bit slower

function URLify(input) {
    return input.replace(/\s/g, "%20");
}
  
let input = 'Mr John Smith';
URLify(input);

//this is WAYYY more complex in java

//NOTE: I entirely missed that the original problem had trailing spaces you had to ignore.
//Here is my fancy one-liner:

function urlify(input) {
    return input.split(" ").filter(word => word.length !== 0).join("%20")
}
  
console.log(urlify('Mr John Smith    ', 13), 'Mr%20John%20Smith');

//Here's one from github that doesn't use inbuilt methods:

function URLify(str, len) {
    let s = "";
    let totalSpaces = str.length - len;
    let frontSpaces = 0;
    let flag = false;
    for (let i = 0; i < str.length; i++) {
      if (flag === false) {
        if (str[i] === " ") frontSpaces++;
        else flag = true;
      }
      if (flag === true && i < str.length - (totalSpaces - frontSpaces)) {
        if (str[i] === " ") s += "%20";
        else s += str[i];
      }
    }
  
    return s;
  }
  
  console.log(URLify("Mr John Smith   ", 13));


  