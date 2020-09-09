function int_rev(num) {
  str_num = num.toString();
  new_num = str_num.split("").reverse().join("");
  return parseInt(new_num) * Math.sign(num);
}

console.log(int_rev(-45838));
