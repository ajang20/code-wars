// 7 kyu Sum and Length

// Description:
// Sum and Length
// In this kata you must return a string value, where the first part is the sum of positive numbers and the second part is the number of negative numbers.

// Knowing that the first 0 is negative, the second is positive, the third is negative, and so on...

// Examples
// [-1,2,3,4,0,1,0,-2,0,-3]

// ==> '10 5'

// sum of positives: 10 = 2 + 3 + 4 + 0 (second) + 1
// count of negatives: 5 ( -1, 0 (first), -2, 0 (third), -3 )


#include<vector>

std::string sumLength(std::vector<int> input)
{
  int sum = 0, count = 0, zero_count = 0; 
  
  for(size_t i=0; i < input.size(); i++){
    if( input[i] > 0 ){
      sum += input[i]; 
    }
    else if( input[i] < 0 ){
      count += 1; 
    }
    else{
      zero_count += 1; 
    }
  }
  
  if( zero_count % 2 == 0){
    count += (zero_count/2); 
  }
  else {
    count += (zero_count - 1)/2 ; 
    count+= 1;
  }
  
  return std::to_string(sum)+" "+std::to_string(count);
}