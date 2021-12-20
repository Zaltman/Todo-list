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
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/todo.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUV3QjtBQUNHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdG9kb0ZhY3RvcnkgPSAoKSA9PiB7XG4gIGxldCB0aXRsZSA9IHByb21wdCgndGl0bGUnKTtcbiAgbGV0IGRlc2NyaXB0aW9uID0gcHJvbXB0KCdkZXNjcmlwdGlvbicpO1xuICBsZXQgcHJpb3JpdHkgPSBwcm9tcHQoXG4gICAgJ1ByaW9yaXR5IGZyb20gMCB0byA0LiBsZXNzIGltcG9ydGFudCA8ID4gbW9yZSBpbXBvcnRhbnQnXG4gICk7XG4gIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkgfTtcbn07XG5jb25zdCB0b2RvUHJvamVjdHMgPSB7fTtcbnRvZG9Qcm9qZWN0cy50b2RvUHJvamVjdCA9IFtdO1xudG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0WzBdID0gW107XG5cbnRvZG9Qcm9qZWN0cy50b2RvUHJvamVjdFswXS5wdXNoKHtcbiAgdGl0bGU6ICdHbyB0byB3b3JrJyxcbiAgZGVzY3JpcHRpb246ICdEbyB0aGUgam9iJyxcbiAgcHJpb3JpdHk6ICc0Jyxcbn0pO1xuXG50b2RvUHJvamVjdHMudG9kb1Byb2plY3RbMF0ucHVzaCh7XG4gIHRpdGxlOiAnR2V0IGZyb20gd29yaycsXG4gIGRlc2NyaXB0aW9uOiAnRG8geW91ciBvd24gam9iJyxcbiAgcHJpb3JpdHk6ICczJyxcbn0pO1xuXG50b2RvUHJvamVjdHMudG9kb1Byb2plY3RbMV0gPSBbXTtcblxudG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0WzFdLnB1c2goe1xuICB0aXRsZTogJ0dvIHRvIHNlY29uZCB3b3JrJyxcbiAgZGVzY3JpcHRpb246ICdEbyB0aGUgc2Vjb25kIGpvYicsXG4gIHByaW9yaXR5OiAnMicsXG59KTtcblxudG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0WzFdLnB1c2goe1xuICB0aXRsZTogJ0dldCBmcm9tIHNlY29uZCB3b3JrJyxcbiAgZGVzY3JpcHRpb246ICdEbyB5b3VyIG93biBzZWNvbmQgam9iJyxcbiAgcHJpb3JpdHk6ICcxJyxcbn0pO1xuXG50b2RvUHJvamVjdHMudG9kb1Byb2plY3RbMl0gPSBbXTtcblxudG9kb1Byb2plY3RzLnRvZG9Qcm9qZWN0WzJdLnB1c2goe1xuICB0aXRsZTogJ0dvIHRvIHNlY29uZCB3b3JrMicsXG4gIGRlc2NyaXB0aW9uOiAnRG8gdGhlIHNlY29uZCBqb2InLFxuICBwcmlvcml0eTogJzEnLFxufSk7XG5cbnRvZG9Qcm9qZWN0cy50b2RvUHJvamVjdFsyXS5wdXNoKHtcbiAgdGl0bGU6ICdHZXQgZnJvbSBzZWNvbmQgd29yazInLFxuICBkZXNjcmlwdGlvbjogJ0RvIHlvdXIgb3duIHNlY29uZCBqb2InLFxuICBwcmlvcml0eTogJzAnLFxufSk7XG5cbmZ1bmN0aW9uIG5ld1Rhc2tGdW5jdGlvbigpIHtcbiAgY29uc29sZS50YWJsZSgnYWluYScpO1xuICB0b2RvQXJyYXkucHVzaCh0b2RvRmFjdG9yeSgpKTtcbn1cbi8vIGNvbnNvbGUudGFibGUoJ3ByYXNpZGVkYScpO1xuLy8gY29uc29sZS50YWJsZSh0b2RvUHJvamVjdHMpO1xuLy8gY29uc29sZS50YWJsZSh0b2RvUHJvamVjdHMudG9kb1Byb2plY3QpO1xuLy8gY29uc29sZS50YWJsZSh0b2RvUHJvamVjdHMudG9kb1Byb2plY3RbMF0pO1xuLy8gY29uc29sZS50YWJsZSh0b2RvUHJvamVjdHMudG9kb1Byb2plY3RbMV0pO1xuXG4vLyBjb25zb2xlLnRhYmxlKCdiYWlnaWFzJyk7XG5cbmV4cG9ydCB7IHRvZG9Qcm9qZWN0cyB9O1xuZXhwb3J0IHsgbmV3VGFza0Z1bmN0aW9uIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=