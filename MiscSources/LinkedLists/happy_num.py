# this isn't quite a linked list problem, but it's similar to finding a cycle in a linked list
# Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’

def find_happy_number(num):
  num1 = sum_squared_digits(num, 0)
  num2 = sum_squared_digits(sum_squared_digits(num, 0), 0)
  while num1 != num2:
    num1 = sum_squared_digits(num1, 0)
    num2 = sum_squared_digits(sum_squared_digits(num2, 0), 0)
  return num1 == 1

def sum_squared_digits(num, current_sum):
  if num == 0:
    return current_sum
  digit = num % 10
  num = (num - digit) / 10
  current_sum += digit * digit
  return sum_squared_digits(num, current_sum)

def main():
  print(find_happy_number(23))
  print(find_happy_number(12))


main()