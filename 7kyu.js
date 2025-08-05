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

