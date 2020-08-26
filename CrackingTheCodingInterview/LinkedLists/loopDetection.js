class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
  }
  
  const has_cycle = function(head) {
    let fastPointer = head.next;
    let slowPointer = head;
    while (fastPointer.next && fastPointer.next.next) {
      if (fastPointer === slowPointer) return true;
      fastPointer = fastPointer.next.next;
      slowPointer = slowPointer.next;
    }
    return false
  }
  
  
  head = new Node(1)
  head.next = new Node(2)
  head.next.next = new Node(3)
  head.next.next.next = new Node(4)
  head.next.next.next.next = new Node(5)
  head.next.next.next.next.next = new Node(6)
  console.log(`LinkedList has cycle: ${has_cycle(head)}`)
  
  head.next.next.next.next.next.next = head.next.next
  console.log(`LinkedList has cycle: ${has_cycle(head)}`)
  
  head.next.next.next.next.next.next = head.next.next.next
  console.log(`LinkedList has cycle: ${has_cycle(head)}`)

  //I did look at some pseudocode first because I wasn't sure if I could compare nodes like this!
  //It was much simpler than I thought.