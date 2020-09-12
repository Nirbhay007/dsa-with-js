//we need to achieve the pyramid shape with steps
/* the shape would look like for n=2: col=3
                           #
                         # # #
                         
                         for n=3
                           #
                         # # #     col=5
                       # # # # #
 */

function pyramindSteps(n) {
  const mid = Math.floor((2 * n - 1) / 2);
  for (let i = 0; i < n; i++) {
    let res = "";
    for (let j = 0; j < n * 2 - 1; j++) {
      if (mid - i <= j && mid + i >= j) {
        res += "#";
      } else {
        res += " ";
      }
    }
    console.log(res);
  }
}
console.log(pyramindSteps(5));
