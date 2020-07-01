(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/User/Pages/ProfileShow.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/User/Pages/ProfileShow.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Layout */ "./resources/js/Domain/User/Layout.vue");
/* harmony import */ var _Domain_Course_Components_CourseCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Domain/Course/Components/CourseCard */ "./resources/js/Domain/Course/Components/CourseCard.vue");
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
  name: "ProfileShow",
  layout: function layout(h, page) {
    return h(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], [page]);
  },
  metaInfo: function metaInfo() {
    return {
      title: "".concat(this.profile.fullname, " - ").concat(this.profile.at_username),
      titleTemplate: '%s - AcadaApp'
    };
  },
  components: {
    CourseCard: _Domain_Course_Components_CourseCard__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    profile: Object,
    courses: Object
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/User/Pages/ProfileShow.vue?vue&type=template&id=0854a014&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/User/Pages/ProfileShow.vue?vue&type=template&id=0854a014& ***!
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
      _c(
        "h4",
        [_c("v-icon", [_vm._v("library_books")]), _vm._v(" Courses")],
        1
      ),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      !_vm.courses.total
        ? _c("div", { staticClass: "text-center text-muted" }, [
            _c("h5", [_vm._v("No course yet")])
          ])
        : _c(
            "div",
            [
              _c(
                "v-row",
                _vm._l(_vm.courses.data, function(course) {
                  return _c(
                    "v-col",
                    { key: course.id, attrs: { cols: "12" } },
                    [
                      _c("course-card", {
                        attrs: {
                          course: course,
                          showInstructor: false,
                          display: "list",
                          showStatus: true
                        }
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Domain/User/Pages/ProfileShow.vue":
/*!********************************************************!*\
  !*** ./resources/js/Domain/User/Pages/ProfileShow.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileShow_vue_vue_type_template_id_0854a014___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileShow.vue?vue&type=template&id=0854a014& */ "./resources/js/Domain/User/Pages/ProfileShow.vue?vue&type=template&id=0854a014&");
/* harmony import */ var _ProfileShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileShow.vue?vue&type=script&lang=js& */ "./resources/js/Domain/User/Pages/ProfileShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileShow_vue_vue_type_template_id_0854a014___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileShow_vue_vue_type_template_id_0854a014___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Domain/User/Pages/ProfileShow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Domain/User/Pages/ProfileShow.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Domain/User/Pages/ProfileShow.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileShow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/User/Pages/ProfileShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Domain/User/Pages/ProfileShow.vue?vue&type=template&id=0854a014&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Domain/User/Pages/ProfileShow.vue?vue&type=template&id=0854a014& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileShow_vue_vue_type_template_id_0854a014___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileShow.vue?vue&type=template&id=0854a014& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/User/Pages/ProfileShow.vue?vue&type=template&id=0854a014&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileShow_vue_vue_type_template_id_0854a014___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileShow_vue_vue_type_template_id_0854a014___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);