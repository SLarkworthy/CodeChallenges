//Return Kth to Last:
//Implement an algorithm to find the kth to last element of a singly linked list.

//Okay, so we'll need two pointers for this.
//One will lag k elements behind the first, and when the first passes the end of the list, the second pointer will be on the kth to last element. 

//ALTERNATEIVELY since the constructor I like to use for linked lists has a length property, we can just subtract k from the length and traverse to that element. Let's do that first.


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
    traverse(){
      let current = this.head
      while(current){
        console.log(current.val);
        current = current.next;
      }
    }
}

function kthToLast(list, k){
  let place = list.length - k
  let current = list.head;
  for (let i=0; i < place; i++) {
    current = current.next;
  }
  return current;
}

let newList = new SinglyLinkedList();
newList.push(1);
newList.push(2);
newList.push(3);
newList.push(4);
newList.push(5);
newList.push(6);
newList.push(7);
newList.push(8);
newList.push(9);
newList.push(10);
newList.traverse()
console.log("val should be 7", kthToLast(newList, 4));

//oops... the book says "this solution is so trivial, we can almost be sure this is not what the interviewer intended."
//okay...here it is with two pointers, and then I'll look at the recursive solution.

function kthToLastTwoPointers(list, k){
    let p1 = list.head;
    let p2 = list.head;
    for (i=0; i < k; i++){
        p2 = p2.next;
    }
    while (p2){
      p1 = p1.next;
      p2 = p2.next;
    }
    return p1;
}


  