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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/cenary/background.png":
/*!**************************************!*\
  !*** ./assets/cenary/background.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./assets/cenary/hills.png":
/*!*********************************!*\
  !*** ./assets/cenary/hills.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./assets/cenary/platform.png":
/*!************************************!*\
  !*** ./assets/cenary/platform.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./assets/character/_Idle.png":
/*!************************************!*\
  !*** ./assets/character/_Idle.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1df7f4ac40bad3533ccdffdb66fac6f8.png");

/***/ }),

/***/ "./assets/character/_Jump.png":
/*!************************************!*\
  !*** ./assets/character/_Jump.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "55202c010b8df659502fdcfb4d285335.png");

/***/ }),

/***/ "./assets/character/_Run.png":
/*!***********************************!*\
  !*** ./assets/character/_Run.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c06f8fd775e4d0812d94c7cee8686330.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_cenary_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/cenary/platform.png */ "./assets/cenary/platform.png");
/* harmony import */ var _assets_cenary_hills_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/cenary/hills.png */ "./assets/cenary/hills.png");
/* harmony import */ var _assets_cenary_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/cenary/background.png */ "./assets/cenary/background.png");
/* harmony import */ var _assets_character_Idle_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/character/_Idle.png */ "./assets/character/_Idle.png");
/* harmony import */ var _assets_character_Jump_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/character/_Jump.png */ "./assets/character/_Jump.png");
/* harmony import */ var _assets_character_Run_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/character/_Run.png */ "./assets/character/_Run.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }







var canvas = document.querySelector("canvas");
var canvas2d = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var gravity = 0.5;
var velocityY = 10;
var velocityX = 10;
var velocityBackgroundX = velocityX * 0.666;
var platformImage = createImage(_assets_cenary_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var keys = {
  ArrowUp: {
    pressed: false,
    disableJump: false
  },
  ArrowRight: {
    pressed: false
  },
  ArrowLeft: {
    pressed: false
  }
};
var player;
var platforms;
var backgroundObjects;
var scrollOffset = 0;

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      dx: 0,
      dy: 0
    };
    this.width = 100;
    this.height = 200;
    this.image = createImage(_assets_character_Idle_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
    this.frame = 0;
    this.sprites = {
      stand: {
        right: createImage(_assets_character_Idle_png__WEBPACK_IMPORTED_MODULE_3__["default"])
      },
      run: {
        right: createImage(_assets_character_Run_png__WEBPACK_IMPORTED_MODULE_5__["default"])
      },
      jump: createImage(_assets_character_Jump_png__WEBPACK_IMPORTED_MODULE_4__["default"])
    };
    this.currentSprite = this.sprites.stand.right;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      canvas2d.drawImage(this.currentSprite, 120 * this.frame, 0, 120, 80, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frame++;

      if (this.frame > 10) {
        this.frame = 0;
      }

      this.draw();
      this.position.y += this.velocity.dy;
      this.position.x += this.velocity.dx;

      if (this.position.y + this.height + this.velocity.dy <= canvas.height) {
        this.velocity.dy += gravity;
      } // else {
      //     this.velocity.dy = 0
      //     keys.ArrowUp.disableJump = false
      // }

    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      canvas2d.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var BackgroundObjects = /*#__PURE__*/function () {
  function BackgroundObjects(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, BackgroundObjects);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(BackgroundObjects, [{
    key: "draw",
    value: function draw() {
      canvas2d.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return BackgroundObjects;
}();

function createImage(imageSource) {
  var image = new Image();
  image.src = imageSource;
  return image;
}

function platformOffset(index) {
  switch (index) {
    case 0:
      return -1;

    default:
      return Math.floor(Math.random() * 200) + 100;
  }
}

function init() {
  player = new Player();
  platforms = [];
  var totalOffset = 0;

  for (var index = 0; index < 1; index++) {
    var offset = platformOffset(index);
    platforms.push(new Platform({
      x: platformImage.width * index + (offset + totalOffset),
      y: 470,
      image: platformImage
    }));
    totalOffset += offset;
  }

  backgroundObjects = [new BackgroundObjects({
    x: -1,
    y: -1,
    image: createImage(_assets_cenary_background_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new BackgroundObjects({
    x: -1,
    y: -1,
    image: createImage(_assets_cenary_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  })];
  scrollOffset = 0;
}

function animate() {
  requestAnimationFrame(animate);
  canvas2d.fillStyle = 'white';
  canvas2d.fillRect(0, 0, canvas.width, canvas.height);
  backgroundObjects.forEach(function (backgroundObjects) {
    backgroundObjects.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });

  if (keys.ArrowUp.pressed && !keys.ArrowUp.disableJump) {
    player.velocity.dy = -velocityY;
    keys.ArrowUp.disableJump = true;
  }

  if (keys.ArrowRight.pressed && player.position.x < canvas.width / 2) {
    player.velocity.dx = velocityX;
  } else if (keys.ArrowLeft.pressed && player.position.x > 100 || keys.ArrowLeft.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.dx = -velocityX;
  } else {
    player.velocity.dx = 0;

    if (keys.ArrowRight.pressed) {
      platforms.forEach(function (platform) {
        platform.position.x -= velocityX;
        scrollOffset -= velocityX;
      });
      backgroundObjects.forEach(function (backgorundObject) {
        backgorundObject.position.x -= velocityBackgroundX;
      });
    }

    if (keys.ArrowLeft.pressed && scrollOffset > 0) {
      platforms.forEach(function (platform) {
        platform.position.x += velocityX;
        scrollOffset += velocityX;
      });
      backgroundObjects.forEach(function (backgorundObject) {
        backgorundObject.position.x += velocityBackgroundX;
      });
    } // console.log(scrollOffset)

  }

  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.dy >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.dy = 0;
      keys.ArrowUp.disableJump = false;

      if (keys.ArrowRight.pressed) {
        player.currentSprite = player.sprites.run.right;
      }
    }
  });
  player.update();

  if (player.position.y > canvas.height) {
    init();
  }
}

init();
animate();
window.addEventListener('keydown', function (event) {
  var key = event.key; // console.log(key)

  if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(key) > -1) {
    event.preventDefault();
  }

  switch (key) {
    case 'w':
    case 'ArrowUp':
    case 'Space':
      player.currentSprite = player.sprites.jump;
      keys.ArrowUp.pressed = true;
      break;

    case 'a':
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = true;
      break;

    case 's':
    case 'ArrowDown':
      break;

    case 'd':
    case 'ArrowRight':
      keys.ArrowRight.pressed = true;
      player.currentSprite = player.sprites.run.right;
      break;
  }
});
window.addEventListener('keyup', function (event) {
  var key = event.key; // console.log(key)

  if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(key) > -1) {
    event.preventDefault();
  }

  switch (key) {
    case 'w':
    case 'ArrowUp':
    case 'Space':
      keys.ArrowUp.pressed = false;
      break;

    case 'a':
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false;
      break;

    case 's':
    case 'ArrowDown':
      break;

    case 'd':
    case 'ArrowRight':
      keys.ArrowRight.pressed = false;
      player.currentSprite = player.sprites.stand.right;
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map