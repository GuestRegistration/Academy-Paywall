(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Course/Components/CourseForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/Course/Components/CourseForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "CourseForm",
  props: {
    course: Object,
    loading: Boolean,
    color: String
  },
  data: function data() {
    return {
      form: {},
      course_types: ['Zoom', 'Google classroom']
    };
  },
  computed: {
    errors: function errors() {
      return this.$page.errors;
    }
  },
  methods: {
    submit: function submit() {
      this.$emit('submit', this.formData());
    },
    formData: function formData() {
      var _this = this;

      var form = new FormData();
      Object.keys(this.form).forEach(function (key) {
        if (_this.form[key] != null && _this.form[key] != "null") {
          form.append(key, _this.form[key]);
        }
      });
      return form;
    }
  },
  mounted: function mounted() {
    if (this.course) {
      this.form = this.course;
      this.form.start_date = this.course.raw_dates.start;
      this.form.end_date = this.course.raw_dates.end;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Course/Components/CourseForm.vue?vue&type=template&id=7683b3fe&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/Course/Components/CourseForm.vue?vue&type=template&id=7683b3fe& ***!
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
    "form",
    {
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.submit($event)
        }
      }
    },
    [
      _c(
        "v-container",
        { staticStyle: { overflow: "auto" }, attrs: { fluid: "" } },
        [
          _c(
            "v-row",
            { attrs: { justify: "center", align: "center" } },
            [
              _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c("x-input", {
                    attrs: {
                      errors: _vm.errors,
                      name: "title",
                      type: "text",
                      label: "Course title"
                    },
                    model: {
                      value: _vm.form.title,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "title", $$v)
                      },
                      expression: "form.title"
                    }
                  }),
                  _vm._v(" "),
                  _c("x-textarea", {
                    attrs: {
                      errors: _vm.errors,
                      name: "description",
                      label: "Course description"
                    },
                    model: {
                      value: _vm.form.description,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "description", $$v)
                      },
                      expression: "form.description"
                    }
                  }),
                  _vm._v(" "),
                  _c("x-input", {
                    attrs: {
                      errors: _vm.errors,
                      name: "price",
                      type: "number",
                      label: "Price"
                    },
                    model: {
                      value: _vm.form.price,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "price", $$v)
                      },
                      expression: "form.price"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", lg: "6" } },
                        [
                          _c("x-date-picker", {
                            attrs: {
                              errors: _vm.errors,
                              label: "Starting date",
                              name: "start_date",
                              current: _vm.form.start_date
                            },
                            on: {
                              change: function(date) {
                                return (_vm.form.start_date = date)
                              }
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", lg: "6" } },
                        [
                          _c("x-date-picker", {
                            attrs: {
                              errors: _vm.errors,
                              label: "Ending date",
                              name: "end_date",
                              current: _vm.form.end_date
                            },
                            on: {
                              change: function(date) {
                                return (_vm.form.end_date = date)
                              }
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("x-select", {
                    attrs: {
                      errors: _vm.errors,
                      value: _vm.form.course_type,
                      label: "Course type",
                      name: "course_type",
                      items: _vm.course_types,
                      outlined: ""
                    },
                    on: {
                      change: function(selected) {
                        return (_vm.form.course_type = selected)
                      }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c("x-file-input", {
                    attrs: {
                      errors: _vm.errors,
                      src: _vm.form.cover_image,
                      name: "cover_image",
                      label: "Cover image"
                    },
                    on: {
                      change: function(files) {
                        return (_vm.form.cover_image = files[0])
                      }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c("v-switch", {
                    attrs: { label: "Send instruction after enrollment" },
                    model: {
                      value: _vm.form.send_instructions,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "send_instructions", $$v)
                      },
                      expression: "form.send_instructions"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", [
                    _c("small", [
                      _vm._v(
                        "Send a mail to your student after a successful enrollment. This could be an instruction on how to proceed with the course or a welcoming message"
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.form.send_instructions
                    ? _c(
                        "div",
                        { staticStyle: { overflow: "auto" } },
                        [
                          _c("label", [_vm._v("Message")]),
                          _vm._v(" "),
                          _c("wysiwyg", {
                            model: {
                              value: _vm.form.instructions,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "instructions", $$v)
                              },
                              expression: "form.instructions"
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors &&
                          _vm.errors["instructions"] &&
                          _vm.errors["instructions"].length
                            ? _c("div", { staticClass: "text-danger" }, [
                                _vm._v(_vm._s(_vm.errors["instructions"][0]))
                              ])
                            : _vm._e()
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              )
            ],
            1
          ),
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
                "x-large": "",
                loading: _vm.loading,
                type: "submit",
                color: _vm.color
              }
            },
            [_c("v-icon", [_vm._v("mdi-check")])],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Domain/Course/Components/CourseForm.vue":
/*!**************************************************************!*\
  !*** ./resources/js/Domain/Course/Components/CourseForm.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CourseForm_vue_vue_type_template_id_7683b3fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CourseForm.vue?vue&type=template&id=7683b3fe& */ "./resources/js/Domain/Course/Components/CourseForm.vue?vue&type=template&id=7683b3fe&");
/* harmony import */ var _CourseForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CourseForm.vue?vue&type=script&lang=js& */ "./resources/js/Domain/Course/Components/CourseForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CourseForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CourseForm_vue_vue_type_template_id_7683b3fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CourseForm_vue_vue_type_template_id_7683b3fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Domain/Course/Components/CourseForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Domain/Course/Components/CourseForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Domain/Course/Components/CourseForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Course/Components/CourseForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Domain/Course/Components/CourseForm.vue?vue&type=template&id=7683b3fe&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Domain/Course/Components/CourseForm.vue?vue&type=template&id=7683b3fe& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseForm_vue_vue_type_template_id_7683b3fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseForm.vue?vue&type=template&id=7683b3fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Course/Components/CourseForm.vue?vue&type=template&id=7683b3fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseForm_vue_vue_type_template_id_7683b3fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseForm_vue_vue_type_template_id_7683b3fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);