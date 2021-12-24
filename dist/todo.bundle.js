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
/* harmony export */   "testProjectLoader": () => (/* binding */ testProjectLoader),
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
function testProjectLoader() {
  let todoProjects = [];

  todoProjects[0] = {};
  todoProjects[0].todoList = [];

  todoProjects[0].title = 'Test project title1';
  todoProjects[0].todoList[0] = {};
  todoProjects[0].todoList[0].title = 'Test todoList title';
  todoProjects[0].todoList[0].description = 'Test todoList description';
  todoProjects[0].todoList[0].priority = '4';
  todoProjects[0].todoList[0].dueDate = '2021.10.12';
  todoProjects[0].todoList[0].isChecked = false;
  return todoProjects;
}

function newTaskFunction() {}






/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/todo.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRTJCO0FBQ0U7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByb2plY3RGYWN0b3J5ID0gKCkgPT4ge1xuICBsZXQgdGl0bGUgPSBwcm9tcHQoJ2VudGVyIHByb2plY3QgdGl0bGUnKTtcbiAgbGV0IHRvZG9MaXN0ID0gW107XG4gIHRvZG9MaXN0LnB1c2godG9kb0ZhY3RvcnkoKSk7XG4gIHJldHVybiB7IHRpdGxlLCB0b2RvTGlzdCB9O1xufTtcblxuY29uc3QgdG9kb0ZhY3RvcnkgPSAoKSA9PiB7XG4gIGxldCB0aXRsZSA9IHByb21wdCgnZW50ZXIgdG9kbyB0aXRsZScpO1xuICBsZXQgZGVzY3JpcHRpb24gPSBwcm9tcHQoJ2VudGVyIGRlc2NyaXB0aW9uJyk7XG4gIGxldCBwcmlvcml0eSA9IHByb21wdChcbiAgICAnUHJpb3JpdHkgZnJvbSAwIHRvIDQuIGxlc3MgaW1wb3J0YW50IDwgPiBtb3JlIGltcG9ydGFudCdcbiAgKTtcbiAgbGV0IGR1ZURhdGUgPSAnMjAyMS4xMC4xMic7XG4gIGxldCBpc0NoZWNrZWQgPSBmYWxzZTtcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSwgaXNDaGVja2VkIH07XG59O1xuZnVuY3Rpb24gdGVzdFByb2plY3RMb2FkZXIoKSB7XG4gIGxldCB0b2RvUHJvamVjdHMgPSBbXTtcblxuICB0b2RvUHJvamVjdHNbMF0gPSB7fTtcbiAgdG9kb1Byb2plY3RzWzBdLnRvZG9MaXN0ID0gW107XG5cbiAgdG9kb1Byb2plY3RzWzBdLnRpdGxlID0gJ1Rlc3QgcHJvamVjdCB0aXRsZTEnO1xuICB0b2RvUHJvamVjdHNbMF0udG9kb0xpc3RbMF0gPSB7fTtcbiAgdG9kb1Byb2plY3RzWzBdLnRvZG9MaXN0WzBdLnRpdGxlID0gJ1Rlc3QgdG9kb0xpc3QgdGl0bGUnO1xuICB0b2RvUHJvamVjdHNbMF0udG9kb0xpc3RbMF0uZGVzY3JpcHRpb24gPSAnVGVzdCB0b2RvTGlzdCBkZXNjcmlwdGlvbic7XG4gIHRvZG9Qcm9qZWN0c1swXS50b2RvTGlzdFswXS5wcmlvcml0eSA9ICc0JztcbiAgdG9kb1Byb2plY3RzWzBdLnRvZG9MaXN0WzBdLmR1ZURhdGUgPSAnMjAyMS4xMC4xMic7XG4gIHRvZG9Qcm9qZWN0c1swXS50b2RvTGlzdFswXS5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgcmV0dXJuIHRvZG9Qcm9qZWN0cztcbn1cblxuZnVuY3Rpb24gbmV3VGFza0Z1bmN0aW9uKCkge31cblxuZXhwb3J0IHsgbmV3VGFza0Z1bmN0aW9uIH07XG5leHBvcnQgeyB0ZXN0UHJvamVjdExvYWRlciB9O1xuZXhwb3J0IHsgcHJvamVjdEZhY3RvcnkgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==