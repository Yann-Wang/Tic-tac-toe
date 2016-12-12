/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _compression = __webpack_require__(3);

	var _compression2 = _interopRequireDefault(_compression);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(5);

	var _reactRouter = __webpack_require__(6);

	var _routes = __webpack_require__(7);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)();

	app.use((0, _compression2.default)());

	// serve our static stuff like index.css
	app.use(_express2.default.static(_path2.default.join(__dirname, 'public'), { index: false }));

	// send all requests to index.html so browserHistory works
	app.get('*', function (req, res) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
	    if (err) {
	      res.status(500).send(err.message);
	    } else if (redirect) {
	      res.redirect(redirect.pathname + redirect.search);
	    } else if (props) {
	      // hey we made it!
	      var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
	      res.send(renderPage(appHtml));
	    } else {
	      res.status(404).send('Not Found');
	    }
	  });
	});

	function renderPage(appHtml) {
	  return '\n    <!doctype html public="storage">\n    <html>\n    <meta charset=utf-8/>\n    <title>My First React Router App</title>\n    <link rel=stylesheet href=/index.css>\n    <div id=app>' + appHtml + '</div>\n    <script src="/bundle.js"></script>\n   ';
	}

	var PORT = process.env.PORT || 8080;
	app.listen(PORT, function () {
	  console.log('Production Express server running at localhost:' + PORT);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	var _App = __webpack_require__(8);

	var _App2 = _interopRequireDefault(_App);

	var _Home = __webpack_require__(10);

	var _Home2 = _interopRequireDefault(_Home);

	var _Tic_tac_toe = __webpack_require__(11);

	var _Tic_tac_toe2 = _interopRequireDefault(_Tic_tac_toe);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: _App2.default },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/game', component: _Tic_tac_toe2.default })
	);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _NavLink = __webpack_require__(9);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	    displayName: 'App',
	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	                'h1',
	                null,
	                'Tic-tac-toe'
	            ),
	            _react2.default.createElement(
	                'ul',
	                { role: 'nav' },
	                _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                        _NavLink2.default,
	                        { to: '/', onlyActiveOnIndex: true },
	                        'Home'
	                    )
	                ),
	                _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                        _NavLink2.default,
	                        { to: '/game' },
	                        'Tic_tac_toe'
	                    )
	                )
	            ),
	            this.props.children
	        );
	    }
	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'NavLink',
	  render: function render() {
	    return _react2.default.createElement(_reactRouter.Link, _extends({}, this.props, { activeClassName: 'active' }));
	  }
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'Home',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      'Home'
	    );
	  }
	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Errors = __webpack_require__(12);

	var _Errors2 = _interopRequireDefault(_Errors);

	var _Game = __webpack_require__(13);

	var _Game2 = _interopRequireDefault(_Game);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by a_wav on 2016/12/9.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Tic_tac_toe = function (_React$Component) {
	    _inherits(Tic_tac_toe, _React$Component);

	    function Tic_tac_toe() {
	        _classCallCheck(this, Tic_tac_toe);

	        return _possibleConstructorReturn(this, (Tic_tac_toe.__proto__ || Object.getPrototypeOf(Tic_tac_toe)).apply(this, arguments));
	    }

	    _createClass(Tic_tac_toe, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'tic-tac-toe-profile' },
	                    'Tic-tac-toe (also known as noughts and crosses or Xs and Os) is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3\xD73 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.'
	                ),
	                _react2.default.createElement(_Errors2.default, null),
	                _react2.default.createElement(_Game2.default, null)
	            );
	        }
	    }]);

	    return Tic_tac_toe;
	}(_react2.default.Component);

	exports.default = Tic_tac_toe;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by a_wav on 2016/12/9.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var divStyle = {
	    background: '#c00',
	    color: '#fff',
	    display: 'none',
	    margin: '-20px -20px 20px',
	    padding: '20px',
	    whiteSpace: 'pre-wrap'
	};

	var Errors = function (_React$Component) {
	    _inherits(Errors, _React$Component);

	    function Errors(props) {
	        _classCallCheck(this, Errors);

	        var _this = _possibleConstructorReturn(this, (Errors.__proto__ || Object.getPrototypeOf(Errors)).call(this, props));

	        _this.errors = null;
	        return _this;
	    }

	    _createClass(Errors, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement('div', { style: divStyle, ref: function ref(errors) {
	                    return _this2.errors = errors;
	                } });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var errors = this.errors;

	            window.onerror = function (message, source, line, col, error) {
	                var text = error ? error.stack || error : message + ' (at ' + source + ':' + line + ':' + col + ')';
	                errors.textContent += text + '\n';
	                errors.style.display = 'block';
	            };
	            console.error = function (old) {
	                return function error() {
	                    errors.textContent += Array.prototype.slice.call(arguments).join(' ') + '\n';
	                    errors.style.display = '';
	                    old.apply(this, arguments);
	                };
	            }(console.error);
	        }
	    }]);

	    return Errors;
	}(_react2.default.Component);

	exports.default = Errors;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Board = __webpack_require__(14);

	var _Board2 = _interopRequireDefault(_Board);

	var _MoveList = __webpack_require__(16);

	var _MoveList2 = _interopRequireDefault(_MoveList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by a_wav on 2016/12/9.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Game = function (_React$Component) {
	    _inherits(Game, _React$Component);

	    function Game() {
	        _classCallCheck(this, Game);

	        var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this));

	        _this.jumpTo = _this.jumpTo.bind(_this);
	        _this.state = {
	            history: [{
	                squares: new Array(9).fill(null),
	                active: null
	            }],
	            xIsNext: true,
	            stepNumber: 0,
	            ascending: true
	        };
	        return _this;
	    }

	    _createClass(Game, [{
	        key: 'handleClick',
	        value: function handleClick(i, e) {
	            var history = this.state.history;
	            var stepNumber = this.state.stepNumber;
	            var current = void 0,
	                squares = void 0;

	            current = history[stepNumber];
	            squares = current.squares.slice();

	            if (calculateWinner(squares) || squares[i]) {
	                return;
	            }
	            squares[i] = this.state.xIsNext ? 'X' : 'O';

	            if (this.state.ascending) {

	                if (stepNumber != history.length - 1) {
	                    history = history.slice(0, stepNumber + 1);
	                }

	                stepNumber = history.length;

	                history = history.concat([{
	                    squares: squares,
	                    active: {
	                        x: parseInt(i / 3 + 1),
	                        y: parseInt(i % 3 + 1)
	                    }
	                }]);
	            } else {

	                var start = history.slice(0, 1);
	                history = history.slice(stepNumber);

	                stepNumber = 1;

	                history.unshift({
	                    squares: squares,
	                    active: {
	                        x: parseInt(i / 3 + 1),
	                        y: parseInt(i % 3 + 1)
	                    }
	                });

	                history.unshift(start);
	            }

	            this.setState({
	                stepNumber: stepNumber,
	                history: history,
	                xIsNext: !this.state.xIsNext
	            });
	        }
	    }, {
	        key: 'jumpTo',
	        value: function jumpTo(step, e) {
	            if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
	                e.preventDefault();
	            }

	            this.setState({
	                stepNumber: step,
	                xIsNext: step % 2 ? false : true
	            });
	        }
	    }, {
	        key: 'toggle',
	        value: function toggle() {
	            var moves = this.state.history.slice();
	            var len = moves.length;

	            for (var i = 1, j = len - 1, tmp; i < len; ++i, --j) {
	                if (i >= j) {
	                    break;
	                }
	                tmp = moves[i];
	                moves[i] = moves[j];
	                moves[j] = tmp;
	            }

	            this.setState({
	                history: moves,
	                stepNumber: this.state.history.length - 1 - this.state.stepNumber + 1,
	                ascending: !this.state.ascending
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var history = this.state.history;
	            var current = history[this.state.stepNumber];
	            var winner = calculateWinner(current.squares);

	            var status = void 0;
	            if (winner) {
	                status = 'Winner: ' + winner.winner;
	            } else {
	                status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
	            }

	            return _react2.default.createElement(
	                'div',
	                { className: 'game' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'game-board' },
	                    _react2.default.createElement(_Board2.default, {
	                        squares: current.squares,
	                        onClick: function onClick(i, e) {
	                            return _this2.handleClick(i, e);
	                        },
	                        winner: winner
	                    })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'game-info' },
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        status
	                    ),
	                    _react2.default.createElement(
	                        'button',
	                        { onClick: function onClick() {
	                                return _this2.toggle();
	                            } },
	                        'toggle'
	                    ),
	                    _react2.default.createElement(_MoveList2.default, { history: history, jumpTo: this.jumpTo, stepNumber: this.state.stepNumber, ascending: this.state.ascending })
	                )
	            );
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {

	            window.addEventListener('mousedown', function (e) {
	                document.body.classList.add('mouse-navigation');
	                document.body.classList.remove('kbd-navigation');
	            });

	            window.addEventListener('keydown', function (e) {
	                if (e.keyCode === 9) {
	                    // tab
	                    document.body.classList.add('kbd-navigation');
	                    document.body.classList.remove('mouse-navigation');
	                }
	            });

	            /*window.addEventListener('click', function(e) {
	             if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
	             e.preventDefault();
	             }
	             });*/
	        }
	    }]);

	    return Game;
	}(_react2.default.Component);

	function calculateWinner(squares) {
	    var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
	    for (var i = 0; i < lines.length; i++) {
	        var _lines$i = _slicedToArray(lines[i], 3),
	            a = _lines$i[0],
	            b = _lines$i[1],
	            c = _lines$i[2];

	        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
	            return {
	                lines: lines[i],
	                winner: squares[a]
	            };
	        }
	    }
	    return null;
	}

	exports.default = Game;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Square = __webpack_require__(15);

	var _Square2 = _interopRequireDefault(_Square);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by a_wav on 2016/12/12.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Board = function (_React$Component) {
	    _inherits(Board, _React$Component);

	    function Board(props) {
	        _classCallCheck(this, Board);

	        return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this, props));
	    }

	    _createClass(Board, [{
	        key: 'renderSquare',
	        value: function renderSquare(i, c) {
	            var _this2 = this;

	            return _react2.default.createElement(_Square2.default, { key: c, value: this.props.squares[i], onClick: function onClick(e) {
	                    return _this2.props.onClick(i, e);
	                } });
	        }
	    }, {
	        key: 'renderBoard',
	        value: function renderBoard() {
	            var _this3 = this;

	            var i = void 0,
	                j = void 0,
	                row = void 0,
	                board = [];

	            for (i = 0; i < 3; ++i) {
	                row = [];

	                for (j = 0; j < 3; ++j) {
	                    row[j] = this.renderSquare(i * 3 + j, j);
	                }

	                board[i] = _react2.default.createElement(
	                    'div',
	                    { className: 'board-row', key: i },
	                    row
	                );
	            }

	            return _react2.default.createElement(
	                'div',
	                { ref: function ref(brd) {
	                        return _this3.brd = brd;
	                    } },
	                board
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return this.renderBoard();
	        }
	    }, {
	        key: 'calcCoordinate',
	        value: function calcCoordinate(i) {
	            return {
	                x: parseInt(i / 3),
	                y: parseInt(i % 3)
	            };
	        }
	    }, {
	        key: 'boardWinnerFocus',
	        value: function boardWinnerFocus(arr) {
	            var children = this.brd.children;
	            var len = children.length;
	            var row = void 0,
	                column = void 0,
	                coor = void 0;

	            if (arr) {
	                arr = arr.lines;

	                for (var i = 0; i < arr.length; ++i) {
	                    coor = this.calcCoordinate(arr[i]);
	                    row = children[coor.x];
	                    column = row.children[coor.y];
	                    column.classList.add('board-winner-focus');
	                }
	            } else {
	                for (var _i = 0; _i < len; ++_i) {
	                    row = children[_i];
	                    column = row.children;

	                    for (var j = 0; j < column.length; ++j) {
	                        column[j].classList.remove('board-winner-focus');
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this.boardWinnerFocus(this.props.winner);
	        }
	    }]);

	    return Board;
	}(_react2.default.Component);

	exports.default = Board;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by a_wav on 2016/12/12.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Square = function (_React$Component) {
	    _inherits(Square, _React$Component);

	    function Square(props) {
	        _classCallCheck(this, Square);

	        return _possibleConstructorReturn(this, (Square.__proto__ || Object.getPrototypeOf(Square)).call(this, props));
	    }

	    _createClass(Square, [{
	        key: "render",
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                "button",
	                { className: "square", onClick: function onClick() {
	                        return _this2.props.onClick();
	                    } },
	                this.props.value
	            );
	        }
	    }]);

	    return Square;
	}(_react2.default.Component);

	exports.default = Square;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by a_wav on 2016/12/11.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var MoveList = function (_React$Component) {
	    _inherits(MoveList, _React$Component);

	    function MoveList(props) {
	        _classCallCheck(this, MoveList);

	        return _possibleConstructorReturn(this, (MoveList.__proto__ || Object.getPrototypeOf(MoveList)).call(this, props));
	    }

	    _createClass(MoveList, [{
	        key: "render",
	        value: function render() {
	            var _this2 = this;

	            var moves = this.props.history.map(function (step, move) {
	                var coordinate = step.active ? "(" + step.active.x + "," + step.active.y + ")" : move;
	                var desc = move ? 'Move #' + coordinate : 'Game start';
	                return _react2.default.createElement(
	                    "li",
	                    { key: move },
	                    _react2.default.createElement(
	                        "a",
	                        { href: "#", onClick: function onClick(e) {
	                                return _this2.props.jumpTo(move, e);
	                            } },
	                        desc
	                    )
	                );
	            });

	            return _react2.default.createElement(
	                "ol",
	                { ref: function ref(ol) {
	                        return _this2.ol = ol;
	                    } },
	                moves
	            );
	        }
	    }, {
	        key: "setFocus",
	        value: function setFocus(n) {
	            var children = this.ol.children;
	            var len = children.length;

	            for (var i = 0; i < len; ++i) {
	                children[i].classList.remove('movelist-focus');
	            }

	            children[n].classList.add('movelist-focus');
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.setFocus(this.props.stepNumber);
	        }
	    }, {
	        key: "componentDidUpdate",
	        value: function componentDidUpdate() {
	            this.setFocus(this.props.stepNumber);
	        }
	    }]);

	    return MoveList;
	}(_react2.default.Component);

	exports.default = MoveList;

/***/ }
/******/ ]);