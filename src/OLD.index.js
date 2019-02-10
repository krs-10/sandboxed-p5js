
import "p5/lib/addons/p5.dom.js";
require("./styles/skeleton.css");
require("./styles/main.css");
require("./../libs/p5.speech");

import { MLImage } from "./components/ml5";
import * as UTIL from "./utility";

const shibaURL =  "../assets/images/paprika.jpg";


const root = document.querySelector('[data-root]');
root.classList.add("root__container")

// import Voice from 'components/Speech';
// import Canvas from 'components/Canvas'; 
// // import Sketch from './sketches/pulse/Sketch';
// import Shiba from "./sketches/ml5_test/PlainShiba";
// import FancyShiba from "./sketches/ml5_test/FancyShiba";
// import { Interaction } from "./sketches/pulse";

const ImageHolder = new DocumentFragment();

UTIL.imageFromUrl(shibaURL, (shibaImage) => {
	ImageHolder.append(shibaImage);
	root.appendChild(ImageHolder);

	
}, {className: "image--shiba"});



// UTIL.imageFromUrl()


// // const NewInteraction = new Interaction({width: 900, height: 900});
// // NewInteraction.init()

// // const ImageInstance = new Image()
// // ImageInstance.init()
// // const instanceOne = Sketch(200, 500, "main");




// const FancyShug = FancyShiba({ className: "scaled--half image" });
// const ShugSpeak = Voice();
// FancyShug.fetchImage().then((image) => {
// 	SketchHolder.append(image);
// 	root.appendChild(SketchHolder);

// 	FancyShug.analyzeImage(image).then((response) => {

// 		const readout = response.reduce((total, current) => {
// 			total += current.className.toString();
// 			return total; 
// 		}, '')
// 		ShugSpeak.speaker.speak(readout)
// 	})
// });
