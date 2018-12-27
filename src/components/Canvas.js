class Canvas {
	width = 400
	height = 400
	rest = false
	constructor({width, height, ...rest}) {
		this.width = width;
		this.height = height;
		this.rest = rest; 
		console.log('Canvas.js -  rest: ', rest);
		this.props = this.rest ? this.modProps() : '';
	}
	modProps(){
		return Object.entries(this.rest).reduce((total, [key, val], i) => {
			total += ` ${key}="${val}"`; 
			return total; 
		}, ' ');
	}
	create(){
		return `<canvas ${this.props} width="${this.width}" height="${this.height}">
		</canvas>`
	}
}


export default Canvas; 
