//Given a collection of distinct integers, return all possible permutations.

//This was tagged as a queue problem but I did not use a queue. 

var permute = function(nums) {
    solutions = [[]]; //[[1]]
    for (const num of nums) {
        let tempSolutions = [];
        for (solution of solutions){
            for (let i = 0; i < solution.length + 1; i++){
                let permutation = [...solution.slice(0, i), num, ...solution.slice(i)];
                tempSolutions.push(permutation);
            }
        }
        solutions = tempSolutions;
    }
    return solutions;
};