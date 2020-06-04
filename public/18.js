(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Course/Pages/CourseShow.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/Course/Pages/CourseShow.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Domain_Account_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Domain/Account/Layout */ "./resources/js/Domain/Account/Layout.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CourseShow",
  layout: function layout(h, page) {
    return h(_Domain_Account_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], [page]);
  },
  metaInfo: function metaInfo() {
    return {
      title: "".concat(this.course.title, " ").concat(this.account.at_username),
      titleTemplate: '%s - AcadaApp'
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['auth', 'authenticated', 'isMyAccount', 'isOnMyAccount'])), {}, {
    account: function account() {
      return this.$page.account;
    },
    course: function course() {
      return this.$page.course;
    }
  }),
  methods: {
    enroll: function enroll() {
      this.$inertia.visit(this.route('account.course.enroll', {
        account: this.account.username,
        course: this.course.slug
      }));
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Course/Pages/CourseShow.vue?vue&type=template&id=6d8d9f6c&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/Course/Pages/CourseShow.vue?vue&type=template&id=6d8d9f6c& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h4", [_vm._v(_vm._s(_vm.course.title))]),
      _vm._v(" "),
      _c("v-img", { attrs: { src: _vm.course.cover_image } }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "tex-muted mt-3" },
        [
          _c("v-icon", { attrs: { color: _vm.account.theme_color } }, [
            _vm._v("date_range")
          ]),
          _vm._v(
            " " +
              _vm._s(_vm.course.start_date) +
              " - " +
              _vm._s(_vm.course.end_date) +
              "\n    "
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c("div", { staticClass: "d-flex" }, [
        _c("div", [
          _c("h1", [_vm._v(_vm._s(_vm._f("money")(_vm.course.price)))])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "ml-auto", on: { click: _vm.enroll } },
          [
            _c(
              "v-btn",
              {
                attrs: { dark: "", large: "", color: _vm.account.theme_color }
              },
              [
                _vm._v("\n                Enroll Now "),
                _c("v-icon", [_vm._v("arrow_forward")])
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c("div", [
        _vm._v("\n        " + _vm._s(_vm.course.description) + "\n    ")
      ]),
      _vm._v(" "),
      _vm._t("default"),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          attrs: {
            fixed: "",
            dark: "",
            fab: "",
            bottom: "",
            right: "",
            large: "",
            color: _vm.account.theme_color,
            title: "Enroll for " + _vm.course.title
          },
          on: { click: _vm.enroll }
        },
        [_c("v-icon", [_vm._v("arrow_forward")])],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Domain/Course/Pages/CourseShow.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Domain/Course/Pages/CourseShow.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CourseShow_vue_vue_type_template_id_6d8d9f6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CourseShow.vue?vue&type=template&id=6d8d9f6c& */ "./resources/js/Domain/Course/Pages/CourseShow.vue?vue&type=template&id=6d8d9f6c&");
/* harmony import */ var _CourseShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CourseShow.vue?vue&type=script&lang=js& */ "./resources/js/Domain/Course/Pages/CourseShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CourseShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CourseShow_vue_vue_type_template_id_6d8d9f6c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CourseShow_vue_vue_type_template_id_6d8d9f6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Domain/Course/Pages/CourseShow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Domain/Course/Pages/CourseShow.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Domain/Course/Pages/CourseShow.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseShow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Course/Pages/CourseShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Domain/Course/Pages/CourseShow.vue?vue&type=template&id=6d8d9f6c&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Domain/Course/Pages/CourseShow.vue?vue&type=template&id=6d8d9f6c& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseShow_vue_vue_type_template_id_6d8d9f6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseShow.vue?vue&type=template&id=6d8d9f6c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Course/Pages/CourseShow.vue?vue&type=template&id=6d8d9f6c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseShow_vue_vue_type_template_id_6d8d9f6c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseShow_vue_vue_type_template_id_6d8d9f6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);