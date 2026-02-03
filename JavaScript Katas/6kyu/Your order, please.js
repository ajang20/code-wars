// 6 kyu Your order, please

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words){
    if(words==='') return '';
    
    let arr = words.split(" ") //array of words 
    let ordered = [];//new array where all words will be arranged in order
    let noArr = [];//Array of numbers
    
     for(let i=0;i<arr.length;i++){
      noArr.push(i+1)
    }
    
    for(let i=0;i<arr.length;i++){
        let min = Math.min(...noArr)
        
       for(let j=0;j<arr.length;j++){
            if( arr[j].includes(`${min}`)){
            ordered.push(arr[j])
        }
       }
        noArr.shift();
    }
    
  return ordered.join(' ')
}