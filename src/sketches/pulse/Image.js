import Base from "../../components/Base";

const noop = () => {};

let defaultUrl = "../assets/images/paprika.JPG"

let defaults = {
  width: 0, 
  height: 0, 
  url: defaultUrl,
  funcs: ['draw', 'preload', 'setup']
}

const weirdo = (({res, img, width, height, y}) => {
    console.log('Image.js -  res: ', res);
    res.background(img);

    res.stroke(226, 204, 0);
    res.line(0, y, width, y);

    y++;
    if (y > height) {
      y = 0;
    }
})

class Image extends Base {
  constructor({ y = 0, ...args } = {}) {
    super();
    Object.assign(this, defaults, args);
    this.y = y;
  }
  // draw = () => {
  //   console.log('Image.js -  this: ', this);
  //   console.log('Image.js -  weirdo: ', weirdo);
  //   weirdo(this)
  //   // this.weirdthing()
  // }
  draw = () => {
    this.weirdthing()
  };
  weirdthing = () => {
    const { res, img, width, height } = this;
    res.background(img);

    res.stroke(226, 204, 0);
    res.line(0, this.y, width, this.y);

    this.y++;
    if (this.y > height) {
      this.y = 0;
    }
  };
  preload = () => {
    const { res, url } = this;
    this.img = res.loadImage(url);
    this.img.width = this.width;
    this.img.height = this.height;
    window.img = this.img;
    return this; 
  };
  setup = () => {
    const { res } = this;
    this.canvas = res.createCanvas(this.width, this.height);
    res.noLoop();
    return this; 
  };
}

const feee = new Image({width: 900, height:600})

feee.init()
export default Image;
