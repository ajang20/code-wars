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

// 7 kyu Credit Card Mask
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "################################man!"
function maskify(cc) {
  if(cc.length<=3) return cc;
let lastStr=cc.slice(cc.length-4);
  return lastStr.padStart(cc.length,"#");
}

// 7 kyu shorter concat [reverse longer]
// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b
function shorterReverseLonger(a,b){
  return a.length>=b.length?`${b}${a.split("").reverse().join("")}${b}`:`${a}${b.split("").reverse().join("")}${a}`;
}

// 7 kyu Sum squares of numbers in list that may contain more lists
// Write a function that sums squares of numbers in list that may contain more lists
// Example:

// var l = [1,2,3]
// SumSquares(l) == 14

// var l = [[1,2],3]
// SumSquares(l) == 14

// var l = [[[[[[[[[1]]]]]]]]]
// SumSquares(l) == 1

// var l = [10,[[10],10],[10]]
// SumSquares(l) == 400
// Note: your solution must NOT modify the original list

// Another Kata involving nested lists here (it's still in beta - more honor points for completing :D): https://www.codewars.com/kata/5786f020e55533ebb7000153

function SumSquares(l){
    return l.flat(Infinity).map(ele=>ele**2).reduce((acc,curr)=>acc+curr,0);
}

// 7 kyu Remove B M W

// It happened decades before Snapchat, years before Twitter and even before Facebook. Targeted advertising was a bit of a challenge back then. One day, the marketing professor at my university told us a story that I am yet to confirm using reliable sources. Nevertheless, I retold the story to dozens of my students already, so, sorry BMW if it is all a big lie.

// Allegedly, BMW, in an attempt to target the educated, produced billboard posters featuring the English alphabet with three letters missing: B, M and W. Needless to say, many were confused, some to the extent of road accidents.

// Your task is to write a function that takes one parameter str that MUST be a string and removes all capital and small letters B, M and W.
// If data of the wrong data type was sent as a parameter the function must throw an error with the following specific message:

// new Error("This program only works for text.");
// For Python here's a good resource you might need for the exception type ;)
function removeBMW(str){
  if(typeof str!=='string'){
    throw new Error("This program only works for text.");
      }
  return str.replace(/[BMW]/ig,"").trim();
  }

//   7 kyu Sum of array singles
//   In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// More examples in the test cases.

// Good luck!

// If you like this Kata, please try:

// Sum of prime-indexed elements

// Sum of integer combinations

function repeats(arr){
return arr.filter((ele,i,arr)=>arr.indexOf(ele)===arr.lastIndexOf(ele)).reduce((curr,next)=>curr+next,0);
}

// 7 kyu Argue the toss
// Your task is to write a function that doesn't have a fixed number of parameters. The function should count the arguments passed to it and return a string that specifies how many arguments were passed in, and states what they were.

// If the function call is

// anArgument("pigs", "giraffes", "unicorns");
// The returned string should say

// 'You gave me 3 arguments and they are "pigs", "giraffes" and "unicorns".'
// If there is only one argument passed in, the string should say

// 'You gave me 1 argument and it is "pigs".'
// If there are two arguments, the string should say

// 'You gave me 2 arguments and they are "pigs" and "giraffes".'
// If there are no arguments, the string should say

// 'You didn't give me any arguments.'
// Punctuation and grammar notes
// There are commas after each argument except the last and second-last, which are separated with 'and'
// Arguments are presented in quotation marks
// The singular: '1 argument' as opposed to multiples: '3 arguments'
// Verb agreement: 'and it is' as opposed to 'and they are'
function anArgument(...arg) {
return arg.length===0?'You didn\'t give me any arguments.':arg.length===1?`You gave me ${arg.length} argument and it is "${arg[0]}".`:`You gave me ${arg.length} arguments and they are ${arg.slice(0,arg.length-1).map(ele=>`"${ele}"`).join(", ")} and "${arg[arg.length-1]}".`;
}

// 7 kyu Sum Array with different bases
// You get an array of different numbers to sum up. But there is one problem, those numbers all have different bases. For example:

// You get an array of numbers with their base as an input:

