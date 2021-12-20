"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["todo"],{

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoProjects": () => (/* binding */ todoProjects),
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
const todoProjects = {};
todoProjects.todoProject = [];

todoProjects.todoProject.push({
  title: 'Go to work',
  description: 'Do the job',
  priority: '4',
});

todoProjects.todoProject.push({
  title: 'Get from work',
  description: 'Do your own job',
  priority: '3',
});

function newTaskFunction() {
  console.table('aina');
  todoProjects.todoProject.push(todoFactory());
}





/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/todo.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRXdCO0FBQ0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0b2RvRmFjdG9yeSA9ICgpID0+IHtcbiAgbGV0IHRpdGxlID0gcHJvbXB0KCd0aXRsZScpO1xuICBsZXQgZGVzY3JpcHRpb24gPSBwcm9tcHQoJ2Rlc2NyaXB0aW9uJyk7XG4gIGxldCBwcmlvcml0eSA9IHByb21wdChcbiAgICAnUHJpb3JpdHkgZnJvbSAwIHRvIDQuIGxlc3MgaW1wb3J0YW50IDwgPiBtb3JlIGltcG9ydGFudCdcbiAgKTtcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSB9O1xufTtcbmNvbnN0IHRvZG9Qcm9qZWN0cyA9IHt9O1xudG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0ID0gW107XG5cbnRvZG9Qcm9qZWN0cy50b2RvUHJvamVjdC5wdXNoKHtcbiAgdGl0bGU6ICdHbyB0byB3b3JrJyxcbiAgZGVzY3JpcHRpb246ICdEbyB0aGUgam9iJyxcbiAgcHJpb3JpdHk6ICc0Jyxcbn0pO1xuXG50b2RvUHJvamVjdHMudG9kb1Byb2plY3QucHVzaCh7XG4gIHRpdGxlOiAnR2V0IGZyb20gd29yaycsXG4gIGRlc2NyaXB0aW9uOiAnRG8geW91ciBvd24gam9iJyxcbiAgcHJpb3JpdHk6ICczJyxcbn0pO1xuXG5mdW5jdGlvbiBuZXdUYXNrRnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUudGFibGUoJ2FpbmEnKTtcbiAgdG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0LnB1c2godG9kb0ZhY3RvcnkoKSk7XG59XG5cbmV4cG9ydCB7IHRvZG9Qcm9qZWN0cyB9O1xuZXhwb3J0IHsgbmV3VGFza0Z1bmN0aW9uIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=