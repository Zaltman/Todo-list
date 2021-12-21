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
  document
    .querySelector('.taskContainer')
    .appendChild(
      domComponentNameClass('li', 'oneTaskContainer')
    ).dataset.index = _todo__WEBPACK_IMPORTED_MODULE_0__.todoProjects.todoProject[0].length;
  document
    .querySelector('.taskContainer')
    .lastElementChild.appendChild(
      domComponentNameClass('div', 'taskN')
    ).textContent =
    _todo__WEBPACK_IMPORTED_MODULE_0__.todoProjects.todoProject[0][_todo__WEBPACK_IMPORTED_MODULE_0__.todoProjects.todoProject[0].length - 1].title;
  document
    .querySelector('.taskContainer')
    .lastElementChild.appendChild(
      domComponentNameClass('div', 'taskD')
    ).textContent =
    _todo__WEBPACK_IMPORTED_MODULE_0__.todoProjects.todoProject[0][
      _todo__WEBPACK_IMPORTED_MODULE_0__.todoProjects.todoProject[0].length - 1
    ].description;
  document
    .querySelector('.taskContainer')
    .lastElementChild.appendChild(
      domComponentNameClass('div', 'taskP')
    ).textContent = priorityText();
  function priorityText() {
    if (
      _todo__WEBPACK_IMPORTED_MODULE_0__.todoProjects.todoProject[0][_todo__WEBPACK_IMPORTED_MODULE_0__.todoProjects.todoProject[0].length - 1] == 0
    )
      return 'Not important';
    else if (
      _todo__WEBPACK_IMPORTED_MODULE_0__.todoProjects.todoProject[0][_todo__WEBPACK_IMPORTED_MODULE_0__.todoProjects.todoProject[0].length - 1]
        .priority == 1
    )
      return 'Kind of important';
    else if (
      _todo__WEBPACK_IMPORTED_MODULE_0__.todoProjects.todoProject[0][_todo__WEBPACK_IMPORTED_MODULE_0__.todoProjects.todoProject[0].length - 1]
        .priority == 2
    )
      return 'Important';
    else if (
      _todo__WEBPACK_IMPORTED_MODULE_0__.todoProjects.todoProject[0][_todo__WEBPACK_IMPORTED_MODULE_0__.todoProjects.todoProject[0].length - 1]
        .priority == 3
    )
      return 'Very important';
    else if (
      _todo__WEBPACK_IMPORTED_MODULE_0__.todoProjects.todoProject[0][_todo__WEBPACK_IMPORTED_MODULE_0__.todoProjects.todoProject[0].length - 1]
        .priority == 4
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
todoProjects.todoProject[0] = [];

todoProjects.todoProject[0].push({
  title: 'Go to work',
  description: 'Do the job',
  priority: '4',
});

todoProjects.todoProject[0].push({
  title: 'Get from work',
  description: 'Do your own job',
  priority: '3',
});

todoProjects.todoProject[1] = [];

todoProjects.todoProject[1].push({
  title: 'Go to second work',
  description: 'Do the second job',
  priority: '2',
});

todoProjects.todoProject[1].push({
  title: 'Get from second work',
  description: 'Do your own second job',
  priority: '1',
});

todoProjects.todoProject[2] = [];

todoProjects.todoProject[2].push({
  title: 'Go to second work2',
  description: 'Do the second job',
  priority: '1',
});

todoProjects.todoProject[2].push({
  title: 'Get from second work2',
  description: 'Do your own second job',
  priority: '0',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFFQUFrQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4REFBMkIsQ0FBQyxxRUFBa0M7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOERBQTJCO0FBQy9CLE1BQU0scUVBQWtDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhEQUEyQixDQUFDLHFFQUFrQztBQUNwRTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhEQUEyQixDQUFDLHFFQUFrQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sOERBQTJCLENBQUMscUVBQWtDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw4REFBMkIsQ0FBQyxxRUFBa0M7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhEQUEyQixDQUFDLHFFQUFrQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVpQztBQUNYOzs7Ozs7Ozs7Ozs7Ozs7O0FDakV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRXdCO0FBQ0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRvZG9Qcm9qZWN0cyB9IGZyb20gJy4vdG9kbyc7XG5cbmZ1bmN0aW9uIGRvbUNvbXBvbmVudE5hbWVDbGFzcyhuYW1lLCBjbGFzc05hbWUpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG4gIGlmIChjbGFzc05hbWUpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBkb21OZXdUYXNrKCkge1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKCcudGFza0NvbnRhaW5lcicpXG4gICAgLmFwcGVuZENoaWxkKFxuICAgICAgZG9tQ29tcG9uZW50TmFtZUNsYXNzKCdsaScsICdvbmVUYXNrQ29udGFpbmVyJylcbiAgICApLmRhdGFzZXQuaW5kZXggPSB0b2RvUHJvamVjdHMudG9kb1Byb2plY3RbMF0ubGVuZ3RoO1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKCcudGFza0NvbnRhaW5lcicpXG4gICAgLmxhc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQoXG4gICAgICBkb21Db21wb25lbnROYW1lQ2xhc3MoJ2RpdicsICd0YXNrTicpXG4gICAgKS50ZXh0Q29udGVudCA9XG4gICAgdG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0WzBdW3RvZG9Qcm9qZWN0cy50b2RvUHJvamVjdFswXS5sZW5ndGggLSAxXS50aXRsZTtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcignLnRhc2tDb250YWluZXInKVxuICAgIC5sYXN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKFxuICAgICAgZG9tQ29tcG9uZW50TmFtZUNsYXNzKCdkaXYnLCAndGFza0QnKVxuICAgICkudGV4dENvbnRlbnQgPVxuICAgIHRvZG9Qcm9qZWN0cy50b2RvUHJvamVjdFswXVtcbiAgICAgIHRvZG9Qcm9qZWN0cy50b2RvUHJvamVjdFswXS5sZW5ndGggLSAxXG4gICAgXS5kZXNjcmlwdGlvbjtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcignLnRhc2tDb250YWluZXInKVxuICAgIC5sYXN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKFxuICAgICAgZG9tQ29tcG9uZW50TmFtZUNsYXNzKCdkaXYnLCAndGFza1AnKVxuICAgICkudGV4dENvbnRlbnQgPSBwcmlvcml0eVRleHQoKTtcbiAgZnVuY3Rpb24gcHJpb3JpdHlUZXh0KCkge1xuICAgIGlmIChcbiAgICAgIHRvZG9Qcm9qZWN0cy50b2RvUHJvamVjdFswXVt0b2RvUHJvamVjdHMudG9kb1Byb2plY3RbMF0ubGVuZ3RoIC0gMV0gPT0gMFxuICAgIClcbiAgICAgIHJldHVybiAnTm90IGltcG9ydGFudCc7XG4gICAgZWxzZSBpZiAoXG4gICAgICB0b2RvUHJvamVjdHMudG9kb1Byb2plY3RbMF1bdG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0WzBdLmxlbmd0aCAtIDFdXG4gICAgICAgIC5wcmlvcml0eSA9PSAxXG4gICAgKVxuICAgICAgcmV0dXJuICdLaW5kIG9mIGltcG9ydGFudCc7XG4gICAgZWxzZSBpZiAoXG4gICAgICB0b2RvUHJvamVjdHMudG9kb1Byb2plY3RbMF1bdG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0WzBdLmxlbmd0aCAtIDFdXG4gICAgICAgIC5wcmlvcml0eSA9PSAyXG4gICAgKVxuICAgICAgcmV0dXJuICdJbXBvcnRhbnQnO1xuICAgIGVsc2UgaWYgKFxuICAgICAgdG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0WzBdW3RvZG9Qcm9qZWN0cy50b2RvUHJvamVjdFswXS5sZW5ndGggLSAxXVxuICAgICAgICAucHJpb3JpdHkgPT0gM1xuICAgIClcbiAgICAgIHJldHVybiAnVmVyeSBpbXBvcnRhbnQnO1xuICAgIGVsc2UgaWYgKFxuICAgICAgdG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0WzBdW3RvZG9Qcm9qZWN0cy50b2RvUHJvamVjdFswXS5sZW5ndGggLSAxXVxuICAgICAgICAucHJpb3JpdHkgPT0gNFxuICAgIClcbiAgICAgIHJldHVybiAnRXh0cmVtZWx5IGltcG9ydGFudCc7XG4gIH1cbn1cblxuZXhwb3J0IHsgZG9tQ29tcG9uZW50TmFtZUNsYXNzIH07XG5leHBvcnQgeyBkb21OZXdUYXNrIH07XG4iLCJjb25zdCB0b2RvRmFjdG9yeSA9ICgpID0+IHtcbiAgbGV0IHRpdGxlID0gcHJvbXB0KCd0aXRsZScpO1xuICBsZXQgZGVzY3JpcHRpb24gPSBwcm9tcHQoJ2Rlc2NyaXB0aW9uJyk7XG4gIGxldCBwcmlvcml0eSA9IHByb21wdChcbiAgICAnUHJpb3JpdHkgZnJvbSAwIHRvIDQuIGxlc3MgaW1wb3J0YW50IDwgPiBtb3JlIGltcG9ydGFudCdcbiAgKTtcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSB9O1xufTtcbmNvbnN0IHRvZG9Qcm9qZWN0cyA9IHt9O1xudG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0ID0gW107XG50b2RvUHJvamVjdHMudG9kb1Byb2plY3RbMF0gPSBbXTtcblxudG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0WzBdLnB1c2goe1xuICB0aXRsZTogJ0dvIHRvIHdvcmsnLFxuICBkZXNjcmlwdGlvbjogJ0RvIHRoZSBqb2InLFxuICBwcmlvcml0eTogJzQnLFxufSk7XG5cbnRvZG9Qcm9qZWN0cy50b2RvUHJvamVjdFswXS5wdXNoKHtcbiAgdGl0bGU6ICdHZXQgZnJvbSB3b3JrJyxcbiAgZGVzY3JpcHRpb246ICdEbyB5b3VyIG93biBqb2InLFxuICBwcmlvcml0eTogJzMnLFxufSk7XG5cbnRvZG9Qcm9qZWN0cy50b2RvUHJvamVjdFsxXSA9IFtdO1xuXG50b2RvUHJvamVjdHMudG9kb1Byb2plY3RbMV0ucHVzaCh7XG4gIHRpdGxlOiAnR28gdG8gc2Vjb25kIHdvcmsnLFxuICBkZXNjcmlwdGlvbjogJ0RvIHRoZSBzZWNvbmQgam9iJyxcbiAgcHJpb3JpdHk6ICcyJyxcbn0pO1xuXG50b2RvUHJvamVjdHMudG9kb1Byb2plY3RbMV0ucHVzaCh7XG4gIHRpdGxlOiAnR2V0IGZyb20gc2Vjb25kIHdvcmsnLFxuICBkZXNjcmlwdGlvbjogJ0RvIHlvdXIgb3duIHNlY29uZCBqb2InLFxuICBwcmlvcml0eTogJzEnLFxufSk7XG5cbnRvZG9Qcm9qZWN0cy50b2RvUHJvamVjdFsyXSA9IFtdO1xuXG50b2RvUHJvamVjdHMudG9kb1Byb2plY3RbMl0ucHVzaCh7XG4gIHRpdGxlOiAnR28gdG8gc2Vjb25kIHdvcmsyJyxcbiAgZGVzY3JpcHRpb246ICdEbyB0aGUgc2Vjb25kIGpvYicsXG4gIHByaW9yaXR5OiAnMScsXG59KTtcblxudG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0WzJdLnB1c2goe1xuICB0aXRsZTogJ0dldCBmcm9tIHNlY29uZCB3b3JrMicsXG4gIGRlc2NyaXB0aW9uOiAnRG8geW91ciBvd24gc2Vjb25kIGpvYicsXG4gIHByaW9yaXR5OiAnMCcsXG59KTtcblxuZnVuY3Rpb24gbmV3VGFza0Z1bmN0aW9uKCkge1xuICBjb25zb2xlLnRhYmxlKCdhaW5hJyk7XG4gIHRvZG9Qcm9qZWN0cy50b2RvUHJvamVjdC5wdXNoKHRvZG9GYWN0b3J5KCkpO1xufVxuXG5leHBvcnQgeyB0b2RvUHJvamVjdHMgfTtcbmV4cG9ydCB7IG5ld1Rhc2tGdW5jdGlvbiB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9