// [["101",16],["7640",8],["1",9]]
// The output should be the sum as an integer value with a base of 10, so according to the example this would be:

// 4258

// A few more examples:
// [["101",2], ["10",8]] --> 13
// [["ABC",16], ["11",2]] --> 2751
// Bases can be between 2 and 36 (2<=base<=36)

function sumItUp(numbersWithBases){
  return numbersWithBases.reduce((sum,[num,base])=>sum+parseInt(num,base),0)
}


// 7 kyu V A P O R C O D E
// ASC Week 1 Challenge 4 (Medium #1)

// Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

// Note that spaces should be ignored in this case.

// Examples
// "Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
// "Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"

function vaporcode(string) {
  return string.split(" ").map(ele=>ele.toUpperCase()).join("").split("").join("  ");
}

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

function recycleMe(recycle){ 
  
  const plastic= recycle.filter(ele=>ele>0);
  const Glass= recycle.filter(ele=>ele<0);
  const Card= recycle.filter(ele=>ele===0);
  
return [plastic.length,Glass.length,Card.length];
}

// 7 kyu Summing a number's digits
// Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
  return number<0?((number*-1)+"").split("").reduce((sum,num)=>sum+(num*1),0):(number+"").split("").reduce((sum,num)=>sum+(num*1),0);
}


// 7 kyu KISS - Keep It Simple Stupid
// KISS stands for Keep It Simple Stupid. It is a design principle for keeping things simple rather than complex.

// You are the boss of Joe.

// Joe is submitting words to you to publish to a blog. He likes to complicate things.

// Define a function that determines if Joe's work is simple or complex.

// Input will be non emtpy strings with no punctuation.

// It is simple if: the length of each word does not exceed the amount of words in the string (See example test cases)

// Otherwise it is complex.

// If complex:

// return "Keep It Simple Stupid"
// or if it was kept simple:

// return "Good work Joe!"
// Note: Random test are random and nonsensical. Here is a silly example of a random test:

// "jump always mostly is touchy dancing choice is pineapples mostly"

function isKiss( words ){
  let l= (words.split(" ")).length;
  let max= Math.max(...(words.split(" ").map(ele=>ele.length)));
 return max>l?"Keep It Simple Stupid":"Good work Joe!";
}

// 7 kyu Descending Order
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
  return (n+"").split("").map(ele=>ele*1).sort((a,b)=>b-a).map(ele=>ele+"").join("")*1;
}


// 7 kyu Only one
// Task: Write function only_one which return True if ONLY ONE of the boolean flag is True, otherwise return False. If there are no boolean flag, return False

//   onlyOne() --> false
//   onlyOne(true, false, false) --> true
//   onlyOne(true, false, false, true) --> false
//   onlyOne(false, false, false, false) --> false  
function onlyOne(...arg) {
  let bool = arg.filter(ele=>ele===true)
  return bool.length===1?true:false;
}


// 7 kyu Product Of Maximums Of Array (Array Series #2)
// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task
// Given an array/list [] of integers , Find the product of the k maximal numbers.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.

// Input >> Output Examples
// maxProduct ({4, 3, 5}, 2) ==>  return (20)
// Explanation:
// Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .
// maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
// Explanation:
// Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is  8 * 9 * 10 = 720 .
// maxProduct ({10, 8, 3, 2, 1, 4, 10}, 5) ==> return (9600)
// Explanation:
// Since the size (k) equal 5 , then the subsequence of size 5 whose gives product of maxima is  10 * 10 * 8 * 4 * 3 = 9600 .
// maxProduct ({-4, -27, -15, -6, -1}, 2) ==> return (4)
// Explanation:
// Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is  -4 * -1 = 4 .
// maxProduct ({10, 3, -1, -27} , 3)  return (-30)
// Explanation:
// Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is 10 * 3 * -1 = -30 .
// Playing with Numbers Series
// Playing With Lists/Arrays Series
// For More Enjoyable Katas
// ALL translations are welcomed
// Enjoy Learning !!
// Zizou
function maxProduct(numbers, size){
 let sort = numbers.sort((a,b)=>b-a);
  let slice = sort.slice(0,size);
  return slice.reduce((prod,n)=>prod*n,1);
   }