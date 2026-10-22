// 8 kyu Grasshopper - Summation

// Description:
// Summation
// Write a program that finds the summation of every number from 1 to num (both inclusive). The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)


public class GrassHopper {

    public static int summation(int n) {
      if (n <=1){
        return n;
      }
      
      int sum = 0; 
      for(int i=1;i <= n ; i++){
        sum += i;
      }

        return sum;
    }
}