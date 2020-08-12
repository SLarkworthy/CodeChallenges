//Palindrome
//Implement a function to check if a linked list is a palindrome.
//if this was an array problem, I would use two pointers.
//if we reverse the linked list, we can then compare the two lists.
//this is linear space complexity but also linear time.

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    unshift(val){
      let newNode = new Node(val);
      if(!this.head){
        this.head = newNode;
        this.tail = this.head;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
      return this;
    }
    traverse(){
      let current = this.head
      while(current){
        console.log(current.val);
        current = current.next;
      }
    }
}

let newList = new SinglyLinkedList();
newList.push(2);
newList.push(5);
newList.push(6);
newList.push(5);
newList.push(2);
newList.traverse();




function isPalindrome(list) {
  let reversedList = new SinglyLinkedList();
  let node = list.head;
  while (node) {
    reversedList.unshift(node.val)
    node = node.next;
  }
  let node1 = list.head;
  let node2 = reversedList.head;
  while (node1) {
    if (node1.val !== node2.val) return false;
    node1 = node1.next;
    node2 = node2.next;
  }
  return true;
}

isPalindrome(newList);


//Another way we could do this is with a stack.
//Use two pointers, one that moves one item in the list, and one that moves two items.
//When the second pointer hits the end of the list, the first pointer would have added half to the stack
//Then just pop each value off the stack and compare to the rest of the list
//Be careful of odd lengths - this could be taken care of by checking when the second pointer hits the end

//The book also has a recursive solution that I do not yet understand. It's VERY long.