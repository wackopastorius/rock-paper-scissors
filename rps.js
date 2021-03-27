//when the user inputs a "string",
//the computer returns "rock", "paper", or "scissors".

myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    myString = prompt("What will your choice be?", "Rock, paper or scissors, please!");
    if (myString === "Rock" || myString === "Paper" || myString === "Scissors") {
      alert(myArray[Math.floor(Math.random()*myArray.length)]);  
    } else {
      alert("Does not compute!");
    }
}

computerPlay();