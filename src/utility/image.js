const noop = () => {}

// const imageFromUrl = (url, cb,  {...imageProperties} ={}) => {
// 	let img = new Image();
// 	img.src = url;
// 	console.log('image.js -  img: ', img);
// 	Object.assign(img, { ...imageProperties });
// 	return new Promise((res, rej) => {
// 		img.onload = e => {
// 			res(img);
// 			console.log('image.js -  res: ', res);
// 			// let formattedImg = Object.assign(img, { ...imageProperties });
// 			// res(formattedImg);
// 		};
// 	})
// 	.then((new_image) => {
// 		return cb(new_image);
// 	})
// }

// function loaded() {
// 	alert('loaded')
// }

// if (img.complete) {
// 	loaded()
// } else {
// 	img.addEventListener('load', loaded)
// 	img.addEventListener('error', function () {
// 		alert('error')
// 	})
// }

const imageFromUrl = (url, cb = noop, { ...imageProperties } = {}) => {
	return new Promise((resolve, reject) => {
		let img = new Image()
		
		console.log('image.js -  img.src: ', img.src);
		img.complete && resolve(img);
		img.onload = () => {
			resolve(img)
		}
		img.src = url
		console.log('image.js -  img.src: ', img.src);
		// if (img.complete) resolve(img)

	}).then((new_img) => {
		const formatted_new_img = Object.assign(new_img, { ...imageProperties });
		return cb(formatted_new_img); 
	})
}

export { imageFromUrl};
