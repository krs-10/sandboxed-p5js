
// console.log('Instance.js -  p5: ', p5);
// import 'p5/lib/addons/p5.sound';

let defaultWidth = 720, 
  defaultHeight = 400, 
  defaultSrc = "../assets/images/paprika.JPG"; 

import * as _p5 from 'p5';


// Jitter class
class Jitter {
  constructor(width = 300, height = 400){
    this.x = Math.random(width);
    this.y = Math.random(height);
    this.diameter = Math.random(10, 30);
    this.speed = 1;
  }
  move(){
    this.x += Math.random(-this.speed, this.speed);
    this.y += Math.random(-this.speed, this.speed);
  }
  display(){
    console.log('Instance.js -  this: ', this);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}


class Jetter{
  constructor(sketch){
    this.bug = new Jitter();
    this.sketch = sketch;
    console.log('Instance.js -  this.instance: ', this.instance);
  }
  setup(){
      this.sketch.createCanvas(300, 100);
  }
  draw(){
   
      this.sketch.background(50, 89, 100);
      this.bug.move();
      this.bug.display();
    
  }
}

// const sketch = ({p = _p5, width = 700, height = 410 } = {}) => {
//   const setup = () => {
//     console.log('Instance.js -  p: ', p);
//   p.createCanvas(width, height);
//   }
//   const draw = () => {
//    p.background(0);
//    p.fill(100);
//    p.rect(x, y, 50, 50);
//   }

//   return new p({setup:setup, draw:draw});
// }



// const Instance = new p5(function (sketch) {

//   var x = 100;
//   var y = 100;

//   sketch.setup = function () {
//     sketch.createCanvas(200, 200);
//   };

//   sketch.draw = function () {
//     sketch.background(0);
//     sketch.fill(255);
//     sketch.rect(x, y, 50, 50);
//   };
// });


const sketch = (...args) => {
  console.log('Instance.js -  args: ', args);
  s.setup = () => {
    s.createCanvas(width, height);
  }
  s.draw = () => {
    s.background(0);
    s.fill(255);
    s.rect(width, height, 50, 50)
  };
};

// class Test {
//   constructor(width = 500, height = 500){
//     this.width = width; 
//     this.height = height; 
//     this.s = _p5(this); 
//     console.log('Instance.js -  this.s: ', this.s);
//     return this; 
//   }
//   setup(){
//     console.log('Test -  this: ', this);
//     this.s.createCanvas(this.width, this.height)
//   }
//   draw(){
//     console.log('Draw.js -  this: ', this);
//     this.s.background(0);
//     this.s.fill(255);
//     this.s.rect(this.width, this.height, 50, 50);
//   }
// }

class Sketch extends p5 {
  // width = 100
  // height = 100
  constructor(params) {
    console.log('Instance.js -  params: ', params);
    super(p => {
       
      // do any setup in here that needs to happen before the sketch starts
      // (e.g. create event handlers)
      // `p` refers to the instance that becomes `this` after the super() call
      // so for example
      // p.width = width;
      // p.height = height; 
      console.log('Instance.js -  p: ', p);
      // p.fill = fill; 
      // p.background = background; 
      if (typeof params == 'object' && params != null)
        for (let key in params)
        console.log('Instance.js -  key: ', key);
          p[key] = params[key];
    });
  }
  // p5.js setup method
  setup() {
    console.log('Instance.js -  this: ', this);
    this.createCanvas(50, 100);
    this.draw();
  }
  // p5.js draw method
  draw(){
    this.background(0);
    this.fill(108);
    this.rect(this.width, this.height, 50, 50)

  }
}

const myp5 = new Sketch({});
console.log('Instance.js -  myp5: ', myp5);
// const Instance = new _p5(sketch);
// var foo = new Test({width: 100, height: 40});
// const foobar = new _p5(sketch)
// sketch();
const Instance = () => console.log("hi")
export default Instance; 
