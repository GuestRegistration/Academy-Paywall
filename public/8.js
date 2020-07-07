(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Account/Pages/AccountEdit.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/Account/Pages/AccountEdit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _layouts_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/layouts/App */ "./resources/js/layouts/App.vue");


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
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AccountEdit",
  layout: function layout(h, page) {
    return h(_layouts_App__WEBPACK_IMPORTED_MODULE_2__["default"], [page]);
  },
  metaInfo: function metaInfo() {
    return {
      title: "Account Edit ".concat(this.account.at_username),
      titleTemplate: '%s - AcadaApp'
    };
  },
  data: function data() {
    return {
      loading: false,
      form: {}
    };
  },
  props: {
    account: Object,
    new_account: {
      type: Boolean,
      "default": function _default() {
        return false;
      }
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])({
    auth: function auth(state) {
      return state.auth;
    },
    authenticated: function authenticated(state) {
      return state.authenticated;
    }
  })), {}, {
    errors: function errors() {
      return this.$page.errors;
    }
  }),
  methods: {
    formData: function formData() {
      var _this = this;

      var form = new FormData();
      Object.keys(this.form).forEach(function (key) {
        if (_this.form[key]) {
          form.append(key, _this.form[key]);
        }
      });
      return form;
    },
    submit: function submit() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.loading = true;

                if (!_this2.new_account) {
                  _context.next = 6;
                  break;
                }

                _context.next = 4;
                return _this2.$inertia.post(_this2.route('account.setup.store'), _this2.formData());

              case 4:
                _context.next = 8;
                break;

              case 6:
                _context.next = 8;
                return _this2.$inertia.post(_this2.route('account.update', {
                  account: _this2.auth.username
                }), _this2.formData());

              case 8:
                _this2.loading = false;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getCoverImage: function getCoverImage(files) {
      this.form.cover_image = files[0];
    },
    getAvatar: function getAvatar(files) {
      this.form.avatar = files[0];
    }
  },
  mounted: function mounted() {
    this.form = _objectSpread({}, this.account);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Account/Pages/AccountEdit.vue?vue&type=template&id=0c38b046&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/Account/Pages/AccountEdit.vue?vue&type=template&id=0c38b046& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("v-container", [
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
          "v-row",
          { attrs: { justify: "center", align: "center" } },
          [
            _c(
              "v-col",
              { attrs: { cols: "12", md: "6" } },
              [
                _c("h4", [_vm._v("Personal Information")]),
                _vm._v(" "),
                _c("v-divider"),
                _vm._v(" "),
                _c("x-input", {
                  attrs: {
                    errors: _vm.errors,
                    name: "name",
                    type: "text",
                    label: "Account name",
                    prependInnerIcon: "account_box"
                  },
                  model: {
                    value: _vm.form.name,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "name", $$v)
                    },
                    expression: "form.name"
                  }
                }),
                _vm._v(" "),
                _c("x-input", {
                  attrs: {
                    errors: _vm.errors,
                    name: "username",
                    type: "text",
                    label: "Username",
                    prependInnerIcon: "alternate_email"
                  },
                  model: {
                    value: _vm.form.username,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "username", $$v)
                    },
                    expression: "form.username"
                  }
                }),
                _vm._v(" "),
                _c("x-input", {
                  attrs: {
                    errors: _vm.errors,
                    name: "email",
                    type: "email",
                    label: "Email",
                    prependInnerIcon: "email"
                  },
                  model: {
                    value: _vm.form.email,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "email", $$v)
                    },
                    expression: "form.email"
                  }
                }),
                _vm._v(" "),
                _c("x-input", {
                  attrs: {
                    errors: _vm.errors,
                    name: "phone",
                    type: "tel",
                    label: "Phone",
                    prependInnerIcon: "call"
                  },
                  model: {
                    value: _vm.form.phone,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "phone", $$v)
                    },
                    expression: "form.phone"
                  }
                }),
                _vm._v(" "),
                _c("x-textarea", {
                  attrs: { errors: _vm.errors, name: "bio", label: "Bio" },
                  model: {
                    value: _vm.form.bio,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "bio", $$v)
                    },
                    expression: "form.bio"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "v-col",
              { attrs: { cols: "12", md: "6" } },
              [
                _c("h4", [_vm._v("Socials")]),
                _vm._v(" "),
                _c("v-divider"),
                _vm._v(" "),
                _c("x-input", {
                  attrs: {
                    errors: _vm.errors,
                    name: "facebook_url",
                    type: "url",
                    label: "Facebook",
                    prependInnerIcon: "link"
                  },
                  model: {
                    value: _vm.form.facebook_url,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "facebook_url", $$v)
                    },
                    expression: "form.facebook_url"
                  }
                }),
                _vm._v(" "),
                _c("x-input", {
                  attrs: {
                    errors: _vm.errors,
                    name: "instagram_url",
                    type: "url",
                    label: "Instagram",
                    prependInnerIcon: "link"
                  },
                  model: {
                    value: _vm.form.instagram_url,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "instagram_url", $$v)
                    },
                    expression: "form.instagram_url"
                  }
                }),
                _vm._v(" "),
                _c("x-input", {
                  attrs: {
                    errors: _vm.errors,
                    name: "twitter_url",
                    type: "url",
                    label: "Twitter",
                    prependInnerIcon: "link"
                  },
                  model: {
                    value: _vm.form.twitter_url,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "twitter_url", $$v)
                    },
                    expression: "form.twitter_url"
                  }
                }),
                _vm._v(" "),
                _c("x-input", {
                  attrs: {
                    errors: _vm.errors,
                    name: "linkedin_url",
                    type: "url",
                    label: "LinkedIn",
                    prependInnerIcon: "link"
                  },
                  model: {
                    value: _vm.form.linkedin_url,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "linkedin_url", $$v)
                    },
                    expression: "form.linkedin_url"
                  }
                }),
                _vm._v(" "),
                _c("x-input", {
                  attrs: {
                    errors: _vm.errors,
                    name: "youtube_url",
                    type: "url",
                    label: "Youtube",
                    prependInnerIcon: "link"
                  },
                  model: {
                    value: _vm.form.youtube_url,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "youtube_url", $$v)
                    },
                    expression: "form.youtube_url"
                  }
                }),
                _vm._v(" "),
                _c("x-input", {
                  attrs: {
                    errors: _vm.errors,
                    name: "website",
                    type: "url",
                    label: "Website",
                    prependInnerIcon: "link"
                  },
                  model: {
                    value: _vm.form.website,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "website", $$v)
                    },
                    expression: "form.website"
                  }
                })
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "v-row",
          [
            _c(
              "v-col",
              { attrs: { cols: "12" } },
              [
                _c("h4", [_vm._v("Header")]),
                _vm._v(" "),
                _c("v-switch", {
                  attrs: { label: "Use headline caption" },
                  model: {
                    value: _vm.form.show_caption,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "show_caption", $$v)
                    },
                    expression: "form.show_caption"
                  }
                }),
                _vm._v(" "),
                _c("v-divider"),
                _vm._v(" "),
                _vm.form.show_caption
                  ? _c(
                      "v-row",
                      [
                        _c(
                          "v-col",
                          { attrs: { cols: "12", md: "6" } },
                          [
                            _c("x-textarea", {
                              attrs: {
                                errors: _vm.errors,
                                name: "caption",
                                label: "Headline caption"
                              },
                              model: {
                                value: _vm.form.caption,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "caption", $$v)
                                },
                                expression: "form.caption"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          [
                            _c("x-textarea", {
                              attrs: {
                                errors: _vm.errors,
                                name: "subcaption",
                                label: "Headline subcaption"
                              },
                              model: {
                                value: _vm.form.subcaption,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "subcaption", $$v)
                                },
                                expression: "form.subcaption"
                              }
                            })
                          ],
                          1
                        )
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
          "v-row",
          [
            _c(
              "v-col",
              { attrs: { cols: "12" } },
              [
                _c("h4", [_vm._v("Appearance")]),
                _vm._v(" "),
                _c("v-divider"),
                _vm._v(" "),
                _c(
                  "v-row",
                  [
                    _c(
                      "v-col",
                      { attrs: { cols: "12", md: "4" } },
                      [
                        _c("h5", [_vm._v("Theme color")]),
                        _vm._v(" "),
                        _c("v-color-picker", {
                          staticClass: "ma-2",
                          model: {
                            value: _vm.form.theme_color,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "theme_color", $$v)
                            },
                            expression: "form.theme_color"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-col", { attrs: { cols: "12", md: "4" } }, [
                      _c(
                        "div",
                        { staticClass: "text-center mb-3" },
                        [
                          _c("h5", [_vm._v("Avatar")]),
                          _vm._v(" "),
                          _c("x-file-input", {
                            attrs: {
                              errors: _vm.errors,
                              name: "avatar",
                              label: "Avatar",
                              src: _vm.account.avatar,
                              color: _vm.account.theme_color,
                              isAvatar: true
                            },
                            on: { change: _vm.getAvatar }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("v-col", { attrs: { cols: "12", md: "4" } }, [
                      _c(
                        "div",
                        { staticClass: "text-center" },
                        [
                          _c("h5", [_vm._v("Cover image")]),
                          _vm._v(" "),
                          _c("x-file-input", {
                            attrs: {
                              errors: _vm.errors,
                              name: "cover_image",
                              label: "Cover image",
                              src: _vm.account.cover_image
                            },
                            on: { change: _vm.getCoverImage }
                          })
                        ],
                        1
                      )
                    ])
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
              color: _vm.form.theme_color
            }
          },
          [_c("v-icon", [_vm._v("mdi-check")])],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Domain/Account/Pages/AccountEdit.vue":
/*!***********************************************************!*\
  !*** ./resources/js/Domain/Account/Pages/AccountEdit.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountEdit_vue_vue_type_template_id_0c38b046___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountEdit.vue?vue&type=template&id=0c38b046& */ "./resources/js/Domain/Account/Pages/AccountEdit.vue?vue&type=template&id=0c38b046&");
/* harmony import */ var _AccountEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountEdit.vue?vue&type=script&lang=js& */ "./resources/js/Domain/Account/Pages/AccountEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountEdit_vue_vue_type_template_id_0c38b046___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountEdit_vue_vue_type_template_id_0c38b046___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Domain/Account/Pages/AccountEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Domain/Account/Pages/AccountEdit.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/Domain/Account/Pages/AccountEdit.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Account/Pages/AccountEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Domain/Account/Pages/AccountEdit.vue?vue&type=template&id=0c38b046&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Domain/Account/Pages/AccountEdit.vue?vue&type=template&id=0c38b046& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountEdit_vue_vue_type_template_id_0c38b046___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountEdit.vue?vue&type=template&id=0c38b046& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Account/Pages/AccountEdit.vue?vue&type=template&id=0c38b046&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountEdit_vue_vue_type_template_id_0c38b046___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountEdit_vue_vue_type_template_id_0c38b046___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);