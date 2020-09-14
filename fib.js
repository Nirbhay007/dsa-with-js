function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  let array = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = array[i - 1];
    const b = array[i - 2];
    array.push(a + b);
  }
  return array;
}
console.log(fibonacci(15));
