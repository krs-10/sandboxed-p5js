import Base from "../../components/Base";

const noop = () => {};

let defaultUrl = "../assets/images/paprika.JPG"

let defaults = {
  width: 500, 
  height: 500, 
  url: defaultUrl,
  funcs: ['draw', 'preload', 'setup']
}

class Image extends Base {
  constructor({ y = 0, ...args } = {}) {
    super();
    Object.assign(this, defaults, args);
    this.y = y;
    this.imgWidth = 500
    this.imgHeight = 500
  }
  draw = () => {
    this.scanner()
  };
  scanner = () => {
    const { res, img, imgWidth, imgHeight } = this;
    res.background(img);

    // res.strokeWeight = 200;
   // res.stroke(226, 204, 0);

    // res.line(5, this.y, imgWidth, 10);
    // this.y++;
    // if (this.y > imgHeight) {
    //   this.y = 0;
    // }
  };
  preload = () => {
    const { res, url } = this;
    const image = res.loadImage(url, (callbackImage) => {
      this.img = callbackImage;
      this.imgWidth = callbackImage.width;
      this.imgHeight = callbackImage.height;
      return this; 
    });
  };
  setup = () => {
    const { res, imgWidth, imgHeight } = this;
    this.canvas = res.createCanvas(this.imgWidth, this.imgHeight);
    res.noLoop();
    return this; 
  };
}

export default Image;
