
import "p5/lib/addons/p5.dom.js";
require("./styles/skeleton.css");
require("./styles/main.css");

import Canvas from 'components/Canvas'; 
import Sketch from './sketches/pulse/Sketch';
// import * as PULSE from './sketches/pulse/index.js';
// import PulseBg from './sketches/PulseBg';
// import Pulse from './sketches/Pulse';

import Image from "./sketches/pulse/Image";
import Base from "./components/Base";

const NewCanvas = new Canvas({width: 900, height: 900, id: "main"});


// const interaction = new PULSE.Interaction({width: 600, height: 600});
// interaction.init("main");


document.querySelector('[data-root]').innerHTML = `<div id="main"></div>`
const Pulser = new Sketch({parent: "main"});
Pulser.begin()
// document.querySelector('[data-root]').innerHTML =
// 	`<div>${
// 		NewCanvas.create()
// 	}</div>`;
