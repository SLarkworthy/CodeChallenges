function find_single_number(arr) {
    let num = 0;
    for (i = 0; i < arr.length; i++){
      num ^= arr[i];
    }
    return num;
}
    
console.log(find_single_number([1, 4, 2, 1, 3, 2, 3]));

// ^ is the or operator
// any number ^ with itself is zeroed out
// So we can use it on the whole array
// And whatever is left is the only one that didn't get zeroed out
// very cool!!!
