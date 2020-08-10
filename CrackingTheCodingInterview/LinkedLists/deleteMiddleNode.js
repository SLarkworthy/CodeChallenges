//Delete Middle Node
//Implement an algorithm to delete a node in the middle (not the first and last) of a singly linked list, given only access to that node.

//So it's nice we do not have to worry about edge cases
//But the tricky part here is how to connect the previous node to the next node.
//ex we are given node c of a linked list a -> b -> c -> d -> e
//and we don't return anything but the new list must be a -> b -> d -> e
//usually we'd set b.next = d, but we can't access b.
//so the only way I can think of doing this is to TURN D INTO C. 

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

let newList = new SinglyLinkedList();
newList.push(1);
newList.push(2);
newList.push(3);
newList.push(4);
newList.push(5);
newList.push(6);
newList.traverse();

function deleteMiddleNode(node){
  node.val = node.next.val;
  let deleteNode = node.next;
  node.next = deleteNode.next;
  deleteNode.next = null;
}

deleteMiddleNode(newList.head.next.next);
newList.traverse();

//awesome! This is basically the exact book solution