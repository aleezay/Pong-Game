import {
  SVG_NS
} from '../settings';

export default class Winner {

  constructor(boardWidth, boardHeight, width, height) {
    this.width = width;
    this.height = height;
  }
  render(svg, player1, player2) {

    this.gameElement.innerHTML = '';
    let text = document.createElementNS(SVG_NS, 'text');
    text.setAttributeNS(null, 'x', this.x);
    text.setAttributeNS(null, 'y', this.y);
    text.setAttributeNS(null, 'fill', 'plum');
    text.setAttributeNS(null, 'font-size', '30');
    text.setAttributeNS(null, 'font-family', 'Silkscreen web');
    text.textContent = winner;
    svg.appendChild(text);
  }
}