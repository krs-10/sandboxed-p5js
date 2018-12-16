
class Instance extends p5 {
  width = 500
  height = 600
  instanceFill = 200
  instanceBackground = 0;
  constructor({width, height, fill:instanceFill, background:instanceBackground, ...params} = {}) {
    super(p => {
      p.width = width; 
      p.height = height; 
      if (typeof params == 'object' && params != null)
        for (let key in params)
        // console.log('Instance.js -  key: ', key);
          p[key] = params[key];
    });
    this.instanceFill = instanceFill;
    this.instanceBackground = instanceBackground; 
  }
  // p5.js setup method
  setup() {
    this.createCanvas(this.width, this.height);
    this.background(this.instanceBackground);
    this.noLoop();
    // return this; 
  }
  // p5.js draw method
  draw = () => {
    this.fill(this.instanceFill);
    this.rect(this.width / 2, this.height / 2, 50, 50)
  }
}


export default Instance; 
