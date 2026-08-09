// 8 kyu Color Ghost

// Color Ghost
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// Ghost ghost = new Ghost();
// ghost.getColor(); //=> "white" or "yellow" or "purple" or "red"


public class Ghost {
  
  private String color ;
  
  public Ghost(){
    String[] arr = {"white","yellow","purple","red"};
    int randomIndex = (int)( Math.random()*arr.length);
    this.color  = arr[randomIndex];
  }
  
  public String getColor(){
    return this.color;
  }
}