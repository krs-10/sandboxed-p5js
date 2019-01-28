

// let register = require("cors-proxy-webpack-plugin/dist/runtime");
// register();

import "p5/lib/addons/p5.dom.js";
require("./styles/skeleton.css");
require("./styles/main.css");
require("./../libs/p5.speech");

import { MlImage } from "./components/ml5";
import * as UTIL from "./utility";

const moebiusURL = "../assets/images/moebius1.jpg";
const pipe_manURL = "../assets/images/pipe_man.jpg";
const oak_tree_snow = "./assets/images/oak_tree_snow.jpg";

const root = document.querySelector('[data-root]');
root.classList.add("root__container")

const ImageHolder = new DocumentFragment();

const InputEl = document.createElement('input'); 
InputEl.type = "search"; 


InputEl.onsearch = ({currentTarget}) => {
	const response = UTIL.fetchFromUrl(currentTarget.value, ((urlthing) => {
	}), {mode: "cors"});
}


UTIL.imageFromUrl(oak_tree_snow, (imageEl) => {
	// console.log('index.js - imageEl.src: ',imageEl.src);
	ImageHolder.append(imageEl);
	root.appendChild(imageEl);

	MlImage.analyzeImage(imageEl).then((imageResults) => {
	 root.appendChild(MlImage.createPredictionEl(imageResults))
	})
}, {className: "image--shiba"});

root.appendChild(InputEl);
root.insertAdjacentHTML("beforeEnd", '<div>https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12224412/Shiba-Inu-On-White-01.jpg');
