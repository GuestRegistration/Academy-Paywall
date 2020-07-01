(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/User/Pages/ProfileEdit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/User/Pages/ProfileEdit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProfileEdit",
  layout: function layout(h, page) {
    return h(_layouts_App__WEBPACK_IMPORTED_MODULE_2__["default"], [page]);
  },
  metaInfo: function metaInfo() {
    return {
      title: "Profile Edit ".concat(this.profile.at_username),
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
    profile: Object
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
                _context.next = 3;
                return _this2.$inertia.post(_this2.route('profile.update.alt', {
                  profile: _this2.profile.id
                }), _this2.formData());

              case 3:
                _this2.loading = false;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getAvatar: function getAvatar(files) {
      this.form.avatar = files[0];
    }
  },
  mounted: function mounted() {
    this.form = _objectSpread({}, this.profile);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/User/Pages/ProfileEdit.vue?vue&type=template&id=7c03e4a1&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Domain/User/Pages/ProfileEdit.vue?vue&type=template&id=7c03e4a1& ***!
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
                        src: _vm.auth.profile.avatar,
                        color: "primary",
                        isAvatar: true
                      },
                      on: { change: _vm.getAvatar }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("x-input", {
                  attrs: {
                    errors: _vm.errors,
                    name: "first_name",
                    type: "text",
                    label: "First name",
                    prependInnerIcon: "account_box"
                  },
                  model: {
                    value: _vm.form.first_name,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "first_name", $$v)
                    },
                    expression: "form.first_name"
                  }
                }),
                _vm._v(" "),
                _c("x-input", {
                  attrs: {
                    errors: _vm.errors,
                    name: "last_name",
                    type: "text",
                    label: "Last name",
                    prependInnerIcon: "account_box"
                  },
                  model: {
                    value: _vm.form.last_name,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "last_name", $$v)
                    },
                    expression: "form.last_name"
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
              color: "primary"
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

/***/ "./resources/js/Domain/User/Pages/ProfileEdit.vue":
/*!********************************************************!*\
  !*** ./resources/js/Domain/User/Pages/ProfileEdit.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileEdit_vue_vue_type_template_id_7c03e4a1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileEdit.vue?vue&type=template&id=7c03e4a1& */ "./resources/js/Domain/User/Pages/ProfileEdit.vue?vue&type=template&id=7c03e4a1&");
/* harmony import */ var _ProfileEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileEdit.vue?vue&type=script&lang=js& */ "./resources/js/Domain/User/Pages/ProfileEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileEdit_vue_vue_type_template_id_7c03e4a1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileEdit_vue_vue_type_template_id_7c03e4a1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Domain/User/Pages/ProfileEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Domain/User/Pages/ProfileEdit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Domain/User/Pages/ProfileEdit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/User/Pages/ProfileEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Domain/User/Pages/ProfileEdit.vue?vue&type=template&id=7c03e4a1&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Domain/User/Pages/ProfileEdit.vue?vue&type=template&id=7c03e4a1& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileEdit_vue_vue_type_template_id_7c03e4a1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileEdit.vue?vue&type=template&id=7c03e4a1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Domain/User/Pages/ProfileEdit.vue?vue&type=template&id=7c03e4a1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileEdit_vue_vue_type_template_id_7c03e4a1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileEdit_vue_vue_type_template_id_7c03e4a1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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