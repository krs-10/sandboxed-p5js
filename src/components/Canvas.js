class Canvas {
	children = '<div>no kids???</div>'
	constructor(height, width, children) {
		this.height = height;
		this.width = width;
		this.children = children; 
	}
	create(children){
		return `<div>Here we have width ${this.width} and height ${this.height}</div><div>${this.children}</div>`
	}
}

export default Canvas; 
