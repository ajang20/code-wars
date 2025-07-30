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
