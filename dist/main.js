/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/burger.js":
/*!**************************!*\
  !*** ./src/js/burger.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"activeBurger\": () => (/* binding */ activeBurger)\n/* harmony export */ });\n//burger menu\r\nlet burgerButton = document.querySelector('.burger-container');\r\nlet navContainer = document.querySelector('#navigation-container');\r\nlet navElements = document.querySelector('#nav-elements');\r\nlet count = 0;\r\nburgerButton.addEventListener('click', activeBurger);\r\n\r\nfunction activeBurger() {\r\n  navContainer.classList.toggle('nav-links-section-mobile');\r\n  navContainer.classList.toggle('nav-links-section');\r\n  navElements.classList.toggle('nav-links-mobile');\r\n  navElements.classList.toggle('nav-links');\r\n  burgerButton.classList.toggle('burger-rotate');\r\n}\r\n\n\n//# sourceURL=webpack://shelter/./src/js/burger.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _petsCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./petsCard.js */ \"./src/js/petsCard.js\");\n/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./burger.js */ \"./src/js/burger.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.js */ \"./src/js/modal.js\");\n/* harmony import */ var _slideCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slideCard */ \"./src/js/slideCard.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_slideCard__WEBPACK_IMPORTED_MODULE_3__.renderElement)()\r\n\r\n/* let containerModal = document.querySelector('.container-modal-window');\r\n\r\nfunction createModalWindowCard(index){\r\n  let imgPetModal, descriptionModal, headingModal, breedModal, descriptionTextModal, descriptionListModal,descriptionListItemModal;\r\n \r\n  imgPetModal = document.createElement('img');\r\n  imgPetModal.className ='modal-animal-image';\r\n  imgPetModal.setAttribute('src',petsCard[index].image )\r\n \r\n  descriptionModal = document.createElement('div');\r\n  descriptionModal.className = 'description-container';\r\n  \r\n  containerModal.append(imgPetModal,descriptionModal);\r\n \r\n  headingModal = document.createElement('h2');\r\n  headingModal.className = 'heading heading-modal';\r\n  headingModal.innerText = petsCard[index].name;\r\n \r\n  breedModal = document.createElement('h3');\r\n  breedModal.className = 'kind-animal';\r\n  breedModal.innerText = petsCard[index].bread; \r\n \r\n  descriptionTextModal = document.createElement('p');\r\n  descriptionTextModal.className = 'description-animal';\r\n  descriptionTextModal.innerText = petsCard[index].description;\r\n \r\n  descriptionListModal = document.createElement('ul');\r\n  descriptionListModal.className = 'description-list';\r\n  \r\n \r\n  descriptionModal.append(headingModal,breedModal,descriptionTextModal,descriptionListModal);\r\n  for (let i = 0; i < 5; i++) {\r\n   const textList = ['Age:' ,'Inoculation:', 'Diseases:', 'Parasites:'];\r\n     descriptionListItemModal = document.createElement('li');  \r\n     descriptionListModal.append(descriptionListItemModal)\r\n     for (let j = 0; j < textList.length; j++) {\r\n       descriptionListItemModal.innerText = textList[j];\r\n       descriptionListItemModal.classList = 'description-items';\r\n     }\r\n  }\r\n } */\r\n// create Card container elements\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://shelter/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"iconClose\": () => (/* binding */ iconClose)\n/* harmony export */ });\n//----close when click outside popup/modal------\r\nlet animalCard = document.querySelector('.modal-our-friends')\r\n\r\ndocument.addEventListener(\"click\", (event) => {\r\n  if(event.target.classList.contains(\"btn-cancel\") ||event.target.classList.contains(\"modal-our-friends\") ){\r\n    iconClose()\r\n  }\r\n});\r\n\r\nfunction iconClose() {\r\n  animalCard.style.display = \"none\";\r\n}\r\n\r\n//----open modal window\r\nlet allBtnLearn = document.querySelectorAll('.btn-learn-more');\r\n\r\nallBtnLearn.forEach((item, index) => { item.addEventListener('click', () => {\r\n    console.log('hi');\r\n    animalCard.style.display = 'flex';\r\n    createModalWindowCard(index)\r\n  }) \r\n})\n\n//# sourceURL=webpack://shelter/./src/js/modal.js?");

/***/ }),

/***/ "./src/js/petsCard.js":
/*!****************************!*\
  !*** ./src/js/petsCard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst petsCard = [\r\n  {\r\n    id: 1,\r\n    image: './assets/images/pets-jennifer.png',\r\n    name: 'Jennifer',\r\n    bread: 'Dog - Labrador',\r\n    description: \"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.\"\r\n  },\r\n  {\r\n    id: 2,\r\n    image: './assets/images/pets-sophia.png',\r\n    name: 'Sophia',\r\n    bread: 'Dog - Shih tzu',\r\n    description: \"Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.\"\r\n  },\r\n  {\r\n    id: 3,\r\n    image: './assets/images/pets-woody.png',\r\n    name: 'Woody',\r\n    bread: 'Dog - Golden Retriever',\r\n    description: 'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.'\r\n  },\r\n  {\r\n    id: 4,\r\n    image: './assets/images/pets-scarlet.png',\r\n    name: 'Scarlett',\r\n    bread: 'Dog - Jack Russell Terrier',\r\n    description: 'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.'\r\n  },\r\n  {\r\n    id: 5,\r\n    image: './assets/images/pets-katrine.png',\r\n    name: 'Katrine',\r\n    bread: 'Cat - British Shorthair',\r\n    description: 'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.'\r\n  },\r\n  {\r\n    id: 6,\r\n    image: './assets/images/pets-timmy.png',\r\n    name: \"Timmy\",\r\n    bread: 'Cat - British Shorthair',\r\n    description: 'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.'\r\n  },\r\n  {\r\n    id: 7,\r\n    image: './assets/images/pets-freddy.png',\r\n    name: \"Freddie\",\r\n    bread: 'Cat - British Shorthair',\r\n    description: 'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.'\r\n  },\r\n  {\r\n    id: 8,\r\n    image: './assets/images/pets-charly.png',\r\n    name: 'Charly',\r\n    bread: 'Dog - Jack Russell Terrier ',\r\n    description: 'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.'\r\n  }\r\n]\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (petsCard);\n\n//# sourceURL=webpack://shelter/./src/js/petsCard.js?");

/***/ }),

/***/ "./src/js/slideCard.js":
/*!*****************************!*\
  !*** ./src/js/slideCard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderElement\": () => (/* binding */ renderElement)\n/* harmony export */ });\n/* harmony import */ var _petsCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./petsCard.js */ \"./src/js/petsCard.js\");\n\r\n\r\nfunction renderElement() {\r\n  for (let i = 0; i <= _petsCard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; i++) {\r\n    let imageContainer = document.createElement('div');\r\n    let petsContainer= document.querySelectorAll('.container-img-our-friends');\r\n    petsContainer.forEach((item) => item.append(imageContainer))\r\n    let imagePets = document.createElement('img');\r\n    let petsName = document.createElement('h3');\r\n    let btnLearnMore = document.createElement('button');\r\n    imageContainer.className ='img-card-container';\r\n    imageContainer.append(imagePets,petsName,btnLearnMore);\r\n    btnLearnMore.className = 'btn-learn-more';\r\n    btnLearnMore.innerText = 'Learn more';\r\n    imagePets.className = 'img-card-our-friends';\r\n    petsName.className = 'name-image';\r\n    let imagHref = _petsCard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].image;\r\n    imagePets.setAttribute('src', imagHref)\r\n    petsName.innerHTML = _petsCard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].name;\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://shelter/./src/js/slideCard.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;