// { "framework": "Weex" }
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

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)

	__weex_define__('@weex-component/8e2a728ca214c2831ef401b9169488f7', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/8e2a728ca214c2831ef401b9169488f7',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "text",
	      "style": {
	        "fontSize": 100
	      },
	      "events": {
	        "click": "onClick"
	      },
	      "attr": {
	        "value": "Hello World."
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "menu-wrapper"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "menu-left"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "menu left"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "menu-right"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "menu right"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "menu-wrapper": {
	    "flexDirection": "row"
	  },
	  "menu-left": {
	    "width": 140,
	    "backgroundColor": "#f8f8f8"
	  },
	  "menu-right": {
	    "backgroundColor": "#5838f3"
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var navigator = weex.requireModule('navigator');
	module.exports = {
	  data: function () {return {
	    bundleUrl: ''
	  }},
	  methods: {

	    onClick: function onClick(e) {

	      this.bundleUrl = this.$getConfig().a;

	      this.$call('modal', 'toast', {
	        'message': 'parmas is ' + this.bundleUrl,
	        'duration': 2.0
	      });
	    }

	  }

	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);