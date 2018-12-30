
import "p5/lib/addons/p5.dom.js";
require("./styles/skeleton.css");
require("./styles/main.css");

import Canvas from 'components/Canvas'; 
import Sketch from './sketches/pulse/Sketch';

const NewCanvas = new Canvas({width: 900, height: 900, id: "main"});

console.log('index.js -  Sketch: ', Sketch);
// const interaction = new PULSE.Interaction({width: 600, height: 600});
// interaction.init("main");

const instanceOne = Sketch(200, 500, "main");

document.querySelector('[data-root]').innerHTML = `<div id="main"></div>`
instanceOne.start()
// const Pulser = new Sketch({parent: "main"});
// Pulser.begin()
// document.querySelector('[data-root]').innerHTML =
// 	`<div>${
// 		NewCanvas.create()
// 	}</div>`;
