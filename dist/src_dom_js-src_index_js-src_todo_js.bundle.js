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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0px;\n  margin: 0px;\n  border: 0px;\n}\n\nbody {\n  background-color: rgb(214, 241, 250);\n  display: flex;\n}\n\ncontent {\n  display: flex;\n  background-color: rgb(214, 241, 250);\n  height: 100vh;\n  flex-grow: 1;\n}\n\naside {\n  display: flex;\n  flex-direction: column;\n  width: 15rem;\n  min-width: 10rem;\n  height: 100vw;\n  background-color: rgb(153, 226, 248);\n}\n\nbutton {\n  background-color: azure;\n}\n\nbutton:hover {\n  background-color: rgb(199, 235, 235);\n}\n\n.taskList {\n  margin: 10px;\n  width: 70%;\n  height: 25px;\n  border-radius: 5px;\n  align-self: center;\n}\n\n.listContainer {\n  list-style-type: none;\n  border-bottom: 15px;\n  margin-bottom: 15px;\n  display: flex;\n  flex-direction: column;\n  margin: 15px;\n  flex-grow: 1;\n  min-height: 300px;\n  min-width: 200px;\n  height: fit-content;\n  /* max-width: 300px; */\n  background-color: azure;\n  border-radius: 5px;\n}\n\n.listContainer > * {\n  padding-left: 1rem;\n}\n\n.projectTitle {\n  margin: 5px 0px;\n  border-bottom: solid 5px transparent;\n  border-top: solid 5px transparent;\n}\n\n#newProjectBtn {\n  font-size: large;\n  padding: 10px 0px;\n}\n\n.addTaskBtn {\n  text-align: right;\n  border-bottom: 2px solid;\n  padding-bottom: 15px;\n  padding-right: 1rem;\n  margin: 5px;\n}\n\n.projectContainer {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\n.todoContainer {\n  display: flex;\n  font-size: large;\n  padding-top: 1rem;\n  align-items: baseline;\n}\n\n.todoDescription {\n  padding-left: 3rem;\n  color: steelblue;\n}\n.tododueDate {\n  padding-right: 1rem;\n}\n\n.isChecked {\n  order: -1;\n  margin-right: 5pt;\n}\n\n.addTodoBtnContainer {\n  display: flex;\n  order: 1;\n}\n.addTodoBtn {\n  padding: 5px 10px;\n  border-radius: 5px;\n  background-color: rgb(214, 241, 250);\n  text-align: center;\n  /* width: 100%; */\n  margin: auto;\n  font-size: large;\n  margin-bottom: 5px;\n}\n\n.recycleBtn {\n  margin-right: 1rem;\n  font-size: large;\n}\n\n.todoPriority {\n  text-align: right;\n  flex: 1 0 30%;\n  text-align: right;\n  margin-right: 15pt;\n}\n\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n/* Modal Content/Box */\n.modalContent {\n  background-color: azure;\n  margin: 15% auto; /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%; /* Could be more or less, depending on screen size */\n}\n\n.modalText {\n  padding-top: 5px;\n  text-align: center;\n  font-size: larger;\n  padding: 5px;\n}\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.inputProjectTitle {\n  border: solid 1px black;\n  border-radius: 4px;\n}\n\n.modalInput {\n  width: 31%;\n  border: solid 1px black;\n  border-radius: 4px;\n  margin: 5px;\n  font-size: larger;\n}\n\n#priorityLabel {\n  /* font-size: larger; */\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,WAAW;EACX,WAAW;AACb;;AAEA;EACE,oCAAoC;EACpC,aAAa;AACf;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,oCAAoC;EACpC,iCAAiC;AACnC;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,oBAAoB;EACpB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,oCAAoC;EACpC,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,aAAa,EAAE,sBAAsB;EACrC,eAAe,EAAE,kBAAkB;EACnC,UAAU,EAAE,eAAe;EAC3B,OAAO;EACP,MAAM;EACN,WAAW,EAAE,eAAe;EAC5B,YAAY,EAAE,gBAAgB;EAC9B,cAAc,EAAE,4BAA4B;EAC5C,8BAA8B,EAAE,mBAAmB;EACnD,oCAAoC,EAAE,qBAAqB;AAC7D;;AAEA,sBAAsB;AACtB;EACE,uBAAuB;EACvB,gBAAgB,EAAE,kCAAkC;EACpD,aAAa;EACb,sBAAsB;EACtB,UAAU,EAAE,oDAAoD;AAClE;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;AACd;;AAEA,qBAAqB;AACrB;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;;EAEE,YAAY;EACZ,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,uBAAuB;EACvB,kBAAkB;EAClB,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;AACzB","sourcesContent":["* {\n  padding: 0px;\n  margin: 0px;\n  border: 0px;\n}\n\nbody {\n  background-color: rgb(214, 241, 250);\n  display: flex;\n}\n\ncontent {\n  display: flex;\n  background-color: rgb(214, 241, 250);\n  height: 100vh;\n  flex-grow: 1;\n}\n\naside {\n  display: flex;\n  flex-direction: column;\n  width: 15rem;\n  min-width: 10rem;\n  height: 100vw;\n  background-color: rgb(153, 226, 248);\n}\n\nbutton {\n  background-color: azure;\n}\n\nbutton:hover {\n  background-color: rgb(199, 235, 235);\n}\n\n.taskList {\n  margin: 10px;\n  width: 70%;\n  height: 25px;\n  border-radius: 5px;\n  align-self: center;\n}\n\n.listContainer {\n  list-style-type: none;\n  border-bottom: 15px;\n  margin-bottom: 15px;\n  display: flex;\n  flex-direction: column;\n  margin: 15px;\n  flex-grow: 1;\n  min-height: 300px;\n  min-width: 200px;\n  height: fit-content;\n  /* max-width: 300px; */\n  background-color: azure;\n  border-radius: 5px;\n}\n\n.listContainer > * {\n  padding-left: 1rem;\n}\n\n.projectTitle {\n  margin: 5px 0px;\n  border-bottom: solid 5px transparent;\n  border-top: solid 5px transparent;\n}\n\n#newProjectBtn {\n  font-size: large;\n  padding: 10px 0px;\n}\n\n.addTaskBtn {\n  text-align: right;\n  border-bottom: 2px solid;\n  padding-bottom: 15px;\n  padding-right: 1rem;\n  margin: 5px;\n}\n\n.projectContainer {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\n.todoContainer {\n  display: flex;\n  font-size: large;\n  padding-top: 1rem;\n  align-items: baseline;\n}\n\n.todoDescription {\n  padding-left: 3rem;\n  color: steelblue;\n}\n.tododueDate {\n  padding-right: 1rem;\n}\n\n.isChecked {\n  order: -1;\n  margin-right: 5pt;\n}\n\n.addTodoBtnContainer {\n  display: flex;\n  order: 1;\n}\n.addTodoBtn {\n  padding: 5px 10px;\n  border-radius: 5px;\n  background-color: rgb(214, 241, 250);\n  text-align: center;\n  /* width: 100%; */\n  margin: auto;\n  font-size: large;\n  margin-bottom: 5px;\n}\n\n.recycleBtn {\n  margin-right: 1rem;\n  font-size: large;\n}\n\n.todoPriority {\n  text-align: right;\n  flex: 1 0 30%;\n  text-align: right;\n  margin-right: 15pt;\n}\n\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n/* Modal Content/Box */\n.modalContent {\n  background-color: azure;\n  margin: 15% auto; /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%; /* Could be more or less, depending on screen size */\n}\n\n.modalText {\n  padding-top: 5px;\n  text-align: center;\n  font-size: larger;\n  padding: 5px;\n}\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.inputProjectTitle {\n  border: solid 1px black;\n  border-radius: 4px;\n}\n\n.modalInput {\n  width: 31%;\n  border: solid 1px black;\n  border-radius: 4px;\n  margin: 5px;\n  font-size: larger;\n}\n\n#priorityLabel {\n  /* font-size: larger; */\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "renderAllTodosClick": () => (/* binding */ renderAllTodosClick),
/* harmony export */   "NewProjectModuleEvent": () => (/* binding */ NewProjectModuleEvent)
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

