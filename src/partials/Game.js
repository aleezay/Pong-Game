import {
	SVG_NS,
	KEYS
} from '../settings';

import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';
import Winner from './Winner';

export default class Game {

	constructor(element, width, height) {
		this.width = width;
		this.height = height;
		this.gameElement = document.getElementById(element);

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
		// this.ball2 = new Ball (2, this.width, this.height, this.player1, this.player2);

		this.score1 = new Score(this.width / 2 - 80, 40, 30);
		this.score2 = new Score(this.width / 2 + 60, 40, 30);

		this.winner = new Winner(this.width, this.height);

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
		this.pause = true;
	}

	// ball2(svg) {
	// if(this.player1.score >= 5 || this.player2.score >= 5 ) {
	// 	this.ball2.render(svg, this.player1, this.player2);
	// }
	// }

	render() {

		if (this.pause) {
			return;
		}

		this.gameElement.innerHTML = '';

		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'version', '1.1');
		svg.setAttributeNS(null, 'width', this.width); //to enable instantiating a larger or smaller game.
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0,0 ${this.width} ${this.height}`);
		this.gameElement.appendChild(svg);
		this.board.render(svg);
		this.player1.render(svg);
		this.player2.render(svg);
		this.ball.render(svg, this.player1, this.player2);
		// this.ball2.render(svg, this.player1, this.player2);
		this.score1.render(svg, this.player1.score);
		this.score2.render(svg, this.player2.score);
		// this.winner.render(svg, 'winner');

		if (this.player1.height === 0) {
			// this.winner.render(svg, 'Player 2 Wins!')
			this.declareWinner(svg)
			window.alert('Player 2 Wins!')

		} else if (this.player2.height === 0) {
			// this.winner.render(svg, 'Player 1 Wins!')
			this.declareWinner(svg)
			window.alert('Player 1 Wins!')	
		}
	}
}