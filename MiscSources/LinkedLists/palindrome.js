//Find out if a linked list is a palindrome using constant space and ensuring the linked list is in original form by the end.



class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
  }
  
  
const is_palindromic_linked_list= function(head) {
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    const middleNode = slow;
    reverseAfterFirst(middleNode);
  
    let firstNode = head;
    let secondNode = middleNode.next;
    while (secondNode.next){
      if (firstNode.value !== secondNode.value) {
        reverseAfterFirst(middleNode);
        return false;
      }
      firstNode = firstNode.next;
      secondNode = secondNode.next;
    }
  
    reverseAfterFirst(middleNode);
    return true;
  };
  
  function reverseAfterFirst(node){
    let prev = null;
    let current = node.next;
    while (current) {
      let temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
    }
    node.next = prev;
}

// to make this work with constant space, we need to reverse the final half of the list
//then we can use two pointers to compare the first and last half
//then reverse back


head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(2)

console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`)

head.next.next.next.next.next = new Node(2)
console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`)