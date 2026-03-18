// 7 kyu Name Array Capping
// Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.

// Examples
// ["jo", "nelson", "jurie"] -->  ["Jo", "Nelson", "Jurie"]
// ["KARLY", "DANIEL", "KELSEY"] --> ["Karly", "Daniel", "Kelsey"]
function capMe(names) {
  return names.map((ele) => ele[0].toUpperCase() + ele.slice(1).toLowerCase());
}
