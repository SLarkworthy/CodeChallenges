// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Note: In the string, each word is separated by single space and there will not be any extra space in the string.

function reverseWords(s){
    let stringArr = s.split(" ");
    let reversedArr = stringArr.map(word => reverseWord(word));
    return reversedArr.join(" ");
}

function reverseWord(word){
    let start = 0;
    let end = word.length - 1;
    let charArr = word.split("");
    while (start < end){
        let temp = charArr[start];
        charArr[start] = charArr[end];
        charArr[end] = temp;
        start++;
        end--;
    }
    return charArr.join("");
}

//Did this as part of a She's Coding algorithm challenge