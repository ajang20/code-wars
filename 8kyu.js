//8kyu Grasshopper - Terminal Game #1
class Hero {
  // add default values here
    constructor(name="Hero") {
      this.name=name;
      this.position="00";
      this.health=100;
      this.damage=5;
      this.experience=0;
        
    }
}

//8 kyu Surface Area and Volume of a Box
function getSize(width, height, depth){
  let volume = width*height*depth;
  let totalSurfaceArea= (2*width*depth)+(2*width*height)+(2*height*depth);
  
  return [totalSurfaceArea,volume];
}
console.log(getSize(4, 2, 6));

//8 kyu Switch it Up!
function switchItUp(number){
switch(number){
    case 0:
    return "Zero";
    case 1:
    return "One";
    case 2:
    return "Two";
    case 3:
    return "Three";
    case 4:
    return "Four";
    case 5:
    return "Five";
    case 6:
    return "Six";
    case 7:
    return "Seven";
    case 8:
    return 'Eight';
    case 9:
    return "Nine";
}
}
console.log(switchItUp(2))

//8 kyu simple calculator
function calculator(a, b, sign) {
  // Check if a and b are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'unknown value';
  }
  
  // Perform the operation based on the sign
  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    case '%':
      return a % b;
    default:
      return 'unknown value';
  }
}

function* Names(){
    console.log("Program starts here");
    const names=['a', "b","c"];
    
for (let name of names){
    yield  name;
    }
    
    console.log("Program ends here!");
   
    
}
let result= Names();
console.log(result.next().value);

/*
Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"
*/

function sumMul(n,m){
  if(n===0 || m<=0) return "INVALID";
let sum = 0;
for(let i=n;i<m;i+=n){
    sum+=i;
}
  return sum;
}

/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/
function findSmallestInt(arr) {
return Math.min(...arr);
}

/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

function countSheeps(sheep){
let count=0;
   for(let i=0;i<sheep.length;i++){
     sheep[i]===true?count++:count;
   }
  return count;
}


/*
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/

function basicOp(operation,a,b){
switch(operation){
    case "+":
    return a+b;
     case "-":
    return a-b;
     case "*":
    return a*b;
     case "/":
    return a/b;
}
}

/*
It is easy to join two strings together like this string1 + string2.

Another way to get the desired result would be with string1.concat(string2)

ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

+ , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

If one of the arguments is a number your code must coerce it into being a string.
*/
function joinStrings(string1, string2){
   return`${string1} ${string2}`
}

// 8 kyu Calculate average
// Write a function which calculates the average of the numbers in a given array.
// Note: Empty arrays should return 0.
function findAverage(array) {
  return array.length>=1?array.reduce((acc,curr)=>acc+curr,0)/array.length:0;
}

// 8 kyu Do you speak "English"?
// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

function spEng(sentence){
return sentence.toLowerCase().includes("english");
}

// 8 kyu Simple multiplication
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(number) {
   return number%2===0?number*8:number*9;
}


// 8 kyu Who ate the cookie?
// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

// Note: Make sure you return the correct message with correct spaces and punctuation.

// Please leave feedback for this kata. Cheers!
function cookie(x){
  return `Who ate the last cookie? ${typeof x==="string"?"It was Zach":typeof x==="number"?"It was Monica":"It was the dog"}!`
}

// 8 kyu Who is going to pay for the wall?
// Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

// Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is.
function whoIsPaying(name){
  
let result=name.slice(0,2).split(" ");
  
return name.length>=3?
[...name.split(" "),...result]
:name.split(" ");
}
// 8 kyu Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example (Input => Output):
// 35231 => [1,3,2,5,3]
// 0     => [0]
function digitize(n) {
  return (n+"").split("").reverse().map(ele=>ele*1);
}

// 8 kyu Area or Perimeter
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.
const areaOrPerimeter = function(l , w) {
 return l===w?l*w:(2*l)+(2*w);
};

// 8 kyu Ensure question
// Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

// For example (Input --> Output)

// "Yes" --> "Yes?" 
// "No?" --> "No?"
function ensureQuestion(s) {
  return s.endsWith("?")?s:`${s}?`;
}

// 8 kyu Merging sorted integer arrays (without duplicates)
// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
function mergeArrays(a, b) {
  let newArr =  [...a,...b];
  return [...new Set(newArr)].sort((a,b)=>a-b);
}

// 8 kyu You Can't Code Under Pressure #1'
// Code as fast as you can! You need to double the integer and return it.
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i;
}

// 8 kyu Function 1 - hello world
// Make a simple function called greet that returns the most-famous "hello world!".
// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?
function greet(){
  return `hello world!`;
}

// 8 kyu Is the string uppercase?
// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
String.prototype.isUpperCase = function() {
  return this.toString()===this.toUpperCase();
}

// 8 kyu Reversed Words
// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
function reverseWords(str){
  return str.split(" ").reverse().join(" ");
}

// 8 kyu Grasshopper - Terminal game move function
// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the die and moves the number of spaces indicated by the die two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15
function move (position, roll) {
 return position+(roll*2);
}

// 8 kyu Add new item (collections are passed by reference)
// Add an item to the list:

// AddExtra method adds a new item to the list and returns the list. The new item can be any object, and it does not matter. (lets say you add an integer value, like 13)

// In our test case we check to assure that the returned list has one more item than the input list. However the method needs some modification to pass this test.

// P.S. You have to create a new list and add a new item to that. (This Kata is originally designed for C# language and it shows that adding a new item to the input list is not going to work, even though the parameter is passed by value, but the value is poining to the reference of list and any change on parameter will be seen by caller)

function addExtra( listOfNumbers ){
  return [...listOfNumbers,"a"];
}

// 8 kyu Remove the time
// Task Description
// You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.

// You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

// Write a function that takes the website date/time in its original string format and returns the shortened format.

// Input
// Input will always be a string, e.g., "Friday May 2, 7pm". 

// Output
// Output will be the shortened string, e.g., "Friday May 2".

function shortenToDate(longDate) {
return longDate.split(" ").slice(0,3).join(" ").replace(/,/,"");
}
// 8 kyu Hex to Decimal
// Complete the function which converts hex number (given as a string) to a decimal number.
function hexToDec(hexString){
return parseInt(hexString,16);
  }

//   8 kyu Parse nice int from char problem

//   You ask a small girl "How old are you?" She always says "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
function getAge(inputString){
return Number(inputString[0]);
}

// 8 kyu How good are you really?
// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!
function betterThanAverage(classPoints, yourPoints) {
  let result= classPoints.reduce((acc,curr)=>curr+acc,0)/classPoints.length;
  return result<yourPoints?true:false;
}
// 8 kyu  Keep Hydrated!
// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5
function litres(time) {
  return Math.floor(time*0.5);
}

// 8 kyu Hello, Name or World!
// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"
function hello(name) {
  return !name?"Hello, World!" :`Hello, ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`;
}

// 8 kyu Quarter of the year
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

// 1 <= month <= 12

const quarterOf = (month) => {
 return month<=3?1:month<=6?2:month<=9?3:month<=12?4:false;
}

// 8 kyu Check same case
// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1
function sameCase(a, b){
  return typeof a!=="string" || typeof b!=="string" 
  || !/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)?-1:
  a===a.toLowerCase() && b===b.toLowerCase() ||
   a===a.toUpperCase() && b===b.toUpperCase()  ?1:0;
}