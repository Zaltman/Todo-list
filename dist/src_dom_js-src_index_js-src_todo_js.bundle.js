"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["src_dom_js-src_index_js-src_todo_js"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0px;\n  margin: 0px;\n  border: 0px;\n}\n\nbody {\n  background-color: rgb(214, 241, 250);\n  display: flex;\n}\n\ncontent {\n  display: flex;\n  background-color: rgb(214, 241, 250);\n  height: 100vh;\n  flex-grow: 1;\n}\n\naside {\n  display: flex;\n  flex-direction: column;\n  width: 15rem;\n  min-width: 10rem;\n  height: 100vw;\n  background-color: rgb(153, 226, 248);\n}\n\nbutton {\n  background-color: azure;\n}\n\nbutton:hover {\n  background-color: rgb(199, 235, 235);\n}\n\n.taskList {\n  margin: 10px;\n  width: 70%;\n  height: 25px;\n  border-radius: 5px;\n  align-self: center;\n}\n\n.listContainer {\n  list-style-type: none;\n  border-bottom: 15px;\n  margin-bottom: 15px;\n  display: flex;\n  flex-direction: column;\n  margin: 15px;\n  flex-grow: 1;\n  min-height: 300px;\n  min-width: 200px;\n  height: fit-content;\n  /* max-width: 300px; */\n  background-color: azure;\n  border-radius: 5px;\n}\n\n.listContainer > * {\n  padding-left: 1rem;\n}\n\n.projectTitle {\n  margin: 5px 0px;\n  border-bottom: solid 5px transparent;\n  border-top: solid 5px transparent;\n}\n\n#newProjectBtn {\n  font-size: large;\n  padding: 10px 0px;\n}\n\n.addTaskBtn {\n  text-align: right;\n  border-bottom: 2px solid;\n  padding-bottom: 15px;\n  padding-right: 1rem;\n  margin: 5px;\n}\n\n.projectContainer {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\n.todoContainer {\n  display: flex;\n  font-size: large;\n  padding-top: 1rem;\n  align-items: baseline;\n}\n\n.todoDescription {\n  padding-left: 3rem;\n  color: steelblue;\n}\n.tododueDate {\n  padding-right: 1rem;\n}\n\n.isChecked {\n  order: -1;\n  margin-right: 5pt;\n}\n\n.addTodoBtnContainer {\n  display: flex;\n  order: 1;\n}\n.addTodoBtn {\n  padding: 5px 10px;\n  border-radius: 5px;\n  background-color: rgb(214, 241, 250);\n  text-align: center;\n  /* width: 100%; */\n  margin: auto;\n  font-size: large;\n  margin-bottom: 5px;\n}\n\n.recycleBtn {\n  margin-right: 1rem;\n  font-size: large;\n}\n\n.todoPriority {\n  text-align: right;\n  flex: 1 0 30%;\n  text-align: right;\n  margin-right: 15pt;\n}\n\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n/* Modal Content/Box */\n.modalContent {\n  background-color: #fefefe;\n  margin: 15% auto; /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%; /* Could be more or less, depending on screen size */\n}\n\n.modalText {\n  padding-top: 5px;\n}\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.inputProjectTitle {\n  border: solid 1px black;\n  border-radius: 4px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,WAAW;EACX,WAAW;AACb;;AAEA;EACE,oCAAoC;EACpC,aAAa;AACf;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,oCAAoC;EACpC,iCAAiC;AACnC;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,oBAAoB;EACpB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,oCAAoC;EACpC,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,aAAa,EAAE,sBAAsB;EACrC,eAAe,EAAE,kBAAkB;EACnC,UAAU,EAAE,eAAe;EAC3B,OAAO;EACP,MAAM;EACN,WAAW,EAAE,eAAe;EAC5B,YAAY,EAAE,gBAAgB;EAC9B,cAAc,EAAE,4BAA4B;EAC5C,8BAA8B,EAAE,mBAAmB;EACnD,oCAAoC,EAAE,qBAAqB;AAC7D;;AAEA,sBAAsB;AACtB;EACE,yBAAyB;EACzB,gBAAgB,EAAE,kCAAkC;EACpD,aAAa;EACb,sBAAsB;EACtB,UAAU,EAAE,oDAAoD;AAClE;;AAEA;EACE,gBAAgB;AAClB;;AAEA,qBAAqB;AACrB;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;;EAEE,YAAY;EACZ,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;AACpB","sourcesContent":["* {\n  padding: 0px;\n  margin: 0px;\n  border: 0px;\n}\n\nbody {\n  background-color: rgb(214, 241, 250);\n  display: flex;\n}\n\ncontent {\n  display: flex;\n  background-color: rgb(214, 241, 250);\n  height: 100vh;\n  flex-grow: 1;\n}\n\naside {\n  display: flex;\n  flex-direction: column;\n  width: 15rem;\n  min-width: 10rem;\n  height: 100vw;\n  background-color: rgb(153, 226, 248);\n}\n\nbutton {\n  background-color: azure;\n}\n\nbutton:hover {\n  background-color: rgb(199, 235, 235);\n}\n\n.taskList {\n  margin: 10px;\n  width: 70%;\n  height: 25px;\n  border-radius: 5px;\n  align-self: center;\n}\n\n.listContainer {\n  list-style-type: none;\n  border-bottom: 15px;\n  margin-bottom: 15px;\n  display: flex;\n  flex-direction: column;\n  margin: 15px;\n  flex-grow: 1;\n  min-height: 300px;\n  min-width: 200px;\n  height: fit-content;\n  /* max-width: 300px; */\n  background-color: azure;\n  border-radius: 5px;\n}\n\n.listContainer > * {\n  padding-left: 1rem;\n}\n\n.projectTitle {\n  margin: 5px 0px;\n  border-bottom: solid 5px transparent;\n  border-top: solid 5px transparent;\n}\n\n#newProjectBtn {\n  font-size: large;\n  padding: 10px 0px;\n}\n\n.addTaskBtn {\n  text-align: right;\n  border-bottom: 2px solid;\n  padding-bottom: 15px;\n  padding-right: 1rem;\n  margin: 5px;\n}\n\n.projectContainer {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\n.todoContainer {\n  display: flex;\n  font-size: large;\n  padding-top: 1rem;\n  align-items: baseline;\n}\n\n.todoDescription {\n  padding-left: 3rem;\n  color: steelblue;\n}\n.tododueDate {\n  padding-right: 1rem;\n}\n\n.isChecked {\n  order: -1;\n  margin-right: 5pt;\n}\n\n.addTodoBtnContainer {\n  display: flex;\n  order: 1;\n}\n.addTodoBtn {\n  padding: 5px 10px;\n  border-radius: 5px;\n  background-color: rgb(214, 241, 250);\n  text-align: center;\n  /* width: 100%; */\n  margin: auto;\n  font-size: large;\n  margin-bottom: 5px;\n}\n\n.recycleBtn {\n  margin-right: 1rem;\n  font-size: large;\n}\n\n.todoPriority {\n  text-align: right;\n  flex: 1 0 30%;\n  text-align: right;\n  margin-right: 15pt;\n}\n\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n/* Modal Content/Box */\n.modalContent {\n  background-color: #fefefe;\n  margin: 15% auto; /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%; /* Could be more or less, depending on screen size */\n}\n\n.modalText {\n  padding-top: 5px;\n}\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.inputProjectTitle {\n  border: solid 1px black;\n  border-radius: 4px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domComponentNameClass": () => (/* binding */ domComponentNameClass),
/* harmony export */   "domTodoRender": () => (/* binding */ domTodoRender),
/* harmony export */   "domProjectsRender": () => (/* binding */ domProjectsRender),
/* harmony export */   "selectiveProjectRender": () => (/* binding */ selectiveProjectRender),
/* harmony export */   "renderAllTodosClick": () => (/* binding */ renderAllTodosClick)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");



function domComponentNameClass(name, className) {
  const element = document.createElement(name);
  if (className) {
    element.classList.add(className);
  }

  return element;
}

function domProjectsRender(x) {
  let projectTitleEl = document.createElement('button');
  projectTitleEl.textContent = ___WEBPACK_IMPORTED_MODULE_0__.todoProjects[x].title;
  projectTitleEl.classList.add('projectTitle');
  projectTitleEl.dataset.project = x;
  projectTitleEl.addEventListener('click', selectiveProjectRender);
  document.querySelector('.projectContainer').appendChild(projectTitleEl);
}

function domTodoRender(i, x) {
  //todo container render
  let todoContainer = document.createElement('li');
  todoContainer.dataset.project = x;
  todoContainer.classList.add('todoContainer');
  document.querySelector('ul').appendChild(todoContainer);

  //todo title render
  let todoTitle = document.createElement('div');
  todoTitle.textContent = ___WEBPACK_IMPORTED_MODULE_0__.todoProjects[x].todoList[i].title;
  todoTitle.dataset.project = x;
  todoTitle.dataset.todo = i;
  todoContainer.appendChild(todoTitle);

  //todo description render
  if (___WEBPACK_IMPORTED_MODULE_0__.todoProjects[x].todoList[i].description) {
    let todoDescription = document.createElement('li');
    todoDescription.textContent = ___WEBPACK_IMPORTED_MODULE_0__.todoProjects[x].todoList[i].description;
    todoDescription.classList.add('todoDescription');
    todoDescription.dataset.project = x;
    document.querySelector('ul').appendChild(todoDescription);
  }
  // isChecked render
  let isChecked = document.createElement('input');
  isChecked.type = 'checkbox';
  isChecked.value = ___WEBPACK_IMPORTED_MODULE_0__.todoProjects[x].todoList[i].isChecked;
  isChecked.classList.add('isChecked');
  isChecked.dataset.project = x;
  isChecked.dataset.todo = i;
  isChecked.addEventListener('click', checkUncheck);
  if (___WEBPACK_IMPORTED_MODULE_0__.todoProjects[x].todoList[i].isChecked) {
    isChecked.checked = 'checked';
  }
  todoContainer.appendChild(isChecked);

  //priority render
  let todoPriority = document.createElement('div');
  todoPriority.textContent = ___WEBPACK_IMPORTED_MODULE_0__.todoProjects[x].todoList[i].priority;
  if (___WEBPACK_IMPORTED_MODULE_0__.todoProjects[x].todoList[i].priority == 0) {
    todoPriority.textContent = 'unimportant';
  }
  if (___WEBPACK_IMPORTED_MODULE_0__.todoProjects[x].todoList[i].priority == 1) {
    todoPriority.textContent = 'important';
  }
  if (___WEBPACK_IMPORTED_MODULE_0__.todoProjects[x].todoList[i].priority == 2) {
    todoPriority.textContent = 'very important';
  }
  if (___WEBPACK_IMPORTED_MODULE_0__.todoProjects[x].todoList[i].priority == 3) {
    todoPriority.textContent = 'URGENT';
  }
  if (
    ___WEBPACK_IMPORTED_MODULE_0__.todoProjects[x].todoList[i].priority < 0 ||
    ___WEBPACK_IMPORTED_MODULE_0__.todoProjects[x].todoList[i].priority > 3
  ) {
    todoPriority.textContent = '';
  }

  todoPriority.classList.add('todoPriority');
  todoContainer.appendChild(todoPriority);

  //todo due date render
  if (___WEBPACK_IMPORTED_MODULE_0__.todoProjects[x].todoList[i].dueDate) {
    let tododueDate = document.createElement('div');
    tododueDate.textContent = ___WEBPACK_IMPORTED_MODULE_0__.todoProjects[x].todoList[i].dueDate;
    tododueDate.classList.add('tododueDate');
    tododueDate.dataset.project = x;
    todoContainer.appendChild(tododueDate);
  }
  //todo delete button
  let todoDeleteBtn = document.createElement('button');
  todoDeleteBtn.textContent = '🗑';
  todoDeleteBtn.classList.add('recycleBtn');
  todoDeleteBtn.dataset.project = x;
  todoDeleteBtn.dataset.todo = i;
  todoDeleteBtn.addEventListener('click', removeTodo);
  todoContainer.appendChild(todoDeleteBtn);
}
//also adds + Add todo button
function selectiveProjectRender(e) {
  deleteAllDomTodos();
  renderAllDomTodos();
  function checkAndDelete(element) {
    if (element.dataset.project !== projectIndex) {
      element.remove();
    }
  }
  let projectIndex = e.target.dataset.project;
  let listContainer = document.querySelector('.listContainer');
  let todoList = listContainer.querySelectorAll('li');
  todoList.forEach((element) => checkAndDelete(element, projectIndex));

  //add add todo button to todo container.
  let addTodoBtnLi = document.createElement('li');
  addTodoBtnLi.classList.add('addTodoBtnContainer');
  addTodoBtnLi.dataset.project = e.target.dataset.project;
  document.querySelector('.listContainer').appendChild(addTodoBtnLi);
  let addTodoBtn = document.createElement('button');
  addTodoBtn.textContent = '+ Add todo';
  addTodoBtn.classList.add('addTodoBtn');
  addTodoBtn.dataset.project = e.target.dataset.project;
  addTodoBtn.addEventListener('click', _todo__WEBPACK_IMPORTED_MODULE_1__.addTodo);
  addTodoBtnLi.appendChild(addTodoBtn);
}

function deleteAllDomTodos() {
  function deleteDomEl(element) {
    element.remove();
  }
  let todoContainer = document.querySelector('.listContainer');
  let todoNodes = todoContainer.querySelectorAll('li');
  todoNodes.forEach((element) => deleteDomEl(element));
}

function renderAllDomTodos() {
  for (let x = 0; x < ___WEBPACK_IMPORTED_MODULE_0__.todoProjects.length; x++) {
    for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.todoProjects[x].todoList.length; i++) {
      domTodoRender(i, x);
    }
  }
}

