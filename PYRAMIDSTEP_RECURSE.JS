function recurse_pyramidstep(n, row = 0, res = "") {
  if (n == row) {
    return;
  }

  if (res.length === 2 * n - 1) {
    console.log(res);
    return recurse_pyramidstep(n, row + 1);
  }
  const mid = Math.floor((2 * n - 1) / 2);
  let add;
  if (mid - row <= res.length && mid + row >= res.length) {
    add = "#";
  } else {
    add = " ";
  }

  return recurse_pyramidstep(n, row, res + add);
}
recurse_pyramidstep(5);
