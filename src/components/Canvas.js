class Canvas {
	width = 400
	height = 400
	rest = false
	constructor({width, height, attributes = {}, ...rest}) {
		this.width = width;
		this.height = height;
		this.attributes = attributes; 
		this.rest = rest; 
		// this.props = this.rest ? this.modProps() : '';
	}
	modProps(){
		return Object.entries(this.rest).reduce((total, [key, val], i) => {
			total += ` ${key}="${val}"`; 
			return total; 
		}, ' ');
	}
	create(){
		let el = document.createElement("canvas"); 
		const { width, height, rest } = this; 
		// Object.assign(el, {style:`width:${this.width},height:${this.height}`, ...this.rest})
		Object.assign(el,width, height, {...rest});
		console.log('Canvas.js -  el: ', el);
		this.el = el; 
		return el;  
	}
}


export default Canvas; 
