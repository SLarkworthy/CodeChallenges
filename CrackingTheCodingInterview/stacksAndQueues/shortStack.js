class Stack {
    constructor() {
      this._data = [];
    }
    size() {
      return this._data.length;
    }
    isEmpty() {
      return this.size() == 0;
    }
    push(value) {
      this._data.push(value);
    }
    pop() {
      return this._data.pop();
    }
    peek() {
      if (this.isEmpty()) return null;
      return this._data[this.size() - 1];
    }
    toArray() {
      return this._data;
    }
  }
  
  //Sort Stack
  //Write a program to sort a stack such that the smallest items are on the top.
  //You can use an additional temporary stack
  //but you may not copy the elements into any other data structure(such as an array).
  //The stack supports the following operations: push, pop, peek, and isEmpty
  
  //Okay, so we are going to sort everything backwards on the temp Stack
  //This doesn't seem very optimal, but that is likely the point of the problem?
  //So I will first pop the first element off of the stack and push it onto the temp stack.
  //Then we peek both stacks
  //if the top of the temp stack is smaller, great, just pop the value off of the original stack and push it onto the temp stack. Those two values are now sorted.
  //if the top of the temp stack is larger, we need to pop original stack and save that in a variable, then pop values off of temp stack and onto original stack until we find the value's place
  //Then pop everything back onto temp until we find a value that is bigger than peek
  //then we pop and save and find it's place again
  //repeat until original stack is empty,
  //then finally flip everything back onto original stack.
  //we coule also flip everything onto temp stack at the start and build on original...I may do this, it's not more optimal but it feels nicer.
  
  function sortStack(stack){
    let tempStack = new Stack;
    while (!stack.isEmpty()) tempStack.push(stack.pop());
    while (!tempStack.isEmpty()){
      let checkVal = tempStack.pop();
      if (stack.peek() >= checkVal || stack.peek() === null) {
        stack.push(checkVal);
      } else {
        while (stack.peek() < checkVal && !stack.isEmpty()){
          tempStack.push(stack.pop())
        }
        stack.push(checkVal);
        while (tempStack.peek() <= stack.peek() && !tempStack.isEmpty()) {
          stack.push(tempStack.pop());
        }
      }
    }
    return stack;
  }
  
  let stack = new Stack;
  stack.push(2);
  stack.push(7);
  stack.push(3);
  stack.push(4958);
  stack.push(5);
  console.log("start: ", stack.toArray());
  console.log("sorted: ", sortStack(stack).toArray());

//The solution had cleaner code but worked the same logically!


function sortStackFromBook(s){
    let r = new Stack;
    while (!s.isEmpty()){
        let temp = s.pop();
        while (!r.isEmpty() && r.peek() > tmp){
            s.push(r.pop());
        }
        r.push(tmp);
    }
    while (!r.isEmpty()) {
        s.push(r.pop());
    }
    return stack;
  }