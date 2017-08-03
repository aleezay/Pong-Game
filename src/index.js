import './styles/game.css'; //webpack is whats allowing us to import css into javascript
import Game from './partials/Game'

// create a game instance
const game = new Game('game', 512, 256); //'game' refers to id

(function gameLoop() { //iffy - immediately invoked function expression; invokes w/o calling it by name.
    game.render(); //calling the render method on our game object - responsible for drawing the game over and over again
    requestAnimationFrame(gameLoop); //gameLoop function is recursively calling itself. with each iteration of the animation recalling it. like a timer but stops when tabs are switched.
})();