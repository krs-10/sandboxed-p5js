
import "p5/lib/addons/p5.dom.js";
require("./styles/skeleton.css");
require("./styles/main.css");

import Canvas from 'components/Canvas'; 
// import * as PULSE from './sketches/pulse/index.js';
// import PulseBg from './sketches/PulseBg';
// import Pulse from './sketches/Pulse';

import Image from "./sketches/pulse/Image";
import Base from "./sketches/pulse/Base";

const NewCanvas = new Canvas({width: 400, height: 900, id: "main"});
const blegh = new Base({width: 700});
blegh.init();

// const interaction = new PULSE.Interaction({width: 600, height: 600});
// interaction.init("main");


document.querySelector('[data-root]').innerHTML = `<div id="main"></div>`
// document.querySelector('[data-root]').innerHTML =
// 	`<div>${
// 		NewCanvas.create()
// 	}</div>`;
