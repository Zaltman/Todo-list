"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["todo"],{

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoArray": () => (/* binding */ todoArray)
/* harmony export */ });
const todoFactory = () => {
  title = prompt('title');
  description = prompt('description');
  priority = prompt('Priority from 0 to 4');
  return { title, description, priority };
};

const todoArray = [];

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




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/todo.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdG9kb0ZhY3RvcnkgPSAoKSA9PiB7XG4gIHRpdGxlID0gcHJvbXB0KCd0aXRsZScpO1xuICBkZXNjcmlwdGlvbiA9IHByb21wdCgnZGVzY3JpcHRpb24nKTtcbiAgcHJpb3JpdHkgPSBwcm9tcHQoJ1ByaW9yaXR5IGZyb20gMCB0byA0Jyk7XG4gIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkgfTtcbn07XG5cbmNvbnN0IHRvZG9BcnJheSA9IFtdO1xuXG50b2RvQXJyYXkucHVzaCh7XG4gIHRpdGxlOiAnR28gdG8gd29yaycsXG4gIGRlc2NyaXB0aW9uOiAnRG8gdGhlIGpvYicsXG4gIHByaW9yaXR5OiAnNCcsXG59KTtcblxudG9kb0FycmF5LnB1c2goe1xuICB0aXRsZTogJ0dldCBmcm9tIHdvcmsnLFxuICBkZXNjcmlwdGlvbjogJ0RvIHlvdXIgb3duIGpvYicsXG4gIHByaW9yaXR5OiAnMycsXG59KTtcblxuZXhwb3J0IHsgdG9kb0FycmF5IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=