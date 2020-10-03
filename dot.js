class Dot {
	constructor(r,x,y,x_dot,y_dot){
		this.r = r
		this.x = x
		this.y = y
		this.x_dot = x_dot
		this.y_dot = y_dot
	}

	update(g,dt){
		this.x += this.x_dot*dt
		this.y += this.y_dot*dt

		this.y_dot += g

		if (this.x <= this.r){
			this.x_dot *= -0.95
			this.x = this.r
		}

		if (this.x >= width - this.r){
			this.x_dot *= -0.95
			this.x = width - this.r
		}

		if (this.y <= this.r){
			this.y_dot *= -0.95
			this.y = this.r
		}
	}

	show(){
		ellipse(this.x,this.y,2*this.r,2*this.r)
	}
}