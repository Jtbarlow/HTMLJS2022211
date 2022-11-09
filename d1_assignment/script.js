var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

//circle
ctx.fillStyle = "#ffff00"
ctx.strokeStyle = "red"
ctx.lineWidth = "5px"
ctx.beginPath()
ctx.arc(385,440,70,0, (3*Math.PI) , false)
ctx.closePath()
ctx.fill()
ctx.stroke()

//square
ctx.fillStyle = "yellow"
ctx.strokeStyle = "black"
ctx.lineWidth = "5px"
ctx.fillRect(85,300,101,101)
ctx.strokeRect(85,300,101,101)

//line
ctx.strokeStyle = "(255,0,0)"
ctx.lineWidth = "5px"
ctx.beginPath()
ctx.moveTo(85,682)
ctx.lineTo(278,549)
ctx.stroke()

//pentagram
ctx.fillStyle = "#ff00ff"
ctx.strokeStyle = "#00ffff"
ctx.lineWidth = "5px"
ctx.beginPath()
ctx.moveTo(557,308)
ctx.lineTo(667,284)
ctx.lineTo(724,380)
ctx.lineTo(650,464)
ctx.lineTo(548,420)
ctx.closePath()
ctx.fill()
ctx.stroke()

//star
ctx.fillStyle = "ffff00"
ctx.strokeStyle = "(32,32,32)"
ctx.lineWidth = "5px"
ctx.beginPath()
ctx.moveTo(635,496)
ctx.lineTo(668,554)
ctx.lineTo(733,566)
ctx.lineTo(688,615)
ctx.lineTo(696,681)
ctx.lineTo(635,653)
ctx.lineTo(575,681)
ctx.lineTo(583,615)
ctx.lineTo(538,567)
ctx.lineTo(602,553)
ctx.closePath()
ctx.fill()
ctx.stroke()