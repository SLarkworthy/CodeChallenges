//Remove Dups
//Write code to remove duplicates from an unsorted linked list.
//FOLLOW UP
//How would you solve this problem if a temporary buffer is not allowed?

//So my first thoughts are that I'm not sure what an unsorted linked list is OR what a temporary buffer is.
//So this one I may have to reference the solutions for.
//But if it's similar to how I would remove duplicates from an array....
//I would iterate through, adding elements to a hash and if an element already exists, remove it from the array.


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

function removeDups(list){
  let valHash = {};
  let current = list.head;
  let previous = null;
  while (current){
    if (valHash[current.val]) {
      let next = current.next;
      if (next) {
      previous.next = next;
      current.next = null;
      list.length--;
      current = next;
      //previous stays the same
      } else {
        list.tail = previous;
        previous.next = null;
      }
      list.length--;
      current = next;
    } else {
      valHash[current.val] = true;
      previous = current;
      current = current.next;
    }
  }
  return list;
}

let newList = new SinglyLinkedList();
newList.push(3);
newList.push(3);
newList.push(7);
newList.push(8);
newList.push(7);
newList.push(3);
console.log(removeDups(newList));
newList.traverse();
newList.push(234);
newList.push(564);
newList.traverse();

//So I did this using very few helper methods
//but if I was doing this for real I'd rather use a remove() method defined inide of the SLL class
//The place I struggled briefly in was when the final element was a duplicate, because I had to redefine the tail
//otherwise I was no longer able to add new nodes to the list
//this is fixed by the if(next) branch

