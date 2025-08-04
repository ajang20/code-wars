//8kyu Grasshopper - Terminal Game #1
class Hero {
  // add default values here
    constructor(name="Hero") {
      this.name=name;
      this.position="00";
      this.health=100;
      this.damage=5;
      this.experience=0;
        
    }
}

//8 kyu Surface Area and Volume of a Box
function getSize(width, height, depth){
  let volume = width*height*depth;
  let totalSurfaceArea= (2*width*depth)+(2*width*height)+(2*height*depth);
  
  return [totalSurfaceArea,volume];
}
console.log(getSize(4, 2, 6));

//8 kyu Switch it Up!
function switchItUp(number){
switch(number){
    case 0:
    return "Zero";
    case 1:
    return "One";
    case 2:
    return "Two";
    case 3:
    return "Three";
    case 4:
    return "Four";
    case 5:
    return "Five";
    case 6:
    return "Six";
    case 7:
    return "Seven";
    case 8:
    return 'Eight';
    case 9:
    return "Nine";
}
}
console.log(switchItUp(2))

//8 kyu simple calculator
function calculator(a, b, sign) {
  // Check if a and b are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'unknown value';
  }
  
  // Perform the operation based on the sign
  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    case '%':
      return a % b;
    default:
      return 'unknown value';
  }
}

function* Names(){
    console.log("Program starts here");
    const names=['a', "b","c"];
    
for (let name of names){
    yield  name;
    }
    
    console.log("Program ends here!");
   
    
}
let result= Names();
console.log(result.next().value);
