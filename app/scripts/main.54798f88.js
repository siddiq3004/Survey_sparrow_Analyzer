(this["webpackChunkreact_webpack_dev"] = this["webpackChunkreact_webpack_dev"] || []).push([["main"],{

/***/ 48187:
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ 95722);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main */ 13182);
/* harmony import */ var _sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sparrowengg/twigs-react */ 8714);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var App = function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    loaded = _useState2[0],
    setLoaded = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      style: {
        "textAlign": "center",
        "marginTop": "100px"
      }
    }, "App is loading...")),
    _useState4 = _slicedToArray(_useState3, 2),
    child = _useState4[0],
    setChild = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setLoaded(true);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!loaded) return;
    var client = window.app.initialized();
    setChild( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_main__WEBPACK_IMPORTED_MODULE_2__["default"], {
      client: client
    }));
  }, [loaded]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
    theme: {
      colors: {
        primary: '#19b885',
        primary100: '#d1f1e7',
        primary200: '#baeada',
        primary300: '#a3e3ce',
        primary400: '#19b885',
        primary500: '#17a678',
        primary600: '#14936a',
        primary700: '#12815d',
        primary800: '#0f6e50',
        primary900: '#0d5c43'
      }
    }
  }, child);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 984:
/*!**********************************!*\
  !*** ./src/components/Drawer.js ***!
  \**********************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: S:\\Survey_Sparrow\\src\\components\\Drawer.js: Identifier 'Drawer' has already been declared. (4:9)\n\n\u001b[0m \u001b[90m 2 |\u001b[39m \u001b[36mimport\u001b[39m { \u001b[33mInput\u001b[39m\u001b[33m,\u001b[39m\u001b[33mFlex\u001b[39m\u001b[33m,\u001b[39m\u001b[33mBox\u001b[39m\u001b[33m,\u001b[39m \u001b[33mHeading\u001b[39m\u001b[33m,\u001b[39m \u001b[33mText\u001b[39m\u001b[33m,\u001b[39m \u001b[33mButton\u001b[39m } \u001b[36mfrom\u001b[39m \u001b[32m\"@sparrowengg/twigs-react\"\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 3 |\u001b[39m \u001b[36mimport\u001b[39m { \u001b[33mDrawer\u001b[39m\u001b[33m,\u001b[39m \u001b[33mDrawerHeader\u001b[39m\u001b[33m,\u001b[39m \u001b[33mDrawerFooter\u001b[39m\u001b[33m,\u001b[39m \u001b[33mDrawerBody\u001b[39m } \u001b[36mfrom\u001b[39m \u001b[32m\"@sparrowengg/twigs-react\"\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 4 |\u001b[39m \u001b[36mfunction\u001b[39m \u001b[33mDrawer\u001b[39m() {\u001b[0m\n\u001b[0m \u001b[90m   |\u001b[39m          \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 5 |\u001b[39m     \u001b[36mconst\u001b[39m [isDrawerOpen\u001b[33m,\u001b[39m setIsDrawerOpen] \u001b[33m=\u001b[39m \u001b[33mReact\u001b[39m\u001b[33m.\u001b[39museState(\u001b[36mfalse\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 6 |\u001b[39m     \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m \u001b[90m 7 |\u001b[39m       \u001b[33m<\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at constructor (S:\\Survey_Sparrow\\node_modules\\@babel\\parser\\lib\\index.js:356:19)\n    at JSXParserMixin.raise (S:\\Survey_Sparrow\\node_modules\\@babel\\parser\\lib\\index.js:3223:19)\n    at ScopeHandler.checkRedeclarationInScope (S:\\Survey_Sparrow\\node_modules\\@babel\\parser\\lib\\index.js:1496:19)\n    at ScopeHandler.declareName (S:\\Survey_Sparrow\\node_modules\\@babel\\parser\\lib\\index.js:1467:12)\n    at JSXParserMixin.registerFunctionStatementId (S:\\Survey_Sparrow\\node_modules\\@babel\\parser\\lib\\index.js:13339:16)\n    at JSXParserMixin.parseFunction (S:\\Survey_Sparrow\\node_modules\\@babel\\parser\\lib\\index.js:13323:12)\n    at JSXParserMixin.parseFunctionStatement (S:\\Survey_Sparrow\\node_modules\\@babel\\parser\\lib\\index.js:12984:17)\n    at JSXParserMixin.parseStatementContent (S:\\Survey_Sparrow\\node_modules\\@babel\\parser\\lib\\index.js:12614:21)\n    at JSXParserMixin.parseStatementLike (S:\\Survey_Sparrow\\node_modules\\@babel\\parser\\lib\\index.js:12588:17)\n    at JSXParserMixin.parseModuleItem (S:\\Survey_Sparrow\\node_modules\\@babel\\parser\\lib\\index.js:12565:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (S:\\Survey_Sparrow\\node_modules\\@babel\\parser\\lib\\index.js:13189:36)\n    at JSXParserMixin.parseBlockBody (S:\\Survey_Sparrow\\node_modules\\@babel\\parser\\lib\\index.js:13182:10)\n    at JSXParserMixin.parseProgram (S:\\Survey_Sparrow\\node_modules\\@babel\\parser\\lib\\index.js:12464:10)\n    at JSXParserMixin.parseTopLevel (S:\\Survey_Sparrow\\node_modules\\@babel\\parser\\lib\\index.js:12454:25)\n    at JSXParserMixin.parse (S:\\Survey_Sparrow\\node_modules\\@babel\\parser\\lib\\index.js:14376:10)\n    at parse (S:\\Survey_Sparrow\\node_modules\\@babel\\parser\\lib\\index.js:14417:38)\n    at parser (S:\\Survey_Sparrow\\node_modules\\@babel\\core\\lib\\parser\\index.js:41:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (S:\\Survey_Sparrow\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:64:37)\n    at normalizeFile.next (<anonymous>)\n    at run (S:\\Survey_Sparrow\\node_modules\\@babel\\core\\lib\\transformation\\index.js:21:50)\n    at run.next (<anonymous>)\n    at transform (S:\\Survey_Sparrow\\node_modules\\@babel\\core\\lib\\transform.js:22:33)\n    at transform.next (<anonymous>)\n    at step (S:\\Survey_Sparrow\\node_modules\\gensync\\index.js:261:32)\n    at S:\\Survey_Sparrow\\node_modules\\gensync\\index.js:273:13\n    at async.call.result.err.err (S:\\Survey_Sparrow\\node_modules\\gensync\\index.js:223:11)");

/***/ }),

