// 7 kyu Sum ALL the arrays!
// Description:
// You are given an array of values.

// Sum every number value in the array, and any nested arrays (to any depth).

// Ignore all other types of values.

// If there are no numbers at all in the array, take the empty sum to be zero.

function arraySum(arr) {
  const flatArr = arr.flat(Infinity).filter( i => typeof i === "number")
  return flatArr.reduce((sum,i) => sum + i,0);
}