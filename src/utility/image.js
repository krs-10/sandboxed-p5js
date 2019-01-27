const noop = () => {}

const imageFromUrl = (url, cb,  {...imageProperties} ={}) => {
	let img = new Image();
	img.src = url;
	Object.assign(img, { ...imageProperties });
	return new Promise((res, rej) => {
		img.onload = e => {
			res(img);
			// let formattedImg = Object.assign(img, { ...imageProperties });
			// res(formattedImg);
		};
	})
	.then((new_image) => {
		return cb(new_image);
	})
}

export { imageFromUrl};
