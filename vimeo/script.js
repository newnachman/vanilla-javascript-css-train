// q from interview at Vimeo
let array =      [1, 1, 2, -1, 3, -10, 4];
let arrayIndex = [ 0, 1, 2,  3, 4,   5, 6];
// max + next > 0,  max < next
let max = 0;
let sum = 0;


for(let i = 0; i<array.length; i++) {

  if (i === 0) { // First initial number
    sum = array[i];
    max = array[i];
  } else { // Next iteration after first
    if ((array[i] + sum) <= 0) {// Current item value plus sum is less then 0. --> (5 + (-7))
      // Then restart sum to count from current value
      sum = array[i];
    } else { // Current value can be added to sum
      sum += array[i];
    }
  }

  if (sum > max) {
    max = sum;
  }


}

// console.log('max: ', max); 
// console.log('sum: ', sum);
