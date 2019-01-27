

const noop = () => {};

let defaultUrl = "../assets/images/paprika.jpg";

import {imageFromUrl} from "../../utility";


const MlImage = (() => {

	const writePrediction = (results, err = false, {...divProperties} = {}) => {
		if (err)
			return (
				"beforeEnd",
				`<div>we've got an error: ${err}</div>`
			);
		let domDone = results.map(({ className, probability }, i) => {
			return `<div>${className}, ~${probability}</div>`
		}).concat(' ')
		const newDiv = document.createElement("div");
		newDiv.innerHTML = `<div >
		<h3>Results!</h3>
		<div>${domDone}</div>
		</div>`
		Object.assign(newDiv, {...divProperties});
		return newDiv; 
	};

	const createPredictionEl = ({results, err = false} = {}) => {
		const PredictionFragment = new DocumentFragment(), 
			PredictionDiv = document.createElement("div");
		if (err){
				PredictionDiv.innerHTML = `<div>we've got an error: ${err}</div>`
		}
		else { 
			PredictionDiv.innerHTML = results.reduce((total, current, i) => {
				const { className, probability } = current; 
				const resultString = `<div>${className}, ~${probability}</div>`;
				total += resultString; 
				return total; 
			}, "")
		}
		return PredictionDiv; 
	}

  const getPrediction = (image) => {
    return ml5
      .imageClassifier("MobileNet", { topk: 5})
      .then(classifier => {
        return classifier.predict(image);
      })
  };

	const analyzeUrl = async (url = defaultUrl, {...imageProperties } = {}) => {
	  const image = await imageFromUrl(url, imageProperties);
	  return getPrediction(image).then((results, error) => {
		  return { results, error, image };
	  });
	}
	
	const analyzeImage = async (image) => {
		return getPrediction(image).then((results, error) => {
			return { results, error, image };
		});
	}

  return {
	analyzeUrl: analyzeUrl,
	analyzeImage: analyzeImage,
	getPrediction: getPrediction,
	createPredictionEl: createPredictionEl
  };
})()

export default MlImage;
