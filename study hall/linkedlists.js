//References:
// https://www.youtube.com/watch?v=ZBdE8DElQQU
// https://www.30secondsofcode.org/js/s/data-structures-linked-list/


// Linked lists:
// A linear data structure
// Elements are not stored sequentially, but they are linked together with a "pointer"
//    --Each node has an actual element, and the next is the "pointer" that leads to the next one
//    --There is always a head and a tail -> tail leads to NULL which is the end of the list
 
const nodeOne = {
  data: 100
}


const nodeTwo = {
  data: 200
}
// 
nodeOne.next = nodeTwo;

console.log(nodeOne)

//Expected output:

// {data: 100, next: {…}}
// data
// : 
// 100
// next
// : 
// {data: 200}
// [[Prototype]]
// : 
// Object

class Node {
  constructor(data, next = null) { //the "next" is null by default - the last one in a linked list is always NULL
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  coonstructor(){
    this.head = null;
    this.size = 0;
  }

  //insert first node

  //insert last node

  //insert at index

  //get from specific index

  //remove at index

  //clear list

  //print list data
}