//my solution, using recursion:
var fib = function(N) {
    if (N === 0) return 0;
    if (N === 1) return 1;
    return fib(N - 1) + fib(N - 2);
};

//a solution from the discussion board that does not use recursion:

var fib = function(num) {
    if(num === 0 ){return 0};
    if(num === 1 || num === 2){return 1};
      var prev1 = 1;
      var prev2 = 1; 
   while(num>2){
      var sum = prev1+prev2;
       prev1 = prev2
       prev2 = sum;
       num--
   }
return prev2
}

//The recursive solution is O(2^n) time!!! exponential!! Very bad.
//Technically it is not 2, but rather the golden ratio.

//Memoization is a way to handle this!
var memoFib = function(n, memo=[]){
    if (memo[n] !== undefined) return memo[n]
    if (n <= 2) return 1;
    var res = memoFib(n-1, memo) + memoFib(n-2, memo);
    memo[n] = res;
    return res;
}