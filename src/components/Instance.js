
class Instance extends p5 {
  width = 500
  height = 600
  constructor({width, height, ...params} = {}) {
    super(p => {
      p.width = width; 
      p.height = height; 
      console.log('Instance.js -  params: ', params);
      if (typeof params == 'object' && params != null)
        for (let key in params)
          p[key] = params[key];
    });
  }
  // p5.js setup method
  setup() {
    this.createCanvas(this.width, this.height);
    this.noLoop();
  }
  draw(){
    
  }
  // p5.js draw method
}


export default Instance; 
