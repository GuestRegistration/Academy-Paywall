(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Course/Pages/CourseCreate.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/Course/Pages/CourseCreate.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/layouts/App */ "./resources/js/layouts/App.vue");
/* harmony import */ var _Components_CourseForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Components/CourseForm */ "./resources/js/Domain/Course/Components/CourseForm.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "CourseCreate",
  layout: function layout(h, page) {
    return h(_layouts_App__WEBPACK_IMPORTED_MODULE_1__["default"], [page]);
  },
  components: {
    CourseForm: _Components_CourseForm__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  metaInfo: function metaInfo() {
    return {
      title: "".concat(this.course ? this.course.title + ' edit' : 'New course ' + this.account.at_username),
      titleTemplate: '%s - AcadaApp'
    };
  },
  data: function data() {
    return {
      payment: null,
      loading: false
    };
  },
  props: {
    account: Object,
    course: Object,
    payg: Object,
    instructors: Array,
    stripe_pk: String
  },
  methods: {
    submit: function submit(formData) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                _context.next = 3;
                return _this.$inertia.post(_this.route('account.course.store', {
                  account: _this.account.username
                }), formData);

              case 3:
                _this.loading = false;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    paymentCallback: function paymentCallback(token) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        axios.post(_this2.route('subscription.payg', {
          account: _this2.account.username
        }), {
          token: token
        }).then(function (response) {
          resolve(response);
        })["catch"](function (e) {
          reject(e);
        });
      });
    },
    paymentSuccessful: function paymentSuccessful(response) {
      toastr.success("Subscription successfull");
      this.payment = response.data.payment;
      this.closeStripeGateway();
    },
    paymentError: function paymentError(error) {
      toastr.error("There was an error " + error.message);
      this.closeStripeGateway();
    },
    openStripeGateway: function openStripeGateway() {
      this.$refs.stripeGateway.open();
    },
    closeStripeGateway: function closeStripeGateway() {
      this.$refs.stripeGateway.close();
    }
  },
  mounted: function mounted() {
    this.payment = this.$page.payment;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_NavDrawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavDrawer */ "./resources/js/components/NavDrawer.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'LayoutApp',
  components: {
    navDrawer: _components_NavDrawer__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['auth', 'authenticated']))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Course/Pages/CourseCreate.vue?vue&type=template&id=7cdb34ee&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/Course/Pages/CourseCreate.vue?vue&type=template&id=7cdb34ee& ***!
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
  return _c(
    "v-container",
    { staticClass: "p-0" },
    [
      _c("stripe-gateway", {
        ref: "stripeGateway",
        attrs: {
          pk: _vm.stripe_pk,
          amount: _vm.payg.amount,
          currency: _vm.payg.currency,
          color: _vm.account.theme_color,
          charge_callback: _vm.paymentCallback
        },
        on: { success: _vm.paymentSuccessful, error: _vm.paymentError }
      }),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "8" } },
            [
              _vm.payment ||
              (_vm.account.subscription && !_vm.account.subscription.expired)
                ? [
                    _c("h4", [_vm._v("New Course")]),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _vm.payment
                      ? _c(
                          "v-alert",
                          {
                            attrs: {
                              icon: "info",
                              prominent: "",
                              text: "",
                              type: "info"
                            }
                          },
                          [
                            _vm._v(
                              '\n                    You are adding this course with the "Pay As You Go" payment of ' +
                                _vm._s(
                                  _vm._f("money")(
                                    _vm.payment.amount,
                                    _vm.payment.currency
                                  )
                                ) +
                                " on " +
                                _vm._s(_vm.payment.time) +
                                "\n                "
                            )
                          ]
                        )
                      : _vm.account.subscription &&
                        !_vm.account.subscription.expired
                      ? _c(
                          "v-alert",
                          {
                            attrs: {
                              icon: "info",
                              prominent: "",
                              text: "",
                              type: "info"
                            }
                          },
                          [
                            _vm._v(
                              "\n                    You are adding this course with your subscription\n                "
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("course-form", {
                      attrs: {
                        loading: _vm.loading,
                        color: _vm.account.theme_color,
                        instructors: _vm.instructors
                      },
                      on: { submit: _vm.submit }
                    })
                  ]
                : _vm.account.subscription && _vm.account.subscription.expired
                ? [
                    _c(
                      "v-alert",
                      {
                        attrs: {
                          icon: "info",
                          prominent: "",
                          text: "",
                          type: "info"
                        }
                      },
                      [
                        _vm._v(
                          "\n                Your subscription has expired. Go to "
                        ),
                        _c(
                          "inertia-link",
                          {
                            attrs: {
                              href: _vm.route("account.subscription.show", {
                                account: _vm.account.username
                              })
                            }
                          },
                          [_vm._v("YOUR SUBSCRIPTIONS")]
                        ),
                        _vm._v(" to subscribe\n                ")
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "my-5 text-center" },
                      [
                        _c("h4", [_vm._v("Pay As You Go")]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "You can pay " +
                              _vm._s(
                                _vm._f("money")(
                                  _vm.payg.amount,
                                  _vm.payg.currency
                                )
                              ) +
                              " to add a course if you are not ready to renew your subscription"
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { dark: "", color: _vm.account.theme_color },
                            on: { click: _vm.openStripeGateway }
                          },
                          [_vm._v('Do "Pay As You Go"')]
                        )
                      ],
                      1
                    )
                  ]
                : !_vm.payment
                ? [
                    _c(
                      "v-alert",
                      {
                        attrs: {
                          icon: "info",
                          prominent: "",
                          text: "",
                          type: "info"
                        }
                      },
                      [
                        _vm._v(
                          '\n                    You are currently on the "Pay As You Go" Plan. Adding a new courses cost ' +
                            _vm._s(
                              _vm._f("money")(
                                _vm.payg.amount,
                                _vm.payg.currency
                              )
                            ) +
                            "\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        attrs: { dark: "", color: _vm.account.theme_color },
                        on: { click: _vm.openStripeGateway }
                      },
                      [
                        _vm._v(
                          "Pay " +
                            _vm._s(
                              _vm._f("money")(
                                _vm.payg.amount,
                                _vm.payg.currency
                              )
                            )
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass: "prevent-default",
                        attrs: {
                          href: _vm.route("account.subscription.show", {
                            account: _vm.account.username
                          })
                        }
                      },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { dark: "", color: _vm.account.theme_color }
                          },
                          [_vm._v("View subscription")]
                        )
                      ],
                      1
                    )
                  ]
                : _vm._e()
            ],
            2
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/App.vue?vue&type=template&id=9087fe26&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/App.vue?vue&type=template&id=9087fe26& ***!
  \***************************************************************************************************************************************************************************************************/
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
      _c("nav-drawer"),
      _vm._v(" "),
      _c(
        "v-app-bar",
        {
          attrs: {
            app: "",
            color:
              _vm.authenticated && _vm.auth.account
                ? _vm.auth.account.theme_color
                : "primary",
            dark: ""
          }
        },
        [
          _c("v-app-bar-nav-icon", {
            on: {
              click: function($event) {
                _vm.$store.state.navDrawer = !_vm.$store.state.navDrawer
              }
            }
          }),
          _vm._v(" "),
          _c(
            "inertia-link",
            {
              staticClass: "white--text",
              staticStyle: { "text-decoration": "none" },
              attrs: { href: _vm.route("home") }
            },
            [
              _c("v-toolbar-title", { attrs: { dark: "" } }, [
                _vm._v("AcadaApp")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _vm.authenticated
            ? [
                _vm.auth.account
                  ? _c(
                      "inertia-link",
                      {
                        staticClass: "prevent-default mx-1",
                        attrs: {
                          href: _vm.route("account.show", {
                            account: _vm.auth.account.username
                          })
                        }
                      },
                      [
                        _c("avatar", {
                          attrs: {
                            src: _vm.auth.account.avatar,
                            color: _vm.auth.account
                              ? _vm.auth.account.theme_color
                              : "primary",
                            size: "40"
                          }
                        })
                      ],
                      1
                    )
                  : _c(
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
                          { attrs: { icon: "" } },
                          [_c("v-icon", [_vm._v("add")])],
                          1
                        )
                      ],
                      1
                    )
              ]
            : !_vm.route().current("signin")
            ? [
                _c(
                  "inertia-link",
                  { attrs: { href: _vm.route("signin") } },
                  [
                    _c("v-btn", { attrs: { dark: "", color: "primary" } }, [
                      _vm._v("Sign in")
                    ])
                  ],
                  1
                )
              ]
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "v-content",
        [_c("v-container", { attrs: { fluid: "" } }, [_vm._t("default")], 2)],
        1
      ),
      _vm._v(" "),
      _c(
        "v-footer",
        { attrs: { app: "" } },
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c("small", [
            _vm._v("Need help ? "),
            _c("a", { attrs: { href: "mailto: support@acadaapp.com" } }, [
              _vm._v("support@acadaapp.com")
            ])
          ])
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

/***/ "./resources/js/Domain/Course/Pages/CourseCreate.vue":
/*!***********************************************************!*\
  !*** ./resources/js/Domain/Course/Pages/CourseCreate.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CourseCreate_vue_vue_type_template_id_7cdb34ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CourseCreate.vue?vue&type=template&id=7cdb34ee& */ "./resources/js/Domain/Course/Pages/CourseCreate.vue?vue&type=template&id=7cdb34ee&");
/* harmony import */ var _CourseCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CourseCreate.vue?vue&type=script&lang=js& */ "./resources/js/Domain/Course/Pages/CourseCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CourseCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CourseCreate_vue_vue_type_template_id_7cdb34ee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CourseCreate_vue_vue_type_template_id_7cdb34ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Domain/Course/Pages/CourseCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Domain/Course/Pages/CourseCreate.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/Domain/Course/Pages/CourseCreate.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Course/Pages/CourseCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Domain/Course/Pages/CourseCreate.vue?vue&type=template&id=7cdb34ee&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Domain/Course/Pages/CourseCreate.vue?vue&type=template&id=7cdb34ee& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseCreate_vue_vue_type_template_id_7cdb34ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseCreate.vue?vue&type=template&id=7cdb34ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Course/Pages/CourseCreate.vue?vue&type=template&id=7cdb34ee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseCreate_vue_vue_type_template_id_7cdb34ee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseCreate_vue_vue_type_template_id_7cdb34ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/layouts/App.vue":
/*!**************************************!*\
  !*** ./resources/js/layouts/App.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_9087fe26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=9087fe26& */ "./resources/js/layouts/App.vue?vue&type=template&id=9087fe26&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./resources/js/layouts/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_9087fe26___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_9087fe26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/App.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/layouts/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/App.vue?vue&type=template&id=9087fe26&":
/*!*********************************************************************!*\
  !*** ./resources/js/layouts/App.vue?vue&type=template&id=9087fe26& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_9087fe26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=9087fe26& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/App.vue?vue&type=template&id=9087fe26&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_9087fe26___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_9087fe26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);