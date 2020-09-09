function max_chars(str) {
  freq = {};
  max = 0;
  maxChar = [];

  for (let char of str) {
    if (!freq[char]) {
      freq[char] = 0;
    }
    freq[char] += 1;
  }

  for (let char in freq) {
    if (freq[char] > max) {
      max = freq[char];
      maxChar = char;
    }
    return maxChar;
  }
}
console.log(max_chars("nirbhaysingh"));