function checkUncheck(e) {
  let projectIndex = e.target.dataset.project;
  let todoIndex = e.target.dataset.todo;
  if (___WEBPACK_IMPORTED_MODULE_0__.todoProjects[projectIndex].todoList[todoIndex].isChecked) {
    ___WEBPACK_IMPORTED_MODULE_0__.todoProjects[projectIndex].todoList[todoIndex].isChecked = false;
  } else {
    ___WEBPACK_IMPORTED_MODULE_0__.todoProjects[projectIndex].todoList[todoIndex].isChecked = true;
  }
  (0,_todo__WEBPACK_IMPORTED_MODULE_1__.updateStorage)();
}

function removeTodo(e) {
  let projectIndex = e.target.dataset.project;
  let todoIndex = e.target.dataset.todo;
  console.log(___WEBPACK_IMPORTED_MODULE_0__.todoProjects[projectIndex].todoList[todoIndex]);
  ___WEBPACK_IMPORTED_MODULE_0__.todoProjects[projectIndex].todoList.splice(todoIndex, 1);
  if (___WEBPACK_IMPORTED_MODULE_0__.todoProjects[projectIndex].todoList.length == 0) {
    ___WEBPACK_IMPORTED_MODULE_0__.todoProjects.splice(projectIndex, 1);
  }
  (0,_todo__WEBPACK_IMPORTED_MODULE_1__.updateStorage)();
  deleteAllDomTodos();
  renderAllDomTodos();
}

