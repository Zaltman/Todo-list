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
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/todo.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRXdCO0FBQ0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0b2RvRmFjdG9yeSA9ICgpID0+IHtcbiAgbGV0IHRpdGxlID0gcHJvbXB0KCd0aXRsZScpO1xuICBsZXQgZGVzY3JpcHRpb24gPSBwcm9tcHQoJ2Rlc2NyaXB0aW9uJyk7XG4gIGxldCBwcmlvcml0eSA9IHByb21wdChcbiAgICAnUHJpb3JpdHkgZnJvbSAwIHRvIDQuIGxlc3MgaW1wb3J0YW50IDwgPiBtb3JlIGltcG9ydGFudCdcbiAgKTtcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSB9O1xufTtcbmNvbnN0IHRvZG9Qcm9qZWN0cyA9IHt9O1xudG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0ID0gW107XG50b2RvUHJvamVjdHMudG9kb1Byb2plY3RbMF0gPSBbXTtcblxudG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0WzBdLnB1c2goe1xuICB0aXRsZTogJ0dvIHRvIHdvcmsnLFxuICBkZXNjcmlwdGlvbjogJ0RvIHRoZSBqb2InLFxuICBwcmlvcml0eTogJzQnLFxufSk7XG5cbnRvZG9Qcm9qZWN0cy50b2RvUHJvamVjdFswXS5wdXNoKHtcbiAgdGl0bGU6ICdHZXQgZnJvbSB3b3JrJyxcbiAgZGVzY3JpcHRpb246ICdEbyB5b3VyIG93biBqb2InLFxuICBwcmlvcml0eTogJzMnLFxufSk7XG5cbnRvZG9Qcm9qZWN0cy50b2RvUHJvamVjdFsxXSA9IFtdO1xuXG50b2RvUHJvamVjdHMudG9kb1Byb2plY3RbMV0ucHVzaCh7XG4gIHRpdGxlOiAnR28gdG8gc2Vjb25kIHdvcmsnLFxuICBkZXNjcmlwdGlvbjogJ0RvIHRoZSBzZWNvbmQgam9iJyxcbiAgcHJpb3JpdHk6ICcyJyxcbn0pO1xuXG50b2RvUHJvamVjdHMudG9kb1Byb2plY3RbMV0ucHVzaCh7XG4gIHRpdGxlOiAnR2V0IGZyb20gc2Vjb25kIHdvcmsnLFxuICBkZXNjcmlwdGlvbjogJ0RvIHlvdXIgb3duIHNlY29uZCBqb2InLFxuICBwcmlvcml0eTogJzEnLFxufSk7XG5cbnRvZG9Qcm9qZWN0cy50b2RvUHJvamVjdFsyXSA9IFtdO1xuXG50b2RvUHJvamVjdHMudG9kb1Byb2plY3RbMl0ucHVzaCh7XG4gIHRpdGxlOiAnR28gdG8gc2Vjb25kIHdvcmsyJyxcbiAgZGVzY3JpcHRpb246ICdEbyB0aGUgc2Vjb25kIGpvYicsXG4gIHByaW9yaXR5OiAnMScsXG59KTtcblxudG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0WzJdLnB1c2goe1xuICB0aXRsZTogJ0dldCBmcm9tIHNlY29uZCB3b3JrMicsXG4gIGRlc2NyaXB0aW9uOiAnRG8geW91ciBvd24gc2Vjb25kIGpvYicsXG4gIHByaW9yaXR5OiAnMCcsXG59KTtcblxuZnVuY3Rpb24gbmV3VGFza0Z1bmN0aW9uKCkge1xuICBjb25zb2xlLnRhYmxlKCdhaW5hJyk7XG4gIHRvZG9Qcm9qZWN0cy50b2RvUHJvamVjdC5wdXNoKHRvZG9GYWN0b3J5KCkpO1xufVxuXG5leHBvcnQgeyB0b2RvUHJvamVjdHMgfTtcbmV4cG9ydCB7IG5ld1Rhc2tGdW5jdGlvbiB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9