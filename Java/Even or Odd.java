// 8 kyu Even or Odd

// Description:
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

public class Kata {
    public static String evenOrOdd(int number) {
      if (number % 2 == 0 ){
        return "Even";
      }
        return "Odd";
    }
}