// 8 kyu Merging sorted integer arrays (without duplicates)
// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
function mergeArrays(a, b) {
  let newArr = [...a, ...b];
  return [...new Set(newArr)].sort((a, b) => a - b);
}
