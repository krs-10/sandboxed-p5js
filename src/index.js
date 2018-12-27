
import "p5/lib/addons/p5.dom.js";
require("./styles/skeleton.css");

import Canvas from 'components/Canvas'; 
import Main from './components/Instance';



const NewCanvas = new Canvas({width: 400, height: 900, id: "main"});

document.querySelector('[data-root]').innerHTML =
	`<div>${
		NewCanvas.create()
	}</div>`;
