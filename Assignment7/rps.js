//canvas drawing stuff
var canvas = document.getElementById("c")
var ctx = canvas.getContext("2d")

var attack = new Image()
var special = new Image()
var grab = new Image()
var hattack = new Image()
var hspecial = new Image()
var hgrab = new Image()

attack.src = "images/attack.png"
special.src = "images/special.png"
grab.src = "images/grab.png"
hattack.src = "images/hattack.png"
hspecial.src = "images/hspecial.png"
hgrab.src = "images/hgrab.png"

attack.onload = function(){
    draw(attack,special,grab,hattack,hspecial,hgrab)
}


document.addEventListener("keydown", onKeyDown)
document.addEventListener("keyup", onKeyUp)

var gameOver = true
var results = "Select attack, special, or grab above."
function onKeyDown(e){
    console.log(e.keyCode)
}

function onKeyUp(e){
    if(e.keyCode == 32){
        console.log("You pressed the spacebar")
        gameOver = false
        draw(attack,special,grab,attack,special,grab)
    }
}

function draw(attack, special, grab, cattack, cspecial, cgrab){
    if(gameOver == true){
        //Drawing the Fonts
ctx.font = "40px Arial"
ctx.fillStyle = "red"
ctx.strokeStyle = "red"
ctx.textAlign = "center"
ctx.fillText("Welcome to the RPS Game", canvas.width/2, 280)
ctx.fillText("Press space to Start", canvas.width/2, 320)
ctx.strokeText("Welcome to the RPS Game", canvas.width/2, 280)
    }
    else{
        ctx.save()
        ctx.clearRect(0,0, canvas.width, canvas.height)
        ctx.font = "30px Arial"
        ctx.textAlign = "center"
        ctx.fillStyle = "red"
        ctx.fillText("Player Choice", canvas.width/2, 50)
        ctx.drawImage(attack, canvas.width/2 - attack.width/2 - 200, 100)
        ctx.drawImage(special, canvas.width/2 - special.width/2, 75)
        ctx.drawImage(grab, canvas.width/2 - grab.width/2 + 200, 75)

        ctx.fillText("Computer Choice", canvas.width/2, 320)
        ctx.drawImage(cattack, canvas.width/2 - cattack.width/2 - 200, 350)
        ctx.drawImage(cspecial, canvas.width/2 - cspecial.width/2, 325)
        ctx.drawImage(cgrab, canvas.width/2 - cgrab.width/2 + 200, 325)

        ctx.fillText(results, canvas.width/2, 575)
        ctx.restore()
    }
}


// //alert("Select rock, paper, or scissors!");
 var rps = ["attack","special","grab"];
// alert("select rock, paper, or scissors")
console.log(rps[0]);

 document.getElementById("attack").addEventListener('click',function(e){
     alert("You picked " + rps[0])
     playGame(rps[0])
 });
 document.getElementById("special").addEventListener('click',function(e){
     alert("You picked " + rps[1])
     playGame(rps[1])
 });
 document.getElementById("grab").addEventListener('click',function(e){
     alert("You picked " + rps[2])
     playGame(rps[2])
});

function playGame(playerChoice){
    if(gameOver == true){
        return
    } else{
        var cpuChoice =Math.floor(Math.random() * 2.99);
        console.log(cpuChoice, playerChoice);
    
        switch(playerChoice){
            case "attack":
                if(cpuChoice == 0){
                    //rock
                    //alert("CPU chose Rock, It's a tie.");
                    results = "CPU chose attack, It's a tie."
                    draw(hattack, special, grab, hattack, special, grab)
                }
                else if(cpuChoice == 1){
                    //paper
                    //alert("CPU chose Paper, You Lose.")
                    results = "CPU chose special, You Lose."
                    draw(hattack, special, grab, attack, hspecial, grab)
                }
                else{
                    //alert("CPU chose Scissors, You Win")
                    results = "CPU chose grab, You Win"
                    draw(hattack, special, grab, attack, special, hgrab)
                }
                break;
            
            case "special":
                if(cpuChoice == 0){
                    //rock
                    //alert();
                    results = "CPU chose attack, You Win."
                    draw(attack, hspecial, grab, hattack, special, grab)
                }
                else if(cpuChoice == 1){
                    //paper
                    //alert()
                    results = "CPU chose special, It's a tie."
                    draw(attack, hspecial, grab, attack, hspecial, grab)
                }
                else {
                    //alert()
                    results = "CPU chose grab, You Lose"
                    draw(attack, hspecial, grab, attack, special, hgrab)
                }
                break;
            
            case "grab":
                if(cpuChoice == 0){
                    //rock
                    //alert();
                    results = "CPU chose attack, You Lose."
                    draw(attack, special, hgrab, hattack, special, grab)
                }
                else if(cpuChoice == 1){
                    //paper
                    //alert()
                    results = "CPU chose special, You Win."
                    draw(attack, special, hgrab, attack, hspecial, grab)
                }
                else{
                    //alert()
                    results = "CPU chose grab, It's a tie"
                    draw(attack, special, hgrab, attack, special, hgrab)
                }
                break;
            }
        }
    }