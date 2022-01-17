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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0px;\n  margin: 0px;\n  border: 0px;\n}\n\nbody {\n  background-color: rgb(214, 241, 250);\n  display: flex;\n}\n\ncontent {\n  display: flex;\n  background-color: rgb(214, 241, 250);\n  height: 100vh;\n  flex-grow: 1;\n}\n\naside {\n  display: flex;\n  flex-direction: column;\n  width: 15rem;\n  min-width: 10rem;\n  height: 100vw;\n  background-color: rgb(153, 226, 248);\n}\n\nbutton {\n  background-color: azure;\n}\n\nbutton:hover {\n  background-color: rgb(199, 235, 235);\n}\n\n.taskList {\n  margin: 10px;\n  width: 70%;\n  height: 25px;\n  border-radius: 5px;\n  align-self: center;\n}\n\n.listContainer {\n  list-style-type: none;\n  border-bottom: 15px;\n  margin-bottom: 15px;\n  display: flex;\n  flex-direction: column;\n  margin: 15px;\n  flex-grow: 1;\n  min-height: 300px;\n  min-width: 200px;\n  height: fit-content;\n  /* max-width: 300px; */\n  background-color: azure;\n  border-radius: 5px;\n}\n\n.listContainer > * {\n  padding-left: 1rem;\n}\n\n.projectTitle {\n  margin: 5px 0px;\n  border-bottom: solid 5px transparent;\n  border-top: solid 5px transparent;\n}\n\n#newProjectBtn {\n  font-size: large;\n  padding: 10px 0px;\n}\n\n.addTaskBtn {\n  text-align: right;\n  border-bottom: 2px solid;\n  padding-bottom: 15px;\n  padding-right: 1rem;\n  margin: 5px;\n}\n\n.projectContainer {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\n.todoContainer {\n  display: flex;\n  font-size: large;\n  padding-top: 1rem;\n  align-items: baseline;\n}\n\n.todoDescription {\n  padding-left: 3rem;\n  color: steelblue;\n}\n.tododueDate {\n  padding-right: 1rem;\n  /* width: 100px; */\n}\n\n.isChecked {\n  order: -1;\n  margin-right: 5pt;\n}\n\n.addTodoBtnContainer {\n  display: flex;\n  order: 1;\n}\n.addTodoBtn {\n  padding: 5px 10px;\n  border-radius: 5px;\n  background-color: rgb(214, 241, 250);\n  text-align: center;\n  /* width: 100%; */\n  margin: auto;\n  font-size: large;\n  margin-bottom: 5px;\n}\n\n.recycleBtn {\n  margin-right: 1rem;\n  font-size: large;\n}\n\n.todoPriority {\n  text-align: right;\n  flex: 1 0 30%;\n  text-align: right;\n  margin-right: 15pt;\n}\n\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n/* Modal Content/Box */\n.modalContent {\n  display: flex;\n  flex-direction: column;\n  background-color: rgb(214, 241, 250);\n  margin: 15% auto; /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  border-radius: 5px;\n  width: 80%; /* Could be more or less, depending on screen size */\n}\n\n.modalText {\n  padding-top: 5px;\n  text-align: center;\n  font-size: larger;\n  padding: 5px;\n}\n\n/* The Close Button */\n.close {\n  align-self: flex-end;\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.inputProjectTitle {\n  border: solid 1px black;\n  border-radius: 4px;\n}\n\n.modalInput {\n  width: 31%;\n  border: solid 1px black;\n  border-radius: 4px;\n  margin: 5px;\n  font-size: larger;\n  background-color: azure;\n}\n\n.submitBtn {\n  margin-top: 10px;\n  align-self: center;\n  padding: 7px 20px;\n  height: fit-content;\n  width: fit-content;\n  border-radius: 5px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,WAAW;EACX,WAAW;AACb;;AAEA;EACE,oCAAoC;EACpC,aAAa;AACf;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,oCAAoC;EACpC,iCAAiC;AACnC;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,oBAAoB;EACpB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,oCAAoC;EACpC,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,aAAa,EAAE,sBAAsB;EACrC,eAAe,EAAE,kBAAkB;EACnC,UAAU,EAAE,eAAe;EAC3B,OAAO;EACP,MAAM;EACN,WAAW,EAAE,eAAe;EAC5B,YAAY,EAAE,gBAAgB;EAC9B,cAAc,EAAE,4BAA4B;EAC5C,8BAA8B,EAAE,mBAAmB;EACnD,oCAAoC,EAAE,qBAAqB;AAC7D;;AAEA,sBAAsB;AACtB;EACE,aAAa;EACb,sBAAsB;EACtB,oCAAoC;EACpC,gBAAgB,EAAE,kCAAkC;EACpD,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,UAAU,EAAE,oDAAoD;AAClE;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;AACd;;AAEA,qBAAqB;AACrB;EACE,oBAAoB;EACpB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;;EAEE,YAAY;EACZ,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,uBAAuB;EACvB,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;AACpB","sourcesContent":["* {\n  padding: 0px;\n  margin: 0px;\n  border: 0px;\n}\n\nbody {\n  background-color: rgb(214, 241, 250);\n  display: flex;\n}\n\ncontent {\n  display: flex;\n  background-color: rgb(214, 241, 250);\n  height: 100vh;\n  flex-grow: 1;\n}\n\naside {\n  display: flex;\n  flex-direction: column;\n  width: 15rem;\n  min-width: 10rem;\n  height: 100vw;\n  background-color: rgb(153, 226, 248);\n}\n\nbutton {\n  background-color: azure;\n}\n\nbutton:hover {\n  background-color: rgb(199, 235, 235);\n}\n\n.taskList {\n  margin: 10px;\n  width: 70%;\n  height: 25px;\n  border-radius: 5px;\n  align-self: center;\n}\n\n.listContainer {\n  list-style-type: none;\n  border-bottom: 15px;\n  margin-bottom: 15px;\n  display: flex;\n  flex-direction: column;\n  margin: 15px;\n  flex-grow: 1;\n  min-height: 300px;\n  min-width: 200px;\n  height: fit-content;\n  /* max-width: 300px; */\n  background-color: azure;\n  border-radius: 5px;\n}\n\n.listContainer > * {\n  padding-left: 1rem;\n}\n\n.projectTitle {\n  margin: 5px 0px;\n  border-bottom: solid 5px transparent;\n  border-top: solid 5px transparent;\n}\n\n#newProjectBtn {\n  font-size: large;\n  padding: 10px 0px;\n}\n\n.addTaskBtn {\n  text-align: right;\n  border-bottom: 2px solid;\n  padding-bottom: 15px;\n  padding-right: 1rem;\n  margin: 5px;\n}\n\n.projectContainer {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\n.todoContainer {\n  display: flex;\n  font-size: large;\n  padding-top: 1rem;\n  align-items: baseline;\n}\n\n.todoDescription {\n  padding-left: 3rem;\n  color: steelblue;\n}\n.tododueDate {\n  padding-right: 1rem;\n  /* width: 100px; */\n}\n\n.isChecked {\n  order: -1;\n  margin-right: 5pt;\n}\n\n.addTodoBtnContainer {\n  display: flex;\n  order: 1;\n}\n.addTodoBtn {\n  padding: 5px 10px;\n  border-radius: 5px;\n  background-color: rgb(214, 241, 250);\n  text-align: center;\n  /* width: 100%; */\n  margin: auto;\n  font-size: large;\n  margin-bottom: 5px;\n}\n\n.recycleBtn {\n  margin-right: 1rem;\n  font-size: large;\n}\n\n.todoPriority {\n  text-align: right;\n  flex: 1 0 30%;\n  text-align: right;\n  margin-right: 15pt;\n}\n\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n/* Modal Content/Box */\n.modalContent {\n  display: flex;\n  flex-direction: column;\n  background-color: rgb(214, 241, 250);\n  margin: 15% auto; /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  border-radius: 5px;\n  width: 80%; /* Could be more or less, depending on screen size */\n}\n\n.modalText {\n  padding-top: 5px;\n  text-align: center;\n  font-size: larger;\n  padding: 5px;\n}\n\n/* The Close Button */\n.close {\n  align-self: flex-end;\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.inputProjectTitle {\n  border: solid 1px black;\n  border-radius: 4px;\n}\n\n.modalInput {\n  width: 31%;\n  border: solid 1px black;\n  border-radius: 4px;\n  margin: 5px;\n  font-size: larger;\n  background-color: azure;\n}\n\n.submitBtn {\n  margin-top: 10px;\n  align-self: center;\n  padding: 7px 20px;\n  height: fit-content;\n  width: fit-content;\n  border-radius: 5px;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "selectiveThisDayTodosRender": () => (/* binding */ selectiveThisDayTodosRender),
/* harmony export */   "selectiveThisMonthTodosRender": () => (/* binding */ selectiveThisMonthTodosRender),
/* harmony export */   "selectiveThisWeekTodosRender": () => (/* binding */ selectiveThisWeekTodosRender),
/* harmony export */   "domComponentNameClass": () => (/* binding */ domComponentNameClass),
/* harmony export */   "domTodoRender": () => (/* binding */ domTodoRender),
/* harmony export */   "domProjectsRender": () => (/* binding */ domProjectsRender),
/* harmony export */   "selectiveProjectRender": () => (/* binding */ selectiveProjectRender),
/* harmony export */   "renderAllTodosClick": () => (/* binding */ renderAllTodosClick),
/* harmony export */   "NewProjectModuleEvent": () => (/* binding */ NewProjectModuleEvent)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisMonth/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
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
  todoContainer.dataset.dueDate = ___WEBPACK_IMPORTED_MODULE_0__.todoProjects[x].todoList[i].dueDate;
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
    todoDescription.dataset.dueDate = ___WEBPACK_IMPORTED_MODULE_0__.todoProjects[x].todoList[i].dueDate;
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
  addTodoBtn.addEventListener('click', newTodoModuleEvent);
  addTodoBtnLi.appendChild(addTodoBtn);
}

