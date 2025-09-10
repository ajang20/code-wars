//(7 kyu Reverse words)
function reverseWords(str) {
return str.split(" ").map(ele=>ele.split("").reverse().join("")).join(" ");
}
console.log(reverseWords("Hello World!"));

// 7 kyu Return the first M multiples of N
// 712690% of 1,3463,501 of 10,475diophore6 Issues Reported
//  JavaScript
// Node v18.x
// VIM
// EMACS
// Instructions
// Output
// Implement a function that takes two numbers m and n and returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

// Ex.

// (3, 5.0) --> [5.0, 10.0, 15.0]

function multiples(m, n){
  let multiple=1;
  let result=[];
for( let i=1;i<=m;i++){
multiple=i*n
  result.push(multiple);
}
 return result;
}

/*
Fun with ES6 Classes #3 - Cuboids, Cubes and Getters
Task
Define the following classes.

I. Cuboid
The object constructor for the class Cuboid should receive exactly three arguments in the following order: length, width, height and store these three values in this.length, this.width and this.height respectively.

The class Cuboid should then have a getter surfaceArea which returns the surface area of the cuboid and a getter volume which returns the volume of the cuboid.

II. Cube
class Cube is a subclass of class Cuboid. The constructor function of Cube should receive one argument only, its length, and use that value passed in to set this.length, this.width and this.height.

Hint: Make a call to super, passing in the correct arguments, to make life easier ;)

Related Articles
Listed below are a few articles of interest that may help you complete this Kata:

Stack Overflow - What are getters and setters in ES6?
getter - Javascript | MDN
*/
class Cuboid {
constructor(length,width,height){
  this.length=length;
  this.width= width;
  this.height=height;
}
  get surfaceArea(){
    return (2*this.length*this.width)
     +(2*this.length*this.height)
     +(2*this.width*this.height);
  }
  get volume(){
    return this.length*this.width*this.height;
  }
}
class Cube extends Cuboid {
 constructor(length){
   super(length,length,length)
 }
}

/*
7 kyu Playing with Sets : Union
Set objects are new JavaScript built-in objects defined since ECMAScript 2015

A Set lets you store unique values of any type. It comes with some useful methods like .add, .clear, .has . . . BUT some "Set operations" are missing, like . . .

Union

Two sets can be "added" together. The union of A and B, denoted by A ∪ B, is the set of all things that are members of either A or B.

Examples:
  {1, 2} ∪ {1, 2} = {1, 2}.
  {1, 2} ∪ {2, 3} = {1, 2, 3}.
  {1, 2, 3} ∪ {3, 4, 5} = {1, 2, 3, 4, 5}
Task
Create function union getting 2 sets as arguments and returning a new Set as result of union of these 2 sets.

Examples:
A = new Set([1,2]);
B = new Set([2,3]);

C = union(A,B) // -> {1,2,3}
 

" May the Code be with you ! "
*/
function union(s1, s2){
    return new Set([...s1,...s2]);
}

// 7 kyu reverseIt
// You have to create a function named reverseIt.

// Write your function so that in the case a string or a number is passed in as the data , you will return the data in reverse order. If the data is any other type, return it as it is.

// Examples of inputs and subsequent outputs:

// "Hello" -> "olleH"

// "314159" -> "951413"

// [1,2,3] -> [1,2,3]
function reverseIt(data) {
  if (typeof data === 'string') {
    return [...data].reverse().join("");
  }
  else if (Array.isArray(data)) {
    return data.slice().reverse();
  } 
  else if (typeof data==="number"){
   return Number((data+"").split("").reverse().join("")) 
  }
else{
  return data;
}
}


// 7 kyu Flatten
// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]
var flatten = function (array){
  return array.flat();
}


// 7 kyu Sum of two lowest positive integers
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.
function sumTwoSmallestNumbers(numbers) {
  let min = Math.min(...numbers);
  
  let numsCopy = [...numbers];
  numsCopy.splice(numsCopy.indexOf(min), 1);
  let min2 = Math.min(...numsCopy);
  
  return min + min2;
}

// 7 kyu Name Array Capping
// Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.

// Examples
// ["jo", "nelson", "jurie"] -->  ["Jo", "Nelson", "Jurie"]
// ["KARLY", "DANIEL", "KELSEY"] --> ["Karly", "Daniel", "Kelsey"]
function capMe(names) {
return names.map(ele=>ele[0].toUpperCase()+ele.slice(1).toLowerCase());
}

// 7 kyu Automorphic Number (Special Numbers Series #6)
function automorphic(n){
  return (n**2+"").endsWith((n+""))?"Automorphic":"Not!!";
}

// 7 kyu The Power of Exponents
// This kata is based on: Exponent Method

// Create a method called power that takes two integers and returns the value of the first argument raised to the power of the second.

// Unlike the Exponent Method, you should also take in account negative exponents.

// Your solution won't be tested against special cases leading to undefined values (0**-2 for example)

// Note: The ** operator (JS: Math.pow) has been disabled.

// Examples:

// power(2, 3)   // 8
// power(4, -2)  // 0.0625
function power(base, exponent){
return base**exponent;
}