function NewProjectModuleEvent() {
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
  modalText.textContent = 'Enter new project details';
  modalContent.appendChild(modalText);

  let inputProjectTitle = document.createElement('input');
  inputProjectTitle.type = 'text';
  inputProjectTitle.classList.add('modalInput');
  inputProjectTitle.setAttribute('id', 'inputProjectTitle');
  inputProjectTitle.placeholder = 'Enter project title';
  modalContent.appendChild(inputProjectTitle);

  let inputTodoTitle = document.createElement('input');
  inputTodoTitle.type = 'text';
  inputTodoTitle.setAttribute('id', 'inputTodoTitle');
  inputTodoTitle.classList.add('modalInput');
  inputTodoTitle.placeholder = 'Enter todo title';
  modalContent.appendChild(inputTodoTitle);

  let inputTodoDescription = document.createElement('input');
  inputTodoDescription.type = 'text';
  inputTodoDescription.classList.add('modalInput');
  inputTodoDescription.setAttribute('id', 'inputTodoDescription');
  inputTodoDescription.placeholder = 'Enter todo description';
  modalContent.appendChild(inputTodoDescription);

  let inputTodoPriorityContainer = document.createElement('label');
  inputTodoPriorityContainer.setAttribute('id', 'priorityLabel');
  inputTodoPriorityContainer.setAttribute('for', 'inputTodoPriority');
  modalContent.appendChild(inputTodoPriorityContainer);

  let inputTodoPriority = document.createElement('select');
  inputTodoPriority.classList.add('modalInput');
  modalContent.appendChild(inputTodoPriority);

  let inputDate = document.createElement('input');
  inputDate.classList.add('modalInput');
  inputDate.type = 'date';
  inputDate.placeholder = 'click calendar to choose due date';
  // inputDate.classList.add('dateInput');
  modalContent.appendChild(inputDate);

  let priorityList = document.createElement('option');
  priorityList.setAttribute('id', 'priorityList');
  modalContent.appendChild(priorityList);

  let option0 = document.createElement('option');
  option0.setAttribute('value', '');
  option0.textContent = 'Please choose priority';
  inputTodoPriority.appendChild(option0);

  let option1 = document.createElement('option');
  option1.setAttribute('value', 'low');
  option1.textContent = 'Unimportant';
  inputTodoPriority.appendChild(option1);

  let option2 = document.createElement('option');
  option2.setAttribute('value', 'normal');
  option2.textContent = 'Important';
  inputTodoPriority.appendChild(option2);

  let option3 = document.createElement('option');
  option3.setAttribute('value', 'high');
  option3.textContent = 'Very important';
  inputTodoPriority.appendChild(option3);

  let option4 = document.createElement('option');
  option4.setAttribute('value', 'none');
  option4.textContent = 'none';
  inputTodoPriority.appendChild(option4);

  modalContainer.style.display = 'block';
  function closeModal() {
    console.log(inputDate.value);

    modalContainer.style.display = 'none';
  }
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
  newProjectBtnElement.addEventListener('click', _dom_js__WEBPACK_IMPORTED_MODULE_1__.NewProjectModuleEvent);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2RvbV9qcy1zcmNfaW5kZXhfanMtc3JjX3RvZG9fanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLDZDQUE2QyxpQkFBaUIsZ0JBQWdCLGdCQUFnQixHQUFHLFVBQVUseUNBQXlDLGtCQUFrQixHQUFHLGFBQWEsa0JBQWtCLHlDQUF5QyxrQkFBa0IsaUJBQWlCLEdBQUcsV0FBVyxrQkFBa0IsMkJBQTJCLGlCQUFpQixxQkFBcUIsa0JBQWtCLHlDQUF5QyxHQUFHLFlBQVksNEJBQTRCLEdBQUcsa0JBQWtCLHlDQUF5QyxHQUFHLGVBQWUsaUJBQWlCLGVBQWUsaUJBQWlCLHVCQUF1Qix1QkFBdUIsR0FBRyxvQkFBb0IsMEJBQTBCLHdCQUF3Qix3QkFBd0Isa0JBQWtCLDJCQUEyQixpQkFBaUIsaUJBQWlCLHNCQUFzQixxQkFBcUIsd0JBQXdCLHlCQUF5Qiw4QkFBOEIsdUJBQXVCLEdBQUcsd0JBQXdCLHVCQUF1QixHQUFHLG1CQUFtQixvQkFBb0IseUNBQXlDLHNDQUFzQyxHQUFHLG9CQUFvQixxQkFBcUIsc0JBQXNCLEdBQUcsaUJBQWlCLHNCQUFzQiw2QkFBNkIseUJBQXlCLHdCQUF3QixnQkFBZ0IsR0FBRyx1QkFBdUIsa0JBQWtCLDJCQUEyQix1QkFBdUIsR0FBRyxvQkFBb0Isa0JBQWtCLHFCQUFxQixzQkFBc0IsMEJBQTBCLEdBQUcsc0JBQXNCLHVCQUF1QixxQkFBcUIsR0FBRyxnQkFBZ0Isd0JBQXdCLEdBQUcsZ0JBQWdCLGNBQWMsc0JBQXNCLEdBQUcsMEJBQTBCLGtCQUFrQixhQUFhLEdBQUcsZUFBZSxzQkFBc0IsdUJBQXVCLHlDQUF5Qyx1QkFBdUIsb0JBQW9CLG1CQUFtQixxQkFBcUIsdUJBQXVCLEdBQUcsaUJBQWlCLHVCQUF1QixxQkFBcUIsR0FBRyxtQkFBbUIsc0JBQXNCLGtCQUFrQixzQkFBc0IsdUJB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O0FBRUEsZUFBZSxvREFBTTs7QUFFckI7O0FBRTJCO0FBQ0Y7QUFDRTtBQUNEO0FBQ1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxuICBib3JkZXI6IDBweDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAyNDEsIDI1MCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAyNDEsIDI1MCk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG5hc2lkZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxNXJlbTtcXG4gIG1pbi13aWR0aDogMTByZW07XFxuICBoZWlnaHQ6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MywgMjI2LCAyNDgpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk5LCAyMzUsIDIzNSk7XFxufVxcblxcbi50YXNrTGlzdCB7XFxuICBtYXJnaW46IDEwcHg7XFxuICB3aWR0aDogNzAlO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubGlzdENvbnRhaW5lciB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAxNXB4O1xcbiAgZmxleC1ncm93OiAxO1xcbiAgbWluLWhlaWdodDogMzAwcHg7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIC8qIG1heC13aWR0aDogMzAwcHg7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmxpc3RDb250YWluZXIgPiAqIHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuLnByb2plY3RUaXRsZSB7XFxuICBtYXJnaW46IDVweCAwcHg7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCA1cHggdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItdG9wOiBzb2xpZCA1cHggdHJhbnNwYXJlbnQ7XFxufVxcblxcbiNuZXdQcm9qZWN0QnRuIHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBwYWRkaW5nOiAxMHB4IDBweDtcXG59XFxuXFxuLmFkZFRhc2tCdG4ge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuLnByb2plY3RDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50b2RvQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxufVxcblxcbi50b2RvRGVzY3JpcHRpb24ge1xcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcbiAgY29sb3I6IHN0ZWVsYmx1ZTtcXG59XFxuLnRvZG9kdWVEYXRlIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcblxcbi5pc0NoZWNrZWQge1xcbiAgb3JkZXI6IC0xO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHQ7XFxufVxcblxcbi5hZGRUb2RvQnRuQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvcmRlcjogMTtcXG59XFxuLmFkZFRvZG9CdG4ge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAyNDEsIDI1MCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gIG1hcmdpbjogYXV0bztcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5yZWN5Y2xlQnRuIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbi50b2RvUHJpb3JpdHkge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBmbGV4OiAxIDAgMzAlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHQ7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxufVxcblxcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxuLm1vZGFsQ29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG4gIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIHdpZHRoOiA4MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxufVxcblxcbi5tb2RhbFRleHQge1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaW5wdXRQcm9qZWN0VGl0bGUge1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5tb2RhbElucHV0IHtcXG4gIHdpZHRoOiAzMSU7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbiNwcmlvcml0eUxhYmVsIHtcXG4gIC8qIGZvbnQtc2l6ZTogbGFyZ2VyOyAqL1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9DQUFvQztFQUNwQyxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0FBQ1Y7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYSxFQUFFLHNCQUFzQjtFQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0VBQ25DLFVBQVUsRUFBRSxlQUFlO0VBQzNCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVyxFQUFFLGVBQWU7RUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtFQUM5QixjQUFjLEVBQUUsNEJBQTRCO0VBQzVDLDhCQUE4QixFQUFFLG1CQUFtQjtFQUNuRCxvQ0FBb0MsRUFBRSxxQkFBcUI7QUFDN0Q7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQixFQUFFLGtDQUFrQztFQUNwRCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVUsRUFBRSxvREFBb0Q7QUFDbEU7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxuICBib3JkZXI6IDBweDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAyNDEsIDI1MCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAyNDEsIDI1MCk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG5hc2lkZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxNXJlbTtcXG4gIG1pbi13aWR0aDogMTByZW07XFxuICBoZWlnaHQ6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MywgMjI2LCAyNDgpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk5LCAyMzUsIDIzNSk7XFxufVxcblxcbi50YXNrTGlzdCB7XFxuICBtYXJnaW46IDEwcHg7XFxuICB3aWR0aDogNzAlO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubGlzdENvbnRhaW5lciB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAxNXB4O1xcbiAgZmxleC1ncm93OiAxO1xcbiAgbWluLWhlaWdodDogMzAwcHg7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIC8qIG1heC13aWR0aDogMzAwcHg7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmxpc3RDb250YWluZXIgPiAqIHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuLnByb2plY3RUaXRsZSB7XFxuICBtYXJnaW46IDVweCAwcHg7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCA1cHggdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItdG9wOiBzb2xpZCA1cHggdHJhbnNwYXJlbnQ7XFxufVxcblxcbiNuZXdQcm9qZWN0QnRuIHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBwYWRkaW5nOiAxMHB4IDBweDtcXG59XFxuXFxuLmFkZFRhc2tCdG4ge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuLnByb2plY3RDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50b2RvQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxufVxcblxcbi50b2RvRGVzY3JpcHRpb24ge1xcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcbiAgY29sb3I6IHN0ZWVsYmx1ZTtcXG59XFxuLnRvZG9kdWVEYXRlIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcblxcbi5pc0NoZWNrZWQge1xcbiAgb3JkZXI6IC0xO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHQ7XFxufVxcblxcbi5hZGRUb2RvQnRuQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvcmRlcjogMTtcXG59XFxuLmFkZFRvZG9CdG4ge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAyNDEsIDI1MCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gIG1hcmdpbjogYXV0bztcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5yZWN5Y2xlQnRuIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbi50b2RvUHJpb3JpdHkge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBmbGV4OiAxIDAgMzAlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHQ7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxufVxcblxcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxuLm1vZGFsQ29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG4gIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIHdpZHRoOiA4MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxufVxcblxcbi5tb2RhbFRleHQge1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaW5wdXRQcm9qZWN0VGl0bGUge1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5tb2RhbElucHV0IHtcXG4gIHdpZHRoOiAzMSU7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbiNwcmlvcml0eUxhYmVsIHtcXG4gIC8qIGZvbnQtc2l6ZTogbGFyZ2VyOyAqL1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsgZWwgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUnO1xuaW1wb3J0IHsgdG9kb1Byb2plY3RzIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBhZGRUb2RvLCBwcm9qZWN0RmFjdG9yeSwgdXBkYXRlU3RvcmFnZSB9IGZyb20gJy4vdG9kbyc7XG5mdW5jdGlvbiBkb21Db21wb25lbnROYW1lQ2xhc3MobmFtZSwgY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xuICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZG9tUHJvamVjdHNSZW5kZXIoeCkge1xuICBsZXQgcHJvamVjdFRpdGxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcHJvamVjdFRpdGxlRWwudGV4dENvbnRlbnQgPSB0b2RvUHJvamVjdHNbeF0udGl0bGU7XG4gIHByb2plY3RUaXRsZUVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RUaXRsZScpO1xuICBwcm9qZWN0VGl0bGVFbC5kYXRhc2V0LnByb2plY3QgPSB4O1xuICBwcm9qZWN0VGl0bGVFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdGl2ZVByb2plY3RSZW5kZXIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdENvbnRhaW5lcicpLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZUVsKTtcbn1cblxuZnVuY3Rpb24gZG9tVG9kb1JlbmRlcihpLCB4KSB7XG4gIC8vdG9kbyBjb250YWluZXIgcmVuZGVyXG4gIGxldCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgdG9kb0NvbnRhaW5lci5kYXRhc2V0LnByb2plY3QgPSB4O1xuICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9Db250YWluZXInKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwnKS5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKTtcblxuICAvL3RvZG8gdGl0bGUgcmVuZGVyXG4gIGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdG9kb1Byb2plY3RzW3hdLnRvZG9MaXN0W2ldLnRpdGxlO1xuICB0b2RvVGl0bGUuZGF0YXNldC5wcm9qZWN0ID0geDtcbiAgdG9kb1RpdGxlLmRhdGFzZXQudG9kbyA9IGk7XG4gIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcblxuICAvL3RvZG8gZGVzY3JpcHRpb24gcmVuZGVyXG4gIGlmICh0b2RvUHJvamVjdHNbeF0udG9kb0xpc3RbaV0uZGVzY3JpcHRpb24pIHtcbiAgICBsZXQgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICB0b2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvUHJvamVjdHNbeF0udG9kb0xpc3RbaV0uZGVzY3JpcHRpb247XG4gICAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG9EZXNjcmlwdGlvbicpO1xuICAgIHRvZG9EZXNjcmlwdGlvbi5kYXRhc2V0LnByb2plY3QgPSB4O1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJykuYXBwZW5kQ2hpbGQodG9kb0Rlc2NyaXB0aW9uKTtcbiAgfVxuICAvLyBpc0NoZWNrZWQgcmVuZGVyXG4gIGxldCBpc0NoZWNrZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpc0NoZWNrZWQudHlwZSA9ICdjaGVja2JveCc7XG4gIGlzQ2hlY2tlZC52YWx1ZSA9IHRvZG9Qcm9qZWN0c1t4XS50b2RvTGlzdFtpXS5pc0NoZWNrZWQ7XG4gIGlzQ2hlY2tlZC5jbGFzc0xpc3QuYWRkKCdpc0NoZWNrZWQnKTtcbiAgaXNDaGVja2VkLmRhdGFzZXQucHJvamVjdCA9IHg7XG4gIGlzQ2hlY2tlZC5kYXRhc2V0LnRvZG8gPSBpO1xuICBpc0NoZWNrZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja1VuY2hlY2spO1xuICBpZiAodG9kb1Byb2plY3RzW3hdLnRvZG9MaXN0W2ldLmlzQ2hlY2tlZCkge1xuICAgIGlzQ2hlY2tlZC5jaGVja2VkID0gJ2NoZWNrZWQnO1xuICB9XG4gIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoaXNDaGVja2VkKTtcblxuICAvL3ByaW9yaXR5IHJlbmRlclxuICBsZXQgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9Qcmlvcml0eS50ZXh0Q29udGVudCA9IHRvZG9Qcm9qZWN0c1t4XS50b2RvTGlzdFtpXS5wcmlvcml0eTtcbiAgaWYgKHRvZG9Qcm9qZWN0c1t4XS50b2RvTGlzdFtpXS5wcmlvcml0eSA9PSAwKSB7XG4gICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ3VuaW1wb3J0YW50JztcbiAgfVxuICBpZiAodG9kb1Byb2plY3RzW3hdLnRvZG9MaXN0W2ldLnByaW9yaXR5ID09IDEpIHtcbiAgICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnaW1wb3J0YW50JztcbiAgfVxuICBpZiAodG9kb1Byb2plY3RzW3hdLnRvZG9MaXN0W2ldLnByaW9yaXR5ID09IDIpIHtcbiAgICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSAndmVyeSBpbXBvcnRhbnQnO1xuICB9XG4gIGlmICh0b2RvUHJvamVjdHNbeF0udG9kb0xpc3RbaV0ucHJpb3JpdHkgPT0gMykge1xuICAgIHRvZG9Qcmlvcml0eS50ZXh0Q29udGVudCA9ICdVUkdFTlQnO1xuICB9XG4gIGlmIChcbiAgICB0b2RvUHJvamVjdHNbeF0udG9kb0xpc3RbaV0ucHJpb3JpdHkgPCAwIHx8XG4gICAgdG9kb1Byb2plY3RzW3hdLnRvZG9MaXN0W2ldLnByaW9yaXR5ID4gM1xuICApIHtcbiAgICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnJztcbiAgfVxuXG4gIHRvZG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0b2RvUHJpb3JpdHknKTtcbiAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHkpO1xuXG4gIC8vdG9kbyBkdWUgZGF0ZSByZW5kZXJcbiAgaWYgKHRvZG9Qcm9qZWN0c1t4XS50b2RvTGlzdFtpXS5kdWVEYXRlKSB7XG4gICAgbGV0IHRvZG9kdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb2R1ZURhdGUudGV4dENvbnRlbnQgPSB0b2RvUHJvamVjdHNbeF0udG9kb0xpc3RbaV0uZHVlRGF0ZTtcbiAgICB0b2RvZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvZHVlRGF0ZScpO1xuICAgIHRvZG9kdWVEYXRlLmRhdGFzZXQucHJvamVjdCA9IHg7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvZHVlRGF0ZSk7XG4gIH1cbiAgLy90b2RvIGRlbGV0ZSBidXR0b25cbiAgbGV0IHRvZG9EZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgdG9kb0RlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICfwn5eRJztcbiAgdG9kb0RlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdyZWN5Y2xlQnRuJyk7XG4gIHRvZG9EZWxldGVCdG4uZGF0YXNldC5wcm9qZWN0ID0geDtcbiAgdG9kb0RlbGV0ZUJ0bi5kYXRhc2V0LnRvZG8gPSBpO1xuICB0b2RvRGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlVG9kbyk7XG4gIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0RlbGV0ZUJ0bik7XG59XG4vL2Fsc28gYWRkcyArIEFkZCB0b2RvIGJ1dHRvblxuZnVuY3Rpb24gc2VsZWN0aXZlUHJvamVjdFJlbmRlcihlKSB7XG4gIGRlbGV0ZUFsbERvbVRvZG9zKCk7XG4gIHJlbmRlckFsbERvbVRvZG9zKCk7XG4gIGZ1bmN0aW9uIGNoZWNrQW5kRGVsZXRlKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudC5kYXRhc2V0LnByb2plY3QgIT09IHByb2plY3RJbmRleCkge1xuICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG4gIH1cbiAgbGV0IHByb2plY3RJbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdDtcbiAgbGV0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdENvbnRhaW5lcicpO1xuICBsZXQgdG9kb0xpc3QgPSBsaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gIHRvZG9MaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IGNoZWNrQW5kRGVsZXRlKGVsZW1lbnQsIHByb2plY3RJbmRleCkpO1xuXG4gIC8vYWRkIGFkZCB0b2RvIGJ1dHRvbiB0byB0b2RvIGNvbnRhaW5lci5cbiAgbGV0IGFkZFRvZG9CdG5MaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGFkZFRvZG9CdG5MaS5jbGFzc0xpc3QuYWRkKCdhZGRUb2RvQnRuQ29udGFpbmVyJyk7XG4gIGFkZFRvZG9CdG5MaS5kYXRhc2V0LnByb2plY3QgPSBlLnRhcmdldC5kYXRhc2V0LnByb2plY3Q7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Q29udGFpbmVyJykuYXBwZW5kQ2hpbGQoYWRkVG9kb0J0bkxpKTtcbiAgbGV0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWRkVG9kb0J0bi50ZXh0Q29udGVudCA9ICcrIEFkZCB0b2RvJztcbiAgYWRkVG9kb0J0bi5jbGFzc0xpc3QuYWRkKCdhZGRUb2RvQnRuJyk7XG4gIGFkZFRvZG9CdG4uZGF0YXNldC5wcm9qZWN0ID0gZS50YXJnZXQuZGF0YXNldC5wcm9qZWN0O1xuICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVG9kbyk7XG4gIGFkZFRvZG9CdG5MaS5hcHBlbmRDaGlsZChhZGRUb2RvQnRuKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlQWxsRG9tVG9kb3MoKSB7XG4gIGZ1bmN0aW9uIGRlbGV0ZURvbUVsKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnJlbW92ZSgpO1xuICB9XG4gIGxldCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RDb250YWluZXInKTtcbiAgbGV0IHRvZG9Ob2RlcyA9IHRvZG9Db250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbiAgdG9kb05vZGVzLmZvckVhY2goKGVsZW1lbnQpID0+IGRlbGV0ZURvbUVsKGVsZW1lbnQpKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWxsRG9tVG9kb3MoKSB7XG4gIGZvciAobGV0IHggPSAwOyB4IDwgdG9kb1Byb2plY3RzLmxlbmd0aDsgeCsrKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvUHJvamVjdHNbeF0udG9kb0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvbVRvZG9SZW5kZXIoaSwgeCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrVW5jaGVjayhlKSB7XG4gIGxldCBwcm9qZWN0SW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LnByb2plY3Q7XG4gIGxldCB0b2RvSW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LnRvZG87XG4gIGlmICh0b2RvUHJvamVjdHNbcHJvamVjdEluZGV4XS50b2RvTGlzdFt0b2RvSW5kZXhdLmlzQ2hlY2tlZCkge1xuICAgIHRvZG9Qcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9MaXN0W3RvZG9JbmRleF0uaXNDaGVja2VkID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgdG9kb1Byb2plY3RzW3Byb2plY3RJbmRleF0udG9kb0xpc3RbdG9kb0luZGV4XS5pc0NoZWNrZWQgPSB0cnVlO1xuICB9XG4gIHVwZGF0ZVN0b3JhZ2UoKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVG9kbyhlKSB7XG4gIGxldCBwcm9qZWN0SW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LnByb2plY3Q7XG4gIGxldCB0b2RvSW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LnRvZG87XG4gIGNvbnNvbGUubG9nKHRvZG9Qcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9MaXN0W3RvZG9JbmRleF0pO1xuICB0b2RvUHJvamVjdHNbcHJvamVjdEluZGV4XS50b2RvTGlzdC5zcGxpY2UodG9kb0luZGV4LCAxKTtcbiAgaWYgKHRvZG9Qcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9MaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgdG9kb1Byb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICB9XG4gIHVwZGF0ZVN0b3JhZ2UoKTtcbiAgZGVsZXRlQWxsRG9tVG9kb3MoKTtcbiAgcmVuZGVyQWxsRG9tVG9kb3MoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWxsVG9kb3NDbGljaygpIHtcbiAgZGVsZXRlQWxsRG9tVG9kb3MoKTtcbiAgcmVuZGVyQWxsRG9tVG9kb3MoKTtcbn1cblxuZnVuY3Rpb24gTmV3UHJvamVjdE1vZHVsZUV2ZW50KCkge1xuICAvL3Byb2plY3RGYWN0b3J5ID4gcHJvamVjdFRpdGxlLiB0b2RvRmFjdG9yeSA+IHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGVcbiAgbGV0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1vZGFsQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbXlNb2RhbCcpO1xuICBtb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kKG1vZGFsQ29udGFpbmVyKTtcblxuICBsZXQgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbENvbnRlbnQnKTtcbiAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcblxuICBsZXQgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJyk7XG4gIGNsb3NlQnRuLmlubmVySFRNTCA9IGAmdGltZXM7YDtcbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcblxuICBsZXQgbW9kYWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtb2RhbFRleHQuY2xhc3NMaXN0LmFkZCgnbW9kYWxUZXh0Jyk7XG4gIG1vZGFsVGV4dC50ZXh0Q29udGVudCA9ICdFbnRlciBuZXcgcHJvamVjdCBkZXRhaWxzJztcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsVGV4dCk7XG5cbiAgbGV0IGlucHV0UHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXRQcm9qZWN0VGl0bGUudHlwZSA9ICd0ZXh0JztcbiAgaW5wdXRQcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgnbW9kYWxJbnB1dCcpO1xuICBpbnB1dFByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2lucHV0UHJvamVjdFRpdGxlJyk7XG4gIGlucHV0UHJvamVjdFRpdGxlLnBsYWNlaG9sZGVyID0gJ0VudGVyIHByb2plY3QgdGl0bGUnO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoaW5wdXRQcm9qZWN0VGl0bGUpO1xuXG4gIGxldCBpbnB1dFRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0VG9kb1RpdGxlLnR5cGUgPSAndGV4dCc7XG4gIGlucHV0VG9kb1RpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5wdXRUb2RvVGl0bGUnKTtcbiAgaW5wdXRUb2RvVGl0bGUuY2xhc3NMaXN0LmFkZCgnbW9kYWxJbnB1dCcpO1xuICBpbnB1dFRvZG9UaXRsZS5wbGFjZWhvbGRlciA9ICdFbnRlciB0b2RvIHRpdGxlJztcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGlucHV0VG9kb1RpdGxlKTtcblxuICBsZXQgaW5wdXRUb2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dFRvZG9EZXNjcmlwdGlvbi50eXBlID0gJ3RleHQnO1xuICBpbnB1dFRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdtb2RhbElucHV0Jyk7XG4gIGlucHV0VG9kb0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5wdXRUb2RvRGVzY3JpcHRpb24nKTtcbiAgaW5wdXRUb2RvRGVzY3JpcHRpb24ucGxhY2Vob2xkZXIgPSAnRW50ZXIgdG9kbyBkZXNjcmlwdGlvbic7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChpbnB1dFRvZG9EZXNjcmlwdGlvbik7XG5cbiAgbGV0IGlucHV0VG9kb1ByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgaW5wdXRUb2RvUHJpb3JpdHlDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eUxhYmVsJyk7XG4gIGlucHV0VG9kb1ByaW9yaXR5Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2lucHV0VG9kb1ByaW9yaXR5Jyk7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChpbnB1dFRvZG9Qcmlvcml0eUNvbnRhaW5lcik7XG5cbiAgbGV0IGlucHV0VG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGlucHV0VG9kb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ21vZGFsSW5wdXQnKTtcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGlucHV0VG9kb1ByaW9yaXR5KTtcblxuICBsZXQgaW5wdXREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXREYXRlLmNsYXNzTGlzdC5hZGQoJ21vZGFsSW5wdXQnKTtcbiAgaW5wdXREYXRlLnR5cGUgPSAnZGF0ZSc7XG4gIGlucHV0RGF0ZS5wbGFjZWhvbGRlciA9ICdjbGljayBjYWxlbmRhciB0byBjaG9vc2UgZHVlIGRhdGUnO1xuICAvLyBpbnB1dERhdGUuY2xhc3NMaXN0LmFkZCgnZGF0ZUlucHV0Jyk7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChpbnB1dERhdGUpO1xuXG4gIGxldCBwcmlvcml0eUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgcHJpb3JpdHlMaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHlMaXN0Jyk7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChwcmlvcml0eUxpc3QpO1xuXG4gIGxldCBvcHRpb24wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG9wdGlvbjAuc2V0QXR0cmlidXRlKCd2YWx1ZScsICcnKTtcbiAgb3B0aW9uMC50ZXh0Q29udGVudCA9ICdQbGVhc2UgY2hvb3NlIHByaW9yaXR5JztcbiAgaW5wdXRUb2RvUHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uMCk7XG5cbiAgbGV0IG9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgb3B0aW9uMS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xuICBvcHRpb24xLnRleHRDb250ZW50ID0gJ1VuaW1wb3J0YW50JztcbiAgaW5wdXRUb2RvUHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uMSk7XG5cbiAgbGV0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgb3B0aW9uMi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ25vcm1hbCcpO1xuICBvcHRpb24yLnRleHRDb250ZW50ID0gJ0ltcG9ydGFudCc7XG4gIGlucHV0VG9kb1ByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjIpO1xuXG4gIGxldCBvcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG9wdGlvbjMuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdoaWdoJyk7XG4gIG9wdGlvbjMudGV4dENvbnRlbnQgPSAnVmVyeSBpbXBvcnRhbnQnO1xuICBpbnB1dFRvZG9Qcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24zKTtcblxuICBsZXQgb3B0aW9uNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBvcHRpb240LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbm9uZScpO1xuICBvcHRpb240LnRleHRDb250ZW50ID0gJ25vbmUnO1xuICBpbnB1dFRvZG9Qcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb240KTtcblxuICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBjb25zb2xlLmxvZyhpbnB1dERhdGUudmFsdWUpO1xuXG4gICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufVxuZXhwb3J0IHtcbiAgZG9tQ29tcG9uZW50TmFtZUNsYXNzLFxuICBkb21Ub2RvUmVuZGVyLFxuICBkb21Qcm9qZWN0c1JlbmRlcixcbiAgc2VsZWN0aXZlUHJvamVjdFJlbmRlcixcbiAgcmVuZGVyQWxsVG9kb3NDbGljayxcbiAgTmV3UHJvamVjdE1vZHVsZUV2ZW50LFxufTtcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtcbiAgZG9tQ29tcG9uZW50TmFtZUNsYXNzLFxuICBkb21Ub2RvUmVuZGVyLFxuICBkb21Qcm9qZWN0c1JlbmRlciBhcyBkb21Qcm9qZWN0UmVuZGVyLFxuICByZW5kZXJBbGxUb2Rvc0NsaWNrLFxuICBOZXdQcm9qZWN0TW9kdWxlRXZlbnQsXG59IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IHByb2plY3RGYWN0b3J5LCBnZXRMb2NhbFN0b3JhZ2UsIHVwZGF0ZVN0b3JhZ2UgfSBmcm9tICcuL3RvZG8nO1xuXG4vL2xvYWQgc2lkZWJhciBhbmQgY29udGVudCBjb250YWluZXJzXG4oZnVuY3Rpb24gcGFnZUxvYWQoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChkb21Db21wb25lbnROYW1lQ2xhc3MoJ2FzaWRlJykpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50TmFtZUNsYXNzKCdjb250ZW50JykpO1xuXG4gIGxldCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgbGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsaXN0Q29udGFpbmVyJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NvbnRlbnQnKS5hcHBlbmQobGlzdENvbnRhaW5lcik7XG59KSgpO1xuXG4vLyBnZXQgbG9jYWwgc3RvcmFnZSwgaWYgbm9uZSwgbWFrZSBlbXB0eSBhcnJheVxubGV0IHRvZG9Qcm9qZWN0cyA9IGdldExvY2FsU3RvcmFnZSgpO1xuaWYgKCF0b2RvUHJvamVjdHMpIHtcbiAgdG9kb1Byb2plY3RzID0gW107XG59XG5cbi8vIGxvYWQgc2lkZWJhciBidXR0b25zXG5cbi8vXG4vLyAhISEgZml4IGVycm9yIGFmdGVyIHRvZG9saXN0IHByb21wdCBjYW5jZWxcbi8vXG4oZnVuY3Rpb24gc2lkZWJhckxvYWQoKSB7XG4gIGZ1bmN0aW9uIG5ld1Byb2plY3RFdmVudCgpIHtcbiAgICB0b2RvUHJvamVjdHMucHVzaChwcm9qZWN0RmFjdG9yeSgpKTtcbiAgICBpZiAodG9kb1Byb2plY3RzW3RvZG9Qcm9qZWN0cy5sZW5ndGggLSAxXSkge1xuICAgICAgdXBkYXRlU3RvcmFnZSgpO1xuICAgICAgZG9tUHJvamVjdFJlbmRlcih0b2RvUHJvamVjdHMubGVuZ3RoIC0gMSk7XG4gICAgICBkb21Ub2RvUmVuZGVyKFxuICAgICAgICB0b2RvUHJvamVjdHNbdG9kb1Byb2plY3RzLmxlbmd0aCAtIDFdLnRvZG9MaXN0Lmxlbmd0aCAtIDEsXG4gICAgICAgIHRvZG9Qcm9qZWN0cy5sZW5ndGggLSAxXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGxldCBuZXdQcm9qZWN0QnRuID0gZG9tQ29tcG9uZW50TmFtZUNsYXNzKCdidXR0b24nKTtcbiAgbmV3UHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Byb2plY3RCdG4nKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXNpZGUnKS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnRuKS50ZXh0Q29udGVudCA9XG4gICAgJysgTmV3IHByb2plY3QnO1xuICBsZXQgbmV3UHJvamVjdEJ0bkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdEJ0bicpO1xuICBuZXdQcm9qZWN0QnRuRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIE5ld1Byb2plY3RNb2R1bGVFdmVudCk7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJylcbiAgICAuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50TmFtZUNsYXNzKCdidXR0b24nLCAndGFza0xpc3QnKSkudGV4dENvbnRlbnQgPVxuICAgICd0b2RheSc7XG5cbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcignYXNpZGUnKVxuICAgIC5hcHBlbmRDaGlsZChkb21Db21wb25lbnROYW1lQ2xhc3MoJ2J1dHRvbicsICd0YXNrTGlzdCcpKS50ZXh0Q29udGVudCA9XG4gICAgJ3RoaXMgd2Vlayc7XG5cbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcignYXNpZGUnKVxuICAgIC5hcHBlbmRDaGlsZChkb21Db21wb25lbnROYW1lQ2xhc3MoJ2J1dHRvbicsICd0YXNrTGlzdCcpKS50ZXh0Q29udGVudCA9XG4gICAgJ3RoaXMgbW9udGgnO1xuXG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJylcbiAgICAuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50TmFtZUNsYXNzKCdkaXYnLCAncHJvamVjdENvbnRhaW5lcicpKTtcblxuICBsZXQgYWxsVGFza3NFbCA9IGRvbUNvbXBvbmVudE5hbWVDbGFzcygnYnV0dG9uJywgJ3Byb2plY3RUaXRsZScpO1xuICBhbGxUYXNrc0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyQWxsVG9kb3NDbGljayk7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Q29udGFpbmVyJylcbiAgICAuYXBwZW5kQ2hpbGQoYWxsVGFza3NFbCkudGV4dENvbnRlbnQgPSAnQWxsIHRhc2tzJztcbn0pKCk7XG5cbi8vbG9hZCBwcm9qZWN0cyBvbiBzaWRlYmFyIGFuZCB0b2RvcyBvbiBtYWluIGNvbnRlbnRcbihmdW5jdGlvbiBjb250ZW50TG9hZCgpIHtcbiAgZm9yIChsZXQgeCA9IDA7IHggPCB0b2RvUHJvamVjdHMubGVuZ3RoOyB4KyspIHtcbiAgICBkb21Qcm9qZWN0UmVuZGVyKHgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb1Byb2plY3RzW3hdLnRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb21Ub2RvUmVuZGVyKGksIHgpO1xuICAgIH1cbiAgfVxufSkoKTtcblxuLy9nZXRzIHJlcXVpcmVkIGluZm8gZm9yIGxvY2FsIHN0b3JhZ2UgYW5kIHRoZW4gc3RvcmVzIGl0XG5nZXRMb2NhbFN0b3JhZ2UoKTtcbnVwZGF0ZVN0b3JhZ2UoKTtcblxuZXhwb3J0IHsgdG9kb1Byb2plY3RzIH07XG4iLCJpbXBvcnQgeyB0b2RvUHJvamVjdHMgfSBmcm9tICcuJztcbmltcG9ydCB7IGRvbVRvZG9SZW5kZXIgfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5jb25zdCBwcm9qZWN0RmFjdG9yeSA9ICgpID0+IHtcbiAgbGV0IHRpdGxlID0gcHJvbXB0KCdlbnRlciBwcm9qZWN0IHRpdGxlJyk7XG4gIGlmICh0aXRsZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCB0b2RvTGlzdCA9IFtdO1xuICB0b2RvTGlzdC5wdXNoKHRvZG9GYWN0b3J5KCkpO1xuICByZXR1cm4geyB0aXRsZSwgdG9kb0xpc3QgfTtcbn07XG5jb25zdCB0b2RvRmFjdG9yeSA9ICgpID0+IHtcbiAgbGV0IHRpdGxlID0gcHJvbXB0KCdlbnRlciB0b2RvIHRpdGxlJyk7XG4gIGlmICh0aXRsZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBkZXNjcmlwdGlvbiA9IHByb21wdCgnZW50ZXIgZGVzY3JpcHRpb24nKTtcbiAgbGV0IHByaW9yaXR5ID0gcHJvbXB0KFxuICAgICdQcmlvcml0eSBmcm9tIDAgdG8gMy4gbGVzcyBpbXBvcnRhbnQgPCA+IG1vcmUgaW1wb3J0YW50J1xuICApO1xuICBsZXQgZHVlRGF0ZSA9IGZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpO1xuICAvLyBmdW5jdGlvbiAoKXtcbiAgLy8gICBsZXQgeWVhciA9IHByb21wdCgnRW50ZXIgZHVlIGRhdGUgeWVhcicpO1xuICAvLyAgIGlmICh5ZWFyID4gMzAwMCB8fCB5ZWFyIDwgMjAwMCkgcmV0dXJuIGFsZXJ0KCdpbmNvcnJlY3QgeWVhcicpO1xuICAvLyAgIGxldCBtb250aCA9IHByb21wdCgnRW50ZXIgZHVlIGRhdGUgbW9udGgnKTtcbiAgLy8gICBpZlxuICAvLyAgIGxldCBkYXkgPSBwcm9tcHQoJ0VudGVyIGR1ZSBkYXRlIHllYXInKTtcbiAgLy8gfTtcblxuICBsZXQgaXNDaGVja2VkID0gZmFsc2U7XG4gIGxldCBpbmRleCA9IHRvZG9Qcm9qZWN0cy5sZW5ndGg7XG4gIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUsIGlzQ2hlY2tlZCwgaW5kZXggfTtcbn07XG5cbmZ1bmN0aW9uIG5ld1Rhc2tGdW5jdGlvbigpIHt9XG5cbmZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZSgpIHtcbiAgZnVuY3Rpb24gdG9kb1N0clRvT2JqKHN0cmluZykge1xuICAgIHZhciBvYmplY3QgPSBKU09OLnBhcnNlKHN0cmluZyk7XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuICBpZiAodG9kb1N0clRvT2JqKSB7XG4gICAgbGV0IGxvY2FsU3RvcmFnZU9iaiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdHJPYmonKTtcbiAgICBsb2NhbFN0b3JhZ2VPYmogPSB0b2RvU3RyVG9PYmoobG9jYWxTdG9yYWdlT2JqKTtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlT2JqO1xuICB9IGVsc2UgcmV0dXJuICh0b2RvUHJvamVjdHMgPSBbXSk7XG59XG5mdW5jdGlvbiB1cGRhdGVTdG9yYWdlKCkge1xuICBmdW5jdGlvbiB0b2RvT2JqVG9TdHIoKSB7XG4gICAgdmFyIHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHRvZG9Qcm9qZWN0cyk7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdHJPYmonLCB0b2RvT2JqVG9TdHIodG9kb1Byb2plY3RzKSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG8oZSkge1xuICBsZXQgcHJvamVjdEluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5wcm9qZWN0O1xuICB0b2RvUHJvamVjdHNbcHJvamVjdEluZGV4XS50b2RvTGlzdC5wdXNoKHRvZG9GYWN0b3J5KCkpO1xuICBsZXQgbGFzdFRvZG9JbmRleCA9IHRvZG9Qcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9MaXN0Lmxlbmd0aCAtIDE7XG4gIHVwZGF0ZVN0b3JhZ2UoKTtcbiAgZG9tVG9kb1JlbmRlcihsYXN0VG9kb0luZGV4LCBwcm9qZWN0SW5kZXgpO1xuICAvLyBjb25zb2xlLmxvZyh0b2RvUHJvamVjdHNbcHJvamVjdEluZGV4XS50b2RvTGlzdFtsYXN0VG9kb0luZGV4IC0gMV0pO1xuXG4gIC8vIGNvbnNvbGUubG9nKHByb2plY3RJbmRleCk7XG59XG5cbmxldCBkYXRlVGVzdCA9IGZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpO1xuXG5jb25zb2xlLmxvZyhkYXRlVGVzdCk7XG5cbmV4cG9ydCB7IGdldExvY2FsU3RvcmFnZSB9O1xuZXhwb3J0IHsgdXBkYXRlU3RvcmFnZSB9O1xuZXhwb3J0IHsgbmV3VGFza0Z1bmN0aW9uIH07XG5leHBvcnQgeyBwcm9qZWN0RmFjdG9yeSB9O1xuZXhwb3J0IHsgYWRkVG9kbyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9