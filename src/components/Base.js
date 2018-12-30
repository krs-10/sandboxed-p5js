import p5 from 'p5';

const noop = () => { }

class Base {
	width = 300
	height = 300
	p5 = p5
	foobar = 'bezbaz'
	constructor({ canvas, setup = noop, draw = noop, preload = noop, ...rest } = {}) {
		this.canvas = null;
		this.setup = setup;
		this.draw = draw;
		this.preload = preload; 
		Object.assign(this, rest);
	}
	init = (parent = null, funcs = []) => {
		new p5((res) => {
			this.res = res;
			res.setup = this.setup || noop
			res.preload = this.preload || noop
			res.draw = this.draw || noop
			// if (funcs && funcs.length > 0)
			// for (let f = 0; f < funcs.length; f++ ){
			// 	if (this[funcs[f]]) res[funcs[f]] = this[funcs[f]];
			// }
		}, parent)
	}
}

export default Base; 
