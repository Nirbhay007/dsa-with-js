function circular(list) {
  const first = list.getFirst();
  const second = list.getFirst();

  while (second.next && second.next.next) {
    first = first.next;
    second = second.next.next;

    if (first === second) {
      return true;
    }
  }
  return false;
}
