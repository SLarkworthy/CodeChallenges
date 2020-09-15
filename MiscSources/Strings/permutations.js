const find_permutation = function(str, pattern) {
    let patternObj = {};
    for (let i = 0; i < pattern.length; i++) {
        let char = pattern[i];
        patternObj[char] = patternObj[char] ? patternObj[char] + 1 : 1;
    }

    let start = 0;
    let end = 0;

    while (end < pattern.length) {
        let char = str[end];
        patternObj[char] = patternObj[char] ? patternObj[char] -1 : -1;
        end++;
    }
    end--;

    while (end < str.length) {
        if (isZeroObj(patternObj)) return true;

        let startChar = str[start];
        let nextChar = str[end + 1];

        patternObj[startChar]++;
        patternObj[nextChar] = patternObj[nextChar] ? patternObj[nextChar] - 1 : -1;

        start++;
        end++;
    }
    return false;
};

function isZeroObj(obj){
    return Object.values(obj).every(x => x === 0);
}

//brute force would be to check if each substring the length of the pattern is an anagram
//This would take O(n * m) time where m is the length
//Instead we can use the sliding window method to create an object of the first substring of length m
//and then check it against an object created from the pattern
//maybe we can initialize an obj made out of the pattern
//and then subtract each letter we see
//and check that all values are 0
//this check would, at high values, be constant time because you'd have at most 26 values


//The solution code I looked at had similar logic, but instead of iterating through the values in the hash...
//it kept track of the "matched characters" where the values were 0
//so instead of iterating every time it would add or subtract 1 from matched characters when a value changed from or to 0