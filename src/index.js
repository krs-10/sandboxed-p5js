
require("./styles/skeleton.css");

import Canvas from 'components/Canvas'; 
const NewCanvas = new Canvas(100, 200);
const Inside = NewCanvas.create();
document.querySelector('[data-root]').innerHTML = `<h1>${NewCanvas.create()}</h1>`;
