// import {
//   SVG_NS
// } from '../settings';

// export default class Winner {

//    constructor(width, height, score) {
//     this.width = width;
//     this.height = height;
//     this.score = score;
//   }
// render(svg, winner) {

// 		this.gameElement.innerHTML = '';

//     let textWinner = document.createElementNS(SVG_NS, 'text');
//     textWinner.setAttributeNS(null, 'x', this.x);
//     textWinner.setAttributeNS(null, 'y', this.y);
//     textWinner.setAttributeNS(null, 'fill', 'plum');
//     textWinner.setAttributeNS(null, 'font-size', '30');
//     textWinner.setAttributeNS(null, 'font-family', 'Silkscreen web');
//     textWinner.textContent = winner;
//     svg.appendChild(textWinner);
//   }
// }