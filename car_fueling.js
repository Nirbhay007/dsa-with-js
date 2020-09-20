let initial_petrol = 30;

const mileage = 1;

const total_dist = 100;

let distCovered = 0;

let dist_covered_in_one_move = Math.floor(Math.random() * 7);

const refill_petrol = 20;

//let petrol_pumps = Math.floor(Math.random() * 101);

function petrol_pumps() {
  arr = [];
  for (let i = 0; i < 5; i++) {
    let petrol_pumps = Math.floor(Math.random() * 101);

    arr.push(petrol_pumps);
  }
  return arr
    .sort(function (a, b) {
      return a - b;
    })
    .toString();
}
console.log(petrol_pumps());

// function getrandomint(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

function game(total_dist, petrol_pump, refill_petrol) {
  let count = 0;
  let i = 0;

  // While we complete the whole journey.
  while (distCovered <= total_dist) {
    // If must visited petrol pump lie
    // between distCovered and distCovered+dist_covered_in_one_move).

    if (distCovered === total_dist) {
      console.log("YOU WIN");
    } else {
      distCovered += refill_petrol;

      // increment the index of compulsory visited
    }
    // make last mustVisited as distCovered

    // if no such must visited pump is

    // Counting the number of refill.
    if (distCovered < refill_petrol) count++;
  }

  return count;
}
