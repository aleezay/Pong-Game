/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SVG_NS = exports.SVG_NS = 'http://www.w3.org/2000/svg';

var KEYS = exports.KEYS = {
  a: 'a', //player 1
  z: 'z',
  up: 'ArrowUp', // player 2
  down: 'ArrowDown',
  spaceBar: ' ',
  r: 'r'
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.eot";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //always have imports at the top

var _settings = __webpack_require__(0);

var _Board = __webpack_require__(6);

var _Board2 = _interopRequireDefault(_Board);

var _Paddle = __webpack_require__(7);

var _Paddle2 = _interopRequireDefault(_Paddle);

var _Ball = __webpack_require__(5);

var _Ball2 = _interopRequireDefault(_Ball);

var _Score = __webpack_require__(8);

var _Score2 = _interopRequireDefault(_Score);

var _Winner = __webpack_require__(9);

var _Winner2 = _interopRequireDefault(_Winner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
	function Game(element, width, height) {
		var _this = this;

		_classCallCheck(this, Game);

		this.width = width;
		this.height = height;
		this.gameElement = document.getElementById(element); //dont have to call it by 'game' because this make is a bit more flexible 

		//export these 3 as const in settings. then import
		this.paddleWidth = 8;
		this.paddleHeight = 56;
		this.boardGap = 10;

		this.board = new _Board2.default(this.width, this.height);

		this.player1 = new _Paddle2.default(this.height, this.paddleWidth, this.paddleHeight, this.boardGap, (this.height - this.paddleHeight) / 2, _settings.KEYS.a, _settings.KEYS.z);

		this.player2 = new _Paddle2.default(this.height, this.paddleWidth, this.paddleHeight, this.width - this.boardGap - this.paddleWidth, (this.height - this.paddleHeight) / 2, _settings.KEYS.up, _settings.KEYS.down);

		this.ball = new _Ball2.default(8, this.width, this.height, this.player1, this.player2); // change 8 to this.ballSize pass in this.player 1&2
		// this.circle2 = new Ball (2, this.width, this.height, this.player1, this.player2);

		this.score1 = new _Score2.default(this.width / 2 - 80, 40, 30);
		this.score2 = new _Score2.default(this.width / 2 + 60, 40, 30);

		this.declareWinner = new _Winner2.default(this.width, this.height, this.score); //this.size?

		document.addEventListener('keydown', function (event) {
			switch (event.key) {
				case _settings.KEYS.spaceBar:
					_this.pause = !_this.pause;
					break;

				// case KEYS.r:
				// 	this.reset();
			}
		});
	}

	_createClass(Game, [{
		key: 'declareWinner',
		value: function declareWinner(svg, player) {
			this.declareWinner.render(svg);
			this.pause = true;
		}

		// circle2(svg) {
		// if(this.player1.score > 2 || this.player2.score > 2) {
		// 	this.circle2.render(svg, this.player1, this.player2);
		// }


	}, {
		key: 'render',
		value: function render() {
			//do it this way so we can animate it.

			if (this.pause) {
				return;
			}

			this.gameElement.innerHTML = '';

			var svg = document.createElementNS(_settings.SVG_NS, 'svg'); //find out why NS - storing reference to svg
			svg.setAttributeNS(null, 'version', '1.1');
			svg.setAttributeNS(null, 'width', this.width); //using this so we can instantiate a larger or smaller game.
			svg.setAttributeNS(null, 'height', this.height);
			svg.setAttributeNS(null, 'viewBox', '0,0 ' + this.width + ' ' + this.height);
			this.gameElement.appendChild(svg);
			this.board.render(svg); //appending board. has to be called svg bc thats what we called our variable with let.
			this.player1.render(svg);
			this.player2.render(svg);
			this.ball.render(svg, this.player1, this.player2);
			// this.circle2.render(svg, this.player1, this.player2);
			this.score1.render(svg, this.player1.score);
			this.score2.render(svg, this.player2.score);
			this.declareWinner.render(svg, this.width, this.height);

			if (this.player1.height === 0) {
				this.declareWinner(svg, 'Player 2 wins');
			} else if (this.player2.height === 0) {
				this.declareWinner(svg, 'Player 1 wins');
			}
		}
	}]);

	return Game;
}();

exports.default = Game;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(15)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./game.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./game.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

var _Game = __webpack_require__(2);

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create a game instance
var game = new _Game2.default('game', 512, 256); //'game' refers to id

//webpack is whats allowing us to import css into javascript
(function gameLoop() {
    //iffy - immediately invoked function expression; invokes w/o calling it by name.
    game.render(); //calling the render method on our game object - responsible for drawing the game over and over again
    requestAnimationFrame(gameLoop); //gameLoop function is recursively calling itself. with each iteration of the animation recalling it. like a timer but stops when tabs are switched.
})();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ball = function () {
  function Ball(radius, boardWidth, boardHeight, player1, player2) {
    _classCallCheck(this, Ball);

    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    this.player1 = player1;
    this.player2 = player2;
    this.ping = new Audio('public/sounds/pong-01.wav');
    this.reset();
  }

  _createClass(Ball, [{
    key: 'reset',
    value: function reset() {
      this.x = this.boardWidth / 2;
      this.y = this.boardHeight / 2;
      this.vy = 0;

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

  }, {
    key: 'wallCollision',
    value: function wallCollision(player1, player2) {
      var hitLeft = this.x - this.radius <= 0;
      var hitRight = this.x + this.radius >= this.boardWidth;
      var hitTop = this.y - this.radius <= 0;
      var hitBottom = this.y + this.radius >= this.boardHeight;

      if (hitLeft) {
        this.goal(player2);
        this.vx = -this.vx;
        this.player2.height += 8;
        this.player1.height -= 8;
        //  this.paddleHeight1 = this.paddleHeight1 -5; would be the same as above
      } else if (hitRight) {
        this.goal(player1);
        // console.log(player1.score, player2.score)
        this.player1.height += 8;
        this.player2.height -= 8;
      } else if (hitTop || hitBottom) {
        this.vy = -this.vy;
      }
    }
  }, {
    key: 'paddleCollision',
    value: function paddleCollision(player1, player2) {
      if (this.vx > 0) {

        //detecting player 2 paddle collision
        var paddle = player2.coordinates(player2.x, player2.y, player2.width, player2.height);

        var _paddle = _slicedToArray(paddle, 4),
            leftX = _paddle[0],
            rightX = _paddle[1],
            topY = _paddle[2],
            bottomY = _paddle[3];

        //destructure this to es2015 ++ ^
        // let leftX = paddle0[0];
        // let rightX = paddle[1];
        // let topY = paddle[2];
        // let bottomY = paddle[3];

        if (
        //right edge of the ball >= left edge of the paddle
        //and the ball y is >= paddle top y
        // and ball y is <= paddle bottom y 
        this.x + this.radius >= leftX && this.y >= topY && this.y <= bottomY) {
          this.vx = -this.vx;
          this.ping.play();
        }
      } else {
        //detecting player1 paddle collision
        var _paddle2 = player1.coordinates(player1.x, player1.y, player1.width, player1.height);

        var _paddle3 = _slicedToArray(_paddle2, 4),
            _leftX = _paddle3[0],
            _rightX = _paddle3[1],
            _topY = _paddle3[2],
            _bottomY = _paddle3[3];

        if (
        //left edge of ball x-r <= right edge of paddle 
        this.x - this.radius <= _rightX && this.y >= _topY && this.y <= _bottomY) {
          this.vx = -this.vx;
          this.ping.play();
        }
      }
    }
  }, {
    key: 'goal',
    value: function goal(player) {
      //increment winning player score
      player.score++;
      this.reset();
    }
  }, {
    key: 'render',
    value: function render(svg, player1, player2) {

      this.x += this.vx;
      this.y += this.vy; //refigure these two lines

      this.wallCollision(player1, player2);
      this.paddleCollision(player1, player2);

      //detect score
      //if the right wall touched increment p1 score and give advantage (flip direction)
      //else if left wall touched, increment p2 score and give advantage
      //can refactor this in the wall collision

      var circle = document.createElementNS(_settings.SVG_NS, 'circle');
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
  }]);

  return Ball;
}();

exports.default = Ball;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = function () {
  function Board(width, height) {
    _classCallCheck(this, Board);

    this.width = width;
    this.height = height;
  }

  _createClass(Board, [{
    key: 'render',
    value: function render(svg) {
      //parameter. can be any reference stand in inside of our function to what will eventually be a dom node. atm it has no idea - waiting for us to pass a reference into it. could call it anything

      var rect = document.createElementNS(_settings.SVG_NS, 'rect');
      rect.setAttributeNS(null, 'width', this.width);
      rect.setAttributeNS(null, 'height', this.height);
      rect.setAttributeNS(null, 'fill', '#f8f8f8');
      rect.setAttributeNS(null, 'stroke', '#e8e8e8');
      rect.setAttributeNS(null, 'stroke-width', '10');
      svg.appendChild(rect);

      var line = document.createElementNS(_settings.SVG_NS, 'line');
      line.setAttributeNS(null, 'x1', this.width / 2);
      line.setAttributeNS(null, 'y1', 0);
      line.setAttributeNS(null, 'x2', this.width / 2);
      line.setAttributeNS(null, 'y2', this.height - 5);
      line.setAttributeNS(null, 'stroke', 'hotpink');
      line.setAttributeNS(null, 'stroke-width', 3.5);
      line.setAttributeNS(null, 'stroke-dasharray', '15, 8');
      svg.appendChild(line);
    }
  }]);

  return Board;
}();

exports.default = Board;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Paddle = function () {
  function Paddle(boardHeight, width, height, x, y, up, down) {
    var _this = this;

    _classCallCheck(this, Paddle);

    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 12; //number of pixels it moves per up call or down call
    this.score = 0;

    document.addEventListener('keydown', function (event) {
      switch (event.key) {

        case up:
          _this.up();
          break;

        case down:
          _this.down();
          break;
      }
    });
  }

  _createClass(Paddle, [{
    key: 'coordinates',
    value: function coordinates(x, y, width, height) {
      var leftX = x;
      var rightX = x + width;
      var topY = y;
      var bottomY = y + height;
      return [leftX, rightX, topY, bottomY];
    }
  }, {
    key: 'up',
    value: function up() {
      //get the max number between the top of the board and the current y minus speed
      this.y = Math.max(this.y - this.speed, 0);
    }
  }, {
    key: 'down',
    value: function down() {
      //get the min number board height - paddle height and the current y plus speed  this.y = this.y + this.speed;
      this.y = Math.min(this.y + this.speed, this.boardHeight - this.height);
    }
  }, {
    key: 'render',
    value: function render(svg) {

      var rect = document.createElementNS(_settings.SVG_NS, 'rect');
      rect.setAttributeNS(null, 'width', this.width);
      rect.setAttributeNS(null, 'height', this.height);
      rect.setAttributeNS(null, 'x', this.x);
      rect.setAttributeNS(null, 'y', this.y);
      rect.setAttributeNS(null, 'speed', this.speed);
      rect.setAttributeNS(null, 'fill', '#40E0D0');
      rect.setAttributeNS(null, 'stroke', '#21ccbb');
      rect.setAttributeNS(null, 'stroke-width', '1');
      svg.appendChild(rect);
    }
  }]);

  return Paddle;
}();

//always start in the middle bc we want it to render with the board rather than an arbitrary pixel size


exports.default = Paddle;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Score = function () {
  function Score(x, y, size) {
    _classCallCheck(this, Score);

    this.x = x;
    this.y = y;
    this.size = size;
  }

  _createClass(Score, [{
    key: 'render',
    value: function render(svg, score) {
      var text = document.createElementNS(_settings.SVG_NS, 'text');
      text.setAttributeNS(null, 'x', this.x);
      text.setAttributeNS(null, 'y', this.y);
      text.setAttributeNS(null, 'fill', 'yellowgreen');
      text.setAttributeNS(null, 'font-size', '30');
      text.setAttributeNS(null, 'font-family', 'Silkscreen web');
      text.textContent = score;
      svg.appendChild(text);
    }
  }]);

  return Score;
}();

exports.default = Score;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Winner = function () {
  function Winner(width, height, score) {
    _classCallCheck(this, Winner);

    this.width = width;
    this.height = height;
    this.score = score;
  }

  _createClass(Winner, [{
    key: 'render',
    value: function render(svg, winner) {

      var textWinner = document.createElementNS(_settings.SVG_NS, 'text');
      textWinner.setAttributeNS(null, 'x', this.x);
      textWinner.setAttributeNS(null, 'y', this.y);
      textWinner.setAttributeNS(null, 'fill', 'plum');
      textWinner.setAttributeNS(null, 'font-size', '30');
      textWinner.setAttributeNS(null, 'font-family', 'Silkscreen web');
      textWinner.textContent = winner;
      svg.appendChild(textWinner);
    }
  }]);

  return Winner;
}();

exports.default = Winner;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n\n/* HTML5 display-role reset for older browsers */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\n\n/**\n * FONTS\n */\n\n@font-face {\n    font-family: 'Silkscreen Web';\n    src: url(" + __webpack_require__(1) + ");\n    src: url(" + __webpack_require__(1) + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__(14) + ") format('woff'), url(" + __webpack_require__(13) + ") format('truetype'), url(" + __webpack_require__(12) + "#silkscreennormal) format('svg');\n    font-weight: normal;\n    font-style: normal;\n}\n\n\n/**\n * GAME\n */\n\nhtml {\n    font-size: 16px;\n}\n\nbody {\n    align-items: center;\n    display: flex;\n    font-family: 'Silkscreen Web', monotype;\n    height: 100vh;\n    justify-content: center;\n    width: 100%;\n}\n\nh1 {\n    font-size: 2.5rem;\n    margin-bottom: 1.4rem;\n    text-align: center;\n    color: purple;\n}\n\n.players {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    color: #c18cd8;\n    padding: 1.2rem;\n}", ""]);

// exports


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.svg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.ttf";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.woff";

/***/ }),
/* 15 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ })
/******/ ]);