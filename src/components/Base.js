// import p5 from 'p5';

const noop = () => { }

class Base {
	p5 = p5
	constructor({ funcs = ['setup', 'draw'], ...rest } = {}) {
		this.funcs = funcs; 
		Object.assign(this, rest);
	}
	init = (parent = null) => {
		const {funcs} = this; 
		new p5((res) => {
			this.res = res;
			for (let f = 0; f < funcs.length; f++) {
				let custom_f = funcs[f] || false; 
				if (this[custom_f]) res[custom_f] = this[custom_f]
			}
		}, parent)
	}
}

export default Base; 
