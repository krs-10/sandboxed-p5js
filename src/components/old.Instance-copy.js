
// console.log('Instance.js -  p5: ', p5);
// import 'p5/lib/addons/p5.sound';

let defaultWidth = 720, 
  defaultHeight = 400, 
  defaultSrc = "../assets/images/paprika.JPG"; 

class Instance {
  // width = 720;
  // height = 400;
  // src = "../assets/images/paprika.JPG";
  // img = null; 
  // instance = null; 
  constructor(width = defaultWidth, height = defaultHeight, src = defaultSrc) {
    console.log('Instance.js -  width, height, src: ', width, height, src);
    this.src = src;
    this.width = width;
    this.height = height;
    this.instance = new p5(); 
    return this; 
  }
  setup() {
    console.log('Instance.js -  this: ', this);

      this.instance.createCanvas(this.width, this.height);
      this.img = loadImage(this.src); // Load the image
      console.log('Instance.js -  this: ', this);
      window.hi = this; 
      return this; 
  }
  draw() {
    // Displays the image at its actual size at point (0,0)
    // this.instance.Image(this.img, 0, 0);
    // // Displays the image at point (0, height/2) at half size
    // this.instance.Image(this.img, 0, this.height / 2, this.img.width / 2, this.img.height / 2);
    // this.instance.draw(this.img, 0, 0)
  }
}

export default Instance; 
