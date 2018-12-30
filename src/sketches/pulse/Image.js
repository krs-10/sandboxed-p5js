import Base from "../../components/Base";

const noop = () => {};

let defaultUrl = "../assets/images/paprika.JPG"

let defaults = {
  width: 0, 
  height: 0, 
  url: defaultUrl,
  funcs: ['draw', 'preload', 'setup'], 
  foobar : noop
}

class Image extends Base {
    constructor({y = 0, ...args} = {}){
    super();
    Object.assign(this, defaults,  args);
    this.y = y; 
  }
  draw = () => {
    this.weirdthing()
  };
  weirdthing = () => {
    const { res, img, width, height } = this
    res.background(img);

    res.stroke(226, 204, 0);
    res.line(0, this.y, width, this.y);

    this.y++;
    if (this.y > height) {
      this.y = 0;
    }
  }
  preload = () => {
    const { res, url } = this;
    this.img = res.loadImage(url);
    this.img.width = this.width; 
    this.img.height = this.height; 
    window.img = this.img; 
  };
  setup = () => {
    const { res } = this;
    this.canvas = res.createCanvas(this.width, this.height);
    res.noLoop()
  }
}

export default Image;
