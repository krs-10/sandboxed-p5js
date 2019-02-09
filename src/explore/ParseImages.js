import { MlImage } from "../components/ml5.js";
import * as UTIL from "../utility.js";


const root = document.querySelector('[data-route]'), 
	input = root.querySelector('[data-input]'),
	results = root.querySelector('[data-search-results]'),
	image = results.querySelector('[data-image]'),
	analysis = results.querySelector('[data-analysis]');

	



const ImageHolder = new DocumentFragment(), 
	AnalysisHolder = new DocumentFragment();



const handleSearch = (event) => {

	const { target, currentTarget, ...rest } = event;

	results.classList.toggle("active", true);
	image.setAttribute("loading", true);
	analysis.setAttribute("loading", true);

	UTIL.fetchFromUrlLong(
		`/proxied/${target.value}`,
		urlthing => {
			const ProxiedImageEl = new Image();
			ProxiedImageEl.src = urlthing.url,
				ProxiedImageEl.crossOrigin = "anonymous";

			image.setAttribute("loading", false);
			image.appendChild(ProxiedImageEl);
			
			MlImage.analyzeImage(ProxiedImageEl).then((imageResults) => {
				
				analysis.setAttribute("loading", false);
				analysis.appendChild(MlImage.createPredictionEl(imageResults))

			})
		},
		{})
}

window.onload = () => {
	InputEl.onsearch = (e => handleSearch(e))
}




