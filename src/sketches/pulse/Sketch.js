import Image from "./Image";
import Interaction from "./Interaction";


export default function Sketch(width, height, parent) {
	const n_image = new Image({width: width, height: height, parent: parent}), 
		n_interaction = new Interaction({width: width, height: height, parent: parent})

	const start = (() => {
		n_image.init()
		n_interaction.init()
	})

	return { 
		image: n_image, 
		interaction: n_interaction,
		start
	 }
}


// export default Sketch; 

