// 7 kyu Build a square
// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

function generateShape(integer) {
  let sum = "";
  let int = "";

  for (let i = 0; i < integer; i++) {
    for (let i = 0; i < integer; i++) {
      int += "+";
      if (int.length === integer) {
        sum += `${int}\n`;
        int = "";
      }
    }
  }
  return sum.slice(0, sum.length - 1);
}
