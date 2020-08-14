//Queue via stacks
//Implement a MyQueue class whcih implements a queue using two stacks.
//Cool, so this will be very slow!
//But we can use one stack to temporarily store values whenever we add a new value
//So that it will end up on the bottom of the stack, and thus would be last out.

class MyQueue {
    constructor(){
      this.queueAsStack = [];
      this.storageStack = [];
    }
  
    enqueue(val){
      while (this.queueAsStack.length > 0) {
        this.storageStack.push(this.queueAsStack.pop());
      }
      this.queueAsStack.push(val);
      while (this.storageStack.length > 0) {
        this.queueAsStack.push(this.storageStack.pop());
      }
    }
  
    dequeue(val){
      return this.queueAsStack.pop();
    }
    printqueue(){
      console.log(this.queueAsStack);
    }
  }
  let queue = new MyQueue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  queue.printqueue();
  queue.dequeue();
  queue.printqueue();

  //The book has a smart solution that waits until an item is dequeued to shift the stacks back
  //this way if we are enqueueing two items in a row we are not shifting back and forth over and over
  //The solution in the js solution github uses a flag to keep track of if the items are flipped or not
  //so it truly only flips if needed.