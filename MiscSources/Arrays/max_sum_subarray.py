# my first attempt solving with python!

def max_sub_array_of_size_k(k, arr):
  maximum = 0
  start = 0
  end = k - 1
  for i in range(k):
    maximum += arr[i]
  current_sum = maximum
  while end < len(arr) - 1:
    current_sum = current_sum - arr[start] + arr[end + 1]
    print(current_sum)
    start += 1
    end += 1
    maximum = max(current_sum, maximum)
  return maximum

#   not the best syntax-wise but i will keep practicing!