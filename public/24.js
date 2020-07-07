(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Account/Layout.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/Account/Layout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Components_CoursesQuickEnroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/CoursesQuickEnroll */ "./resources/js/Domain/Account/Components/CoursesQuickEnroll.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AccountLayout',
  components: {
    CoursesQuickEnroll: _Components_CoursesQuickEnroll__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      courses_dialog: false
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    inFrame: function inFrame(state) {
      return state.inFrame;
    }
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['auth', 'authenticated', 'isMyAccount', 'isOnMyAccount'])), {}, {
    account: function account() {
      return this.$page.account;
    },
    courses: function courses() {
      return this.$page.courses ? this.$page.courses.data : null;
    },
    socials: function socials() {
      return [{
        icon: 'link',
        text: 'Facebook',
        link: this.account.facebook_url
      }, {
        icon: 'link',
        text: 'Instagram',
        link: this.account.instagram_url
      }, {
        icon: 'link',
        text: 'Twitter',
        link: this.account.twitter_url
      }, {
        icon: 'link',
        text: 'LinkedIn',
        link: this.account.linkedin_url
      }, {
        icon: 'link',
        text: 'Website',
        link: this.account.website
      }];
    }
  }),
  methods: {
    anySocial: function anySocial() {
      return this.socials.filter(function (s) {
        return s.link ? true : false;
      }).length;
    }
  },
  mounted: function mounted() {
    $('html').attr('no-scroll', 'no-scroll');
  },
  destroyed: function destroyed() {
    $('html').removeAttr('no-scroll');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Account/Layout.vue?vue&type=template&id=816b51ee&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/Account/Layout.vue?vue&type=template&id=816b51ee& ***!
  \*************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-app-bar",
        {
          attrs: {
            absolute: "",
            color: _vm.account.theme_color,
            dark: "",
            src: _vm.account.cover_image,
            "fade-img-on-scroll": "",
            "scroll-target": "#scrolling-techniques-5",
            "inverted-scroll": ""
          },
          scopedSlots: _vm._u([
            {
              key: "img",
              fn: function(ref) {
                var props = ref.props
                return [
                  _c(
                    "v-img",
                    _vm._b(
                      {
                        attrs: {
                          gradient:
                            "to top right, " +
                            _vm.account.theme_color +
                            ", rgba(255,255,255,.7)"
                        }
                      },
                      "v-img",
                      props,
                      false
                    )
                  )
                ]
              }
            }
          ])
        },
        [
          _vm._v(" "),
          _vm.authenticated && _vm.isMyAccount(_vm.account)
            ? _c(
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
            : _vm._e(),
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
                    href: _vm.route("account.show", {
                      account: _vm.account.username
                    })
                  }
                },
                [
                  _c("avatar", {
                    attrs: {
                      src: _vm.account.avatar,
                      color: _vm.account.theme_color,
                      size: "30"
                    }
                  }),
                  _vm._v(" " + _vm._s(_vm.account.name) + "\n      ")
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _vm.authenticated && !_vm.isMyAccount
            ? _c(
                "inertia-link",
                {
                  staticClass: "prevent-default mx-1",
                  attrs: {
                    href: _vm.auth.username
                      ? _vm.route("account.show", {
                          account: _vm.auth.username
                        })
                      : "#"
                  }
                },
                [
                  _c("avatar", {
                    attrs: {
                      src: _vm.auth.avatar,
                      color: _vm.auth.theme_color,
                      size: "40"
                    }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.isMyAccount(_vm.account)
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
                                _vm.route("account.edit", {
                                  account: _vm.account.username
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
                            [_c("v-list-item-title", [_vm._v("Edit account")])],
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
                                _vm.route("account.course.create", {
                                  account: _vm.account.username
                                })
                              )
                            }
                          }
                        },
                        [
                          _c(
                            "v-list-item-icon",
                            [_c("v-icon", [_vm._v("add")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            [
                              _c("v-list-item-title", [
                                _vm._v("Add new course")
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
        "div",
        {
          staticClass: "overflow-y-auto",
          staticStyle: { "max-height": "100vh" },
          attrs: { id: "scrolling-techniques-5" }
        },
        [
          _c(
            "v-parallax",
            {
              attrs: {
                height: "200",
                src: _vm.account.cover_image,
                color: _vm.account.theme_color
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "p-3",
                  staticStyle: { "background-color": "rgba(0,0,0, .2)" }
                },
                [
                  !_vm.account.show_caption
                    ? _c(
                        "div",
                        {
                          staticClass:
                            "d-flex align-center justify-content-center mb-2"
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "mr-2" },
                            [
                              _c("avatar", {
                                attrs: {
                                  src: _vm.account.avatar,
                                  color: _vm.account.theme_color,
                                  size: "100"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", [
                            _c("h4", [_vm._v(_vm._s(_vm.account.name))]),
                            _vm._v(" "),
                            _c("div", [
                              _c("small", [
                                _vm._v(_vm._s(_vm.account.at_username))
                              ])
                            ])
                          ])
                        ]
                      )
                    : _c("div", { staticClass: "text-center mb-2" }, [
                        _c("h1", [_vm._v(_vm._s(_vm.account.caption))]),
                        _vm._v(" "),
                        _c("h4", [_vm._v(_vm._s(_vm.account.subcaption))])
                      ]),
                  _vm._v(" "),
                  _vm.courses
                    ? [
                        _c("courses-quick-enroll", {
                          attrs: { account: _vm.account, courses: _vm.courses }
                        })
                      ]
                    : _vm._e()
                ],
                2
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "v-container",
            { staticStyle: { "min-height": "100vh" }, attrs: { fluid: "" } },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "8" } },
                    [_vm._t("default")],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "4" } },
                    [
                      _c("v-divider"),
                      _vm._v(" "),
                      _c("h4", [_vm._v("About " + _vm._s(_vm.account.name))]),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _vm.account.bio
                        ? [
                            _vm._v(
                              "\n                    " +
                                _vm._s(_vm.account.bio) +
                                "\n                  "
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        { attrs: { outlined: "" } },
                        [
                          _c(
                            "v-card",
                            {
                              attrs: {
                                outlined: "",
                                dark: "",
                                color: _vm.account.theme_color
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
                                            href: "tel: " + _vm.account.phone
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
                                            href: "mailto: " + _vm.account.email
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
                          _vm.anySocial()
                            ? _c(
                                "v-list",
                                [
                                  _c("div", { staticClass: "mx-3" }, [
                                    _c("h4", [_vm._v("Socials")])
                                  ]),
                                  _vm._v(" "),
                                  _c("v-divider"),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-group",
                                    [
                                      _vm._l(_vm.socials, function(social, i) {
                                        return [
                                          social.link
                                            ? _c(
                                                "a",
                                                {
                                                  key: i,
                                                  staticClass:
                                                    "prevent-default",
                                                  attrs: {
                                                    href: social.link,
                                                    target: "_blank"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-list-item",
                                                    [
                                                      _c(
                                                        "v-list-item-icon",
                                                        [
                                                          _c("v-icon", {
                                                            domProps: {
                                                              textContent: _vm._s(
                                                                social.icon
                                                              )
                                                            }
                                                          })
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
                                                                  social.text
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
                                                ],
                                                1
                                              )
                                            : _vm._e()
                                        ]
                                      })
                                    ],
                                    2
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ],
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

/***/ "./resources/js/Domain/Account/Layout.vue":
/*!************************************************!*\
  !*** ./resources/js/Domain/Account/Layout.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_vue_vue_type_template_id_816b51ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=816b51ee& */ "./resources/js/Domain/Account/Layout.vue?vue&type=template&id=816b51ee&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/Domain/Account/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_816b51ee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Layout_vue_vue_type_template_id_816b51ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Domain/Account/Layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Domain/Account/Layout.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Domain/Account/Layout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Account/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Domain/Account/Layout.vue?vue&type=template&id=816b51ee&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Domain/Account/Layout.vue?vue&type=template&id=816b51ee& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_816b51ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=template&id=816b51ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Account/Layout.vue?vue&type=template&id=816b51ee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_816b51ee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_816b51ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);