//Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each of the array element between two given indices, inclusive. 
//Once all operations have been performed, return the maximum value in the array.

//So for this problem, I was helping out a student with errors they were getting.
//So I solved this two ways - the first way is an edited-down version of the student's.
//It fixes a space complexity problem they were getting and takes out unused code.
//The second is my solution that solves all test cases time-wise
//It keeps track of the boundaries of each query change so we are not doing extra repetetive additions.

//Edited student solution. Passes space tests, fails time tests: 
const arrayManipulationStudent = (n, queries) => {
    let cols = n
    const arr = new Array(cols).fill(0)
    for (let row = 0; row < queries.length; row++) {
        let qRow = queries[row]
        let leftIndex = qRow[0] - 1
        let rightIndex = qRow[1] - 1
        let summand = qRow[2]
        while (leftIndex <= rightIndex) {
            arr[leftIndex] += summand
            leftIndex++
        }
    }
    const max = Math.max(...arr);
    return max
}

//My solution
const arrayManipulation = (n, queries) => {
    let cols = n
    const arr = new Array(cols).fill(0)
    for (let row = 0; row < queries.length; row++) {
        let qRow = queries[row];
        let start = qRow[0] - 1;
        let end = qRow[1];
        let summand = qRow[2];
        arr[start] += summand;
        if (end < arr.length) arr[end] -= summand;
    }
    let max = 0;
    let sum = 0;
    for (let j = 0; j < arr.length; j++){
      sum += arr[j];
      max = Math.max(sum, max);
    }
    return max;
}