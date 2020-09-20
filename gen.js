function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const generators = gen();
console.log(generators.next());
console.log(generators.next());
console.log(generators.next());
