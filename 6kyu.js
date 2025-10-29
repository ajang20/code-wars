function toCamelCase(str){
  if (str[0]===undefined) return "";

  let newStr="";
  let next=false;
  
  for(let char of str){
    if(char==="-"||char==="_"){
      next=true;
      }
  else{
    newStr+= next?char.toUpperCase():char;
    next=false;
  }
    }
  return newStr;
 }
 console.log(toCamelCase("the-stealth-warrior"));

 /*
 6 kyu Split Strings
 Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

 */
function solution(str){
  let newStr=str.length%2===0?str:str+"_";
const pairs= newStr.match(/.{2}/g) || []
   return pairs;
}

// 6 kyu Consecutive Count
// I want to know the size of the longest consecutive elements of X in Y. You will receive two arguments: items and key. Return the length of the longest segment of consecutive keys in the given items.

// Notes:

// The items and the key will be either an integer or a string (consisting of letters only)
// If the key does not appear in the items, return 0
// Examples
// 90000, 0           -->  4
// "abcdaaadse", "a"  -->  3
// "abcdaaadse", "z"  -->  0
function getConsectiveItems(items, key){
    let regexp= new RegExp(`${key+""}+`,"g");
    let newStr=items+"";
    let matches= newStr.match(regexp);
  if (!matches) return 0;
    return matches.length<=1?matches[0].length:Math.max(...(matches.map(ele=>ele.length)));
}

// 6 kyu Create Phone Number
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
  let first= `(${numbers.slice(0,3)})`.split(",").join("");
  let sec= ` ${numbers.slice(3,6)}`.split(",").join("");
  let third = `-${numbers.slice(6)}`.split(",").join("");
  
  return  first+sec+third;
}