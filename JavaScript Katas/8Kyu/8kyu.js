
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

















