function renderAllTodosClick() {
  deleteAllDomTodos();
  renderAllDomTodos();
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoProjects": () => (/* binding */ todoProjects)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/todo.js");




//load sidebar and content containers
(function pageLoad() {
  document.querySelector('body').appendChild((0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.domComponentNameClass)('aside'));
  document.querySelector('body').appendChild((0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.domComponentNameClass)('content'));

  let listContainer = document.createElement('ul');
  listContainer.classList.add('listContainer');
  document.querySelector('content').append(listContainer);
})();

// get local storage, if none, make empty array
let todoProjects = (0,_todo__WEBPACK_IMPORTED_MODULE_2__.getLocalStorage)();
if (!todoProjects) {
  todoProjects = [];
}

// load sidebar buttons

//
// !!! fix error after todolist prompt cancel
//
(function sidebarLoad() {
  function newProjectEvent() {
    todoProjects.push((0,_todo__WEBPACK_IMPORTED_MODULE_2__.projectFactory)());
    if (todoProjects[todoProjects.length - 1]) {
      (0,_todo__WEBPACK_IMPORTED_MODULE_2__.updateStorage)();
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.domProjectsRender)(todoProjects.length - 1);
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.domTodoRender)(
        todoProjects[todoProjects.length - 1].todoList.length - 1,
        todoProjects.length - 1
      );
    }
  }

  let newProjectBtn = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.domComponentNameClass)('button');
  newProjectBtn.setAttribute('id', 'newProjectBtn');
  document.querySelector('aside').appendChild(newProjectBtn).textContent =
    '+ New project';
  let newProjectBtnElement = document.getElementById('newProjectBtn');
  newProjectBtnElement.addEventListener('click', openModal);
  document
    .querySelector('aside')
    .appendChild((0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.domComponentNameClass)('button', 'taskList')).textContent =
    'today';

  document
    .querySelector('aside')
    .appendChild((0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.domComponentNameClass)('button', 'taskList')).textContent =
    'this week';

  document
    .querySelector('aside')
    .appendChild((0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.domComponentNameClass)('button', 'taskList')).textContent =
    'this month';

  document
    .querySelector('aside')
    .appendChild((0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.domComponentNameClass)('div', 'projectContainer'));

  let allTasksEl = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.domComponentNameClass)('button', 'projectTitle');
  allTasksEl.addEventListener('click', _dom_js__WEBPACK_IMPORTED_MODULE_1__.renderAllTodosClick);
  document
    .querySelector('.projectContainer')
    .appendChild(allTasksEl).textContent = 'All tasks';
})();

//load projects on sidebar and todos on main content
(function contentLoad() {
  for (let x = 0; x < todoProjects.length; x++) {
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.domProjectsRender)(x);
    for (let i = 0; i < todoProjects[x].todoList.length; i++) {
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.domTodoRender)(i, x);
    }
  }
})();
//projectFactory > projectTitle. todoFactory > title, description, priority, dueDate

let modalContainer = document.createElement('div');
modalContainer.setAttribute('id', 'myModal');
modalContainer.classList.add('modal');
document.querySelector('body').append(modalContainer);

let modalContent = document.createElement('div');
modalContent.classList.add('modalContent');
modalContainer.appendChild(modalContent);

let closeBtn = document.createElement('span');
closeBtn.classList.add('close');
closeBtn.innerHTML = `&times;`;
closeBtn.addEventListener('click', closeModal);
modalContent.appendChild(closeBtn);

let modalText = document.createElement('p');
modalText.classList.add('modalText');
modalText.textContent = 'test text';
modalContent.appendChild(modalText);

let inputProjectTitle = document.createElement('input');
inputProjectTitle.type = 'text';
inputProjectTitle.classList.add('inputProjectTitle');
inputProjectTitle.placeholder = 'Enter project title';
modalContent.appendChild(inputProjectTitle);

let inputTodoTitle = document.createElement('input');
inputTodoTitle.type = 'text';
inputTodoTitle.classList.add('inputTodoTitle');
inputTodoTitle.placeholder = 'Enter todo title';
modalContent.appendChild(inputTodoTitle);

let inputTodoDescription = document.createElement('input');
inputTodoDescription.type = 'text';
inputTodoDescription.classList.add('inputTodoDescription');
inputTodoDescription.placeholder = 'Enter todo description';
modalContent.appendChild(inputTodoDescription);

let inputTodoPriorityContainer = document.createElement('label');
inputTodoPriorityContainer.textContent = 'priority, 1 <> 5';
inputTodoPriorityContainer.setAttribute('for', 'inputTodoPriority');
modalContent.appendChild(inputTodoPriorityContainer);

let inputTodoPriority = document.createElement('input');
inputTodoPriority.type = 'number';
inputTodoPriority.setAttribute('min', '1');
inputTodoPriority.setAttribute('max', '5');
inputTodoPriority.setAttribute('id', 'inputTodoPriority');
inputTodoPriority.classList.add('inputTodoPriority');
inputTodoPriorityContainer.appendChild(inputTodoPriority);

let inputDate = document.createElement('input');
inputDate.type = 'date';
inputDate.classList.add('dateInput');
modalContent.appendChild(inputDate);

function openModal() {
  modalContainer.style.display = 'block';
}

function closeModal() {
  console.log(inputDate.value);

  modalContainer.style.display = 'none';
}

//gets required info for local storage and then stores it
(0,_todo__WEBPACK_IMPORTED_MODULE_2__.getLocalStorage)();
(0,_todo__WEBPACK_IMPORTED_MODULE_2__.updateStorage)();




/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocalStorage": () => (/* binding */ getLocalStorage),
/* harmony export */   "updateStorage": () => (/* binding */ updateStorage),
/* harmony export */   "newTaskFunction": () => (/* binding */ newTaskFunction),
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory),
/* harmony export */   "addTodo": () => (/* binding */ addTodo)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");



const projectFactory = () => {
  let title = prompt('enter project title');
  if (title == null) {
    return;
  }
  let todoList = [];
  todoList.push(todoFactory());
  return { title, todoList };
};
const todoFactory = () => {
  let title = prompt('enter todo title');
  if (title == null) {
    return;
  }
  let description = prompt('enter description');
  let priority = prompt(
    'Priority from 0 to 3. less important < > more important'
  );
  let dueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(), 'yyyy-MM-dd');
  // function (){
  //   let year = prompt('Enter due date year');
  //   if (year > 3000 || year < 2000) return alert('incorrect year');
  //   let month = prompt('Enter due date month');
  //   if
  //   let day = prompt('Enter due date year');
  // };

  let isChecked = false;
  let index = ___WEBPACK_IMPORTED_MODULE_0__.todoProjects.length;
  return { title, description, priority, dueDate, isChecked, index };
};

function newTaskFunction() {}

