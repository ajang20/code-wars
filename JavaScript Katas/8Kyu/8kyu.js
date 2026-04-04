
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

























































