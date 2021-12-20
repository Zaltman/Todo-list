"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["todo"],{

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
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/todo.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFcUI7QUFDTSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRvZG9GYWN0b3J5ID0gKCkgPT4ge1xuICBsZXQgdGl0bGUgPSBwcm9tcHQoJ3RpdGxlJyk7XG4gIGxldCBkZXNjcmlwdGlvbiA9IHByb21wdCgnZGVzY3JpcHRpb24nKTtcbiAgbGV0IHByaW9yaXR5ID0gcHJvbXB0KFxuICAgICdQcmlvcml0eSBmcm9tIDAgdG8gNC4gbGVzcyBpbXBvcnRhbnQgPCA+IG1vcmUgaW1wb3J0YW50J1xuICApO1xuICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5IH07XG59O1xuLy8gY29uc3QgdG9kb1Byb2plY3RzID0gW107XG4vLyB0b2RvUHJvamVjdHNbMF0gPSB0b2RvQXJyYXlcbmxldCB0b2RvQXJyYXkgPSBbXTtcblxudG9kb0FycmF5LnB1c2goe1xuICB0aXRsZTogJ0dvIHRvIHdvcmsnLFxuICBkZXNjcmlwdGlvbjogJ0RvIHRoZSBqb2InLFxuICBwcmlvcml0eTogJzQnLFxufSk7XG5cbnRvZG9BcnJheS5wdXNoKHtcbiAgdGl0bGU6ICdHZXQgZnJvbSB3b3JrJyxcbiAgZGVzY3JpcHRpb246ICdEbyB5b3VyIG93biBqb2InLFxuICBwcmlvcml0eTogJzMnLFxufSk7XG5cbmZ1bmN0aW9uIG5ld1Rhc2tGdW5jdGlvbigpIHtcbiAgY29uc29sZS50YWJsZSgnYWluYScpO1xuICB0b2RvQXJyYXkucHVzaCh0b2RvRmFjdG9yeSgpKTtcbn1cblxuZXhwb3J0IHsgdG9kb0FycmF5IH07XG5leHBvcnQgeyBuZXdUYXNrRnVuY3Rpb24gfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==