function fib_r(n) {
  if (n <= 1) {
    return n;
  } else {
    return fib_r(n - 1) + fib_r(n - 2);
  }
}
console.log(fib_r(5));
