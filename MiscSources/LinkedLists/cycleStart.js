//Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

//My strategy: first get both nodes in the cycle
//Then count the length of the cycle by sending one around the loop while one stays
//Finally, send one pointer cycle length ahead of the other, and they will meet at the cycle start

class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
  }
  
  const find_cycle_start = function(head){
    let slow = head;
    let fast = head.next;
    while (slow !== fast){
      slow = slow.next;
      fast = fast.next.next;
    }
  
    fast = fast.next;
    count = 1;
    while (slow !== fast){
        fast = fast.next;
        count++;
    }

    slow = head;
    fast = head;
    for (i=0; i<count; i++) {
        fast = fast.next;
    }

    while (slow !== fast){
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

//If I were to do this differently, I'd split the three chunks of the function into different functions
//So they would be reusable
