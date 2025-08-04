// 

function* displayResponse() {
    const response = yield;
    console.log(`Your response is "${response}"!`);
}

const iterator = displayResponse();

console.log(iterator.next("bose")); 
console.log(iterator.next('Hello Udacity Student'));
 