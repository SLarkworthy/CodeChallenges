const max_sub_array_of_size_k = function(k, arr) {
    let result = -Infinity;
    let start = 0;
    let sum = 0;
    for (let end = 0; end < arr.length; end++) {
      sum += arr[end]
      if (end >= k-1){
        result = Math.max(result, sum);
        sum -= arr[start];
        start++;
      }
    }
    return result;
  };

  const longest_substring_with_k_distinct = function(str, k) {
    console.log(str, k)
    let distinct = {};
    let length = k;
    let start = 0, end = 0
    distinct[str[0]] = 1;
    while (end < str.length && start <= end) {
      if (Object.keys(distinct).length <= k) {
        length = Math.max(length, end-start+1);
        distinct[str[end+1]] ? distinct[str[end+1]]++ : distinct[str[end+1]] = 1;
        end++;
      } else {
         if (distinct[str[start]] === 1) {
          delete distinct[str[start]];
        } else {
          distinct[str[start]]--;
        }
        start++;
      }
    }
    return length;
  };