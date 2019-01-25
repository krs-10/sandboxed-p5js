
import "p5/lib/addons/p5.dom.js";
require("./styles/skeleton.css");
require("./styles/main.css");

import Canvas from 'components/Canvas'; 
// import Sketch from './sketches/pulse/Sketch';
import Shiba from "./sketches/ml5_test/PlainShiba";
// import {Image} from "./sketches/pulse";

const NewCanvas = new Canvas({width: 900, height: 900, id: "main"});


// const ImageInstance = new Image()
// ImageInstance.init()
// const instanceOne = Sketch(200, 500, "main");

document.querySelector('[data-root]').innerHTML = `<div id="main"></div>`
// instanceOne.start()

