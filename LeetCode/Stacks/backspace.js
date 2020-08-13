// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".

var backspaceCompare = function(S, T) {
    let stackS = [];
    let stackT = [];
    
    for (let i=0; i < S.length; i++){
        if (S[i] === "#") {
            if (stackS.length !== 0) stackS.pop();
        } else {
            stackS.push(S[i])
        }
    }
    
    for (let i=0; i < T.length; i++){
        if (T[i] === "#") {
            if (stackT.length !== 0) stackT.pop();
        } else {
            stackT.push(T[i])
        }
    }
    
    if (stackT.length !== stackS.length) return false;
    
    while (stackT.length > 0) {
        if (stackT.pop() !== stackS.pop()) return false;
    }
    
    return true;
};

//O(n+m) time, but also space...two pointers would be better for space.