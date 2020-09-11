function arr_chunk(array, size) {
  const chunked = [];
  for (let element of array) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
}

console.log(arr_chunk([3, 4, 34, 333, 2, 32, 3, 2], 2));
