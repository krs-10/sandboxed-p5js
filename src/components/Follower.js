import Instance from './Instance';


class Follower extends Instance {
  radius = 200; 
  constructor({radius, ...all} = {}) {
	super(all);
  }
  setup(){
	  this.createCanvas(1000, 1000, this.WEBGL)
  }
  lightFollow(){
	  this.noStroke();
	  this.background(0);
	  var dirY = (this.mouseY / this.height - 0.5) * 4;
	  var dirX = (this.mouseX / this.width - 0.5) * 4;
	  this.directionalLight(204, 204, 204, dirX, dirY, 1);
	  this.translate(-1.5 * this.radius, 0, 0);
	  this.sphere(this.radius);
	  this.translate(3 * this.radius, 0, 0);
	  this.sphere(this.radius);
  }
  draw = () => {
    this.lightFollow();
  }
}

export default Follower; 
