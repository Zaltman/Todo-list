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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0px;\n  margin: 0px;\n  border: 0px;\n}\n\nbody {\n  background-color: rgb(214, 241, 250);\n  display: flex;\n}\n\ncontent {\n  display: flex;\n  background-color: rgb(214, 241, 250);\n  height: 100vh;\n  flex-grow: 1;\n}\n\naside {\n  display: flex;\n  flex-direction: column;\n  width: 15rem;\n  min-width: 10rem;\n  height: 100vw;\n  background-color: rgb(153, 226, 248);\n}\n\nbutton {\n  background-color: azure;\n}\n\nbutton:hover {\n  background-color: rgb(199, 235, 235);\n}\n\n.taskList {\n  margin: 10px;\n  width: 70%;\n  height: 25px;\n  border-radius: 5px;\n  align-self: center;\n}\n\n.listContainer {\n  list-style-type: none;\n  border-bottom: 15px;\n  margin-bottom: 15px;\n  display: flex;\n  flex-direction: column;\n  margin: 15px;\n  flex-grow: 1;\n  min-height: 300px;\n  min-width: 200px;\n  height: fit-content;\n  /* max-width: 300px; */\n  background-color: azure;\n  border-radius: 5px;\n}\n\n.listContainer > * {\n  padding-left: 1rem;\n}\n\n.projectTitle {\n  margin: 5px 0px;\n  border-bottom: solid 5px transparent;\n  border-top: solid 5px transparent;\n}\n\n#newProjectBtn {\n  font-size: large;\n  padding: 10px 0px;\n}\n\n.addTaskBtn {\n  text-align: right;\n  border-bottom: 2px solid;\n  padding-bottom: 15px;\n  padding-right: 1rem;\n  margin: 5px;\n}\n\n.projectContainer {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\n.todoContainer {\n  display: flex;\n  font-size: large;\n  padding-top: 1rem;\n  align-items: baseline;\n}\n\n.todoDescription {\n  padding-left: 3rem;\n  color: steelblue;\n}\n.tododueDate {\n  padding-right: 1rem;\n}\n\n.isChecked {\n  order: -1;\n  margin-right: 5pt;\n}\n\n.addTodoBtnContainer {\n  display: flex;\n  order: 1;\n}\n.addTodoBtn {\n  padding: 5px 10px;\n  border-radius: 5px;\n  background-color: rgb(214, 241, 250);\n  text-align: center;\n  /* width: 100%; */\n  margin: auto;\n  font-size: large;\n  margin-bottom: 5px;\n}\n\n.recycleBtn {\n  margin-right: 1rem;\n  font-size: large;\n}\n\n.todoPriority {\n  text-align: right;\n  flex: 1 0 30%;\n  text-align: right;\n  margin-right: 15pt;\n}\n\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n/* Modal Content/Box */\n.modalContent {\n  display: flex;\n  flex-direction: column;\n  background-color: rgb(214, 241, 250);\n  margin: 15% auto; /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  border-radius: 5px;\n  width: 80%; /* Could be more or less, depending on screen size */\n}\n\n.modalText {\n  padding-top: 5px;\n  text-align: center;\n  font-size: larger;\n  padding: 5px;\n}\n\n/* The Close Button */\n.close {\n  align-self: flex-end;\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.inputProjectTitle {\n  border: solid 1px black;\n  border-radius: 4px;\n}\n\n.modalInput {\n  width: 31%;\n  border: solid 1px black;\n  border-radius: 4px;\n  margin: 5px;\n  font-size: larger;\n  background-color: azure;\n}\n\n.submitBtn {\n  margin-top: 10px;\n  align-self: center;\n  padding: 7px 20px;\n  height: fit-content;\n  width: fit-content;\n  border-radius: 5px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,WAAW;EACX,WAAW;AACb;;AAEA;EACE,oCAAoC;EACpC,aAAa;AACf;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,oCAAoC;EACpC,iCAAiC;AACnC;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,oBAAoB;EACpB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,oCAAoC;EACpC,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,aAAa,EAAE,sBAAsB;EACrC,eAAe,EAAE,kBAAkB;EACnC,UAAU,EAAE,eAAe;EAC3B,OAAO;EACP,MAAM;EACN,WAAW,EAAE,eAAe;EAC5B,YAAY,EAAE,gBAAgB;EAC9B,cAAc,EAAE,4BAA4B;EAC5C,8BAA8B,EAAE,mBAAmB;EACnD,oCAAoC,EAAE,qBAAqB;AAC7D;;AAEA,sBAAsB;AACtB;EACE,aAAa;EACb,sBAAsB;EACtB,oCAAoC;EACpC,gBAAgB,EAAE,kCAAkC;EACpD,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,UAAU,EAAE,oDAAoD;AAClE;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;AACd;;AAEA,qBAAqB;AACrB;EACE,oBAAoB;EACpB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;;EAEE,YAAY;EACZ,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,uBAAuB;EACvB,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;AACpB","sourcesContent":["* {\n  padding: 0px;\n  margin: 0px;\n  border: 0px;\n}\n\nbody {\n  background-color: rgb(214, 241, 250);\n  display: flex;\n}\n\ncontent {\n  display: flex;\n  background-color: rgb(214, 241, 250);\n  height: 100vh;\n  flex-grow: 1;\n}\n\naside {\n  display: flex;\n  flex-direction: column;\n  width: 15rem;\n  min-width: 10rem;\n  height: 100vw;\n  background-color: rgb(153, 226, 248);\n}\n\nbutton {\n  background-color: azure;\n}\n\nbutton:hover {\n  background-color: rgb(199, 235, 235);\n}\n\n.taskList {\n  margin: 10px;\n  width: 70%;\n  height: 25px;\n  border-radius: 5px;\n  align-self: center;\n}\n\n.listContainer {\n  list-style-type: none;\n  border-bottom: 15px;\n  margin-bottom: 15px;\n  display: flex;\n  flex-direction: column;\n  margin: 15px;\n  flex-grow: 1;\n  min-height: 300px;\n  min-width: 200px;\n  height: fit-content;\n  /* max-width: 300px; */\n  background-color: azure;\n  border-radius: 5px;\n}\n\n.listContainer > * {\n  padding-left: 1rem;\n}\n\n.projectTitle {\n  margin: 5px 0px;\n  border-bottom: solid 5px transparent;\n  border-top: solid 5px transparent;\n}\n\n#newProjectBtn {\n  font-size: large;\n  padding: 10px 0px;\n}\n\n.addTaskBtn {\n  text-align: right;\n  border-bottom: 2px solid;\n  padding-bottom: 15px;\n  padding-right: 1rem;\n  margin: 5px;\n}\n\n.projectContainer {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\n.todoContainer {\n  display: flex;\n  font-size: large;\n  padding-top: 1rem;\n  align-items: baseline;\n}\n\n.todoDescription {\n  padding-left: 3rem;\n  color: steelblue;\n}\n.tododueDate {\n  padding-right: 1rem;\n}\n\n.isChecked {\n  order: -1;\n  margin-right: 5pt;\n}\n\n.addTodoBtnContainer {\n  display: flex;\n  order: 1;\n}\n.addTodoBtn {\n  padding: 5px 10px;\n  border-radius: 5px;\n  background-color: rgb(214, 241, 250);\n  text-align: center;\n  /* width: 100%; */\n  margin: auto;\n  font-size: large;\n  margin-bottom: 5px;\n}\n\n.recycleBtn {\n  margin-right: 1rem;\n  font-size: large;\n}\n\n.todoPriority {\n  text-align: right;\n  flex: 1 0 30%;\n  text-align: right;\n  margin-right: 15pt;\n}\n\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n/* Modal Content/Box */\n.modalContent {\n  display: flex;\n  flex-direction: column;\n  background-color: rgb(214, 241, 250);\n  margin: 15% auto; /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  border-radius: 5px;\n  width: 80%; /* Could be more or less, depending on screen size */\n}\n\n.modalText {\n  padding-top: 5px;\n  text-align: center;\n  font-size: larger;\n  padding: 5px;\n}\n\n/* The Close Button */\n.close {\n  align-self: flex-end;\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.inputProjectTitle {\n  border: solid 1px black;\n  border-radius: 4px;\n}\n\n.modalInput {\n  width: 31%;\n  border: solid 1px black;\n  border-radius: 4px;\n  margin: 5px;\n  font-size: larger;\n  background-color: azure;\n}\n\n.submitBtn {\n  margin-top: 10px;\n  align-self: center;\n  padding: 7px 20px;\n  height: fit-content;\n  width: fit-content;\n  border-radius: 5px;\n}\n"],"sourceRoot":""}]);
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

  let inputsContainer = document.createElement('div');
  inputsContainer.classList.add('inputsContainer');
  modalContent.appendChild(inputsContainer);

  let inputProjectTitle = document.createElement('input');
  inputProjectTitle.type = 'text';
  inputProjectTitle.classList.add('modalInput');
  inputProjectTitle.setAttribute('id', 'inputProjectTitle');
  inputProjectTitle.placeholder = 'Enter project title';
  inputsContainer.appendChild(inputProjectTitle);

  let inputTodoTitle = document.createElement('input');
  inputTodoTitle.type = 'text';
  inputTodoTitle.setAttribute('id', 'inputTodoTitle');
  inputTodoTitle.classList.add('modalInput');
  inputTodoTitle.placeholder = 'Enter todo title';
  inputsContainer.appendChild(inputTodoTitle);

  let inputTodoDescription = document.createElement('input');
  inputTodoDescription.type = 'text';
  inputTodoDescription.classList.add('modalInput');
  inputTodoDescription.setAttribute('id', 'inputTodoDescription');
  inputTodoDescription.placeholder = 'Enter todo description';
  inputsContainer.appendChild(inputTodoDescription);

  let inputTodoPriorityContainer = document.createElement('label');
  inputTodoPriorityContainer.setAttribute('id', 'priorityLabel');
  inputTodoPriorityContainer.setAttribute('for', 'inputTodoPriority');
  inputsContainer.appendChild(inputTodoPriorityContainer);

  let inputTodoPriority = document.createElement('select');
  inputTodoPriority.classList.add('modalInput');
  inputTodoPriority.setAttribute('id', 'choosePriority');
  inputsContainer.appendChild(inputTodoPriority);

  let inputDate = document.createElement('input');
  inputDate.classList.add('modalInput');
  inputDate.type = 'date';
  inputDate.setAttribute('id', 'inputDate');
  inputDate.placeholder = 'click calendar to choose due date';
  inputsContainer.appendChild(inputDate);

  let submitBtn = document.createElement('button');
  submitBtn.textContent = 'Submit';
  submitBtn.classList.add('submitBtn');
  submitBtn.addEventListener('click', submitNewProject);
  modalContent.append(submitBtn);

  // let priorityList = document.createElement('option');
  // priorityList.setAttribute('id', 'priorityList');
  // modalContent.appendChild(priorityList);

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
    modalContainer.style.display = 'none';
  }
}

