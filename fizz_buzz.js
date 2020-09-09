function fizz_buzz(num) {
  //so the numbers would be given from 1 to num
  //we need to console logs all the number but when its divisible by 3,
  //it should be "fizz",by 5 "buzz" and by both "fizzbuzz"

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

console.log(fizz_buzz(50));
