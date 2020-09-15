// Given a string, find the length of the longest substring which has no repeating characters.

const non_repeat_substring = function(str) {
    let start = 0;
    let end = 0;
    let currentObj = {};
    let max = 0;
  
    while (end < str.length) {
      if (currentObj[str[end]]) {
        while (currentObj[str[end]] !== currentObj[str[start]]) {
          currentObj[str[start]]--;
          start++;
        }
        currentObj[str[start]]--;
        start++;
      } else {
        max = Math.max(max, end - start + 1);
        currentObj[str[end]] = 1;
        end++;
      }
    }
    return max;
  };
  
  //I lose some time with my nested while loop.
  //In the solution I looked at, the object they create has keys that are the chars and the values
  //are the INDEX where the character lives.
  //So if you see a char is already in the object, you can just move the start pointer to that index plus one
  //and update the index in the object
  //This removes the need for that second while loop
  //They are both linear solutions but mine is less optimal as in the worst case it would touch every char twice.