import Base from "../../components/Base";
import Voice from "../../components/Speech"; 

const noop = () => {};

let defaultUrl = "../assets/images/paprika.jpg";

const defaults = {
  url: defaultUrl,
  width: 900,
  height: 900
};


const FancyShiba = ({url = defaultUrl, width = 900, height = 900, ...imageProperties} = {}) => {
// 	parent = document.body, ...rest
// } = { }
let parent = document.body; 
	let image, 
	info,
	analysis; 

  let MODEL = () => {
    return ml5.imageClassifier("MobileNet");
  };
  let CLASSIFY = (classifier, subject) => {
	  return classifier.predict(img, (error, results))
  }
	const write = (results, err = false, {...divProperties} = {}) => {
		console.log('PlainShiba.js -  divProperties: ', divProperties);
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

  const load_image = ({url:_url = defaultUrl, ..._imageProperties} = {}) => {
	let img = new Image();
		img.src = _url;
		if (!_imageProperties) _imageProperties = imageProperties; 

    return new Promise((res, rej) => {
      img.onload = e => {
		  let formattedImg = Object.assign(img, { ..._imageProperties});
		  image = formattedImg; 
         res(formattedImg);
      };
    });
  };


  const fetchModel = (cb = noop) => {
	  return ml5.imageClassifier("MobileNet", cb);
  }
  const fetchPrediction = (model, img) => {
	  return model.predict(img);
  }
  const analyzeImage = (img) => {
    return ml5
      .imageClassifier("MobileNet")
      .then(classifier => {
        return classifier.predict(img);
      })
  };


  const processImage = (image) => {
	return fetchModel()
		.then((classifier) => {
			return classifier.predict(image)
		})
		.then((results, error) => {
			return {results, image,  error}
		})

  }

  const init = async () => {
	  console.log('PlainShiba.js -  url, imageProperties: ', url, imageProperties);
		const image = await load_image();
		const speaker = Voice();


		speaker.begin();
		speaker.onEnd((fetchModel) => {
			return processImage(image); 
		})
		.then((res) => {
			console.log('FancyShiba.js -  res: ', res);
		})
	  // return analyzeImage(image).then((results, error) => {
		//   return { results, image, error };
	  // });
  }

  return {
  init: init,
	processImage: processImage,
	fetchImage: load_image,
	fetchModel: fetchModel,
	analyzeImage: analyzeImage,
	fetchPrediction: fetchPrediction,
	writeResults: write, 
  };
};

export default FancyShiba;