/***/ 13182:
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/logo.svg */ 36910);
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icon.svg */ 23930);
/* harmony import */ var _assets_icon_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_icon_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sparrowengg/twigs-react */ 8714);
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Drawer */ 984);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Main = function Main(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    name = _useState2[0],
    setName = _useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
    className: "Main-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    className: "Nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
    className: "Header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "h1"
  }, "Analyzer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
    color: "secondary"
  }, "About Us"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    className: "content-layout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
    css: {
      width: 340,
      height: 450,
      padding: '$4 $8',
      border: '1px solid $neutral200',
      borderRadius: '$lg',
      boxShadow: '$sm',
      backgroundColor: '$primary100'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ri-p"
  }, " Im Your "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "rii-p"
  }, "Analyzer......."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
    className: "btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
    color: "secondary"
  }, "Analyze"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Input, {
    css: {
      width: 540,
      height: 460,
      padding: '$4 $8',
      border: '1px solid $neutral200',
      borderRadius: '$lg',
      boxShadow: '$sm',
      backgroundColor: '$primary100'
    },
    placeholder: "Im here to Summarize Your Text....."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
    className: "summarize-sec-outer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Dra, null)));
};
{/* <img src={icon} className="App-logo" alt="logo" />
      <img src={reactLogo} className="App-logo" alt="logo" />
      <Heading size = "h3">Hi {name},</Heading>
      <Text>Welcome to your first react app </Text>
      <Button css={{
        background:"$primary"
      }}>Click Me!</Button> */}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ 55579:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ 73935);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ 98548);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ 48187);




