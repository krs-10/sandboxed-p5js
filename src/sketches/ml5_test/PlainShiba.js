import Base from "../../components/Base";

const noop = () => {};

let defaultUrl = "../assets/images/paprika.JPG";

const defaults = {
  url: defaultUrl,
  width: 900,
  height: 900
};

const test = ml5.imageClassifier("MobileNet");

const BAR = ml5.imageClassifier("MobileNet", (err, response) => {
	
})
const FOO = ((img) => {

})
const LOAD = ((url = defaultUrl, width = 900, height = 900) => {
	let img = new Image();
	img.src = url;
	return new Promise((res, rej) => {
		img.onload = e => {
			document.body.appendChild(img);
			res(img)
		};
	})
})

LOAD()

// const MODEL = () => {
// 	ml5.imageClassifier("MobileNet", (err, good) => {
// 		console.log("model -  err, good: ", err, good);
// 		 LOAD().then((resp) => {
// 			 console.log('PlainShiba.js -  resp: ', resp);
// 		 })
		
// 	})
// }

// MODEL()


// const Shiba = ((url = defaultUrl, width = 900, height = 900) => {
//   let MODEL = () => {
//     ml5.imageClassifier("MobileNet", (...args) => {
// 	  console.log("model -  ...args: ", ...args);
	  
//     });
//   };
//   const load_image = () => {
//     let img = new Image();
//     img.src = url;
//     return new Promise((res, rej) => {
//       img.onload = e => {
//         document.body.appendChild(img);
//         console.log("LOADED -  img: ", img);
//         res(img);
//       };
//     });
//   };
//   return {
//     model: MODEL,
//     load_image: load_image
//   };
//   // const begin = async (...args) => {
//   // 	console.log('BEGIN -  ...args: ', ...args);
//   // 	const img = await load_image();
//   // 	console.log('SHOULD BE LOADED -  img: ', img);
//   // 	console.log('PlainShiba.js -  MODEL: ', MODEL);
//   // 	MODEL().then((classifier) => {
//   // 		classifier.predict(img, (...results) => {
//   // 			console.log('PREDICTED -  results: ', results);
//   // 		})
//   // 	})
//   // }
//   // const model_ready = ((img) => {
//   // 	ml5.imageClassifier('MobileNet')
//   // 		.then((classifier) => {
//   // 			classifier.predict(img)
//   // 		})
//   // 		.then((error, results) => {
//   // 			console.log('PlainShiba.js -  error: ', error);
//   // 			console.log('PlainShiba.js -  results: ', results);
//   // 			// Do something with the results
//   // 		});
//   // })
//   const write = (err, results) => {
//     if (err)
//       return document.body.insertAdjacentHTML(
//         "beforeEnd",
//         `<div>we've got an error: ${err}</div>`
//       );
//     let domDone = results.map((r, i) => {
//       return `<div>${i}: ${r}</div>`;
//     });
//     return document.body.insertAdjacentHTML(
//       "beforeEnd",
//       `<div><h3>Results!</h3><div>${domDone}</div></div>`
//     );
//   };
//   return begin();
//   // return {
//   // 	begin: begin,
//   // 	// load_image: load_image,
//   // 	// analyze: analyze,
//   // 	write: write
//   // }
// })();

const Shiba = noop; 
// Shiba.load_image()
// Shiba.analyze()
export default Shiba;
