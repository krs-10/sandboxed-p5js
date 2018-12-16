

class Image {
  width = 720;
  height = 400;
	src = "../assets/images/paprika.JPG";
  img = null; 
  foobar = null; 
  constructor(width, height,src, foobar, img) {
    this.src = src;
    this.width = width;
	this.height = height;
	this.img = img;
	this.foobar = foobar; 
	this.p5 = new p5()
  }
  setup() {
	console.log('Image.js -  createCanvas: ', createCanvas);
	this.foobar = new p5();
	p5.createCanvas(this.width, this.height);
    this.img = loadImage(this.src); // Load the image
  }
  draw() {
    // Displays the image at its actual size at point (0,0)
    p5.Image(this.img, 0, 0);
    // Displays the image at point (0, height/2) at half size
    p5.Image(this.img, 0, this.height / 2, this.img.width / 2, this.img.height / 2);
  }
}



export default Image; 
