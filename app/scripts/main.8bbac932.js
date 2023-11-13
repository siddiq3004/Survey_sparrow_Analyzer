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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sparrowengg/twigs-react */ 8714);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function Dra() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    isDrawerOpen = _React$useState2[0],
    setIsDrawerOpen = _React$useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_1__.Drawer, {
    isOpen: isDrawerOpen,
    onClose: function onClose() {
      return setIsDrawerOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_1__.DrawerHeader, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
    size: "h4"
  }, "Summarized Content")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_1__.DrawerBody, null, "Content From ChatGPT......."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_1__.DrawerFooter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_1__.Button, null, "Download It !!"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: function onClick() {
      return setIsDrawerOpen(true);
    }
  }, "Summarized Content"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dra);

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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
    className: "Main-box-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    className: "Nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
    className: "Header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "h1"
  }, "Analyzer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: "abt-btn"
  }, "About Us"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    className: "content-layout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
    css: {
      width: 340,
      height: 400,
      padding: '$4 $8',
      border: '1px solid $neutral200',
      borderRadius: '$lg',
      boxShadow: '$sm',
      backgroundColor: '#F4F6F7'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ri-p"
  }, " Im Your "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "rii-p"
  }, "Analyzer.......|"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
    className: "btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
    color: "secondary",
    size: "2xl"
  }, "Analyze"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Input, {
    css: {
      width: 540,
      height: 400,
      padding: '$4 $8',
      border: '1px solid $neutral200',
      borderRadius: '$lg',
      boxShadow: '$sm',
      backgroundColor: '$primary100'
    },
    placeholder: "Im here to Summarize Your Text......"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    className: "fl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Drawer__WEBPACK_IMPORTED_MODULE_4__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
    className: "Main-box-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "abt"
  }, "About Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    className: "flex-abt"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
    css: _defineProperty(_defineProperty(_defineProperty({
      width: 500,
      height: 480,
      border: '1px solid $neutral200',
      borderRadius: '$lg',
      boxShadow: '$sm',
      backgroundColor: '$primary100',
      backgroundImage: 'url("https://images.hivisasa.com/1200/RMno3P25Nlblackincorp.jpg")'
    }, "borderRadius", '$2xl'), "backgroundSize", 'cover'), "position", 'relative')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
    css: {
      width: 340,
      height: 330,
      padding: '$4 $8',
      border: '1px solid $neutral200',
      borderRadius: '$lg',
      boxShadow: '$sm',
      backgroundColor: '#4A9CA6'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Accordion, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.AccordionItem, {
    value: "item-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.AccordionTrigger, {
    className: "acc"
  }, "Why to Choose Analyzer !"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.AccordionContent, {
    className: "acc"
  }, "The analyzer is a tool equipped with a user-friendly interface designed to efficiently summarize provided information using the ChatGPT API")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.AccordionItem, {
    value: "item-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.AccordionTrigger, null, "ChatGPT Integration"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.AccordionContent, {
    className: "acc"
  }, "ChatGPT helps to summarize the given context.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.AccordionItem, {
    value: "item-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.AccordionTrigger, null, "MS Word Integration"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.AccordionContent, {
    className: "acc"
  }, "The Analyzed Info can Download through Docs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.AccordionItem, {
    value: "item-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.AccordionTrigger, null, "Ease To Use"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.AccordionContent, {
    className: "acc"
  }, "Very Simple UI and Makes Good Experience")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.AccordionItem, {
    value: "item-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.AccordionTrigger, null, "Scalable"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.AccordionContent, {
    className: "acc"
  }, "It Provides Scalability"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    className: "Footer"
  })));
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
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/css-loader/dist/cjs.js):\nCssSyntaxError\n\n(22:3) Unknown word\n\n \u001b[90m 20 | \u001b[39m  border-style\u001b[33m:\u001b[39m none\u001b[33m;\u001b[39m\n \u001b[90m 21 | \u001b[39m  background-color\u001b[33m:\u001b[39m cadetblue\u001b[33m;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 22 | \u001b[39m  \u001b[35m#F4F6F7\u001b[39m\n \u001b[90m    | \u001b[39m  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 23 | \u001b[39m\u001b[33m}\u001b[39m\n \u001b[90m 24 | \u001b[39m\u001b[33m.content-layout\u001b[39m\u001b[33m{\u001b[39m\n");

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
//# sourceMappingURL=main.8bbac932.js.map