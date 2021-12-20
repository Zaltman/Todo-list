"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["dom"],{

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domComponentNameClass": () => (/* binding */ domComponentNameClass),
/* harmony export */   "domNewTask": () => (/* binding */ domNewTask)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");


function domComponentNameClass(name, className) {
  const element = document.createElement(name);
  if (className) {
    element.classList.add(className);
  }

  return element;
}

function domNewTask() {
  console.log(_todo__WEBPACK_IMPORTED_MODULE_0__.todoArray);
  console.log(_todo__WEBPACK_IMPORTED_MODULE_0__.todoArray.length);
  console.log(_todo__WEBPACK_IMPORTED_MODULE_0__.todoArray[_todo__WEBPACK_IMPORTED_MODULE_0__.todoArray.length - 1]);
  document
    .querySelector('.taskContainer')
    .appendChild(
      domComponentNameClass('li', 'oneTaskContainer')
    ).dataset.index = _todo__WEBPACK_IMPORTED_MODULE_0__.todoArray.length;
  document
    .querySelector('.taskContainer')
    .lastElementChild.appendChild(
      domComponentNameClass('div', 'taskN')
    ).textContent = _todo__WEBPACK_IMPORTED_MODULE_0__.todoArray[_todo__WEBPACK_IMPORTED_MODULE_0__.todoArray.length - 1].title;
  document
    .querySelector('.taskContainer')
    .lastElementChild.appendChild(
      domComponentNameClass('div', 'taskD')
    ).textContent = _todo__WEBPACK_IMPORTED_MODULE_0__.todoArray[_todo__WEBPACK_IMPORTED_MODULE_0__.todoArray.length - 1].description;
  document
    .querySelector('.taskContainer')
    .lastElementChild.appendChild(
      domComponentNameClass('div', 'taskP')
    ).textContent = priorityText();
  function priorityText() {
    if (_todo__WEBPACK_IMPORTED_MODULE_0__.todoArray[_todo__WEBPACK_IMPORTED_MODULE_0__.todoArray.length - 1].priority == 0) return 'Not important';
    else if (_todo__WEBPACK_IMPORTED_MODULE_0__.todoArray[_todo__WEBPACK_IMPORTED_MODULE_0__.todoArray.length - 1].priority == 1)
      return 'Kind of important';
    else if (_todo__WEBPACK_IMPORTED_MODULE_0__.todoArray[_todo__WEBPACK_IMPORTED_MODULE_0__.todoArray.length - 1].priority == 2) return 'Important';
    else if (_todo__WEBPACK_IMPORTED_MODULE_0__.todoArray[_todo__WEBPACK_IMPORTED_MODULE_0__.todoArray.length - 1].priority == 3)
      return 'Very important';
    else if (_todo__WEBPACK_IMPORTED_MODULE_0__.todoArray[_todo__WEBPACK_IMPORTED_MODULE_0__.todoArray.length - 1].priority == 4)
      return 'Extremely important';
  }
}





/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoArray": () => (/* binding */ todoArray),
/* harmony export */   "newTaskFunction": () => (/* binding */ newTaskFunction)
/* harmony export */ });
const todoFactory = () => {
  let title = prompt('title');
  let description = prompt('description');
  let priority = prompt(
    'Priority from 0 to 4. less important < > more important'
  );
  return { title, description, priority };
};
// const todoProjects = [];
// todoProjects[0] = todoArray
let todoArray = [];

todoArray.push({
  title: 'Go to work',
  description: 'Do the job',
  priority: '4',
});

todoArray.push({
  title: 'Get from work',
  description: 'Do your own job',
  priority: '3',
});

function newTaskFunction() {
  console.table('aina');
  todoArray.push(todoFactory());
}





