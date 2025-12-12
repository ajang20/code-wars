// 7 kyu Most digits

// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

// SOLUTION

function findLongest(array){
  
  return [...array].map(ele=>ele.toString()).sort((a,b)=>b.length-a.length)[0]*1;
}