"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["todo"],{

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newTaskFunction": () => (/* binding */ newTaskFunction),
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory)
/* harmony export */ });
const projectFactory = () => {
  let title = prompt('enter project title');
  let todoList = [];
  todoList.push(todoFactory());
  return { title, todoList };
};

const todoFactory = () => {
  let title = prompt('enter todo title');
  let description = prompt('enter description');
  let priority = prompt(
    'Priority from 0 to 4. less important < > more important'
  );
  let dueDate = '2021.10.12';
  let isChecked = false;
  return { title, description, priority, dueDate, isChecked };
};

function newTaskFunction() {}





/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/todo.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBOztBQUUyQjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJvamVjdEZhY3RvcnkgPSAoKSA9PiB7XG4gIGxldCB0aXRsZSA9IHByb21wdCgnZW50ZXIgcHJvamVjdCB0aXRsZScpO1xuICBsZXQgdG9kb0xpc3QgPSBbXTtcbiAgdG9kb0xpc3QucHVzaCh0b2RvRmFjdG9yeSgpKTtcbiAgcmV0dXJuIHsgdGl0bGUsIHRvZG9MaXN0IH07XG59O1xuXG5jb25zdCB0b2RvRmFjdG9yeSA9ICgpID0+IHtcbiAgbGV0IHRpdGxlID0gcHJvbXB0KCdlbnRlciB0b2RvIHRpdGxlJyk7XG4gIGxldCBkZXNjcmlwdGlvbiA9IHByb21wdCgnZW50ZXIgZGVzY3JpcHRpb24nKTtcbiAgbGV0IHByaW9yaXR5ID0gcHJvbXB0KFxuICAgICdQcmlvcml0eSBmcm9tIDAgdG8gNC4gbGVzcyBpbXBvcnRhbnQgPCA+IG1vcmUgaW1wb3J0YW50J1xuICApO1xuICBsZXQgZHVlRGF0ZSA9ICcyMDIxLjEwLjEyJztcbiAgbGV0IGlzQ2hlY2tlZCA9IGZhbHNlO1xuICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlLCBpc0NoZWNrZWQgfTtcbn07XG5cbmZ1bmN0aW9uIG5ld1Rhc2tGdW5jdGlvbigpIHt9XG5cbmV4cG9ydCB7IG5ld1Rhc2tGdW5jdGlvbiB9O1xuZXhwb3J0IHsgcHJvamVjdEZhY3RvcnkgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==