function stepper(size) {
  for (row = 0; row < size; row++) {
    let stair = "";
    for (col = 0; col < size; col++) {
      if (col <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}

console.log(stepper(5));
