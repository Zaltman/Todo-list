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
  // console.log(todoArray);
  // console.log(todoArray.length);
  // console.log(todoArray[todoArray.length - 1]);
  document
    .querySelector('.taskContainer')
    .appendChild(
      domComponentNameClass('li', 'oneTaskContainer')
    ).dataset.index = _todo__WEBPACK_IMPORTED_MODULE_0__.todoProjects.todoProject.length;
  document
    .querySelector('.taskContainer')
    .lastElementChild.appendChild(
      domComponentNameClass('div', 'taskN')
    ).textContent =
    _todo__WEBPACK_IMPORTED_MODULE_0__.todoProjects.todoProject[_todo__WEBPACK_IMPORTED_MODULE_0__.todoProjects.todoProject.length - 1].title;
  document
    .querySelector('.taskContainer')
    .lastElementChild.appendChild(
      domComponentNameClass('div', 'taskD')
    ).textContent =
    _todo__WEBPACK_IMPORTED_MODULE_0__.todoProjects.todoProject[_todo__WEBPACK_IMPORTED_MODULE_0__.todoProjects.todoProject.length - 1].description;
  document
    .querySelector('.taskContainer')
    .lastElementChild.appendChild(
      domComponentNameClass('div', 'taskP')
    ).textContent = priorityText();
  function priorityText() {
    if (todoArray[todoArray.length - 1].priority == 0) return 'Not important';
    else if (
      _todo__WEBPACK_IMPORTED_MODULE_0__.todoProjects.todoProject[_todo__WEBPACK_IMPORTED_MODULE_0__.todoProjects.todoProject.length - 1].priority ==
      1
    )
      return 'Kind of important';
    else if (
      _todo__WEBPACK_IMPORTED_MODULE_0__.todoProjects.todoProject[_todo__WEBPACK_IMPORTED_MODULE_0__.todoProjects.todoProject.length - 1].priority ==
      2
    )
      return 'Important';
    else if (
      _todo__WEBPACK_IMPORTED_MODULE_0__.todoProjects.todoProject[_todo__WEBPACK_IMPORTED_MODULE_0__.todoProjects.todoProject.length - 1].priority ==
      3
    )
      return 'Very important';
    else if (
      _todo__WEBPACK_IMPORTED_MODULE_0__.todoProjects.todoProject[_todo__WEBPACK_IMPORTED_MODULE_0__.todoProjects.todoProject.length - 1].priority ==
      4
    )
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
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/dom.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtFQUErQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyREFBd0IsQ0FBQyxrRUFBK0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQXdCLENBQUMsa0VBQStCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDJEQUF3QixDQUFDLGtFQUErQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMkRBQXdCLENBQUMsa0VBQStCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwyREFBd0IsQ0FBQyxrRUFBK0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDJEQUF3QixDQUFDLGtFQUErQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVpQztBQUNYOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0R0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRXdCO0FBQ0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRvZG9Qcm9qZWN0cyB9IGZyb20gJy4vdG9kbyc7XG5cbmZ1bmN0aW9uIGRvbUNvbXBvbmVudE5hbWVDbGFzcyhuYW1lLCBjbGFzc05hbWUpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG4gIGlmIChjbGFzc05hbWUpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBkb21OZXdUYXNrKCkge1xuICAvLyBjb25zb2xlLmxvZyh0b2RvQXJyYXkpO1xuICAvLyBjb25zb2xlLmxvZyh0b2RvQXJyYXkubGVuZ3RoKTtcbiAgLy8gY29uc29sZS5sb2codG9kb0FycmF5W3RvZG9BcnJheS5sZW5ndGggLSAxXSk7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoJy50YXNrQ29udGFpbmVyJylcbiAgICAuYXBwZW5kQ2hpbGQoXG4gICAgICBkb21Db21wb25lbnROYW1lQ2xhc3MoJ2xpJywgJ29uZVRhc2tDb250YWluZXInKVxuICAgICkuZGF0YXNldC5pbmRleCA9IHRvZG9Qcm9qZWN0cy50b2RvUHJvamVjdC5sZW5ndGg7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoJy50YXNrQ29udGFpbmVyJylcbiAgICAubGFzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChcbiAgICAgIGRvbUNvbXBvbmVudE5hbWVDbGFzcygnZGl2JywgJ3Rhc2tOJylcbiAgICApLnRleHRDb250ZW50ID1cbiAgICB0b2RvUHJvamVjdHMudG9kb1Byb2plY3RbdG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0Lmxlbmd0aCAtIDFdLnRpdGxlO1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKCcudGFza0NvbnRhaW5lcicpXG4gICAgLmxhc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQoXG4gICAgICBkb21Db21wb25lbnROYW1lQ2xhc3MoJ2RpdicsICd0YXNrRCcpXG4gICAgKS50ZXh0Q29udGVudCA9XG4gICAgdG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0W3RvZG9Qcm9qZWN0cy50b2RvUHJvamVjdC5sZW5ndGggLSAxXS5kZXNjcmlwdGlvbjtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcignLnRhc2tDb250YWluZXInKVxuICAgIC5sYXN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKFxuICAgICAgZG9tQ29tcG9uZW50TmFtZUNsYXNzKCdkaXYnLCAndGFza1AnKVxuICAgICkudGV4dENvbnRlbnQgPSBwcmlvcml0eVRleHQoKTtcbiAgZnVuY3Rpb24gcHJpb3JpdHlUZXh0KCkge1xuICAgIGlmICh0b2RvQXJyYXlbdG9kb0FycmF5Lmxlbmd0aCAtIDFdLnByaW9yaXR5ID09IDApIHJldHVybiAnTm90IGltcG9ydGFudCc7XG4gICAgZWxzZSBpZiAoXG4gICAgICB0b2RvUHJvamVjdHMudG9kb1Byb2plY3RbdG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0Lmxlbmd0aCAtIDFdLnByaW9yaXR5ID09XG4gICAgICAxXG4gICAgKVxuICAgICAgcmV0dXJuICdLaW5kIG9mIGltcG9ydGFudCc7XG4gICAgZWxzZSBpZiAoXG4gICAgICB0b2RvUHJvamVjdHMudG9kb1Byb2plY3RbdG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0Lmxlbmd0aCAtIDFdLnByaW9yaXR5ID09XG4gICAgICAyXG4gICAgKVxuICAgICAgcmV0dXJuICdJbXBvcnRhbnQnO1xuICAgIGVsc2UgaWYgKFxuICAgICAgdG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0W3RvZG9Qcm9qZWN0cy50b2RvUHJvamVjdC5sZW5ndGggLSAxXS5wcmlvcml0eSA9PVxuICAgICAgM1xuICAgIClcbiAgICAgIHJldHVybiAnVmVyeSBpbXBvcnRhbnQnO1xuICAgIGVsc2UgaWYgKFxuICAgICAgdG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0W3RvZG9Qcm9qZWN0cy50b2RvUHJvamVjdC5sZW5ndGggLSAxXS5wcmlvcml0eSA9PVxuICAgICAgNFxuICAgIClcbiAgICAgIHJldHVybiAnRXh0cmVtZWx5IGltcG9ydGFudCc7XG4gIH1cbn1cblxuZXhwb3J0IHsgZG9tQ29tcG9uZW50TmFtZUNsYXNzIH07XG5leHBvcnQgeyBkb21OZXdUYXNrIH07XG4iLCJjb25zdCB0b2RvRmFjdG9yeSA9ICgpID0+IHtcbiAgbGV0IHRpdGxlID0gcHJvbXB0KCd0aXRsZScpO1xuICBsZXQgZGVzY3JpcHRpb24gPSBwcm9tcHQoJ2Rlc2NyaXB0aW9uJyk7XG4gIGxldCBwcmlvcml0eSA9IHByb21wdChcbiAgICAnUHJpb3JpdHkgZnJvbSAwIHRvIDQuIGxlc3MgaW1wb3J0YW50IDwgPiBtb3JlIGltcG9ydGFudCdcbiAgKTtcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSB9O1xufTtcbmNvbnN0IHRvZG9Qcm9qZWN0cyA9IHt9O1xudG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0ID0gW107XG5cbnRvZG9Qcm9qZWN0cy50b2RvUHJvamVjdC5wdXNoKHtcbiAgdGl0bGU6ICdHbyB0byB3b3JrJyxcbiAgZGVzY3JpcHRpb246ICdEbyB0aGUgam9iJyxcbiAgcHJpb3JpdHk6ICc0Jyxcbn0pO1xuXG50b2RvUHJvamVjdHMudG9kb1Byb2plY3QucHVzaCh7XG4gIHRpdGxlOiAnR2V0IGZyb20gd29yaycsXG4gIGRlc2NyaXB0aW9uOiAnRG8geW91ciBvd24gam9iJyxcbiAgcHJpb3JpdHk6ICczJyxcbn0pO1xuXG5mdW5jdGlvbiBuZXdUYXNrRnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUudGFibGUoJ2FpbmEnKTtcbiAgdG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0LnB1c2godG9kb0ZhY3RvcnkoKSk7XG59XG5cbmV4cG9ydCB7IHRvZG9Qcm9qZWN0cyB9O1xuZXhwb3J0IHsgbmV3VGFza0Z1bmN0aW9uIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=