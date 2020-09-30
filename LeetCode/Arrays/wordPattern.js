// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true


var wordPattern = function(pattern, s) {
    let wordArr = s.split(" ");
    if (pattern.length !== wordArr.length) return false;
    let hashMap = {};
    let takenWords = {};
    for (let i = 0; i < pattern.length; i++){
        let char = pattern[i];
        if (hashMap[char] && hashMap[char] !== wordArr[i]) return false;
        if (!hashMap[char]) {
            if (takenWords[wordArr[i]]) return false;
            takenWords[wordArr[i]] = true;
            hashMap[char] = wordArr[i];
        }
    }
    return true;
};



//this is basically exactly the method used in the solution :) 
