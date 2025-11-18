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

// 7 kyu Leap Years
// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// Years divisible by 4 are leap years,
// but years divisible by 100 are not leap years,
// but years divisible by 400 are leap years.
// Tested years are in range 1600 ≤ year ≤ 4000.

function isLeapYear(year) {
  return year%4===0 && year%100!==0 || year%400===0? true:false;
}
// 8 kyu Grasshopper - Basic Function Fixer
// Fix the function
// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

// Can you help me fix the function?

function addFive(num) {
  var total = num + 5;
  return total;
}

// 8 kyu Grasshopper - Debug
// Debug celsius converter
// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

// Find the errors in the code to get the celsius converter working properly.

// To convert fahrenheit to celsius:

// celsius = (fahrenheit - 32) * (5/9)
// Remember that typically temperatures in the current weather conditions are given in whole numbers. It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth. Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.

function weatherInfo (temp) {
  let c = convertToCelsius(temp);
  if (c <= 0){
    return (c + " is freezing temperature");
    }
  else{
    return (c + " is above freezing temperature");
    }
}

function convertToCelsius (temperature) {
  let celsius = (temperature - 32 ) * (5/9);
  return celsius;
}

// 8 kyu Array plus array
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
  return [...arr1,...arr2].reduce((curr,next)=>curr+next,0); //something went wrong
}

// 8 kyu Multiplication table for number
// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

function multiTable(number) {
  let result = '';
  for (let i = 1; i <= 10; i++) {
    let product = i * number;
    result+= `${i} * ${number} = ${product}`;
     if (i !== 10) result += '\n';
//     result += (i + ' * ' + number + ' = ' + product + '\n');
  }
  return result;
}

// 8 kyu The 'if' function
// Create a function that takes three arguments:

// a value to be evaluated for truthiness.
// a function to execute if the first argument is truthy.
// a function to execute if the first argument is falsy.
// If the first argument evaluates to truthy, call the second argument (a function). If it evaluates to falsy, call the third argument instead (also a function).

// Note: The first argument can be any value, since most languages allow any value to be interpreted as truthy or falsy. In strongly typed languages, however, it will typically be a boolean.

function _if(bool, func1, func2) {
 return bool?func1():func2();
}

// 8 kyu Filter out the geese
// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let common= geese.includes(birds);
  return birds.filter(ele=>!geese.includes(ele));
  }

//   8 kyu Did she say hallo?
// You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

// Write a simple function to check if the string contains the word hallo in different languages.

// These are the languages of the possible people you met the night before:

// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish
// Notes

// you can assume the input is a string.
// to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
// function should be case insensitive to pass the tests

function validateHello(greetings) {
 let res =  /hello|ciao|salut|hallo|hola|ahoj|czesc/ig.test(greetings); 
  return res;
}

// 8 kyu Sum without highest and lowest number
// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
  if(!array || array.length<=2) return 0;
  
  const sort= array.slice().sort((a,b)=>a-b);
  sort.pop();
  sort.shift();
  
  return sort.reduce((sum,num)=>sum+num,0);
}

// 8 kyu Swap Values
// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?
function swapValues(arr) {
  return [arr[0],arr[1]]=[arr[1],arr[0]];
}

// 8 kyu Flick Switch
// Task
// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.

// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
// Notes
// "flick" will always be given in lowercase.
// A list may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.

function flickSwitch(arr){
 let bool = true;
   
  return arr.map(word=>{
    if(word==="flick") bool=!bool;
    return bool;
  });
  
}

// 8 kyu Plural
// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.

function plural(n) {
 return n!==1?true:false;
}


// 8 kyu Find the Difference in Age between Oldest and Youngest Family Members
// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

function differenceInAges(ages){
  let min =Math.min(...ages);
  let max = Math.max(...ages);
  let diff = max-min;
  return [min,max,diff];
}


// 8 kyu Grader
// Create a function that takes a number as an argument and returns a grade based on that number.

// Score	Grade
// Anything greater than 1 or less than 0.6	"F"
// 0.9 or greater	"A"
// 0.8 or greater	"B"
// 0.7 or greater	"C"
// 0.6 or greater	"D"
// Examples:

// grader(0)   should be "F"
// grader(1.1) should be "F"
// grader(0.9) should be "A"
// grader(0.8) should be "B"
// grader(0.7) should be "C"
// grader(0.6) should be "D"


function grader(score) {
  
      if(score>1 || score< 0.6){
        return "F";
      }
    else if(score>=0.9){
       return "A";
  }
  else if(score>=0.8){
       return "B";
  }
  else if(score>=0.7){
       return "C";
  }
  else{
       return "D";
  }
  }

//   8 kyu Be Concise I - The Ternary Operator
// // TODO: Refactor and shorten the function
// Be Concise I - The Ternary Operator
// You are given a function that takes a parameter age (which will always be a positive integer) and does the following:

// If the age is 12 or lower, it return "You're a(n) kid"
// If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
// If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
// If the age is 65 or above, it return "You're a(n) elderly"
// Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.

// I'll give you a few hints:

// The title itself is a hint - if you're not sure what to do, always research any terminology in this description that you have not heard of!
// Don't you think the whole "You're a(n) <insert_something_here>" is very repetitive? ;) Perhaps we can shorten it?
// Write everything in one line, \n and other whitespaces counts.
// Whatever you do, do not change what the function does. Good luck :)



 let describeAge=age=>{
   let w=`You're a(n)`
  return age<=12?`${w} kid`:age>=13&&age<=17?`${w} teenager`:age>=18&&age<=64?`${w} adult`:`${w} elderly`
}