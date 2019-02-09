
// import "p5/lib/addons/p5.dom.js";
require("./styles/skeleton.css");
require("./styles/main.css");
// require("./../libs/p5.speech");

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
InputEl.value =
  "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12224412/Shiba-Inu-On-White-01.jpg";

const InputEl2 = document.createElement('input');
InputEl2.type = "search";
InputEl2.value =
	"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12224412/Shiba-Inu-On-White-01.jpg";

// { mode: "cors" }
InputEl.onsearch = (event) => {
	const { target, currentTarget, ...rest} = event; 
	console.log('index.js -  currentTarget: ', currentTarget);
	window.test = event; 
	UTIL.fetchFromUrlLong(
    `/proxied/${target.value}`,
    urlthing => {
			console.log('WITH PROXIED -  urlthing: ', urlthing);

		},
	 {})
}

InputEl2.onsearch = (event) => {
	console.log('index.js -  event: ', event);
	const FOO = new Image();
	FOO.crossOrigin = "anonymous";
	FOO.src = event.target.value; 
	console.log('index.js -  FOO: ', FOO);
	root.appendChild(FOO);
	// const { target, currentTarget, ...rest } = event;
	// console.log('index.js -  currentTarget: ', currentTarget);
	// window.test = event;
	// UTIL.fetchFromUrlLong(target.value,
	// 	urlthing => {
	// 		console.log('no proxied -  urlthing: ', urlthing);

	// 	},
	// 	{mode: "cors"})
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
root.appendChild(InputEl2);
root.insertAdjacentHTML("beforeEnd", '<div>https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12224412/Shiba-Inu-On-White-01.jpg');
