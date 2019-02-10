import Base from "../../components/Base";

const noop = () => {};


let defaults = {
  width: 900, 
  height: 900, 
  funcs: ['setup', 'draw']
}

const JitterFuncs = (({res, width, height}) => {
    let x = res.random(width), 
      y = res.random(height), 
      diameter = res.random(10, 30),
      speed = 1;

    const move = () => {
      x += res.random(-speed, speed);
      y += res.random(-speed, speed);
    }

    const display = () =>{
      res.ellipse(x, y, diameter, diameter);
    }

    return {
      x,y,diameter,speed,move,display
    }
})

class Jitter extends Base {
  constructor({ args } = {}) {
    super();
    Object.assign(this, defaults, args);
  }
  draw = () =>{
    this.res.background(50, 89, 100);
    this.bug1.move();
    this.bug1.display();
    this.bug2.move();
    this.bug2.display();
  }
  setup = () => {
    const { res } = this;
    this.canvas = res.createCanvas(this.width, this.height);
    this.bug1 = new Jitter(this),
    this.bug2 = new Jitter(this);
  };
}

// const feee = new Jitter({width: 900, height:600})

// feee.init()
export default Jitter;
