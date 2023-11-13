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
    className: "dra",
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
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    surveyText = _useState4[0],
    setSurveyText = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    isSubmitDisabled = _useState6[0],
    setIsSubmitDisabled = _useState6[1];

  // useEffect(() => {
  //   setIsSubmitDisabled(surveyText === '');
  // }, [surveyText]);
  function handleSubmit() {
    return _handleSubmit.apply(this, arguments);
  }
  function _handleSubmit() {
    _handleSubmit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _response$choices$, _surveyObject$data, response, questionsArray, createSurveyResponse, surveyObject, surveyId, numQuestions;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setIsSubmitDisabled(true);
            _context.next = 4;
            return generateQuestion(query(surveyText), client);
          case 4:
            response = _context.sent;
            questionsArray = response === null || response === void 0 || (_response$choices$ = response.choices[0]) === null || _response$choices$ === void 0 || (_response$choices$ = _response$choices$.message) === null || _response$choices$ === void 0 ? void 0 : _response$choices$.content.split('\n');
            _context.next = 8;
            return createSurvey(surveyText, client);
          case 8:
            createSurveyResponse = _context.sent;
            surveyObject = JSON.parse(createSurveyResponse).body;
            surveyId = surveyObject === null || surveyObject === void 0 || (_surveyObject$data = surveyObject.data) === null || _surveyObject$data === void 0 ? void 0 : _surveyObject$data.id;
            numQuestions = questionsArray.length;
            _context.next = 14;
            return createQuestions(numQuestions, questionsArray, surveyId, client);
          case 14:
            document.getElementById('InputForChatGpt').value = '';
            client["interface"].alertMessage('Survey Generated Successfully', {
              type: 'success'
            });
            setIsSubmitDisabled(false);
            _context.next = 25;
            break;
          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](0);
            document.getElementById('InputForChatGpt').value = '';
            setIsSubmitDisabled(false);
            client["interface"].alertMessage('Error while generating the survey. If your survey is malformed kindly delete it.', {
              type: 'failure'
            });
            console.error(_context.t0);
          case 25:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 19]]);
    }));
    return _handleSubmit.apply(this, arguments);
  }
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
  }, "Analyzer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
    className: "about-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
    color: "secondary"
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
  }, "Analyzer......|"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
    className: "hf"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, " \xA9 Copyright Analyzer & Team ")))));
};
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
___CSS_LOADER_EXPORT___.push([module.id, ".Main-box{\n  padding: 0px;\n  margin: 0px;\n}\n.Main-box-1{\n  background-color: cadetblue; \n}\n.Nav{\n  justify-content:space-between;\n  padding: 20px;\n  background-color: rgb(240, 253, 255);\n  /* margin: 10px; */\n  position: relative;\n  top: 20px;\n  margin-left: 21px;\n  margin-right: 20px;\n  border-radius: 10px;\n}\n.about-btn{\n  border-style: none;\n  color: cadetblue;\n  padding-right: 70px;\n  /* width: 200px; */\n\n}\n.content-layout{\n  justify-content: space-around;\n  padding: 30px;\n  margin: 30px;\n}\n.ri-p{\n  color: cadetblue;\n  font-size: 60px;\n  padding-left: 8px;\n  padding-top: 95px ;\n\n  \n}\n.rii-p{\n  font-size: 50px;\n  margin-top: 20px;\n  display: inline-block;\n}\n.btn{\n  position: relative;;\n  left: 100px;\n  top:80px;\n  \n}\n.h1{\n  font-size: 30px;\n}\n.ot{\n  font-size: 30px;\n  padding: 30px;\n}\n\n.fl{\n  justify-content: space-around;\n  padding-bottom: 5px;\n}\n.abt{\n  text-align: center;\n  color: black;\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n  font-weight: 900;\n  font-size: 35px;\n  margin: 25px;\n}\n.Main-box-2{\n  background-color: whitesmoke;\n  padding-top: 40px;\n}\n.flex-abt{\n  display: inline-block;\n  justify-content: space-around;\n\n}\n.Footer{\n  justify-content:center;\n  padding: 20px;\n  background-color:cadetblue;\n  \n  margin-top: 50px;\n  position: relative;\n  bottom: 20px;\n  margin-left: 20px;\n  margin-right: 20px;\n  border-radius: 10px;\n}\n.acc{\n  padding-left: 10px;\n}\n\n\n.dra{\n  width: 250px;\n\n}\n\n\n\n\n\n/* .App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n} */\n\n\n", "",{"version":3,"sources":["webpack://src/App.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,WAAW;AACb;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,6BAA6B;EAC7B,aAAa;EACb,oCAAoC;EACpC,kBAAkB;EAClB,kBAAkB;EAClB,SAAS;EACT,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;;AAEpB;AACA;EACE,6BAA6B;EAC7B,aAAa;EACb,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;;;AAGpB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,qBAAqB;AACvB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,QAAQ;;AAEV;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;EACf,aAAa;AACf;;AAEA;EACE,6BAA6B;EAC7B,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,wEAAwE;EACxE,gBAAgB;EAChB,eAAe;EACf,YAAY;AACd;AACA;EACE,4BAA4B;EAC5B,iBAAiB;AACnB;AACA;EACE,qBAAqB;EACrB,6BAA6B;;AAE/B;AACA;EACE,sBAAsB;EACtB,aAAa;EACb,0BAA0B;;EAE1B,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,kBAAkB;AACpB;;;AAGA;EACE,YAAY;;AAEd;;;;;;AAMA;;;;;;;GAOG","sourcesContent":[".Main-box{\n  padding: 0px;\n  margin: 0px;\n}\n.Main-box-1{\n  background-color: cadetblue; \n}\n.Nav{\n  justify-content:space-between;\n  padding: 20px;\n  background-color: rgb(240, 253, 255);\n  /* margin: 10px; */\n  position: relative;\n  top: 20px;\n  margin-left: 21px;\n  margin-right: 20px;\n  border-radius: 10px;\n}\n.about-btn{\n  border-style: none;\n  color: cadetblue;\n  padding-right: 70px;\n  /* width: 200px; */\n\n}\n.content-layout{\n  justify-content: space-around;\n  padding: 30px;\n  margin: 30px;\n}\n.ri-p{\n  color: cadetblue;\n  font-size: 60px;\n  padding-left: 8px;\n  padding-top: 95px ;\n\n  \n}\n.rii-p{\n  font-size: 50px;\n  margin-top: 20px;\n  display: inline-block;\n}\n.btn{\n  position: relative;;\n  left: 100px;\n  top:80px;\n  \n}\n.h1{\n  font-size: 30px;\n}\n.ot{\n  font-size: 30px;\n  padding: 30px;\n}\n\n.fl{\n  justify-content: space-around;\n  padding-bottom: 5px;\n}\n.abt{\n  text-align: center;\n  color: black;\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n  font-weight: 900;\n  font-size: 35px;\n  margin: 25px;\n}\n.Main-box-2{\n  background-color: whitesmoke;\n  padding-top: 40px;\n}\n.flex-abt{\n  display: inline-block;\n  justify-content: space-around;\n\n}\n.Footer{\n  justify-content:center;\n  padding: 20px;\n  background-color:cadetblue;\n  \n  margin-top: 50px;\n  position: relative;\n  bottom: 20px;\n  margin-left: 20px;\n  margin-right: 20px;\n  border-radius: 10px;\n}\n.acc{\n  padding-left: 10px;\n}\n\n\n.dra{\n  width: 250px;\n\n}\n\n\n\n\n\n/* .App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n} */\n\n\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=main.42e779e6.js.map