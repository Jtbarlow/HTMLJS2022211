var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')
var timer = requestAnimationFrame(main)
var ship
var numAsteroids = 20
var asteroids = []
var gameOver = true
var gameStates = []
var currentState = 0
var score = 0
var highScore = 0

var shipIdle = new Image()
shipIdle.src = "images/spaceship_idle.png"
var shipMove = new Image()
shipMove.src = "images/spaceship_move.png"
var asteroidSprite = new Image()
asteroidSprite.src = "images/asteroid.png"
var AASS = new Image()
AASS.src = "images/AASS.png"
var AAGOS = new Image()
AAGOS.src = "images/AAGOS.png"

//utility functions
function randomRange(high, low){
    return Math.random() * (high-low) + low
}

function gameStart(){
    //For Loop to create the instances of Asteroids
    for(var i = 0; i < numAsteroids; i++){
        asteroids[i] = new Asteroid()
    }

    //Create an instance of the PlayerShip
    ship = new PlayerShip()
}

//Constructor Function for Asteroid Class
function Asteroid(){
    this.radius = randomRange(15,2)
    this.x = randomRange(canvas.width - this.radius, this.radius)
    this.y = randomRange(canvas.height - this.radius, this.radius) - canvas.height
    this.vy = randomRange(10, 5)
    //this.color = "white"

    this.drawAsteroid = function(){
        ctx.save()
        ctx.beginPath()
        //ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true)
        ctx.closePath()
        ctx.fill()
        ctx.drawImage(asteroidSprite, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2)
        ctx.restore()
    }

}



//Setup Keyboard Event Handlers 
document.addEventListener("keydown", pressKeyDown)
document.addEventListener("keyup", pressKeyUp)

function pressKeyDown(e){
    if (!gameOver) {
        if (e.keyCode == 87) {
            ship.up = true
        }
        if (e.keyCode == 65) {
            ship.left = true
        }
        if (e.keyCode == 68) {
            ship.right = true
        }
        if (e.keyCode == 83) {
            ship.down = true
        }
    }

    if(gameOver){

        //checking for spacebar
        if(e.keyCode == 32){
            if(currentState == 2){
                //game over screen restarts game
                currentState = 0
                //resets number of asteroids
                numAsteroids = 20
                //empties asteroids array
                asteroids = []
                //resets score
                score = 0
                gameStart()
                main()
            }
            else{
                //main screen starts game 
                gameStart()
                currentState = 1
                gameOver = false
                main()
                scoreTimer()
                console.log("space")

            }
            
        }
    }
    
}

function pressKeyUp(e){
    if(!gameOver){
        if (e.keyCode == 87) {
            ship.up = false
        }
        if (e.keyCode == 65) {
            ship.left = false
        }
        if (e.keyCode == 68) {
            ship.right = false
        }
        if (e.keyCode == 83) {
            ship.down = false
        } 
    }
    
}

//constructor function
function PlayerShip(){
    this.x = canvas.width/2
    this.y = canvas.height/2
    this.w = 35
    this.h = 35
    this.vx = 0
    this.vy = 0
    this.up = false
    this.down = false
    this.left = false
    this.right = false
    // this.flamelength = 30

    this.drawShip = function(){
       ctx.save()
        ctx.translate(this.x, this.y)
        if(this.up || this.left || this.right || this.down){
            ctx.save()
            //ctx.drawImage(shipMove, 0,0)
            //Changes the drawing values to animate the flame
               if(this.flamelength == 30){
                   this.flamelength = 20
                   ctx.fillStyle = "yellow"
               }else{
            
                this.flamelength = 30
                ctx.fillStyle = "orange"
              }
            //   ctx.beginPath()
            //   ctx.moveTo(0, this.flamelength)
            //   ctx.lineTo(5,5)
            //   ctx.lineTo(-5,5)
            //   ctx.lineTo(0,this.flamelength)
            //   ctx.closePath()
            //   ctx.fill()
              ctx.drawImage(shipMove, -20, -10, this.w, this.h)
              ctx.restore()
          }
      
        // ctx.fillStyle = "red"
        
        // ctx.beginPath()
        // ctx.moveTo(0, -10)
        // ctx.lineTo(10, 10)
        // ctx.lineTo(-10, 10)
        // ctx.lineTo(0, -10)
        // ctx.closePath()
        // ctx.fill();
        ctx.drawImage(shipIdle, -20, -10, this.w, this.h)
        ctx.restore() 
    }

    this.move = function(){
        this.x += this.vx
        this.y += this.vy

        //bottom boundary of screen
        if(this.y > canvas.height - this.h/2){
            this.y = canvas.height - this.h/2
            this.vy = 0
        }
        //top boundary of screen
        if(this.y < this.h/2){
            this.y = this.h/2
            this.vy = 0
        }

        //right boundary of screen
        if(this.x > canvas.width - this.w/2){
            this.x = canvas.width - this.w/2
            this.vx = 0
        }
        //left boundary of screen
        if(this.x < this.w/2){
            this.x = this.w/2
            this.vx = 0
        }
    }
      
}

