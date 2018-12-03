class Canvas {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
	create(){
		return `<div>Here we have width ${this.width} and height ${this.height}</div>`
	}
}

export default Canvas; 
