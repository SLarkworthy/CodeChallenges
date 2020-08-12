//Sum Lists
//You have two numbers represented by a linked list, where each node contains a single digit.
//The digits are stored in reverse order, such that the 1s digit is at the head of the list.
//Write a function that adds the two numbers and returns the sum as a linked list.
//You are not allowed to "cheat" and just convert the linked list to an integer. 
//Follow up: repeat the function if the digits were stored in forward order.

//Okay, so the first part of this problem isn't too hard.
//Just traverse each list adding each value to a sum variable.
//And if the numbers are stored in reverse order, one can easily start at the head and multiply each further node by 10 (use a multiplier value, miltiply it by ten each time)
//this WOULD convert it to a number though, and we want to avoid that for now.
//so in order to make a new list without converting to a number first, we'll need a variable to hold any remainders from adding each space together.

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

let list1 = new SinglyLinkedList();
list1.push(7);
list1.push(1);
list1.push(6);
list1.traverse();
let list2 = new SinglyLinkedList();
list2.push(5);
list2.push(9);
list2.push(5);
list2.push(2);

function sumListsForward(list1, list2){
  let remainder = 0;
  let node1 = list1.head;
  let node2 = list2.head;
  let sumList = new SinglyLinkedList();
  let sum = 0;
  while(node1 || node2){
    let val1 = node1 ? node1.val : 0
    let val2 = node2 ? node2.val : 0
    sum = val1 + val2 + remainder;
    remainder = Math.floor(sum / 10);
    sumList.push(sum % 10);
    node1 = node1 ? node1.next : null
    node2 = node2 ? node2.next : null
  }
  if (remainder) sumList.push(remainder);
  return sumList;
}

console.log("should be 2 -> 1 -> 2 -> 3: ");
sumListsForward(list1, list2).traverse();


//not sure how to do this backwards...maybe recursively?
//Here is forward done recursively, from the js solution repo
function sumLinkedLists(node1, node2, carry=0){
    if(!node1 && !node2 && carry===0){
      return null 
    } //break case for recursion: once we have no more nodes and no remainders, stop.
    let value = carry
    value += node1 ? node1.value : 0
    value += node2 ? node2.value : 0
    const node  = new LinkedList(value%10) //this is different from how my constructor works
    //i would instead push the next node on.
    node.next = sumLinkedLists(
      node1 ? node1.next : null,
      node2 ? node2.next : null,
      value > 10 ? 1 : 0)
    return node
  }