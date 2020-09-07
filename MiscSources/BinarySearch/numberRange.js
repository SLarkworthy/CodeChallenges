//Given an array of numbers sorted in ascending order, find the range of a given number ‘key’. 
//The range of the ‘key’ will be the first and last position of the ‘key’ in the array.

//Write a function to return the range of the ‘key’. If the ‘key’ is not present return [-1, -1].

const find_range = function(arr, key) {
    result = [- 1, -1];
    const bottom = binarySearchHelper(arr, true, key);
    if (arr[bottom] !== key) return result;
    result[0] = bottom;
    result[1] = binarySearchHelper(arr, false, key);
    return result;
  };
  
  function binarySearchHelper(arr, bottomFlag, key){
    let start = 0;
    let end = arr.length - 1;
    while(start < end) {
        let mid = bottomFlag ? start + Math.floor((end - start) / 2) : start + Math.ceil((end - start) / 2);
        if (arr[mid] === key) {
            if (bottomFlag) {
                end = mid;
            } else {
                start = mid;
            }
        } else if (arr[mid] < key) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return start;
}



console.log(find_range([4, 6, 6, 6, 9], 6))
console.log(find_range([1, 3, 8, 10, 15], 10))
console.log(find_range([1, 3, 8, 10, 15], 12))
console.log(find_range([1, 3, 8, 10, 15], 1))