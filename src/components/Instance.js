import p5 from 'p5';

const noop = () => {}

class Instance {
	width = 300
	height = 300
	cb = noop
	p5 = p5
	constructor({width, height, cb = noop, p5 = p5, ...rest} = {}){
		this.width = width; 
		this.height = height; 
		this.p5 = p5; 
		this.cb = cb; 
		Object.assign(this, rest);
	}

	setup = () => {
		const { res, width, height } = this; 
		res.createCanvas(width, height);
		res.noLoop();
		return this; 
	}
	draw = () => {
		const { res } = this; 
		res.fill("purple")
		res.background(222);
		res.rect(0, 0, 50, 50);
	}
	init(parent = null){
		new p5((res) => {
			this.res = res; 
			res.setup = this.setup;
			res.draw = this.draw;
			this.cb()
		}, parent)
	}
}

export default Instance; 
