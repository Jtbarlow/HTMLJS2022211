//canvas drawing stuff
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");
var rps = ["rock", "paper", "scissors"];

//console.log(rps[0]);

document.getElementById("rock").addEventListener("click", function (e) {
    ctx.clearRect(0,0,1000,600);
    
    playGame(rps[0]);
});

document.getElementById("paper").addEventListener("click", function (e) {
    ctx.clearRect(0,0,1000,600);
    playGame(rps[1]);
});

document.getElementById("scissors").addEventListener("click", function (e) {
    ctx.clearRect(0,0,1000,600);
    playGame(rps[2]);
});

function playGame(playerChoice) {
    var cpuChoice = Math.floor(Math.random() * 2.99);
    console.log(cpuChoice, playerChoice);

    switch (playerChoice) {
        case "rock":
            if (cpuChoice == 0) {
                ctx.font = "20px Arial";
                ctx.fillStyle = "blue";
                ctx.fillText("CPU chose rock, it's a tie", 400,200);

            }
            else if (cpuChoice == 1) {
                ctx.font = "20px Arial";
                ctx.fillStyle = "blue";
                ctx.fillText("CPU chose paper, you lose", 400,200);
                
            }
            else {
                ctx.font = "20px Arial";
                ctx.fillStyle = "blue";
                ctx.fillText("CPU chose scissors, you win", 400,200);
            }

            break;
        case "paper":
            if (cpuChoice == 0) {
                ctx.font = "20px Arial";
                ctx.fillStyle = "blue";
                ctx.fillText("CPU chose rock, you win", 400,200);
            }
            else if (cpuChoice == 1) {
                ctx.font = "20px Arial";
                ctx.fillStyle = "blue";
                ctx.fillText("CPU chose paper, it's a tie", 400,200);
            }
            else {
                ctx.font = "20px Arial";
                ctx.fillStyle = "blue";
                ctx.fillText("CPU chose scissors, you lose", 400,200);
            }

            break;
        case "scissors":
            if (cpuChoice == 0) {
                ctx.font = "20px Arial";
                ctx.fillStyle = "blue";
                ctx.fillText("CPU chose rock, you lose", 400,200);
            }
            else if (cpuChoice == 1) {
                ctx.font = "20px Arial";
                ctx.fillStyle = "blue";
                ctx.fillText("CPU chose paper, you win", 400,200);
            }
            else {
                ctx.font = "20px Arial";
                ctx.fillStyle = "blue";
                ctx.fillText("CPU chose scissors, it's a tie", 400,200);
            }

            break;
    }
}
