(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Course/Components/StudentsTable.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/Course/Components/StudentsTable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "StudentsTable",
  layout: function layout(h, page) {
    return h(App, [page]);
  },
  metaInfo: function metaInfo() {
    return {
      title: "Students (".concat(this.students.length, ")"),
      titleTemplate: '%s - AcadaApp'
    };
  },
  data: function data() {
    return {
      search: '',
      headers: [{
        text: 'Student',
        align: 'start',
        sortable: false,
        value: 'fullname'
      }, {
        text: 'Email',
        value: 'email'
      }, {
        text: 'phone',
        value: 'phone'
      }, {
        text: 'Course',
        value: 'course'
      }, {
        text: 'Payment Gateway',
        value: 'payment_gateway'
      }, {
        text: 'Payment Ref',
        value: 'payment_ref'
      }, {
        text: 'Registered',
        value: 'register_time'
      }],
      items: [],
      expanded: []
    };
  },
  props: {
    account: Object,
    course: Object,
    students: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  watch: {
    students: {
      immediate: true,
      handler: function handler(students) {
        var _this = this;

        this.items = students.map(function (student) {
          var _student$payment_ref;

          return {
            fullname: student.fullname,
            email: student.email,
            phone: student.phone,
            course: student.course ? student.course.title : _this.course ? _this.course.title : 'Nil',
            payment_gateway: student.payment_gateway ? student.payment_gateway.gateway : 'Nil',
            payment_ref: (_student$payment_ref = student.payment_ref) !== null && _student$payment_ref !== void 0 ? _student$payment_ref : 'Nil',
            register_time: student.registered_time,
            registered_time_diff: student.registered_time_diff
          };
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Course/Components/StudentsTable.vue?vue&type=template&id=7e98dd04&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/Course/Components/StudentsTable.vue?vue&type=template&id=7e98dd04& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "v-card-title",
        [
          _vm._t("header"),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-text-field", {
            attrs: {
              "append-icon": "mdi-magnify",
              label: "Search",
              "single-line": "",
              "hide-details": ""
            },
            model: {
              value: _vm.search,
              callback: function($$v) {
                _vm.search = $$v
              },
              expression: "search"
            }
          })
        ],
        2
      ),
      _vm._v(" "),
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.headers,
          items: _vm.items,
          search: _vm.search,
          "show-expand": "",
          "item-key": "payment_ref",
          "single-expand": true,
          expanded: _vm.expanded
        },
        on: {
          "update:expanded": function($event) {
            _vm.expanded = $event
          }
        },
        scopedSlots: _vm._u([
          {
            key: "expanded-item",
            fn: function(ref) {
              var headers = ref.headers
              var item = ref.item
              return [
                _c("td", { attrs: { colspan: headers.length } }, [
                  _vm._v("Registered " + _vm._s(item.registered_time_diff))
                ])
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Domain/Course/Components/StudentsTable.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/Domain/Course/Components/StudentsTable.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StudentsTable_vue_vue_type_template_id_7e98dd04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StudentsTable.vue?vue&type=template&id=7e98dd04& */ "./resources/js/Domain/Course/Components/StudentsTable.vue?vue&type=template&id=7e98dd04&");
/* harmony import */ var _StudentsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StudentsTable.vue?vue&type=script&lang=js& */ "./resources/js/Domain/Course/Components/StudentsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StudentsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StudentsTable_vue_vue_type_template_id_7e98dd04___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StudentsTable_vue_vue_type_template_id_7e98dd04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Domain/Course/Components/StudentsTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Domain/Course/Components/StudentsTable.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Domain/Course/Components/StudentsTable.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StudentsTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Course/Components/StudentsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Domain/Course/Components/StudentsTable.vue?vue&type=template&id=7e98dd04&":
/*!************************************************************************************************!*\
  !*** ./resources/js/Domain/Course/Components/StudentsTable.vue?vue&type=template&id=7e98dd04& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentsTable_vue_vue_type_template_id_7e98dd04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StudentsTable.vue?vue&type=template&id=7e98dd04& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Course/Components/StudentsTable.vue?vue&type=template&id=7e98dd04&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentsTable_vue_vue_type_template_id_7e98dd04___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentsTable_vue_vue_type_template_id_7e98dd04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);