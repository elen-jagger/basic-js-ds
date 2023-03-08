const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(l, k) {

  let current = l;
  let prev = null;
  let index = 0;

  while (current) {
    console.log('while current');

    if (current.value === k) {
      console.log('==k');

      if (index === 0) {
          console.log('head');

          l = current.next;

          console.log(l);
      } else if (current.next === null) {
        console.log('end');

        prev.next = null;

        console.log(l);
      } else {
        console.log('middle');

        prev.next = current.next;

        console.log(l);
      }

      index--;
    }

    console.log('not k');
    prev = current;
    current = current.next;
    index++;
  }

  return l;
}



module.exports = {
  removeKFromList
};
