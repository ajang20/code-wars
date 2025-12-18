// 6 kyu Stop gninnipS My sdroW!

// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (just like the name of this kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

export function spinWords(words: string): string {
  let arr:string[] = words.split(" ");
  let newArr:string[] =[" "];
  
  for(let i=0;i<arr.length;i++){
    arr[i].length>=5?
    newArr.push([...arr[i]].reverse().join("")):
    newArr.push(arr[i])
  }
  
  return newArr.join(" ").trim();
}