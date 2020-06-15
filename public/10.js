(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Account/Pages/AccountPayment.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/Account/Pages/AccountPayment.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AccountPayment",
  layout: function layout(h, page) {
    return h(_layouts_App__WEBPACK_IMPORTED_MODULE_1__["default"], [page]);
  },
  metaInfo: function metaInfo() {
    return {
      title: "Payment setup ".concat(this.account.at_username),
      titleTemplate: '%s - AcadaApp'
    };
  },
  data: function data() {
    return {
      loading: null,
      form: {}
    };
  },
  props: {
    account: Object,
    gateways: Array
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
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
    saveGateway: function saveGateway(i) {
      var _this = this;

      this.loading = i;

      var data = _objectSpread({
        gateway: this.gateways[i].gateway
      }, this.gateways[i].data);

      axios.post(this.route('account.payment.gateway.store', {
        account: this.account.username
      }), data).then(function (response) {
        _this.gateways[i].data = response.data;
        toastr.success("".concat(_this.gateways[i].gateway_name, " settings saved"));
      })["catch"](function (e) {
        toastr.error("".concat(_this.gateways[i].gateway_name, " settings not saved"));
      })["finally"](function () {
        _this.loading = null;
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Account/Pages/AccountPayment.vue?vue&type=template&id=294c2783&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/Account/Pages/AccountPayment.vue?vue&type=template&id=294c2783& ***!
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
    "v-container",
    [
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "8", lg: "6" } },
            [
              _c("h4", [_vm._v("Payment Gateways")]),
              _vm._v(" "),
              _c(
                "v-expansion-panels",
                { attrs: { popout: "", focusable: "" } },
                _vm._l(_vm.gateways, function(gateway, g) {
                  return _c(
                    "v-expansion-panel",
                    { key: g },
                    [
                      _c(
                        "v-expansion-panel-header",
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(gateway.gateway_name) +
                              "\n                    "
                          ),
                          _c("v-spacer"),
                          _vm._v(" "),
                          gateway.data.credentials_complete
                            ? _c(
                                "v-icon",
                                {
                                  attrs: {
                                    color: "success",
                                    title: "Credentials complete"
                                  }
                                },
                                [_vm._v("check_circle")]
                              )
                            : _c(
                                "v-icon",
                                {
                                  attrs: {
                                    color: "red",
                                    title: "Some credentials are missing"
                                  }
                                },
                                [_vm._v("report_problem")]
                              )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-expansion-panel-content", [
                        _c("div", { staticClass: "my-3" }, [
                          _c(
                            "form",
                            {
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  return _vm.saveGateway(g)
                                }
                              }
                            },
                            [
                              _c("v-switch", {
                                attrs: {
                                  label: "Activate " + gateway.gateway_name
                                },
                                model: {
                                  value: gateway.data.active,
                                  callback: function($$v) {
                                    _vm.$set(gateway.data, "active", $$v)
                                  },
                                  expression: "gateway.data.active"
                                }
                              }),
                              _vm._v(" "),
                              gateway.data.active
                                ? [
                                    _vm._l(gateway.credentials, function(
                                      credential,
                                      c
                                    ) {
                                      return [
                                        _c("x-input", {
                                          key: c,
                                          attrs: {
                                            errors: _vm.errors,
                                            name: credential.slug,
                                            label: credential.name
                                          },
                                          model: {
                                            value:
                                              gateway.data.credentials[
                                                credential.slug
                                              ],
                                            callback: function($$v) {
                                              _vm.$set(
                                                gateway.data.credentials,
                                                credential.slug,
                                                $$v
                                              )
                                            },
                                            expression:
                                              "gateway.data.credentials[credential.slug]"
                                          }
                                        })
                                      ]
                                    })
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "x-button",
                                {
                                  attrs: {
                                    type: "sumbit",
                                    loading: _vm.loading == g,
                                    color: _vm.account.theme_color,
                                    dark: ""
                                  }
                                },
                                [_vm._v("Save")]
                              )
                            ],
                            2
                          )
                        ])
                      ])
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Domain/Account/Pages/AccountPayment.vue":
/*!**************************************************************!*\
  !*** ./resources/js/Domain/Account/Pages/AccountPayment.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountPayment_vue_vue_type_template_id_294c2783___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountPayment.vue?vue&type=template&id=294c2783& */ "./resources/js/Domain/Account/Pages/AccountPayment.vue?vue&type=template&id=294c2783&");
/* harmony import */ var _AccountPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountPayment.vue?vue&type=script&lang=js& */ "./resources/js/Domain/Account/Pages/AccountPayment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountPayment_vue_vue_type_template_id_294c2783___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountPayment_vue_vue_type_template_id_294c2783___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Domain/Account/Pages/AccountPayment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Domain/Account/Pages/AccountPayment.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Domain/Account/Pages/AccountPayment.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountPayment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Account/Pages/AccountPayment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Domain/Account/Pages/AccountPayment.vue?vue&type=template&id=294c2783&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Domain/Account/Pages/AccountPayment.vue?vue&type=template&id=294c2783& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountPayment_vue_vue_type_template_id_294c2783___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountPayment.vue?vue&type=template&id=294c2783& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/Account/Pages/AccountPayment.vue?vue&type=template&id=294c2783&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountPayment_vue_vue_type_template_id_294c2783___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountPayment_vue_vue_type_template_id_294c2783___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);