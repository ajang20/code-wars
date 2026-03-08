// 7 kyu Recycle!
// You are having a BBQ, and after the BBQ you are left with some rubbish to recycle.

// There are 3 recycling boxes: Red: Plastic, Green: Glass, Blue: Card.

// You want to sort the rubbish according to the material and return the number of items in each box as an array (or a tuple in Python):

// [plastic, glass, card]
// The material type can be determined based on the sign of the item's value:

// Plastic: value > 0
// Glass: value < 0
// Card: value = 0
// Example
// rubbish = [5, -9, 0, 6, -84, -95, 15]
// // Plastic = 3, Glass = 3, Card = 1
// // Output: [3, 3, 1]

function recycleMe(recycle) {
  const plastic = recycle.filter((ele) => ele > 0);
  const Glass = recycle.filter((ele) => ele < 0);
  const Card = recycle.filter((ele) => ele === 0);

  return [plastic.length, Glass.length, Card.length];
}
