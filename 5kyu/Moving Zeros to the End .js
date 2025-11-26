// 5 kyu Moving Zeros To The End
function moveZeros(arr) {
  return [...arr.filter(ele=>ele!==0), ...arr.filter(ele=>ele===0)]
}