//Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.
//Because there can be negative numbers, this is more complicated than using map

const make_squares = function(arr) {
    let left = 0;
    let right = arr.length-1;
    let result = [];
    while(left <= right){
      let leftSquare = arr[left] * arr[left];
      let rightSquare = arr[right] * arr[right];
      if (leftSquare > rightSquare) {
        result.unshift(leftSquare);
        left++;
      } else{
        result.unshift(rightSquare);
        right--;
      }
    }
    return result;
  };
  
  //While this solution i wrote works, unshift isn't very efficient
  //Since we know what the length of the final array will be
  //We can initialize an array of that length
  //And then just insert each value into it's proper position
  //much more efficient than unshift.

  const make_squares = function(arr) {
    let left = 0;
    let right = arr.length-1;
    let result = Array(arr.length).fill(0);
    let currentIdx = right;
    while(left <= right){
      let leftSquare = arr[left] * arr[left];
      let rightSquare = arr[right] * arr[right];
      if (leftSquare > rightSquare) {
        result[currentIdx] = leftSquare;
        left++;
      } else{
        result[currentIdx] = rightSquare;
        right--;
      }
      currentIdx--;
    }
    return result;
  };
  