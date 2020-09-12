function RecursiveSteps(n, row = 0, stair = "") {
  if (n == row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return RecursiveSteps(n, row + 1);
  }
  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  return RecursiveSteps(n, row, stair);
}
RecursiveSteps(5);
