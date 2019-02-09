
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

const ImageHolder = new DocumentFragment(),
	LoadingContainer = document.createElement('div');
LoadingContainer.classList.add("loading__container");
root.appendChild(LoadingContainer)



const InputEl = document.createElement('input'); 
InputEl.type = "search"; 
InputEl.value =
  "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12224412/Shiba-Inu-On-White-01.jpg";

InputEl.onsearch = (event) => {
	const { target, currentTarget, ...rest} = event; 

	LoadingContainer.classList.toggle("active", true);

	UTIL.fetchFromUrlLong(
    `/proxied/${target.value}`,
    urlthing => {
			const ProxiedImageEl = new Image();
			ProxiedImageEl.src = urlthing.url, 
			ProxiedImageEl.crossOrigin = "anonymous";

			ImageHolder.appendChild(ProxiedImageEl);
			MlImage.analyzeImage(ProxiedImageEl).then((imageResults) => {
				LoadingContainer.classList.toggle("active", false);
				ImageHolder.appendChild(MlImage.createPredictionEl(imageResults))
				LoadingContainer.appendChild(ImageHolder);
				
				
			})
		},
	 {})
}

root.appendChild(InputEl);

