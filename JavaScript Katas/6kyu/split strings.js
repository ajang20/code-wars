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