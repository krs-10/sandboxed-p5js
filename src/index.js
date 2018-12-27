
import "p5/lib/addons/p5.dom.js";
require("./styles/skeleton.css");

import Canvas from 'components/Canvas'; 
import PulseBg from './sketches/PulseBg';
import Pulse from './sketches/Pulse';

const NewCanvas = new Canvas({width: 400, height: 900, id: "main"});

const p = new Pulse(), 
	bg = new PulseBg();

bg.init("main")
p.init("main")

document.querySelector('[data-root]').innerHTML = `<div id="main"></div>`
// document.querySelector('[data-root]').innerHTML =
// 	`<div>${
// 		NewCanvas.create()
// 	}</div>`;
