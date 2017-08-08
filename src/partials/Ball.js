import {
  SVG_NS
} from '../settings';

export default class Ball {

  constructor(radius, boardWidth, boardHeight, player1, player2) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    this.player1 = player1;
    this.player2 = player2;
    this.ping = new Audio('public/sounds/pong-01.wav');
    this.reset();
  }

  reset() {
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;
    this.vy = 0

    // this.vy = Math.floor(Math.random() * 10 - 5); 
    //Math.random() in browser console generates random numbers between 0-1
    // so for us (Math.random() *10-5) moves it along y-axis
    //Math.abs is absolute 

    while (this.vy === 0) {
      this.vy = Math.floor(Math.random() * 10 - 5);
    }
    this.vx = this.direction * (6 - Math.abs(this.vy));
  }

  //values of these constants are true or false so if else.
  //console.log(player1.score);
  wallCollision(player1, player2) {
    const hitLeft = this.x - this.radius <= 0;
    const hitRight = this.x + this.radius >= this.boardWidth;
    const hitTop = this.y - this.radius <= 0;
    const hitBottom = this.y + this.radius >= this.boardHeight;

    if (hitLeft) {
      this.goal(player2)
      this.vx = -this.vx
      this.player2.height += 8;
      this.player1.height -= 8;
      //  this.paddleHeight1 = this.paddleHeight1 -5; would be the same as above

    } else if (hitRight) {
      this.goal(player1)
      // console.log(player1.score, player2.score)
      this.player1.height += 8;
      this.player2.height -= 8;

    } else if (hitTop || hitBottom) {
      this.vy = -this.vy;
    }
  }
  paddleCollision(player1, player2) {
    if (this.vx > 0) {

      //detecting player 2 paddle collision
      let paddle = player2.coordinates(player2.x, player2.y, player2.width, player2.height)
      let [leftX, rightX, topY, bottomY] = paddle;

      //destructure this to es2015 ++ ^
      // let leftX = paddle0[0];
      // let rightX = paddle[1];
      // let topY = paddle[2];
      // let bottomY = paddle[3];

      if (
        //right edge of the ball >= left edge of the paddle
        //and the ball y is >= paddle top y
        // and ball y is <= paddle bottom y 
        this.x + this.radius >= leftX &&
        this.y >= topY &&
        this.y <= bottomY
      ) {
        this.vx = -this.vx
        this.ping.play();
      }

    } else {
      //detecting player1 paddle collision
      let paddle = player1.coordinates(player1.x, player1.y, player1.width, player1.height)
      let [leftX, rightX, topY, bottomY] = paddle;

      if (
        //left edge of ball x-r <= right edge of paddle 
        this.x - this.radius <= rightX &&
        this.y >= topY &&
        this.y <= bottomY
      ) {
        this.vx = -this.vx
        this.ping.play();
      }
    }
  }

  goal(player) {
    //increment winning player score
    player.score++;
    this.reset();

  }

  render(svg, player1, player2) {

    this.x += this.vx;
    this.y += this.vy; //refigure these two lines

    this.wallCollision(player1, player2);
    this.paddleCollision(player1, player2);

    //detect score
    //if the right wall touched increment p1 score and give advantage (flip direction)
    //else if left wall touched, increment p2 score and give advantage
    //can refactor this in the wall collision

    let circle = document.createElementNS(SVG_NS, 'circle');
    circle.setAttributeNS(null, 'r', 8);
    circle.setAttributeNS(null, 'cx', this.x);
    circle.setAttributeNS(null, 'cy', this.y);
    circle.setAttributeNS(null, 'fill', '#ff6f00');
    svg.appendChild(circle);

    // let circle2 = document.createElementNS(SVG_NS, 'circle');
    // circle2.setAttributeNS(null, 'r', 8);
    // circle2.setAttributeNS(null, 'cx', this.x);
    // circle.setAttributeNS(null, 'cy', this.y);
    // circle2.setAttributeNS(null, 'fill', 'yellow');

     svg.appendChild(circle);
    
  }
}