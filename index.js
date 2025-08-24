import {add,pi,subtract,upperCase} from './code.js';
console.log(add(4,5,1));
console.log(subtract(4,5,1));

function Names(...names){
    return names;
}
let array=Names("a","b","c");
for(let n in array){
    console.log(array[n]);
}
console.log(upperCase("hello"))