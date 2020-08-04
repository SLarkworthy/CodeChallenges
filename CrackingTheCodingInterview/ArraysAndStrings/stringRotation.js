//String Rotation
//Assume you have a method isSubstring which checks if one word is a substring of another.
//Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to is Substring.

//hmm..so this uses a theoretical method and I won't be able to really test it, which is okay.
//the "only one call" definitely makes this tricky.
//I did have to look at the hints for this one.

//so if we have waterbottle => erbottlewat like in the example
//and we concat the rotate string (s2) onto itself:
//erbottlewaterbottlewat
//THEN we can use isSubstring to check if s1 is a substring of s2. VERY COOL.



function stringRotation(s1, s2) {
    let doubleString = s2 + s2;
    return isSubstring(s1, doubleString);
}

//here is one that uses includes in place of isSubstring:
var stringRotationSolution = function(string1, string2) {
    if (string1.length !== string2.length) {
      return false;
    }
    return (string2 + string2).includes(string1); // one call of isSubString
  };