/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/dom.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGNBQWMsNENBQVM7QUFDdkIsY0FBYyxtREFBZ0I7QUFDOUIsY0FBYyw0Q0FBUyxDQUFDLG1EQUFnQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtREFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNENBQVMsQ0FBQyxtREFBZ0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNENBQVMsQ0FBQyxtREFBZ0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0Q0FBUyxDQUFDLG1EQUFnQjtBQUNsQyxhQUFhLDRDQUFTLENBQUMsbURBQWdCO0FBQ3ZDO0FBQ0EsYUFBYSw0Q0FBUyxDQUFDLG1EQUFnQjtBQUN2QyxhQUFhLDRDQUFTLENBQUMsbURBQWdCO0FBQ3ZDO0FBQ0EsYUFBYSw0Q0FBUyxDQUFDLG1EQUFnQjtBQUN2QztBQUNBO0FBQ0E7O0FBRWlDO0FBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRHRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVxQjtBQUNNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b2RvQXJyYXkgfSBmcm9tICcuL3RvZG8nO1xuXG5mdW5jdGlvbiBkb21Db21wb25lbnROYW1lQ2xhc3MobmFtZSwgY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xuICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZG9tTmV3VGFzaygpIHtcbiAgY29uc29sZS5sb2codG9kb0FycmF5KTtcbiAgY29uc29sZS5sb2codG9kb0FycmF5Lmxlbmd0aCk7XG4gIGNvbnNvbGUubG9nKHRvZG9BcnJheVt0b2RvQXJyYXkubGVuZ3RoIC0gMV0pO1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKCcudGFza0NvbnRhaW5lcicpXG4gICAgLmFwcGVuZENoaWxkKFxuICAgICAgZG9tQ29tcG9uZW50TmFtZUNsYXNzKCdsaScsICdvbmVUYXNrQ29udGFpbmVyJylcbiAgICApLmRhdGFzZXQuaW5kZXggPSB0b2RvQXJyYXkubGVuZ3RoO1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKCcudGFza0NvbnRhaW5lcicpXG4gICAgLmxhc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQoXG4gICAgICBkb21Db21wb25lbnROYW1lQ2xhc3MoJ2RpdicsICd0YXNrTicpXG4gICAgKS50ZXh0Q29udGVudCA9IHRvZG9BcnJheVt0b2RvQXJyYXkubGVuZ3RoIC0gMV0udGl0bGU7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoJy50YXNrQ29udGFpbmVyJylcbiAgICAubGFzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChcbiAgICAgIGRvbUNvbXBvbmVudE5hbWVDbGFzcygnZGl2JywgJ3Rhc2tEJylcbiAgICApLnRleHRDb250ZW50ID0gdG9kb0FycmF5W3RvZG9BcnJheS5sZW5ndGggLSAxXS5kZXNjcmlwdGlvbjtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcignLnRhc2tDb250YWluZXInKVxuICAgIC5sYXN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKFxuICAgICAgZG9tQ29tcG9uZW50TmFtZUNsYXNzKCdkaXYnLCAndGFza1AnKVxuICAgICkudGV4dENvbnRlbnQgPSBwcmlvcml0eVRleHQoKTtcbiAgZnVuY3Rpb24gcHJpb3JpdHlUZXh0KCkge1xuICAgIGlmICh0b2RvQXJyYXlbdG9kb0FycmF5Lmxlbmd0aCAtIDFdLnByaW9yaXR5ID09IDApIHJldHVybiAnTm90IGltcG9ydGFudCc7XG4gICAgZWxzZSBpZiAodG9kb0FycmF5W3RvZG9BcnJheS5sZW5ndGggLSAxXS5wcmlvcml0eSA9PSAxKVxuICAgICAgcmV0dXJuICdLaW5kIG9mIGltcG9ydGFudCc7XG4gICAgZWxzZSBpZiAodG9kb0FycmF5W3RvZG9BcnJheS5sZW5ndGggLSAxXS5wcmlvcml0eSA9PSAyKSByZXR1cm4gJ0ltcG9ydGFudCc7XG4gICAgZWxzZSBpZiAodG9kb0FycmF5W3RvZG9BcnJheS5sZW5ndGggLSAxXS5wcmlvcml0eSA9PSAzKVxuICAgICAgcmV0dXJuICdWZXJ5IGltcG9ydGFudCc7XG4gICAgZWxzZSBpZiAodG9kb0FycmF5W3RvZG9BcnJheS5sZW5ndGggLSAxXS5wcmlvcml0eSA9PSA0KVxuICAgICAgcmV0dXJuICdFeHRyZW1lbHkgaW1wb3J0YW50JztcbiAgfVxufVxuXG5leHBvcnQgeyBkb21Db21wb25lbnROYW1lQ2xhc3MgfTtcbmV4cG9ydCB7IGRvbU5ld1Rhc2sgfTtcbiIsImNvbnN0IHRvZG9GYWN0b3J5ID0gKCkgPT4ge1xuICBsZXQgdGl0bGUgPSBwcm9tcHQoJ3RpdGxlJyk7XG4gIGxldCBkZXNjcmlwdGlvbiA9IHByb21wdCgnZGVzY3JpcHRpb24nKTtcbiAgbGV0IHByaW9yaXR5ID0gcHJvbXB0KFxuICAgICdQcmlvcml0eSBmcm9tIDAgdG8gNC4gbGVzcyBpbXBvcnRhbnQgPCA+IG1vcmUgaW1wb3J0YW50J1xuICApO1xuICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5IH07XG59O1xuLy8gY29uc3QgdG9kb1Byb2plY3RzID0gW107XG4vLyB0b2RvUHJvamVjdHNbMF0gPSB0b2RvQXJyYXlcbmxldCB0b2RvQXJyYXkgPSBbXTtcblxudG9kb0FycmF5LnB1c2goe1xuICB0aXRsZTogJ0dvIHRvIHdvcmsnLFxuICBkZXNjcmlwdGlvbjogJ0RvIHRoZSBqb2InLFxuICBwcmlvcml0eTogJzQnLFxufSk7XG5cbnRvZG9BcnJheS5wdXNoKHtcbiAgdGl0bGU6ICdHZXQgZnJvbSB3b3JrJyxcbiAgZGVzY3JpcHRpb246ICdEbyB5b3VyIG93biBqb2InLFxuICBwcmlvcml0eTogJzMnLFxufSk7XG5cbmZ1bmN0aW9uIG5ld1Rhc2tGdW5jdGlvbigpIHtcbiAgY29uc29sZS50YWJsZSgnYWluYScpO1xuICB0b2RvQXJyYXkucHVzaCh0b2RvRmFjdG9yeSgpKTtcbn1cblxuZXhwb3J0IHsgdG9kb0FycmF5IH07XG5leHBvcnQgeyBuZXdUYXNrRnVuY3Rpb24gfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==