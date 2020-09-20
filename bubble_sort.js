function bubblesort(arr) {
  let flag = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = 1;
      }
    }
    if (flag == 0) {
      break;
    }
  }
  return arr;
}

console.log(bubblesort([23, 42, 1, 2, 45, 18]));
