// 7 kyu Summing a number's digits
// Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
  return number < 0
    ? (number * -1 + "").split("").reduce((sum, num) => sum + num * 1, 0)
    : (number + "").split("").reduce((sum, num) => sum + num * 1, 0);
}
