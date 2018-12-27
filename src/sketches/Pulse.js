import Instance from "../components/Instance";

const noop = () => { }

class Pulse extends Instance {
	width = 30
	height = 20
	angle = 0
	constructor({ width, height, angle = 0 } = {}) {
		super();
		this.width = width;
		this.height = height;
		this.angle = angle; 
		console.log('Pulse.js -  this: ', this);
	}
	setup = () => {
		const { res } = this; 
		res.createCanvas(400, 500);
	}
	draw = () => {
			const { res } = this;
		
		let { angle } = this; 

		if (res.mouseIsPressed === true){ 
			// cos, radians, sin,
		this.angle += 5; 
		const val = res.cos(res.radians(this.angle) * 12);
		for ( let a = 0; a < 360; a += 75){
			const xoff = res.cos(res.radians(a)) * val, 
				yoff = res.sin(res.radians(a)) * val; 
			res.fill(0);
			res.ellipse(res.mouseX + xoff, res.mouseY + yoff, val, val);
		}
		res.fill(255);
		res.ellipse(res.mouseX, res.mouseY, 2, 2);
	}
	};
}

export default Pulse; 
