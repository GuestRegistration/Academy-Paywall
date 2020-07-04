(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Account/Components/InviteUserDialog.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/Account/Components/InviteUserDialog.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: "InviteUserDialog",
  data: function data() {
    return {
      dialog: false,
      loading: false,
      search: null,
      selected: [],
      items: []
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['auth'])), {}, {
    errors: function errors() {
      return this.$page.errors;
    }
  }),
  methods: {
    set: function set(show) {
      this.dialog = show;
    },
    submit: function submit() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                _context.next = 3;
                return _this.$inertia.post(_this.route('account.instructor.invite.send', {
                  account: _this.auth.account.username
                }), {
                  emails: _this.selected
                });

              case 3:
                _this.loading = false;

                if (!Object.keys(_this.errors).length) {
                  _this.selected = [];

                  _this.set(false);
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Account/Components/InviteUserDialog.vue?vue&type=template&id=0ef829f4&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/Account/Components/InviteUserDialog.vue?vue&type=template&id=0ef829f4& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    "v-dialog",
    {
      attrs: { scrollable: "", persistent: "", "max-width": "500px" },
      model: {
        value: _vm.dialog,
        callback: function($$v) {
          _vm.dialog = $$v
        },
        expression: "dialog"
      }
    },
    [
      _c(
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
            "v-card",
            [
              _c("v-card-title", [
                _c(
                  "span",
                  { staticClass: "headline" },
                  [
                    _c("v-icon", [_vm._v("person_add")]),
                    _vm._v(
                      " Invite instructor to " + _vm._s(_vm.auth.account.name)
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-combobox", {
                    attrs: {
                      items: _vm.items,
                      "hide-selected": "",
                      label: "Enter emails to invite",
                      "search-input": _vm.search,
                      multiple: "",
                      "persistent-hint": "",
                      "deletable-chips": "",
                      counter: "",
                      loading: _vm.loading,
                      error:
                        _vm.errors &&
                        _vm.errors.emails &&
                        _vm.errors.emails.length
                          ? true
                          : false,
                      "error-messages":
                        _vm.errors &&
                        _vm.errors.emails &&
                        _vm.errors.emails.length
                          ? _vm.errors.emails[0]
                          : ""
                    },
                    on: {
                      "update:searchInput": function($event) {
                        _vm.search = $event
                      },
                      "update:search-input": function($event) {
                        _vm.search = $event
                      },
                      change: function($event) {
                        _vm.$page.errors = {}
                      }
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "selection",
                          fn: function(data) {
                            return [
                              _c(
                                "v-chip",
                                _vm._b(
                                  {
                                    key: data.item,
                                    attrs: {
                                      "input-value": data.selected,
                                      disabled: data.disabled,
                                      color:
                                        _vm.errors &&
                                        _vm.errors[
                                          "emails." +
                                            _vm.selected.findIndex(function(s) {
                                              return s == data.item
                                            })
                                        ]
                                          ? "red"
                                          : "primary",
                                      close: ""
                                    },
                                    on: {
                                      "click:close": function($event) {
                                        return data.parent.selectItem(data.item)
                                      }
                                    }
                                  },
                                  "v-chip",
                                  data.attrs,
                                  false
                                ),
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(data.item) +
                                      "\n                            "
                                  )
                                ]
                              )
                            ]
                          }
                        },
                        _vm.search
                          ? {
                              key: "no-data",
                              fn: function() {
                                return [
                                  _c(
                                    "v-list-item",
                                    [
                                      _c(
                                        "v-list-item-icon",
                                        [_c("v-icon", [_vm._v("person_add")])],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-list-item-content",
                                        [
                                          _c("v-list-item-title", [
                                            _vm._v(
                                              "\n                                        Press "
                                            ),
                                            _c("kbd", [_vm._v("enter")]),
                                            _vm._v(' to add "'),
                                            _c("strong", [
                                              _vm._v(_vm._s(_vm.search))
                                            ]),
                                            _vm._v(
                                              '"\n                                    '
                                            )
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ]
                              },
                              proxy: true
                            }
                          : null
                      ],
                      null,
                      true
                    ),
                    model: {
                      value: _vm.selected,
                      callback: function($$v) {
                        _vm.selected = $$v
                      },
                      expression: "selected"
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors && Object.keys(_vm.errors).length
                    ? _c(
                        "v-alert",
                        {
                          attrs: {
                            border: "left",
                            "colored-border": "",
                            type: "error",
                            elevation: "2"
                          }
                        },
                        [
                          _vm._v(
                            "\n                    Invitation not sent, check the emails\n                  "
                          )
                        ]
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        type: "button",
                        color: "red darken-1",
                        text: ""
                      },
                      on: {
                        click: function($event) {
                          return _vm.set(false)
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _vm.selected.length
                    ? _c(
                        "v-btn",
                        {
                          attrs: {
                            type: "submit",
                            loading: _vm.loading,
                            color: _vm.auth.account.theme_color,
                            dark: ""
                          }
                        },
                        [
                          _vm._v(
                            "Invite " + _vm._s(_vm.selected.length) + " user"
                          ),
                          _vm.selected.length > 1
                            ? _c("span", [_vm._v("s")])
                            : _vm._e()
                        ]
                      )
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Domain/Account/Components/InviteUserDialog.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/Domain/Account/Components/InviteUserDialog.vue ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InviteUserDialog_vue_vue_type_template_id_0ef829f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InviteUserDialog.vue?vue&type=template&id=0ef829f4& */ "./resources/js/Domain/Account/Components/InviteUserDialog.vue?vue&type=template&id=0ef829f4&");
/* harmony import */ var _InviteUserDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InviteUserDialog.vue?vue&type=script&lang=js& */ "./resources/js/Domain/Account/Components/InviteUserDialog.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _InviteUserDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _InviteUserDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InviteUserDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InviteUserDialog_vue_vue_type_template_id_0ef829f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InviteUserDialog_vue_vue_type_template_id_0ef829f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Domain/Account/Components/InviteUserDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Domain/Account/Components/InviteUserDialog.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Domain/Account/Components/InviteUserDialog.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteUserDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InviteUserDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Account/Components/InviteUserDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteUserDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Domain/Account/Components/InviteUserDialog.vue?vue&type=template&id=0ef829f4&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Domain/Account/Components/InviteUserDialog.vue?vue&type=template&id=0ef829f4& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteUserDialog_vue_vue_type_template_id_0ef829f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InviteUserDialog.vue?vue&type=template&id=0ef829f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Account/Components/InviteUserDialog.vue?vue&type=template&id=0ef829f4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteUserDialog_vue_vue_type_template_id_0ef829f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteUserDialog_vue_vue_type_template_id_0ef829f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);