import p5 from 'p5';

const noop = () => {}

class Instance {
	width = 300
	height = 300
	cb = noop;
	constructor({width, height, ...rest} = {}){
		this.width = width; 
		this.height = height; 
		Object.assign(this, rest);
	}

	setup = () => {
		const { res, width, height } = this; 
		res.createCanvas(width, height);
		res.noLoop();
		return this; 
	}
	draw = () => {
		console.log("MAIN DRAW");
		const { res } = this; 
		res.fill("purple")
		res.background(222);
		res.rect(0, 0, 50, 50);
	}
	trying(){
		console.log('INSIDE MAIN -  this: ', this);
		new p5((res) => {
			this.res = res; 
			res.setup = this.setup;
			res.draw = this.draw;
			this.cb()
		})
	}
}

class Lineup extends Instance {
  width = 30;
  height = 20;
  url = "../assets/images/paprika.JPG"
  constructor({ width, height, url } = {}) {
    super();
    this.width = width;
    this.height = height;
    this.url;
  }
  draw = () => {
	console.log("LINEUP DRAW")
	const { res, img, width, height } = this;
	img.filter("gray")

    res.image(img, 0, 0);
    // res.image(img, 0, 0);
    // res.image(img, 0, res.height / 2, img.width / 2, img.height / 2);
  };
  preload = () => {
    const { res, url } = this;
	this.img = res.loadImage(url);
  };
  setup = () => {
	  const { res } = this; 
	  res.createCanvas(this.img.width, this.img.height);
	  res.noLoop()
  }
  cb = () => {
    const { res } = this;
    res.preload = this.preload;
  };
  foobar = () => {
    console.log("INSIDE LINEUP -  this: ", this);
    new p5(res => {
      this.res = res;
      res.setup = this.setup;
      res.draw = this.draw;
    });
  };
}

// const foo = new Main();
// foo.trying();
const bar = new Lineup({width: 200, height: 50});
bar.trying();
export default Instance; 
