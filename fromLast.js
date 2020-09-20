function fromLast(list, n) {
  const slow = list.getFirst();
  const fast = list.getFirst();
  while (n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}
