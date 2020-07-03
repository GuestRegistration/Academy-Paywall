(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/User/Layout.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/User/Layout.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_NavDrawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/NavDrawer */ "./resources/js/components/NavDrawer.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'ProfileLayout',
  components: {
    NavDrawer: _components_NavDrawer__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    inFrame: function inFrame(state) {
      return state.inFrame;
    }
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['auth', 'authenticated', 'isMyAccount', 'isMyProfile', 'isOnMyAccount'])), {}, {
    profile: function profile() {
      return this.$page.profile;
    },
    affiliations: function affiliations() {
      return this.$page.affiliations;
    }
  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(['setNavDrawer'])),
  created: function created() {
    this.setNavDrawer(false);
  },
  mounted: function mounted() {
    $('html').attr('no-scroll', 'no-scroll');
  },
  destroyed: function destroyed() {
    $('html').removeAttr('no-scroll');
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/User/Layout.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/User/Layout.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (min-width: 768px) {\n#lhs {\n    background-color: #f7f7f7;\n    height: 100vh;\n    position: fixed;\n    left: 0;\n    top: 0;\n    overflow: auto;\n}\n#rhs {\n    left: 33.3333333333%;\n}\n.lhs-body {\n    margin-top: 60px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/User/Layout.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/User/Layout.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/User/Layout.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/User/Layout.vue?vue&type=template&id=1deadac1&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/User/Layout.vue?vue&type=template&id=1deadac1& ***!
  \**********************************************************************************************************************************************************************************************************/
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
    "v-app",
    [
      _vm.authenticated ? _c("nav-drawer") : _vm._e(),
      _vm._v(" "),
      _c(
        "v-app-bar",
        {
          staticClass: "d-md-none",
          attrs: {
            absolute: "",
            color: "primary",
            dark: "",
            "fade-img-on-scroll": "",
            "scroll-target": "#scrolling-techniques-5",
            "inverted-scroll": ""
          }
        },
        [
          _vm.authenticated
            ? _c("v-app-bar-nav-icon", {
                on: {
                  click: function($event) {
                    _vm.$store.state.navDrawer = !_vm.$store.state.navDrawer
                  }
                }
              })
            : _c(
                "v-btn",
                {
                  attrs: { icon: "" },
                  on: {
                    click: function($event) {
                      _vm.$inertia.visit(_vm.route("home"))
                    }
                  }
                },
                [_c("v-icon", [_vm._v("home")])],
                1
              ),
          _vm._v(" "),
          _c(
            "v-toolbar-title",
            { attrs: { dark: "" } },
            [
              _c(
                "inertia-link",
                {
                  staticClass: "prevent-default",
                  staticStyle: { color: "#fff" },
                  attrs: {
                    href: _vm.route("profile.show", {
                      profile: _vm.profile.username
                    })
                  }
                },
                [
                  _c("avatar", {
                    attrs: {
                      src: _vm.profile.avatar,
                      color: "primary",
                      size: "30"
                    }
                  }),
                  _vm._v(" " + _vm._s(_vm.profile.fullname) + "\n      ")
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _vm.isMyProfile(_vm.profile)
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
                              _vm._g({ attrs: { icon: "" } }, on),
                              [_c("v-icon", [_vm._v("mdi-dots-vertical")])],
                              1
                            )
                          ]
                        }
                      }
                    ],
                    null,
                    false,
                    2097855828
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
                                _vm.route("profile.edit", {
                                  profile: _vm.profile.username
                                })
                              )
                            }
                          }
                        },
                        [
                          _c(
                            "v-list-item-icon",
                            [_c("v-icon", [_vm._v("edit")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            [_c("v-list-item-title", [_vm._v("Edit profile")])],
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
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "overflow-y-auto",
          staticStyle: { "max-height": "100vh" },
          attrs: { id: "scrolling-techniques-5" }
        },
        [
          _c(
            "v-container",
            { staticStyle: { "min-height": "110vh" }, attrs: { fluid: "" } },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "4", id: "lhs" } },
                    [
                      _c(
                        "v-app-bar",
                        {
                          staticClass: "d-none d-md-block",
                          attrs: { absolute: "", color: "primary", dark: "" }
                        },
                        [
                          _c(
                            "v-toolbar-title",
                            { attrs: { dark: "" } },
                            [
                              _vm.authenticated
                                ? _c("v-app-bar-nav-icon", {
                                    on: {
                                      click: function($event) {
                                        _vm.$store.state.navDrawer = !_vm.$store
                                          .state.navDrawer
                                      }
                                    }
                                  })
                                : _c(
                                    "v-btn",
                                    {
                                      attrs: { icon: "" },
                                      on: {
                                        click: function($event) {
                                          _vm.$inertia.visit(_vm.route("home"))
                                        }
                                      }
                                    },
                                    [_c("v-icon", [_vm._v("home")])],
                                    1
                                  )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _vm.$store.state.navDrawer
                            ? _c(
                                "v-btn",
                                {
                                  ref: "navBarCloser",
                                  attrs: { icon: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.$store.state.navDrawer = false
                                    }
                                  }
                                },
                                [_c("v-icon", [_vm._v("keyboard_backspace")])],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.isMyProfile(_vm.profile)
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
                                                  _vm._v("mdi-dots-vertical")
                                                ])
                                              ],
                                              1
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    false,
                                    2097855828
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
                                                _vm.route("profile.edit", {
                                                  profile: _vm.profile.username
                                                })
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "v-list-item-icon",
                                            [_c("v-icon", [_vm._v("edit")])],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-list-item-content",
                                            [
                                              _c("v-list-item-title", [
                                                _vm._v("Edit profile")
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
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        { staticClass: "lhs-body", attrs: { fluid: "" } },
                        [
                          _c(
                            "div",
                            { staticClass: "text-center" },
                            [
                              _c("avatar", {
                                attrs: {
                                  src: _vm.profile.avatar,
                                  color: "primary",
                                  size: "100",
                                  text: _vm.profile.initials,
                                  headline: "yes"
                                }
                              }),
                              _vm._v(" "),
                              _c("h2", [_vm._v(_vm._s(_vm.profile.fullname))])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.profile.bio
                            ? _c("div", { staticClass: "text-center p-3" }, [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(_vm.profile.bio) +
                                    "\n                  "
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "v-card",
                            {
                              attrs: {
                                outlined: "",
                                dark: "",
                                color: "primary"
                              }
                            },
                            [
                              _c(
                                "v-row",
                                [
                                  _c("v-col", [
                                    _c("div", { staticClass: "text-center" }, [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "prevent-default",
                                          attrs: {
                                            href: "tel: " + _vm.profile.phone
                                          }
                                        },
                                        [
                                          _c(
                                            "v-btn",
                                            { attrs: { icon: "", large: "" } },
                                            [_c("v-icon", [_vm._v("call")])],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("v-col", [
                                    _c("div", { staticClass: "text-center" }, [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "prevent-default",
                                          attrs: {
                                            href: "mailto: " + _vm.profile.email
                                          }
                                        },
                                        [
                                          _c(
                                            "v-btn",
                                            { attrs: { large: "", icon: "" } },
                                            [_c("v-icon", [_vm._v("email")])],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ])
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c("h4", [_vm._v("Affiliations")]),
                          _vm._v(" "),
                          _vm.affiliations.length
                            ? _c(
                                "v-list",
                                _vm._l(_vm.affiliations, function(affiliation) {
                                  return _c(
                                    "v-list-item",
                                    {
                                      key: affiliation.id,
                                      on: {
                                        click: function($event) {
                                          _vm.$inertia.visit(
                                            _vm.route("account.show", {
                                              account: affiliation.username
                                            })
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "v-list-item-avatar",
                                        [
                                          _c("avatar", {
                                            attrs: {
                                              src: affiliation.avatar,
                                              color: affiliation.theme_color,
                                              size: "50",
                                              icon: "school"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-list-item-content",
                                        [
                                          _c("v-list-item-title", {
                                            domProps: {
                                              textContent: _vm._s(
                                                affiliation.name
                                              )
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                }),
                                1
                              )
                            : _c(
                                "div",
                                [
                                  _c(
                                    "v-alert",
                                    {
                                      attrs: {
                                        border: "right",
                                        "colored-border": "",
                                        type: "error",
                                        elevation: "2"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                    Not affiliated to any academy account\n                    "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "text-right" },
                            [
                              _vm.isMyProfile(_vm.profile) && !_vm.auth.account
                                ? _c(
                                    "inertia-link",
                                    {
                                      staticClass: "prevent-default mx-1",
                                      attrs: {
                                        href: _vm.route("account.setup"),
                                        title: "Create your academy account"
                                      }
                                    },
                                    [
                                      _c(
                                        "v-btn",
                                        { attrs: { fab: "" } },
                                        [_c("v-icon", [_vm._v("add")])],
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
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "8", id: "rhs" } },
                    [_vm._t("default")],
                    2
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Domain/User/Layout.vue":
/*!*********************************************!*\
  !*** ./resources/js/Domain/User/Layout.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_vue_vue_type_template_id_1deadac1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=1deadac1& */ "./resources/js/Domain/User/Layout.vue?vue&type=template&id=1deadac1&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/Domain/User/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Layout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/Domain/User/Layout.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_1deadac1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Layout_vue_vue_type_template_id_1deadac1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Domain/User/Layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Domain/User/Layout.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Domain/User/Layout.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/User/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Domain/User/Layout.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Domain/User/Layout.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/User/Layout.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Domain/User/Layout.vue?vue&type=template&id=1deadac1&":
/*!****************************************************************************!*\
  !*** ./resources/js/Domain/User/Layout.vue?vue&type=template&id=1deadac1& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_1deadac1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=template&id=1deadac1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/User/Layout.vue?vue&type=template&id=1deadac1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_1deadac1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_1deadac1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);