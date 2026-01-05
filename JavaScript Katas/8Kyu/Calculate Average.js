// 8 kyu Calculate average
// Write a function which calculates the average of the numbers in a given array.
// Note: Empty arrays should return 0.
function findAverage(array) {
  return array.length>=1?array.reduce((acc,curr)=>acc+curr,0)/array.length:0;
}