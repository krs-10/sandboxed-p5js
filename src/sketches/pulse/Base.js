import p5 from 'p5';

const noop = () => { }

class Base {
	width = 300
	height = 300
	cb = noop
	p5 = p5
	foobar = 'bezbaz'
	funcs = {}
	constructor({ canvas, ...rest } = {}) {
		this.canvas = null;
		Object.assign(this, rest);
	}
	#parse(response){
		console.log('private');
		let { ...hi } = this; 
		return hi; 
		// let { res, ...rest } = this; 
		// return {res, ...rest};
	}
	setup = ({res, width, height} = {}) => {
		// console.log('Base.js -  hello: ', hello);
		// const { res, width, height } = this;
		// res.createCanvas(500, 600)
		this.canvas = res.createCanvas(width, height);
		res.noLoop();
		// return this;
	}
	draw = ({res}) => {
		res.fill("purple")
		res.background(222);
		res.rect(0, 0, 50, 50);
	}
	init = (parent = null) => {
		const argu = this.#parse();
		new p5((res) => {
			// this.res = res;
			res.setup = () => this.setup({res: res, ...argu})
			console.log('Base.js -  res.setup: ', res.setup);
			res.draw = () => this.draw({ res: res, ...argu })
		}, parent)
	}
}

export default Base; 
