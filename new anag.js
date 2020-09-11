function anagrams(str1, str2) {
  return clean_str(str1) === clean_str(str2);
}

function clean_str(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

console.log(anagrams("nirbhay", "rinaib"));
console.log(anagrams("nirbhay", "rinahyb"));
