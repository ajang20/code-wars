function sumMul(n,m){
  if(n===0 && m===0) return "INVALID";
let sumEvenMultiples=0;
let sumOddMultiples=0;
let multiple;
  
  for(let i=1;i<m;i++){
      multiple=n*i;
      sumEvenMultiples+=multiple;
    //   if(n%2===0){
    //         sumEvenMultiples+=multiple;
    //   }
    //   else{
    //       sumOddMultiples+=multiple;
    //  }
  }
  return multiple;
}
console.log(sumMul(2,9));

