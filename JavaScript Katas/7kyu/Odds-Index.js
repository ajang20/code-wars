// 7 kyu Odds-Index
// You are given an array with several "even" words, one "odd" word, and some numbers mixed in.

// Determine if any of the numbers in the array is the index of the "odd" word. If so, return true, otherwise false.

// Algorithms

function oddBall(arr) {
  let index = arr.indexOf("odd");
  let bool = arr.includes(index);
  return bool;
}