//Main Screen
gameStates[0] = function(){
    ctx.save()
    ctx.font = "30px Arial"
    ctx.fillStyle = "white"
    ctx.textAlign = "center"
    ctx.fillText("Asteroid Avoider", canvas.width/2, canvas.height/2-30)
    ctx.font = "15px Arial"
    ctx.fillText("Press Space to Start", canvas.width/2, canvas.height/2 + 20)
    ctx.drawImage(AASS,0,0)
    ctx.restore()

}

//Game Screen
gameStates[1] = function(){
    //code for displaying score
    ctx.save()
    ctx.font = "15px Arial"
    ctx.fillStyle = "white"
    ctx.fillText("Score: " + score.toString(), canvas.width - 150, 30)
    ctx.restore()

    //Vertical 
    if(ship.up){
        ship.vy = -10
    }else if(ship.down){
        ship.vy = 5
    }else{
        ship.vy = 0
    }
    
    //Horizontal Movement
    if(ship.left){
        ship.vx = -3
    }else if(ship.right){
        ship.vx = 3
    }else{
        ship.vx = 0
    }

    //Loops through all asteroids and can check their position
    for(var i = 0; i < asteroids.length; i++){
        var dX = ship.x - asteroids[i].x
        var dY = ship.y - asteroids[i].y
        var distance = Math.sqrt((dX*dX)+(dY*dY))

        if(detectCollision(distance, (ship.h/2 + asteroids[i].radius))){
            console.log("hit asteroid")
            gameOver = true
            currentState = 2
            main()
        }


        if(asteroids[i].y > canvas.height + asteroids[i].radius){
            asteroids[i].x = randomRange(canvas.width - asteroids[i].radius, asteroids[i].radius)
            asteroids[i].y = randomRange(canvas.height - asteroids[i].radius, asteroids[i].radius) -  canvas.height
        }
        if(!gameOver){
            asteroids[i].y += asteroids[i].vy
            asteroids[i].drawAsteroid()
        }
    }
    if(!gameOver){
        ship.move()
        ship.drawShip()
    }

    while(asteroids.length < numAsteroids){
        asteroids.push(new Asteroid())
    }
}

//Game Over
gameStates[2] = function(){
    ctx.drawImage(AAGOS,0,0, canvas.width, canvas.height)
    if(score > highScore){
        //set a new high score
        highScore = score
        ctx.save()
        ctx.font = "30px Arial"
        ctx.fillStyle = "DarkCyan"
        ctx.textAlign = "center"
        ctx.fillText("Game Over, your high score score was: " + score.toString() , canvas.width/2, canvas.height/2-60)
        ctx.fillText("Your new high score is: " + highScore.toString() , canvas.width/2, canvas.height/2-30)
        ctx.fillText("New Record", canvas.width/2, canvas.height/2)
        ctx.font = "15px Arial"
        ctx.fillText("Press Space to Play Again", canvas.width/2, canvas.height/2 + 20)
        ctx.restore()
        //drawImage(AAGOS)

    }else{
        //keep same score new high score
        ctx.save()
        ctx.font = "30px Arial"
        ctx.fillStyle = "red"
        ctx.textAlign = "center"
        ctx.fillText("Game Over, your score was: " + score.toString() , canvas.width/2, canvas.height/2-60)
        ctx.fillText("Your high score is: " + highScore.toString() , canvas.width/2, canvas.height/2-30)
        ctx.font = "15px Arial"
        ctx.fillText("Press Space to Play Again", canvas.width/2, canvas.height/2 + 20)
        ctx.restore()
        //drawImage(AAGOS)
    }
    
   
}

function main(){
    //clear canvas 
    //shipY-=1
    ctx.clearRect(0,0,canvas.width, canvas.height)

    gameStates[currentState]()

    if(!gameOver){
        timer = requestAnimationFrame(main)
    }
    
}

function detectCollision(distance, calcDistance){
    return distance < calcDistance
}

//Timer for Score
function scoreTimer(){
    if(!gameOver){
        score++
        //using modulus  that returns remainder of a decimal
        //checks to see if remainder is divisble by 5
        if(score % 5 == 0){
            numAsteroids += 8
            console.log(numAsteroids)
        }

        setTimeout(scoreTimer, 1000)
    }
}
