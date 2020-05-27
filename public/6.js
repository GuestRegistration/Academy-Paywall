(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./resources/js/store/response.js":
/*!****************************************!*\
  !*** ./resources/js/store/response.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    alert: {},
    errors: {},
    bags: {}
  },
  getters: {
    getErrorsByBag: function getErrorsByBag(state) {
      return function (bag) {
        return state.bags[bag];
      };
    }
  },
  mutations: {
    setErrors: function setErrors(state, errors) {
      if (!(errors instanceof Object)) return;

      if (errors.bag) {
        Vue.set(state.bags, errors.bag, errors.errors);
        return;
      }

      state.errors = errors;
    },
    emptyBag: function emptyBag(state, bag) {
      Vue.set(state.bags, bag, []);
    }
  }
});

/***/ })

}]);