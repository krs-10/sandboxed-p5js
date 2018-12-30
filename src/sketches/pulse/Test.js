

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