react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null)), document.getElementById('root'));

/***/ }),

/***/ 39087:
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/App.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Main-box{\n  background-color: rgb(121, 185, 144, 104);\n  padding: 0px;\n  margin: 0px;\n  \n  \n}\n.Nav{\n  justify-content:space-between;\n  padding: 20px;\n  background-color: aliceblue;\n  /* margin: 10px; */\n  position: relative;\n  top: 20px;\n  margin-left: 20px;\n  margin-right: 20px;\n  border-radius: 10px;\n}\n.about-btn{\n  border-style: none;\n  background-color: black;\n}\n.content-layout{\n  justify-content: space-around;\n  padding: 30px;\n  margin: 30px;\n}\n.ri-p{\n  color: cadetblue;\n  font-size: 60px;\n  \n}\n.rii-p{\n  font-size: 50px;\n  margin-top: 50px;\n  display: inline-block;\n}\n.btn{\n  position: relative;;\n  left: 200px;\n  top:30px;\n}\n.h1{\n  font-size: 30px;\n}\n.ot{\n  font-size: 30px;\n  padding: 30px;\n}\n/* Input{\n  width: 80%;\n  \n} */\n\n\n\n\n\n\n\n\n\n/* .App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n} */\n\n\n", "",{"version":3,"sources":["webpack://src/App.css"],"names":[],"mappings":"AAAA;EACE,yCAAyC;EACzC,YAAY;EACZ,WAAW;;;AAGb;AACA;EACE,6BAA6B;EAC7B,aAAa;EACb,2BAA2B;EAC3B,kBAAkB;EAClB,kBAAkB;EAClB,SAAS;EACT,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,uBAAuB;AACzB;AACA;EACE,6BAA6B;EAC7B,aAAa;EACb,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,eAAe;;AAEjB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,qBAAqB;AACvB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,QAAQ;AACV;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;EACf,aAAa;AACf;AACA;;;GAGG;;;;;;;;;;AAUH;;;;;;;GAOG","sourcesContent":[".Main-box{\n  background-color: rgb(121, 185, 144, 104);\n  padding: 0px;\n  margin: 0px;\n  \n  \n}\n.Nav{\n  justify-content:space-between;\n  padding: 20px;\n  background-color: aliceblue;\n  /* margin: 10px; */\n  position: relative;\n  top: 20px;\n  margin-left: 20px;\n  margin-right: 20px;\n  border-radius: 10px;\n}\n.about-btn{\n  border-style: none;\n  background-color: black;\n}\n.content-layout{\n  justify-content: space-around;\n  padding: 30px;\n  margin: 30px;\n}\n.ri-p{\n  color: cadetblue;\n  font-size: 60px;\n  \n}\n.rii-p{\n  font-size: 50px;\n  margin-top: 50px;\n  display: inline-block;\n}\n.btn{\n  position: relative;;\n  left: 200px;\n  top:30px;\n}\n.h1{\n  font-size: 30px;\n}\n.ot{\n  font-size: 30px;\n  padding: 30px;\n}\n/* Input{\n  width: 80%;\n  \n} */\n\n\n\n\n\n\n\n\n\n/* .App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n} */\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 51424:
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n\tmargin: 0;\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n\t\t\"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n\t\tsans-serif;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n\tfont-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n\t\tmonospace;\n}\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;CACC,SAAS;CACT;;YAEW;CACX,mCAAmC;CACnC,kCAAkC;AACnC;;AAEA;CACC;WACU;AACX","sourcesContent":["body {\n\tmargin: 0;\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n\t\t\"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n\t\tsans-serif;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n\tfont-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n\t\tmonospace;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 23930:
/*!*****************************!*\
  !*** ./src/assets/icon.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "/assets/img/iconb34bf60b.svg";

/***/ }),

/***/ 36910:
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "/assets/img/logo6ce24c58.svg";

/***/ }),

/***/ 95722:
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./App.css */ 39087);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 98548:
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ 51424);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(26981), __webpack_exec__(55579)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.54798f88.js.map