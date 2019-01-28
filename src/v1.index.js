
import "p5/lib/addons/p5.dom.js";
require("./styles/skeleton.css");
require("./styles/main.css");
require("./../libs/p5.speech");

import { MlImage } from "./components/ml5";
import * as UTIL from "./utility";

const shibaURL =  "../assets/images/paprika.jpg";
const moebiusURL = "../assets/images/moebius1.jpg";
const pipe_manURL = "../assets/images/pipe_man.jpg";
const oak_tree_snow = "./assets/images/oak_tree_snow.jpg";

const root = document.querySelector('[data-root]');
root.classList.add("root__container")

const ImageHolder = new DocumentFragment();

UTIL.imageFromUrl(oak_tree_snow, (imageEl) => {
	ImageHolder.append(imageEl);
	root.appendChild(ImageHolder);
	MlImage.analyzeImage(imageEl).then((imageResults) => {
	 root.appendChild(MlImage.createPredictionEl(imageResults))
	})
}, {className: "image--shiba"});