function submitNewProject() {
  ___WEBPACK_IMPORTED_MODULE_0__.todoProjects.push((0,_todo__WEBPACK_IMPORTED_MODULE_1__.projectFactory)());
  if (___WEBPACK_IMPORTED_MODULE_0__.todoProjects[___WEBPACK_IMPORTED_MODULE_0__.todoProjects.length - 1]) {
    (0,_todo__WEBPACK_IMPORTED_MODULE_1__.updateStorage)();
    domProjectsRender(___WEBPACK_IMPORTED_MODULE_0__.todoProjects.length - 1);
    domTodoRender(
      ___WEBPACK_IMPORTED_MODULE_0__.todoProjects[___WEBPACK_IMPORTED_MODULE_0__.todoProjects.length - 1].todoList.length - 1,
      ___WEBPACK_IMPORTED_MODULE_0__.todoProjects.length - 1
    );
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
/* harmony export */   "todoFactory": () => (/* binding */ todoFactory),
/* harmony export */   "addTodo": () => (/* binding */ addTodo)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");




const projectFactory = () => {
  let title = document.querySelector('#inputProjectTitle').value;
  if (title == null) {
    return;
  }
  let todoList = [];
  todoList.push(todoFactory());
  return { title, todoList };
};
const todoFactory = () => {
  let title = document.querySelector('#inputTodoTitle').value;
  if (title == null) {
    title = 'title missing';
  }
  let description = document.querySelector('#inputTodoDescription').value;
  let priority = document.querySelector('#choosePriority').value;
  let dueDate = document.querySelector('#inputDate').value;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2RvbV9qcy1zcmNfaW5kZXhfanMtc3JjX3RvZG9fanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLDZDQUE2QyxpQkFBaUIsZ0JBQWdCLGdCQUFnQixHQUFHLFVBQVUseUNBQXlDLGtCQUFrQixHQUFHLGFBQWEsa0JBQWtCLHlDQUF5QyxrQkFBa0IsaUJBQWlCLEdBQUcsV0FBVyxrQkFBa0IsMkJBQTJCLGlCQUFpQixxQkFBcUIsa0JBQWtCLHlDQUF5QyxHQUFHLFlBQVksNEJBQTRCLEdBQUcsa0JBQWtCLHlDQUF5QyxHQUFHLGVBQWUsaUJBQWlCLGVBQWUsaUJBQWlCLHVCQUF1Qix1QkFBdUIsR0FBRyxvQkFBb0IsMEJBQTBCLHdCQUF3Qix3QkFBd0Isa0JBQWtCLDJCQUEyQixpQkFBaUIsaUJBQWlCLHNCQUFzQixxQkFBcUIsd0JBQXdCLHlCQUF5Qiw4QkFBOEIsdUJBQXVCLEdBQUcsd0JBQXdCLHVCQUF1QixHQUFHLG1CQUFtQixvQkFBb0IseUNBQXlDLHNDQUFzQyxHQUFHLG9CQUFvQixxQkFBcUIsc0JBQXNCLEdBQUcsaUJBQWlCLHNCQUFzQiw2QkFBNkIseUJBQXlCLHdCQUF3QixnQkFBZ0IsR0FBRyx1QkFBdUIsa0JBQWtCLDJCQUEyQix1QkFBdUIsR0FBRyxvQkFBb0Isa0JBQWtCLHFCQUFxQixzQkFBc0IsMEJBQTBCLEdBQUcsc0JBQXNCLHVCQUF1QixxQkFBcUIsR0FBRyxnQkFBZ0Isd0JBQXdCLEdBQUcsZ0JBQWdCLGNBQWMsc0JBQXNCLEdBQUcsMEJBQTBCLGtCQUFrQixhQUFhLEdBQUcsZUFBZSxzQkFBc0IsdUJBQXVCLHlDQUF5Qyx1QkFBdUIsb0JBQW9CLG1CQUFtQixxQkFBcUIsdUJBQXVCLEdBQUcsaUJBQWlCLHVCQUF1QixxQkFBcUIsR0FBRyxtQkFBbUIsc0JBQXNCLGtCQUFrQixzQkFBc0IsdUJB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsa0RBQW1CO0FBQ2pDLFdBQVc7QUFDWDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGFBQWEsMkNBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDJDQUFZO0FBQzVDO0FBQ0E7O0FBRUEsOENBQThDLDJDQUFZO0FBQzFEOztBQUVBO0FBQ0E7QUFDQSxFQUFFLDJDQUFZO0FBQ2Qsc0JBQXNCLDJDQUFZO0FBQ2xDO0FBQ0EsRUFBRSxtREFBYTtBQUNmOztBQUVBO0FBQ0E7O0FBRUEsZUFBZSxvREFBTTs7QUFFckI7O0FBRTJCO0FBQ0Y7QUFDRTtBQUNEO0FBQ0g7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIGJvcmRlcjogMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDI0MSwgMjUwKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDI0MSwgMjUwKTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbmFzaWRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgbWluLXdpZHRoOiAxMHJlbTtcXG4gIGhlaWdodDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUzLCAyMjYsIDI0OCk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTksIDIzNSwgMjM1KTtcXG59XFxuXFxuLnRhc2tMaXN0IHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIHdpZHRoOiA3MCU7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5saXN0Q29udGFpbmVyIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDE1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDE1cHg7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgLyogbWF4LXdpZHRoOiAzMDBweDsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubGlzdENvbnRhaW5lciA+ICoge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlIHtcXG4gIG1hcmdpbjogNXB4IDBweDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDVweCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci10b3A6IHNvbGlkIDVweCB0cmFuc3BhcmVudDtcXG59XFxuXFxuI25ld1Byb2plY3RCdG4ge1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIHBhZGRpbmc6IDEwcHggMHB4O1xcbn1cXG5cXG4uYWRkVGFza0J0biB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRvZG9Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuXFxuLnRvZG9EZXNjcmlwdGlvbiB7XFxuICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxuICBjb2xvcjogc3RlZWxibHVlO1xcbn1cXG4udG9kb2R1ZURhdGUge1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuXFxuLmlzQ2hlY2tlZCB7XFxuICBvcmRlcjogLTE7XFxuICBtYXJnaW4tcmlnaHQ6IDVwdDtcXG59XFxuXFxuLmFkZFRvZG9CdG5Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG9yZGVyOiAxO1xcbn1cXG4uYWRkVG9kb0J0biB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDI0MSwgMjUwKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnJlY3ljbGVCdG4ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuLnRvZG9Qcmlvcml0eSB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGZsZXg6IDEgMCAzMCU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIG1hcmdpbi1yaWdodDogMTVwdDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuXFxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4ubW9kYWxDb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMjQxLCAyNTApO1xcbiAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDgwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG59XFxuXFxuLm1vZGFsVGV4dCB7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXG4uY2xvc2Uge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBjb2xvcjogI2FhYTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmlucHV0UHJvamVjdFRpdGxlIHtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4ubW9kYWxJbnB1dCB7XFxuICB3aWR0aDogMzElO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW46IDVweDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxufVxcblxcbi5zdWJtaXRCdG4ge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDdweCAyMHB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtBQUNWO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWEsRUFBRSxzQkFBc0I7RUFDckMsZUFBZSxFQUFFLGtCQUFrQjtFQUNuQyxVQUFVLEVBQUUsZUFBZTtFQUMzQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVcsRUFBRSxlQUFlO0VBQzVCLFlBQVksRUFBRSxnQkFBZ0I7RUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtFQUM1Qyw4QkFBOEIsRUFBRSxtQkFBbUI7RUFDbkQsb0NBQW9DLEVBQUUscUJBQXFCO0FBQzdEOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0NBQW9DO0VBQ3BDLGdCQUFnQixFQUFFLGtDQUFrQztFQUNwRCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixVQUFVLEVBQUUsb0RBQW9EO0FBQ2xFOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIGJvcmRlcjogMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDI0MSwgMjUwKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDI0MSwgMjUwKTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbmFzaWRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgbWluLXdpZHRoOiAxMHJlbTtcXG4gIGhlaWdodDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUzLCAyMjYsIDI0OCk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTksIDIzNSwgMjM1KTtcXG59XFxuXFxuLnRhc2tMaXN0IHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIHdpZHRoOiA3MCU7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5saXN0Q29udGFpbmVyIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDE1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDE1cHg7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgLyogbWF4LXdpZHRoOiAzMDBweDsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubGlzdENvbnRhaW5lciA+ICoge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlIHtcXG4gIG1hcmdpbjogNXB4IDBweDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDVweCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci10b3A6IHNvbGlkIDVweCB0cmFuc3BhcmVudDtcXG59XFxuXFxuI25ld1Byb2plY3RCdG4ge1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIHBhZGRpbmc6IDEwcHggMHB4O1xcbn1cXG5cXG4uYWRkVGFza0J0biB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRvZG9Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuXFxuLnRvZG9EZXNjcmlwdGlvbiB7XFxuICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxuICBjb2xvcjogc3RlZWxibHVlO1xcbn1cXG4udG9kb2R1ZURhdGUge1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuXFxuLmlzQ2hlY2tlZCB7XFxuICBvcmRlcjogLTE7XFxuICBtYXJnaW4tcmlnaHQ6IDVwdDtcXG59XFxuXFxuLmFkZFRvZG9CdG5Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG9yZGVyOiAxO1xcbn1cXG4uYWRkVG9kb0J0biB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDI0MSwgMjUwKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnJlY3ljbGVCdG4ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuLnRvZG9Qcmlvcml0eSB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGZsZXg6IDEgMCAzMCU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIG1hcmdpbi1yaWdodDogMTVwdDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuXFxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4ubW9kYWxDb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMjQxLCAyNTApO1xcbiAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDgwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG59XFxuXFxuLm1vZGFsVGV4dCB7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXG4uY2xvc2Uge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBjb2xvcjogI2FhYTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmlucHV0UHJvamVjdFRpdGxlIHtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4ubW9kYWxJbnB1dCB7XFxuICB3aWR0aDogMzElO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW46IDVweDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxufVxcblxcbi5zdWJtaXRCdG4ge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDdweCAyMHB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IGVsIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlJztcbmltcG9ydCB7IHRvZG9Qcm9qZWN0cyB9IGZyb20gJy4nO1xuaW1wb3J0IHsgYWRkVG9kbywgcHJvamVjdEZhY3RvcnksIHVwZGF0ZVN0b3JhZ2UgfSBmcm9tICcuL3RvZG8nO1xuZnVuY3Rpb24gZG9tQ29tcG9uZW50TmFtZUNsYXNzKG5hbWUsIGNsYXNzTmFtZSkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcbiAgaWYgKGNsYXNzTmFtZSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGRvbVByb2plY3RzUmVuZGVyKHgpIHtcbiAgbGV0IHByb2plY3RUaXRsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHByb2plY3RUaXRsZUVsLnRleHRDb250ZW50ID0gdG9kb1Byb2plY3RzW3hdLnRpdGxlO1xuICBwcm9qZWN0VGl0bGVFbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0VGl0bGUnKTtcbiAgcHJvamVjdFRpdGxlRWwuZGF0YXNldC5wcm9qZWN0ID0geDtcbiAgcHJvamVjdFRpdGxlRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RpdmVQcm9qZWN0UmVuZGVyKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RDb250YWluZXInKS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGVFbCk7XG59XG5cbmZ1bmN0aW9uIGRvbVRvZG9SZW5kZXIoaSwgeCkge1xuICAvL3RvZG8gY29udGFpbmVyIHJlbmRlclxuICBsZXQgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHRvZG9Db250YWluZXIuZGF0YXNldC5wcm9qZWN0ID0geDtcbiAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvQ29udGFpbmVyJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJykuYXBwZW5kQ2hpbGQodG9kb0NvbnRhaW5lcik7XG5cbiAgLy90b2RvIHRpdGxlIHJlbmRlclxuICBsZXQgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRvZG9Qcm9qZWN0c1t4XS50b2RvTGlzdFtpXS50aXRsZTtcbiAgdG9kb1RpdGxlLmRhdGFzZXQucHJvamVjdCA9IHg7XG4gIHRvZG9UaXRsZS5kYXRhc2V0LnRvZG8gPSBpO1xuICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG5cbiAgLy90b2RvIGRlc2NyaXB0aW9uIHJlbmRlclxuICBpZiAodG9kb1Byb2plY3RzW3hdLnRvZG9MaXN0W2ldLmRlc2NyaXB0aW9uKSB7XG4gICAgbGV0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgdG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kb1Byb2plY3RzW3hdLnRvZG9MaXN0W2ldLmRlc2NyaXB0aW9uO1xuICAgIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvRGVzY3JpcHRpb24nKTtcbiAgICB0b2RvRGVzY3JpcHRpb24uZGF0YXNldC5wcm9qZWN0ID0geDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpLmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbik7XG4gIH1cbiAgLy8gaXNDaGVja2VkIHJlbmRlclxuICBsZXQgaXNDaGVja2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaXNDaGVja2VkLnR5cGUgPSAnY2hlY2tib3gnO1xuICBpc0NoZWNrZWQudmFsdWUgPSB0b2RvUHJvamVjdHNbeF0udG9kb0xpc3RbaV0uaXNDaGVja2VkO1xuICBpc0NoZWNrZWQuY2xhc3NMaXN0LmFkZCgnaXNDaGVja2VkJyk7XG4gIGlzQ2hlY2tlZC5kYXRhc2V0LnByb2plY3QgPSB4O1xuICBpc0NoZWNrZWQuZGF0YXNldC50b2RvID0gaTtcbiAgaXNDaGVja2VkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tVbmNoZWNrKTtcbiAgaWYgKHRvZG9Qcm9qZWN0c1t4XS50b2RvTGlzdFtpXS5pc0NoZWNrZWQpIHtcbiAgICBpc0NoZWNrZWQuY2hlY2tlZCA9ICdjaGVja2VkJztcbiAgfVxuICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGlzQ2hlY2tlZCk7XG5cbiAgLy9wcmlvcml0eSByZW5kZXJcbiAgbGV0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0b2RvUHJvamVjdHNbeF0udG9kb0xpc3RbaV0ucHJpb3JpdHk7XG4gIGlmICh0b2RvUHJvamVjdHNbeF0udG9kb0xpc3RbaV0ucHJpb3JpdHkgPT0gMCkge1xuICAgIHRvZG9Qcmlvcml0eS50ZXh0Q29udGVudCA9ICd1bmltcG9ydGFudCc7XG4gIH1cbiAgaWYgKHRvZG9Qcm9qZWN0c1t4XS50b2RvTGlzdFtpXS5wcmlvcml0eSA9PSAxKSB7XG4gICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ2ltcG9ydGFudCc7XG4gIH1cbiAgaWYgKHRvZG9Qcm9qZWN0c1t4XS50b2RvTGlzdFtpXS5wcmlvcml0eSA9PSAyKSB7XG4gICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ3ZlcnkgaW1wb3J0YW50JztcbiAgfVxuICBpZiAodG9kb1Byb2plY3RzW3hdLnRvZG9MaXN0W2ldLnByaW9yaXR5ID09IDMpIHtcbiAgICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnVVJHRU5UJztcbiAgfVxuICBpZiAoXG4gICAgdG9kb1Byb2plY3RzW3hdLnRvZG9MaXN0W2ldLnByaW9yaXR5IDwgMCB8fFxuICAgIHRvZG9Qcm9qZWN0c1t4XS50b2RvTGlzdFtpXS5wcmlvcml0eSA+IDNcbiAgKSB7XG4gICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gJyc7XG4gIH1cblxuICB0b2RvUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG9kb1ByaW9yaXR5Jyk7XG4gIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb1ByaW9yaXR5KTtcblxuICAvL3RvZG8gZHVlIGRhdGUgcmVuZGVyXG4gIGlmICh0b2RvUHJvamVjdHNbeF0udG9kb0xpc3RbaV0uZHVlRGF0ZSkge1xuICAgIGxldCB0b2RvZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9kdWVEYXRlLnRleHRDb250ZW50ID0gdG9kb1Byb2plY3RzW3hdLnRvZG9MaXN0W2ldLmR1ZURhdGU7XG4gICAgdG9kb2R1ZURhdGUuY2xhc3NMaXN0LmFkZCgndG9kb2R1ZURhdGUnKTtcbiAgICB0b2RvZHVlRGF0ZS5kYXRhc2V0LnByb2plY3QgPSB4O1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb2R1ZURhdGUpO1xuICB9XG4gIC8vdG9kbyBkZWxldGUgYnV0dG9uXG4gIGxldCB0b2RvRGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHRvZG9EZWxldGVCdG4udGV4dENvbnRlbnQgPSAn8J+XkSc7XG4gIHRvZG9EZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgncmVjeWNsZUJ0bicpO1xuICB0b2RvRGVsZXRlQnRuLmRhdGFzZXQucHJvamVjdCA9IHg7XG4gIHRvZG9EZWxldGVCdG4uZGF0YXNldC50b2RvID0gaTtcbiAgdG9kb0RlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZVRvZG8pO1xuICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EZWxldGVCdG4pO1xufVxuLy9hbHNvIGFkZHMgKyBBZGQgdG9kbyBidXR0b25cbmZ1bmN0aW9uIHNlbGVjdGl2ZVByb2plY3RSZW5kZXIoZSkge1xuICBkZWxldGVBbGxEb21Ub2RvcygpO1xuICByZW5kZXJBbGxEb21Ub2RvcygpO1xuICBmdW5jdGlvbiBjaGVja0FuZERlbGV0ZShlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQuZGF0YXNldC5wcm9qZWN0ICE9PSBwcm9qZWN0SW5kZXgpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG4gIGxldCBwcm9qZWN0SW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LnByb2plY3Q7XG4gIGxldCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RDb250YWluZXInKTtcbiAgbGV0IHRvZG9MaXN0ID0gbGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuICB0b2RvTGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiBjaGVja0FuZERlbGV0ZShlbGVtZW50LCBwcm9qZWN0SW5kZXgpKTtcblxuICAvL2FkZCBhZGQgdG9kbyBidXR0b24gdG8gdG9kbyBjb250YWluZXIuXG4gIGxldCBhZGRUb2RvQnRuTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBhZGRUb2RvQnRuTGkuY2xhc3NMaXN0LmFkZCgnYWRkVG9kb0J0bkNvbnRhaW5lcicpO1xuICBhZGRUb2RvQnRuTGkuZGF0YXNldC5wcm9qZWN0ID0gZS50YXJnZXQuZGF0YXNldC5wcm9qZWN0O1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdENvbnRhaW5lcicpLmFwcGVuZENoaWxkKGFkZFRvZG9CdG5MaSk7XG4gIGxldCBhZGRUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGFkZFRvZG9CdG4udGV4dENvbnRlbnQgPSAnKyBBZGQgdG9kbyc7XG4gIGFkZFRvZG9CdG4uY2xhc3NMaXN0LmFkZCgnYWRkVG9kb0J0bicpO1xuICBhZGRUb2RvQnRuLmRhdGFzZXQucHJvamVjdCA9IGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdDtcbiAgYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRvZG8pO1xuICBhZGRUb2RvQnRuTGkuYXBwZW5kQ2hpbGQoYWRkVG9kb0J0bik7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUFsbERvbVRvZG9zKCkge1xuICBmdW5jdGlvbiBkZWxldGVEb21FbChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuICBsZXQgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Q29udGFpbmVyJyk7XG4gIGxldCB0b2RvTm9kZXMgPSB0b2RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gIHRvZG9Ob2Rlcy5mb3JFYWNoKChlbGVtZW50KSA9PiBkZWxldGVEb21FbChlbGVtZW50KSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFsbERvbVRvZG9zKCkge1xuICBmb3IgKGxldCB4ID0gMDsgeCA8IHRvZG9Qcm9qZWN0cy5sZW5ndGg7IHgrKykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb1Byb2plY3RzW3hdLnRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb21Ub2RvUmVuZGVyKGksIHgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1VuY2hlY2soZSkge1xuICBsZXQgcHJvamVjdEluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5wcm9qZWN0O1xuICBsZXQgdG9kb0luZGV4ID0gZS50YXJnZXQuZGF0YXNldC50b2RvO1xuICBpZiAodG9kb1Byb2plY3RzW3Byb2plY3RJbmRleF0udG9kb0xpc3RbdG9kb0luZGV4XS5pc0NoZWNrZWQpIHtcbiAgICB0b2RvUHJvamVjdHNbcHJvamVjdEluZGV4XS50b2RvTGlzdFt0b2RvSW5kZXhdLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHRvZG9Qcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9MaXN0W3RvZG9JbmRleF0uaXNDaGVja2VkID0gdHJ1ZTtcbiAgfVxuICB1cGRhdGVTdG9yYWdlKCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRvZG8oZSkge1xuICBsZXQgcHJvamVjdEluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5wcm9qZWN0O1xuICBsZXQgdG9kb0luZGV4ID0gZS50YXJnZXQuZGF0YXNldC50b2RvO1xuICBjb25zb2xlLmxvZyh0b2RvUHJvamVjdHNbcHJvamVjdEluZGV4XS50b2RvTGlzdFt0b2RvSW5kZXhdKTtcbiAgdG9kb1Byb2plY3RzW3Byb2plY3RJbmRleF0udG9kb0xpc3Quc3BsaWNlKHRvZG9JbmRleCwgMSk7XG4gIGlmICh0b2RvUHJvamVjdHNbcHJvamVjdEluZGV4XS50b2RvTGlzdC5sZW5ndGggPT0gMCkge1xuICAgIHRvZG9Qcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgfVxuICB1cGRhdGVTdG9yYWdlKCk7XG4gIGRlbGV0ZUFsbERvbVRvZG9zKCk7XG4gIHJlbmRlckFsbERvbVRvZG9zKCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFsbFRvZG9zQ2xpY2soKSB7XG4gIGRlbGV0ZUFsbERvbVRvZG9zKCk7XG4gIHJlbmRlckFsbERvbVRvZG9zKCk7XG59XG5cbmZ1bmN0aW9uIE5ld1Byb2plY3RNb2R1bGVFdmVudCgpIHtcbiAgLy9wcm9qZWN0RmFjdG9yeSA+IHByb2plY3RUaXRsZS4gdG9kb0ZhY3RvcnkgPiB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlXG4gIGxldCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb2RhbENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ215TW9kYWwnKTtcbiAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZChtb2RhbENvbnRhaW5lcik7XG5cbiAgbGV0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWxDb250ZW50Jyk7XG4gIG1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XG5cbiAgbGV0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xuICBjbG9zZUJ0bi5pbm5lckhUTUwgPSBgJnRpbWVzO2A7XG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG5cbiAgbGV0IG1vZGFsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbW9kYWxUZXh0LmNsYXNzTGlzdC5hZGQoJ21vZGFsVGV4dCcpO1xuICBtb2RhbFRleHQudGV4dENvbnRlbnQgPSAnRW50ZXIgbmV3IHByb2plY3QgZGV0YWlscyc7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbFRleHQpO1xuXG4gIGxldCBpbnB1dHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5wdXRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0c0NvbnRhaW5lcicpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoaW5wdXRzQ29udGFpbmVyKTtcblxuICBsZXQgaW5wdXRQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dFByb2plY3RUaXRsZS50eXBlID0gJ3RleHQnO1xuICBpbnB1dFByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdtb2RhbElucHV0Jyk7XG4gIGlucHV0UHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5wdXRQcm9qZWN0VGl0bGUnKTtcbiAgaW5wdXRQcm9qZWN0VGl0bGUucGxhY2Vob2xkZXIgPSAnRW50ZXIgcHJvamVjdCB0aXRsZSc7XG4gIGlucHV0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dFByb2plY3RUaXRsZSk7XG5cbiAgbGV0IGlucHV0VG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXRUb2RvVGl0bGUudHlwZSA9ICd0ZXh0JztcbiAgaW5wdXRUb2RvVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdpbnB1dFRvZG9UaXRsZScpO1xuICBpbnB1dFRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKCdtb2RhbElucHV0Jyk7XG4gIGlucHV0VG9kb1RpdGxlLnBsYWNlaG9sZGVyID0gJ0VudGVyIHRvZG8gdGl0bGUnO1xuICBpbnB1dHNDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRUb2RvVGl0bGUpO1xuXG4gIGxldCBpbnB1dFRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0VG9kb0Rlc2NyaXB0aW9uLnR5cGUgPSAndGV4dCc7XG4gIGlucHV0VG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ21vZGFsSW5wdXQnKTtcbiAgaW5wdXRUb2RvRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsICdpbnB1dFRvZG9EZXNjcmlwdGlvbicpO1xuICBpbnB1dFRvZG9EZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9ICdFbnRlciB0b2RvIGRlc2NyaXB0aW9uJztcbiAgaW5wdXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0VG9kb0Rlc2NyaXB0aW9uKTtcblxuICBsZXQgaW5wdXRUb2RvUHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBpbnB1dFRvZG9Qcmlvcml0eUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5TGFiZWwnKTtcbiAgaW5wdXRUb2RvUHJpb3JpdHlDb250YWluZXIuc2V0QXR0cmlidXRlKCdmb3InLCAnaW5wdXRUb2RvUHJpb3JpdHknKTtcbiAgaW5wdXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0VG9kb1ByaW9yaXR5Q29udGFpbmVyKTtcblxuICBsZXQgaW5wdXRUb2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgaW5wdXRUb2RvUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnbW9kYWxJbnB1dCcpO1xuICBpbnB1dFRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nob29zZVByaW9yaXR5Jyk7XG4gIGlucHV0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dFRvZG9Qcmlvcml0eSk7XG5cbiAgbGV0IGlucHV0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0RGF0ZS5jbGFzc0xpc3QuYWRkKCdtb2RhbElucHV0Jyk7XG4gIGlucHV0RGF0ZS50eXBlID0gJ2RhdGUnO1xuICBpbnB1dERhdGUuc2V0QXR0cmlidXRlKCdpZCcsICdpbnB1dERhdGUnKTtcbiAgaW5wdXREYXRlLnBsYWNlaG9sZGVyID0gJ2NsaWNrIGNhbGVuZGFyIHRvIGNob29zZSBkdWUgZGF0ZSc7XG4gIGlucHV0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dERhdGUpO1xuXG4gIGxldCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdzdWJtaXRCdG4nKTtcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0TmV3UHJvamVjdCk7XG4gIG1vZGFsQ29udGVudC5hcHBlbmQoc3VibWl0QnRuKTtcblxuICAvLyBsZXQgcHJpb3JpdHlMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIC8vIHByaW9yaXR5TGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5TGlzdCcpO1xuICAvLyBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlMaXN0KTtcblxuICBsZXQgb3B0aW9uMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBvcHRpb24wLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnJyk7XG4gIG9wdGlvbjAudGV4dENvbnRlbnQgPSAnUGxlYXNlIGNob29zZSBwcmlvcml0eSc7XG4gIGlucHV0VG9kb1ByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjApO1xuXG4gIGxldCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG9wdGlvbjEuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsb3cnKTtcbiAgb3B0aW9uMS50ZXh0Q29udGVudCA9ICdVbmltcG9ydGFudCc7XG4gIGlucHV0VG9kb1ByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjEpO1xuXG4gIGxldCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG9wdGlvbjIuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdub3JtYWwnKTtcbiAgb3B0aW9uMi50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQnO1xuICBpbnB1dFRvZG9Qcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24yKTtcblxuICBsZXQgb3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBvcHRpb24zLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xuICBvcHRpb24zLnRleHRDb250ZW50ID0gJ1ZlcnkgaW1wb3J0YW50JztcbiAgaW5wdXRUb2RvUHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uMyk7XG5cbiAgbGV0IG9wdGlvbjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgb3B0aW9uNC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ25vbmUnKTtcbiAgb3B0aW9uNC50ZXh0Q29udGVudCA9ICdub25lJztcbiAgaW5wdXRUb2RvUHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uNCk7XG5cbiAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufVxuXG5mdW5jdGlvbiBzdWJtaXROZXdQcm9qZWN0KCkge1xuICB0b2RvUHJvamVjdHMucHVzaChwcm9qZWN0RmFjdG9yeSgpKTtcbiAgaWYgKHRvZG9Qcm9qZWN0c1t0b2RvUHJvamVjdHMubGVuZ3RoIC0gMV0pIHtcbiAgICB1cGRhdGVTdG9yYWdlKCk7XG4gICAgZG9tUHJvamVjdHNSZW5kZXIodG9kb1Byb2plY3RzLmxlbmd0aCAtIDEpO1xuICAgIGRvbVRvZG9SZW5kZXIoXG4gICAgICB0b2RvUHJvamVjdHNbdG9kb1Byb2plY3RzLmxlbmd0aCAtIDFdLnRvZG9MaXN0Lmxlbmd0aCAtIDEsXG4gICAgICB0b2RvUHJvamVjdHMubGVuZ3RoIC0gMVxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCB7XG4gIGRvbUNvbXBvbmVudE5hbWVDbGFzcyxcbiAgZG9tVG9kb1JlbmRlcixcbiAgZG9tUHJvamVjdHNSZW5kZXIsXG4gIHNlbGVjdGl2ZVByb2plY3RSZW5kZXIsXG4gIHJlbmRlckFsbFRvZG9zQ2xpY2ssXG4gIE5ld1Byb2plY3RNb2R1bGVFdmVudCxcbn07XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7XG4gIGRvbUNvbXBvbmVudE5hbWVDbGFzcyxcbiAgZG9tVG9kb1JlbmRlcixcbiAgZG9tUHJvamVjdHNSZW5kZXIgYXMgZG9tUHJvamVjdFJlbmRlcixcbiAgcmVuZGVyQWxsVG9kb3NDbGljayxcbiAgTmV3UHJvamVjdE1vZHVsZUV2ZW50LFxufSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBwcm9qZWN0RmFjdG9yeSwgZ2V0TG9jYWxTdG9yYWdlLCB1cGRhdGVTdG9yYWdlIH0gZnJvbSAnLi90b2RvJztcblxuLy9sb2FkIHNpZGViYXIgYW5kIGNvbnRlbnQgY29udGFpbmVyc1xuKGZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50TmFtZUNsYXNzKCdhc2lkZScpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudE5hbWVDbGFzcygnY29udGVudCcpKTtcblxuICBsZXQgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGlzdENvbnRhaW5lcicpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjb250ZW50JykuYXBwZW5kKGxpc3RDb250YWluZXIpO1xufSkoKTtcblxuLy8gZ2V0IGxvY2FsIHN0b3JhZ2UsIGlmIG5vbmUsIG1ha2UgZW1wdHkgYXJyYXlcbmxldCB0b2RvUHJvamVjdHMgPSBnZXRMb2NhbFN0b3JhZ2UoKTtcbmlmICghdG9kb1Byb2plY3RzKSB7XG4gIHRvZG9Qcm9qZWN0cyA9IFtdO1xufVxuXG4vLyBsb2FkIHNpZGViYXIgYnV0dG9uc1xuXG4vL1xuLy8gISEhIGZpeCBlcnJvciBhZnRlciB0b2RvbGlzdCBwcm9tcHQgY2FuY2VsXG4vL1xuKGZ1bmN0aW9uIHNpZGViYXJMb2FkKCkge1xuICBmdW5jdGlvbiBuZXdQcm9qZWN0RXZlbnQoKSB7XG4gICAgdG9kb1Byb2plY3RzLnB1c2gocHJvamVjdEZhY3RvcnkoKSk7XG4gICAgaWYgKHRvZG9Qcm9qZWN0c1t0b2RvUHJvamVjdHMubGVuZ3RoIC0gMV0pIHtcbiAgICAgIHVwZGF0ZVN0b3JhZ2UoKTtcbiAgICAgIGRvbVByb2plY3RSZW5kZXIodG9kb1Byb2plY3RzLmxlbmd0aCAtIDEpO1xuICAgICAgZG9tVG9kb1JlbmRlcihcbiAgICAgICAgdG9kb1Byb2plY3RzW3RvZG9Qcm9qZWN0cy5sZW5ndGggLSAxXS50b2RvTGlzdC5sZW5ndGggLSAxLFxuICAgICAgICB0b2RvUHJvamVjdHMubGVuZ3RoIC0gMVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBsZXQgbmV3UHJvamVjdEJ0biA9IGRvbUNvbXBvbmVudE5hbWVDbGFzcygnYnV0dG9uJyk7XG4gIG5ld1Byb2plY3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsICduZXdQcm9qZWN0QnRuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJykuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ0bikudGV4dENvbnRlbnQgPVxuICAgICcrIE5ldyBwcm9qZWN0JztcbiAgbGV0IG5ld1Byb2plY3RCdG5FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3RCdG4nKTtcbiAgbmV3UHJvamVjdEJ0bkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBOZXdQcm9qZWN0TW9kdWxlRXZlbnQpO1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpXG4gICAgLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudE5hbWVDbGFzcygnYnV0dG9uJywgJ3Rhc2tMaXN0JykpLnRleHRDb250ZW50ID1cbiAgICAndG9kYXknO1xuXG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJylcbiAgICAuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50TmFtZUNsYXNzKCdidXR0b24nLCAndGFza0xpc3QnKSkudGV4dENvbnRlbnQgPVxuICAgICd0aGlzIHdlZWsnO1xuXG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJylcbiAgICAuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50TmFtZUNsYXNzKCdidXR0b24nLCAndGFza0xpc3QnKSkudGV4dENvbnRlbnQgPVxuICAgICd0aGlzIG1vbnRoJztcblxuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpXG4gICAgLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudE5hbWVDbGFzcygnZGl2JywgJ3Byb2plY3RDb250YWluZXInKSk7XG5cbiAgbGV0IGFsbFRhc2tzRWwgPSBkb21Db21wb25lbnROYW1lQ2xhc3MoJ2J1dHRvbicsICdwcm9qZWN0VGl0bGUnKTtcbiAgYWxsVGFza3NFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlckFsbFRvZG9zQ2xpY2spO1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdENvbnRhaW5lcicpXG4gICAgLmFwcGVuZENoaWxkKGFsbFRhc2tzRWwpLnRleHRDb250ZW50ID0gJ0FsbCB0YXNrcyc7XG59KSgpO1xuXG4vL2xvYWQgcHJvamVjdHMgb24gc2lkZWJhciBhbmQgdG9kb3Mgb24gbWFpbiBjb250ZW50XG4oZnVuY3Rpb24gY29udGVudExvYWQoKSB7XG4gIGZvciAobGV0IHggPSAwOyB4IDwgdG9kb1Byb2plY3RzLmxlbmd0aDsgeCsrKSB7XG4gICAgZG9tUHJvamVjdFJlbmRlcih4KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9Qcm9qZWN0c1t4XS50b2RvTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgZG9tVG9kb1JlbmRlcihpLCB4KTtcbiAgICB9XG4gIH1cbn0pKCk7XG5cbi8vZ2V0cyByZXF1aXJlZCBpbmZvIGZvciBsb2NhbCBzdG9yYWdlIGFuZCB0aGVuIHN0b3JlcyBpdFxuZ2V0TG9jYWxTdG9yYWdlKCk7XG51cGRhdGVTdG9yYWdlKCk7XG5cbmV4cG9ydCB7IHRvZG9Qcm9qZWN0cyB9O1xuIiwiaW1wb3J0IHsgdG9kb1Byb2plY3RzIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBkb21Ub2RvUmVuZGVyIH0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5jb25zdCBwcm9qZWN0RmFjdG9yeSA9ICgpID0+IHtcbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0UHJvamVjdFRpdGxlJykudmFsdWU7XG4gIGlmICh0aXRsZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCB0b2RvTGlzdCA9IFtdO1xuICB0b2RvTGlzdC5wdXNoKHRvZG9GYWN0b3J5KCkpO1xuICByZXR1cm4geyB0aXRsZSwgdG9kb0xpc3QgfTtcbn07XG5jb25zdCB0b2RvRmFjdG9yeSA9ICgpID0+IHtcbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0VG9kb1RpdGxlJykudmFsdWU7XG4gIGlmICh0aXRsZSA9PSBudWxsKSB7XG4gICAgdGl0bGUgPSAndGl0bGUgbWlzc2luZyc7XG4gIH1cbiAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0VG9kb0Rlc2NyaXB0aW9uJykudmFsdWU7XG4gIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaG9vc2VQcmlvcml0eScpLnZhbHVlO1xuICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dERhdGUnKS52YWx1ZTtcblxuICBsZXQgaXNDaGVja2VkID0gZmFsc2U7XG4gIGxldCBpbmRleCA9IHRvZG9Qcm9qZWN0cy5sZW5ndGg7XG4gIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUsIGlzQ2hlY2tlZCwgaW5kZXggfTtcbn07XG5cbmZ1bmN0aW9uIG5ld1Rhc2tGdW5jdGlvbigpIHt9XG5cbmZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZSgpIHtcbiAgZnVuY3Rpb24gdG9kb1N0clRvT2JqKHN0cmluZykge1xuICAgIHZhciBvYmplY3QgPSBKU09OLnBhcnNlKHN0cmluZyk7XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuICBpZiAodG9kb1N0clRvT2JqKSB7XG4gICAgbGV0IGxvY2FsU3RvcmFnZU9iaiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdHJPYmonKTtcbiAgICBsb2NhbFN0b3JhZ2VPYmogPSB0b2RvU3RyVG9PYmoobG9jYWxTdG9yYWdlT2JqKTtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlT2JqO1xuICB9IGVsc2UgcmV0dXJuICh0b2RvUHJvamVjdHMgPSBbXSk7XG59XG5mdW5jdGlvbiB1cGRhdGVTdG9yYWdlKCkge1xuICBmdW5jdGlvbiB0b2RvT2JqVG9TdHIoKSB7XG4gICAgdmFyIHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHRvZG9Qcm9qZWN0cyk7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdHJPYmonLCB0b2RvT2JqVG9TdHIodG9kb1Byb2plY3RzKSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG8oZSkge1xuICBsZXQgcHJvamVjdEluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5wcm9qZWN0O1xuICB0b2RvUHJvamVjdHNbcHJvamVjdEluZGV4XS50b2RvTGlzdC5wdXNoKHRvZG9GYWN0b3J5KCkpO1xuICBsZXQgbGFzdFRvZG9JbmRleCA9IHRvZG9Qcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9MaXN0Lmxlbmd0aCAtIDE7XG4gIHVwZGF0ZVN0b3JhZ2UoKTtcbiAgZG9tVG9kb1JlbmRlcihsYXN0VG9kb0luZGV4LCBwcm9qZWN0SW5kZXgpO1xuICAvLyBjb25zb2xlLmxvZyh0b2RvUHJvamVjdHNbcHJvamVjdEluZGV4XS50b2RvTGlzdFtsYXN0VG9kb0luZGV4IC0gMV0pO1xuXG4gIC8vIGNvbnNvbGUubG9nKHByb2plY3RJbmRleCk7XG59XG5cbmxldCBkYXRlVGVzdCA9IGZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpO1xuXG5jb25zb2xlLmxvZyhkYXRlVGVzdCk7XG5cbmV4cG9ydCB7IGdldExvY2FsU3RvcmFnZSB9O1xuZXhwb3J0IHsgdXBkYXRlU3RvcmFnZSB9O1xuZXhwb3J0IHsgbmV3VGFza0Z1bmN0aW9uIH07XG5leHBvcnQgeyBwcm9qZWN0RmFjdG9yeSB9O1xuZXhwb3J0IHsgdG9kb0ZhY3RvcnkgfTtcbmV4cG9ydCB7IGFkZFRvZG8gfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==