function getLocalStorage() {
  function todoStrToObj(string) {
    var object = JSON.parse(string);
    return object;
  }
  if (todoStrToObj) {
    let localStorageObj = localStorage.getItem('strObj');
    localStorageObj = todoStrToObj(localStorageObj);
    return localStorageObj;
  } else return (___WEBPACK_IMPORTED_MODULE_0__.todoProjects = []);
}
function updateStorage() {
  function todoObjToStr() {
    var string = JSON.stringify(___WEBPACK_IMPORTED_MODULE_0__.todoProjects);
    return string;
  }

  localStorage.setItem('strObj', todoObjToStr(___WEBPACK_IMPORTED_MODULE_0__.todoProjects));
}

function addTodo(e) {
  let projectIndex = e.target.dataset.project;
  ___WEBPACK_IMPORTED_MODULE_0__.todoProjects[projectIndex].todoList.push(todoFactory());
  let lastTodoIndex = ___WEBPACK_IMPORTED_MODULE_0__.todoProjects[projectIndex].todoList.length - 1;
  updateStorage();
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.domTodoRender)(lastTodoIndex, projectIndex);
  // console.log(todoProjects[projectIndex].todoList[lastTodoIndex - 1]);

  // console.log(projectIndex);
}

let dateTest = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(), 'yyyy-MM-dd');

console.log(dateTest);