function selectiveThisMonthTodosRender() {
  deleteAllDomTodos();
  renderAllDomTodos();
  function checkAndDelete(element) {
    if (!(0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(element.dataset.dueDate))) {
      element.remove();
    }
  }
  let listContainer = document.querySelector('.listContainer');
  let todoList = listContainer.querySelectorAll('li');
  todoList.forEach((element) => checkAndDelete(element));
}

function selectiveThisWeekTodosRender() {
  deleteAllDomTodos();
  renderAllDomTodos();
  function checkAndDelete(element) {
    if (!(0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(element.dataset.dueDate))) {
      element.remove();
    }
  }
  let listContainer = document.querySelector('.listContainer');
  let todoList = listContainer.querySelectorAll('li');
  todoList.forEach((element) => checkAndDelete(element));
}

function selectiveThisDayTodosRender() {
  deleteAllDomTodos();
  renderAllDomTodos();
  function checkAndDelete(element) {
    if (!(0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(element.dataset.dueDate))) {
      element.remove();
    }
  }
  let listContainer = document.querySelector('.listContainer');
  let todoList = listContainer.querySelectorAll('li');
  todoList.forEach((element) => checkAndDelete(element));
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
  submitBtn.addEventListener('click', submitNewProjectClick);
  modalContent.append(submitBtn);

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
  option4.textContent = '';
  inputTodoPriority.appendChild(option4);

  modalContainer.style.display = 'block';
  function closeModal() {
    modalContainer.style.display = 'none';
  }
  function submitNewProjectClick() {
    submitNewProject();
    closeModal();
  }
}

function newTodoModuleEvent(e) {
  let projectIndex = e.target.dataset.project;
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
  modalText.textContent = 'Enter new todo details';
  modalContent.appendChild(modalText);

  let inputsContainer = document.createElement('div');
  inputsContainer.classList.add('inputsContainer');
  modalContent.appendChild(inputsContainer);

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
  submitBtn.dataset.project = projectIndex;
  submitBtn.addEventListener('click', submitNewTodoClick);
  modalContent.append(submitBtn);

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
    modalContainer.remove();
  }

  function submitNewTodoClick(e) {
    submitNewTodo(e);
    closeModal();
  }
  (0,_todo__WEBPACK_IMPORTED_MODULE_1__.updateStorage)();
}

function submitNewTodo(e) {
  let projectIndex = e.target.dataset.project;
  ___WEBPACK_IMPORTED_MODULE_0__.todoProjects[projectIndex].todoList.push((0,_todo__WEBPACK_IMPORTED_MODULE_1__.todoFactory)());
  let lastTodoIndex = ___WEBPACK_IMPORTED_MODULE_0__.todoProjects[projectIndex].todoList.length - 1;
  domTodoRender(lastTodoIndex, projectIndex);
  (0,_todo__WEBPACK_IMPORTED_MODULE_1__.updateStorage)();
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
  (0,_todo__WEBPACK_IMPORTED_MODULE_1__.updateStorage)();
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

  let thisDayBtn = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.domComponentNameClass)('button', 'taskList');
  thisDayBtn.addEventListener('click', _dom_js__WEBPACK_IMPORTED_MODULE_1__.selectiveThisDayTodosRender);
  document.querySelector('aside').appendChild(thisDayBtn).textContent = 'today';

  let thisWeekBtn = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.domComponentNameClass)('button', 'taskList');
  thisWeekBtn.addEventListener('click', _dom_js__WEBPACK_IMPORTED_MODULE_1__.selectiveThisWeekTodosRender);
  document.querySelector('aside').appendChild(thisWeekBtn).textContent =
    'this week';

  let thisMonthBtn = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.domComponentNameClass)('button', 'taskList');
  thisMonthBtn.addEventListener('click', _dom_js__WEBPACK_IMPORTED_MODULE_1__.selectiveThisMonthTodosRender);
  document.querySelector('aside').appendChild(thisMonthBtn).textContent =
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
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory),
/* harmony export */   "todoFactory": () => (/* binding */ todoFactory),
/* harmony export */   "addTodo": () => (/* binding */ addTodo)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");




const projectFactory = () => {
  let title = document.querySelector('#inputProjectTitle').value;
  if (title == null) {
    title = 'title missing';
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
  if (!dueDate) {
    dueDate = '';
  }

  let isChecked = false;
  let index = ___WEBPACK_IMPORTED_MODULE_0__.todoProjects.length;
  return { title, description, priority, dueDate, isChecked, index };
};

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
}









