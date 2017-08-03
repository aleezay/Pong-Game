import {
  SVG_NS
} from '../settings';

export default class Paddle {

  constructor(boardHeight, width, height, x, y, up, down) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10; //number of pixels it moves per up call or down call
    this.score = 0;
    // this.fill = #40E0D0;

    document.addEventListener('keydown', event => {
      switch (event.key) {

        case up:
          this.up();
          break;

        case down:
          this.down();
          break;
      }
    });
  }

  up() {
    //get the max number between the top of the board and the current y minus speed
    this.y = Math.max(this.y - this.speed, 0);
  }

  down() {
    //get the min number board height - paddle height and the current y plus speed
    this.y = Math.min(this.y + this.speed, this.boardHeight - this.height);
  }

  render(svg) {

    let rect = document.createElementNS(SVG_NS, 'rect');
    rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);
    rect.setAttributeNS(null, 'x', this.x);
    rect.setAttributeNS(null, 'y', this.y);
    rect.setAttributeNS(null, 'speed', this.speed);
    rect.setAttributeNS(null, 'fill', '#40E0D0');
    // rect.setAttributeNS(null, 'fill', '#FFF');
    svg.appendChild(rect);

  }

}

//always start in the middle bc we want it to render with the board rather than an arbitrary pixel size