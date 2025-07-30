//(7 kyu Reverse words)
function reverseWords(str) {
return str.split(" ").map(ele=>ele.split("").reverse().join("")).join(" ");
}
console.log(reverseWords("Hello World!"));

