import p5 from 'p5';

const noop = () => { }

class Base {
	width = 300
	height = 300
	cb = noop
	p5 = p5
	foobar = 'bezbaz'
	constructor({ canvas, ...rest } = {}) {
		this.canvas = null;
		Object.assign(this, rest);
	}
	#parse(response) {
		let { ...hi } = this;
		return hi;
	}
	#setup = (arg) => {
		if (this.setup) return this.setup();
		else{
			const { res, width, height } = this;
			res.createCanvas(width, height);
			res.background("blue")
			res.noLoop();
		}
	}
	init = (parent = null, funcs = []) => {
		new p5((res) => {
			this.res = res;
			res.setup = this.#setup
			if (funcs && funcs.length > 0)
			for (let f = 0; f < funcs.length; f++ ){
				if (this[funcs[f]]) res[funcs[f]] = this[funcs[f]];
			}
		}, parent)
	}
}


class Kiddo extends Base {
	width = 400
	height = 555
	constructor({...rest} = {}){
		super();
		Object.assign(this, rest);
	}
	setup = () => {
		const { width, height, res } = this; 
		this.canvas = this.res.createCanvas(width, height, res.WEBGL);
	}
	draw = () => {
		this.makeLine()
	}
	makeLine = () => {
		this.res.line(0, 0, 200, 200)
	}
}

var foobar = new Kiddo({width: 222, height: 333});
foobar.init(null, ['draw']);


export default Base; 
