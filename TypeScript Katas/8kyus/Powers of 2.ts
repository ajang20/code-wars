// 8 kyu Powers of 2
// Complete the function that takes a non-negative integer
//  n as input, and returns a list of all the powers of 2 
//  with the exponent ranging from 0 to n ( inclusive ).

export function powersOfTwo(n:number):number[]{
  let arr:any = []
  
  for(let i=0;i<=n;i++){
    let num:number = 2**i;
    arr.push(num)
  }
  
  return arr;
}