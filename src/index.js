
import "p5/lib/addons/p5.dom.js";
require("./styles/skeleton.css");
require("./styles/main.css");

import Canvas from 'components/Canvas'; 
// import Sketch from './sketches/pulse/Sketch';
import Shiba from "./sketches/ml5_test/PlainShiba";
// import {Image} from "./sketches/pulse";
import { Interaction } from "./sketches/pulse";

const container = document.createElement("div");
container.classList.add("container");

const fragger = new DocumentFragment();


const NewCanvas = new Canvas({width: 900, height: 900, id: "main"});
NewCanvas.create();

const NewInteraction = new Interaction({width: 900, height: 900});
NewInteraction.init()

// const ImageInstance = new Image()
// ImageInstance.init()
// const instanceOne = Sketch(200, 500, "main");

const root = document.querySelector('[data-root]');


const Shug = Shiba();
Shug.init().then((Shuglet) => {
	const datasets = Shug.writeResults(Shuglet.results);
	console.log('index.js -  datasets: ', datasets);
	fragger.append(NewCanvas.el, Shuglet.image, datasets);
  root.appendChild(fragger);
})


//   fragger.append(NewCanvas.el, Shibbage);

// NewShibber.begin((image) => {
// 	fragger.append(NewCanvas.el, image);






// document.querySelector('[data-root]').innerHTML = `<div id="main"></div>`
// instanceOne.start()

