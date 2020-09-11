function arr_chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}
console.log(arr_chunk([322, 323, 4, 2, 6, 7, 5, 9], 2));
