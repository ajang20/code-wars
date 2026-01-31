// 6 kyu Sorted Arrays
// Given any number of arrays each sorted in ascending order, find the nth smallest number of all their elements.

// All the arguments except the last will be arrays, the last argument is n.

// nthSmallest([1,5], [2], [4,8,9], 4) // returns 5 because it's the 4th smallest value
// Be mindful of performance.

function nthSmallest(...arr) {
  let n = arr[arr.length - 1];
  let array = arr.slice(0, arr.length - 1);
  return array.flat(Infinity).sort((a, b) => a - b)[n - 1];
}
