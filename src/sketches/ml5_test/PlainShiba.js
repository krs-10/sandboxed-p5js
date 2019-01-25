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

const OgShiba = (url = defaultUrl, width = 900, height = 900) => {
  let MODEL = () => {
    return ml5.imageClassifier("MobileNet");
  };
  const write = (err, results) => {
    if (err)
      return document.body.insertAdjacentHTML(
        "beforeEnd",
        `<div>we've got an error: ${err}</div>`
	  );
	console.log('WRITE -  results: ', results);
    let domDone = results.map(({className, probability}, i) => {
      return `<div>${className}, ~${probability}</div>`
    }).concat(' ')
    return document.body.insertAdjacentHTML(
      "beforeEnd",
      `<div><h3>Results!</h3><div>${domDone}</div></div>`
    );
  };
  const load_image = () => {
    let img = new Image();
    img.src = url;
    return new Promise((res, rej) => {
      img.onload = e => {
		  document.body.appendChild(img)
        res(img);
      };
    });
  };
  const begin = async (...args) => {
    const img = await load_image();
    MODEL().then(classifier => {
      classifier.predict(img, (error, results) => {
		  write(error, results);
      });
    });
  };
  const model_ready = img => {
    ml5
      .imageClassifier("MobileNet")
      .then(classifier => {
        classifier.predict(img);
      })
      .then((error, results) => {
        // Do something with the results
      });
  };
  return {
    begin: begin
    // load_image: load_image,
    // analyze: analyze,
    // write: write
  };
};

const TestOgShiba = OgShiba();
TestOgShiba.begin();
const Shiba = noop;
// Shiba.load_image()
// Shiba.analyze()
export default Shiba;
