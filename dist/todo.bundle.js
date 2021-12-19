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
  let priority = prompt('Priority from 0 to 4');
  return { title, description, priority };
};

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
  todoArray.push(todoFactory());
  console.table(todoArray);
}





/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/todo.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVxQjtBQUNNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdG9kb0ZhY3RvcnkgPSAoKSA9PiB7XG4gIGxldCB0aXRsZSA9IHByb21wdCgndGl0bGUnKTtcbiAgbGV0IGRlc2NyaXB0aW9uID0gcHJvbXB0KCdkZXNjcmlwdGlvbicpO1xuICBsZXQgcHJpb3JpdHkgPSBwcm9tcHQoJ1ByaW9yaXR5IGZyb20gMCB0byA0Jyk7XG4gIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkgfTtcbn07XG5cbmxldCB0b2RvQXJyYXkgPSBbXTtcblxudG9kb0FycmF5LnB1c2goe1xuICB0aXRsZTogJ0dvIHRvIHdvcmsnLFxuICBkZXNjcmlwdGlvbjogJ0RvIHRoZSBqb2InLFxuICBwcmlvcml0eTogJzQnLFxufSk7XG5cbnRvZG9BcnJheS5wdXNoKHtcbiAgdGl0bGU6ICdHZXQgZnJvbSB3b3JrJyxcbiAgZGVzY3JpcHRpb246ICdEbyB5b3VyIG93biBqb2InLFxuICBwcmlvcml0eTogJzMnLFxufSk7XG5cbmZ1bmN0aW9uIG5ld1Rhc2tGdW5jdGlvbigpIHtcbiAgdG9kb0FycmF5LnB1c2godG9kb0ZhY3RvcnkoKSk7XG4gIGNvbnNvbGUudGFibGUodG9kb0FycmF5KTtcbn1cblxuZXhwb3J0IHsgdG9kb0FycmF5IH07XG5leHBvcnQgeyBuZXdUYXNrRnVuY3Rpb24gfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==