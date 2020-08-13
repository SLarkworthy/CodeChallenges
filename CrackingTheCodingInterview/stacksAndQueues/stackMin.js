//Stack min
//How would you design a stack which, in addition to push and pop, has a function min which returns the min element?
//push, pop, and min should all operate in O(1) time. 

//This isn't too bad. Just keep track of the min element and check if it needs to be updated every time we push.

class Stack {
    constructor(){
      this._data = [];
      this.min = null;
    }
  
    push(val){
      this._data.push(val);
      if (this.min === null || this.min > val){
        this.min = val;
      }
    }
  
    array(){
      return this._data;
    }
  
    mini(){
      return this.min;
    }
  }
  
  let stack = new Stack();
  stack.push(2);
  stack.push(7);
  stack.push(4);
  stack.push(3);
  stack.push(-5);
  
  console.log(stack.mini(), stack.array());