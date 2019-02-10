import Base from "../../components/Base";

const noop = () => { };

let defaultUrl = "../assets/images/paprika.jpg"

const defaults = {
	url: defaultUrl, 
	width: 900, 
	height: 900
}

const Shiba = ((url, width, height) => {

	let classifier; 
	const load_image = () => {
		let img = new Image();
		img.src = url; 
		img.onload = (e) => {
			document.appendChild(img);
			return img;
		}
	}
	const load_model = () => {
		
	}
	const analyze = async () => {
		const img_el = await load_img()
		classifier.predict(img, write);
	}
	const write = () => {

	}
})

class Shiba extends Base {
	constructor( args = {}) {
		super();
		Object.assign(this, defaults, args);
		this.funcs = ['preload', 'setup', 'draw']
	}
	writeResults = (err, results) => {
		console.log('Shiba.js -  results: ', results);
		if (err) return document.body.insertAdjacentHTML('beforeEnd', `<div>we've got an error: ${err}</div>`)
		let domDone  = results.map((r, i) => {
			return `<div>${i}: ${r}</div>`
		})
		return document.body.insertAdjacentHTML('beforeEnd', `<div><h3>Results!</h3><div>${domDone}</div></div>`)
	}
	modelReady = () => {
		this.classifier.predict(this.img, this.writeResults)
	}
	preload = () => {
		const { res, url } = this;

		// console.log('Shiba.js -  this.img: ', this.img);
		// window.p5 = p5; 
		// window.res = res; 
		// console.log('Shiba.js -  res: ', res);

		// const blegh  = document.createElement('IMG');
		// blegh.src = url; 
		// document.body.appendChild(img)
	};
	setup = () => {
		const { res, img } = this;
		this.canvas = res.createCanvas(this.width, this.height);
		// res.noCanvas()
		this.classifier = ml5.imageClassifier("MobileNet", this.modelReady);
	};
}

const feee = new Shiba({ width: 900, height: 600 })

feee.init()
export default Shiba;
