let mainDot
let dots = []

function setup(){
	createCanvas(windowWidth, windowHeight)
	setFrameRate(30)
	background(0,0,0)

 	dots.push(new Dot(10,200,700,50,0))
}
function draw(){
	translate(0,height)
	scale(1,-1)
	background(0,0,0)

	dots.forEach(d => {
		d.show()
		d.update(-1,0.5)
	})

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
	let r = Math.random()*10+10
	let xDot = Math.random()*100-50;
	let yDot = Math.random()*20-10;
	dots.push(new Dot(r,mouseX,windowHeight-mouseY,xDot,yDot));
	// console.log(mouseX,mouseY)
}

function keyPressed() {
	if (keyCode === ENTER) {
		let r = Math.random()*10+10
		let x = Math.random()*windowWidth;
		let y = Math.random()*windowHeight;
		let xDot = Math.random()*100-50;
		let yDot = Math.random()*20-10;
		dots.push(new Dot(r,x,y,xDot,yDot));
	}	
}