//this sorts numbers that we know are between 1 and n and are unique

const cyclic_sort = function(nums) {
    //swap each time we get to a number
    for (let i=0; i<nums.length; i++) {
      let swap = nums[i];
      while (swap-1 !== i) {
        [nums[i], nums[swap-1]] = [nums[swap-1], nums[i]];
        swap = nums[i];
      }
    }
    return nums;
  }
  