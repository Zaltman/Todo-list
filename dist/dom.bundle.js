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
/* harmony export */   "domProjectRender": () => (/* binding */ domProjectRender)
/* harmony export */ });
function domComponentNameClass(name, className) {
  const element = document.createElement(name);
  if (className) {
    element.classList.add(className);
  }

  return element;
}

function domProjectRender(todoProject, i) {
  let domProjectTitle = document.createElement('h3');
  domProjectTitle.textContent = todoProject.title;
  domProjectTitle.classList.add('projectTitle');
  document.querySelector('.taskContainer').appendChild(domProjectTitle);

  let domTodoListTitle = document.createElement('div');
  domTodoListTitle.textContent = todoProject.todoList[0].title;
  domTodoListTitle.classList.add('todoListTitle');
  document.querySelector('.taskContainer').appendChild(domTodoListTitle);

  let domTodoListDescription = document.createElement('div');
  domTodoListDescription.textContent = todoProject.todoList[0].description;
  domTodoListDescription.classList.add('todoListDescription');
  document.querySelector('.taskContainer').appendChild(domTodoListDescription);

  let domTodoListPriority = document.createElement('div');
  domTodoListPriority.textContent = (function () {
    if (todoProject.todoList[0].priority == '0') return 'Not important';
    else if (todoProject.todoList[0].priority == '1')
      return 'Kind of important';
    else if (todoProject.todoList[0].priority == '2') return 'Important';
    else if (todoProject.todoList[0].priority == '3') return 'Very important';
    else if (todoProject.todoList[0].priority == '4')
      return 'Extremely important';
    else return 'Priority missing';
  })();
  domTodoListPriority.classList.add('todoListPriority');
  document.querySelector('.taskContainer').appendChild(domTodoListPriority);

  let domTodoListDueDate = document.createElement('div');
  domTodoListDueDate.textContent = todoProject.todoList[0].dueDate;
  domTodoListDueDate.classList.add('todoListDueDate');
  document.querySelector('.taskContainer').appendChild(domTodoListDueDate);

  let domTodoListIsChecked = document.createElement('div');
  domTodoListIsChecked.textContent = todoProject.todoList[0].isChecked;
  domTodoListIsChecked.classList.add('todoListIsChecked');
  document.querySelector('.taskContainer').appendChild(domTodoListIsChecked);

  let domProjectAddTodoBtn = document.createElement('button');
  domProjectAddTodoBtn.textContent = '+ Add task';
  domProjectAddTodoBtn.classList.add('addTaskBtn');
  domProjectAddTodoBtn.dataset.index = i;
  document.querySelector('.taskContainer').appendChild(domProjectAddTodoBtn);
}






