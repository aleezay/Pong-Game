// import {
//   SVG_NS
// } from '../settings';

// export default class Winner {

//    constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
// render(svg, winner) { //parameter. can be any reference stand in inside of our function to what will eventually be a dom node. atm it has no idea - waiting for us to pass a reference into it. could call it anything

//   render(svg, score) {
//     const textWinner = document.createElementNS(SVG_NS, 'text');
//     textWinner.setAttributeNS(null, 'x', this.x);
//     textWinner.setAttributeNS(null, 'y', this.y);
//     textWinner.setAttributeNS(null, 'fill', 'plum');
//     textWinner.setAttributeNS(null, 'font-size', '30');
//     textWinner.setAttributeNS(null, 'font-family', 'Silkscreen web');
//     textWinner.textContent = winner;
//     svg.appendChild(textWinner);
//   }
// }
// }