/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2RvbV9qcy1zcmNfaW5kZXhfanMtc3JjX3RvZG9fanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLDZDQUE2QyxpQkFBaUIsZ0JBQWdCLGdCQUFnQixHQUFHLFVBQVUseUNBQXlDLGtCQUFrQixHQUFHLGFBQWEsa0JBQWtCLHlDQUF5QyxrQkFBa0IsaUJBQWlCLEdBQUcsV0FBVyxrQkFBa0IsMkJBQTJCLGlCQUFpQixxQkFBcUIsa0JBQWtCLHlDQUF5QyxHQUFHLFlBQVksNEJBQTRCLEdBQUcsa0JBQWtCLHlDQUF5QyxHQUFHLGVBQWUsaUJBQWlCLGVBQWUsaUJBQWlCLHVCQUF1Qix1QkFBdUIsR0FBRyxvQkFBb0IsMEJBQTBCLHdCQUF3Qix3QkFBd0Isa0JBQWtCLDJCQUEyQixpQkFBaUIsaUJBQWlCLHNCQUFzQixxQkFBcUIsd0JBQXdCLHlCQUF5Qiw4QkFBOEIsdUJBQXVCLEdBQUcsd0JBQXdCLHVCQUF1QixHQUFHLG1CQUFtQixvQkFBb0IseUNBQXlDLHNDQUFzQyxHQUFHLG9CQUFvQixxQkFBcUIsc0JBQXNCLEdBQUcsaUJBQWlCLHNCQUFzQiw2QkFBNkIseUJBQXlCLHdCQUF3QixnQkFBZ0IsR0FBRyx1QkFBdUIsa0JBQWtCLDJCQUEyQix1QkFBdUIsR0FBRyxvQkFBb0Isa0JBQWtCLHFCQUFxQixzQkFBc0IsMEJBQTBCLEdBQUcsc0JBQXNCLHVCQUF1QixxQkFBcUIsR0FBRyxnQkFBZ0Isd0JBQXdCLEdBQUcsZ0JBQWdCLGNBQWMsc0JBQXNCLEdBQUcsMEJBQTBCLGtCQUFrQixhQUFhLEdBQUcsZUFBZSxzQkFBc0IsdUJBQXVCLHlDQUF5Qyx1QkFBdUIsb0JBQW9CLG1CQUFtQixxQkFBcUIsdUJBQXVCLEdBQUcsaUJBQWlCLHVCQUF1QixxQkFBcUIsR0FBRyxtQkFBbUIsc0JBQXNCLGtCQUFrQixzQkFBc0IsdUJB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O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNEQUFlO0FBQ2Ysb0RBQWE7O0FBRVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SlM7QUFDSztBQUNKO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9EQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxrREFBbUI7QUFDakMsV0FBVztBQUNYOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksYUFBYSwyQ0FBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsMkNBQVk7QUFDNUM7QUFDQTs7QUFFQSw4Q0FBOEMsMkNBQVk7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUUsMkNBQVk7QUFDZCxzQkFBc0IsMkNBQVk7QUFDbEM7QUFDQSxFQUFFLG1EQUFhO0FBQ2Y7O0FBRUE7QUFDQTs7QUFFQSxlQUFlLG9EQUFNOztBQUVyQjs7QUFFMkI7QUFDRjtBQUNFO0FBQ0Q7QUFDUCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIGJvcmRlcjogMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDI0MSwgMjUwKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDI0MSwgMjUwKTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbmFzaWRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgbWluLXdpZHRoOiAxMHJlbTtcXG4gIGhlaWdodDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUzLCAyMjYsIDI0OCk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTksIDIzNSwgMjM1KTtcXG59XFxuXFxuLnRhc2tMaXN0IHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIHdpZHRoOiA3MCU7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5saXN0Q29udGFpbmVyIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDE1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDE1cHg7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgLyogbWF4LXdpZHRoOiAzMDBweDsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubGlzdENvbnRhaW5lciA+ICoge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlIHtcXG4gIG1hcmdpbjogNXB4IDBweDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDVweCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci10b3A6IHNvbGlkIDVweCB0cmFuc3BhcmVudDtcXG59XFxuXFxuI25ld1Byb2plY3RCdG4ge1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIHBhZGRpbmc6IDEwcHggMHB4O1xcbn1cXG5cXG4uYWRkVGFza0J0biB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRvZG9Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuXFxuLnRvZG9EZXNjcmlwdGlvbiB7XFxuICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxuICBjb2xvcjogc3RlZWxibHVlO1xcbn1cXG4udG9kb2R1ZURhdGUge1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuXFxuLmlzQ2hlY2tlZCB7XFxuICBvcmRlcjogLTE7XFxuICBtYXJnaW4tcmlnaHQ6IDVwdDtcXG59XFxuXFxuLmFkZFRvZG9CdG5Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG9yZGVyOiAxO1xcbn1cXG4uYWRkVG9kb0J0biB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDI0MSwgMjUwKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnJlY3ljbGVCdG4ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuLnRvZG9Qcmlvcml0eSB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGZsZXg6IDEgMCAzMCU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIG1hcmdpbi1yaWdodDogMTVwdDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuXFxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4ubW9kYWxDb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICB3aWR0aDogODAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbn1cXG5cXG4ubW9kYWxUZXh0IHtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcblxcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXG4uY2xvc2Uge1xcbiAgY29sb3I6ICNhYWE7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pbnB1dFByb2plY3RUaXRsZSB7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtBQUNWO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWEsRUFBRSxzQkFBc0I7RUFDckMsZUFBZSxFQUFFLGtCQUFrQjtFQUNuQyxVQUFVLEVBQUUsZUFBZTtFQUMzQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVcsRUFBRSxlQUFlO0VBQzVCLFlBQVksRUFBRSxnQkFBZ0I7RUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtFQUM1Qyw4QkFBOEIsRUFBRSxtQkFBbUI7RUFDbkQsb0NBQW9DLEVBQUUscUJBQXFCO0FBQzdEOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0IsRUFBRSxrQ0FBa0M7RUFDcEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVLEVBQUUsb0RBQW9EO0FBQ2xFOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxuICBib3JkZXI6IDBweDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAyNDEsIDI1MCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAyNDEsIDI1MCk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG5hc2lkZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxNXJlbTtcXG4gIG1pbi13aWR0aDogMTByZW07XFxuICBoZWlnaHQ6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MywgMjI2LCAyNDgpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk5LCAyMzUsIDIzNSk7XFxufVxcblxcbi50YXNrTGlzdCB7XFxuICBtYXJnaW46IDEwcHg7XFxuICB3aWR0aDogNzAlO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubGlzdENvbnRhaW5lciB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAxNXB4O1xcbiAgZmxleC1ncm93OiAxO1xcbiAgbWluLWhlaWdodDogMzAwcHg7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIC8qIG1heC13aWR0aDogMzAwcHg7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmxpc3RDb250YWluZXIgPiAqIHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuLnByb2plY3RUaXRsZSB7XFxuICBtYXJnaW46IDVweCAwcHg7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCA1cHggdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItdG9wOiBzb2xpZCA1cHggdHJhbnNwYXJlbnQ7XFxufVxcblxcbiNuZXdQcm9qZWN0QnRuIHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBwYWRkaW5nOiAxMHB4IDBweDtcXG59XFxuXFxuLmFkZFRhc2tCdG4ge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuLnByb2plY3RDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50b2RvQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxufVxcblxcbi50b2RvRGVzY3JpcHRpb24ge1xcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcbiAgY29sb3I6IHN0ZWVsYmx1ZTtcXG59XFxuLnRvZG9kdWVEYXRlIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcblxcbi5pc0NoZWNrZWQge1xcbiAgb3JkZXI6IC0xO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHQ7XFxufVxcblxcbi5hZGRUb2RvQnRuQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvcmRlcjogMTtcXG59XFxuLmFkZFRvZG9CdG4ge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAyNDEsIDI1MCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gIG1hcmdpbjogYXV0bztcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5yZWN5Y2xlQnRuIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbi50b2RvUHJpb3JpdHkge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBmbGV4OiAxIDAgMzAlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHQ7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxufVxcblxcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxuLm1vZGFsQ29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IDgwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG59XFxuXFxuLm1vZGFsVGV4dCB7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbn1cXG5cXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaW5wdXRQcm9qZWN0VGl0bGUge1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgeyBlbCB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZSc7XG5pbXBvcnQgeyB0b2RvUHJvamVjdHMgfSBmcm9tICcuJztcbmltcG9ydCB7IGFkZFRvZG8sIHByb2plY3RGYWN0b3J5LCB1cGRhdGVTdG9yYWdlIH0gZnJvbSAnLi90b2RvJztcbmZ1bmN0aW9uIGRvbUNvbXBvbmVudE5hbWVDbGFzcyhuYW1lLCBjbGFzc05hbWUpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG4gIGlmIChjbGFzc05hbWUpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBkb21Qcm9qZWN0c1JlbmRlcih4KSB7XG4gIGxldCBwcm9qZWN0VGl0bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwcm9qZWN0VGl0bGVFbC50ZXh0Q29udGVudCA9IHRvZG9Qcm9qZWN0c1t4XS50aXRsZTtcbiAgcHJvamVjdFRpdGxlRWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdFRpdGxlJyk7XG4gIHByb2plY3RUaXRsZUVsLmRhdGFzZXQucHJvamVjdCA9IHg7XG4gIHByb2plY3RUaXRsZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0aXZlUHJvamVjdFJlbmRlcik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Q29udGFpbmVyJykuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlRWwpO1xufVxuXG5mdW5jdGlvbiBkb21Ub2RvUmVuZGVyKGksIHgpIHtcbiAgLy90b2RvIGNvbnRhaW5lciByZW5kZXJcbiAgbGV0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICB0b2RvQ29udGFpbmVyLmRhdGFzZXQucHJvamVjdCA9IHg7XG4gIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kb0NvbnRhaW5lcicpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpLmFwcGVuZENoaWxkKHRvZG9Db250YWluZXIpO1xuXG4gIC8vdG9kbyB0aXRsZSByZW5kZXJcbiAgbGV0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvUHJvamVjdHNbeF0udG9kb0xpc3RbaV0udGl0bGU7XG4gIHRvZG9UaXRsZS5kYXRhc2V0LnByb2plY3QgPSB4O1xuICB0b2RvVGl0bGUuZGF0YXNldC50b2RvID0gaTtcbiAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuXG4gIC8vdG9kbyBkZXNjcmlwdGlvbiByZW5kZXJcbiAgaWYgKHRvZG9Qcm9qZWN0c1t4XS50b2RvTGlzdFtpXS5kZXNjcmlwdGlvbikge1xuICAgIGxldCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG9Qcm9qZWN0c1t4XS50b2RvTGlzdFtpXS5kZXNjcmlwdGlvbjtcbiAgICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG9kb0Rlc2NyaXB0aW9uJyk7XG4gICAgdG9kb0Rlc2NyaXB0aW9uLmRhdGFzZXQucHJvamVjdCA9IHg7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwnKS5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb24pO1xuICB9XG4gIC8vIGlzQ2hlY2tlZCByZW5kZXJcbiAgbGV0IGlzQ2hlY2tlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlzQ2hlY2tlZC50eXBlID0gJ2NoZWNrYm94JztcbiAgaXNDaGVja2VkLnZhbHVlID0gdG9kb1Byb2plY3RzW3hdLnRvZG9MaXN0W2ldLmlzQ2hlY2tlZDtcbiAgaXNDaGVja2VkLmNsYXNzTGlzdC5hZGQoJ2lzQ2hlY2tlZCcpO1xuICBpc0NoZWNrZWQuZGF0YXNldC5wcm9qZWN0ID0geDtcbiAgaXNDaGVja2VkLmRhdGFzZXQudG9kbyA9IGk7XG4gIGlzQ2hlY2tlZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrVW5jaGVjayk7XG4gIGlmICh0b2RvUHJvamVjdHNbeF0udG9kb0xpc3RbaV0uaXNDaGVja2VkKSB7XG4gICAgaXNDaGVja2VkLmNoZWNrZWQgPSAnY2hlY2tlZCc7XG4gIH1cbiAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChpc0NoZWNrZWQpO1xuXG4gIC8vcHJpb3JpdHkgcmVuZGVyXG4gIGxldCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gdG9kb1Byb2plY3RzW3hdLnRvZG9MaXN0W2ldLnByaW9yaXR5O1xuICBpZiAodG9kb1Byb2plY3RzW3hdLnRvZG9MaXN0W2ldLnByaW9yaXR5ID09IDApIHtcbiAgICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSAndW5pbXBvcnRhbnQnO1xuICB9XG4gIGlmICh0b2RvUHJvamVjdHNbeF0udG9kb0xpc3RbaV0ucHJpb3JpdHkgPT0gMSkge1xuICAgIHRvZG9Qcmlvcml0eS50ZXh0Q29udGVudCA9ICdpbXBvcnRhbnQnO1xuICB9XG4gIGlmICh0b2RvUHJvamVjdHNbeF0udG9kb0xpc3RbaV0ucHJpb3JpdHkgPT0gMikge1xuICAgIHRvZG9Qcmlvcml0eS50ZXh0Q29udGVudCA9ICd2ZXJ5IGltcG9ydGFudCc7XG4gIH1cbiAgaWYgKHRvZG9Qcm9qZWN0c1t4XS50b2RvTGlzdFtpXS5wcmlvcml0eSA9PSAzKSB7XG4gICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ1VSR0VOVCc7XG4gIH1cbiAgaWYgKFxuICAgIHRvZG9Qcm9qZWN0c1t4XS50b2RvTGlzdFtpXS5wcmlvcml0eSA8IDAgfHxcbiAgICB0b2RvUHJvamVjdHNbeF0udG9kb0xpc3RbaV0ucHJpb3JpdHkgPiAzXG4gICkge1xuICAgIHRvZG9Qcmlvcml0eS50ZXh0Q29udGVudCA9ICcnO1xuICB9XG5cbiAgdG9kb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3RvZG9Qcmlvcml0eScpO1xuICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eSk7XG5cbiAgLy90b2RvIGR1ZSBkYXRlIHJlbmRlclxuICBpZiAodG9kb1Byb2plY3RzW3hdLnRvZG9MaXN0W2ldLmR1ZURhdGUpIHtcbiAgICBsZXQgdG9kb2R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRvZG9Qcm9qZWN0c1t4XS50b2RvTGlzdFtpXS5kdWVEYXRlO1xuICAgIHRvZG9kdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG9kdWVEYXRlJyk7XG4gICAgdG9kb2R1ZURhdGUuZGF0YXNldC5wcm9qZWN0ID0geDtcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9kdWVEYXRlKTtcbiAgfVxuICAvL3RvZG8gZGVsZXRlIGJ1dHRvblxuICBsZXQgdG9kb0RlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICB0b2RvRGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ/Cfl5EnO1xuICB0b2RvRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3JlY3ljbGVCdG4nKTtcbiAgdG9kb0RlbGV0ZUJ0bi5kYXRhc2V0LnByb2plY3QgPSB4O1xuICB0b2RvRGVsZXRlQnRuLmRhdGFzZXQudG9kbyA9IGk7XG4gIHRvZG9EZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVUb2RvKTtcbiAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGVsZXRlQnRuKTtcbn1cbi8vYWxzbyBhZGRzICsgQWRkIHRvZG8gYnV0dG9uXG5mdW5jdGlvbiBzZWxlY3RpdmVQcm9qZWN0UmVuZGVyKGUpIHtcbiAgZGVsZXRlQWxsRG9tVG9kb3MoKTtcbiAgcmVuZGVyQWxsRG9tVG9kb3MoKTtcbiAgZnVuY3Rpb24gY2hlY2tBbmREZWxldGUoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50LmRhdGFzZXQucHJvamVjdCAhPT0gcHJvamVjdEluZGV4KSB7XG4gICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuICBsZXQgcHJvamVjdEluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5wcm9qZWN0O1xuICBsZXQgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Q29udGFpbmVyJyk7XG4gIGxldCB0b2RvTGlzdCA9IGxpc3RDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbiAgdG9kb0xpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4gY2hlY2tBbmREZWxldGUoZWxlbWVudCwgcHJvamVjdEluZGV4KSk7XG5cbiAgLy9hZGQgYWRkIHRvZG8gYnV0dG9uIHRvIHRvZG8gY29udGFpbmVyLlxuICBsZXQgYWRkVG9kb0J0bkxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgYWRkVG9kb0J0bkxpLmNsYXNzTGlzdC5hZGQoJ2FkZFRvZG9CdG5Db250YWluZXInKTtcbiAgYWRkVG9kb0J0bkxpLmRhdGFzZXQucHJvamVjdCA9IGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RDb250YWluZXInKS5hcHBlbmRDaGlsZChhZGRUb2RvQnRuTGkpO1xuICBsZXQgYWRkVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhZGRUb2RvQnRuLnRleHRDb250ZW50ID0gJysgQWRkIHRvZG8nO1xuICBhZGRUb2RvQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZFRvZG9CdG4nKTtcbiAgYWRkVG9kb0J0bi5kYXRhc2V0LnByb2plY3QgPSBlLnRhcmdldC5kYXRhc2V0LnByb2plY3Q7XG4gIGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUb2RvKTtcbiAgYWRkVG9kb0J0bkxpLmFwcGVuZENoaWxkKGFkZFRvZG9CdG4pO1xufVxuXG5mdW5jdGlvbiBkZWxldGVBbGxEb21Ub2RvcygpIHtcbiAgZnVuY3Rpb24gZGVsZXRlRG9tRWwoZWxlbWVudCkge1xuICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cbiAgbGV0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdENvbnRhaW5lcicpO1xuICBsZXQgdG9kb05vZGVzID0gdG9kb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuICB0b2RvTm9kZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4gZGVsZXRlRG9tRWwoZWxlbWVudCkpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJBbGxEb21Ub2RvcygpIHtcbiAgZm9yIChsZXQgeCA9IDA7IHggPCB0b2RvUHJvamVjdHMubGVuZ3RoOyB4KyspIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9Qcm9qZWN0c1t4XS50b2RvTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgZG9tVG9kb1JlbmRlcihpLCB4KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tVbmNoZWNrKGUpIHtcbiAgbGV0IHByb2plY3RJbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdDtcbiAgbGV0IHRvZG9JbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQudG9kbztcbiAgaWYgKHRvZG9Qcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9MaXN0W3RvZG9JbmRleF0uaXNDaGVja2VkKSB7XG4gICAgdG9kb1Byb2plY3RzW3Byb2plY3RJbmRleF0udG9kb0xpc3RbdG9kb0luZGV4XS5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICB0b2RvUHJvamVjdHNbcHJvamVjdEluZGV4XS50b2RvTGlzdFt0b2RvSW5kZXhdLmlzQ2hlY2tlZCA9IHRydWU7XG4gIH1cbiAgdXBkYXRlU3RvcmFnZSgpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVUb2RvKGUpIHtcbiAgbGV0IHByb2plY3RJbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdDtcbiAgbGV0IHRvZG9JbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQudG9kbztcbiAgY29uc29sZS5sb2codG9kb1Byb2plY3RzW3Byb2plY3RJbmRleF0udG9kb0xpc3RbdG9kb0luZGV4XSk7XG4gIHRvZG9Qcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9MaXN0LnNwbGljZSh0b2RvSW5kZXgsIDEpO1xuICBpZiAodG9kb1Byb2plY3RzW3Byb2plY3RJbmRleF0udG9kb0xpc3QubGVuZ3RoID09IDApIHtcbiAgICB0b2RvUHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gIH1cbiAgdXBkYXRlU3RvcmFnZSgpO1xuICBkZWxldGVBbGxEb21Ub2RvcygpO1xuICByZW5kZXJBbGxEb21Ub2RvcygpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJBbGxUb2Rvc0NsaWNrKCkge1xuICBkZWxldGVBbGxEb21Ub2RvcygpO1xuICByZW5kZXJBbGxEb21Ub2RvcygpO1xufVxuZXhwb3J0IHtcbiAgZG9tQ29tcG9uZW50TmFtZUNsYXNzLFxuICBkb21Ub2RvUmVuZGVyLFxuICBkb21Qcm9qZWN0c1JlbmRlcixcbiAgc2VsZWN0aXZlUHJvamVjdFJlbmRlcixcbiAgcmVuZGVyQWxsVG9kb3NDbGljayxcbn07XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7XG4gIGRvbUNvbXBvbmVudE5hbWVDbGFzcyxcbiAgZG9tVG9kb1JlbmRlcixcbiAgZG9tUHJvamVjdHNSZW5kZXIgYXMgZG9tUHJvamVjdFJlbmRlcixcbiAgcmVuZGVyQWxsVG9kb3NDbGljayxcbn0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgcHJvamVjdEZhY3RvcnksIGdldExvY2FsU3RvcmFnZSwgdXBkYXRlU3RvcmFnZSB9IGZyb20gJy4vdG9kbyc7XG5cbi8vbG9hZCBzaWRlYmFyIGFuZCBjb250ZW50IGNvbnRhaW5lcnNcbihmdW5jdGlvbiBwYWdlTG9hZCgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudE5hbWVDbGFzcygnYXNpZGUnKSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChkb21Db21wb25lbnROYW1lQ2xhc3MoJ2NvbnRlbnQnKSk7XG5cbiAgbGV0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBsaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xpc3RDb250YWluZXInKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY29udGVudCcpLmFwcGVuZChsaXN0Q29udGFpbmVyKTtcbn0pKCk7XG5cbi8vIGdldCBsb2NhbCBzdG9yYWdlLCBpZiBub25lLCBtYWtlIGVtcHR5IGFycmF5XG5sZXQgdG9kb1Byb2plY3RzID0gZ2V0TG9jYWxTdG9yYWdlKCk7XG5pZiAoIXRvZG9Qcm9qZWN0cykge1xuICB0b2RvUHJvamVjdHMgPSBbXTtcbn1cblxuLy8gbG9hZCBzaWRlYmFyIGJ1dHRvbnNcblxuLy9cbi8vICEhISBmaXggZXJyb3IgYWZ0ZXIgdG9kb2xpc3QgcHJvbXB0IGNhbmNlbFxuLy9cbihmdW5jdGlvbiBzaWRlYmFyTG9hZCgpIHtcbiAgZnVuY3Rpb24gbmV3UHJvamVjdEV2ZW50KCkge1xuICAgIHRvZG9Qcm9qZWN0cy5wdXNoKHByb2plY3RGYWN0b3J5KCkpO1xuICAgIGlmICh0b2RvUHJvamVjdHNbdG9kb1Byb2plY3RzLmxlbmd0aCAtIDFdKSB7XG4gICAgICB1cGRhdGVTdG9yYWdlKCk7XG4gICAgICBkb21Qcm9qZWN0UmVuZGVyKHRvZG9Qcm9qZWN0cy5sZW5ndGggLSAxKTtcbiAgICAgIGRvbVRvZG9SZW5kZXIoXG4gICAgICAgIHRvZG9Qcm9qZWN0c1t0b2RvUHJvamVjdHMubGVuZ3RoIC0gMV0udG9kb0xpc3QubGVuZ3RoIC0gMSxcbiAgICAgICAgdG9kb1Byb2plY3RzLmxlbmd0aCAtIDFcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgbGV0IG5ld1Byb2plY3RCdG4gPSBkb21Db21wb25lbnROYW1lQ2xhc3MoJ2J1dHRvbicpO1xuICBuZXdQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3UHJvamVjdEJ0bicpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdG4pLnRleHRDb250ZW50ID1cbiAgICAnKyBOZXcgcHJvamVjdCc7XG4gIGxldCBuZXdQcm9qZWN0QnRuRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0QnRuJyk7XG4gIG5ld1Byb2plY3RCdG5FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1vZGFsKTtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcignYXNpZGUnKVxuICAgIC5hcHBlbmRDaGlsZChkb21Db21wb25lbnROYW1lQ2xhc3MoJ2J1dHRvbicsICd0YXNrTGlzdCcpKS50ZXh0Q29udGVudCA9XG4gICAgJ3RvZGF5JztcblxuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpXG4gICAgLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudE5hbWVDbGFzcygnYnV0dG9uJywgJ3Rhc2tMaXN0JykpLnRleHRDb250ZW50ID1cbiAgICAndGhpcyB3ZWVrJztcblxuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpXG4gICAgLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudE5hbWVDbGFzcygnYnV0dG9uJywgJ3Rhc2tMaXN0JykpLnRleHRDb250ZW50ID1cbiAgICAndGhpcyBtb250aCc7XG5cbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcignYXNpZGUnKVxuICAgIC5hcHBlbmRDaGlsZChkb21Db21wb25lbnROYW1lQ2xhc3MoJ2RpdicsICdwcm9qZWN0Q29udGFpbmVyJykpO1xuXG4gIGxldCBhbGxUYXNrc0VsID0gZG9tQ29tcG9uZW50TmFtZUNsYXNzKCdidXR0b24nLCAncHJvamVjdFRpdGxlJyk7XG4gIGFsbFRhc2tzRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJBbGxUb2Rvc0NsaWNrKTtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcignLnByb2plY3RDb250YWluZXInKVxuICAgIC5hcHBlbmRDaGlsZChhbGxUYXNrc0VsKS50ZXh0Q29udGVudCA9ICdBbGwgdGFza3MnO1xufSkoKTtcblxuLy9sb2FkIHByb2plY3RzIG9uIHNpZGViYXIgYW5kIHRvZG9zIG9uIG1haW4gY29udGVudFxuKGZ1bmN0aW9uIGNvbnRlbnRMb2FkKCkge1xuICBmb3IgKGxldCB4ID0gMDsgeCA8IHRvZG9Qcm9qZWN0cy5sZW5ndGg7IHgrKykge1xuICAgIGRvbVByb2plY3RSZW5kZXIoeCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvUHJvamVjdHNbeF0udG9kb0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvbVRvZG9SZW5kZXIoaSwgeCk7XG4gICAgfVxuICB9XG59KSgpO1xuLy9wcm9qZWN0RmFjdG9yeSA+IHByb2plY3RUaXRsZS4gdG9kb0ZhY3RvcnkgPiB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlXG5cbmxldCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubW9kYWxDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdteU1vZGFsJyk7XG5tb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZChtb2RhbENvbnRhaW5lcik7XG5cbmxldCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbENvbnRlbnQnKTtcbm1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XG5cbmxldCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbmNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJyk7XG5jbG9zZUJ0bi5pbm5lckhUTUwgPSBgJnRpbWVzO2A7XG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xubW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcblxubGV0IG1vZGFsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbm1vZGFsVGV4dC5jbGFzc0xpc3QuYWRkKCdtb2RhbFRleHQnKTtcbm1vZGFsVGV4dC50ZXh0Q29udGVudCA9ICd0ZXN0IHRleHQnO1xubW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsVGV4dCk7XG5cbmxldCBpbnB1dFByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5pbnB1dFByb2plY3RUaXRsZS50eXBlID0gJ3RleHQnO1xuaW5wdXRQcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgnaW5wdXRQcm9qZWN0VGl0bGUnKTtcbmlucHV0UHJvamVjdFRpdGxlLnBsYWNlaG9sZGVyID0gJ0VudGVyIHByb2plY3QgdGl0bGUnO1xubW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGlucHV0UHJvamVjdFRpdGxlKTtcblxubGV0IGlucHV0VG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmlucHV0VG9kb1RpdGxlLnR5cGUgPSAndGV4dCc7XG5pbnB1dFRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKCdpbnB1dFRvZG9UaXRsZScpO1xuaW5wdXRUb2RvVGl0bGUucGxhY2Vob2xkZXIgPSAnRW50ZXIgdG9kbyB0aXRsZSc7XG5tb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoaW5wdXRUb2RvVGl0bGUpO1xuXG5sZXQgaW5wdXRUb2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuaW5wdXRUb2RvRGVzY3JpcHRpb24udHlwZSA9ICd0ZXh0JztcbmlucHV0VG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2lucHV0VG9kb0Rlc2NyaXB0aW9uJyk7XG5pbnB1dFRvZG9EZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9ICdFbnRlciB0b2RvIGRlc2NyaXB0aW9uJztcbm1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChpbnB1dFRvZG9EZXNjcmlwdGlvbik7XG5cbmxldCBpbnB1dFRvZG9Qcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5pbnB1dFRvZG9Qcmlvcml0eUNvbnRhaW5lci50ZXh0Q29udGVudCA9ICdwcmlvcml0eSwgMSA8PiA1JztcbmlucHV0VG9kb1ByaW9yaXR5Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2lucHV0VG9kb1ByaW9yaXR5Jyk7XG5tb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoaW5wdXRUb2RvUHJpb3JpdHlDb250YWluZXIpO1xuXG5sZXQgaW5wdXRUb2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuaW5wdXRUb2RvUHJpb3JpdHkudHlwZSA9ICdudW1iZXInO1xuaW5wdXRUb2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdtaW4nLCAnMScpO1xuaW5wdXRUb2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdtYXgnLCAnNScpO1xuaW5wdXRUb2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsICdpbnB1dFRvZG9Qcmlvcml0eScpO1xuaW5wdXRUb2RvUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnaW5wdXRUb2RvUHJpb3JpdHknKTtcbmlucHV0VG9kb1ByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0VG9kb1ByaW9yaXR5KTtcblxubGV0IGlucHV0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5pbnB1dERhdGUudHlwZSA9ICdkYXRlJztcbmlucHV0RGF0ZS5jbGFzc0xpc3QuYWRkKCdkYXRlSW5wdXQnKTtcbm1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChpbnB1dERhdGUpO1xuXG5mdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICBjb25zb2xlLmxvZyhpbnB1dERhdGUudmFsdWUpO1xuXG4gIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbi8vZ2V0cyByZXF1aXJlZCBpbmZvIGZvciBsb2NhbCBzdG9yYWdlIGFuZCB0aGVuIHN0b3JlcyBpdFxuZ2V0TG9jYWxTdG9yYWdlKCk7XG51cGRhdGVTdG9yYWdlKCk7XG5cbmV4cG9ydCB7IHRvZG9Qcm9qZWN0cyB9O1xuIiwiaW1wb3J0IHsgdG9kb1Byb2plY3RzIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBkb21Ub2RvUmVuZGVyIH0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAoKSA9PiB7XG4gIGxldCB0aXRsZSA9IHByb21wdCgnZW50ZXIgcHJvamVjdCB0aXRsZScpO1xuICBpZiAodGl0bGUgPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgdG9kb0xpc3QgPSBbXTtcbiAgdG9kb0xpc3QucHVzaCh0b2RvRmFjdG9yeSgpKTtcbiAgcmV0dXJuIHsgdGl0bGUsIHRvZG9MaXN0IH07XG59O1xuY29uc3QgdG9kb0ZhY3RvcnkgPSAoKSA9PiB7XG4gIGxldCB0aXRsZSA9IHByb21wdCgnZW50ZXIgdG9kbyB0aXRsZScpO1xuICBpZiAodGl0bGUgPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgZGVzY3JpcHRpb24gPSBwcm9tcHQoJ2VudGVyIGRlc2NyaXB0aW9uJyk7XG4gIGxldCBwcmlvcml0eSA9IHByb21wdChcbiAgICAnUHJpb3JpdHkgZnJvbSAwIHRvIDMuIGxlc3MgaW1wb3J0YW50IDwgPiBtb3JlIGltcG9ydGFudCdcbiAgKTtcbiAgbGV0IGR1ZURhdGUgPSBmb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKTtcbiAgLy8gZnVuY3Rpb24gKCl7XG4gIC8vICAgbGV0IHllYXIgPSBwcm9tcHQoJ0VudGVyIGR1ZSBkYXRlIHllYXInKTtcbiAgLy8gICBpZiAoeWVhciA+IDMwMDAgfHwgeWVhciA8IDIwMDApIHJldHVybiBhbGVydCgnaW5jb3JyZWN0IHllYXInKTtcbiAgLy8gICBsZXQgbW9udGggPSBwcm9tcHQoJ0VudGVyIGR1ZSBkYXRlIG1vbnRoJyk7XG4gIC8vICAgaWZcbiAgLy8gICBsZXQgZGF5ID0gcHJvbXB0KCdFbnRlciBkdWUgZGF0ZSB5ZWFyJyk7XG4gIC8vIH07XG5cbiAgbGV0IGlzQ2hlY2tlZCA9IGZhbHNlO1xuICBsZXQgaW5kZXggPSB0b2RvUHJvamVjdHMubGVuZ3RoO1xuICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlLCBpc0NoZWNrZWQsIGluZGV4IH07XG59O1xuXG5mdW5jdGlvbiBuZXdUYXNrRnVuY3Rpb24oKSB7fVxuXG5mdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2UoKSB7XG4gIGZ1bmN0aW9uIHRvZG9TdHJUb09iaihzdHJpbmcpIHtcbiAgICB2YXIgb2JqZWN0ID0gSlNPTi5wYXJzZShzdHJpbmcpO1xuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cbiAgaWYgKHRvZG9TdHJUb09iaikge1xuICAgIGxldCBsb2NhbFN0b3JhZ2VPYmogPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RyT2JqJyk7XG4gICAgbG9jYWxTdG9yYWdlT2JqID0gdG9kb1N0clRvT2JqKGxvY2FsU3RvcmFnZU9iaik7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZU9iajtcbiAgfSBlbHNlIHJldHVybiAodG9kb1Byb2plY3RzID0gW10pO1xufVxuZnVuY3Rpb24gdXBkYXRlU3RvcmFnZSgpIHtcbiAgZnVuY3Rpb24gdG9kb09ialRvU3RyKCkge1xuICAgIHZhciBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh0b2RvUHJvamVjdHMpO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RyT2JqJywgdG9kb09ialRvU3RyKHRvZG9Qcm9qZWN0cykpO1xufVxuXG5mdW5jdGlvbiBhZGRUb2RvKGUpIHtcbiAgbGV0IHByb2plY3RJbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdDtcbiAgdG9kb1Byb2plY3RzW3Byb2plY3RJbmRleF0udG9kb0xpc3QucHVzaCh0b2RvRmFjdG9yeSgpKTtcbiAgbGV0IGxhc3RUb2RvSW5kZXggPSB0b2RvUHJvamVjdHNbcHJvamVjdEluZGV4XS50b2RvTGlzdC5sZW5ndGggLSAxO1xuICB1cGRhdGVTdG9yYWdlKCk7XG4gIGRvbVRvZG9SZW5kZXIobGFzdFRvZG9JbmRleCwgcHJvamVjdEluZGV4KTtcbiAgLy8gY29uc29sZS5sb2codG9kb1Byb2plY3RzW3Byb2plY3RJbmRleF0udG9kb0xpc3RbbGFzdFRvZG9JbmRleCAtIDFdKTtcblxuICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0SW5kZXgpO1xufVxuXG5sZXQgZGF0ZVRlc3QgPSBmb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKTtcblxuY29uc29sZS5sb2coZGF0ZVRlc3QpO1xuXG5leHBvcnQgeyBnZXRMb2NhbFN0b3JhZ2UgfTtcbmV4cG9ydCB7IHVwZGF0ZVN0b3JhZ2UgfTtcbmV4cG9ydCB7IG5ld1Rhc2tGdW5jdGlvbiB9O1xuZXhwb3J0IHsgcHJvamVjdEZhY3RvcnkgfTtcbmV4cG9ydCB7IGFkZFRvZG8gfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==