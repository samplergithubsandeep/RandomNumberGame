let firstNumber =  Math.ceil(Math.random() * 100); 
let secondNumber = Math.ceil(Math.random() * 100); // Random number between 1 and 100
document.getElementById("firstNumber").textContent = firstNumber;
document.getElementById("secondNumber").textContent = secondNumber;

let userInput = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");

let checkButton = document.getElementById("checkButton");

checkButton.onclick = function(){
     let Answer = parseInt(userInput.value);
     let correctAnswer = firstNumber+secondNumber;
     
    if (Answer === correctAnswer) {
        // Correct answer
        gameResult.textContent = "Correct!";
        gameResult.style.color = "green";
    } else {
        // If the input is incorrect
        gameResult.textContent = `Incorrect! The correct answer is ${correctAnswer}`;
        gameResult.style.color = "red";}
        
        if (isNaN(Answer)){
            gameResult.textContent ="enter only numbers";
            gameResult.style.color ="blue";
        }
};

let restartButton = document.getElementById("restartButton");


restartButton.onclick = function(){
let firstNumber =  Math.ceil(Math.random() * 100); 
let secondNumber = Math.ceil(Math.random() * 100); // Random number between 1 and 100
document.getElementById("firstNumber").textContent = firstNumber;
document.getElementById("secondNumber").textContent = secondNumber;
userInput.textContent = "";
 gameResult.textContent = "";

    
};

