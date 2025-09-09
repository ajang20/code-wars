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

8 kyu Who is going to pay for the wall?
Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is.
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