
import "p5/lib/addons/p5.dom.js";
require("./styles/skeleton.css");

import Canvas from 'components/Canvas'; 
import Instance from 'components/Instance';



const NewCanvas = new Canvas(100, 200);


// const NewImage = new Image()


// newInstance.setup();
// newInstance.draw();

const Inside = NewCanvas.create();


// console.log('index.js -  NewImage: ', NewImage);
// window.NewImage = NewImage; 

document.querySelector('[data-root]').innerHTML = `<h1>${new Instance({width: 900, height: 100, fill: 249, background: 230})}</h1>`;
