(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Account/Pages/AccountSubscription.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/Account/Pages/AccountSubscription.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _layouts_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/layouts/App */ "./resources/js/layouts/App.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AccounSubscription",
  layout: function layout(h, page) {
    return h(_layouts_App__WEBPACK_IMPORTED_MODULE_1__["default"], [page]);
  },
  metaInfo: function metaInfo() {
    return {
      title: "Subsription ".concat(this.account.at_username),
      titleTemplate: '%s - AcadaApp'
    };
  },
  data: function data() {
    return {
      plan: {}
    };
  },
  props: {
    account: Object,
    plans: Array,
    payg: Object,
    stripe_pk: String
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    auth: function auth(state) {
      return state.auth;
    },
    authenticated: function authenticated(state) {
      return state.authenticated;
    }
  })), {}, {
    processing: function processing() {
      return this.process === '' ? false : true;
    },
    errors: function errors() {
      return this.$page.errors;
    }
  }),
  methods: {
    isSubscribed: function isSubscribed(plan) {
      if (!this.account.subscription) return false;
      return plan.id === this.account.subscription.subscription_plan_id ? true : false;
    },
    subscribe: function subscribe(plan) {
      this.plan = plan;
      this.$refs.stripeGateway.open();
    },
    chargeCallback: function chargeCallback(token) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        axios.post(_this.route('subscription.subscribe', {
          account: _this.account.username
        }), {
          token: token,
          plan: _this.plan.id
        }).then(function (response) {
          resolve(response);
        })["catch"](function (e) {
          reject(e);
        });
      });
    },
    paymentSuccessful: function paymentSuccessful(response) {
      if (response.data.subscription) {
        toastr.success("Subscription was successfull");
        this.account.subscription = response.data.subscription;
      } else {
        toastr.error("Subscription was not successfull");
      }

      this.closeGateway();
    },
    paymentError: function paymentError(error) {
      toastr.error("There was an error " + error.message);
      this.closeGateway();
    },
    closeGateway: function closeGateway() {
      this.plan = {};
      this.$refs.stripeGateway.close();
    }
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
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      active: 0,
      drawer: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])(['auth', 'authenticated', 'navDrawer'])),
  methods: {
    navItems: function navItems() {
      if (this.authenticated) {
        var _this$auth$profile$us;

        return [// {
        //   route: 'home',
        //   title: 'Home',
        //   icon: 'home',
        // },
        {
          route: 'account.show',
          param: {
            account: this.auth.account ? this.auth.account.username : '#'
          },
          title: 'Academy',
          icon: 'school',
          render: this.auth.account ? true : false
        }, {
          route: this.auth.profile.username ? 'profile.show' : 'profile.edit.alt',
          param: {
            profile: (_this$auth$profile$us = this.auth.profile.username) !== null && _this$auth$profile$us !== void 0 ? _this$auth$profile$us : this.auth.profile.id
          },
          title: 'My profile',
          icon: 'account_circle',
          render: true
        }, {
          route: 'account.edit',
          param: {
            account: this.auth.account ? this.auth.account.username : '#'
          },
          title: 'Edit Account',
          icon: 'edit',
          render: this.auth.account ? true : false
        }, {
          route: 'account.course.create',
          param: {
            account: this.auth.account ? this.auth.account.username : '#'
          },
          title: 'New course',
          icon: 'add_circle',
          render: this.auth.account ? true : false
        }, {
          route: 'account.course.list',
          param: {
            account: this.auth.account ? this.auth.account.username : '#'
          },
          title: 'Courses',
          icon: 'library_books',
          render: this.auth.account ? true : false
        }, {
          route: 'account.student.list',
          param: {
            account: this.auth.account ? this.auth.account.username : '#'
          },
          title: 'Students',
          icon: 'people',
          render: this.auth.account ? true : false
        }, {
          route: 'account.payment.gateway',
          param: {
            account: this.auth.account ? this.auth.account.username : '#'
          },
          title: 'Payment',
          icon: 'local_atm',
          render: this.auth.account ? true : false
        }, {
          route: 'account.subscription.show',
          param: {
            account: this.auth.account ? this.auth.account.username : '#'
          },
          title: 'Subscription',
          icon: 'account_balance',
          render: this.auth.account ? true : false
        }];
      } else {
        return [{
          route: 'home',
          title: 'Home',
          icon: 'home',
          render: true
        }];
      }
    },
    signout: function signout() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$inertia.post(route('signout'));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.active = this.navItems().findIndex(function (item) {
      return item.route == _this2.route().current();
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Account/Pages/AccountSubscription.vue?vue&type=template&id=17db3320&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/Account/Pages/AccountSubscription.vue?vue&type=template&id=17db3320& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
        "v-container",
        [
          _c("stripe-gateway", {
            ref: "stripeGateway",
            attrs: {
              pk: _vm.stripe_pk,
              amount: _vm.plan.amount,
              currency: _vm.plan.currency,
              color: _vm.account.theme_color,
              charge_callback: _vm.chargeCallback
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
                { attrs: { cols: "12", md: "8", lg: "6" } },
                [
                  _c("h4", [_vm._v("Subscriptions")]),
                  _vm._v(" "),
                  _vm.account.is_unlimited
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
                              "\n                        You are currently on an unlimited plan\n                    "
                            )
                          ]
                        )
                      ]
                    : !_vm.account.subscription
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
                              "\n                        You are currently on the Pay As You Go Plan. Each course upload cost " +
                                _vm._s(
                                  _vm._f("money")(
                                    _vm.payg.amount,
                                    _vm.payg.currency
                                  )
                                ) +
                                "\n                    "
                            )
                          ]
                        )
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.account.is_unlimited
                    ? _c(
                        "v-expansion-panels",
                        { attrs: { popout: "", focusable: "" } },
                        _vm._l(_vm.plans, function(plan) {
                          return _c(
                            "v-expansion-panel",
                            { key: plan.id },
                            [
                              _c(
                                "v-expansion-panel-header",
                                [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(plan.name) +
                                      "\n                        "
                                  ),
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _vm.isSubscribed(plan) &&
                                  !_vm.account.subscription.expired
                                    ? _c(
                                        "v-icon",
                                        {
                                          attrs: {
                                            color: "success",
                                            title: "Currently subscribed"
                                          }
                                        },
                                        [_vm._v("check_circle")]
                                      )
                                    : _vm.isSubscribed(plan) &&
                                      _vm.account.subscription.expired
                                    ? _c(
                                        "v-icon",
                                        {
                                          attrs: {
                                            color: "red",
                                            title: "Subscription expired"
                                          }
                                        },
                                        [_vm._v("report_problem")]
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-expansion-panel-content", [
                                _c(
                                  "div",
                                  { staticClass: "m-3 text-center" },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(plan.description) +
                                        "\n                            "
                                    ),
                                    _c("div", [
                                      _c("h1", [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("money")(
                                              plan.amount,
                                              plan.currency
                                            )
                                          )
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _vm.isSubscribed(plan)
                                      ? [
                                          !_vm.account.subscription.expired
                                            ? _c(
                                                "div",
                                                [
                                                  _c(
                                                    "v-alert",
                                                    {
                                                      attrs: {
                                                        icon: "check_circle",
                                                        prominent: "",
                                                        text: "",
                                                        type: "success",
                                                        "my-2": ""
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                        You are currently subscribed\n                                    "
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(
                                                    "\n                                    " +
                                                      _vm._s(
                                                        _vm.account.subscription
                                                          .start_time
                                                      ) +
                                                      " - " +
                                                      _vm._s(
                                                        _vm.account.subscription
                                                          .end_time
                                                      ) +
                                                      ", " +
                                                      _vm._s(
                                                        _vm.account.subscription
                                                          .expiring_time
                                                      ) +
                                                      " days remaining\n                                "
                                                  )
                                                ],
                                                1
                                              )
                                            : _c(
                                                "div",
                                                [
                                                  _c(
                                                    "v-alert",
                                                    {
                                                      attrs: {
                                                        icon: "report_problem",
                                                        prominent: "",
                                                        text: "",
                                                        type: "error",
                                                        "my-2": ""
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                        Subscription expired\n                                    "
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              )
                                        ]
                                      : _vm._e(),
                                    _vm._v(" "),
                                    !_vm.account.is_unlimited &&
                                    (!_vm.account.subscription ||
                                      (_vm.account.subscription &&
                                        _vm.account.subscription.expired))
                                      ? [
                                          _c(
                                            "div",
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color:
                                                      _vm.account.theme_color,
                                                    dark: ""
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.subscribe(plan)
                                                    }
                                                  }
                                                },
                                                [_vm._v("Subscribe")]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      : _vm._e()
                                  ],
                                  2
                                )
                              ])
                            ],
                            1
                          )
                        }),
                        1
                      )
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
var render = function () {}
var staticRenderFns = []



/***/ }),

/***/ "./resources/js/Domain/Account/Pages/AccountSubscription.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/Domain/Account/Pages/AccountSubscription.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountSubscription_vue_vue_type_template_id_17db3320___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountSubscription.vue?vue&type=template&id=17db3320& */ "./resources/js/Domain/Account/Pages/AccountSubscription.vue?vue&type=template&id=17db3320&");
/* harmony import */ var _AccountSubscription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountSubscription.vue?vue&type=script&lang=js& */ "./resources/js/Domain/Account/Pages/AccountSubscription.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountSubscription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountSubscription_vue_vue_type_template_id_17db3320___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountSubscription_vue_vue_type_template_id_17db3320___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Domain/Account/Pages/AccountSubscription.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Domain/Account/Pages/AccountSubscription.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Domain/Account/Pages/AccountSubscription.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSubscription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSubscription.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Account/Pages/AccountSubscription.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSubscription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Domain/Account/Pages/AccountSubscription.vue?vue&type=template&id=17db3320&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Domain/Account/Pages/AccountSubscription.vue?vue&type=template&id=17db3320& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSubscription_vue_vue_type_template_id_17db3320___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSubscription.vue?vue&type=template&id=17db3320& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Account/Pages/AccountSubscription.vue?vue&type=template&id=17db3320&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSubscription_vue_vue_type_template_id_17db3320___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSubscription_vue_vue_type_template_id_17db3320___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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