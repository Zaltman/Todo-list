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

function domProjectRender(todoProject) {
  let domProjectTitle = document.createElement('div');
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
}






/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/dom.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFaUM7O0FBRUwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGRvbUNvbXBvbmVudE5hbWVDbGFzcyhuYW1lLCBjbGFzc05hbWUpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG4gIGlmIChjbGFzc05hbWUpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBkb21Qcm9qZWN0UmVuZGVyKHRvZG9Qcm9qZWN0KSB7XG4gIGxldCBkb21Qcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZG9tUHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gdG9kb1Byb2plY3QudGl0bGU7XG4gIGRvbVByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0VGl0bGUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tDb250YWluZXInKS5hcHBlbmRDaGlsZChkb21Qcm9qZWN0VGl0bGUpO1xuXG4gIGxldCBkb21Ub2RvTGlzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRvbVRvZG9MaXN0VGl0bGUudGV4dENvbnRlbnQgPSB0b2RvUHJvamVjdC50b2RvTGlzdFswXS50aXRsZTtcbiAgZG9tVG9kb0xpc3RUaXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvTGlzdFRpdGxlJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrQ29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZG9tVG9kb0xpc3RUaXRsZSk7XG5cbiAgbGV0IGRvbVRvZG9MaXN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZG9tVG9kb0xpc3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG9Qcm9qZWN0LnRvZG9MaXN0WzBdLmRlc2NyaXB0aW9uO1xuICBkb21Ub2RvTGlzdERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG9MaXN0RGVzY3JpcHRpb24nKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tDb250YWluZXInKS5hcHBlbmRDaGlsZChkb21Ub2RvTGlzdERlc2NyaXB0aW9uKTtcblxuICBsZXQgZG9tVG9kb0xpc3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkb21Ub2RvTGlzdFByaW9yaXR5LnRleHRDb250ZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodG9kb1Byb2plY3QudG9kb0xpc3RbMF0ucHJpb3JpdHkgPT0gJzAnKSByZXR1cm4gJ05vdCBpbXBvcnRhbnQnO1xuICAgIGVsc2UgaWYgKHRvZG9Qcm9qZWN0LnRvZG9MaXN0WzBdLnByaW9yaXR5ID09ICcxJylcbiAgICAgIHJldHVybiAnS2luZCBvZiBpbXBvcnRhbnQnO1xuICAgIGVsc2UgaWYgKHRvZG9Qcm9qZWN0LnRvZG9MaXN0WzBdLnByaW9yaXR5ID09ICcyJykgcmV0dXJuICdJbXBvcnRhbnQnO1xuICAgIGVsc2UgaWYgKHRvZG9Qcm9qZWN0LnRvZG9MaXN0WzBdLnByaW9yaXR5ID09ICczJykgcmV0dXJuICdWZXJ5IGltcG9ydGFudCc7XG4gICAgZWxzZSBpZiAodG9kb1Byb2plY3QudG9kb0xpc3RbMF0ucHJpb3JpdHkgPT0gJzQnKVxuICAgICAgcmV0dXJuICdFeHRyZW1lbHkgaW1wb3J0YW50JztcbiAgICBlbHNlIHJldHVybiAnUHJpb3JpdHkgbWlzc2luZyc7XG4gIH0pKCk7XG4gIGRvbVRvZG9MaXN0UHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG9kb0xpc3RQcmlvcml0eScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0NvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRvbVRvZG9MaXN0UHJpb3JpdHkpO1xuXG4gIGxldCBkb21Ub2RvTGlzdER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZG9tVG9kb0xpc3REdWVEYXRlLnRleHRDb250ZW50ID0gdG9kb1Byb2plY3QudG9kb0xpc3RbMF0uZHVlRGF0ZTtcbiAgZG9tVG9kb0xpc3REdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG9MaXN0RHVlRGF0ZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0NvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRvbVRvZG9MaXN0RHVlRGF0ZSk7XG5cbiAgbGV0IGRvbVRvZG9MaXN0SXNDaGVja2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRvbVRvZG9MaXN0SXNDaGVja2VkLnRleHRDb250ZW50ID0gdG9kb1Byb2plY3QudG9kb0xpc3RbMF0uaXNDaGVja2VkO1xuICBkb21Ub2RvTGlzdElzQ2hlY2tlZC5jbGFzc0xpc3QuYWRkKCd0b2RvTGlzdElzQ2hlY2tlZCcpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0NvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRvbVRvZG9MaXN0SXNDaGVja2VkKTtcbn1cblxuZXhwb3J0IHsgZG9tQ29tcG9uZW50TmFtZUNsYXNzIH07XG5cbmV4cG9ydCB7IGRvbVByb2plY3RSZW5kZXIgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==