/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2RvbV9qcy1zcmNfaW5kZXhfanMtc3JjX3RvZG9fanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLDZDQUE2QyxpQkFBaUIsZ0JBQWdCLGdCQUFnQixHQUFHLFVBQVUseUNBQXlDLGtCQUFrQixHQUFHLGFBQWEsa0JBQWtCLHlDQUF5QyxrQkFBa0IsaUJBQWlCLEdBQUcsV0FBVyxrQkFBa0IsMkJBQTJCLGlCQUFpQixxQkFBcUIsa0JBQWtCLHlDQUF5QyxHQUFHLFlBQVksNEJBQTRCLEdBQUcsa0JBQWtCLHlDQUF5QyxHQUFHLGVBQWUsaUJBQWlCLGVBQWUsaUJBQWlCLHVCQUF1Qix1QkFBdUIsR0FBRyxvQkFBb0IsMEJBQTBCLHdCQUF3Qix3QkFBd0Isa0JBQWtCLDJCQUEyQixpQkFBaUIsaUJBQWlCLHNCQUFzQixxQkFBcUIsd0JBQXdCLHlCQUF5Qiw4QkFBOEIsdUJBQXVCLEdBQUcsd0JBQXdCLHVCQUF1QixHQUFHLG1CQUFtQixvQkFBb0IseUNBQXlDLHNDQUFzQyxHQUFHLG9CQUFvQixxQkFBcUIsc0JBQXNCLEdBQUcsaUJBQWlCLHNCQUFzQiw2QkFBNkIseUJBQXlCLHdCQUF3QixnQkFBZ0IsR0FBRyx1QkFBdUIsa0JBQWtCLDJCQUEyQix1QkFBdUIsR0FBRyxvQkFBb0Isa0JBQWtCLHFCQUFxQixzQkFBc0IsMEJBQTBCLEdBQUcsc0JBQXNCLHVCQUF1QixxQkFBcUIsR0FBRyxnQkFBZ0Isd0JBQXdCLHFCQUFxQixLQUFLLGdCQUFnQixjQUFjLHNCQUFzQixHQUFHLDBCQUEwQixrQkFBa0IsYUFBYSxHQUFHLGVBQWUsc0JBQXNCLHVCQUF1Qix5Q0FBeUMsdUJBQXVCLG9CQUFvQixtQkFBbUIscUJBQXFCLHVCQUF1QixHQUFHLGlCQUFpQix1QkFBdUIscUJBQXFCLEdBQUcsbUJBQW1CLHNCQUFzQixrQkFBa0Isc0JB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QUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsa0RBQW1CO0FBQ2pDLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGFBQWEsMkNBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDJDQUFZO0FBQzVDO0FBQ0E7O0FBRUEsOENBQThDLDJDQUFZO0FBQzFEOztBQUVBO0FBQ0E7QUFDQSxFQUFFLDJDQUFZO0FBQ2Qsc0JBQXNCLDJDQUFZO0FBQ2xDO0FBQ0EsRUFBRSxtREFBYTtBQUNmOztBQUUyQjtBQUNGOztBQUVDO0FBQ0g7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIGJvcmRlcjogMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDI0MSwgMjUwKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDI0MSwgMjUwKTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbmFzaWRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgbWluLXdpZHRoOiAxMHJlbTtcXG4gIGhlaWdodDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUzLCAyMjYsIDI0OCk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTksIDIzNSwgMjM1KTtcXG59XFxuXFxuLnRhc2tMaXN0IHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIHdpZHRoOiA3MCU7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5saXN0Q29udGFpbmVyIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDE1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDE1cHg7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgLyogbWF4LXdpZHRoOiAzMDBweDsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubGlzdENvbnRhaW5lciA+ICoge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlIHtcXG4gIG1hcmdpbjogNXB4IDBweDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDVweCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci10b3A6IHNvbGlkIDVweCB0cmFuc3BhcmVudDtcXG59XFxuXFxuI25ld1Byb2plY3RCdG4ge1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIHBhZGRpbmc6IDEwcHggMHB4O1xcbn1cXG5cXG4uYWRkVGFza0J0biB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRvZG9Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuXFxuLnRvZG9EZXNjcmlwdGlvbiB7XFxuICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxuICBjb2xvcjogc3RlZWxibHVlO1xcbn1cXG4udG9kb2R1ZURhdGUge1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gIC8qIHdpZHRoOiAxMDBweDsgKi9cXG59XFxuXFxuLmlzQ2hlY2tlZCB7XFxuICBvcmRlcjogLTE7XFxuICBtYXJnaW4tcmlnaHQ6IDVwdDtcXG59XFxuXFxuLmFkZFRvZG9CdG5Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG9yZGVyOiAxO1xcbn1cXG4uYWRkVG9kb0J0biB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDI0MSwgMjUwKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnJlY3ljbGVCdG4ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuLnRvZG9Qcmlvcml0eSB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGZsZXg6IDEgMCAzMCU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIG1hcmdpbi1yaWdodDogMTVwdDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuXFxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4ubW9kYWxDb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMjQxLCAyNTApO1xcbiAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDgwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG59XFxuXFxuLm1vZGFsVGV4dCB7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXG4uY2xvc2Uge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBjb2xvcjogI2FhYTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmlucHV0UHJvamVjdFRpdGxlIHtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4ubW9kYWxJbnB1dCB7XFxuICB3aWR0aDogMzElO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW46IDVweDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxufVxcblxcbi5zdWJtaXRCdG4ge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDdweCAyMHB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7QUFDVjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhLEVBQUUsc0JBQXNCO0VBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7RUFDbkMsVUFBVSxFQUFFLGVBQWU7RUFDM0IsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXLEVBQUUsZUFBZTtFQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0VBQzlCLGNBQWMsRUFBRSw0QkFBNEI7RUFDNUMsOEJBQThCLEVBQUUsbUJBQW1CO0VBQ25ELG9DQUFvQyxFQUFFLHFCQUFxQjtBQUM3RDs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9DQUFvQztFQUNwQyxnQkFBZ0IsRUFBRSxrQ0FBa0M7RUFDcEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsVUFBVSxFQUFFLG9EQUFvRDtBQUNsRTs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxuICBib3JkZXI6IDBweDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAyNDEsIDI1MCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAyNDEsIDI1MCk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG5hc2lkZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxNXJlbTtcXG4gIG1pbi13aWR0aDogMTByZW07XFxuICBoZWlnaHQ6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MywgMjI2LCAyNDgpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk5LCAyMzUsIDIzNSk7XFxufVxcblxcbi50YXNrTGlzdCB7XFxuICBtYXJnaW46IDEwcHg7XFxuICB3aWR0aDogNzAlO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubGlzdENvbnRhaW5lciB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAxNXB4O1xcbiAgZmxleC1ncm93OiAxO1xcbiAgbWluLWhlaWdodDogMzAwcHg7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIC8qIG1heC13aWR0aDogMzAwcHg7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmxpc3RDb250YWluZXIgPiAqIHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuLnByb2plY3RUaXRsZSB7XFxuICBtYXJnaW46IDVweCAwcHg7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCA1cHggdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItdG9wOiBzb2xpZCA1cHggdHJhbnNwYXJlbnQ7XFxufVxcblxcbiNuZXdQcm9qZWN0QnRuIHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBwYWRkaW5nOiAxMHB4IDBweDtcXG59XFxuXFxuLmFkZFRhc2tCdG4ge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuLnByb2plY3RDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50b2RvQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxufVxcblxcbi50b2RvRGVzY3JpcHRpb24ge1xcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcbiAgY29sb3I6IHN0ZWVsYmx1ZTtcXG59XFxuLnRvZG9kdWVEYXRlIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICAvKiB3aWR0aDogMTAwcHg7ICovXFxufVxcblxcbi5pc0NoZWNrZWQge1xcbiAgb3JkZXI6IC0xO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHQ7XFxufVxcblxcbi5hZGRUb2RvQnRuQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvcmRlcjogMTtcXG59XFxuLmFkZFRvZG9CdG4ge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAyNDEsIDI1MCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gIG1hcmdpbjogYXV0bztcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5yZWN5Y2xlQnRuIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbi50b2RvUHJpb3JpdHkge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBmbGV4OiAxIDAgMzAlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHQ7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxufVxcblxcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxuLm1vZGFsQ29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDI0MSwgMjUwKTtcXG4gIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiA4MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxufVxcblxcbi5tb2RhbFRleHQge1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgY29sb3I6ICNhYWE7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pbnB1dFByb2plY3RUaXRsZSB7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLm1vZGFsSW5wdXQge1xcbiAgd2lkdGg6IDMxJTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbn1cXG5cXG4uc3VibWl0QnRuIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA3cHggMjBweDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgeyBpc1RoaXNXZWVrLCBpc1RvZGF5LCBpc1RoaXNNb250aCwgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyB0b2RvUHJvamVjdHMgfSBmcm9tICcuJztcbmltcG9ydCB7IGFkZFRvZG8sIHByb2plY3RGYWN0b3J5LCB0b2RvRmFjdG9yeSwgdXBkYXRlU3RvcmFnZSB9IGZyb20gJy4vdG9kbyc7XG5mdW5jdGlvbiBkb21Db21wb25lbnROYW1lQ2xhc3MobmFtZSwgY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xuICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZG9tUHJvamVjdHNSZW5kZXIoeCkge1xuICBsZXQgcHJvamVjdFRpdGxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcHJvamVjdFRpdGxlRWwudGV4dENvbnRlbnQgPSB0b2RvUHJvamVjdHNbeF0udGl0bGU7XG4gIHByb2plY3RUaXRsZUVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RUaXRsZScpO1xuICBwcm9qZWN0VGl0bGVFbC5kYXRhc2V0LnByb2plY3QgPSB4O1xuICBwcm9qZWN0VGl0bGVFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdGl2ZVByb2plY3RSZW5kZXIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdENvbnRhaW5lcicpLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZUVsKTtcbn1cblxuZnVuY3Rpb24gZG9tVG9kb1JlbmRlcihpLCB4KSB7XG4gIC8vdG9kbyBjb250YWluZXIgcmVuZGVyXG4gIGxldCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgdG9kb0NvbnRhaW5lci5kYXRhc2V0LnByb2plY3QgPSB4O1xuICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9Db250YWluZXInKTtcbiAgdG9kb0NvbnRhaW5lci5kYXRhc2V0LmR1ZURhdGUgPSB0b2RvUHJvamVjdHNbeF0udG9kb0xpc3RbaV0uZHVlRGF0ZTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwnKS5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKTtcblxuICAvL3RvZG8gdGl0bGUgcmVuZGVyXG4gIGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdG9kb1Byb2plY3RzW3hdLnRvZG9MaXN0W2ldLnRpdGxlO1xuICB0b2RvVGl0bGUuZGF0YXNldC5wcm9qZWN0ID0geDtcbiAgdG9kb1RpdGxlLmRhdGFzZXQudG9kbyA9IGk7XG4gIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcblxuICAvL3RvZG8gZGVzY3JpcHRpb24gcmVuZGVyXG4gIGlmICh0b2RvUHJvamVjdHNbeF0udG9kb0xpc3RbaV0uZGVzY3JpcHRpb24pIHtcbiAgICBsZXQgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICB0b2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvUHJvamVjdHNbeF0udG9kb0xpc3RbaV0uZGVzY3JpcHRpb247XG4gICAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG9EZXNjcmlwdGlvbicpO1xuICAgIHRvZG9EZXNjcmlwdGlvbi5kYXRhc2V0LnByb2plY3QgPSB4O1xuICAgIHRvZG9EZXNjcmlwdGlvbi5kYXRhc2V0LmR1ZURhdGUgPSB0b2RvUHJvamVjdHNbeF0udG9kb0xpc3RbaV0uZHVlRGF0ZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpLmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbik7XG4gIH1cbiAgLy8gaXNDaGVja2VkIHJlbmRlclxuICBsZXQgaXNDaGVja2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaXNDaGVja2VkLnR5cGUgPSAnY2hlY2tib3gnO1xuICBpc0NoZWNrZWQudmFsdWUgPSB0b2RvUHJvamVjdHNbeF0udG9kb0xpc3RbaV0uaXNDaGVja2VkO1xuICBpc0NoZWNrZWQuY2xhc3NMaXN0LmFkZCgnaXNDaGVja2VkJyk7XG4gIGlzQ2hlY2tlZC5kYXRhc2V0LnByb2plY3QgPSB4O1xuICBpc0NoZWNrZWQuZGF0YXNldC50b2RvID0gaTtcbiAgaXNDaGVja2VkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tVbmNoZWNrKTtcbiAgaWYgKHRvZG9Qcm9qZWN0c1t4XS50b2RvTGlzdFtpXS5pc0NoZWNrZWQpIHtcbiAgICBpc0NoZWNrZWQuY2hlY2tlZCA9ICdjaGVja2VkJztcbiAgfVxuICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGlzQ2hlY2tlZCk7XG5cbiAgLy9wcmlvcml0eSByZW5kZXJcbiAgbGV0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0b2RvUHJvamVjdHNbeF0udG9kb0xpc3RbaV0ucHJpb3JpdHk7XG4gIGlmICh0b2RvUHJvamVjdHNbeF0udG9kb0xpc3RbaV0ucHJpb3JpdHkgPT0gMCkge1xuICAgIHRvZG9Qcmlvcml0eS50ZXh0Q29udGVudCA9ICd1bmltcG9ydGFudCc7XG4gIH1cbiAgaWYgKHRvZG9Qcm9qZWN0c1t4XS50b2RvTGlzdFtpXS5wcmlvcml0eSA9PSAxKSB7XG4gICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ2ltcG9ydGFudCc7XG4gIH1cbiAgaWYgKHRvZG9Qcm9qZWN0c1t4XS50b2RvTGlzdFtpXS5wcmlvcml0eSA9PSAyKSB7XG4gICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ3ZlcnkgaW1wb3J0YW50JztcbiAgfVxuICBpZiAodG9kb1Byb2plY3RzW3hdLnRvZG9MaXN0W2ldLnByaW9yaXR5ID09IDMpIHtcbiAgICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnVVJHRU5UJztcbiAgfVxuICBpZiAoXG4gICAgdG9kb1Byb2plY3RzW3hdLnRvZG9MaXN0W2ldLnByaW9yaXR5IDwgMCB8fFxuICAgIHRvZG9Qcm9qZWN0c1t4XS50b2RvTGlzdFtpXS5wcmlvcml0eSA+IDNcbiAgKSB7XG4gICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gJyc7XG4gIH1cblxuICB0b2RvUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG9kb1ByaW9yaXR5Jyk7XG4gIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb1ByaW9yaXR5KTtcblxuICAvL3RvZG8gZHVlIGRhdGUgcmVuZGVyXG4gIGlmICh0b2RvUHJvamVjdHNbeF0udG9kb0xpc3RbaV0uZHVlRGF0ZSkge1xuICAgIGxldCB0b2RvZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9kdWVEYXRlLnRleHRDb250ZW50ID0gdG9kb1Byb2plY3RzW3hdLnRvZG9MaXN0W2ldLmR1ZURhdGU7XG4gICAgdG9kb2R1ZURhdGUuY2xhc3NMaXN0LmFkZCgndG9kb2R1ZURhdGUnKTtcbiAgICB0b2RvZHVlRGF0ZS5kYXRhc2V0LnByb2plY3QgPSB4O1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb2R1ZURhdGUpO1xuICB9XG4gIC8vdG9kbyBkZWxldGUgYnV0dG9uXG4gIGxldCB0b2RvRGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHRvZG9EZWxldGVCdG4udGV4dENvbnRlbnQgPSAn8J+XkSc7XG4gIHRvZG9EZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgncmVjeWNsZUJ0bicpO1xuICB0b2RvRGVsZXRlQnRuLmRhdGFzZXQucHJvamVjdCA9IHg7XG4gIHRvZG9EZWxldGVCdG4uZGF0YXNldC50b2RvID0gaTtcbiAgdG9kb0RlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZVRvZG8pO1xuICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EZWxldGVCdG4pO1xufVxuLy9hbHNvIGFkZHMgKyBBZGQgdG9kbyBidXR0b25cbmZ1bmN0aW9uIHNlbGVjdGl2ZVByb2plY3RSZW5kZXIoZSkge1xuICBkZWxldGVBbGxEb21Ub2RvcygpO1xuICByZW5kZXJBbGxEb21Ub2RvcygpO1xuICBmdW5jdGlvbiBjaGVja0FuZERlbGV0ZShlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQuZGF0YXNldC5wcm9qZWN0ICE9PSBwcm9qZWN0SW5kZXgpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG4gIGxldCBwcm9qZWN0SW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LnByb2plY3Q7XG4gIGxldCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RDb250YWluZXInKTtcbiAgbGV0IHRvZG9MaXN0ID0gbGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuICB0b2RvTGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiBjaGVja0FuZERlbGV0ZShlbGVtZW50LCBwcm9qZWN0SW5kZXgpKTtcblxuICAvL2FkZCBhZGQgdG9kbyBidXR0b24gdG8gdG9kbyBjb250YWluZXIuXG4gIGxldCBhZGRUb2RvQnRuTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBhZGRUb2RvQnRuTGkuY2xhc3NMaXN0LmFkZCgnYWRkVG9kb0J0bkNvbnRhaW5lcicpO1xuICBhZGRUb2RvQnRuTGkuZGF0YXNldC5wcm9qZWN0ID0gZS50YXJnZXQuZGF0YXNldC5wcm9qZWN0O1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdENvbnRhaW5lcicpLmFwcGVuZENoaWxkKGFkZFRvZG9CdG5MaSk7XG4gIGxldCBhZGRUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGFkZFRvZG9CdG4udGV4dENvbnRlbnQgPSAnKyBBZGQgdG9kbyc7XG4gIGFkZFRvZG9CdG4uY2xhc3NMaXN0LmFkZCgnYWRkVG9kb0J0bicpO1xuICBhZGRUb2RvQnRuLmRhdGFzZXQucHJvamVjdCA9IGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdDtcbiAgYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1RvZG9Nb2R1bGVFdmVudCk7XG4gIGFkZFRvZG9CdG5MaS5hcHBlbmRDaGlsZChhZGRUb2RvQnRuKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0aXZlVGhpc01vbnRoVG9kb3NSZW5kZXIoKSB7XG4gIGRlbGV0ZUFsbERvbVRvZG9zKCk7XG4gIHJlbmRlckFsbERvbVRvZG9zKCk7XG4gIGZ1bmN0aW9uIGNoZWNrQW5kRGVsZXRlKGVsZW1lbnQpIHtcbiAgICBpZiAoIWlzVGhpc01vbnRoKHBhcnNlSVNPKGVsZW1lbnQuZGF0YXNldC5kdWVEYXRlKSkpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG4gIGxldCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RDb250YWluZXInKTtcbiAgbGV0IHRvZG9MaXN0ID0gbGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuICB0b2RvTGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiBjaGVja0FuZERlbGV0ZShlbGVtZW50KSk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdGl2ZVRoaXNXZWVrVG9kb3NSZW5kZXIoKSB7XG4gIGRlbGV0ZUFsbERvbVRvZG9zKCk7XG4gIHJlbmRlckFsbERvbVRvZG9zKCk7XG4gIGZ1bmN0aW9uIGNoZWNrQW5kRGVsZXRlKGVsZW1lbnQpIHtcbiAgICBpZiAoIWlzVGhpc1dlZWsocGFyc2VJU08oZWxlbWVudC5kYXRhc2V0LmR1ZURhdGUpKSkge1xuICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG4gIH1cbiAgbGV0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdENvbnRhaW5lcicpO1xuICBsZXQgdG9kb0xpc3QgPSBsaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gIHRvZG9MaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IGNoZWNrQW5kRGVsZXRlKGVsZW1lbnQpKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0aXZlVGhpc0RheVRvZG9zUmVuZGVyKCkge1xuICBkZWxldGVBbGxEb21Ub2RvcygpO1xuICByZW5kZXJBbGxEb21Ub2RvcygpO1xuICBmdW5jdGlvbiBjaGVja0FuZERlbGV0ZShlbGVtZW50KSB7XG4gICAgaWYgKCFpc1RvZGF5KHBhcnNlSVNPKGVsZW1lbnQuZGF0YXNldC5kdWVEYXRlKSkpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG4gIGxldCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RDb250YWluZXInKTtcbiAgbGV0IHRvZG9MaXN0ID0gbGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuICB0b2RvTGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiBjaGVja0FuZERlbGV0ZShlbGVtZW50KSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUFsbERvbVRvZG9zKCkge1xuICBmdW5jdGlvbiBkZWxldGVEb21FbChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuICBsZXQgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Q29udGFpbmVyJyk7XG4gIGxldCB0b2RvTm9kZXMgPSB0b2RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gIHRvZG9Ob2Rlcy5mb3JFYWNoKChlbGVtZW50KSA9PiBkZWxldGVEb21FbChlbGVtZW50KSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFsbERvbVRvZG9zKCkge1xuICBmb3IgKGxldCB4ID0gMDsgeCA8IHRvZG9Qcm9qZWN0cy5sZW5ndGg7IHgrKykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb1Byb2plY3RzW3hdLnRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb21Ub2RvUmVuZGVyKGksIHgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1VuY2hlY2soZSkge1xuICBsZXQgcHJvamVjdEluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5wcm9qZWN0O1xuICBsZXQgdG9kb0luZGV4ID0gZS50YXJnZXQuZGF0YXNldC50b2RvO1xuICBpZiAodG9kb1Byb2plY3RzW3Byb2plY3RJbmRleF0udG9kb0xpc3RbdG9kb0luZGV4XS5pc0NoZWNrZWQpIHtcbiAgICB0b2RvUHJvamVjdHNbcHJvamVjdEluZGV4XS50b2RvTGlzdFt0b2RvSW5kZXhdLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHRvZG9Qcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9MaXN0W3RvZG9JbmRleF0uaXNDaGVja2VkID0gdHJ1ZTtcbiAgfVxuICB1cGRhdGVTdG9yYWdlKCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRvZG8oZSkge1xuICBsZXQgcHJvamVjdEluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5wcm9qZWN0O1xuICBsZXQgdG9kb0luZGV4ID0gZS50YXJnZXQuZGF0YXNldC50b2RvO1xuICB0b2RvUHJvamVjdHNbcHJvamVjdEluZGV4XS50b2RvTGlzdC5zcGxpY2UodG9kb0luZGV4LCAxKTtcbiAgaWYgKHRvZG9Qcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9MaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgdG9kb1Byb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICB9XG4gIHVwZGF0ZVN0b3JhZ2UoKTtcbiAgZGVsZXRlQWxsRG9tVG9kb3MoKTtcbiAgcmVuZGVyQWxsRG9tVG9kb3MoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWxsVG9kb3NDbGljaygpIHtcbiAgZGVsZXRlQWxsRG9tVG9kb3MoKTtcbiAgcmVuZGVyQWxsRG9tVG9kb3MoKTtcbn1cblxuZnVuY3Rpb24gTmV3UHJvamVjdE1vZHVsZUV2ZW50KCkge1xuICBsZXQgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9kYWxDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdteU1vZGFsJyk7XG4gIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmQobW9kYWxDb250YWluZXIpO1xuXG4gIGxldCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21vZGFsQ29udGVudCcpO1xuICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuXG4gIGxldCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnY2xvc2UnKTtcbiAgY2xvc2VCdG4uaW5uZXJIVE1MID0gYCZ0aW1lcztgO1xuICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuXG4gIGxldCBtb2RhbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1vZGFsVGV4dC5jbGFzc0xpc3QuYWRkKCdtb2RhbFRleHQnKTtcbiAgbW9kYWxUZXh0LnRleHRDb250ZW50ID0gJ0VudGVyIG5ldyBwcm9qZWN0IGRldGFpbHMnO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxUZXh0KTtcblxuICBsZXQgaW5wdXRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGlucHV0c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnB1dHNDb250YWluZXInKTtcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGlucHV0c0NvbnRhaW5lcik7XG5cbiAgbGV0IGlucHV0UHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXRQcm9qZWN0VGl0bGUudHlwZSA9ICd0ZXh0JztcbiAgaW5wdXRQcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgnbW9kYWxJbnB1dCcpO1xuICBpbnB1dFByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2lucHV0UHJvamVjdFRpdGxlJyk7XG4gIGlucHV0UHJvamVjdFRpdGxlLnBsYWNlaG9sZGVyID0gJ0VudGVyIHByb2plY3QgdGl0bGUnO1xuICBpbnB1dHNDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRQcm9qZWN0VGl0bGUpO1xuXG4gIGxldCBpbnB1dFRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0VG9kb1RpdGxlLnR5cGUgPSAndGV4dCc7XG4gIGlucHV0VG9kb1RpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5wdXRUb2RvVGl0bGUnKTtcbiAgaW5wdXRUb2RvVGl0bGUuY2xhc3NMaXN0LmFkZCgnbW9kYWxJbnB1dCcpO1xuICBpbnB1dFRvZG9UaXRsZS5wbGFjZWhvbGRlciA9ICdFbnRlciB0b2RvIHRpdGxlJztcbiAgaW5wdXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0VG9kb1RpdGxlKTtcblxuICBsZXQgaW5wdXRUb2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dFRvZG9EZXNjcmlwdGlvbi50eXBlID0gJ3RleHQnO1xuICBpbnB1dFRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdtb2RhbElucHV0Jyk7XG4gIGlucHV0VG9kb0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5wdXRUb2RvRGVzY3JpcHRpb24nKTtcbiAgaW5wdXRUb2RvRGVzY3JpcHRpb24ucGxhY2Vob2xkZXIgPSAnRW50ZXIgdG9kbyBkZXNjcmlwdGlvbic7XG4gIGlucHV0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dFRvZG9EZXNjcmlwdGlvbik7XG5cbiAgbGV0IGlucHV0VG9kb1ByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgaW5wdXRUb2RvUHJpb3JpdHlDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eUxhYmVsJyk7XG4gIGlucHV0VG9kb1ByaW9yaXR5Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2lucHV0VG9kb1ByaW9yaXR5Jyk7XG4gIGlucHV0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dFRvZG9Qcmlvcml0eUNvbnRhaW5lcik7XG5cbiAgbGV0IGlucHV0VG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGlucHV0VG9kb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ21vZGFsSW5wdXQnKTtcbiAgaW5wdXRUb2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsICdjaG9vc2VQcmlvcml0eScpO1xuICBpbnB1dHNDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRUb2RvUHJpb3JpdHkpO1xuXG4gIGxldCBpbnB1dERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dERhdGUuY2xhc3NMaXN0LmFkZCgnbW9kYWxJbnB1dCcpO1xuICBpbnB1dERhdGUudHlwZSA9ICdkYXRlJztcbiAgaW5wdXREYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5wdXREYXRlJyk7XG4gIGlucHV0RGF0ZS5wbGFjZWhvbGRlciA9ICdjbGljayBjYWxlbmRhciB0byBjaG9vc2UgZHVlIGRhdGUnO1xuICBpbnB1dHNDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXREYXRlKTtcblxuICBsZXQgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnc3VibWl0QnRuJyk7XG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdE5ld1Byb2plY3RDbGljayk7XG4gIG1vZGFsQ29udGVudC5hcHBlbmQoc3VibWl0QnRuKTtcblxuICBsZXQgb3B0aW9uMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBvcHRpb24wLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnJyk7XG4gIG9wdGlvbjAudGV4dENvbnRlbnQgPSAnUGxlYXNlIGNob29zZSBwcmlvcml0eSc7XG4gIGlucHV0VG9kb1ByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjApO1xuXG4gIGxldCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG9wdGlvbjEuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsb3cnKTtcbiAgb3B0aW9uMS50ZXh0Q29udGVudCA9ICdVbmltcG9ydGFudCc7XG4gIGlucHV0VG9kb1ByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjEpO1xuXG4gIGxldCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG9wdGlvbjIuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdub3JtYWwnKTtcbiAgb3B0aW9uMi50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQnO1xuICBpbnB1dFRvZG9Qcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24yKTtcblxuICBsZXQgb3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBvcHRpb24zLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xuICBvcHRpb24zLnRleHRDb250ZW50ID0gJ1ZlcnkgaW1wb3J0YW50JztcbiAgaW5wdXRUb2RvUHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uMyk7XG5cbiAgbGV0IG9wdGlvbjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgb3B0aW9uNC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ25vbmUnKTtcbiAgb3B0aW9uNC50ZXh0Q29udGVudCA9ICcnO1xuICBpbnB1dFRvZG9Qcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb240KTtcblxuICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG4gIGZ1bmN0aW9uIHN1Ym1pdE5ld1Byb2plY3RDbGljaygpIHtcbiAgICBzdWJtaXROZXdQcm9qZWN0KCk7XG4gICAgY2xvc2VNb2RhbCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5ld1RvZG9Nb2R1bGVFdmVudChlKSB7XG4gIGxldCBwcm9qZWN0SW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LnByb2plY3Q7XG4gIGxldCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb2RhbENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ215TW9kYWwnKTtcbiAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZChtb2RhbENvbnRhaW5lcik7XG5cbiAgbGV0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWxDb250ZW50Jyk7XG4gIG1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XG5cbiAgbGV0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xuICBjbG9zZUJ0bi5pbm5lckhUTUwgPSBgJnRpbWVzO2A7XG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG5cbiAgbGV0IG1vZGFsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbW9kYWxUZXh0LmNsYXNzTGlzdC5hZGQoJ21vZGFsVGV4dCcpO1xuICBtb2RhbFRleHQudGV4dENvbnRlbnQgPSAnRW50ZXIgbmV3IHRvZG8gZGV0YWlscyc7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbFRleHQpO1xuXG4gIGxldCBpbnB1dHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5wdXRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0c0NvbnRhaW5lcicpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoaW5wdXRzQ29udGFpbmVyKTtcblxuICBsZXQgaW5wdXRUb2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dFRvZG9UaXRsZS50eXBlID0gJ3RleHQnO1xuICBpbnB1dFRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2lucHV0VG9kb1RpdGxlJyk7XG4gIGlucHV0VG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ21vZGFsSW5wdXQnKTtcbiAgaW5wdXRUb2RvVGl0bGUucGxhY2Vob2xkZXIgPSAnRW50ZXIgdG9kbyB0aXRsZSc7XG4gIGlucHV0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dFRvZG9UaXRsZSk7XG5cbiAgbGV0IGlucHV0VG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXRUb2RvRGVzY3JpcHRpb24udHlwZSA9ICd0ZXh0JztcbiAgaW5wdXRUb2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbW9kYWxJbnB1dCcpO1xuICBpbnB1dFRvZG9EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2lucHV0VG9kb0Rlc2NyaXB0aW9uJyk7XG4gIGlucHV0VG9kb0Rlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gJ0VudGVyIHRvZG8gZGVzY3JpcHRpb24nO1xuICBpbnB1dHNDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRUb2RvRGVzY3JpcHRpb24pO1xuXG4gIGxldCBpbnB1dFRvZG9Qcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGlucHV0VG9kb1ByaW9yaXR5Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHlMYWJlbCcpO1xuICBpbnB1dFRvZG9Qcmlvcml0eUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdpbnB1dFRvZG9Qcmlvcml0eScpO1xuICBpbnB1dHNDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRUb2RvUHJpb3JpdHlDb250YWluZXIpO1xuXG4gIGxldCBpbnB1dFRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBpbnB1dFRvZG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdtb2RhbElucHV0Jyk7XG4gIGlucHV0VG9kb1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hvb3NlUHJpb3JpdHknKTtcbiAgaW5wdXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0VG9kb1ByaW9yaXR5KTtcblxuICBsZXQgaW5wdXREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXREYXRlLmNsYXNzTGlzdC5hZGQoJ21vZGFsSW5wdXQnKTtcbiAgaW5wdXREYXRlLnR5cGUgPSAnZGF0ZSc7XG4gIGlucHV0RGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2lucHV0RGF0ZScpO1xuICBpbnB1dERhdGUucGxhY2Vob2xkZXIgPSAnY2xpY2sgY2FsZW5kYXIgdG8gY2hvb3NlIGR1ZSBkYXRlJztcbiAgaW5wdXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0RGF0ZSk7XG5cbiAgbGV0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdEJ0bicpO1xuICBzdWJtaXRCdG4uZGF0YXNldC5wcm9qZWN0ID0gcHJvamVjdEluZGV4O1xuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXROZXdUb2RvQ2xpY2spO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kKHN1Ym1pdEJ0bik7XG5cbiAgbGV0IG9wdGlvbjAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgb3B0aW9uMC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJycpO1xuICBvcHRpb24wLnRleHRDb250ZW50ID0gJ1BsZWFzZSBjaG9vc2UgcHJpb3JpdHknO1xuICBpbnB1dFRvZG9Qcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24wKTtcblxuICBsZXQgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBvcHRpb24xLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbG93Jyk7XG4gIG9wdGlvbjEudGV4dENvbnRlbnQgPSAnVW5pbXBvcnRhbnQnO1xuICBpbnB1dFRvZG9Qcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24xKTtcblxuICBsZXQgb3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBvcHRpb24yLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbm9ybWFsJyk7XG4gIG9wdGlvbjIudGV4dENvbnRlbnQgPSAnSW1wb3J0YW50JztcbiAgaW5wdXRUb2RvUHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uMik7XG5cbiAgbGV0IG9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgb3B0aW9uMy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2hpZ2gnKTtcbiAgb3B0aW9uMy50ZXh0Q29udGVudCA9ICdWZXJ5IGltcG9ydGFudCc7XG4gIGlucHV0VG9kb1ByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjMpO1xuXG4gIGxldCBvcHRpb240ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG9wdGlvbjQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdub25lJyk7XG4gIG9wdGlvbjQudGV4dENvbnRlbnQgPSAnbm9uZSc7XG4gIGlucHV0VG9kb1ByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbjQpO1xuXG4gIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbW9kYWxDb250YWluZXIucmVtb3ZlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBzdWJtaXROZXdUb2RvQ2xpY2soZSkge1xuICAgIHN1Ym1pdE5ld1RvZG8oZSk7XG4gICAgY2xvc2VNb2RhbCgpO1xuICB9XG4gIHVwZGF0ZVN0b3JhZ2UoKTtcbn1cblxuZnVuY3Rpb24gc3VibWl0TmV3VG9kbyhlKSB7XG4gIGxldCBwcm9qZWN0SW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LnByb2plY3Q7XG4gIHRvZG9Qcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9MaXN0LnB1c2godG9kb0ZhY3RvcnkoKSk7XG4gIGxldCBsYXN0VG9kb0luZGV4ID0gdG9kb1Byb2plY3RzW3Byb2plY3RJbmRleF0udG9kb0xpc3QubGVuZ3RoIC0gMTtcbiAgZG9tVG9kb1JlbmRlcihsYXN0VG9kb0luZGV4LCBwcm9qZWN0SW5kZXgpO1xuICB1cGRhdGVTdG9yYWdlKCk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdE5ld1Byb2plY3QoKSB7XG4gIHRvZG9Qcm9qZWN0cy5wdXNoKHByb2plY3RGYWN0b3J5KCkpO1xuICBpZiAodG9kb1Byb2plY3RzW3RvZG9Qcm9qZWN0cy5sZW5ndGggLSAxXSkge1xuICAgIHVwZGF0ZVN0b3JhZ2UoKTtcbiAgICBkb21Qcm9qZWN0c1JlbmRlcih0b2RvUHJvamVjdHMubGVuZ3RoIC0gMSk7XG4gICAgZG9tVG9kb1JlbmRlcihcbiAgICAgIHRvZG9Qcm9qZWN0c1t0b2RvUHJvamVjdHMubGVuZ3RoIC0gMV0udG9kb0xpc3QubGVuZ3RoIC0gMSxcbiAgICAgIHRvZG9Qcm9qZWN0cy5sZW5ndGggLSAxXG4gICAgKTtcbiAgfVxuICB1cGRhdGVTdG9yYWdlKCk7XG59XG5leHBvcnQge1xuICBzZWxlY3RpdmVUaGlzRGF5VG9kb3NSZW5kZXIsXG4gIHNlbGVjdGl2ZVRoaXNNb250aFRvZG9zUmVuZGVyLFxuICBzZWxlY3RpdmVUaGlzV2Vla1RvZG9zUmVuZGVyLFxuICBkb21Db21wb25lbnROYW1lQ2xhc3MsXG4gIGRvbVRvZG9SZW5kZXIsXG4gIGRvbVByb2plY3RzUmVuZGVyLFxuICBzZWxlY3RpdmVQcm9qZWN0UmVuZGVyLFxuICByZW5kZXJBbGxUb2Rvc0NsaWNrLFxuICBOZXdQcm9qZWN0TW9kdWxlRXZlbnQsXG59O1xuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge1xuICBkb21Db21wb25lbnROYW1lQ2xhc3MsXG4gIGRvbVRvZG9SZW5kZXIsXG4gIGRvbVByb2plY3RzUmVuZGVyIGFzIGRvbVByb2plY3RSZW5kZXIsXG4gIHJlbmRlckFsbFRvZG9zQ2xpY2ssXG4gIE5ld1Byb2plY3RNb2R1bGVFdmVudCxcbiAgc2VsZWN0aXZlVGhpc1dlZWtUb2Rvc1JlbmRlcixcbiAgc2VsZWN0aXZlVGhpc0RheVRvZG9zUmVuZGVyLFxuICBzZWxlY3RpdmVUaGlzTW9udGhUb2Rvc1JlbmRlcixcbn0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgcHJvamVjdEZhY3RvcnksIGdldExvY2FsU3RvcmFnZSwgdXBkYXRlU3RvcmFnZSB9IGZyb20gJy4vdG9kbyc7XG5cbi8vbG9hZCBzaWRlYmFyIGFuZCBjb250ZW50IGNvbnRhaW5lcnNcbihmdW5jdGlvbiBwYWdlTG9hZCgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudE5hbWVDbGFzcygnYXNpZGUnKSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChkb21Db21wb25lbnROYW1lQ2xhc3MoJ2NvbnRlbnQnKSk7XG5cbiAgbGV0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBsaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xpc3RDb250YWluZXInKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY29udGVudCcpLmFwcGVuZChsaXN0Q29udGFpbmVyKTtcbn0pKCk7XG5cbi8vIGdldCBsb2NhbCBzdG9yYWdlLCBpZiBub25lLCBtYWtlIGVtcHR5IGFycmF5XG5sZXQgdG9kb1Byb2plY3RzID0gZ2V0TG9jYWxTdG9yYWdlKCk7XG5pZiAoIXRvZG9Qcm9qZWN0cykge1xuICB0b2RvUHJvamVjdHMgPSBbXTtcbn1cblxuLy8gbG9hZCBzaWRlYmFyIGJ1dHRvbnNcblxuKGZ1bmN0aW9uIHNpZGViYXJMb2FkKCkge1xuICBmdW5jdGlvbiBuZXdQcm9qZWN0RXZlbnQoKSB7XG4gICAgdG9kb1Byb2plY3RzLnB1c2gocHJvamVjdEZhY3RvcnkoKSk7XG4gICAgaWYgKHRvZG9Qcm9qZWN0c1t0b2RvUHJvamVjdHMubGVuZ3RoIC0gMV0pIHtcbiAgICAgIHVwZGF0ZVN0b3JhZ2UoKTtcbiAgICAgIGRvbVByb2plY3RSZW5kZXIodG9kb1Byb2plY3RzLmxlbmd0aCAtIDEpO1xuICAgICAgZG9tVG9kb1JlbmRlcihcbiAgICAgICAgdG9kb1Byb2plY3RzW3RvZG9Qcm9qZWN0cy5sZW5ndGggLSAxXS50b2RvTGlzdC5sZW5ndGggLSAxLFxuICAgICAgICB0b2RvUHJvamVjdHMubGVuZ3RoIC0gMVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBsZXQgbmV3UHJvamVjdEJ0biA9IGRvbUNvbXBvbmVudE5hbWVDbGFzcygnYnV0dG9uJyk7XG4gIG5ld1Byb2plY3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsICduZXdQcm9qZWN0QnRuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJykuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ0bikudGV4dENvbnRlbnQgPVxuICAgICcrIE5ldyBwcm9qZWN0JztcbiAgbGV0IG5ld1Byb2plY3RCdG5FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3RCdG4nKTtcbiAgbmV3UHJvamVjdEJ0bkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBOZXdQcm9qZWN0TW9kdWxlRXZlbnQpO1xuXG4gIGxldCB0aGlzRGF5QnRuID0gZG9tQ29tcG9uZW50TmFtZUNsYXNzKCdidXR0b24nLCAndGFza0xpc3QnKTtcbiAgdGhpc0RheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdGl2ZVRoaXNEYXlUb2Rvc1JlbmRlcik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJykuYXBwZW5kQ2hpbGQodGhpc0RheUJ0bikudGV4dENvbnRlbnQgPSAndG9kYXknO1xuXG4gIGxldCB0aGlzV2Vla0J0biA9IGRvbUNvbXBvbmVudE5hbWVDbGFzcygnYnV0dG9uJywgJ3Rhc2tMaXN0Jyk7XG4gIHRoaXNXZWVrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0aXZlVGhpc1dlZWtUb2Rvc1JlbmRlcik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJykuYXBwZW5kQ2hpbGQodGhpc1dlZWtCdG4pLnRleHRDb250ZW50ID1cbiAgICAndGhpcyB3ZWVrJztcblxuICBsZXQgdGhpc01vbnRoQnRuID0gZG9tQ29tcG9uZW50TmFtZUNsYXNzKCdidXR0b24nLCAndGFza0xpc3QnKTtcbiAgdGhpc01vbnRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0aXZlVGhpc01vbnRoVG9kb3NSZW5kZXIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpLmFwcGVuZENoaWxkKHRoaXNNb250aEJ0bikudGV4dENvbnRlbnQgPVxuICAgICd0aGlzIG1vbnRoJztcblxuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpXG4gICAgLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudE5hbWVDbGFzcygnZGl2JywgJ3Byb2plY3RDb250YWluZXInKSk7XG5cbiAgbGV0IGFsbFRhc2tzRWwgPSBkb21Db21wb25lbnROYW1lQ2xhc3MoJ2J1dHRvbicsICdwcm9qZWN0VGl0bGUnKTtcbiAgYWxsVGFza3NFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlckFsbFRvZG9zQ2xpY2spO1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdENvbnRhaW5lcicpXG4gICAgLmFwcGVuZENoaWxkKGFsbFRhc2tzRWwpLnRleHRDb250ZW50ID0gJ0FsbCB0YXNrcyc7XG59KSgpO1xuXG4vL2xvYWQgcHJvamVjdHMgb24gc2lkZWJhciBhbmQgdG9kb3Mgb24gbWFpbiBjb250ZW50XG4oZnVuY3Rpb24gY29udGVudExvYWQoKSB7XG4gIGZvciAobGV0IHggPSAwOyB4IDwgdG9kb1Byb2plY3RzLmxlbmd0aDsgeCsrKSB7XG4gICAgZG9tUHJvamVjdFJlbmRlcih4KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9Qcm9qZWN0c1t4XS50b2RvTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgZG9tVG9kb1JlbmRlcihpLCB4KTtcbiAgICB9XG4gIH1cbn0pKCk7XG5cbi8vZ2V0cyByZXF1aXJlZCBpbmZvIGZvciBsb2NhbCBzdG9yYWdlIGFuZCB0aGVuIHN0b3JlcyBpdFxuZ2V0TG9jYWxTdG9yYWdlKCk7XG51cGRhdGVTdG9yYWdlKCk7XG5cbmV4cG9ydCB7IHRvZG9Qcm9qZWN0cyB9O1xuIiwiaW1wb3J0IHsgdG9kb1Byb2plY3RzIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBkb21Ub2RvUmVuZGVyIH0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5jb25zdCBwcm9qZWN0RmFjdG9yeSA9ICgpID0+IHtcbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0UHJvamVjdFRpdGxlJykudmFsdWU7XG4gIGlmICh0aXRsZSA9PSBudWxsKSB7XG4gICAgdGl0bGUgPSAndGl0bGUgbWlzc2luZyc7XG4gIH1cbiAgbGV0IHRvZG9MaXN0ID0gW107XG4gIHRvZG9MaXN0LnB1c2godG9kb0ZhY3RvcnkoKSk7XG4gIHJldHVybiB7IHRpdGxlLCB0b2RvTGlzdCB9O1xufTtcbmNvbnN0IHRvZG9GYWN0b3J5ID0gKCkgPT4ge1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXRUb2RvVGl0bGUnKS52YWx1ZTtcbiAgaWYgKHRpdGxlID09IG51bGwpIHtcbiAgICB0aXRsZSA9ICd0aXRsZSBtaXNzaW5nJztcbiAgfVxuICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXRUb2RvRGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nob29zZVByaW9yaXR5JykudmFsdWU7XG4gIGxldCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0RGF0ZScpLnZhbHVlO1xuICBpZiAoIWR1ZURhdGUpIHtcbiAgICBkdWVEYXRlID0gJyc7XG4gIH1cblxuICBsZXQgaXNDaGVja2VkID0gZmFsc2U7XG4gIGxldCBpbmRleCA9IHRvZG9Qcm9qZWN0cy5sZW5ndGg7XG4gIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUsIGlzQ2hlY2tlZCwgaW5kZXggfTtcbn07XG5cbmZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZSgpIHtcbiAgZnVuY3Rpb24gdG9kb1N0clRvT2JqKHN0cmluZykge1xuICAgIHZhciBvYmplY3QgPSBKU09OLnBhcnNlKHN0cmluZyk7XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuICBpZiAodG9kb1N0clRvT2JqKSB7XG4gICAgbGV0IGxvY2FsU3RvcmFnZU9iaiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdHJPYmonKTtcbiAgICBsb2NhbFN0b3JhZ2VPYmogPSB0b2RvU3RyVG9PYmoobG9jYWxTdG9yYWdlT2JqKTtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlT2JqO1xuICB9IGVsc2UgcmV0dXJuICh0b2RvUHJvamVjdHMgPSBbXSk7XG59XG5mdW5jdGlvbiB1cGRhdGVTdG9yYWdlKCkge1xuICBmdW5jdGlvbiB0b2RvT2JqVG9TdHIoKSB7XG4gICAgdmFyIHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHRvZG9Qcm9qZWN0cyk7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdHJPYmonLCB0b2RvT2JqVG9TdHIodG9kb1Byb2plY3RzKSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG8oZSkge1xuICBsZXQgcHJvamVjdEluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5wcm9qZWN0O1xuICB0b2RvUHJvamVjdHNbcHJvamVjdEluZGV4XS50b2RvTGlzdC5wdXNoKHRvZG9GYWN0b3J5KCkpO1xuICBsZXQgbGFzdFRvZG9JbmRleCA9IHRvZG9Qcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9MaXN0Lmxlbmd0aCAtIDE7XG4gIHVwZGF0ZVN0b3JhZ2UoKTtcbiAgZG9tVG9kb1JlbmRlcihsYXN0VG9kb0luZGV4LCBwcm9qZWN0SW5kZXgpO1xufVxuXG5leHBvcnQgeyBnZXRMb2NhbFN0b3JhZ2UgfTtcbmV4cG9ydCB7IHVwZGF0ZVN0b3JhZ2UgfTtcblxuZXhwb3J0IHsgcHJvamVjdEZhY3RvcnkgfTtcbmV4cG9ydCB7IHRvZG9GYWN0b3J5IH07XG5leHBvcnQgeyBhZGRUb2RvIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=