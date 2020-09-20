function selection_sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minimum_index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimum_index]) {
        minimum_index = j;
      }
    }
    if (minimum_index !== i) {
      let temp = arr[minimum_index];
      arr[minimum_index] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

console.log(selection_sort([12, 1, 2, 43, 9, 8]));
