// 5 kyu Moving Zeros To The End
function moveZeros(arr) {
  return [...arr.filter(ele=>ele!==0), ...arr.filter(ele=>ele===0)]
}

// 5 kyu RGB To Hex Conversion
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"


function rgb(r, g, b) {
  const toHex = (val)=>{
    const hex = Math.max(0,Math.min(255,val)).toString(16).toUpperCase();
    return hex.padStart(2,'0');
  }
    return `${toHex(r)}${toHex(g)}${toHex(b)}`;
}

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