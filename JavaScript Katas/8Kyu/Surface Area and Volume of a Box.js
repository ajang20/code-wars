//8 kyu Surface Area and Volume of a Box
function getSize(width, height, depth){
  let volume = width*height*depth;
  let totalSurfaceArea= (2*width*depth)+(2*width*height)+(2*height*depth);
  
  return [totalSurfaceArea,volume];
}
console.log(getSize(4, 2, 6));