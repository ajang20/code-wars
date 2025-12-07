// 5 kyu Simple Pig Latin
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  let char = str[str.length-1];
  let result= str.split(" ").filter(ele=>ele!==char).map(ele=>ele.slice(1)+ele.at(0)+"ay").join(" ");
  return result.includes(`${char}`)?str.split(" ").map(ele=>ele.slice(1)+ele.at(0)+"ay").join(" "):`${result} ${char}`;
}
