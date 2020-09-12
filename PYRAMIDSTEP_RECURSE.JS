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

function pyramid(n, row = 0, level = "") {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }
  pyramid(n, row, level + add);
}
