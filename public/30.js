(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/User/Components/ProfileCard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/User/Components/ProfileCard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CourseCard",
  props: {
    profile: Object,
    account: Object
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    authenticated: function authenticated(state) {
      return state.authenticated;
    },
    auth: function auth(state) {
      return state.auth;
    },
    inFrame: function inFrame(state) {
      return state.inFrame;
    }
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/User/Pages/ProfileList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/User/Pages/ProfileList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _layouts_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/layouts/App */ "./resources/js/layouts/App.vue");
/* harmony import */ var _Components_ProfileCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Components/ProfileCard */ "./resources/js/Domain/User/Components/ProfileCard.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProfileList",
  layout: function layout(h, page) {
    return h(_layouts_App__WEBPACK_IMPORTED_MODULE_1__["default"], [page]);
  },
  components: {
    ProfileCard: _Components_ProfileCard__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  metaInfo: function metaInfo() {
    return {
      title: "Instructors (".concat(this.instructors.length, ")"),
      titleTemplate: '%s - AcadaApp'
    };
  },
  data: function data() {
    return {
      data: []
    };
  },
  props: {
    account: Object,
    courses: Array
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['auth', 'authenticated', 'isMyAccount', 'isOnMyAccount'])),
  watch: {
    courses: {
      immediate: true,
      handler: function handler(courses) {
        this.data = courses;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/User/Components/ProfileCard.vue?vue&type=template&id=413d4d52&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/User/Components/ProfileCard.vue?vue&type=template&id=413d4d52& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mx-auto" },
    [
      _c("v-card-text", [
        _c(
          "div",
          { staticClass: "text-center" },
          [
            _c("avatar", {
              attrs: {
                src: _vm.profile.avatar,
                color: "" + (_vm.account ? _vm.account.theme_color : "primary"),
                size: "100",
                text: _vm.profile.initials,
                headline: "yes"
              }
            }),
            _vm._v(" "),
            _c("h2", [_vm._v(_vm._s(_vm.profile.fullname))])
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/User/Pages/ProfileList.vue?vue&type=template&id=6cbbbd35&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/User/Pages/ProfileList.vue?vue&type=template&id=6cbbbd35& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
      _c("h4", [_vm._v("Instructors (" + _vm._s(_vm.data.length) + ")")]),
      _vm._v(" "),
      !_vm.data.length
        ? _c("div", { staticClass: "text-center text-muted my-5" }, [
            _vm._v("\n            No instructor\n  ")
          ])
        : _c(
            "v-row",
            _vm._l(_vm.data, function(course) {
              return _c(
                "v-col",
                { key: course.id, attrs: { cols: "12", md: "6", lg: "4" } },
                [
                  _c("course-card", {
                    attrs: {
                      account: _vm.account,
                      course: course,
                      showStatus: true,
                      showInstructor: false
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "options",
                          fn: function() {
                            return [
                              _vm.isOnMyAccount(course)
                                ? _c(
                                    "v-menu",
                                    {
                                      attrs: {
                                        origin: "center center",
                                        transition: "scale-transition"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "activator",
                                            fn: function(ref) {
                                              var on = ref.on
                                              return [
                                                _c(
                                                  "v-btn",
                                                  _vm._g(
                                                    { attrs: { icon: "" } },
                                                    on
                                                  ),
                                                  [
                                                    _c("v-icon", [
                                                      _vm._v(
                                                        "mdi-dots-vertical"
                                                      )
                                                    ])
                                                  ],
                                                  1
                                                )
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    },
                                    [
                                      _vm._v(" "),
                                      _c(
                                        "v-list",
                                        [
                                          _c(
                                            "v-list-item",
                                            {
                                              on: {
                                                click: function($event) {
                                                  _vm.$inertia.visit(
                                                    _vm.route(
                                                      "account.course.edit",
                                                      {
                                                        account:
                                                          _vm.account.username,
                                                        course: course.slug
                                                      }
                                                    )
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "v-list-item-icon",
                                                [
                                                  _c("v-icon", [_vm._v("edit")])
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-item-content",
                                                [
                                                  _c("v-list-item-title", [
                                                    _vm._v("Edit course")
                                                  ])
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-list-item",
                                            {
                                              on: {
                                                click: function($event) {
                                                  _vm.$inertia.visit(
                                                    _vm.route(
                                                      "account.course.student.list",
                                                      {
                                                        account:
                                                          _vm.account.username,
                                                        course: course.slug
                                                      }
                                                    )
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "v-list-item-icon",
                                                [
                                                  _c("v-icon", [
                                                    _vm._v("people")
                                                  ])
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-item-content",
                                                [
                                                  _c("v-list-item-title", [
                                                    _vm._v("View students")
                                                  ])
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ]
                          },
                          proxy: true
                        }
                      ],
                      null,
                      true
                    )
                  })
                ],
                1
              )
            }),
            1
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Domain/User/Components/ProfileCard.vue":
/*!*************************************************************!*\
  !*** ./resources/js/Domain/User/Components/ProfileCard.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileCard_vue_vue_type_template_id_413d4d52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileCard.vue?vue&type=template&id=413d4d52& */ "./resources/js/Domain/User/Components/ProfileCard.vue?vue&type=template&id=413d4d52&");
/* harmony import */ var _ProfileCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileCard.vue?vue&type=script&lang=js& */ "./resources/js/Domain/User/Components/ProfileCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileCard_vue_vue_type_template_id_413d4d52___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileCard_vue_vue_type_template_id_413d4d52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Domain/User/Components/ProfileCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Domain/User/Components/ProfileCard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Domain/User/Components/ProfileCard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/User/Components/ProfileCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Domain/User/Components/ProfileCard.vue?vue&type=template&id=413d4d52&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Domain/User/Components/ProfileCard.vue?vue&type=template&id=413d4d52& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_template_id_413d4d52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileCard.vue?vue&type=template&id=413d4d52& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/User/Components/ProfileCard.vue?vue&type=template&id=413d4d52&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_template_id_413d4d52___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_template_id_413d4d52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Domain/User/Pages/ProfileList.vue":
/*!********************************************************!*\
  !*** ./resources/js/Domain/User/Pages/ProfileList.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileList_vue_vue_type_template_id_6cbbbd35___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileList.vue?vue&type=template&id=6cbbbd35& */ "./resources/js/Domain/User/Pages/ProfileList.vue?vue&type=template&id=6cbbbd35&");
/* harmony import */ var _ProfileList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileList.vue?vue&type=script&lang=js& */ "./resources/js/Domain/User/Pages/ProfileList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileList_vue_vue_type_template_id_6cbbbd35___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileList_vue_vue_type_template_id_6cbbbd35___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Domain/User/Pages/ProfileList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Domain/User/Pages/ProfileList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Domain/User/Pages/ProfileList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/User/Pages/ProfileList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Domain/User/Pages/ProfileList.vue?vue&type=template&id=6cbbbd35&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Domain/User/Pages/ProfileList.vue?vue&type=template&id=6cbbbd35& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileList_vue_vue_type_template_id_6cbbbd35___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileList.vue?vue&type=template&id=6cbbbd35& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/User/Pages/ProfileList.vue?vue&type=template&id=6cbbbd35&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileList_vue_vue_type_template_id_6cbbbd35___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileList_vue_vue_type_template_id_6cbbbd35___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);