function vowels_count(str) {
  let checker = str.match(/[aeiou]/gi);
  return checker ? checker.length : 0;
}
console.log(vowels_count("nirbhaysingh"));
