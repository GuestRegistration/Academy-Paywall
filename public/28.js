(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Course/Components/CourseCard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/Course/Components/CourseCard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CourseCard",
  props: {
    course: Object,
    account: Object
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    authenticated: function authenticated(state) {
      return state.authenticated;
    },
    auth: function auth(state) {
      return state.auth;
    }
  })),
  watch: {
    account: {
      immediate: true,
      handler: function handler(account) {
        if (account && !this.course.account) {
          this.course.account = account;
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Course/Components/CourseCard.vue?vue&type=template&id=aff6e366&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/Course/Components/CourseCard.vue?vue&type=template&id=aff6e366& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    { staticClass: "mx-auto", attrs: { "max-width": "344" } },
    [
      _c(
        "v-list-item",
        [
          _c("avatar", {
            staticClass: "mr-2",
            attrs: {
              src: _vm.course.account.avatar,
              color: _vm.course.account.theme_color,
              size: "50"
            }
          }),
          _vm._v(" "),
          _c(
            "v-list-item-content",
            [
              _c("v-list-item-title", { staticClass: "headline" }, [
                _vm._v(_vm._s(_vm.course.title))
              ]),
              _vm._v(" "),
              _c(
                "v-list-item-subtitle",
                [
                  _vm._v(_vm._s(_vm.course.account.name) + " "),
                  _c(
                    "inertia-link",
                    {
                      attrs: {
                        href: _vm.route("account.show", {
                          account: _vm.course.account.username
                        })
                      }
                    },
                    [_vm._v(_vm._s(_vm.course.account.at_username))]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-img", { attrs: { src: _vm.course.cover_image, height: "194" } }),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _vm._v("\n    " + _vm._s(_vm.course.snippet) + "\n    "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "tex-muted" },
            [
              _c(
                "v-icon",
                { attrs: { color: _vm.course.account.theme_color } },
                [_vm._v("date_range")]
              ),
              _vm._v(
                " " +
                  _vm._s(_vm.course.start_date) +
                  " - " +
                  _vm._s(_vm.course.end_date) +
                  "\n    "
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-actions",
        [
          _c("h2", [_vm._v(_vm._s(_vm._f("money")(_vm.course.price)))]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "inertia-link",
            {
              staticClass: "prevent-default",
              attrs: {
                href: _vm.route("account.course.show", {
                  account: _vm.course.account.username,
                  course: _vm.course.slug
                })
              }
            },
            [
              _c(
                "v-btn",
                { attrs: { dark: "", color: _vm.course.account.theme_color } },
                [_vm._v(" view course")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._t("options")
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Domain/Course/Components/CourseCard.vue":
/*!**************************************************************!*\
  !*** ./resources/js/Domain/Course/Components/CourseCard.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CourseCard_vue_vue_type_template_id_aff6e366___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CourseCard.vue?vue&type=template&id=aff6e366& */ "./resources/js/Domain/Course/Components/CourseCard.vue?vue&type=template&id=aff6e366&");
/* harmony import */ var _CourseCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CourseCard.vue?vue&type=script&lang=js& */ "./resources/js/Domain/Course/Components/CourseCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CourseCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CourseCard_vue_vue_type_template_id_aff6e366___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CourseCard_vue_vue_type_template_id_aff6e366___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Domain/Course/Components/CourseCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Domain/Course/Components/CourseCard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Domain/Course/Components/CourseCard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Course/Components/CourseCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Domain/Course/Components/CourseCard.vue?vue&type=template&id=aff6e366&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Domain/Course/Components/CourseCard.vue?vue&type=template&id=aff6e366& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseCard_vue_vue_type_template_id_aff6e366___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseCard.vue?vue&type=template&id=aff6e366& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Course/Components/CourseCard.vue?vue&type=template&id=aff6e366&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseCard_vue_vue_type_template_id_aff6e366___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseCard_vue_vue_type_template_id_aff6e366___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);