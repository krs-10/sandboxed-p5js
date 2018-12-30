import Base from "../../components/Base";

const noop = () => {};

let defaultUrl = "../assets/images/paprika.JPG"


const geny = ((width, height, url) => {
  let img; 
  const preload = (res) => {
    return img = res.loadImage(url)
  }
  const draw = (res) => {
    img.filter("gray")
  };
  const setup = () => {
    res.createCanvas(width, height);
    res.noLoop()
  }
  return () => {
    setup, 
    preload, 
    draw
  }
  })()

geny(300, 400, defaultUrl)

// geny('foobar').getA('bezbaz');
// geny('heythere').getA('blughblugh')



class Image extends Base {
  width = 800
  height = 800
  constructor({width = 800, height = 800, url = defaultUrl, ...rest } = {}) {
    super();
    Object.assign(this, rest);
    this.width = width;
    this.height = height; 
    this.url = url;
    
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
    this.canvas = res.createCanvas(this.width, this.height);
    res.noLoop()
  }
}

export default Image;
