let choices = ["Rock", "Paper", "Scissors"];
let choiceArea = document.getElementById("choice");

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

choiceArea.innerHTML = getComputerChoice();
