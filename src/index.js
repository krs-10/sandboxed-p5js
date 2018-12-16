
import "p5/lib/addons/p5.dom.js";
require("./styles/skeleton.css");

import Canvas from 'components/Canvas'; 
import Instance from 'components/Instance';
import Follower from 'components/Follower';




const NewCanvas = new Canvas(1200, 200);
// NewInstance = new Instance({ width: 900, height: 100, fill: 249, background: 230 });

const NewFollower = new Follower({x0: 40});
// document.querySelector('[data-root]').innerHTML = 
// `${new Instance({width: 900, height: 100, fill: 249, background: 230})}`;

document.querySelector('[data-root]').innerHTML =
	`<div>${NewCanvas.create('hi')}</div>`;
