// 6 kyu Only Duplicates

// Given a string, remove any characters that are unique from the string.

// Example:

// input: "abccdefee"

// output: "cceee"

function onlyDuplicates(str) {
  let newStr = [...str].filter(
    (ele, i, arr) => arr.lastIndexOf(ele) !== arr.indexOf(ele),
  );
  return newStr.join("");
}
