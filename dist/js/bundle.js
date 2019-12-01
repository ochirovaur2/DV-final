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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let elements = {\r\n\tDOM:{\r\n\t\tlistOfCountries: document.querySelector('.listOfCountries'),\r\n\t\tsum: document.querySelector('.sum'),\r\n\t\tlist: document.querySelector('.list'),\r\n\t\tbutton: '#main-btn',\r\n\t\toutput: document.querySelector(\".output\"),\r\n\t\ttext: document.querySelector(\"#text\")\r\n\t},\r\n\tcalc: {\r\n\t\tsum: 0,\r\n\t\tsum0fMonth: 0\r\n\t},\r\n\tother:{\r\n\t\tspace: \" \",\r\n\t\tmonths: ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],\r\n\t\tyears: ['2017', '2018', '2019', '2020', '2021', '2022']\r\n\t}\r\n}\r\n\r\n\r\ndocument.querySelector(`${elements.DOM.button}`).onclick = function() {\r\n\tlet infoToCalc, arrOfinfoToCalc;\r\n\r\n\tif(infoToCalc = elements.DOM.text.value){\r\n\r\n\t\t// Making array from recieved data \r\n\t\tarrOfinfoToCalc = splitString(infoToCalc, elements.other.space);\r\n\r\n\t\tview.renderLiOfCountries(arrOfinfoToCalc);\r\n\t\t\r\n\t\tview.renderLiPerMonth(infoToCalc);\r\n\r\n\t\tview.clearInput();\r\n\t\t\r\n\t\tview.renderTotal();\r\n\r\n\t\tsum0fMonth = 0;\r\n\r\n\t} else {\r\n\t\talert('Please enter data')\r\n\t}\r\n\t\r\n\t\r\n}\r\n\r\n\r\nfunction splitString(stringToSplit, separator) {\r\n\tlet arrayOfStrings = stringToSplit.split(separator);\r\n\treturn arrayOfStrings;\r\n}\r\n\r\n\r\nconst view = {\r\n\trenderLiPerMonth: (infoToCalc) => {\r\n\t\tlet li;\r\n\r\n\t\telements.other.months.forEach((el)=> {\r\n\t\t\t\t\r\n\t\t\tif(infoToCalc.includes(el) ){\r\n\t\t\t\tlet arr, index, year, FY, FYyear;\r\n\t\t\t\t\r\n\t\t\t\tarr = splitString(infoToCalc, elements.other.space);\r\n\t\t\t\tindex = arr.indexOf(el)\r\n\t\t\t\tyear = arr[index + 1];\r\n\t\t\t\tFY = arr[index + 2];\r\n\t\t\t\tFYyear = arr[index + 3];\r\n\t\t\t\r\n\r\n\t\t\t\tli = `<li>${year} ${el} ${FY} ${FYyear}: ${elements.calc.sum0fMonth}</li>`\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t\t\r\n\t\t});\r\n\r\n\t\t\r\n\r\n\t\telements.DOM.list.insertAdjacentHTML('beforeend', li);\r\n\t},\r\n\trenderLiOfCountries:(arrOfinfoToCalc) => {\r\n\t\tfor(let i = 0; i < arrOfinfoToCalc.length; i++) {\r\n\r\n\t\t\tif(arrOfinfoToCalc[i] == \"DV1\" || arrOfinfoToCalc[i] == \"DV2\" || arrOfinfoToCalc[i] == \"DV3\") {\r\n\r\n\t\t\t\r\n\t\t\t\tlet li = `<li>${arrOfinfoToCalc[i]}: ${arrOfinfoToCalc[i + 1]} (${arrOfinfoToCalc[i + 2]})</li>`\r\n\t\t\t\telements.DOM.listOfCountries.insertAdjacentHTML('beforeend', li)\r\n\t\t\t\tlet num = +arrOfinfoToCalc[i + 1];\r\n\t\t\t\telements.calc.sum+= num;\r\n\t\t\t\telements.calc.sum0fMonth += num;\r\n\t\t\t}\r\n\t\t\t\r\n\t\t}\r\n\t},\r\n\tclearInput: ()=> {\r\n\t\telements.DOM.text.value = \"\";\r\n\t},\r\n\trenderTotal: ()=> {\r\n\t\telements.DOM.sum.innerHTML = elements.calc.sum;\r\n\t}\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });