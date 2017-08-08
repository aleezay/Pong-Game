import {
	SVG_NS,
	KEYS
} from '../settings'; //always have imports at the top

import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';
// import Winner from './Winner';

export default class Game {

	constructor(element, width, height) {
		this.width = width;
		this.height = height;
		this.gameElement = document.getElementById(element); //dont have to call it by 'game' because this make is a bit more flexible 

		//export these 3 as const in settings. then import
		this.paddleWidth = 8;
		this.paddleHeight = 56;
		this.boardGap = 10;

		this.board = new Board(this.width, this.height);

		this.player1 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.boardGap,
			(this.height - this.paddleHeight) / 2,
			KEYS.a,
			KEYS.z
		);

		this.player2 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.width - this.boardGap - this.paddleWidth,
			(this.height - this.paddleHeight) / 2,

			KEYS.up,
			KEYS.down

		);

		this.ball = new Ball(8, this.width, this.height, this.player1, this.player2); // change 8 to this.ballSize pass in this.player 1&2
		// this.circle2 = new Ball (2, this.width, this.height, this.player1, this.player2);
		
		this.score1 = new Score(this.width / 2 - 80, 40, 30);
		this.score2 = new Score(this.width / 2 + 60, 40, 30);


		// this.winner = new Winner(this.width, this.height, this.score);

		document.addEventListener('keydown', event => {
			switch (event.key) {
				case KEYS.spaceBar:
					this.pause = !this.pause;
					break;

				case KEYS.r:
					location.reload();
			}
		});

	}
	declareWinner(svg, player) {
		// this.winner.render(svg);
		this.pause = true;
	}

	// circle2(svg) {
	// if(this.player1.score > 2 || this.player2.score > 2) {
	// 	this.circle2.render(svg, this.player1, this.player2);
	// }
	
	
	render() { //do it this way so we can animate it.

		if (this.pause) {
			return;
		}

		this.gameElement.innerHTML = '';

		let svg = document.createElementNS(SVG_NS, 'svg'); //find out why NS - storing reference to svg
		svg.setAttributeNS(null, 'version', '1.1');
		svg.setAttributeNS(null, 'width', this.width); //using this so we can instantiate a larger or smaller game.
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0,0 ${this.width} ${this.height}`);
		this.gameElement.appendChild(svg);
		this.board.render(svg); //appending board. has to be called svg bc thats what we called our variable with let.
		this.player1.render(svg);
		this.player2.render(svg);
		this.ball.render(svg, this.player1, this.player2);
		// this.circle2.render(svg, this.player1, this.player2);
		this.score1.render(svg, this.player1.score);
		this.score2.render(svg, this.player2.score);
		// this.winner.render(svg, winner);

		if (this.player1.height === 0) {
			this.declareWinner(svg)
			window.alert('Player 2 Wins!')

		} else if (this.player2.height === 0) {
			this.declareWinner(svg)
			window.alert('Player 1 Wins!')
		}
	}
}