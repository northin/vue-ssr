(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./app/componment/new.vue":
/*!********************************!*\
  !*** ./app/componment/new.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _new_vue_vue_type_template_id_f8e4060e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new.vue?vue&type=template&id=f8e4060e */ \"./app/componment/new.vue?vue&type=template&id=f8e4060e\");\n/* harmony import */ var _new_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new.vue?vue&type=script&lang=js */ \"./app/componment/new.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _new_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _new_vue_vue_type_template_id_f8e4060e__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _new_vue_vue_type_template_id_f8e4060e__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"app\\\\componment\\\\new.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./app/componment/new.vue?");

/***/ }),

/***/ "./app/componment/new.vue?vue&type=script&lang=js":
/*!********************************************************!*\
  !*** ./app/componment/new.vue?vue&type=script&lang=js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./new.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./app/componment/new.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./app/componment/new.vue?");

/***/ }),

/***/ "./app/componment/new.vue?vue&type=template&id=f8e4060e":
/*!**************************************************************!*\
  !*** ./app/componment/new.vue?vue&type=template&id=f8e4060e ***!
  \**************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_template_id_f8e4060e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./new.vue?vue&type=template&id=f8e4060e */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/componment/new.vue?vue&type=template&id=f8e4060e\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_template_id_f8e4060e__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_template_id_f8e4060e__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./app/componment/new.vue?");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./app/componment/new.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./app/componment/new.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'bar',\n  data: function data() {\n    return {\n      test: 'asd'\n    };\n  },\n  asyncData: function asyncData(_ref) {\n    var store = _ref.store,\n        route = _ref.route;\n    //触发函数\n    return store.dispatch(\"test\", 1);\n  },\n\n  methods: {\n    test1: function test1() {\n      console.log(\"test\");\n    }\n  },\n  computed: {\n    item: function item() {\n      console.log(this.$store.state);\n      return this.$store.state.items[1];\n    }\n  },\n  created: function created() {}\n});\n\n//# sourceURL=webpack:///./app/componment/new.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/componment/new.vue?vue&type=template&id=f8e4060e":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/componment/new.vue?vue&type=template&id=f8e4060e ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { attrs: { id: \"bar\" } }, [\n    _c(\"div\", [_vm._v(\"new\")]),\n    _vm._v(\" \"),\n    _c(\"div\", { on: { click: _vm.test1 } }, [_vm._v(_vm._s(_vm.test))]),\n    _vm._v(\" \"),\n    _c(\"div\", [_vm._v(_vm._s(_vm.item.title))])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./app/componment/new.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

}]);