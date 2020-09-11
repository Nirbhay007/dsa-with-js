function anagrams(string1, string2) {
  const charmap1 = buildcharmap(string1);
  const charmap2 = buildcharmap(string2);

  if (Object.keys(charmap1).length !== Object.keys(charmap2).length) {
    return false;
  }
  for (let char in charmap1) {
    if (charmap1[char] !== charmap2[char]) {
      return false;
    }
  }
  return true;
}

function buildcharmap(str) {
  let charmap = {};
  for (let char of str.replace(/[^\w]/g, "")) {
    charmap[char] = charmap[char] + 1 || 1;
  }
  return charmap;
}

console.log(anagrams("nirbhay", "rinahib"));
console.log(anagrams("nirbhay", "rinahyb"));
