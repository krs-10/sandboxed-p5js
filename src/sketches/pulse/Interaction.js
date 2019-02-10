import Base from "../../components/Base";

const noop = () => { }

let defaults = {
	width: 0,
	height: 0,
	angle: 0,
	funcs: ['draw', 'setup']
}

class Interaction extends Base {
	constructor(args = {}) {
		super();
		Object.assign(this, defaults, args);
	}
	setup = () => {
		const { res, width, height } = this; 
		this.canvas = res.createCanvas(width, height, this.WEBGL);
		this.canvas.class("canvas--first");
	}
	draw = () => {
		let { res, angle } = this;

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
		res.fill(200);
		res.ellipse(res.mouseX, res.mouseY, 2, 2);
	}
	};
}

export default Interaction; 
