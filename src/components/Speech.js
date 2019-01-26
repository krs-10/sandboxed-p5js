require("./../../libs/p5.speech.js");

const noop = () => { };


const Voice = ({test} = {}) => {
	const confidant = new p5.SpeechRec('en-US'), 
		speaker = new p5.Speech();
	confidant.continuous = true; // do continuous recognition
	confidant.interimResults = true; // allow partial recognition (faster, less accurate)

	console.log('Speech.js -  confidant: ', confidant);
	const begin = (cb = obey, delay = 1000) => {
		confidant.onStart(cb)
	}
	return {
		confidant: confidant, 
		begin: begin, 
		speaker: speaker
	}
};

export default Voice;
