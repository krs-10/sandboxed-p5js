import Base from "./Base";

const noop = () => {};
class Image extends Base {
  url = "../assets/images/paprika.JPG"
  constructor({ width, height, url } = {}) {
  super();
	this.url;
	this.width = width;
	this.height = height;
  }
  draw = () => {
	const { res, img, width, height } = this;
	img.filter("gray")
    res.image(img, 0, 0);
  };
  preload = () => {
    const { res, url } = this;
	this.img = res.loadImage(url);
  };
  setup = () => {
	  const { res } = this;
	  this.canvas =  res.createCanvas (this.width, this.height);
	//   res.createCanvas(this.img.width, this.img.height);
	  res.noLoop()
  }
  cb = () => {
    const { res } = this;
    res.preload = this.preload;
  };
}


export default Image;
