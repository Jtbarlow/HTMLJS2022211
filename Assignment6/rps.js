//Array of words
var rps = [];
rps[0] = `Rock` 
rps[1] = `Paper`
rps[2] = `Scissors`

var canvas = document.getElementById("c")
var ctx = canvas.getContext("2d")

ctx.font = "40px Arial"
ctx.fillStyle = "gray"
ctx.strokeStyle = "black"
ctx.fillText("Welcome to the RPS Game", 180, 280)
ctx.strokeText("Welcome to the RPS Game", 180, 280)

//Array of Buttons
var btn = document.querySelectorAll(`a`)
//Changes the words in the buttons
btn[0].innerHTML = rps[0]
btn[1].innerHTML = rps[1]
btn[2].innerHTML = rps[2]

//Makes the buttons clickable.
//Once clicked they call the play function
btn[0].addEventListener(`click`, function(e){
    play(0)
})
btn[1].addEventListener(`click`, function(e){
    play(1)
})
btn[2].addEventListener(`click`, function(e){
    play(2)
})

//Play function accepts an integer
//generates an integer 0-2
//Displays the player's choice and computer's choice
function play(pChoice){
    var cChoice = Math.floor(Math.random()*2.99)
    console.log(cpuChoice, playerChoice);
    fillText(rps[pChoice] + " " + rps[cChoice]) 

    switch(pChoice){
        case 0:
            if(cChoice === 0)
            {
                //display a tie
                ctx.fillText(`You Tied`)
            }
            else if(cChoice === 1)
            {
                //display a loss
                ctx.fillText(`You Lost`)
            }
            else
            {
                //display a win
                ctx.fillText(`You Won`)
            }
            break;

            case 1:
                if(cChoice === 0)
                {
                    //display a tie
                    ctx.fillText(`You Win`)
                }
                else if(cChoice === 1)
                {
                    //display a loss
                    ctx.fillText(`Tie`)
                }
                else
                {
                    //display a win
                    ctx.fillText(`You Lost`)
                } 
            break;

            case 2:
                if(cChoice === 0)
                {
                    //display a tie
                    ctx.fillText(`You Lost`)
                }
                else if(cChoice === 1)
                {
                    //display a loss
                    ctx.fillText(`You Win`)
                }
                else
                {
                    //display a win
                    ctx.fillText(`You Tie`)
                }
             break;
    }
}
