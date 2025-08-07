import {add,pi,subtract} from './code.js';
console.log(add(4,5));
console.log(subtract(4,5));
function Names(...names){
    return names;
}
let array=Names("a","b","c");
for(let n in array){
    console.log(array[n]);
}