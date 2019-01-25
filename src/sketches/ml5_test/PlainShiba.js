import Base from "../../components/Base";

const noop = () => {};

let defaultUrl = "../assets/images/paprika.JPG";

const defaults = {
  url: defaultUrl,
  width: 900,
  height: 900
};

// const MODEL = () => {
// 	ml5.imageClassifier("MobileNet", (err, good) => {
// 		console.log("model -  err, good: ", err, good);
// 		 LOAD().then((resp) => {
// 			 console.log('PlainShiba.js -  resp: ', resp);
// 		 })

// 	})
// }

// MODEL()

const Shiba = ({url = defaultUrl, width = 900, height = 900, className = "image--ml5", ...rest} = {}) => {
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
	const write = (results, err) => {
		if (err)
			return (
				"beforeEnd",
				`<div>we've got an error: ${err}</div>`
			);
		let domDone = results.map(({ className, probability }, i) => {
			return `<div>${className}, ~${probability}</div>`
		}).concat(' ')
		const newDiv = document.createElement("div");
		newDiv.innerHTML = `<div><h3>Results!</h3><div>${domDone}</div></div>`
		return newDiv; 
		// return (
		// 	"beforeEnd",
		// 	`<div><h3>Results!</h3><div>${domDone}</div></div>`
		// );
	};
  const load_image = ({url = defaultUrl, className="ml5__image", ...imageProps} ={}) => {
	let img = new Image();
    img.src = url;
    return new Promise((res, rej) => {
      img.onload = e => {
		  let formattedImg = Object.assign(img, {className, ...imageProps});
		  image = formattedImg; 
         res(formattedImg);
      };
    });
  };
  const begin = async (cb = noop) => {
    const img = await load_image();
    MODEL().then(classifier => {
      classifier.predict(img, (error, results) => {
		  write(error, results);
		  return cb(image, error, results); 
	  })
    });
  };

  const fetchModel = () => {
	  return ml5.imageClassifier("MobileNet");
  }
  const fetchPrediction = (model, img) => {
	  return model.predict(img);
  }
  const model_ready = (img) => {
    return ml5
      .imageClassifier("MobileNet")
      .then(classifier => {
        return classifier.predict(img);
      })
  };
  const testBegin = async () => {
	  
  }

  const processImage = (image) => {
	return fetchModel()
		.then((classifier) => {
			return classifier.predict(image)
		})
		.then((results, error) => {
			return {results, image,  error}
		})

  }

  const init = async (url = defaultUrl, {className = "ml5__image", ...imageOptions} = {}) => {
	  const image = await load_image({ url = defaultUrl, className="ml5__image", ...imageOptions } = {});
	  return model_ready(image).then((results, error) => {
		  return { results, image, error };
	  });
  }
  
  // const img = await fetchImage('url'); 
  // const classifier = await fetchModel()
  // const prediction = await fetchPrediction(classifier, img)

  return {
    init: init,
	processImage: processImage,
	begin: begin, 
	fetchImage: load_image,
	fetchModel: fetchModel,
	fetchPrediction: fetchPrediction,
	writeResults: write, 
  };
};

export default Shiba;
