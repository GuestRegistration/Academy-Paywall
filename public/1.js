(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Account/Components/CoursesQuickEnroll.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/Account/Components/CoursesQuickEnroll.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Domain_Course_Components_CourseCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Domain/Course/Components/CourseCard */ "./resources/js/Domain/Course/Components/CourseCard.vue");
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
  name: "CoursesQuickEnroll",
  components: {
    CourseCard: _Domain_Course_Components_CourseCard__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      dialog: false,
      course_index: null
    };
  },
  props: {
    courses: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    account: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  computed: {
    course: function course() {
      return this.course_index === null ? null : this.courses[this.course_index];
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Account/Components/CoursesQuickEnroll.vue?vue&type=template&id=676cb045&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/Account/Components/CoursesQuickEnroll.vue?vue&type=template&id=676cb045& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _vm.courses
    ? _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _c(
            "v-dialog",
            {
              attrs: {
                scrollable: "",
                "max-width": "" + (_vm.course !== null ? "800px" : "300px")
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
                            {
                              attrs: {
                                color: _vm.account.theme_color,
                                dark: "",
                                large: ""
                              }
                            },
                            on
                          ),
                          [
                            _vm._v("Enroll for a course "),
                            _c("v-icon", [_vm._v("arrow_forward")])
                          ],
                          1
                        )
                      ]
                    }
                  }
                ],
                null,
                false,
                3487011881
              ),
              model: {
                value: _vm.dialog,
                callback: function($$v) {
                  _vm.dialog = $$v
                },
                expression: "dialog"
              }
            },
            [
              _vm._v(" "),
              _c(
                "v-card",
                [
                  _c("v-card-title", [_vm._v("Courses available")]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    {
                      staticClass: "px-0",
                      staticStyle: { "max-height": "500px" }
                    },
                    [
                      !_vm.courses.length
                        ? [
                            _c(
                              "div",
                              { staticClass: "text-center text-muted" },
                              [
                                _c("small", [
                                  _vm._v(
                                    "No course is available for now. You can check back."
                                  )
                                ])
                              ]
                            )
                          ]
                        : [
                            _c(
                              "v-container",
                              { attrs: { fluid: "" } },
                              [
                                _c(
                                  "v-row",
                                  [
                                    _c(
                                      "v-col",
                                      {
                                        attrs: {
                                          cols: "12",
                                          md:
                                            "" +
                                            (_vm.course !== null ? "6" : "12")
                                        }
                                      },
                                      [
                                        _c(
                                          "v-list",
                                          { attrs: { flat: "" } },
                                          [
                                            _c(
                                              "v-list-item-group",
                                              {
                                                attrs: {
                                                  color: _vm.account.theme_color
                                                },
                                                model: {
                                                  value: _vm.course_index,
                                                  callback: function($$v) {
                                                    _vm.course_index = $$v
                                                  },
                                                  expression: "course_index"
                                                }
                                              },
                                              _vm._l(_vm.courses, function(
                                                course,
                                                i
                                              ) {
                                                return _c(
                                                  "v-list-item",
                                                  { key: i },
                                                  [
                                                    _c(
                                                      "v-list-item-icon",
                                                      [
                                                        _c("v-icon", [
                                                          _vm._v(
                                                            "library_books"
                                                          )
                                                        ])
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-list-item-content",
                                                      [
                                                        _c(
                                                          "v-list-item-title",
                                                          {
                                                            domProps: {
                                                              textContent: _vm._s(
                                                                course.title
                                                              )
                                                            }
                                                          }
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              }),
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _vm.course !== null
                                      ? _c(
                                          "v-col",
                                          {
                                            staticStyle: {
                                              "max-height": "500px"
                                            },
                                            attrs: { cols: "12", md: "6" }
                                          },
                                          [
                                            _c("course-card", {
                                              attrs: {
                                                course: _vm.course,
                                                account: _vm.account,
                                                showInstructor: false,
                                                display: "grid",
                                                showStatus: true
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ]
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "red", text: "" },
                          on: {
                            click: function($event) {
                              _vm.dialog = false
                            }
                          }
                        },
                        [_vm._v("Cancel")]
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
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Domain/Account/Components/CoursesQuickEnroll.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/Domain/Account/Components/CoursesQuickEnroll.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CoursesQuickEnroll_vue_vue_type_template_id_676cb045___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CoursesQuickEnroll.vue?vue&type=template&id=676cb045& */ "./resources/js/Domain/Account/Components/CoursesQuickEnroll.vue?vue&type=template&id=676cb045&");
/* harmony import */ var _CoursesQuickEnroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoursesQuickEnroll.vue?vue&type=script&lang=js& */ "./resources/js/Domain/Account/Components/CoursesQuickEnroll.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CoursesQuickEnroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CoursesQuickEnroll_vue_vue_type_template_id_676cb045___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CoursesQuickEnroll_vue_vue_type_template_id_676cb045___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Domain/Account/Components/CoursesQuickEnroll.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Domain/Account/Components/CoursesQuickEnroll.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/Domain/Account/Components/CoursesQuickEnroll.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CoursesQuickEnroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CoursesQuickEnroll.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Account/Components/CoursesQuickEnroll.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CoursesQuickEnroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Domain/Account/Components/CoursesQuickEnroll.vue?vue&type=template&id=676cb045&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Domain/Account/Components/CoursesQuickEnroll.vue?vue&type=template&id=676cb045& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CoursesQuickEnroll_vue_vue_type_template_id_676cb045___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CoursesQuickEnroll.vue?vue&type=template&id=676cb045& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Account/Components/CoursesQuickEnroll.vue?vue&type=template&id=676cb045&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CoursesQuickEnroll_vue_vue_type_template_id_676cb045___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CoursesQuickEnroll_vue_vue_type_template_id_676cb045___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);