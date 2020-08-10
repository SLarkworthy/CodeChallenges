//Partition
//Write code to partition a linked list around a value x, such that all the nodes less than x come before all nodes greater than or equal to x.
//The partition element can appear anywhere in the "right partition"
//It does not need to appear between the left and right partitions.

//This is tricky! So my first thought is to traverse the linked list, making two new linked lists in the process, and then linking those lists together. 
//We could also traverse the original list twice, once to get the smaller values and once to get the larger
//or create arrays of nodes to store them and at the end create a new list.(increases space complexity)
//could also create one new list for bigger numbers, then traverse the original list adding big nodes to the new list and then deleting them from the original list.
//We could also create one new list, and push bigger elements to the end while shifting smaller elements to the beginning. I'm going to try this way!

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

let list = new SinglyLinkedList();
list.push(1);
list.push(29452);
list.push(1);
list.push(17);
list.push(50);
list.push(6);
list.traverse();

function partition(list, num){
  let current = list.head;
  let newList = new SinglyLinkedList();
  newList.head = current;
  newList.tail = current;
  while (current) {
    let next = current.next //saves this node
    if (current.val >= num) {
      newList.tail.next = current;
      newList.tail = current;
      newList.tail.next = null;
    } else {
      current.next = newList.head;
      newList.head = current;
    }
    current = next;
    console.log(current)
  }
  return newList;
};

partition(list, 10).traverse();