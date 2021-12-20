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
  todoArray.push(todoFactory());
}
// console.table('prasideda');
// console.table(todoProjects);
// console.table(todoProjects.todoProject);
// console.table(todoProjects.todoProject[0]);
// console.table(todoProjects.todoProject[1]);

// console.table('baigias');





/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/dom.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtFQUErQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyREFBd0IsQ0FBQyxrRUFBK0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQXdCLENBQUMsa0VBQStCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDJEQUF3QixDQUFDLGtFQUErQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMkRBQXdCLENBQUMsa0VBQStCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwyREFBd0IsQ0FBQyxrRUFBK0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDJEQUF3QixDQUFDLGtFQUErQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVpQztBQUNYOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0R0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUV3QjtBQUNHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b2RvUHJvamVjdHMgfSBmcm9tICcuL3RvZG8nO1xuXG5mdW5jdGlvbiBkb21Db21wb25lbnROYW1lQ2xhc3MobmFtZSwgY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xuICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZG9tTmV3VGFzaygpIHtcbiAgLy8gY29uc29sZS5sb2codG9kb0FycmF5KTtcbiAgLy8gY29uc29sZS5sb2codG9kb0FycmF5Lmxlbmd0aCk7XG4gIC8vIGNvbnNvbGUubG9nKHRvZG9BcnJheVt0b2RvQXJyYXkubGVuZ3RoIC0gMV0pO1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKCcudGFza0NvbnRhaW5lcicpXG4gICAgLmFwcGVuZENoaWxkKFxuICAgICAgZG9tQ29tcG9uZW50TmFtZUNsYXNzKCdsaScsICdvbmVUYXNrQ29udGFpbmVyJylcbiAgICApLmRhdGFzZXQuaW5kZXggPSB0b2RvUHJvamVjdHMudG9kb1Byb2plY3QubGVuZ3RoO1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKCcudGFza0NvbnRhaW5lcicpXG4gICAgLmxhc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQoXG4gICAgICBkb21Db21wb25lbnROYW1lQ2xhc3MoJ2RpdicsICd0YXNrTicpXG4gICAgKS50ZXh0Q29udGVudCA9XG4gICAgdG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0W3RvZG9Qcm9qZWN0cy50b2RvUHJvamVjdC5sZW5ndGggLSAxXS50aXRsZTtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcignLnRhc2tDb250YWluZXInKVxuICAgIC5sYXN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKFxuICAgICAgZG9tQ29tcG9uZW50TmFtZUNsYXNzKCdkaXYnLCAndGFza0QnKVxuICAgICkudGV4dENvbnRlbnQgPVxuICAgIHRvZG9Qcm9qZWN0cy50b2RvUHJvamVjdFt0b2RvUHJvamVjdHMudG9kb1Byb2plY3QubGVuZ3RoIC0gMV0uZGVzY3JpcHRpb247XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoJy50YXNrQ29udGFpbmVyJylcbiAgICAubGFzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChcbiAgICAgIGRvbUNvbXBvbmVudE5hbWVDbGFzcygnZGl2JywgJ3Rhc2tQJylcbiAgICApLnRleHRDb250ZW50ID0gcHJpb3JpdHlUZXh0KCk7XG4gIGZ1bmN0aW9uIHByaW9yaXR5VGV4dCgpIHtcbiAgICBpZiAodG9kb0FycmF5W3RvZG9BcnJheS5sZW5ndGggLSAxXS5wcmlvcml0eSA9PSAwKSByZXR1cm4gJ05vdCBpbXBvcnRhbnQnO1xuICAgIGVsc2UgaWYgKFxuICAgICAgdG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0W3RvZG9Qcm9qZWN0cy50b2RvUHJvamVjdC5sZW5ndGggLSAxXS5wcmlvcml0eSA9PVxuICAgICAgMVxuICAgIClcbiAgICAgIHJldHVybiAnS2luZCBvZiBpbXBvcnRhbnQnO1xuICAgIGVsc2UgaWYgKFxuICAgICAgdG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0W3RvZG9Qcm9qZWN0cy50b2RvUHJvamVjdC5sZW5ndGggLSAxXS5wcmlvcml0eSA9PVxuICAgICAgMlxuICAgIClcbiAgICAgIHJldHVybiAnSW1wb3J0YW50JztcbiAgICBlbHNlIGlmIChcbiAgICAgIHRvZG9Qcm9qZWN0cy50b2RvUHJvamVjdFt0b2RvUHJvamVjdHMudG9kb1Byb2plY3QubGVuZ3RoIC0gMV0ucHJpb3JpdHkgPT1cbiAgICAgIDNcbiAgICApXG4gICAgICByZXR1cm4gJ1ZlcnkgaW1wb3J0YW50JztcbiAgICBlbHNlIGlmIChcbiAgICAgIHRvZG9Qcm9qZWN0cy50b2RvUHJvamVjdFt0b2RvUHJvamVjdHMudG9kb1Byb2plY3QubGVuZ3RoIC0gMV0ucHJpb3JpdHkgPT1cbiAgICAgIDRcbiAgICApXG4gICAgICByZXR1cm4gJ0V4dHJlbWVseSBpbXBvcnRhbnQnO1xuICB9XG59XG5cbmV4cG9ydCB7IGRvbUNvbXBvbmVudE5hbWVDbGFzcyB9O1xuZXhwb3J0IHsgZG9tTmV3VGFzayB9O1xuIiwiY29uc3QgdG9kb0ZhY3RvcnkgPSAoKSA9PiB7XG4gIGxldCB0aXRsZSA9IHByb21wdCgndGl0bGUnKTtcbiAgbGV0IGRlc2NyaXB0aW9uID0gcHJvbXB0KCdkZXNjcmlwdGlvbicpO1xuICBsZXQgcHJpb3JpdHkgPSBwcm9tcHQoXG4gICAgJ1ByaW9yaXR5IGZyb20gMCB0byA0LiBsZXNzIGltcG9ydGFudCA8ID4gbW9yZSBpbXBvcnRhbnQnXG4gICk7XG4gIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkgfTtcbn07XG5jb25zdCB0b2RvUHJvamVjdHMgPSB7fTtcbnRvZG9Qcm9qZWN0cy50b2RvUHJvamVjdCA9IFtdO1xudG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0WzBdID0gW107XG5cbnRvZG9Qcm9qZWN0cy50b2RvUHJvamVjdFswXS5wdXNoKHtcbiAgdGl0bGU6ICdHbyB0byB3b3JrJyxcbiAgZGVzY3JpcHRpb246ICdEbyB0aGUgam9iJyxcbiAgcHJpb3JpdHk6ICc0Jyxcbn0pO1xuXG50b2RvUHJvamVjdHMudG9kb1Byb2plY3RbMF0ucHVzaCh7XG4gIHRpdGxlOiAnR2V0IGZyb20gd29yaycsXG4gIGRlc2NyaXB0aW9uOiAnRG8geW91ciBvd24gam9iJyxcbiAgcHJpb3JpdHk6ICczJyxcbn0pO1xuXG50b2RvUHJvamVjdHMudG9kb1Byb2plY3RbMV0gPSBbXTtcblxudG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0WzFdLnB1c2goe1xuICB0aXRsZTogJ0dvIHRvIHNlY29uZCB3b3JrJyxcbiAgZGVzY3JpcHRpb246ICdEbyB0aGUgc2Vjb25kIGpvYicsXG4gIHByaW9yaXR5OiAnMicsXG59KTtcblxudG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0WzFdLnB1c2goe1xuICB0aXRsZTogJ0dldCBmcm9tIHNlY29uZCB3b3JrJyxcbiAgZGVzY3JpcHRpb246ICdEbyB5b3VyIG93biBzZWNvbmQgam9iJyxcbiAgcHJpb3JpdHk6ICcxJyxcbn0pO1xuXG50b2RvUHJvamVjdHMudG9kb1Byb2plY3RbMl0gPSBbXTtcblxudG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0WzJdLnB1c2goe1xuICB0aXRsZTogJ0dvIHRvIHNlY29uZCB3b3JrMicsXG4gIGRlc2NyaXB0aW9uOiAnRG8gdGhlIHNlY29uZCBqb2InLFxuICBwcmlvcml0eTogJzEnLFxufSk7XG5cbnRvZG9Qcm9qZWN0cy50b2RvUHJvamVjdFsyXS5wdXNoKHtcbiAgdGl0bGU6ICdHZXQgZnJvbSBzZWNvbmQgd29yazInLFxuICBkZXNjcmlwdGlvbjogJ0RvIHlvdXIgb3duIHNlY29uZCBqb2InLFxuICBwcmlvcml0eTogJzAnLFxufSk7XG5cbmZ1bmN0aW9uIG5ld1Rhc2tGdW5jdGlvbigpIHtcbiAgY29uc29sZS50YWJsZSgnYWluYScpO1xuICB0b2RvQXJyYXkucHVzaCh0b2RvRmFjdG9yeSgpKTtcbn1cbi8vIGNvbnNvbGUudGFibGUoJ3ByYXNpZGVkYScpO1xuLy8gY29uc29sZS50YWJsZSh0b2RvUHJvamVjdHMpO1xuLy8gY29uc29sZS50YWJsZSh0b2RvUHJvamVjdHMudG9kb1Byb2plY3QpO1xuLy8gY29uc29sZS50YWJsZSh0b2RvUHJvamVjdHMudG9kb1Byb2plY3RbMF0pO1xuLy8gY29uc29sZS50YWJsZSh0b2RvUHJvamVjdHMudG9kb1Byb2plY3RbMV0pO1xuXG4vLyBjb25zb2xlLnRhYmxlKCdiYWlnaWFzJyk7XG5cbmV4cG9ydCB7IHRvZG9Qcm9qZWN0cyB9O1xuZXhwb3J0IHsgbmV3VGFza0Z1bmN0aW9uIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=