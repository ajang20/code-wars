// 8 kyu Area of a Square
// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input.

// A
// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

function squareArea(A) {
  let d = A / (Math.PI / 4);
  let s = d / 2;
  return s ** 2;
}
