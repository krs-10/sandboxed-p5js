import Image from "./Image";
import Interaction from "./Interaction";
import Base from "../../components/Base";


class Sketch {
	parent = null
	width = 800
	height = 800
	constructor({...rest} = {}){
		Object.assign(this, rest);
	}
	begin(){
		const __interaction = new Interaction({width: this.width, height: this.height, angle: 0}), 
			__image = new Image({width: this.width, height: this.height});

		__interaction.init(this.parent)
		__image.init(this.parent)
	}
}

export default Sketch; 

// export default Sketch; 

