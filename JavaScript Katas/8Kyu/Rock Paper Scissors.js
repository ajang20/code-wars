
// 8 kyu Rock Paper Scissors!
// Rules of the "Rock, Paper, Scissors" game are:

// Rock beats Scissors,
// Scissors beat Paper,
// Paper beats Rock,
// Two identical moves are a draw.
// Let's play! You will be given valid moves of two Rock, Paper, Scissors players, and have to return which player won: "Player 1 won!" for player 1, and "Player 2 won!" for player 2. In case of a draw return Draw!.

// Examples:
// "scissors",     "paper"     --> "Player 1 won!"
// "scissors",     "rock"      --> "Player 2 won!"
// "paper",        "paper"     --> "Draw!"
// rockpaperscissors

const rps = (p1, p2) => {
  
  let [r,p,s] = ["rock","paper","scissors"];
  let p1Won= "Player 1 won!";
  let p2Won= "Player 2 won!";
  
if (p1===s && p2===p){
     return p1Won;
}
 else if(p2===s && p1===p){
     return p2Won;
 }
 else if (p1===r && p2===s){
     return p1Won;
}
 else if(p2===r && p1===s){
     return p2Won;
 }
  else if (p1===p && p2===r){
     return p1Won;
}
 else if(p2===p && p1===r){
     return p2Won;
 }
  else{
    return "Draw!"
  }
};