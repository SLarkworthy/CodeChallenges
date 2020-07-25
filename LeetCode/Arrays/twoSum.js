//This took me 22minutes because at first I tried a fancy solution that involved sorting the array first
//But I forgot to think about how that would obviously change the indexes.
//So I would have to use indexOf which would slow things down even more.
//So my final solution was the brute force.

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return[i, j];
        }
      }
    }   
};

//brute force: nested for loop, checks first number against all other numbers, then second against the next bunch, etc.
// questions i would ask: is the array sorted? I think I will sort it first and then attempt this.

//pseudocode
// sort array of integers
// use two pointers, first and last.
// if the sum of the pointers is too small, add one to first.
// if it is too large, subtract one from last. 
// return [first, last]

//A solution taken from the discussion forum:

const twoSumm = (nums, target) => {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
      const another = target - nums[i];
      if (another in map) {
        return [map[another], i];
      }
      map[nums[i]] = i;
    }
    return null;
  };

  //this is much better than my brute force.
  //initialize an empty object
  //use ONE for loop.
  //initialize a constant that stores the difference between the target and each num in the array.
  //(another in map) checks to see if that difference value is there, and if it is we have our answer
  //if it's not there, we add it to the hash to be checked against future differences.
  //the keys are the nums, the i is the index where they are
  //this way when we find the num that is the correct difference, we can access the index
  //without having to iterate over the original number array to find it