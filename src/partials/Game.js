import {
	SVG_NS
} from '../settings'; //always have imports at the top
import Board from './Board'

export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;

		this.gameElement = document.getElementById(element); //dont have to call it by 'game' because this make is a bit more flexible 
		this.board = new Board(this.width, this.height);

		// Other code goes here...
	}

	render() { //do it this way so we can animate it.

		this.gameElement.innerHTML = '';

		let svg = document.createElementNS(SVG_NS, 'svg'); //find out why NS - storing reference to svg
		svg.setAttributeNS(null, 'version', '1.1');
		svg.setAttributeNS(null, 'width', this.width); //using this so we can instantiate a larger or smaller game.
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0,0 ${this.width} ${this.height}`);
		this.gameElement.appendChild(svg);
		this.board.render(svg); //appending board. has to be called svg bc thats what we called our variable with let.
	}

}