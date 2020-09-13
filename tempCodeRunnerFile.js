function vowels_count(str) {
  let counter = 0;
  const word = str;
  const checker = "a,e,i,o,u";

  for (let char of word) {
    if (checker.includes(char)) {
      counter += 1;
    }
  }

  return counter;
}
console.log(vowels_count("nirbhaysingh"));
