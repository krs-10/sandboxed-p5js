
import "p5/lib/addons/p5.dom.js";
require("./styles/skeleton.css");
require("./styles/main.css");
require("./../libs/p5.speech");

import Voice from 'components/Speech';
import Canvas from 'components/Canvas'; 
// import Sketch from './sketches/pulse/Sketch';
import Shiba from "./sketches/ml5_test/PlainShiba";
import FancyShiba from "./sketches/ml5_test/FancyShiba";
import { Interaction } from "./sketches/pulse";

const SketchHolder = new DocumentFragment();



// const NewInteraction = new Interaction({width: 900, height: 900});
// NewInteraction.init()

// const ImageInstance = new Image()
// ImageInstance.init()
// const instanceOne = Sketch(200, 500, "main");

const root = document.querySelector('[data-root]');
root.classList.add("root__container")


const FancyShug = FancyShiba({ className: "scaled--half image" });
const ShugSpeak = Voice();
FancyShug.fetchImage().then((image) => {
	SketchHolder.append(image);
	root.appendChild(SketchHolder);

	FancyShug.analyzeImage(image).then((response) => {

		console.log('index.js -  response: ', response);
		const readout = response.reduce((total, current) => {
			total += current.className.toString();
			return total; 
		}, '')
		ShugSpeak.speaker.speak(readout)
	})
});

// const Shug = Shiba({className: "scaled--half image"});
// Shug.init().then((Shuglet) => {
// 	const datasets = Shug.writeResults(Shuglet.results, Shuglet.error, {className:"results__container"});
// 	SketchHolder.append(Shuglet.image, datasets);
//   root.appendChild(SketchHolder);
// })
