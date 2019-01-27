
import "p5/lib/addons/p5.dom.js";
require("./styles/skeleton.css");
require("./styles/main.css");
require("./../libs/p5.speech");

import { MlImage } from "./components/ml5";
import * as UTIL from "./utility";

const shibaURL =  "../assets/images/paprika.jpg";


const root = document.querySelector('[data-root]');
root.classList.add("root__container")

const ImageHolder = new DocumentFragment();

UTIL.imageFromUrl(shibaURL, (shibaImage) => {
	ImageHolder.append(shibaImage);
	root.appendChild(ImageHolder);
	MlImage.analyzeImage(shibaImage).then((results) => {
	 root.appendChild(MlImage.createPredictionEl(results))
	})
}, {className: "image--shiba"});