/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/dom.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVpQzs7QUFFTCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZG9tQ29tcG9uZW50TmFtZUNsYXNzKG5hbWUsIGNsYXNzTmFtZSkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcbiAgaWYgKGNsYXNzTmFtZSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGRvbVByb2plY3RSZW5kZXIodG9kb1Byb2plY3QsIGkpIHtcbiAgbGV0IGRvbVByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGRvbVByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHRvZG9Qcm9qZWN0LnRpdGxlO1xuICBkb21Qcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdFRpdGxlJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrQ29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZG9tUHJvamVjdFRpdGxlKTtcblxuICBsZXQgZG9tVG9kb0xpc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkb21Ub2RvTGlzdFRpdGxlLnRleHRDb250ZW50ID0gdG9kb1Byb2plY3QudG9kb0xpc3RbMF0udGl0bGU7XG4gIGRvbVRvZG9MaXN0VGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kb0xpc3RUaXRsZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0NvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRvbVRvZG9MaXN0VGl0bGUpO1xuXG4gIGxldCBkb21Ub2RvTGlzdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRvbVRvZG9MaXN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvUHJvamVjdC50b2RvTGlzdFswXS5kZXNjcmlwdGlvbjtcbiAgZG9tVG9kb0xpc3REZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvTGlzdERlc2NyaXB0aW9uJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrQ29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZG9tVG9kb0xpc3REZXNjcmlwdGlvbik7XG5cbiAgbGV0IGRvbVRvZG9MaXN0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZG9tVG9kb0xpc3RQcmlvcml0eS50ZXh0Q29udGVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRvZG9Qcm9qZWN0LnRvZG9MaXN0WzBdLnByaW9yaXR5ID09ICcwJykgcmV0dXJuICdOb3QgaW1wb3J0YW50JztcbiAgICBlbHNlIGlmICh0b2RvUHJvamVjdC50b2RvTGlzdFswXS5wcmlvcml0eSA9PSAnMScpXG4gICAgICByZXR1cm4gJ0tpbmQgb2YgaW1wb3J0YW50JztcbiAgICBlbHNlIGlmICh0b2RvUHJvamVjdC50b2RvTGlzdFswXS5wcmlvcml0eSA9PSAnMicpIHJldHVybiAnSW1wb3J0YW50JztcbiAgICBlbHNlIGlmICh0b2RvUHJvamVjdC50b2RvTGlzdFswXS5wcmlvcml0eSA9PSAnMycpIHJldHVybiAnVmVyeSBpbXBvcnRhbnQnO1xuICAgIGVsc2UgaWYgKHRvZG9Qcm9qZWN0LnRvZG9MaXN0WzBdLnByaW9yaXR5ID09ICc0JylcbiAgICAgIHJldHVybiAnRXh0cmVtZWx5IGltcG9ydGFudCc7XG4gICAgZWxzZSByZXR1cm4gJ1ByaW9yaXR5IG1pc3NpbmcnO1xuICB9KSgpO1xuICBkb21Ub2RvTGlzdFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3RvZG9MaXN0UHJpb3JpdHknKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tDb250YWluZXInKS5hcHBlbmRDaGlsZChkb21Ub2RvTGlzdFByaW9yaXR5KTtcblxuICBsZXQgZG9tVG9kb0xpc3REdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRvbVRvZG9MaXN0RHVlRGF0ZS50ZXh0Q29udGVudCA9IHRvZG9Qcm9qZWN0LnRvZG9MaXN0WzBdLmR1ZURhdGU7XG4gIGRvbVRvZG9MaXN0RHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvTGlzdER1ZURhdGUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tDb250YWluZXInKS5hcHBlbmRDaGlsZChkb21Ub2RvTGlzdER1ZURhdGUpO1xuXG4gIGxldCBkb21Ub2RvTGlzdElzQ2hlY2tlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkb21Ub2RvTGlzdElzQ2hlY2tlZC50ZXh0Q29udGVudCA9IHRvZG9Qcm9qZWN0LnRvZG9MaXN0WzBdLmlzQ2hlY2tlZDtcbiAgZG9tVG9kb0xpc3RJc0NoZWNrZWQuY2xhc3NMaXN0LmFkZCgndG9kb0xpc3RJc0NoZWNrZWQnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tDb250YWluZXInKS5hcHBlbmRDaGlsZChkb21Ub2RvTGlzdElzQ2hlY2tlZCk7XG5cbiAgbGV0IGRvbVByb2plY3RBZGRUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGRvbVByb2plY3RBZGRUb2RvQnRuLnRleHRDb250ZW50ID0gJysgQWRkIHRhc2snO1xuICBkb21Qcm9qZWN0QWRkVG9kb0J0bi5jbGFzc0xpc3QuYWRkKCdhZGRUYXNrQnRuJyk7XG4gIGRvbVByb2plY3RBZGRUb2RvQnRuLmRhdGFzZXQuaW5kZXggPSBpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0NvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRvbVByb2plY3RBZGRUb2RvQnRuKTtcbn1cblxuZXhwb3J0IHsgZG9tQ29tcG9uZW50TmFtZUNsYXNzIH07XG5cbmV4cG9ydCB7IGRvbVByb2plY3RSZW5kZXIgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==