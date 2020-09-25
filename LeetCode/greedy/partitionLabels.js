/*
A string S of lowercase English letters is given. 
We want to partition this string into as many parts as possible so that each letter appears in at most one part, 
and return a list of integers representing the size of these parts.
*/


var partitionLabels = function(S) {
    let hash = {};
    for (let i = 0; i < S.length; i++){
        hash[S[i]] ? hash[S[i]][1] = i : hash[S[i]] = [i, i];
    }
    let intervals = Object.values(hash).sort((a, b) => a[0] - b[0]);
    let currentInt = [0,0];
    let solution = [];
    for (const interval of intervals){
        [start, end] = interval;
        if (start > currentInt[1]) {
            solution.push(currentInt[1] - currentInt[0] + 1);
            currentInt = interval;
        } else {
            if (start < currentInt[0]) currentInt[0] = start;
            if (end > currentInt[1]) currentInt[1] = end;
        }
    }
    solution.push(currentInt[1] - currentInt[0] + 1);
    return solution;
};

//ideas:
//make a hash map of each letter and the indexes where that letter is found
//then merge intervals

//alternatively: do some sort of backtracking that first breaks it everywhere
//and then merges until you have a correct solution

//brute force would be to check each index to see if it's a valid partition (quadratic time)

