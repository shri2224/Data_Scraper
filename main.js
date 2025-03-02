function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/alert/alert.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alert/alert.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAlertAlertComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngFor=\"let alert of alerts\" class=\"{{cssClass(alert)}}\">\n    <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\n    <span [innerHTML]=\"alert.message\"></span>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid normal ofx-clip h-100\">\n    <div class=\"row h-100\">\n        <app-header *ngIf=\"showComponent\"></app-header>\n        <app-sidebar #sideMenu [hidden]=\"!(showComponent && !hidesideNav && ( moveNow || !media_mobile.matches))\" class=\"ac\"></app-sidebar>\n        <main role=\"main\" class=\"container-fluid\" [ngClass]=\"{'moveNow':moveNow && !media_mobile.matches, 'ml-0':hidesideNav, 'rm-p overflow-hidden' : media_mobile.matches}\"><!-- ofy-auto -->\n            <alert></alert>\n            <!-- <app-spinner></app-spinner> -->\n            <router-outlet></router-outlet>\n        </main>\n        <div class=\"d-block w-100\" [ngClass]=\"{ 'application-footer': media_mobile.matches }\">\n            <app-footer *ngIf=\"showComponent\" [ngClass]=\"{'moveNow':moveNow && !media_mobile.matches, 'ml-0':hidesideNav, 'rm-p' : media_mobile.matches}\"></app-footer>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/bs-modal/bs-modal.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bs-modal/bs-modal.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBsModalBsModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--  <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">{{title}}</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div> -->\n<div class=\"modal-body\" *ngIf=\"!expire\">\n  <div class=\"display\">\n    <label class=\"alignment bs-modal-alert\">{{list}}</label>\n    <br>\n  </div>\n\n  <p *ngIf=\"id\" class=\"m-2 text-center\">Your ticket id is {{id}}</p>\n</div>\n<div class=\"modal-footer no_border \" *ngIf=\"!expire\">\n  <button type=\"button\" class=\"primary-btn\"\n    (click)=\"bsModalRef.hide();changeCondition()\">\n    <svg-icon src=\"assets/images/icons/ok-ico.svg\"></svg-icon>\n    {{\"OK\"}}\n  </button>\n</div>\n\n<div class=\"modal-body\" *ngIf=\"expire\">\n  <div class=\"display\">\n    <label class=\"alignment\">{{list}}</label>\n  </div>\n  <div class=\"text-center font-weight-bold mt-2\">{{coundownTimer}}</div>\n</div>\n<div class=\"modal-footer no_border \" *ngIf=\"expire\">\n  <button type=\"button\" class=\"btn btn-success font_size\" (click)=\"sessionExtend();bsModalRef.hide()\">{{\"YES\"}}</button>\n  <button type=\"button\" class=\"btn btn-primary font_size\" (click)=\"bsModalRef.hide()\">NO</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChangePasswordChangePasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header border-0\">\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"closeModal()\">\n    <span aria-hidden=\"true\">\n      <svg-icon class=\"add-svg\" src=\"assets/images/icons/icon-close.svg\"></svg-icon>\n    </span>\n  </button>\n</div>\n<div class=\"modal-body pt-0\">\n  <div class=\"password-icon mr-auto ml-auto\">\n    <svg-icon class=\"add-svg\" src=\"assets/images/icons/icon-lock.svg\"></svg-icon>\n  </div>\n  <h2 class=\"mb-0 text-center mt-2 password-heading mb-5\">Change Password</h2>\n  <form class=\"change-password-form pr-3 pl-3\" [formGroup]=\"change_password\" (ngSubmit)=\"onSubmit()\">\n\n    <app-password-template [form]=\"change_password\" [submitted]=\"submitted\"></app-password-template>\n\n    <button type=\"submit\" class=\"primary-btn justify-content-center mb-5\">\n      <span>\n        <svg-icon class=\"add-svg\" src=\"assets/images/icons/icon-lock.svg\"></svg-icon>\n      </span>\n      Change Password\n    </button>\n  </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\" row copyright_footer footer-align\">\n    <span> Â© SupportFirst by iOPEX Technologies. All Rights Reserved</span>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Header Navigation -->\n<header>\n  <div class=\"collapse\" id=\"navbarToggleExternalContent\">\n    <div class=\"bg-dark p-4\">\n      <h5 class=\"text-white h4\">Collapsed content</h5>\n      <span class=\"text-muted\">Toggleable via the navbar brand.</span>\n    </div>\n  </div>\n  <nav class=\"navbar navbar-light navbar-expand-md navbar-expand-sm navbar-expand-xs bg-light fixed-top\">\n    <div class=\"container-fluid\">\n      <a class=\"navbar-brand d-flex align-items-center\" [ngClass]=\"isProfile && 'd-none'\">\n        <label class=\"hamburger-label\">\n          <input type=\"checkbox\" name=\"hamburger-icon\" id=\"hamburger-icon\" (change)=\"expand($event)\"\n            [(ngModel)]=\"headerservice.hamburgerActive\">\n          <button class=\"hamburger hamburger--arrow  d-flex p-0\" type=\"button\"\n            [ngClass]=\"{'is-active':headerservice.hamburgerActive}\">\n            <span class=\"hamburger-box\">\n              <span class=\"hamburger-inner\"></span>\n            </span>\n          </button>\n        </label>\n        <span class=\"d-inline-block align-top\">\n          <a class=\"nav-link active pl-0\" aria-current=\"page\" *ngIf=\"media_mobile.matches\">\n            <img class=\"logoImg\"\n              src=\"assets/images/sf-logo.png\">\n            </a>\n        </span>\n        \n      </a>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\" aria-current=\"page\" href=\"#\" *ngIf=\"disableLogo && !media_mobile.matches\"><img\n                class=\"logoImg\" src=\"assets/images/logo.png\"></a>\n            <a class=\"nav-link active\" aria-current=\"page\" *ngIf=\"!disableLogo && !media_mobile.matches\"><img\n                class=\"logoImg\" src=\"assets/images/logo.png\"></a>\n                \n          </li>\n        </ul>\n        <span>\n          <img id=\"switch-version\" class=\"vertical-line\" (click)=\"shiftVersions()\"\n          src=\"assets/images/TryBetaLogo.svg\" width=\"170px\">\n        </span>\n      </div>\n      <form class=\"d-flex pr-2\">\n\n        <div class=\"search_header\" *ngIf=\"!isEnduser\">\n          <div class=\"row\">\n            <div class=\"col-12 p-0\">\n              <div class=\"input-group\">\n                <div class=\"btn-group search_panel\">\n                  <button type=\"button\" class=\"btn search_btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n                    <span class=\"pr-1\" id=\"search_concept\">{{optionValue}}</span> <span class=\"caret\"></span>\n                  </button>\n                  <ul class=\"dropdown-menu scrollable-dropdown\" role=\"menu\">\n                    <li class=\"pt-1 pl-1 custom_list\" (click)=\"selectOption(item)\" *ngFor=\"let item of searchFields\">\n                      {{item.searchField}}</li>\n                  </ul>\n                </div>\n                <div class=\"headerSearch float-right\">\n                  <span class=\"form-control-feedback ml-2\">\n                    <svg-icon (click)=\"search($event)\" src=\"assets/images/icons/search.svg\"></svg-icon>\n                  </span>\n                  <input type=\"text\" class=\"main-search\" [ngClass]=\"[media_mobile.matches ? 'on-mobile-search' : '']\"\n                    (input)=\"search($event)\" (focusout)=\"onFocusOut()\" (focus)=\"onFocus()\"\n                    (keyup.enter)=\"search($event)\" id=\"input_dropdown\" placeholder=\"Search...\" data-toggle=\"dropdown\"\n                    autocomplete=\"off\" />\n                  <ng-container>\n                    <ul class=\"dropdown-menu scrollable-dropdown\" [ngClass]=\"{'show':isFocus}\" id=\"input_dropdown\"\n                      role=\"menu\" infinite-scroll [infiniteScrollDistance]=\"10\" [infiniteScrollThrottle]=\"500\"\n                      [scrollWindow]=\"false\" (scrolled)=\"onScrollDown()\" (scrolledUp)=\"onScrollUp()\">\n                      <li class=\"pt-1 pl-1\" (click)=\"searchItem(item)\" *ngFor=\"let item of ticketIdArray\">\n                        <span class=\"ml-2 searchlist\">\n                          <svg-icon src=\"assets/images/icons/icon_label.svg\"></svg-icon>\n                        </span> <span class=\"pl-1\">{{item.ticketPrefixId}}</span><br>\n                        <span class=\"pl-2\">{{item.subject}}</span>\n                      </li>\n                      <li class=\"text-center pt-3\" *ngIf=\"ticketIdArray.length == 0 && !searchSpinner\">No data found\n                      </li>\n                      <li class=\"pt-3\" *ngIf=\"searchSpinner\">\n                        <div class=\"dataSpinner\">\n                          <div class=\"dataSpinner--spinner\">Loading...</div>\n                        </div>\n                      </li>\n                    </ul>\n                  </ng-container>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n        <div class=\"collapse navbar-collapse justify-content-md-end\" id=\"navbarsExampleCenteredNav\">\n          <ul class=\"navbar-nav\">\n            <li class=\"nav-item dropdown\">\n              <a class=\"nav-link dropdown-toggle\" href=\"javascript:void(0);\" id=\"userinfo\" data-toggle=\"dropdown\">\n                <img src=\"{{profileImage}}\" />\n              </a>\n              <div class=\"dropdown-menu\">\n                <span class=\"dropdown-item userarea\">\n                  <span class=\"profile-name d-block\">{{userName}}</span>\n                  <span class=\"profile-role d-block\">{{role}}</span>\n                </span>\n                <span class=\"dropdown-item profile-login\">Login: {{clienttime}} | {{ clientdate }}</span>\n                <span class=\"dropdown-item\" (click)=\"redirectTo('/my-profile')\">My Profile</span>\n                <span class=\"dropdown-item\" (click)=\"openModal()\"\n                  *ngIf=\"auth_type!='LDAP' && !(casConfigurl && casConfigurl['authenticationType'])\">Change\n                  Password</span>\n                <span class=\"dropdown-item\" (click)=\"logout()\">Logout</span>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </form>\n    </div>\n  </nav>\n</header>\n<!-- <header>\n  <nav class=\"navbar navbar-expand-md navbar-light fixed-top\">\n\n    <label class=\"hamburger-label\">\n      <input type=\"checkbox\" name=\"hamburger-icon\" id=\"hamburger-icon\" (change)=\"expand($event)\"\n        [(ngModel)]=\"hamburgerActive\">\n      <button class=\"hamburger hamburger--arrow  d-flex p-0\" type=\"button\" [ngClass]=\"{'is-active':hamburgerActive}\">\n        <span class=\"hamburger-box\">\n          <span class=\"hamburger-inner\"></span>\n        </span>\n      </button>\n    </label>\n\n    <a class=\"navbar-brand\" href=\"#\" *ngIf=\"disableLogo\"><img class=\"logoImg\" src=\"assets/images/logo.png\"></a>\n    <a class=\"navbar-brand\" *ngIf=\"!disableLogo\"><img class=\"logoImg\" src=\"assets/images/logo.png\"></a>\n\n\n    <div class=\"search_header\" *ngIf=\"!isEnduser\">\n      <div class=\"row\">\n        <div class=\"col-12 p-0\">\n          <div class=\"input-group\">\n            <div class=\"btn-group search_panel\">\n              <button type=\"button\" class=\"btn search_btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n                <span class=\"pr-1\" id=\"search_concept\">{{optionValue}}</span> <span class=\"caret\"></span>\n              </button>\n              <ul class=\"dropdown-menu scrollable-dropdown\" role=\"menu\">\n                <li class=\"pt-1 pl-1 custom_list\" (click)=\"selectOption(item)\" *ngFor=\"let item of searchFields\">\n                  {{item.searchField}}</li>\n              </ul>\n            </div>\n            <div class=\"headerSearch float-right\">\n              <span class=\"form-control-feedback ml-2\">\n                <svg-icon (click)=\"search($event)\" src=\"assets/images/icons/search.svg\"></svg-icon>\n              </span>\n              <input type=\"text\" class=\"main-search\" (input)=\"search($event)\" (focusout)=\"onFocusOut()\"\n                (focus)=\"onFocus()\" (keyup.enter)=\"search($event)\" id=\"input_dropdown\" placeholder=\"Search...\"\n                data-toggle=\"dropdown\" autocomplete=\"off\" />\n              <ng-container>\n                <ul class=\"dropdown-menu scrollable-dropdown\" [ngClass]=\"{'show':isFocus}\" id=\"input_dropdown\"\n                  role=\"menu\" infinite-scroll [infiniteScrollDistance]=\"10\" [infiniteScrollThrottle]=\"500\"\n                  [scrollWindow]=\"false\" (scrolled)=\"onScrollDown()\" (scrolledUp)=\"onScrollUp()\">\n                  <li class=\"pt-1 pl-1\" (click)=\"searchItem(item)\" *ngFor=\"let item of ticketIdArray\">\n                    <span class=\"ml-2 searchlist\">\n                      <svg-icon src=\"assets/images/icons/icon_label.svg\"></svg-icon>\n                    </span> <span class=\"pl-1\">{{item.ticketPrefixId}}</span><br>\n                    <span class=\"pl-2\">{{item.subject}}</span>\n                  </li>\n                  <li class=\"text-center pt-3\" *ngIf=\"ticketIdArray.length == 0 && !searchSpinner\">No data found</li>\n                  <li class=\"pt-3\" *ngIf=\"searchSpinner\">\n                    <div class=\"dataSpinner\">\n                      <div class=\"dataSpinner--spinner\">Loading...</div>\n                    </div>\n                  </li>\n                </ul>\n              </ng-container>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"collapse navbar-collapse justify-content-md-end\" id=\"navbarsExampleCenteredNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"javascript:void(0);\" id=\"userinfo\" data-toggle=\"dropdown\">\n            <img src=\"{{profileImage}}\" />\n          </a>\n          <div class=\"dropdown-menu\">\n            <span class=\"dropdown-item userarea\">\n              <span class=\"profile-name d-block\">{{userName}}</span>\n              <span class=\"profile-role d-block\">{{role}}</span>\n            </span>\n            <span class=\"dropdown-item profile-login\">Login: {{clienttime}} | {{ clientdate }}</span>\n            <span class=\"dropdown-item\" (click)=\"redirectTo('/my-profile')\">My Profile</span>\n            <span class=\"dropdown-item\" (click)=\"openModal()\"\n              *ngIf=\"auth_type!='LDAP' && !(casConfigurl && casConfigurl['authenticationType'])\">Change Password</span>\n            <span class=\"dropdown-item\" (click)=\"logout()\">Logout</span>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header> -->\n<!-- Header Navigation End -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"login-page\" *ngIf=\"(!(casConfigurl && casConfigurl['authenticationType']) && getViaGBtn) && !isAppAuth;else loadingCas\">\n    <div class=\"loginBox row\">\n        <div class=\"col-4\">\n            <h3>Welcome to</h3>\n            <h1>SupportFirst</h1>\n            <p class=\"text-justify\">Welcome onboard and our team is here to help you. During your trial, you will\n                experience how easy it is to\n                use SupportFirst to talk to your stakeholders. Let's get you started with the basics.</p>\n        </div>\n        <div class=\"col-5 offset-3 px-5\" autocomplete=\"off\">\n            <form class=\"w-fit justify-content-center\" [formGroup]=\"LoginForm\" (ngSubmit)=\"loginClick();\">\n                <div class=\"form-group\">\n                    <a href=\"javascsript:void(0);\"><img src=\"assets/images/logoMain.png\"></a>\n                </div>\n                <mat-form-field class=\"w-100\">\n                    <span matPrefix><img class=\"svg loginIcon m-2\" src=\"assets/images/icons/user.svg\"></span>\n                    <input matInput formControlName=\"userId\" placeholder=\"username\" autocomplete=\"off\" />\n                </mat-form-field>\n                <mat-form-field class=\"w-100\" (capsLock)=\"capsOn=$event\">\n                    <span matPrefix><img class=\"svg loginIcon m-2\" src=\"assets/images/icons/password.svg\"></span>\n                    <input matInput id=\"password\" type=\"password\" formControlName=\"password\" placeholder=\"password\"\n                        autocomplete=\"off\" />\n                </mat-form-field>\n                <div class=\"login-btns flex-column\">\n                    <button type=\"submit\" [appShowSpinner]=\"spinner\" class=\"flex flex-1 btn btn-primary justify-content-center\"\n                        [disabled]=\"spinner\">LOGIN</button>\n                    <p *ngIf=\"isGoogleBtn || isAssuredBtn\" style=\"color: black;\" class=\"m-0 flex flex-1 justify-content-center\">( OR )</p>\n                    <div *ngIf=\"isGoogleBtn || isAssuredBtn\" class=\"flex flex-1 flex-row w-100 justify-content-center\">\n                        <button style=\"background-color: transparent;\" *ngIf=\"isAssuredBtn\"\n                            [title]=\"'Assured'\"\n                            type=\"button\" (click)=\"viaAssuredGoogle()\" class=\"w-fit border-0 border-none\" [disabled]=\"spinner\">\n                            <img style=\"height: 35px;\" src=\"assets/images/Assured.svg\">\n                        </button>\n                        <button style=\"background-color: transparent;\" *ngIf=\"isGoogleBtn\" type=\"button\" (click)=\"viaGoogle()\" \n                            [title]=\"'Iopex'\"\n                            class=\"w-fit border-0 border-none\" [disabled]=\"spinner\">\n                            <img src=\"assets/images/google.png\">\n                        </button>\n                    </div>\n                </div>\n                <!--    <span *ngIf=\"isEmptyFields && isButtonClicked\" class=\"my-2 d-block text-center text-danger\">username or password cannot be an empty fields</span> -->\n                <span *ngIf=\"capsOn\" class=\"my-2 d-block text-center text-danger\">Caps-Lock is on..</span>\n                <span *ngIf=\"EmptyField\" class=\"my-2 d-block text-center text-danger\">username or password cannot be an\n                    empty fields</span>\n                <!--   <span *ngIf=\"!isvalidUser && isButtonClicked && !isEmptyFields\"\n                    class=\"my-2 d-block text-center text-danger\">Invalid username or password. Please\n                    try again!</span> -->\n                <span *ngIf=\"inValidUser\" class=\"my-2 d-block text-center text-danger\">Invalid username or password.\n                    Please\n                    try again!</span>\n            </form>\n        </div>\n    </div>\n</div>\n\n<ng-template #loadingCas>\n    <div class=\"dataSpinner\" *ngIf=\"!expired_token\">\n        <div class=\"dataSpinner--spinner\">Loading...</div>\n        <span>Please wait until system complete the validation </span>\n    </div>\n    <div class=\"dataSpinner\" *ngIf=\"expired_token\">\n        <span>Token is expired, Please Login again. </span>\n    </div>\n\n</ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/share/password-template/passWordTemplate.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/share/password-template/passWordTemplate.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharePasswordTemplatePassWordTemplateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [formGroup]=\"form\" *ngIf=\"!isnewpassword\">\n    <div class=\"form-group\">\n        <label>New Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"department\" formControlName=\"newPassword\"\n        maxlength=\"14\"  placeholder=\"New Password\" [ngClass]=\"{'is-invalid': cp.newPassword.invalid && submitted}\">\n        <app-password-strength [passwordToCheck]=\"cp.newPassword.value\" (passwordStrength)=\"passwordValid($event)\">\n\n        </app-password-strength>\n    </div>\n    <div class=\"form-group mb-4\">\n        <label>Confirm Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"department\" formControlName=\"confirmNewPassword\"\n        maxlength=\"14\" placeholder=\"Confirm Password\" [ngClass]=\"{'is-invalid': cp.confirmNewPassword.invalid && submitted}\">\n        <div style='color:#ff7355' *ngIf=\"submitted && form.hasError('invalid')  \">\n            Password does not match</div>\n    </div>\n</div>\n\n<div class=\"row mx-0 password-input\" [formGroup]=\"form\" *ngIf=\"isnewpassword\">\n    <div class=\"form-group\">\n        <label class=\"col-4 justify-content-end required-label\" for=\"newPassword\">New Password\n        </label>\n        <input type=\"password\" pattern=\".{5,}\" class=\"form-control col-8\" id=\"newPassword\" maxlength=\"14\" formControlName=\"newPassword\"\n            placeholder=\"New Password\" [ngClass]=\"{'is-invalid': cp.newPassword.invalid && submitted}\">\n        <app-password-strength class=\"ml-auto\" [passwordToCheck]=\"cp.newPassword.value\"\n            (passwordStrength)=\"passwordValid($event)\">\n        </app-password-strength>\n\n    </div>\n    <div class=\"offset-4  text-danger p-0 minimum-pass\" [hidden]=\"cp.newPassword.errors?.required\"\n        *ngIf=\"submitted && cp.newPassword.errors?.pattern\">\n        Minimum 5 character\n    </div>\n    <div class=\"form-group mb-4\">\n        <label class=\"col-4 justify-content-end required-label\" for=\"confirmNewPassword\">Confirm\n            Password</label>\n        <input type=\"password\" class=\"form-control col-8\" id=\"confirmNewPassword\" maxlength=\"14\" formControlName=\"confirmNewPassword\"\n            placeholder=\"Confirm Password\" [ngClass]=\"{'is-invalid': cp.confirmNewPassword.invalid && submitted}\">\n\n        <div class=\"col-8 ml-auto text-danger p-0\" *ngIf=\"submitted && form.hasError('invalid')\">Password does not match\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/share/password-template/password-strength/password-strength.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/share/password-template/password-strength/password-strength.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharePasswordTemplatePasswordStrengthPasswordStrengthComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"strength\">\n  <ul class=\"strengthBar\">\n    <li class=\"point\" [style.background-color]=\"bar0\"></li>\n    <li class=\"point\" [style.background-color]=\"bar1\"></li>\n    <li class=\"point\" [style.background-color]=\"bar2\"></li>\n    <li class=\"point\" [style.background-color]=\"bar3\"></li>\n  </ul>\n  <br>\n  <p>{{msg}}</p>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"\">\n    <div class=\"d-flex flex-nowrap\">\n        <div class=\"collapse p-l-0 p-r-0 width\" id=\"sidebar\" #collapsehover\n            [ngClass]=\"{'collapsSidenav':sidenavExpand}\">\n            <div class=\"list-group border-0 card text-center text-md-left\" id=\"customSidebar\">\n\n                <a routerLink=\"/dashboard\"\n                    *ngIf=\"auth.authCreateticketModule('isDashBoardReq','ticketPrivileges',['Dash Board'])\"\n                    routerLinkActive=\"active\" class=\"list-group-item d-inline-block collapsed\"\n                    data-parent=\"#sidebar\"><span class=\"menuSvg\" placement=\"right\"\n                        [tooltip]=\"!isdisabled_tooltip?'Dashboard':''\" container=\"body\">\n                        <svg-icon src=\"assets/images/icons/icons__home.svg\"></svg-icon>\n                    </span><span class=\"d-md-inline menuLink\">Home</span></a>\n\n                <a routerLink=\"/create-tickets\" routerLinkActive=\"active\"\n                    *ngIf=\"auth.authCreateticketModule('isTicketPrivilegesReq','ticketPrivileges',['Create'])\"\n                    class=\"list-group-item d-inline-block collapsed \" data-parent=\"#sidebar\"><span class=\"menuSvg\"\n                        placement=\"right\" [tooltip]=\"!isdisabled_tooltip?'Create Tickets':''\" container=\"body\">\n                        <svg-icon src=\"assets/images/icons/icons__create-ticket.svg\"></svg-icon>\n                    </span><span class=\"d-md-inline menuLink\">Create Ticket</span></a>\n\n                <!-- *ngIf=\"auth.authCreateticketModule('isTicketPrivilegesReq','ticketPrivileges',['Approval All','Modify','Approval','View','Own'])\" -->\n                <a routerLink=\"/tickets-queue\" routerLinkActive=\"active\"\n                    *ngIf=\"auth.authCreateticketModule('isTicketPrivilegesReq')\"\n                    class=\"list-group-item d-inline-block collapsed\" data-parent=\"#sidebar\"><span class=\"menuSvg\"\n                        placement=\"right\" [tooltip]=\"!isdisabled_tooltip?'Tickets Queue':''\" container=\"body\">\n                        <svg-icon src=\"assets/images/icons/icons__ticket-queue.svg\"></svg-icon>\n                    </span><span class=\"d-md-inline menuLink\">Ticket Queue</span></a>\n\n                <a routerLink=\"/report\"\n                    *ngIf=\"auth.authCreateticketModule('isTicketReportReq','ticketPrivileges',['Report']) && !media_mobile.matches\"\n                    routerLinkActive=\"active\" class=\"list-group-item d-inline-block collapsed \" data-parent=\"#sidebar\"\n                    aria-expanded=\"false\"><span class=\"menuSvg\" placement=\"right\"\n                        [tooltip]=\"!isdisabled_tooltip?'Report':''\" container=\"body\">\n                        <svg-icon src=\"assets/images/icons/icon_report.svg\"></svg-icon>\n                    </span><span class=\"d-md-inline menuLink\">Report</span></a>\n\n\n\n                <a routerLink=\"/kb\" *ngIf=\"auth.authCreateticketModule('isKnowledgeBaseReq','ticketPrivileges',['KB']) && !media_mobile.matches\"\n                    routerLinkActive=\"active\" class=\"list-group-item d-inline-block collapsed \"\n                    data-parent=\"#sidebar\"><span class=\"menuSvg\" placement=\"right\"\n                        [tooltip]=\"!isdisabled_tooltip?'KB':''\" container=\"body\">\n                        <svg-icon src=\"assets/images/icons/kb-ico.svg\"></svg-icon>\n                    </span><span class=\"d-md-inline menuLink\">KB</span></a>\n\n                <!-- <a routerLink=\"/analysis\" routerLinkActive=\"active\" *ngIf=\"auth.authCreateticketModule('isAnalysisReq','ticketPrivileges',['Analysis'])\"\n                    class=\"list-group-item d-inline-block collapsed \" data-parent=\"#sidebar\" aria-expanded=\"false\"><span\n                        class=\"menuSvg\" placement=\"right\" [tooltip]=\"!isdisabled_tooltip?'Analysis':''\" container=\"body\">\n                        <svg-icon src=\"assets/images/icons/dataAnalysis.svg\"></svg-icon>\n                    </span><span class=\"d-md-inline menuLink\">Analysis</span></a> -->\n                <a routerLink=\"/analysis\" routerLinkActive=\"active\" class=\"list-group-item d-inline-block collapsed \"\n                    *ngIf=\"auth.authCreateticketModule('isAnalysisReq','ticketPrivileges',['Analysis']) && !media_mobile.matches\"\n                    data-parent=\"#sidebar\" aria-expanded=\"false\"><span class=\"menuSvg\" placement=\"right\"\n                        [tooltip]=\"!isdisabled_tooltip?'Analysis':''\" container=\"body\">\n                        <svg-icon src=\"assets/images/icons/dataAnalysis.svg\"></svg-icon>\n                    </span><span class=\"d-md-inline menuLink\">Analysis</span></a>\n\n                <a routerLink=\"/approval-list\"\n                    *ngIf=\"auth.authCreateticketModule('isTicketPrivilegesReq','ticketPrivileges',['Approval']) && !media_mobile.matches\"\n                    routerLinkActive=\"active\" class=\"list-group-item d-inline-block collapsed \"\n                    data-parent=\"#sidebar\"><span class=\"menuSvg approvalIcon\" placement=\"right\"\n                        [tooltip]=\"!isdisabled_tooltip?'Approvals List':''\" container=\"body\">\n                        <svg-icon src=\"assets/images/icons/icon_Approval List.svg\"></svg-icon>\n                    </span><span class=\"d-md-inline menuLink\">Approvals List</span></a>\n\n\n                <a routerLink=\"/system-setting\"\n                    *ngIf=\"auth.authModule('isSystemPrivilegesReq','systemPrivileges',['primaryFeatureActions','secondaryFeatureActions']) && !media_mobile.matches\"\n                    routerLinkActive=\"active\" class=\"list-group-item d-inline-block collapsed \" data-parent=\"#sidebar\"\n                    aria-expanded=\"false\"><span class=\"menuSvg\" placement=\"right\"\n                        [tooltip]=\"!isdisabled_tooltip?'System Setting':''\" container=\"body\">\n                        <svg-icon src=\"assets/images/icons/icons__system-setting.svg\"></svg-icon>\n                    </span><span class=\"d-md-inline menuLink\">System Settings</span></a>\n\n\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/spinner/spinner.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/spinner/spinner.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSpinnerSpinnerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"loader\" *ngIf=\"loadSpinner\">\n    <div class=\"loader--spinner\">Loading...</div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/Config/config.loader.local.ts":
  /*!***********************************************!*\
    !*** ./src/app/Config/config.loader.local.ts ***!
    \***********************************************/

  /*! exports provided: configFactoryLocal */

  /***/
  function srcAppConfigConfigLoaderLocalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "configFactoryLocal", function () {
      return configFactoryLocal;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngx_config_http_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-config/http-loader */
    "./node_modules/@ngx-config/http-loader/fesm2015/ngx-config-http-loader.js");

    function configFactoryLocal(http) {
      return new _ngx_config_http_loader__WEBPACK_IMPORTED_MODULE_1__["ConfigHttpLoader"](http, 'assets/config/config.json');
    }
    /***/

  },

  /***/
  "./src/app/Config/config.resource.local.ts":
  /*!*************************************************!*\
    !*** ./src/app/Config/config.resource.local.ts ***!
    \*************************************************/

  /*! exports provided: ConfigResourceService */

  /***/
  function srcAppConfigConfigResourceLocalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigResourceService", function () {
      return ConfigResourceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngx_config_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-config/core */
    "./node_modules/@ngx-config/core/fesm2015/ngx-config-core.js");

    var ConfigResourceService = /*#__PURE__*/function () {
      function ConfigResourceService(config) {
        _classCallCheck(this, ConfigResourceService);

        this.config = config;
        this.url = '';
      }

      _createClass(ConfigResourceService, [{
        key: "getSetting",
        value: function getSetting() {
          return this.config.getSettings();
        }
      }, {
        key: "getColorCode",
        value: function getColorCode() {
          return this.config.getSettings('dynamicColor');
        }
      }]);

      return ConfigResourceService;
    }();

    ConfigResourceService.ctorParameters = function () {
      return [{
        type: _ngx_config_core__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }];
    };

    ConfigResourceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ConfigResourceService);
    /***/
  },

  /***/
  "./src/app/alert/alert.component.ts":
  /*!******************************************!*\
    !*** ./src/app/alert/alert.component.ts ***!
    \******************************************/

  /*! exports provided: AlertComponent */

  /***/
  function srcAppAlertAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
      return AlertComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _alert_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./alert.model */
    "./src/app/alert/alert.model.ts");
    /* harmony import */


    var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./alert.service */
    "./src/app/alert/alert.service.ts");

    var AlertComponent = /*#__PURE__*/function () {
      function AlertComponent(router, alertService) {
        _classCallCheck(this, AlertComponent);

        this.router = router;
        this.alertService = alertService;
        this.id = 'default-alert';
        this.fade = true;
        this.alerts = [];
      }

      _createClass(AlertComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // subscribe to new alert notifications
          this.alertSubscription = this.alertService.onAlert(this.id).subscribe(function (alert) {
            // clear alerts when an empty alert is received
            if (!alert.message) {
              // filter out alerts without 'keepAfterRouteChange' flag
              _this.alerts = _this.alerts.filter(function (x) {
                return x.keepAfterRouteChange;
              }); // remove 'keepAfterRouteChange' flag on the rest

              _this.alerts.forEach(function (x) {
                return delete x.keepAfterRouteChange;
              });

              return;
            } // add alert to array


            _this.alerts.push(alert); // auto close alert if required


            if (alert.autoClose) {
              setTimeout(function () {
                return _this.removeAlert(alert);
              }, 5000);
            }
          }); // clear alerts on location change

          this.routeSubscription = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
              _this.alertService.clear(_this.id);
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // unsubscribe to avoid memory leaks
          this.alertSubscription.unsubscribe();
          this.routeSubscription.unsubscribe();
        }
      }, {
        key: "removeAlert",
        value: function removeAlert(alert) {
          var _this2 = this;

          if (this.fade) {
            // fade out alert
            this.alerts.find(function (x) {
              return x === alert;
            }).fade = true; // remove alert after faded out

            setTimeout(function () {
              _this2.alerts = _this2.alerts.filter(function (x) {
                return x !== alert;
              });
            }, 250);
          } else {
            // remove alert
            this.alerts = this.alerts.filter(function (x) {
              return x !== alert;
            });
          }
        }
      }, {
        key: "cssClass",
        value: function cssClass(alert) {
          var _alertTypeClass;

          if (!alert) return;
          var classes = ['alert', 'alert-dismissable'];
          var alertTypeClass = (_alertTypeClass = {}, _defineProperty(_alertTypeClass, _alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Success, 'alert alert-success'), _defineProperty(_alertTypeClass, _alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Error, 'alert alert-danger'), _defineProperty(_alertTypeClass, _alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Info, 'alert alert-info'), _defineProperty(_alertTypeClass, _alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Warning, 'alert alert-warning'), _alertTypeClass);
          classes.push(alertTypeClass[alert.type]);

          if (alert.fade) {
            classes.push('fade');
          }

          return classes.join(' ');
        }
      }]);

      return AlertComponent;
    }();

    AlertComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AlertComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AlertComponent.prototype, "fade", void 0);
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'alert',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./alert.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/alert/alert.component.html"))["default"]
    })], AlertComponent);
    /***/
  },

  /***/
  "./src/app/alert/alert.model.ts":
  /*!**************************************!*\
    !*** ./src/app/alert/alert.model.ts ***!
    \**************************************/

  /*! exports provided: Alert, AlertType */

  /***/
  function srcAppAlertAlertModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Alert", function () {
      return Alert;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertType", function () {
      return AlertType;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Alert = /*#__PURE__*/_createClass(function Alert(init) {
      _classCallCheck(this, Alert);

      Object.assign(this, init);
    });

    var AlertType;

    (function (AlertType) {
      AlertType[AlertType["Success"] = 0] = "Success";
      AlertType[AlertType["Error"] = 1] = "Error";
      AlertType[AlertType["Info"] = 2] = "Info";
      AlertType[AlertType["Warning"] = 3] = "Warning";
    })(AlertType || (AlertType = {}));
    /***/

  },

  /***/
  "./src/app/alert/alert.module.ts":
  /*!***************************************!*\
    !*** ./src/app/alert/alert.module.ts ***!
    \***************************************/

  /*! exports provided: AlertModule */

  /***/
  function srcAppAlertAlertModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertModule", function () {
      return AlertModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./alert.component */
    "./src/app/alert/alert.component.ts");

    var AlertModule = /*#__PURE__*/_createClass(function AlertModule() {
      _classCallCheck(this, AlertModule);
    });

    AlertModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]],
      exports: [_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]]
    })], AlertModule);
    /***/
  },

  /***/
  "./src/app/alert/alert.service.ts":
  /*!****************************************!*\
    !*** ./src/app/alert/alert.service.ts ***!
    \****************************************/

  /*! exports provided: AlertService */

  /***/
  function srcAppAlertAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _alert_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./alert.model */
    "./src/app/alert/alert.model.ts");

    var AlertService = /*#__PURE__*/function () {
      function AlertService() {
        _classCallCheck(this, AlertService);

        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.defaultId = 'default-alert';
      } // enable subscribing to alerts observable


      _createClass(AlertService, [{
        key: "onAlert",
        value: function onAlert() {
          var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.defaultId;
          return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (x) {
            return x && x.id === id;
          }));
        } // convenience methods

      }, {
        key: "success",
        value: function success(message, options) {
          this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign({}, options, {
            type: _alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Success,
            message: message
          })));
        }
      }, {
        key: "error",
        value: function error(message, options) {
          this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign({}, options, {
            type: _alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Error,
            message: message
          })));
        }
      }, {
        key: "info",
        value: function info(message, options) {
          this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign({}, options, {
            type: _alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Info,
            message: message
          })));
        }
      }, {
        key: "warn",
        value: function warn(message, options) {
          this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign({}, options, {
            type: _alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Warning,
            message: message
          })));
        } // main alert method    

      }, {
        key: "alert",
        value: function alert(_alert) {
          _alert.id = _alert.id || this.defaultId;
          this.subject.next(_alert);
        } // clear alerts

      }, {
        key: "clear",
        value: function clear() {
          var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.defaultId;
          this.subject.next(new _alert_model__WEBPACK_IMPORTED_MODULE_4__["Alert"]({
            id: id
          }));
        }
      }]);

      return AlertService;
    }();

    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AlertService);
    /***/
  },

  /***/
  "./src/app/app-config.service.ts":
  /*!***************************************!*\
    !*** ./src/app/app-config.service.ts ***!
    \***************************************/

  /*! exports provided: AppConfigService */

  /***/
  function srcAppAppConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppConfigService", function () {
      return AppConfigService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AppConfigService = /*#__PURE__*/function () {
      function AppConfigService(_http) {
        _classCallCheck(this, AppConfigService);

        this._http = _http;
      }

      _createClass(AppConfigService, [{
        key: "loadConfig",
        value: function loadConfig() {
          var _this3 = this;

          try {
            window.console.log = function () {};
          } catch (error) {
            console.log(error);
          }

          return this._http.get('assets/config/casConfig.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
            _this3.config = resp;
            console.log(resp);

            if (resp) {
              var hrefurl = window.location.href;
              var viaGBtn = localStorage.getItem('viaGBtn');
              console.log(viaGBtn);
              console.log(hrefurl);

              if (!hrefurl.includes('authentication')) {
                if (viaGBtn == 'true') {
                  // added if else for goodle button.
                  var SAMLResponse = hrefurl && hrefurl.split('?')[1] && hrefurl.split('?')[1].split('=')[1] ? hrefurl.split('?')[1].split('=')[1] : null;

                  if (SAMLResponse) {
                    sessionStorage.setItem("SAMLResponse", SAMLResponse); // localStorage.removeItem('viaGBtn');
                  } else if (_this3.config && _this3.config["authenticationType"] && _this3.config["GSuiteDetails"]["GSuite_url"] && !localStorage.getItem("access_token")) {
                    window.location.href = _this3.config["GSuiteDetails"]["GSuite_url"];
                  }
                } else {
                  switch (_this3.config["authenticationType"]) {
                    case "GSUITESAML2":
                      var _SAMLResponse = hrefurl && hrefurl.split('?')[1] && hrefurl.split('?')[1].split('=')[1] ? hrefurl.split('?')[1].split('=')[1] : null;

                      if (_SAMLResponse) {
                        sessionStorage.setItem("SAMLResponse", _SAMLResponse);
                      } else if (_this3.config && _this3.config["authenticationType"] && _this3.config["GSuiteDetails"]["GSuite_url"] && !localStorage.getItem("access_token")) {
                        window.location.href = _this3.config["GSuiteDetails"]["GSuite_url"];
                      }

                      break;

                    case "cas":
                      var casTicketId = hrefurl && hrefurl.split('?')[1] && hrefurl.split('?')[1].split('=')[1] ? hrefurl.split('?')[1].split('=')[1] : null;

                      if (casTicketId) {
                        sessionStorage.setItem("ticketId", casTicketId);
                      } else if (_this3.config && _this3.config["casDetails"]["app_url"] && _this3.config["casDetails"]["cas_url"] && !localStorage.getItem("access_token")) {
                        window.location.href = _this3.config["casDetails"]["cas_url"] + "?service=" + _this3.config["casDetails"]["app_url"];
                      }

                      break;
                  }
                }
              }
            }

            return _this3.config;
          })).toPromise();
        }
      }, {
        key: "getConfig",
        value: function getConfig() {
          return this.config;
        }
      }]);

      return AppConfigService;
    }();

    AppConfigService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AppConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AppConfigService);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _bs_modal_bs_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./bs-modal/bs-modal.component */
    "./src/app/bs-modal/bs-modal.component.ts");
    /* harmony import */


    var _auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth-guard.service */
    "./src/app/auth-guard.service.ts");
    /* harmony import */


    var _create_ticket_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./create-ticket-guard.service */
    "./src/app/create-ticket-guard.service.ts");
    /* harmony import */


    var _role_based_preloading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./role-based-preloading */
    "./src/app/role-based-preloading.ts");
    /* harmony import */


    var _mandatoryfield_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./mandatoryfield-guard.service */
    "./src/app/mandatoryfield-guard.service.ts");

    var routes = [{
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'authentication/:value',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'dashboard',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | ticket-dashboard-ticket-dashboard-module */
        [__webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~business-hours-business-hours-mo~1fc0b182"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~create-ticket-create-ticket-modu~8551a2dd"), __webpack_require__.e("default~approval-list-approval-list-module~create-ticket-create-ticket-module~email-module-email-mod~006ad5c3"), __webpack_require__.e("default~analysis-analysis-module~sla-management-sla-management-module~ticket-dashboard-ticket-dashbo~6f60d991"), __webpack_require__.e("default~create-ticket-create-ticket-module~email-module-email-module-module~kb-kb-module~my-profile-~16570503"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~create-ticket-create-ticket-modu~991d388f"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~create-ticket-create-ticket-modu~f1830187"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~ticket-dashboard-ticket-dashboar~7c113212"), __webpack_require__.e("default~create-ticket-create-ticket-module~kb-kb-module~ticket-dashboard-ticket-dashboard-module~tic~9df93f72"), __webpack_require__.e("default~analysis-analysis-module~new-role-new-role-module~ticket-dashboard-ticket-dashboard-module~t~7f393c56"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~ticket-dashboard-ticket-dashboar~91a169ee"), __webpack_require__.e("default~analysis-analysis-module~sla-management-sla-management-module~ticket-dashboard-ticket-dashbo~ba7c27ac"), __webpack_require__.e("default~analysis-analysis-module~ticket-dashboard-ticket-dashboard-module~ticket-queue-ticket-queue-~ea1c9e16"), __webpack_require__.e("default~kb-kb-module~ticket-dashboard-ticket-dashboard-module~ticket-queue-ticket-queue-module~ticke~bf51d1a4"), __webpack_require__.e("default~create-ticket-create-ticket-module~ticket-dashboard-ticket-dashboard-module~ticket-queue-tic~0730f9e9"), __webpack_require__.e("default~ticket-dashboard-ticket-dashboard-module~ticket-queue-ticket-queue-module~ticket-report-tick~ab72e912"), __webpack_require__.e("default~analysis-analysis-module~ticket-dashboard-ticket-dashboard-module"), __webpack_require__.e("default~ticket-auto-assign-ticket-auto-assign-module~ticket-dashboard-ticket-dashboard-module"), __webpack_require__.e("ticket-dashboard-ticket-dashboard-module")]).then(__webpack_require__.bind(null,
        /*! ./ticket-dashboard/ticket-dashboard.module */
        "./src/app/ticket-dashboard/ticket-dashboard.module.ts")).then(function (m) {
          return m.TicketDashboardModule;
        });
      },
      canActivate: [_mandatoryfield_guard_service__WEBPACK_IMPORTED_MODULE_8__["MandatoryGuardService"], _create_ticket_guard_service__WEBPACK_IMPORTED_MODULE_6__["CreateTicketGuardService"]],
      data: {
        preloadCheck: true,
        privilege: {
          isprivillage: 'isDashBoardReq',
          privillage: 'ticketPrivileges',
          actions: ['Dash Board']
        }
      }
    }, {
      path: 'bs-modal',
      component: _bs_modal_bs_modal_component__WEBPACK_IMPORTED_MODULE_4__["BsModalComponent"]
    }, {
      path: 'my-profile',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | my-profile-my-profile-module */
        [__webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~create-ticket-create-ticket-modu~8551a2dd"), __webpack_require__.e("default~approval-list-approval-list-module~create-ticket-create-ticket-module~email-module-email-mod~006ad5c3"), __webpack_require__.e("default~create-ticket-create-ticket-module~email-module-email-module-module~kb-kb-module~my-profile-~16570503"), __webpack_require__.e("my-profile-my-profile-module")]).then(__webpack_require__.bind(null,
        /*! ./my-profile/my-profile.module */
        "./src/app/my-profile/my-profile.module.ts")).then(function (m) {
          return m.MyProfileModule;
        });
      },
      canActivate: ['accessTockenGourd']
    }, {
      path: 'create-tickets',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | create-ticket-create-ticket-module */
        [__webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~business-hours-business-hours-mo~1fc0b182"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~create-ticket-create-ticket-modu~8551a2dd"), __webpack_require__.e("default~approval-list-approval-list-module~create-ticket-create-ticket-module~email-module-email-mod~006ad5c3"), __webpack_require__.e("default~create-ticket-create-ticket-module~email-module-email-module-module~kb-kb-module~my-profile-~16570503"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~create-ticket-create-ticket-modu~991d388f"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~create-ticket-create-ticket-modu~f1830187"), __webpack_require__.e("default~create-ticket-create-ticket-module~kb-kb-module~ticket-dashboard-ticket-dashboard-module~tic~9df93f72"), __webpack_require__.e("default~create-ticket-create-ticket-module~ticket-dashboard-ticket-dashboard-module~ticket-queue-tic~0730f9e9"), __webpack_require__.e("create-ticket-create-ticket-module")]).then(__webpack_require__.bind(null,
        /*! ./create-ticket/create-ticket.module */
        "./src/app/create-ticket/create-ticket.module.ts")).then(function (m) {
          return m.CreateTicketModule;
        });
      },
      canActivate: [_mandatoryfield_guard_service__WEBPACK_IMPORTED_MODULE_8__["MandatoryGuardService"], _create_ticket_guard_service__WEBPACK_IMPORTED_MODULE_6__["CreateTicketGuardService"]],
      data: {
        preloadCheck: true,
        privilege: {
          isprivillage: 'isTicketPrivilegesReq',
          privillage: 'ticketPrivileges',
          actions: ['Create']
        }
      }
    }, {
      path: 'system-setting',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | system-setting-system-setting-module */
        [__webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~create-ticket-create-ticket-modu~8551a2dd"), __webpack_require__.e("system-setting-system-setting-module")]).then(__webpack_require__.bind(null,
        /*! ./system-setting/system-setting.module */
        "./src/app/system-setting/system-setting.module.ts")).then(function (m) {
          return m.SystemSettingModule;
        });
      },
      canActivate: [_mandatoryfield_guard_service__WEBPACK_IMPORTED_MODULE_8__["MandatoryGuardService"], _auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]],
      data: {
        preloadCheck: true,
        privilege: {
          isprivillage: 'isSystemPrivilegesReq',
          privillage: 'systemPrivileges',
          actions: ['primaryFeatureActions', 'secondaryFeatureActions']
        }
      }
    }, {
      path: 'tickets-queue',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | ticket-queue-ticket-queue-module */
        [__webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~business-hours-business-hours-mo~1fc0b182"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~create-ticket-create-ticket-modu~8551a2dd"), __webpack_require__.e("default~approval-list-approval-list-module~create-ticket-create-ticket-module~email-module-email-mod~006ad5c3"), __webpack_require__.e("default~analysis-analysis-module~sla-management-sla-management-module~ticket-dashboard-ticket-dashbo~6f60d991"), __webpack_require__.e("default~create-ticket-create-ticket-module~email-module-email-module-module~kb-kb-module~my-profile-~16570503"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~create-ticket-create-ticket-modu~991d388f"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~create-ticket-create-ticket-modu~f1830187"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~ticket-dashboard-ticket-dashboar~7c113212"), __webpack_require__.e("default~create-ticket-create-ticket-module~kb-kb-module~ticket-dashboard-ticket-dashboard-module~tic~9df93f72"), __webpack_require__.e("default~analysis-analysis-module~new-role-new-role-module~ticket-dashboard-ticket-dashboard-module~t~7f393c56"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~ticket-dashboard-ticket-dashboar~91a169ee"), __webpack_require__.e("default~analysis-analysis-module~ticket-dashboard-ticket-dashboard-module~ticket-queue-ticket-queue-~ea1c9e16"), __webpack_require__.e("default~kb-kb-module~ticket-dashboard-ticket-dashboard-module~ticket-queue-ticket-queue-module~ticke~bf51d1a4"), __webpack_require__.e("default~create-ticket-create-ticket-module~ticket-dashboard-ticket-dashboard-module~ticket-queue-tic~0730f9e9"), __webpack_require__.e("default~ticket-dashboard-ticket-dashboard-module~ticket-queue-ticket-queue-module~ticket-report-tick~ab72e912")]).then(__webpack_require__.bind(null,
        /*! ./ticket-queue/ticket-queue.module */
        "./src/app/ticket-queue/ticket-queue.module.ts")).then(function (m) {
          return m.TicketQueueModule;
        });
      },
      canActivate: [_mandatoryfield_guard_service__WEBPACK_IMPORTED_MODULE_8__["MandatoryGuardService"], _create_ticket_guard_service__WEBPACK_IMPORTED_MODULE_6__["CreateTicketGuardService"]],
      data: {
        preloadCheck: true,
        privilege: {
          isprivillage: 'isTicketPrivilegesReq'
        }
      }
    }, {
      path: 'report',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | ticket-report-ticket-report-module */
        [__webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~business-hours-business-hours-mo~1fc0b182"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~create-ticket-create-ticket-modu~8551a2dd"), __webpack_require__.e("default~approval-list-approval-list-module~create-ticket-create-ticket-module~email-module-email-mod~006ad5c3"), __webpack_require__.e("default~analysis-analysis-module~sla-management-sla-management-module~ticket-dashboard-ticket-dashbo~6f60d991"), __webpack_require__.e("default~create-ticket-create-ticket-module~email-module-email-module-module~kb-kb-module~my-profile-~16570503"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~create-ticket-create-ticket-modu~991d388f"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~create-ticket-create-ticket-modu~f1830187"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~ticket-dashboard-ticket-dashboar~7c113212"), __webpack_require__.e("default~create-ticket-create-ticket-module~kb-kb-module~ticket-dashboard-ticket-dashboard-module~tic~9df93f72"), __webpack_require__.e("default~analysis-analysis-module~new-role-new-role-module~ticket-dashboard-ticket-dashboard-module~t~7f393c56"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~ticket-dashboard-ticket-dashboar~91a169ee"), __webpack_require__.e("default~analysis-analysis-module~sla-management-sla-management-module~ticket-dashboard-ticket-dashbo~ba7c27ac"), __webpack_require__.e("default~analysis-analysis-module~ticket-dashboard-ticket-dashboard-module~ticket-queue-ticket-queue-~ea1c9e16"), __webpack_require__.e("default~kb-kb-module~ticket-dashboard-ticket-dashboard-module~ticket-queue-ticket-queue-module~ticke~bf51d1a4"), __webpack_require__.e("default~create-ticket-create-ticket-module~ticket-dashboard-ticket-dashboard-module~ticket-queue-tic~0730f9e9"), __webpack_require__.e("default~ticket-dashboard-ticket-dashboard-module~ticket-queue-ticket-queue-module~ticket-report-tick~ab72e912"), __webpack_require__.e("ticket-report-ticket-report-module")]).then(__webpack_require__.bind(null,
        /*! ./ticket-report/ticket-report.module */
        "./src/app/ticket-report/ticket-report.module.ts")).then(function (m) {
          return m.TicketReportModule;
        });
      },
      canActivate: [_mandatoryfield_guard_service__WEBPACK_IMPORTED_MODULE_8__["MandatoryGuardService"], _create_ticket_guard_service__WEBPACK_IMPORTED_MODULE_6__["CreateTicketGuardService"]],
      data: {
        preloadCheck: true,
        privilege: {
          isprivillage: 'isTicketReportReq',
          privillage: 'ticketPrivileges',
          actions: ['Report']
        }
      }
    }, {
      path: 'kb',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | kb-kb-module */
        [__webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~business-hours-business-hours-mo~1fc0b182"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~create-ticket-create-ticket-modu~8551a2dd"), __webpack_require__.e("default~approval-list-approval-list-module~create-ticket-create-ticket-module~email-module-email-mod~006ad5c3"), __webpack_require__.e("default~create-ticket-create-ticket-module~email-module-email-module-module~kb-kb-module~my-profile-~16570503"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~create-ticket-create-ticket-modu~f1830187"), __webpack_require__.e("default~create-ticket-create-ticket-module~kb-kb-module~ticket-dashboard-ticket-dashboard-module~tic~9df93f72"), __webpack_require__.e("default~kb-kb-module~ticket-dashboard-ticket-dashboard-module~ticket-queue-ticket-queue-module~ticke~bf51d1a4"), __webpack_require__.e("kb-kb-module")]).then(__webpack_require__.bind(null,
        /*! ./kb/kb.module */
        "./src/app/kb/kb.module.ts")).then(function (m) {
          return m.KBModule;
        });
      },
      canActivate: [_mandatoryfield_guard_service__WEBPACK_IMPORTED_MODULE_8__["MandatoryGuardService"], _create_ticket_guard_service__WEBPACK_IMPORTED_MODULE_6__["CreateTicketGuardService"]],
      data: {
        preloadCheck: true,
        privilege: {
          isprivillage: 'isKnowledgeBaseReq',
          privillage: 'ticketPrivileges',
          actions: ['KB']
        }
      }
    }, {
      path: 'analysis',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | analysis-analysis-module */
        [__webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~business-hours-business-hours-mo~1fc0b182"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~create-ticket-create-ticket-modu~8551a2dd"), __webpack_require__.e("default~analysis-analysis-module~sla-management-sla-management-module~ticket-dashboard-ticket-dashbo~6f60d991"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~create-ticket-create-ticket-modu~991d388f"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~create-ticket-create-ticket-modu~f1830187"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~ticket-dashboard-ticket-dashboar~7c113212"), __webpack_require__.e("default~analysis-analysis-module~new-role-new-role-module~ticket-dashboard-ticket-dashboard-module~t~7f393c56"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~ticket-dashboard-ticket-dashboar~91a169ee"), __webpack_require__.e("default~analysis-analysis-module~sla-management-sla-management-module~ticket-dashboard-ticket-dashbo~ba7c27ac"), __webpack_require__.e("default~analysis-analysis-module~ticket-dashboard-ticket-dashboard-module~ticket-queue-ticket-queue-~ea1c9e16"), __webpack_require__.e("default~analysis-analysis-module~ticket-dashboard-ticket-dashboard-module"), __webpack_require__.e("default~analysis-analysis-module~data-manipulation-data-manipulation-module"), __webpack_require__.e("default~analysis-analysis-module~tool-configuration-tool-configuration-module"), __webpack_require__.e("analysis-analysis-module")]).then(__webpack_require__.bind(null,
        /*! ./analysis/analysis.module */
        "./src/app/analysis/analysis.module.ts")).then(function (m) {
          return m.AnalysisModule;
        });
      },
      canActivate: [_mandatoryfield_guard_service__WEBPACK_IMPORTED_MODULE_8__["MandatoryGuardService"], _create_ticket_guard_service__WEBPACK_IMPORTED_MODULE_6__["CreateTicketGuardService"]],
      data: {
        preloadCheck: true,
        privilege: {
          isprivillage: 'isAnalysisReq',
          privillage: 'ticketPrivileges',
          actions: ['Analysis']
        }
      }
    }, {
      path: 'search',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | ticket-queue-ticket-queue-module */
        [__webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~business-hours-business-hours-mo~1fc0b182"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~create-ticket-create-ticket-modu~8551a2dd"), __webpack_require__.e("default~approval-list-approval-list-module~create-ticket-create-ticket-module~email-module-email-mod~006ad5c3"), __webpack_require__.e("default~analysis-analysis-module~sla-management-sla-management-module~ticket-dashboard-ticket-dashbo~6f60d991"), __webpack_require__.e("default~create-ticket-create-ticket-module~email-module-email-module-module~kb-kb-module~my-profile-~16570503"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~create-ticket-create-ticket-modu~991d388f"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~create-ticket-create-ticket-modu~f1830187"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~ticket-dashboard-ticket-dashboar~7c113212"), __webpack_require__.e("default~create-ticket-create-ticket-module~kb-kb-module~ticket-dashboard-ticket-dashboard-module~tic~9df93f72"), __webpack_require__.e("default~analysis-analysis-module~new-role-new-role-module~ticket-dashboard-ticket-dashboard-module~t~7f393c56"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~ticket-dashboard-ticket-dashboar~91a169ee"), __webpack_require__.e("default~analysis-analysis-module~ticket-dashboard-ticket-dashboard-module~ticket-queue-ticket-queue-~ea1c9e16"), __webpack_require__.e("default~kb-kb-module~ticket-dashboard-ticket-dashboard-module~ticket-queue-ticket-queue-module~ticke~bf51d1a4"), __webpack_require__.e("default~create-ticket-create-ticket-module~ticket-dashboard-ticket-dashboard-module~ticket-queue-tic~0730f9e9"), __webpack_require__.e("default~ticket-dashboard-ticket-dashboard-module~ticket-queue-ticket-queue-module~ticket-report-tick~ab72e912")]).then(__webpack_require__.bind(null,
        /*! ./ticket-queue/ticket-queue.module */
        "./src/app/ticket-queue/ticket-queue.module.ts")).then(function (m) {
          return m.TicketQueueModule;
        });
      },
      canActivate: [_mandatoryfield_guard_service__WEBPACK_IMPORTED_MODULE_8__["MandatoryGuardService"], _create_ticket_guard_service__WEBPACK_IMPORTED_MODULE_6__["CreateTicketGuardService"]],
      data: {
        preloadCheck: true,
        privilege: {
          isprivillage: 'isTicketPrivilegesReq'
        }
      }
    }, {
      path: 'approval-list',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | approval-list-approval-list-module */
        [__webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~business-hours-business-hours-mo~1fc0b182"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~create-ticket-create-ticket-modu~8551a2dd"), __webpack_require__.e("default~approval-list-approval-list-module~create-ticket-create-ticket-module~email-module-email-mod~006ad5c3"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~create-ticket-create-ticket-modu~991d388f"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~create-ticket-create-ticket-modu~f1830187"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~ticket-dashboard-ticket-dashboar~7c113212"), __webpack_require__.e("default~analysis-analysis-module~approval-list-approval-list-module~ticket-dashboard-ticket-dashboar~91a169ee"), __webpack_require__.e("approval-list-approval-list-module")]).then(__webpack_require__.bind(null,
        /*! ./approval-list/approval-list.module */
        "./src/app/approval-list/approval-list.module.ts")).then(function (m) {
          return m.ApprovalListModule;
        });
      },
      canActivate: [_mandatoryfield_guard_service__WEBPACK_IMPORTED_MODULE_8__["MandatoryGuardService"], _create_ticket_guard_service__WEBPACK_IMPORTED_MODULE_6__["CreateTicketGuardService"]],
      data: {
        preloadCheck: true,
        privilege: {
          isprivillage: 'isTicketPrivilegesReq',
          privillage: 'ticketPrivileges',
          actions: ['Approval']
        }
      }
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _role_based_preloading__WEBPACK_IMPORTED_MODULE_7__["RoleBasedPreloader"],
        useHash: true
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".rm-p {\n  margin-left: 0px;\n}\n\n.ofx-clip {\n  overflow-x: clip;\n}\n\n.ofy-auto {\n  overflow-y: auto;\n}\n\n.ofy-scroll {\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvaGl0aHZlbmthdGVzaC9Sb2hpdGgvZ2l0L3NmLXYyL21haW4vVUktTkVXL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURHQTtFQUNJLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJtLXB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLm9meC1jbGlwIHtcbiAgICBvdmVyZmxvdy14OiBjbGlwO1xufVxuXG5cbi5vZnktYXV0byB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAvLyAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG59XG4ub2Z5LXNjcm9sbCB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIC8vIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbn1cblxuLy8gLm9meS1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbi8vICAgICB3aWR0aDogbm9uZTtcbi8vICAgfSIsIi5ybS1wIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLm9meC1jbGlwIHtcbiAgb3ZlcmZsb3cteDogY2xpcDtcbn1cblxuLm9meS1hdXRvIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLm9meS1zY3JvbGwge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./helper.service */
    "./src/app/helper.service.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _bs_modal_bs_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bs-modal/bs-modal.component */
    "./src/app/bs-modal/bs-modal.component.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _header_header_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./header/header.service */
    "./src/app/header/header.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _state_kafka_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./state/kafka.actions */
    "./src/app/state/kafka.actions.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngxs_websocket_plugin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ngxs/websocket-plugin */
    "./node_modules/@ngxs/websocket-plugin/fesm2015/ngxs-websocket-plugin.js");
    /* harmony import */


    var _login_login_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./login/login-auth.service */
    "./src/app/login/login-auth.service.ts");
    /* harmony import */


    var _app_config_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./app-config.service */
    "./src/app/app-config.service.ts");
    /* harmony import */


    var _Config_config_resource_local__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./Config/config.resource.local */
    "./src/app/Config/config.resource.local.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! src/environments/environment.prod */
    "./src/environments/environment.prod.ts");

    var AppComponent = /*#__PURE__*/function () {
      // @ViewChild('bs-dropdown-container', {static: false}) bsDropDown: ElementRef;
      function AppComponent(router, auth, activatedRoute, modalService, headerService, actions$, authService, appConfigService, config, render, mediaMatcher, eleRef) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.auth = auth;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.headerService = headerService;
        this.actions$ = actions$;
        this.authService = authService;
        this.appConfigService = appConfigService;
        this.config = config;
        this.render = render;
        this.mediaMatcher = mediaMatcher;
        this.eleRef = eleRef;
        this.showComponent = true;
        this.stopTimer = false;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.ngUnsubscribe2 = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.ngUnsubscribe3 = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.subscriptions = [];
        this.userInactive = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"](); // to disable console.log

        try {
          if (src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_17__["environment"].production) {// window.console.log = () => { }
          }
        } catch (error) {
          console.log(error);
        }

        this.iscasAuth = appConfigService.getConfig();
        this.media_mobile = mediaMatcher.matchMedia("only screen and (max-width: 850px) "); // setInterval(()=>{
        //   console.log(this.media_mobile.matches, this.media_mobile)
        // }, 1000)
        // console.log("====================")
        // console.log("app comp constructor")
        // console.log("====================")

        console.log(window.location.href);

        if (window.location.href.includes('authentication')) {
          sessionStorage.setItem("IsAppAuth", "true");
          sessionStorage.setItem("appCred", window.location.href.split('/')[window.location.href.split('/').length - 1]);
        } // this.router.events.subscribe((value: any)=>{
        //   console.log(value);
        //   if(value.url.includes('search')){
        //     this.render.addClass(this.bsDropDown, 'bs-dropdown-container-search')
        //     console.log(this.eleRef.nativeElement.getElementsByTagName('bs-dropdown-container'))
        //   }
        // })

      }

      _createClass(AppComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.media_mobile = this.mediaMatcher.matchMedia("only screen and (max-width: 850px) ");
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.media_mobile = this.mediaMatcher.matchMedia("only screen and (max-width: 850px) ");
          var color = this.config.getColorCode();

          if (color) {
            document.documentElement.style.setProperty('--dynamic-colour', color);
          }

          var hrefurl = window.location.href;

          if (hrefurl.includes("/search") && hrefurl.includes("?ticketId=")) {
            var ticketId = hrefurl && hrefurl.split('?')[1] && hrefurl.split('?')[1].split('=')[1] ? hrefurl.split('?')[1].split('=')[1] : null;
            sessionStorage.setItem("searchTicketId", ticketId || "");
          } else {
            sessionStorage.setItem("searchTicketId", "");
          }

          if (!localStorage.getItem("access_token") || !localStorage.getItem("invalidToken") && new Date().getTime() > moment__WEBPACK_IMPORTED_MODULE_6__(localStorage.getItem("expires_at"), 'YYYY-MM-DD hh:mm:ss a').valueOf()) {
            this.auth.logout();
          }

          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
              _this4.modifyHeader(event);
            }
          });
          this.subscription = this.headerService.sidenavExpand.subscribe(function (data) {
            _this4.moveNow = data;
          });
          this.subscription2 = this.auth.getroutingPath.subscribe(function (data) {
            var config = _this4.router.config;

            if (!data && config.some(function (item) {
              return item.path != "**";
            })) {
              var defultRouterPath = localStorage.getItem("defultRouterPath");

              _this4.configDefault(defultRouterPath, config);
            } else if (data) {
              _this4.configDefault(data, config);
            }

            console.log(_this4.router.config);
          });
          setInterval(function () {
            if (_this4.auth.sessionValid == false) {
              _this4.sessionTime(Event);
            }

            if (localStorage.getItem("invalidToken") == "true" || localStorage.getItem("expires_at") && new Date().getTime() > moment__WEBPACK_IMPORTED_MODULE_6__(localStorage.getItem("expires_at"), 'YYYY-MM-DD hh:mm:ss a').valueOf()) {
              _this4.modalService.show(_bs_modal_bs_modal_component__WEBPACK_IMPORTED_MODULE_5__["BsModalComponent"], {
                initialState: {
                  list: "Session Expired!"
                }
              });

              _this4.auth.logout();
            }
          }, 3000);
          this.auth.connectKafka();
          this.actions$.pipe(Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_9__["ofActionSuccessful"])(_state_kafka_actions__WEBPACK_IMPORTED_MODULE_10__["Logout"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.ngUnsubscribe)).subscribe(function (data) {
            _this4.auth.logout();
          });
          this.actions$.pipe(Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_9__["ofAction"])(_ngxs_websocket_plugin__WEBPACK_IMPORTED_MODULE_12__["WebSocketDisconnected"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.ngUnsubscribe)).subscribe(function (data) {
            console.log(data); // this.iswebsocketdisConnected = true;
          });
          this.actions$.pipe(Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_9__["ofAction"])(_ngxs_websocket_plugin__WEBPACK_IMPORTED_MODULE_12__["WebSocketConnected"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.ngUnsubscribe)).subscribe(function (data) {
            console.log(data); // this.iswebsocketdisConnected = false;
          });
          this.onlineEvent = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(window, 'online');
          this.offlineEvent = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(window, 'offline');
          this.subscriptions.push(this.onlineEvent.subscribe(function (event) {
            _this4.connectionStatusMessage = 'Connected to internet! You are online';
            _this4.connectionStatus = 'online';

            _this4.auth.connectKafka();
          }));
          this.subscriptions.push(this.offlineEvent.subscribe(function (e) {
            _this4.connectionStatusMessage = 'Connection lost! You are offline';
            _this4.connectionStatus = 'offline';

            _this4.auth.disConnectKafka();
          }));
          this.render.listen('window', 'click', function (event) {
            if (event.target && event.target !== _this4.menu.nativeElement && _this4.moveNow && _this4.media_mobile.matches) {
              // this.moveNow=false;
              _this4.headerService.sidenavExpand.next(false);

              _this4.headerService.hamburgerActive = false;
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: // setTimeout() {
        //   console.log(this.iswebsocketdisConnected);
        //   if (this.iswebsocketdisConnected) {
        //     this.auth.connectKafka();
        //     this.iswebsocketdisConnected = false;
        //   }
        //   this.userActivity = setTimeout(() => {
        //     this.userInactive.next(undefined);
        //   }, 60000);
        // }
        // @HostListener('window:mousemove') refreshUserState() {
        //   clearTimeout(this.userActivity);
        //   this.setTimeout();
        // }
        function ngOnDestroy() {
          this.subscription.unsubscribe();
          this.subscription2.unsubscribe();
          this.ngUnsubscribe.next();
          this.ngUnsubscribe.complete();
          this.ngUnsubscribe2.next();
          this.ngUnsubscribe2.complete();
          this.subscriptions.forEach(function (subscription) {
            return subscription.unsubscribe();
          });
        }
      }, {
        key: "configDefault",
        value: function configDefault(data, config) {
          if (data && config) {
            var index = config.findIndex(function (itemconfig) {
              return itemconfig.path == '**';
            });

            if (index > -1) {
              var indexfull = config.findIndex(function (itemconfig) {
                return itemconfig.path == '';
              });
              config[index] = {
                path: '**',
                redirectTo: data
              };
              config[indexfull] = {
                path: '',
                redirectTo: data,
                pathMatch: 'full'
              };
            } else {
              config.unshift({
                path: '',
                redirectTo: data,
                pathMatch: 'full'
              });
              config.push({
                path: '**',
                redirectTo: data
              });
            }
          }

          this.router.resetConfig(config);
        }
      }, {
        key: "modifyHeader",
        value: function modifyHeader(location) {
          debugger;

          try {
            while (document.body.classList.length > 0) {
              document.body.classList.remove(document.body.classList[0]);
            }
          } catch (error) {
            document.body.classList.remove(document.body.classList[document.body.classList.length - 1]);
          }

          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
          var str = this.router.url.split('?')[0]; // console.log("prev", this.router.getCurrentNavigation().previousNavigation.finalUrl.toString());

          console.log("loc.split", window.location.href.split('#')[1].split('/')[1]);
          console.log("str", str);

          var _final = str.substr(str.lastIndexOf('/') + 1); // this.auth.link_check(str);


          if (_final) {
            if (this.iscasAuth && this.iscasAuth["authenticationType"] && _final === "login" || !this.authService.viaGBtn.value && _final === "login" || this.authService.appAuth.value && _final === "login") {
              document.body.classList.add("caslogin");
            } else {
              // window.location.href.split('#')[1].split('/')[1] || 
              document.body.classList.add(_final);
            }
          } else {
            document.body.classList.add('dashboard');
          }

          if (str === "/login") {
            this.showComponent = false;
          } else {
            this.showComponent = true;
          }

          if (str === "/my-profile") {
            var errorFields = this.auth.mandatoryFields;

            if (errorFields) {
              this.hidesideNav = errorFields.length > 0 ? true : false;
            } else {
              this.hidesideNav = false;
            }
          } else {
            this.hidesideNav = false;
          }
        }
      }, {
        key: "sessionTime",
        value: function sessionTime(e) {
          var currentdate = new Date();
          this.currentlogin = moment__WEBPACK_IMPORTED_MODULE_6__(currentdate).format('YYYY-MM-DD hh:mm:ss a');
          var expireTime = localStorage.getItem("expires_at");
          this.expireTime = localStorage.getItem("expires_at");
          this.delay_time = localStorage.getItem("delay_time");

          if (this.delay_time < this.currentlogin && this.currentlogin < this.expireTime) {
            this.auth.sessionValid = true;

            if (this.iscasAuth && this.iscasAuth["authenticationType"]) {
              this.auth.renewSession();
            } else {
              this.bsModalRef = this.modalService.show(_bs_modal_bs_modal_component__WEBPACK_IMPORTED_MODULE_5__["BsModalComponent"], {
                "class": 'modal-sm modal-dialog-centered',
                initialState: {
                  list: 'Yours session is about to expire, Do you need more time?',
                  expire: true
                }
              });
              this.bsModalRef.content.setLogoutTime = new Date(this.expireTime);
            }

            e.preventDefault(); //alert('Yours session is about to expire, Do you need more time?');
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]
      }, {
        type: _header_header_service__WEBPACK_IMPORTED_MODULE_7__["HeaderService"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_9__["Actions"]
      }, {
        type: _login_login_auth_service__WEBPACK_IMPORTED_MODULE_13__["LoginAuthService"]
      }, {
        type: _app_config_service__WEBPACK_IMPORTED_MODULE_14__["AppConfigService"]
      }, {
        type: _Config_config_resource_local__WEBPACK_IMPORTED_MODULE_15__["ConfigResourceService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__["MediaMatcher"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sideMenu', {
      "static": false
    })], AppComponent.prototype, "menu", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: initConfig, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initConfig", function () {
      return initConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _Config_config_loader_local__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./Config/config.loader.local */
    "./src/app/Config/config.loader.local.ts");
    /* harmony import */


    var _ngx_config_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-config/core */
    "./node_modules/@ngx-config/core/fesm2015/ngx-config-core.js");
    /* harmony import */


    var _Config_config_resource_local__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./Config/config.resource.local */
    "./src/app/Config/config.resource.local.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var angular_svg_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! angular-svg-icon */
    "./node_modules/angular-svg-icon/fesm2015/angular-svg-icon.js");
    /* harmony import */


    var _helper_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./helper.service */
    "./src/app/helper.service.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _login_login_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./login/login-auth.service */
    "./src/app/login/login-auth.service.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var _httpconfig_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./httpconfig.interceptor */
    "./src/app/httpconfig.interceptor.ts");
    /* harmony import */


    var _bs_modal_bs_modal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./bs-modal/bs-modal.component */
    "./src/app/bs-modal/bs-modal.component.ts");
    /* harmony import */


    var _alert_alert_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./alert/alert.module */
    "./src/app/alert/alert.module.ts");
    /* harmony import */


    var _error_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./error.service */
    "./src/app/error.service.ts");
    /* harmony import */


    var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./spinner/spinner.component */
    "./src/app/spinner/spinner.component.ts");
    /* harmony import */


    var _spinner_spinner_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./spinner/spinner.service */
    "./src/app/spinner/spinner.service.ts");
    /* harmony import */


    var _share_button_spinner_button_spinner_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./share/button-spinner/button-spinner.module */
    "./src/app/share/button-spinner/button-spinner.module.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _ngxs_websocket_plugin__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @ngxs/websocket-plugin */
    "./node_modules/@ngxs/websocket-plugin/fesm2015/ngxs-websocket-plugin.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _state_kafka_state__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./state/kafka.state */
    "./src/app/state/kafka.state.ts");
    /* harmony import */


    var _header_header_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./header/header.module */
    "./src/app/header/header.module.ts");
    /* harmony import */


    var _app_config_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./app-config.service */
    "./src/app/app-config.service.ts");

    function initConfig(http, appConfigService) {
      return function () {
        return appConfigService.loadConfig();
      };
    }

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_20__["SidebarComponent"], _bs_modal_bs_modal_component__WEBPACK_IMPORTED_MODULE_22__["BsModalComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_16__["TrackCapsDirective"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_25__["SpinnerComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_28__["FooterComponent"]],
      imports: [_header_header_module__WEBPACK_IMPORTED_MODULE_32__["HeaderModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_14__["AngularSvgIconModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__["NgSelectModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["ModalModule"].forRoot(), _ngx_config_core__WEBPACK_IMPORTED_MODULE_8__["ConfigModule"].forRoot({
        provide: _ngx_config_core__WEBPACK_IMPORTED_MODULE_8__["ConfigLoader"],
        useFactory: _Config_config_loader_local__WEBPACK_IMPORTED_MODULE_7__["configFactoryLocal"],
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
      }), _alert_alert_module__WEBPACK_IMPORTED_MODULE_23__["AlertModule"], _share_button_spinner_button_spinner_module__WEBPACK_IMPORTED_MODULE_27__["ButtonSpinnerModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_30__["NgxsModule"].forRoot([_state_kafka_state__WEBPACK_IMPORTED_MODULE_31__["KafkaState"]], {
        developmentMode: true
      }), _ngxs_websocket_plugin__WEBPACK_IMPORTED_MODULE_29__["NgxsWebsocketPluginModule"].forRoot()],
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
        useFactory: initConfig,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _app_config_service__WEBPACK_IMPORTED_MODULE_33__["AppConfigService"]],
        multi: true
      }, _helper_service__WEBPACK_IMPORTED_MODULE_15__["HelperService"], _login_login_auth_service__WEBPACK_IMPORTED_MODULE_19__["LoginAuthService"], _spinner_spinner_service__WEBPACK_IMPORTED_MODULE_26__["SpinnerService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _httpconfig_interceptor__WEBPACK_IMPORTED_MODULE_21__["HttpConfigInterceptor"],
        multi: true,
        deps: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]]
      }, _Config_config_resource_local__WEBPACK_IMPORTED_MODULE_9__["ConfigResourceService"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"],
        useClass: _error_service__WEBPACK_IMPORTED_MODULE_24__["ErrorService"]
      }, {
        provide: 'accessTockenGourd',
        useValue: function useValue() {
          return localStorage.getItem('access_token') && localStorage.getItem('role_id') ? true : false;
        }
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth-guard.service.ts":
  /*!***************************************!*\
    !*** ./src/app/auth-guard.service.ts ***!
    \***************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./helper.service */
    "./src/app/helper.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);

    var AuthGuardService = /*#__PURE__*/function () {
      function AuthGuardService(router, auth) {
        _classCallCheck(this, AuthGuardService);

        this.router = router;
        this.auth = auth;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (localStorage.getItem("access_token") && new Date().getTime() < moment__WEBPACK_IMPORTED_MODULE_4__(localStorage.getItem("expires_at"), 'YYYY-MM-DD hh:mm:ss a').valueOf()) {
            var privilege = route.data["privilege"];

            if (this.auth.authModule(privilege.isprivillage, privilege.privillage, privilege.actions)) {
              return true;
            }
          }

          this.auth.logout();
          return false;
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]
      }];
    };

    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuardService);
    /***/
  },

  /***/
  "./src/app/bs-modal/bs-modal.component.ts":
  /*!************************************************!*\
    !*** ./src/app/bs-modal/bs-modal.component.ts ***!
    \************************************************/

  /*! exports provided: BsModalComponent */

  /***/
  function srcAppBsModalBsModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsModalComponent", function () {
      return BsModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../helper.service */
    "./src/app/helper.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");

    var BsModalComponent = /*#__PURE__*/function () {
      function BsModalComponent(bsModalRef, helper, router, mediaMatcher) {
        _classCallCheck(this, BsModalComponent);

        this.bsModalRef = bsModalRef;
        this.helper = helper;
        this.router = router;
        this.mediaMatcher = mediaMatcher;
        this.media_mobile = this.mediaMatcher.matchMedia("only screen and (max-width: 850px) ");
        console.log("====================");
        console.log("bs model constructor");
        console.log("====================");
      }

      _createClass(BsModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.media_mobile = this.mediaMatcher.matchMedia("only screen and (max-width: 850px) ");
          console.log(this.list);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.media_mobile = this.mediaMatcher.matchMedia("only screen and (max-width: 850px) ");
        }
      }, {
        key: "sessionExtend",
        value: function sessionExtend() {
          this.helper.renewSession();
        }
      }, {
        key: "changeCondition",
        value: function changeCondition() {
          this.helper.sessionValid = false;
        }
      }, {
        key: "setLogoutTime",
        set: function set(endtime) {
          var _this5 = this;

          var eventTime = endtime.getTime();
          var currentTime = new Date().getTime();
          var diffTime = eventTime - currentTime;
          var duration = moment__WEBPACK_IMPORTED_MODULE_3__["duration"](diffTime);
          var intervaltime = 1000;
          this.tokenExpirationTimer = setTimeout(function () {
            _this5.subscription.unsubscribe();

            _this5.bsModalRef.hide();
          }, diffTime);
          this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(intervaltime).subscribe(function (x) {
            duration = moment__WEBPACK_IMPORTED_MODULE_3__["duration"](duration - intervaltime);
            _this5.coundownTimer = duration.hours() + ":" + duration.minutes() + ":" + duration.seconds();
          });
        }
      }]);

      return BsModalComponent;
    }();

    BsModalComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]
      }, {
        type: _helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["MediaMatcher"]
      }];
    };

    BsModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bs-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bs-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/bs-modal/bs-modal.component.html"))["default"]
    })], BsModalComponent);
    /***/
  },

  /***/
  "./src/app/change-password/change-password.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/change-password/change-password.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppChangePasswordChangePasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/change-password/change-password.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/change-password/change-password.component.ts ***!
    \**************************************************************/

  /*! exports provided: ChangePasswordComponent */

  /***/
  function srcAppChangePasswordChangePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () {
      return ChangePasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_bs_modal_bs_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/bs-modal/bs-modal.component */
    "./src/app/bs-modal/bs-modal.component.ts");
    /* harmony import */


    var _changepassword_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./changepassword.service */
    "./src/app/change-password/changepassword.service.ts");
    /* harmony import */


    var _helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../helper.service */
    "./src/app/helper.service.ts");

    var ChangePasswordComponent = /*#__PURE__*/function () {
      function ChangePasswordComponent(_router, modalService, formBuilder, changepasswordService, bsModalRef, auth) {
        _classCallCheck(this, ChangePasswordComponent);

        this._router = _router;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.changepasswordService = changepasswordService;
        this.bsModalRef = bsModalRef;
        this.auth = auth;
        this.submitted = false;
      }

      _createClass(ChangePasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.change_password = this.formBuilder.group({
            usersId: [this.list, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.bsModalRef.hide();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this6 = this;

          this.submitted = true;

          if (this.change_password.valid) {
            this.changepasswordService.changePassword(this.change_password.value).subscribe(function (response) {
              if (response['success']) {
                if (_this6.list == localStorage.getItem("user_id")) {
                  _this6.auth.logout();

                  _this6.modalService.show(src_app_bs_modal_bs_modal_component__WEBPACK_IMPORTED_MODULE_5__["BsModalComponent"], {
                    "class": 'modal-sm modal-dialog-centered',
                    initialState: {
                      list: response["message"] + " Please logout and login to continue"
                    }
                  });
                } else {
                  _this6.modalService.show(src_app_bs_modal_bs_modal_component__WEBPACK_IMPORTED_MODULE_5__["BsModalComponent"], {
                    "class": 'modal-sm modal-dialog-centered',
                    initialState: {
                      list: response["message"]
                    }
                  });
                }

                _this6.submitted = false;

                _this6.bsModalRef.hide();
              } else {
                _this6.modalService.show(src_app_bs_modal_bs_modal_component__WEBPACK_IMPORTED_MODULE_5__["BsModalComponent"], {
                  "class": 'modal-sm modal-dialog-centered',
                  initialState: {
                    list: response["message"]
                  }
                });
              }
            }, function (error) {
              _this6.modalService.show(src_app_bs_modal_bs_modal_component__WEBPACK_IMPORTED_MODULE_5__["BsModalComponent"], {
                "class": 'modal-sm modal-dialog-centered',
                initialState: {
                  list: error["error"]["message"]
                }
              });
            });
          } else {}
        }
      }]);

      return ChangePasswordComponent;
    }();

    ChangePasswordComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _changepassword_service__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordService"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]
      }, {
        type: _helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"]
      }];
    };

    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-change-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./change-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./change-password.component.scss */
      "./src/app/change-password/change-password.component.scss"))["default"]]
    })], ChangePasswordComponent);
    /***/
  },

  /***/
  "./src/app/change-password/change-password.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/change-password/change-password.module.ts ***!
    \***********************************************************/

  /*! exports provided: ChangePasswordModule */

  /***/
  function srcAppChangePasswordChangePasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordModule", function () {
      return ChangePasswordModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _change_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./change-password.component */
    "./src/app/change-password/change-password.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var angular_svg_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-svg-icon */
    "./node_modules/angular-svg-icon/fesm2015/angular-svg-icon.js");
    /* harmony import */


    var _share_password_template_password_template_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../share/password-template/password-template.module */
    "./src/app/share/password-template/password-template.module.ts");

    var ChangePasswordModule = /*#__PURE__*/_createClass(function ChangePasswordModule() {
      _classCallCheck(this, ChangePasswordModule);
    });

    ChangePasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_change_password_component__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_5__["AngularSvgIconModule"].forRoot(), _share_password_template_password_template_module__WEBPACK_IMPORTED_MODULE_6__["PasswordTemplateModule"]],
      exports: [_change_password_component__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordComponent"]],
      entryComponents: [_change_password_component__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordComponent"]]
    })], ChangePasswordModule);
    /***/
  },

  /***/
  "./src/app/change-password/changepassword.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/change-password/changepassword.service.ts ***!
    \***********************************************************/

  /*! exports provided: ChangePasswordService */

  /***/
  function srcAppChangePasswordChangepasswordServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordService", function () {
      return ChangePasswordService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_Config_config_resource_local__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Config/config.resource.local */
    "./src/app/Config/config.resource.local.ts");

    var ChangePasswordService = /*#__PURE__*/function () {
      function ChangePasswordService(http, _router, config) {
        _classCallCheck(this, ChangePasswordService);

        this.http = http;
        this._router = _router;
        this.config = config;
        this.title = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.sidenavExpand = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.config_data = config.getSetting();
      }

      _createClass(ChangePasswordService, [{
        key: "changePassword",
        value: function changePassword(data) {
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["change-password"], data);
        }
      }]);

      return ChangePasswordService;
    }();

    ChangePasswordService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_Config_config_resource_local__WEBPACK_IMPORTED_MODULE_5__["ConfigResourceService"]
      }];
    };

    ChangePasswordService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ChangePasswordService);
    /***/
  },

  /***/
  "./src/app/create-ticket-guard.service.ts":
  /*!************************************************!*\
    !*** ./src/app/create-ticket-guard.service.ts ***!
    \************************************************/

  /*! exports provided: CreateTicketGuardService */

  /***/
  function srcAppCreateTicketGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateTicketGuardService", function () {
      return CreateTicketGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./helper.service */
    "./src/app/helper.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);

    var CreateTicketGuardService = /*#__PURE__*/function () {
      function CreateTicketGuardService(router, auth) {
        _classCallCheck(this, CreateTicketGuardService);

        this.router = router;
        this.auth = auth;
      }

      _createClass(CreateTicketGuardService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (localStorage.getItem("access_token") && new Date().getTime() < moment__WEBPACK_IMPORTED_MODULE_4__(localStorage.getItem("expires_at"), 'YYYY-MM-DD hh:mm:ss a').valueOf()) {
            var privilege = route.data["privilege"];

            if (this.auth.authCreateticketModule(privilege.isprivillage, privilege.privillage, privilege.actions)) {
              return true;
            }
          }

          debugger;
          var hrefurl = state.url;

          if (hrefurl.includes("/search") && hrefurl.includes("?ticketId=")) {
            var ticketId = hrefurl && hrefurl.split('?')[1] && hrefurl.split('?')[1].split('=')[1] ? hrefurl.split('?')[1].split('=')[1] : null;
            sessionStorage.setItem("searchTicketId", ticketId || "");
          } else {
            sessionStorage.setItem("searchTicketId", "");
          }

          this.auth.logout();
          return false;
        }
      }, {
        key: "handleRouting",
        value: function handleRouting() {}
      }]);

      return CreateTicketGuardService;
    }();

    CreateTicketGuardService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]
      }];
    };

    CreateTicketGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CreateTicketGuardService);
    /***/
  },

  /***/
  "./src/app/error.service.ts":
  /*!**********************************!*\
    !*** ./src/app/error.service.ts ***!
    \**********************************/

  /*! exports provided: ErrorService */

  /***/
  function srcAppErrorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorService", function () {
      return ErrorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _bs_modal_bs_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bs-modal/bs-modal.component */
    "./src/app/bs-modal/bs-modal.component.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");

    var ErrorService = /*#__PURE__*/function () {
      function ErrorService(injector) {
        _classCallCheck(this, ErrorService);

        this.injector = injector;
      }

      _createClass(ErrorService, [{
        key: "handleError",
        value: function handleError(error) {
          var modalService = this.injector.get(ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]);

          if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"] && error.status != 401 && error.error && error.error.message) {
            modalService.show(_bs_modal_bs_modal_component__WEBPACK_IMPORTED_MODULE_3__["BsModalComponent"], {
              initialState: {
                list: error.error.message
              }
            });
          }
        }
      }]);

      return ErrorService;
    }();

    ErrorService.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }];
    };

    ErrorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ErrorService);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html"))["default"]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../helper.service */
    "./src/app/helper.service.ts");
    /* harmony import */


    var _header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./header.service */
    "./src/app/header/header.service.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/change-password/change-password.component */
    "./src/app/change-password/change-password.component.ts");
    /* harmony import */


    var _ticket_queue_ticket_queue_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../ticket-queue/ticket-queue.service */
    "./src/app/ticket-queue/ticket-queue.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _state_kafka_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../state/kafka.actions */
    "./src/app/state/kafka.actions.ts");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _app_config_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../app-config.service */
    "./src/app/app-config.service.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _Config_config_resource_local__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../Config/config.resource.local */
    "./src/app/Config/config.resource.local.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(_router, headerservice, helperServie, ticketQueueService, modalService, formBuilder, store, casConfig, http, cdr, _config, mediaMatcher) {
        _classCallCheck(this, HeaderComponent);

        this._router = _router;
        this.headerservice = headerservice;
        this.helperServie = helperServie;
        this.ticketQueueService = ticketQueueService;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.store = store;
        this.casConfig = casConfig;
        this.http = http;
        this.cdr = cdr;
        this._config = _config;
        this.mediaMatcher = mediaMatcher;
        this.clickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.titleheader = "";
        this.moveNow = false;
        this.passwordIsValid = false;
        this.searchFields = [];
        this.ticketIdArray = [];
        this.offsetValue = 0;
        this.limit = 10;
        this.isProfile = false;
        this.sum = 100;
        this.casConfigurl = casConfig.getConfig();
        this.config = _config.getSetting();
        this.media_mobile = this.mediaMatcher.matchMedia("only screen and (max-width: 850px) ");
        console.log("====================");
        console.log("header comp constructor");
        console.log("===================="); // [ngClass]="[ && 'd-none']"

        if (window.location.href.includes('my-profile')) {
          this.isProfile = true;
        }
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.media_mobile = this.mediaMatcher.matchMedia("only screen and (max-width: 850px) ");
          console.log(this.config);

          if (this.config.motomo) {
            var matomoScript = "\n          <!-- Matomo -->\n            var _paq = window._paq = window._paq || [];\n            /* tracker methods like \"setCustomDimension\" should be called before \"trackPageView\" */\n            _paq.push(['setUserId', localStorage.getItem('userName') || 'No User']);\n          _paq.push(['trackPageView']);\n            _paq.push(['enableLinkTracking']);\n            (function() {\n              var u=\"//apa.growatiopex.com/\";\n              _paq.push(['setTrackerUrl', u+'matomo.php']);\n              _paq.push(['setSiteId', '21']);\n              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];\n              g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);\n            })();\n            document.getElementById(\"switch-version\").onclick = function(){\n              console.log(\"test\")\n              _paq.push(['trackEvent', 'Switch', 'Event Click', localStorage.getItem('userName') || 'No User']);\n            }\n        <!-- End Matomo Code -->\n      ";
            var elemDiv = document.createElement('script');
            elemDiv.innerHTML = matomoScript;
            document.body.appendChild(elemDiv);
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this7 = this;

          // ngAfterViewInit(): void {
          this.media_mobile = this.mediaMatcher.matchMedia("only screen and (max-width: 850px) "); // }

          this.userName = localStorage.getItem("userName");
          this.role = localStorage.getItem('role');
          this.loginTime = localStorage.getItem('loginTime');
          this.auth_type = localStorage.getItem("authtype");
          this.isEnduser = parseInt(localStorage.getItem("role_id")) == 2 ? true : false;
          this.profilePicture = localStorage.getItem('profilePicture');

          if (this.profilePicture == "" || this.profilePicture == "undefined") {
            this.profileImage = "assets/images/avatar-default.jpg";
          } else {
            this.profileImage = this.profilePicture;
          }

          this.subscription = this.headerservice.title.subscribe(function (data) {
            _this7.titleheader = data || "";
          });
          this.subscription1 = this.helperServie.getProfilePicture.subscribe(function (data) {
            if (data) {
              _this7.profileImage = data;
            }
          });
          this.ticketQueueService.setsearch(null);
          this.transform(this.loginTime);
          this.subscription2 = this.helperServie.getinitSearch.subscribe(function (item) {
            if (item || localStorage.getItem("access_token")) {
              _this7.getsearchList();
            }
          });
          this.disableLogo = this.helperServie.getsidenav;
          console.log(this.helperServie.getsidenav);
          this.cdr.detectChanges();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
          this.subscription1.unsubscribe();
          this.subscription2.unsubscribe();
          this.isProfile = false;
        }
      }, {
        key: "setImage",
        value: function setImage() {}
      }, {
        key: "emitClick",
        value: function emitClick(e) {
          this.clickEvent.emit(e);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.store.dispatch(new _state_kafka_actions__WEBPACK_IMPORTED_MODULE_10__["Logout"]());
        }
      }, {
        key: "expand",
        value: function expand(e) {
          this.headerservice.setSidenavExpand(e.target.checked);
        }
      }, {
        key: "openModal",
        value: function openModal() {
          // this.modalRef = this.modalService.show(template,{ class: 'modal-dialog-centered'});
          this.modalService.show(src_app_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordComponent"], {
            "class": 'modal-sm change-password-modal modal-dialog-centered',
            initialState: {
              list: localStorage.getItem("user_id")
            }
          });
        }
      }, {
        key: "transform",
        value: function transform(items) {
          /* TimeZone converter based on the client timezone */
          var customTimeZone = localStorage.getItem("customTimeZone");

          if (!items) {
            this.clienttime = "-";
            this.clientdate = "-";
          } else {
            var moment = __webpack_require__(
            /*! moment-timezone */
            "./node_modules/moment-timezone/index.js");

            var date = items;
            this.clienttime = moment.utc(date).tz(customTimeZone).format('LT');
            this.clientdate = moment.utc(date).tz(customTimeZone).format('ll');
          }
        }
      }, {
        key: "getsearchList",
        value: function getsearchList() {
          var _this8 = this;

          this.headerservice.getSearchFields().subscribe(function (response) {
            if (response["success"]) {
              _this8.searchFields = response["data"].filter(function (item) {
                return item.searchType == "Global";
              });
              _this8.optionValue = _this8.searchFields.find(function (id) {
                return id.globalSearchId == 10;
              }).searchField;
              _this8.searchOption = _this8.searchFields.find(function (id) {
                return id.globalSearchId == 10;
              });
            }

            ;
          });
        }
      }, {
        key: "selectOption",
        value: function selectOption(event) {
          this.searchOption = event;
          this.optionValue = event.searchField;
        }
      }, {
        key: "onFocus",
        value: function onFocus() {
          this.isFocus = true;
        }
      }, {
        key: "onFocusOut",
        value: function onFocusOut() {
          var _this9 = this;

          clearTimeout(this.timer);
          this.timer = setTimeout(function () {
            _this9.isFocus = false;
          }, 200);
        }
      }, {
        key: "search",
        value: function search(event) {
          console.log(this.searchOption);
          this.ticketIdArray = [];
          this.offsetValue = 0;
          this.currentPage = 1;
          this.searchedText = event.target.value;
          this.globalSearchList(event.target.value, this.offsetValue);
        }
      }, {
        key: "globalSearchList",
        value: function globalSearchList(searchText, fromIndex) {
          var _this10 = this;

          clearTimeout(this.timer);
          this.timer = setTimeout(function () {
            var data = {
              "value": searchText,
              "field": _this10.searchOption.searchField,
              "query": _this10.searchOption.query,
              "paginationFiltersPojo": {
                "offset": fromIndex,
                "limit": _this10.limit
              },
              "queryForPagination": _this10.searchOption.queryForPagination
            };
            _this10.searchSpinner = true;

            _this10.headerservice.getSearchData(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              _this10.searchSpinner = false;
            })).subscribe(function (response) {
              if (response["success"]) {
                var _this10$ticketIdArray;

                (_this10$ticketIdArray = _this10.ticketIdArray).push.apply(_this10$ticketIdArray, _toConsumableArray(response["data"]));

                _this10.totalRecord = response['filterObj']['totalRecords'];
                _this10.totalPage = Math.ceil(_this10.totalRecord / _this10.limit);
                console.log(_this10.totalPage);
              }
            });
          }, 400);
        }
      }, {
        key: "searchItem",
        value: function searchItem(event) {
          this.ticketQueueService.setsearch(event);

          this._router.navigateByUrl('/search');
        }
      }, {
        key: "onScrollDown",
        value: function onScrollDown() {
          if (this.currentPage < this.totalPage) {
            this.currentPage = this.currentPage + 1;
            this.offsetValue = this.offsetValue + 10;
            console.log('scrolled down!!', this.currentPage, this.totalPage);
            this.globalSearchList(this.searchedText, this.offsetValue);
          }
        }
      }, {
        key: "onScrollUp",
        value: function onScrollUp() {
          console.log('scrolled up!!');
        }
      }, {
        key: "redirectTo",
        value: function redirectTo(path) {
          if (path) {
            this._router.navigateByUrl(path);
          }
        }
      }, {
        key: "shiftVersions",
        value: function shiftVersions() {
          window.location.replace(this.config.V3Version);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _header_service__WEBPACK_IMPORTED_MODULE_4__["HeaderService"]
      }, {
        type: _helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]
      }, {
        type: _ticket_queue_ticket_queue_service__WEBPACK_IMPORTED_MODULE_8__["TicketQueueService"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_11__["Store"]
      }, {
        type: _app_config_service__WEBPACK_IMPORTED_MODULE_12__["AppConfigService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _Config_config_resource_local__WEBPACK_IMPORTED_MODULE_15__["ConfigResourceService"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__["MediaMatcher"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], HeaderComponent.prototype, "clickEvent", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/header/header.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/header/header.module.ts ***!
    \*****************************************/

  /*! exports provided: HeaderModule */

  /***/
  function srcAppHeaderHeaderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderModule", function () {
      return HeaderModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var angular_svg_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-svg-icon */
    "./node_modules/angular-svg-icon/fesm2015/angular-svg-icon.js");
    /* harmony import */


    var _change_password_change_password_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../change-password/change-password.module */
    "./src/app/change-password/change-password.module.ts");
    /* harmony import */


    var angular2_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angular2-infinite-scroll */
    "./node_modules/angular2-infinite-scroll/angular2-infinite-scroll.js");
    /* harmony import */


    var angular2_infinite_scroll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__);

    var HeaderModule = /*#__PURE__*/_createClass(function HeaderModule() {
      _classCallCheck(this, HeaderModule);
    });

    HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_5__["AngularSvgIconModule"].forRoot(), _change_password_change_password_module__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordModule"], angular2_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__["InfiniteScrollModule"]],
      exports: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]]
    })], HeaderModule);
    /***/
  },

  /***/
  "./src/app/header/header.service.ts":
  /*!******************************************!*\
    !*** ./src/app/header/header.service.ts ***!
    \******************************************/

  /*! exports provided: HeaderService */

  /***/
  function srcAppHeaderHeaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderService", function () {
      return HeaderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_Config_config_resource_local__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Config/config.resource.local */
    "./src/app/Config/config.resource.local.ts");

    var HeaderService = /*#__PURE__*/function () {
      function HeaderService(http, _router, config) {
        _classCallCheck(this, HeaderService);

        this.http = http;
        this._router = _router;
        this.config = config;
        this.title = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.sidenavExpand = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.hamburgerActive = false;
        this.config_data = config.getSetting();
      }

      _createClass(HeaderService, [{
        key: "setTitle",
        value: function setTitle(title) {
          this.title.next(title);
        }
      }, {
        key: "setSidenavExpand",
        value: function setSidenavExpand(value) {
          this.sidenavExpand.next(value);
        }
      }, {
        key: "getSearchFields",
        value: function getSearchFields() {
          return this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["get_search_fields"]);
        }
      }, {
        key: "getSearchData",
        value: function getSearchData(data) {
          var params = {
            "name": data.field,
            "value": data.value,
            "query": data.query,
            "searchType": data.searchType,
            "paginationFiltersPojo": data.paginationFiltersPojo,
            "queryForPagination": data.queryForPagination
          };
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["get_tickets_with_filters"], params);
        }
      }]);

      return HeaderService;
    }();

    HeaderService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_Config_config_resource_local__WEBPACK_IMPORTED_MODULE_5__["ConfigResourceService"]
      }];
    };

    HeaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HeaderService);
    /***/
  },

  /***/
  "./src/app/helper.service.ts":
  /*!***********************************!*\
    !*** ./src/app/helper.service.ts ***!
    \***********************************/

  /*! exports provided: HelperService */

  /***/
  function srcAppHelperServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelperService", function () {
      return HelperService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _Config_config_resource_local__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Config/config.resource.local */
    "./src/app/Config/config.resource.local.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _ngxs_websocket_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngxs/websocket-plugin */
    "./node_modules/@ngxs/websocket-plugin/fesm2015/ngxs-websocket-plugin.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-config.service */
    "./src/app/app-config.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);

    var HelperService = /*#__PURE__*/function () {
      function HelperService(_router, config, store, http, casConfig) {
        _classCallCheck(this, HelperService);

        this._router = _router;
        this.config = config;
        this.store = store;
        this.http = http;
        this.casConfig = casConfig;
        this.isvalidUser = false;
        this.expandSidenav = false;
        this.extendSession = false;
        this.profilePicture = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.routingPath = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.initSearch = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.ticketqueuetimer = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.isMobile_ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](localStorage.getItem('isAppAuth') === 'true' ? true : false);
        this.config_data = config.getSetting();
        this.casConfig_data = casConfig.getConfig();
      }

      _createClass(HelperService, [{
        key: "isMobile",
        get: function get() {
          return this.isMobile_.value;
        }
      }, {
        key: "link_check",
        value: function link_check(navigate_page_link) {
          if (localStorage.getItem("access_token")) {
            this._router.navigate([navigate_page_link]);
          } else {
            this._router.navigate(['login']);
          }
        }
      }, {
        key: "setsidenav",
        set: function set(value) {
          this.expandSidenav = value;
        }
      }, {
        key: "getsidenav",
        get: function get() {
          return this.expandSidenav;
        }
      }, {
        key: "sessionValid",
        get: function get() {
          return this.extendSession;
        },
        set: function set(value) {
          this.extendSession = value;
        }
      }, {
        key: "setProfilePicture",
        set: function set(base64) {
          localStorage.setItem('profilePicture', base64);
          var userData = JSON.parse(localStorage.getItem('userData'));
          userData.profilePicture = base64;
          ;
          localStorage.setItem('userData', JSON.stringify(userData));
          this.profilePicture.next(base64);
        }
      }, {
        key: "getProfilePicture",
        get: function get() {
          return this.profilePicture.asObservable();
        }
      }, {
        key: "setroutingPath",
        set: function set(base64) {
          this.routingPath.next(base64);
        }
      }, {
        key: "getroutingPath",
        get: function get() {
          return this.routingPath.asObservable();
        }
      }, {
        key: "getinitSearch",
        get: function get() {
          return this.initSearch.asObservable();
        }
      }, {
        key: "authModule",
        value: function authModule(isprivillage, privillage, actions) {
          if (JSON.parse(localStorage.getItem('role_id')) == 1) {
            return true;
          }

          this.accessPrivillage = JSON.parse(localStorage.getItem('accessPrivillage'));

          if (!isprivillage || !(this.accessPrivillage != null && this.accessPrivillage[isprivillage])) {
            return false;
          }

          var result = false;

          if (this.accessPrivillage[isprivillage]) {
            result = true;

            if (this.accessPrivillage[privillage]) {
              var _iterator = _createForOfIteratorHelper(actions),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var action = _step.value;

                  if (this.accessPrivillage[privillage][action]) {
                    result = true;
                    break;
                  } else {
                    result = false;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }

          return result;
        }
      }, {
        key: "authCreateticketModule",
        value: function authCreateticketModule(isprivillage, privillage, actions) {
          var result = false;

          if (this.authModule(isprivillage, privillage, actions)) {
            return true;
          } else if (this.accessPrivillage != null && this.accessPrivillage["departmentCollaborationPrivileges"]) {
            if (actions) {
              var _iterator2 = _createForOfIteratorHelper(actions),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var action = _step2.value;

                  if (this.accessPrivillage["departmentCollaborationPrivileges"][action]) {
                    result = true;
                    break;
                  } else {
                    result = false;
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          }

          return result;
        }
      }, {
        key: "connectKafka",
        value: function connectKafka() {
          var _this11 = this;

          if (localStorage.getItem("access_token")) {
            if (!this.config_data) {
              this.config_data = this.config.getSetting();
            }

            var event = new _ngxs_websocket_plugin__WEBPACK_IMPORTED_MODULE_6__["ConnectWebSocket"]({
              url: this.config_data["kafka_domain"]
            });
            this.store.dispatch(event).subscribe(function (resp) {
              _this11.sendKafkamessage({
                userId: +localStorage.getItem("user_id"),
                clientId: _this11.config_data["clientId"]
              });
            });
          }
        }
      }, {
        key: "sendKafkamessage",
        value: function sendKafkamessage(message) {
          var event = new _ngxs_websocket_plugin__WEBPACK_IMPORTED_MODULE_6__["SendWebSocketMessage"](message);
          this.store.dispatch(event);
        }
      }, {
        key: "disConnectKafka",
        value: function disConnectKafka() {
          console.log("disconnect");
          this.store.dispatch(new _ngxs_websocket_plugin__WEBPACK_IMPORTED_MODULE_6__["DisconnectWebSocket"]());
        }
      }, {
        key: "ticketqueuetimerstop",
        get: function get() {
          return this.ticketqueuetimer.asObservable();
        }
      }, {
        key: "setticketqueuetimerstop",
        set: function set(data) {
          this.ticketqueuetimer.next(data);
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this12 = this;

          if (!this.config_data) {
            this.config_data = this.config.getSetting();
          }

          if (!this.casConfig_data) {
            this.casConfig_data = this.casConfig.getConfig();
          }

          if (localStorage.getItem("access_token")) {
            if (this.casConfig_data && this.casConfig_data["authenticationType"]) {
              localStorage.clear();

              switch (this.casConfig_data["authenticationType"]) {
                case "GSUITESAML2":
                  if (this.casConfig_data["GSuiteDetails"]["GSuite_url"]) {
                    window.location.href = this.casConfig_data["GSuiteDetails"]["GSuite_url"];
                  }

                  break;

                case "cas":
                  if (this.casConfig_data && this.casConfig_data["casDetails"]["app_url"] && this.casConfig_data["casDetails"]["cas_url"]) {
                    window.location.href = this.casConfig_data["casDetails"]["cas_url"] + "?service=" + this.casConfig_data["casDetails"]["app_url"];
                  }

                  break;
              }
            } else {
              this.ticketqueuetimer.next(true);

              if (localStorage.getItem("invalidToken") == "true" || localStorage.getItem("expires_at") && new Date().getTime() > moment__WEBPACK_IMPORTED_MODULE_10__(localStorage.getItem("expires_at"), 'YYYY-MM-DD hh:mm:ss a').valueOf()) {
                this.clearlocalStorageOnLOgout();
              } else {
                this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["user_logout"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (rep) {
                  _this12.clearlocalStorageOnLOgout();
                })).subscribe();
              }
            }
          } else {
            this.clearlocalStorageOnLOgout();
          }
        }
      }, {
        key: "clearlocalStorageOnLOgout",
        value: function clearlocalStorageOnLOgout() {
          this._router.navigateByUrl('/login');

          localStorage.clear();
          this.disConnectKafka();
        }
      }, {
        key: "getOnlineUser",
        value: function getOnlineUser() {
          this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["test_kafka_consumer"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (rep) {})).subscribe();
        }
      }, {
        key: "renewSession",
        value: function renewSession() {
          var _this13 = this;

          var body = {
            "clientId": this.config_data["clientId"],
            "refresh_token": localStorage.getItem("refresh_token")
          };
          this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["refreshToken"], body).subscribe(function (response) {
            var data = response['data'];
            localStorage.setItem("refresh_token", data["refresh_token"]);
            var date = new Date();
            var expiresAt = moment__WEBPACK_IMPORTED_MODULE_10__(date).add(data["expires_in"], 'seconds').format('YYYY-MM-DD hh:mm:ss a');
            localStorage.setItem("expires_at", expiresAt);
            var delayTime = moment__WEBPACK_IMPORTED_MODULE_10__(expiresAt).subtract(600, "seconds").format('YYYY-MM-DD hh:mm:ss a');
            localStorage.setItem("delay_time", delayTime);
            _this13.sessionValid = false;
          });
        }
      }, {
        key: "mandatoryFields",
        get: function get() {
          var accessData = JSON.parse(localStorage.getItem("userData") || "[]");
          var userFields = JSON.parse(localStorage.getItem("userFields") || "[]");
          return accessData ? userFields.filter(function (item) {
            return item.mandatory && !accessData[item.displayName];
          }) : null;
        }
      }, {
        key: "setDefaultRout",
        value: function setDefaultRout() {
          var tempSetroutingPath = null;
          var mandatoryUserFields = this.mandatoryFields;

          if (mandatoryUserFields && mandatoryUserFields.length > 0) {
            tempSetroutingPath = 'my-profile';
            this.setsidenav = false;
          } else {
            if (this.authModule('isDashBoardReq', '', [])) {
              tempSetroutingPath = 'dashboard';
            } else if (JSON.parse(localStorage.getItem('role_id')) == 2) {
              tempSetroutingPath = 'create-tickets';
            } else if (this.authCreateticketModule('isTicketPrivilegesReq', 'ticketPrivileges', ['Approval All', 'Modify', 'Approval'])) {
              tempSetroutingPath = 'tickets-queue';
            } else if (this.authModule('isKnowledgeBaseReq', '', [])) {
              tempSetroutingPath = 'kb';
            } else if (this.authModule('isSystemPrivilegesReq', '', [])) {
              tempSetroutingPath = 'system-setting';
            } else if (this.authModule('isTicketReportReq', '', [])) {
              tempSetroutingPath = 'report';
            } else if (this.authModule('isAnalysisReq', '', [])) {
              tempSetroutingPath = 'analysis';
            }
          }

          this.setroutingPath = tempSetroutingPath;
          localStorage.setItem("defultRouterPath", tempSetroutingPath);
        }
      }]);

      return HelperService;
    }();

    HelperService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _Config_config_resource_local__WEBPACK_IMPORTED_MODULE_3__["ConfigResourceService"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
      }, {
        type: _app_config_service__WEBPACK_IMPORTED_MODULE_9__["AppConfigService"]
      }];
    };

    HelperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], HelperService);
    /***/
  },

  /***/
  "./src/app/httpconfig.interceptor.ts":
  /*!*******************************************!*\
    !*** ./src/app/httpconfig.interceptor.ts ***!
    \*******************************************/

  /*! exports provided: HttpConfigInterceptor */

  /***/
  function srcAppHttpconfigInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpConfigInterceptor", function () {
      return HttpConfigInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"); // import { SpinnerService } from './spinner/spinner.service';


    var setToken;
    var setTokenurl;

    var HttpConfigInterceptor = /*#__PURE__*/function () {
      function HttpConfigInterceptor(injector) {
        _classCallCheck(this, HttpConfigInterceptor);

        this.injector = injector;
        this.totalRequests = 0;
      }

      _createClass(HttpConfigInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this14 = this;

          this.totalRequests++; // document.querySelector('body').classList.add('waiting');

          document.body.classList.add('waiting'); // this.spinnerService.setSpinner = true;

          if (localStorage.getItem('refershtokenStat')) {
            setToken = localStorage.getItem("refresh_token");
            setTokenurl = '/token/getrefreshtoken';
          } else {
            setToken = localStorage.getItem("access_token");
            setTokenurl = '/token/getaccesstoken';
          }

          if (req.url.includes(setTokenurl)) {
            return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
              return document.body.classList.remove('waiting');
            }));
          }

          if (req.url.includes("http://10.20.253.52:8088/api/analysis") || req.url.includes("/token/get-oauth-token-by-cas-or-saml-token")) {
            return next.handle(req);
          }

          if (req.url.includes("http://10.20.253.59:8084/analysis")) {
            return next.handle(req);
          }

          if (req.url.includes("https://nlp.iopex.com/shared_analysis/view/")) {
            return next.handle(req);
          }

          req = req.clone({
            setHeaders: {
              //Authorization: 'Bearer ' + localStorage.getItem("access_token")
              Authorization: 'Bearer ' + setToken
            }
          });
          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
              _this14.decreaseRequests();
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error, caught) {
            //intercept the respons error and displace it to the console
            _this14.handleAuthError(error);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            return document.body.classList.remove('waiting');
          }));
        } //Manage Error's

      }, {
        key: "handleAuthError",
        value: function handleAuthError(err) {
          //handle your auth error or rethrow
          if (err.status === 401 && err.error.message == "Invalid Access Token") {
            // this.helper.sessionValid = false;
            localStorage.setItem("invalidToken", "true");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(err.message);
          }

          throw err;
        }
      }, {
        key: "decreaseRequests",
        value: function decreaseRequests() {
          this.totalRequests--;

          if (this.totalRequests === 0) {// this.spinnerService.setSpinner = false;
          }
        }
      }]);

      return HttpConfigInterceptor;
    }();
    /***/

  },

  /***/
  "./src/app/login/login-auth.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/login/login-auth.service.ts ***!
    \*********************************************/

  /*! exports provided: LoginAuthService */

  /***/
  function srcAppLoginLoginAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginAuthService", function () {
      return LoginAuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _Config_config_resource_local__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Config/config.resource.local */
    "./src/app/Config/config.resource.local.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _app_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../app-config.service */
    "./src/app/app-config.service.ts");

    var LoginAuthService = /*#__PURE__*/function () {
      function LoginAuthService(http, config, casConfig) {
        _classCallCheck(this, LoginAuthService);

        this.http = http;
        this.config = config;
        this.casConfig = casConfig;
        this.viaGBtn = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](true);
        this.appAuth = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.casConfig_data = casConfig.getConfig();
        this.config_data = config.getSetting();
      }

      _createClass(LoginAuthService, [{
        key: "get_access_token",
        value: function get_access_token(username, password) {
          var authdata = {
            userName: username,
            password: password,
            clientId: this.config_data["clientId"]
          };
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["token"], authdata);
        }
      }, {
        key: "get_cas_access_token",
        value: function get_cas_access_token(ticketid) {
          var authdata = {};
          var viaGBtn = localStorage.getItem('viaGBtn');
          console.log(viaGBtn, 'viaGBtn');
          console.log(viaGBtn == 'true', "check");

          if (ticketid.hasOwnProperty('authType')) {
            this.appAuth.next(true);
            authdata = {
              authType: ticketid.authType,
              userName: ticketid.username,
              clientSecret: this.casConfig_data["clientSecret"],
              clientId: this.config_data["clientId"]
            };
          } else {
            switch (this.casConfig_data["authenticationType"]) {
              case "GSUITESAML2":
                authdata = {
                  "samlToken": ticketid,
                  authType: this.casConfig_data["authenticationType"],
                  "clientSecret": this.casConfig_data["clientSecret"],
                  "clientId": this.config_data["clientId"]
                };
                break;

              case "CAS":
                authdata = {
                  "casTicketId": ticketid,
                  "casServiceurl": this.casConfig_data["casDetails"]["app_url"],
                  "clientId": this.config_data["clientId"],
                  "casValidateurl": this.casConfig_data["casDetails"]["cas_url"],
                  authType: this.casConfig_data["authenticationType"],
                  "clientSecret": this.casConfig_data["clientSecret"]
                };
                break;

              default:
                if (sessionStorage.getItem('SAMLResponse') != '' || sessionStorage.getItem('SAMLResponse') != null) {
                  this.viaGBtn.next(false);
                  authdata = {
                    "samlToken": ticketid,
                    "authType": 'GSUITESAML2',
                    "clientSecret": this.casConfig_data["clientSecret"],
                    "clientId": this.config_data["clientId"]
                  };
                }

            }
          }

          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["access_token_by_cas_ticket"], authdata);
        }
      }, {
        key: "session_setter",
        value: function session_setter(data) {
          localStorage.setItem("expires_in", data["expires_in"]);
          localStorage.setItem("access_token", data["access_token"]);
          localStorage.setItem("refresh_token", data["refresh_token"]);
          localStorage.setItem("userName", data["userName"]);
          localStorage.setItem("user_id", data["userId"]);
          localStorage.setItem("role_id", data['roleId']);
          localStorage.setItem("role", data['role']);
          localStorage.setItem("customTimeZone", data['customTimeZone']);
          localStorage.setItem("isSystemSettingReq", data['isSystemSettingReq']);
          localStorage.setItem("userEmail", data['userEmail']);
          localStorage.setItem("loginTime", data['loginTime']);
          localStorage.setItem("profilePicture", data['profilePicture']);
          localStorage.setItem("authtype", data['authType']);
          localStorage.setItem("workLocationEnable", data["workLocationEnable"]);
          localStorage.setItem("invalidToken", "false"); // localStorage.setItem("workLocation", data["workLocation"]);
          // if (data["workLocation"]) {
          //   localStorage.setItem("workLocation", data["workLocation"]);
          // }

          if (data["userFields"]) {
            localStorage.setItem("userFields", JSON.stringify(data["userFields"])); // data["userFields"].forEach(element => {
            //   localStorage.setItem(element.displayName, data[element.displayName]);
            // });

            localStorage.setItem("userData", JSON.stringify(data));
          }
        }
      }, {
        key: "getAccessPrivillages",
        value: function getAccessPrivillages() {
          return this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["get_role_access_priviliges"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            if (response["code"] == 200) {
              return response["data"];
            }
          }));
        }
      }, {
        key: "getkafkaConsumerToken",
        value: function getkafkaConsumerToken() {
          return this.http.post("http://10.20.253.58:8083/kafka-consumer/token", {
            "clientId": "sfv2client",
            "secretKey": "Xcvf97531sf"
          });
        }
      }, {
        key: "authAppToken",
        value: function authAppToken(value) {
          console.log(value);
          return fetch(this.config_data["appMobileAuth"], {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(value.accesss_token)
            }
          }).then(function (response) {
            return response.json();
          }).then(function (data) {
            console.log(data);

            if (data.hasOwnProperty('success') && data['success'] == true && data['message'].toLowerCase().includes('valid')) {
              return true;
            } else {
              return false;
            }
          }); // return this.http.post(this.config_data["appMobileAuth"], {headers: headers_}).pipe(map(respnse => {
          //   if(respnse.hasOwnProperty('success') && respnse['success'] == true && respnse['message'].toLowerCase().includes('valid')){
          //     return true
          //   }else{
          //     return false
          //   }
          // }))
        }
      }]);

      return LoginAuthService;
    }();

    LoginAuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _Config_config_resource_local__WEBPACK_IMPORTED_MODULE_3__["ConfigResourceService"]
      }, {
        type: _app_config_service__WEBPACK_IMPORTED_MODULE_6__["AppConfigService"]
      }];
    };

    LoginAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginAuthService);
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent, TrackCapsDirective */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrackCapsDirective", function () {
      return TrackCapsDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../helper.service */
    "./src/app/helper.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _login_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login-auth.service */
    "./src/app/login/login-auth.service.ts");
    /* harmony import */


    var _spinner_spinner_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../spinner/spinner.service */
    "./src/app/spinner/spinner.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _ngxs_websocket_plugin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngxs/websocket-plugin */
    "./node_modules/@ngxs/websocket-plugin/fesm2015/ngxs-websocket-plugin.js");
    /* harmony import */


    var _app_config_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../app-config.service */
    "./src/app/app-config.service.ts");
    /* harmony import */


    var _Config_config_resource_local__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../Config/config.resource.local */
    "./src/app/Config/config.resource.local.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(_router, spinnerService, authService, formBuilder, http, helper, store, casConfig, _config, activatedRoute) {
        var _this15 = this;

        _classCallCheck(this, LoginComponent);

        this._router = _router;
        this.spinnerService = spinnerService;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.helper = helper;
        this.store = store;
        this.casConfig = casConfig;
        this._config = _config;
        this.activatedRoute = activatedRoute;
        this.location = '';
        this.isEmptyFields = false;
        this.isvalidUser = false;
        this.submitted = false;
        this.isButtonClicked = false;
        this.spinner = false;
        this.EmptyField = false;
        this.inValidUser = false;
        this.disabled = false;
        this.expired_token = false;
        this.isGoogleBtn = false;
        this.isAssuredBtn = false;
        this.casConfigurl = casConfig.getConfig();
        this.config = _config.getSetting();
        this.ticketid = sessionStorage.getItem("ticketId");
        var SAMLResponse = sessionStorage.getItem("SAMLResponse"); // localStorage.removeItem('viaGBtn')

        var hrefurl = window.location.href;

        if (this.config.saml_path) {
          this.isGoogleBtn = true;
        } else {
          this.isGoogleBtn = false;
        }

        if (this.config.assurd_saml_path) {
          this.isAssuredBtn = true;
        } else {
          this.isAssuredBtn = false;
        }

        if (sessionStorage.getItem('IsAppAuth')) {
          console.log(sessionStorage.getItem('appCred'));
          var AUTHTYPE = 'MOBILE_APP'; // localStorage.setItem("IsAppAuth", "true");

          this.authService.appAuth.next(true);
          this.activatedRoute.queryParams.subscribe(function (res) {
            console.log(res);
          });
          var appLoginCred = JSON.parse(decodeURIComponent(atob(sessionStorage.getItem('appCred'))));
          console.log(appLoginCred);

          if (appLoginCred) {
            this.authService.authAppToken(appLoginCred).then(function (data) {
              console.log(data);

              if (data) {
                _this15.getMobileAuthentication(appLoginCred.email, AUTHTYPE);
              } else {
                _this15.expired_token = true;
              }
            }); // if(this.authService.authAppToken(appLoginCred).then()){
            //   // if(valid){
            //     this.getMobileAuthentication(appLoginCred.email, AUTHTYPE);
            //   // }
            // }
          }
        }

        if (this.ticketid) {
          this.getCasAuthentication(this.ticketid);
        }

        if (SAMLResponse) {
          this.authService.viaGBtn.next(false);
          console.log(SAMLResponse, "SAMLResponse");
          this.getCasAuthentication(SAMLResponse);
        }

        this.location = _router.url;

        if (localStorage.getItem("access_token") && new Date().getTime() < moment__WEBPACK_IMPORTED_MODULE_8__(localStorage.getItem("expires_at"), 'YYYY-MM-DD hh:mm:ss a').valueOf()) {
          _router.navigateByUrl("");
        }
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.LoginForm = this.formBuilder.group({
            userId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
          this.helper.setsidenav = true;
        }
      }, {
        key: "getViaGBtn",
        get: function get() {
          return this.authService.viaGBtn.value;
        }
      }, {
        key: "isAppAuth",
        get: function get() {
          return sessionStorage.getItem('IsAppAuth');
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this16 = this;

          setTimeout(function () {
            _this16.authService.viaGBtn.next(true);

            _this16.authService.appAuth.next(false);

            _this16.expired_token = false;
          }, 50);
        }
      }, {
        key: "getCasAuthentication",
        value: function getCasAuthentication(ticketid) {
          var _this17 = this;

          this.authService.get_cas_access_token(ticketid).subscribe(function (resp) {
            console.log(resp);
            localStorage.setItem("IscasAuth", "true");

            _this17.handleLoginResponse(resp);
          });
        }
      }, {
        key: "getMobileAuthentication",
        value: function getMobileAuthentication(username, authType) {
          var _this18 = this;

          this.authService.get_cas_access_token({
            username: username,
            authType: authType
          }).subscribe(function (resp) {
            console.log(resp);
            localStorage.setItem("IscasAuth", "true");

            _this18.handleLoginResponse(resp);
          }).add(function () {});
        }
      }, {
        key: "viaGoogle",
        value: function viaGoogle() {
          localStorage.setItem('viaGBtn', 'true');
          window.location.href = this.config['saml_path'];
        }
      }, {
        key: "viaAssuredGoogle",
        value: function viaAssuredGoogle() {
          localStorage.setItem('viaGBtn', 'true');
          window.location.href = this.config['assurd_saml_path'];
        }
      }, {
        key: "loginClick",
        value: function loginClick() {
          var _this19 = this;

          if (this.LoginForm.valid) {
            this.spinnerService.setSpinner = true;
            this.disabled = true;
            this.EmptyField = false;
            this.spinner = true;
            this.authService.get_access_token(this.LoginForm.value.userId, this.LoginForm.value.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {// this.spinnerService.setSpinner = false;
            })).subscribe(function (data) {
              _this19.handleLoginResponse(data);
            }, function (error) {
              // this.toastr.error("Somthing Went Wrong");
              _this19.disabled = false;
            });
          } else {
            this.EmptyField = true;
            this.inValidUser = false;
          }
        }
      }, {
        key: "handleLoginResponse",
        value: function handleLoginResponse(data) {
          var _this20 = this;

          this.access_token_responce_data = data;

          if (data["success"]) {
            this.authService.session_setter(this.access_token_responce_data["data"]);
            this.authService.getAccessPrivillages().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              _this20.spinner = false;
            })).subscribe(function (resp) {
              if (resp.systemPrivileges && resp.systemPrivileges.primaryFeatureActions && resp.systemPrivileges.primaryFeatureActions.some(function (item) {
                return item.featureName == 'Report Management';
              })) {
                resp.isReportPrivilegesReq = true;
              } else {
                resp.isReportPrivilegesReq = false;
              }

              localStorage.setItem("accessPrivillage", JSON.stringify(resp));
              var date = new Date();
              var expiresAt = moment__WEBPACK_IMPORTED_MODULE_8__(date).add(data["data"]['expires_in'], 'seconds').format('YYYY-MM-DD hh:mm:ss a'); //const expiresAt = moment(date).add(localStorage.getItem("expires_in"),'seconds').format('YYYY-MM-DD hh:mm:ss a');

              localStorage.setItem("expires_at", expiresAt);
              var delayTime = moment__WEBPACK_IMPORTED_MODULE_8__(expiresAt).subtract(600, "seconds").format('YYYY-MM-DD hh:mm:ss a');
              localStorage.setItem("delay_time", delayTime);

              _this20.helper.setDefaultRout(); // this.helper.setroutingPath = 'analysis';


              _this20.helper.initSearch.next(true); // this.connectWebSocket();


              _this20.helper.connectKafka();

              var searchTicketId = sessionStorage.getItem("searchTicketId");

              if (searchTicketId) {
                var mandatoryUserFields = _this20.helper.mandatoryFields;

                if (mandatoryUserFields && mandatoryUserFields.length > 0) {
                  _this20._router.navigateByUrl("");
                } else {
                  _this20._router.navigateByUrl("/search?ticketId=".concat(searchTicketId));
                }
              } else {
                _this20._router.navigateByUrl("");
              }
            });
          } else {
            this.inValidUser = true;
            this.disabled = false;
            this.spinner = false;
          }
        }
      }, {
        key: "connectWebSocket",
        value: function connectWebSocket() {
          var _this21 = this;

          this.authService.getkafkaConsumerToken().subscribe(function (resp) {
            if (resp) {
              _this21.store.dispatch(new _ngxs_websocket_plugin__WEBPACK_IMPORTED_MODULE_11__["ConnectWebSocket"]({
                url: 'ws://10.20.253.58:8082/websocket/?token=' + resp.data.token
              }));
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _spinner_spinner_service__WEBPACK_IMPORTED_MODULE_7__["SpinnerService"]
      }, {
        type: _login_auth_service__WEBPACK_IMPORTED_MODULE_6__["LoginAuthService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_10__["Store"]
      }, {
        type: _app_config_service__WEBPACK_IMPORTED_MODULE_12__["AppConfigService"]
      }, {
        type: _Config_config_resource_local__WEBPACK_IMPORTED_MODULE_13__["ConfigResourceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"]
    })], LoginComponent);

    var TrackCapsDirective = /*#__PURE__*/function () {
      function TrackCapsDirective() {
        _classCallCheck(this, TrackCapsDirective);

        this.capsLock = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(TrackCapsDirective, [{
        key: "onKeyDown",
        value: function onKeyDown(event) {
          this.capsLock.emit(event.getModifierState && event.getModifierState('CapsLock'));
        }
      }, {
        key: "onKeyUp",
        value: function onKeyUp(event) {
          this.capsLock.emit(event.getModifierState && event.getModifierState('CapsLock'));
        }
      }]);

      return TrackCapsDirective;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('capsLock')], TrackCapsDirective.prototype, "capsLock", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown', ['$event'])], TrackCapsDirective.prototype, "onKeyDown", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keyup', ['$event'])], TrackCapsDirective.prototype, "onKeyUp", null);
    TrackCapsDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[capsLock]'
    })], TrackCapsDirective);
    /***/
  },

  /***/
  "./src/app/mandatoryfield-guard.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/mandatoryfield-guard.service.ts ***!
    \*************************************************/

  /*! exports provided: MandatoryGuardService */

  /***/
  function srcAppMandatoryfieldGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MandatoryGuardService", function () {
      return MandatoryGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./helper.service */
    "./src/app/helper.service.ts");

    var MandatoryGuardService = /*#__PURE__*/function () {
      function MandatoryGuardService(router, auth) {
        _classCallCheck(this, MandatoryGuardService);

        this.router = router;
        this.auth = auth;
      }

      _createClass(MandatoryGuardService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var errorMandatoryField = this.auth.mandatoryFields && this.auth.mandatoryFields.length > 0;

          if (errorMandatoryField) {
            return false;
          }

          return true;
        }
      }]);

      return MandatoryGuardService;
    }();

    MandatoryGuardService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]
      }];
    };

    MandatoryGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MandatoryGuardService);
    /***/
  },

  /***/
  "./src/app/role-based-preloading.ts":
  /*!******************************************!*\
    !*** ./src/app/role-based-preloading.ts ***!
    \******************************************/

  /*! exports provided: RoleBasedPreloader */

  /***/
  function srcAppRoleBasedPreloadingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleBasedPreloader", function () {
      return RoleBasedPreloader;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./helper.service */
    "./src/app/helper.service.ts");

    var RoleBasedPreloader = /*#__PURE__*/function () {
      function RoleBasedPreloader(injector) {
        _classCallCheck(this, RoleBasedPreloader);

        this.injector = injector;
        this.auth = injector.get(_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]);
      }

      _createClass(RoleBasedPreloader, [{
        key: "preload",
        value: function preload(route, load) {
          if (localStorage.getItem('access_token')) {
            var privilege = route.data && route.data['privilege'];
            var preloadCheck = route.data && route.data['preloadCheck'];

            if (preloadCheck) {
              var errorMandatoryField = this.auth.mandatoryFields && this.auth.mandatoryFields.length < 1;

              if (errorMandatoryField) {
                if (privilege) {
                  return this.auth.authCreateticketModule(privilege.isprivillage, privilege.privillage, privilege.actions) ? load() : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
                }

                return load();
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }

            return load();
          } else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
          }
        }
      }]);

      return RoleBasedPreloader;
    }();

    RoleBasedPreloader.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }];
    };

    RoleBasedPreloader = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RoleBasedPreloader);
    /***/
  },

  /***/
  "./src/app/share/button-spinner/button-spinner.directive.ts":
  /*!******************************************************************!*\
    !*** ./src/app/share/button-spinner/button-spinner.directive.ts ***!
    \******************************************************************/

  /*! exports provided: SpinnerButtonDirective */

  /***/
  function srcAppShareButtonSpinnerButtonSpinnerDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerButtonDirective", function () {
      return SpinnerButtonDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SpinnerButtonDirective = /*#__PURE__*/function () {
      function SpinnerButtonDirective(elRef, renderer) {
        _classCallCheck(this, SpinnerButtonDirective);

        this.elRef = elRef;
        this.renderer = renderer;
        this.i = this.renderer.createElement('i');
      }

      _createClass(SpinnerButtonDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.svg = this.elRef.nativeElement.querySelector("svg-icon");
          this.renderer.addClass(this.i, 'fa');
          this.renderer.addClass(this.i, 'fa-spin');
          this.renderer.insertBefore(this.elRef.nativeElement, this.i, this.elRef.nativeElement.firstChild);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(showSpinner) {
          if (showSpinner.showSpinner.currentValue) {
            this.addSpinner();
          } else {
            this.removeSpinner();
          }
        }
      }, {
        key: "addSpinner",
        value: function addSpinner() {
          this.renderer.addClass(this.i, 'fa-spinner');

          if (this.svg) {
            this.renderer.addClass(this.svg, 'd-none');
          }
        }
      }, {
        key: "removeSpinner",
        value: function removeSpinner() {
          this.renderer.removeClass(this.i, 'fa-spinner');

          if (this.svg) {
            this.renderer.removeClass(this.svg, 'd-none');
          }
        }
      }]);

      return SpinnerButtonDirective;
    }();

    SpinnerButtonDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appShowSpinner')], SpinnerButtonDirective.prototype, "showSpinner", void 0);
    SpinnerButtonDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: 'button[appShowSpinner]'
    })], SpinnerButtonDirective);
    /***/
  },

  /***/
  "./src/app/share/button-spinner/button-spinner.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/share/button-spinner/button-spinner.module.ts ***!
    \***************************************************************/

  /*! exports provided: ButtonSpinnerModule */

  /***/
  function srcAppShareButtonSpinnerButtonSpinnerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonSpinnerModule", function () {
      return ButtonSpinnerModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _button_spinner_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./button-spinner.directive */
    "./src/app/share/button-spinner/button-spinner.directive.ts");

    var ButtonSpinnerModule = /*#__PURE__*/_createClass(function ButtonSpinnerModule() {
      _classCallCheck(this, ButtonSpinnerModule);
    });

    ButtonSpinnerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_button_spinner_directive__WEBPACK_IMPORTED_MODULE_3__["SpinnerButtonDirective"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_button_spinner_directive__WEBPACK_IMPORTED_MODULE_3__["SpinnerButtonDirective"]]
    })], ButtonSpinnerModule);
    /***/
  },

  /***/
  "./src/app/share/password-template/passWordTemplate.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/share/password-template/passWordTemplate.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PasswordComponent */

  /***/
  function srcAppSharePasswordTemplatePassWordTemplateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordComponent", function () {
      return PasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var PasswordComponent = /*#__PURE__*/function () {
      function PasswordComponent() {
        _classCallCheck(this, PasswordComponent);
      }

      _createClass(PasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.form.get("newPassword")) {
            this.form.addControl("newPassword", new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
            this.form.addControl("confirmNewPassword", new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
          } else {
            this.form.patchValue({
              newPassword: "",
              confirmNewPassword: ""
            });
          }

          this.form.setValidators(this.passwordConfirming);
          this.form.updateValueAndValidity();
        }
      }, {
        key: "passwordConfirming",
        value: function passwordConfirming(c) {
          if (c.get('newPassword').value !== c.get('confirmNewPassword').value) {
            return {
              invalid: true
            };
          }

          return null;
        }
      }, {
        key: "passwordValid",
        value: function passwordValid(event) {
          this.passwordIsValid = event;
        }
      }, {
        key: "cp",
        get: function get() {
          return this.form.controls;
        }
      }]);

      return PasswordComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PasswordComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PasswordComponent.prototype, "submitted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PasswordComponent.prototype, "isnewpassword", void 0);
    PasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-password-template",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./passWordTemplate.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/share/password-template/passWordTemplate.component.html"))["default"]
    })], PasswordComponent);
    /***/
  },

  /***/
  "./src/app/share/password-template/password-strength/password-strength.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/share/password-template/password-strength/password-strength.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharePasswordTemplatePasswordStrengthPasswordStrengthComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".strengthBar {\n  display: inline;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  vertical-align: 2px;\n}\n\n.point:last-of-type {\n  margin: 0 !important;\n}\n\n.point {\n  background: #DDD;\n  border-radius: 2px;\n  display: inline-block;\n  height: 5px;\n  margin-right: 1px;\n  width: 62px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvaGl0aHZlbmthdGVzaC9Sb2hpdGgvZ2l0L3NmLXYyL21haW4vVUktTkVXL3NyYy9hcHAvc2hhcmUvcGFzc3dvcmQtdGVtcGxhdGUvcGFzc3dvcmQtc3RyZW5ndGgvcGFzc3dvcmQtc3RyZW5ndGguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlL3Bhc3N3b3JkLXRlbXBsYXRlL3Bhc3N3b3JkLXN0cmVuZ3RoL3Bhc3N3b3JkLXN0cmVuZ3RoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlL3Bhc3N3b3JkLXRlbXBsYXRlL3Bhc3N3b3JkLXN0cmVuZ3RoL3Bhc3N3b3JkLXN0cmVuZ3RoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0cmVuZ3RoQmFyIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHZlcnRpY2FsLWFsaWduOiAycHg7XG59XG5cbi5wb2ludDpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLnBvaW50IHtcbiAgYmFja2dyb3VuZDogI0RERDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDFweDtcbiAgd2lkdGg6IDYycHg7XG59XG4iLCIuc3RyZW5ndGhCYXIge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgdmVydGljYWwtYWxpZ246IDJweDtcbn1cblxuLnBvaW50Omxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4ucG9pbnQge1xuICBiYWNrZ3JvdW5kOiAjREREO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMXB4O1xuICB3aWR0aDogNjJweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/share/password-template/password-strength/password-strength.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/share/password-template/password-strength/password-strength.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: PasswordStrengthComponent */

  /***/
  function srcAppSharePasswordTemplatePasswordStrengthPasswordStrengthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordStrengthComponent", function () {
      return PasswordStrengthComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PasswordStrengthComponent_1;

    var PasswordStrengthComponent = PasswordStrengthComponent_1 = /*#__PURE__*/function () {
      function PasswordStrengthComponent() {
        _classCallCheck(this, PasswordStrengthComponent);

        this.passwordStrength = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.msg = '';
        this.colors = ['darkred', 'orangered', 'orange', 'yellowgreen'];
      }

      _createClass(PasswordStrengthComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var password = changes.passwordToCheck.currentValue;
          this.setBarColors(4, '#DDD');

          if (password) {
            var c = this.getColor(PasswordStrengthComponent_1.checkStrength(password));
            this.setBarColors(c.idx, c.col);
            var pwdStrength = PasswordStrengthComponent_1.checkStrength(password);
            pwdStrength === 40 ? this.passwordStrength.emit(true) : this.passwordStrength.emit(false);

            switch (c.idx) {
              case 1:
                this.msg = 'Poor';
                break;

              case 2:
                this.msg = 'Not Good';
                break;

              case 3:
                this.msg = 'Average';
                break;

              case 4:
                this.msg = 'Good';
                break;
            }
          } else {
            this.msg = '';
          }
        }
      }, {
        key: "getColor",
        value: function getColor(s) {
          var idx = 0;

          if (s <= 10) {
            idx = 0;
          } else if (s <= 20) {
            idx = 1;
          } else if (s <= 30) {
            idx = 2;
          } else if (s <= 40) {
            idx = 3;
          } else {
            idx = 4;
          }

          return {
            idx: idx + 1,
            col: this.colors[idx]
          };
        }
      }, {
        key: "setBarColors",
        value: function setBarColors(count, col) {
          for (var n = 0; n < count; n++) {
            this['bar' + n] = col;
          }
        }
      }], [{
        key: "checkStrength",
        value: function checkStrength(p) {
          var force = 0;
          var regex = /[$-/:-?{-~!"^_@`\[\]]/g;
          var lowerLetters = /[a-z]+/.test(p);
          var upperLetters = /[A-Z]+/.test(p);
          var numbers = /[0-9]+/.test(p);
          var symbols = regex.test(p);
          var flags = [lowerLetters, upperLetters, numbers, symbols];
          var passedMatches = 0;

          for (var _i = 0, _flags = flags; _i < _flags.length; _i++) {
            var flag = _flags[_i];
            passedMatches += flag === true ? 1 : 0;
          }

          force += 2 * p.length + (p.length >= 10 ? 1 : 0);
          force += passedMatches * 10; // short password

          force = p.length <= 6 ? Math.min(force, 10) : force; // poor variety of characters

          force = passedMatches === 1 ? Math.min(force, 10) : force;
          force = passedMatches === 2 ? Math.min(force, 20) : force;
          force = passedMatches === 3 ? Math.min(force, 30) : force;
          force = passedMatches === 4 ? Math.min(force, 40) : force;
          return force;
        }
      }]);

      return PasswordStrengthComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PasswordStrengthComponent.prototype, "passwordToCheck", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], PasswordStrengthComponent.prototype, "passwordStrength", void 0);
    PasswordStrengthComponent = PasswordStrengthComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-password-strength',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./password-strength.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/share/password-template/password-strength/password-strength.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./password-strength.component.scss */
      "./src/app/share/password-template/password-strength/password-strength.component.scss"))["default"]]
    })], PasswordStrengthComponent);
    /***/
  },

  /***/
  "./src/app/share/password-template/password-template.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/share/password-template/password-template.module.ts ***!
    \*********************************************************************/

  /*! exports provided: PasswordTemplateModule */

  /***/
  function srcAppSharePasswordTemplatePasswordTemplateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordTemplateModule", function () {
      return PasswordTemplateModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _passWordTemplate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./passWordTemplate.component */
    "./src/app/share/password-template/passWordTemplate.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _password_strength_password_strength_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./password-strength/password-strength.component */
    "./src/app/share/password-template/password-strength/password-strength.component.ts");

    var PasswordTemplateModule = /*#__PURE__*/_createClass(function PasswordTemplateModule() {
      _classCallCheck(this, PasswordTemplateModule);
    });

    PasswordTemplateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_passWordTemplate_component__WEBPACK_IMPORTED_MODULE_3__["PasswordComponent"], _password_strength_password_strength_component__WEBPACK_IMPORTED_MODULE_5__["PasswordStrengthComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
      exports: [_passWordTemplate_component__WEBPACK_IMPORTED_MODULE_3__["PasswordComponent"]]
    })], PasswordTemplateModule);
    /***/
  },

  /***/
  "./src/app/sidebar/sidebar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sidebar/sidebar.component.ts ***!
    \**********************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../helper.service */
    "./src/app/helper.service.ts");
    /* harmony import */


    var _header_header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../header/header.service */
    "./src/app/header/header.service.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent(_router, auth, headerService, mediaMatcher) {
        _classCallCheck(this, SidebarComponent);

        this._router = _router;
        this.auth = auth;
        this.headerService = headerService;
        this.mediaMatcher = mediaMatcher;
        this.isdisabled_tooltip = false;
        this.sidenavExpand = false;
        this.media_mobile = mediaMatcher.matchMedia("only screen and (max-width: 850px) ");
        console.log("====================");
        console.log("sidebar comp constructor");
        console.log("===================="); // setInterval(()=>{
        //   console.log(this.media_mobile.matches)
        // }, 1000)
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          this.media_mobile = this.mediaMatcher.matchMedia("only screen and (max-width: 850px) ");

          if (parseInt(localStorage.getItem("role_id")) == 2) {
            this.endUser = false;
          } else {
            this.endUser = true;
          }

          this.systemSetting = JSON.parse(localStorage.getItem('isSystemSettingReq'));
          this.dashboardactive = false;
          this.queueactive = false;
          this.subscription = this.headerService.sidenavExpand.subscribe(function (data) {
            _this22.sidenavExpand = data;
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.media_mobile = this.mediaMatcher.matchMedia("only screen and (max-width: 850px) ");
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "redirectto",
        value: function redirectto(path, element) {
          if (path === "department") {
            this._router.navigateByUrl("/department");
          } else if (path === "generalSetting") {
            this._router.navigateByUrl("/system-setting");
          } else if (path === 'user-management') {
            var url = "/" + path;

            this._router.navigateByUrl(path);
          } else if (path === 'settings-dashboard') {
            var _url = "/" + path;

            this._router.navigateByUrl(path);

            this.dashboardactive = false;
            this.queueactive = false;
          } else {
            this._router.navigateByUrl("/create-web");
          }
        }
      }, {
        key: "expand",
        value: function expand(ele, e) {
          if (!e.classList.contains("collapsSidenav")) {
            e.classList.add("collapsSidenav");
            ele.classList.add("is-active"); // ele.classList.add("justify-content-end");

            this.auth.setsidenav = true;
            this.isdisabled_tooltip = true;
          } else {
            e.classList.remove("collapsSidenav");
            ele.classList.remove("is-active"); // ele.classList.remove("justify-content-end");

            this.auth.setsidenav = false;
            this.isdisabled_tooltip = false;
          }
        }
      }, {
        key: "activelink",
        value: function activelink(path) {
          if (path === "dashboard") {
            this.dashboardactive = true;
            this.queueactive = false;
          } else if (path === "queue") {
            this.queueactive = true;
            this.dashboardactive = false;
          } else {
            this.dashboardactive = false;
            this.queueactive = false;
          }
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]
      }, {
        type: _header_header_service__WEBPACK_IMPORTED_MODULE_4__["HeaderService"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["MediaMatcher"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("collapsehover", {
      "static": false
    })], SidebarComponent.prototype, "somename", void 0);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html"))["default"]
    })], SidebarComponent);
    /***/
  },

  /***/
  "./src/app/spinner/spinner.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/spinner/spinner.component.ts ***!
    \**********************************************/

  /*! exports provided: SpinnerComponent */

  /***/
  function srcAppSpinnerSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
      return SpinnerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _spinner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./spinner.service */
    "./src/app/spinner/spinner.service.ts");

    var SpinnerComponent = /*#__PURE__*/function () {
      function SpinnerComponent(spinnerService) {
        _classCallCheck(this, SpinnerComponent);

        this.spinnerService = spinnerService;
        this.loadSpinner = false;
      }

      _createClass(SpinnerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.subscription = this.spinnerService.getspinner.subscribe(function (res) {
            _this23.loadSpinner = res;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }]);

      return SpinnerComponent;
    }();

    SpinnerComponent.ctorParameters = function () {
      return [{
        type: _spinner_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"]
      }];
    };

    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-spinner',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./spinner.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/spinner/spinner.component.html"))["default"]
    })], SpinnerComponent);
    /***/
  },

  /***/
  "./src/app/spinner/spinner.service.ts":
  /*!********************************************!*\
    !*** ./src/app/spinner/spinner.service.ts ***!
    \********************************************/

  /*! exports provided: SpinnerService */

  /***/
  function srcAppSpinnerSpinnerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerService", function () {
      return SpinnerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SpinnerService = /*#__PURE__*/function () {
      function SpinnerService() {
        _classCallCheck(this, SpinnerService);

        this.spinner = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
      }

      _createClass(SpinnerService, [{
        key: "setSpinner",
        set: function set(value) {
          this.spinner.next(value);
        }
      }, {
        key: "getspinner",
        get: function get() {
          return this.spinner.asObservable();
        }
      }]);

      return SpinnerService;
    }();

    SpinnerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SpinnerService);
    /***/
  },

  /***/
  "./src/app/state/kafka.actions.ts":
  /*!****************************************!*\
    !*** ./src/app/state/kafka.actions.ts ***!
    \****************************************/

  /*! exports provided: KafkaAction, AddMessageAction, OwnerChange, OnAssign, OnStatusChange, GetTodos, InitDashbord, OnApproval, Logout, UserStatus */

  /***/
  function srcAppStateKafkaActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KafkaAction", function () {
      return KafkaAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddMessageAction", function () {
      return AddMessageAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwnerChange", function () {
      return OwnerChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnAssign", function () {
      return OnAssign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnStatusChange", function () {
      return OnStatusChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetTodos", function () {
      return GetTodos;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitDashbord", function () {
      return InitDashbord;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnApproval", function () {
      return OnApproval;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Logout", function () {
      return Logout;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserStatus", function () {
      return UserStatus;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var KafkaAction = /*#__PURE__*/_createClass(function KafkaAction(payload) {
      _classCallCheck(this, KafkaAction);

      this.payload = payload;
    });

    KafkaAction.type = '[Kafka] Add item';

    var AddMessageAction = /*#__PURE__*/_createClass(function AddMessageAction(message) {
      _classCallCheck(this, AddMessageAction);

      this.message = message;
    });

    AddMessageAction.type = 'ON_CREATE';

    var OwnerChange = /*#__PURE__*/_createClass(function OwnerChange(message) {
      _classCallCheck(this, OwnerChange);

      this.message = message;
    });

    OwnerChange.type = 'ON_TAKE';

    var OnAssign = /*#__PURE__*/_createClass(function OnAssign(message) {
      _classCallCheck(this, OnAssign);

      this.message = message;
    });

    OnAssign.type = 'ON_ASSIGN';

    var OnStatusChange = /*#__PURE__*/_createClass(function OnStatusChange(message) {
      _classCallCheck(this, OnStatusChange);

      this.message = message;
    });

    OnStatusChange.type = 'ON_STATUS_CHANGE';

    var GetTodos = /*#__PURE__*/_createClass(function GetTodos(message) {
      _classCallCheck(this, GetTodos);

      this.message = message;
    });

    GetTodos.type = '[Todo] Get';

    var InitDashbord = /*#__PURE__*/_createClass(function InitDashbord() {
      _classCallCheck(this, InitDashbord);
    });

    InitDashbord.type = 'Initialize Dashbord';

    var OnApproval = /*#__PURE__*/_createClass(function OnApproval() {
      _classCallCheck(this, OnApproval);
    });

    OnApproval.type = 'ON_APPROVAL';

    var Logout = /*#__PURE__*/_createClass(function Logout() {
      _classCallCheck(this, Logout);
    });

    Logout.type = 'Logout';

    var UserStatus = /*#__PURE__*/_createClass(function UserStatus(message) {
      _classCallCheck(this, UserStatus);

      this.message = message;
    });

    UserStatus.type = 'USER_AVAILABILITY_STATUS';
    /***/
  },

  /***/
  "./src/app/state/kafka.state.ts":
  /*!**************************************!*\
    !*** ./src/app/state/kafka.state.ts ***!
    \**************************************/

  /*! exports provided: KafkaStateModel, KafkaState */

  /***/
  function srcAppStateKafkaStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KafkaStateModel", function () {
      return KafkaStateModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KafkaState", function () {
      return KafkaState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../helper.service */
    "./src/app/helper.service.ts");
    /* harmony import */


    var _kafka_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./kafka.actions */
    "./src/app/state/kafka.actions.ts");

    var KafkaStateModel = /*#__PURE__*/_createClass(function KafkaStateModel() {
      _classCallCheck(this, KafkaStateModel);
    });

    var KafkaState = /*#__PURE__*/function () {
      function KafkaState(helperService) {
        _classCallCheck(this, KafkaState);

        this.helperService = helperService;
      }

      _createClass(KafkaState, [{
        key: "add",
        value: function add(ctx, action) {
          var state = ctx.getState();
          ctx.setState(Object.assign({}, state, {
            messages: [JSON.parse(action.message).ticketCreationPojo].concat(_toConsumableArray(state.messages))
          }));
        }
      }, {
        key: "deleteHeroByState",
        value: function deleteHeroByState(ctx, _ref) {
          var message = _ref.message;
          var state = ctx.getState();
          ctx.patchState({
            messages: state.messages.filter(function (item) {
              return item["ticketsId"] != JSON.parse(message).ticketCreationPojo.ticketsId;
            })
          });
        }
      }, {
        key: "onAssigntoOther",
        value: function onAssigntoOther(ctx, _ref2) {
          var message = _ref2.message;
          var state = ctx.getState();
          ctx.patchState({
            messages: state.messages.filter(function (item) {
              return item["ticketsId"] != JSON.parse(message).ticketCreationPojo.ticketsId;
            })
          });
        }
      }, {
        key: "onTicketStatusChange",
        value: function onTicketStatusChange(ctx, _ref3) {
          var message = _ref3.message;
          var state = ctx.getState();
          ctx.patchState({
            messages: [].concat(_toConsumableArray(state.messages), [message])
          });
        }
      }, {
        key: "getTodos",
        value: function getTodos(_ref4, _ref5) {
          var getState = _ref4.getState,
              setState = _ref4.setState;
          var message = _ref5.message;
          var state = getState();

          for (var i = 0, l = message.ticketCategory.length; i < l; i++) {
            for (var j = 0, ll = state.messages.length; j < ll; j++) {
              if (message.ticketCategory[i].ticketsId === state.messages[j]["ticketsId"]) {
                message.ticketCategory.splice(i, 1, state.messages[j]);
                break;
              }
            }
          }

          setState(Object.assign({}, state, {
            messages: message.ticketCategory
          }));
        }
      }, {
        key: "initDashbord",
        value: function initDashbord(_ref6) {
          var getState = _ref6.getState,
              setState = _ref6.setState;
          var state = getState();
          setState(Object.assign({}, state, {
            messages: []
          }));
        }
      }, {
        key: "OnApprovalSend",
        value: function OnApprovalSend(ctx) {}
      }, {
        key: "OnLogout",
        value: function OnLogout(_ref7) {
          var getState = _ref7.getState,
              setState = _ref7.setState;
          var state = getState();
          setState(Object.assign({}, state, {
            messages: []
          }));
        }
      }, {
        key: "userStatus",
        value: function userStatus(_ref8) {
          var getState = _ref8.getState,
              setState = _ref8.setState;
          var state = getState();
          setState(Object.assign({}, state));
        }
      }], [{
        key: "messages",
        value: function messages(state) {
          return state.messages;
        }
      }]);

      return KafkaState;
    }();

    KafkaState.ctorParameters = function () {
      return [{
        type: _helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_kafka_actions__WEBPACK_IMPORTED_MODULE_3__["AddMessageAction"])], KafkaState.prototype, "add", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_kafka_actions__WEBPACK_IMPORTED_MODULE_3__["OwnerChange"])], KafkaState.prototype, "deleteHeroByState", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_kafka_actions__WEBPACK_IMPORTED_MODULE_3__["OnAssign"])], KafkaState.prototype, "onAssigntoOther", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_kafka_actions__WEBPACK_IMPORTED_MODULE_3__["OnStatusChange"])], KafkaState.prototype, "onTicketStatusChange", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_kafka_actions__WEBPACK_IMPORTED_MODULE_3__["GetTodos"])], KafkaState.prototype, "getTodos", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_kafka_actions__WEBPACK_IMPORTED_MODULE_3__["InitDashbord"])], KafkaState.prototype, "initDashbord", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_kafka_actions__WEBPACK_IMPORTED_MODULE_3__["OnApproval"])], KafkaState.prototype, "OnApprovalSend", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_kafka_actions__WEBPACK_IMPORTED_MODULE_3__["Logout"])], KafkaState.prototype, "OnLogout", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_kafka_actions__WEBPACK_IMPORTED_MODULE_3__["UserStatus"])], KafkaState.prototype, "userStatus", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], KafkaState, "messages", null);
    KafkaState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'kafka',
      defaults: {
        messages: []
      }
    })], KafkaState);
    /***/
  },

  /***/
  "./src/app/ticket-queue/ticket-queue.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/ticket-queue/ticket-queue.service.ts ***!
    \******************************************************/

  /*! exports provided: TicketQueueService */

  /***/
  function srcAppTicketQueueTicketQueueServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketQueueService", function () {
      return TicketQueueService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_Config_config_resource_local__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Config/config.resource.local */
    "./src/app/Config/config.resource.local.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var TicketQueueService = /*#__PURE__*/function () {
      function TicketQueueService(http, _router, config) {
        _classCallCheck(this, TicketQueueService);

        this.http = http;
        this._router = _router;
        this.config = config;
        this.expandSidenav = false;
        this.search = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.config_data = config.getSetting();
      }

      _createClass(TicketQueueService, [{
        key: "getTicketList",
        value: function getTicketList(value) {
          var data = {
            ticketCategory: value.categoryId,
            ticketQueueType: value.ticketQueueType
          };

          if (value.restrictedSystemstatusIds) {
            data["restrictedSystemstatusIds"] = value.restrictedSystemstatusIds;
          } // if (value.customStatus && value.ticketQueueType !="ActionTickets") {
          //   data["customStatus"] = value.customStatus;
          // }


          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["get_All_Ticket_List"], data);
        }
      }, {
        key: "getTicket",
        value: function getTicket(ticketdata) {
          var data = {
            ticketsId: ticketdata.ticketsId
          };
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["get-ticket"], data);
        }
      }, {
        key: "getDefaultStatus",
        value: function getDefaultStatus() {
          return this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["defaultStatus"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            if (res["code"] == 200) {
              return res["data"];
            }
          }));
        }
      }, {
        key: "getRoles",
        value: function getRoles(ticketdata) {
          var data = {
            clientId: this.config_data["clientId"],
            roleId: localStorage.getItem("role_id"),
            userId: localStorage.getItem("user_id"),
            departmentId: ticketdata.departmentId,
            principleMappingId: ticketdata.principleMappingId
          };
          return this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["get_roles_by_department"], {
            params: {
              principleMappingId: ticketdata.principleMappingId,
              departmentId: ticketdata.departmentId
            }
          });
        }
      }, {
        key: "getUser",
        value: function getUser(event) {
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["get_online_users"], {
            roleId: event.roleId,
            userId: localStorage.getItem("user_id"),
            // departmentId: event.departmentId,
            clientId: this.config_data["clientId"],
            // pricnipleMappingId: event.principleMappingId
            principleMappingIds: event.principleMappingIds
          });
        }
      }, {
        key: "getcustomfield",
        value: function getcustomfield(value) {
          return this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["custom_list"], {
            params: {
              departmentId: value.departmentId,
              principleMappingId: value.principleMappingId
            }
          });
        }
      }, {
        key: "updateTicket",
        value: function updateTicket(data, ticketFieldsList) {
          debugger;
          data['description'] = data['description'].replaceAll('$', '&#36;');
          data.roleId = localStorage.getItem("role_id");
          data.createdBy = localStorage.getItem("user_id");
          data.clientId = this.config_data["clientId"];
          data.ticketFieldsList = ticketFieldsList.length > 0 ? ticketFieldsList.filter(function (ele) {
            return ele.updatedField;
          }) : []; // data.ticketFieldsList = ticketFieldsList.length > 0 ? ticketFieldsList : data.ticketFieldsList;

          data.cfValueIds = ticketFieldsList.map(function (item) {
            return item.newValueId;
          }).filter(function (e) {
            return e;
          });
          data["oldSystemStatusId"] = 0;

          if (data.staticTicketFields && data.staticTicketFields.length > 0) {
            var index = data.staticTicketFields.findIndex(function (ele) {
              return ele.updatedField === "Status";
            });

            if (index > -1) {
              data.oldSystemStatusId = data.staticTicketFields.find(function (ele) {
                return ele.updatedField === "Status";
              }).oldSystemStatusId;
            }
          }

          if (data.dateToResolved && data.updatedSlaList && data.updatedSlaList.length > 1) {
            data.dateToResolved = data.updatedSlaList[data.updatedSlaList.length - 1].ResolutionTime;
          }

          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["ticket_update"], data);
        }
      }, {
        key: "updateTicketOwner",
        value: function updateTicketOwner(ticketDetails, owner, responseStatus, prevstatus, commentsData) {
          debugger;

          var moment = __webpack_require__(
          /*! moment */
          "./node_modules/moment/moment.js");

          var data = {
            roleId: localStorage.getItem("role_id"),
            createdBy: localStorage.getItem("user_id"),
            ownerId: owner.ownerId,
            clientId: this.config_data["clientId"],
            owner: owner.ownerName,
            ticketsId: ticketDetails.ticketsId,
            departmentId: ticketDetails.departmentId,
            type: "Taken",
            systemstatus: responseStatus.systemStatus,
            systemTicketStatusId: responseStatus.systemStatusId,
            statusId: responseStatus.customTicketStatusId ? responseStatus.customTicketStatusId : responseStatus.statusId,
            status: responseStatus.customStatus ? responseStatus.customStatus : responseStatus.status,
            respondedDate: ticketDetails.respondedDate ? ticketDetails.respondedDate : moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss"),
            principleMappingId: ticketDetails.principleMappingId,
            ticketPrefixId: ticketDetails.ticketPrefixId,
            subject: ticketDetails.subject,
            requestorUserId: ticketDetails.requestorUserId,
            requestorMailAddress: ticketDetails.requestorMailAddress,
            requestor: ticketDetails.requestor,
            ticketComment: commentsData ? commentsData.comment : "",
            ticketCommentPojo: commentsData ? commentsData : null,
            watchers: ticketDetails.watchers,
            createdDate: ticketDetails.createdDate,
            dateToResolved: ticketDetails.dateToResolved,
            channelId: ticketDetails.channelId,
            lastTransferredDate: ticketDetails.lastTransferredDate,
            isTransferred: ticketDetails.isTransferred,
            reopenMaxCount: ticketDetails.reopenMaxCount,
            updatedSlaList: ticketDetails.updatedSlaList
          };

          if (ticketDetails.ownerId) {
            data["staticTicketFields"] = [{
              oldValue: ticketDetails.owner,
              newValue: owner.ownerName,
              updatedField: owner.ownerId == parseInt(localStorage.getItem("user_id")) ? "Owner" : "Owner Assign",
              fieldName: owner.ownerId == parseInt(localStorage.getItem("user_id")) ? "Owner" : "Owner Assign"
            }];

            if (ticketDetails.statusId != prevstatus.statusId) {
              data["oldSystemStatusId"] = prevstatus.systemStatusId;
              data["oldStatusId"] = prevstatus.statusId;
              data["oldsystemstatus"] = prevstatus.systemstatus;
              data["staticTicketFields"].push({
                oldValue: prevstatus.status,
                oldSystemStatusId: prevstatus.systemStatusId,
                newSystemStatusId: ticketDetails.systemTicketStatusId,
                newValue: ticketDetails.status,
                updatedField: "Status",
                fieldName: "SystemStatus"
              });
            }

            data["systemTicketStatusId"] = ticketDetails.systemTicketStatusId;
            data["systemstatus"] = ticketDetails.systemstatus;
            data["statusId"] = ticketDetails.statusId;
            data["status"] = ticketDetails.status;
            data["oldValue"] = ticketDetails.owner;
            data["newValue"] = owner.ownerName;
          } else {
            data["staticTicketFields"] = [{
              newValue: owner.ownerName,
              updatedField: "Owner"
            }, {
              oldValue: ticketDetails.status,
              oldSystemStatusId: ticketDetails.systemTicketStatusId,
              newSystemStatusId: responseStatus.systemStatusId,
              newValue: responseStatus.customStatus ? responseStatus.customStatus : responseStatus.status,
              updatedField: "Status",
              fieldName: responseStatus.customStatus ? "Status" : "SystemStatus"
            }];

            if (responseStatus.customStatus) {
              data["staticTicketFields"].push({
                oldValue: ticketDetails.systemstatus,
                newValue: responseStatus.systemStatus,
                oldSystemStatusId: ticketDetails.systemTicketStatusId,
                newSystemStatusId: responseStatus.systemStatusId,
                updatedField: "Status",
                fieldName: "SystemStatus"
              });
            }
          }

          if (ticketDetails.ticketFieldsList && ticketDetails.ticketFieldsList.length > 0) {
            var cfValueIds = [];
            cfValueIds = ticketDetails.ticketFieldsList.map(function (id) {
              return id.newValueId;
            });
            data["cfValueIds"] = cfValueIds;
          }

          if (data.dateToResolved && data.updatedSlaList && data.updatedSlaList.length > 1) {
            data.dateToResolved = data.updatedSlaList[data.updatedSlaList.length - 1].ResolutionTime;
          }

          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["update_ticket_owner"], data);
        }
      }, {
        key: "sendApproval",
        value: function sendApproval(ticketData, level, isUnderApproval, approvalRuleMappingId, currentApprovalItem, commentsData, approvalConfig) {
          var data = {
            roleId: localStorage.getItem("role_id"),
            actionBy: localStorage.getItem("user_id"),
            createdBy: localStorage.getItem("user_id"),
            clientId: this.config_data["clientId"],
            ticketId: ticketData.ticketsId,
            ticketPrefixId: ticketData.ticketPrefixId,
            departmentId: ticketData.departmentId,
            principleMappingId: ticketData.principleMappingId,
            isApproved: ticketData.isApproved,
            comments: ticketData.comments,
            approvalLevel: level,
            isUnderApproval: isUnderApproval,
            maxLevel: 5,
            isActive: 0,
            approvalRuleMappingId: approvalRuleMappingId,
            isEmailNotification: ticketData.isApprovalEmailNotification == 0,
            isUINotification: ticketData.isApprovalUINotification == 0,
            requestorMailAddress: ticketData.requestorMailAddress,
            requestor: ticketData.requestor,
            ticketComment: commentsData ? commentsData.comment : "",
            ticketCommentPojo: commentsData ? commentsData : null,
            approvalType: "Ticket Approval",
            subject: ticketData.subject,
            nextLevel: ticketData.nextLevel
          };

          if (currentApprovalItem && currentApprovalItem.ticketApprovalActionId && level != 0) {
            data["ticketApprovalActionId"] = currentApprovalItem.ticketApprovalActionId;
          }

          if (ticketData['approvalRuleMappingConfigId']) {
            data['approvalRuleMappingConfigId'] = ticketData['approvalRuleMappingConfigId'];
          }

          if (ticketData.hasOwnProperty('isApprovalAll') && ticketData['isApprovalAll'] == 0) {
            data['isApprovalAll'] = 0;
          }

          console.log(data);
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["create-ticket-approval"], data);
        }
      }, {
        key: "resendApproval",
        value: function resendApproval(ticketData, level, isUnderApproval, approvalRuleMappingId, currentApprovalItem, resendObj) {
          var data = {
            roleId: localStorage.getItem("role_id"),
            actionBy: localStorage.getItem("user_id"),
            createdBy: localStorage.getItem("user_id"),
            clientId: this.config_data["clientId"],
            ticketId: ticketData.ticketsId,
            ticketPrefixId: ticketData.ticketPrefixId,
            departmentId: ticketData.departmentId,
            principleMappingId: ticketData.principleMappingId,
            isApproved: 2,
            comments: currentApprovalItem.comments,
            approvalLevel: level,
            isUnderApproval: 0,
            maxLevel: 5,
            isActive: 0,
            approvalRuleMappingId: approvalRuleMappingId,
            isEmailNotification: ticketData.isApprovalEmailNotification == 0,
            isUINotification: ticketData.isApprovalUINotification == 0,
            isResend: resendObj.isResend,
            resendDate: resendObj.resendDate,
            resendCount: resendObj.resendCount,
            currentaction: "Resend",
            approvalType: "Ticket Approval",
            subject: ticketData.subject
          };

          if (currentApprovalItem && currentApprovalItem.ticketApprovalActionId) {
            data["ticketApprovalActionId"] = currentApprovalItem.ticketApprovalActionId;
          }

          if (ticketData['approvalRuleMappingConfigId']) {
            data['approvalRuleMappingConfigId'] = ticketData['approvalRuleMappingConfigId'];
          }

          console.log(data);
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["create-ticket-approval"], data);
        }
      }, {
        key: "trackApproval",
        value: function trackApproval(ticketData) {
          var data = {
            roleId: localStorage.getItem("role_id"),
            actionBy: localStorage.getItem("user_id"),
            clientId: this.config_data["clientId"],
            ticketId: ticketData.ticketsId,
            departmentId: ticketData.departmentId
          };
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["get-ticket_approvals"], data);
        }
      }, {
        key: "getDepartmentDetails",
        value: function getDepartmentDetails(data) {
          data.userId = localStorage.getItem("user_id"), data.clientId = this.config_data["clientId"], data.roleId = localStorage.getItem("role_id");
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["get-active-location-team"], data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            if (response["code"] == 200) {
              return response["data"];
            }
          }));
        }
      }, {
        key: "departmentList",
        value: function departmentList(principleMappingIds) {
          return this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["active_department_details"], {
            params: {
              principleMappingIds: principleMappingIds.length > 0 ? principleMappingIds.join(",") : ""
            }
          });
        }
      }, {
        key: "customTicketStatus",
        value: function customTicketStatus(ticketData) {
          return this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["get-all-custom-status"], {
            params: {
              departmentId: ticketData.departmentId,
              principleMappingId: ticketData.principleMappingId,
              // systemStatus: ticketData.systemstatus
              statusId: ticketData.systemTicketStatusId
            }
          });
        }
      }, {
        key: "getticketFields",
        value: function getticketFields(value, actionId, status) {
          var data = {
            departmentId: value.departmentId,
            principleMappingId: [value.principleMappingId],
            actionId: actionId,
            channel: value.channel,
            channelId: value.channelId
          };

          if (status.statusType == 1) {
            data["customStatusId"] = status.statusValue;
          } else {
            data["statusId"] = status.statusValue;
          }

          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["get_ticket_component"], data);
        }
      }, {
        key: "getComments",
        value: function getComments(data) {
          return this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["get_comments"], {
            params: {
              ticketId: data.ticketsId,
              isActive: "0"
            }
          });
        }
      }, {
        key: "createComments",
        value: function createComments(text, data) {
          var body = {
            clientId: this.config_data["clientId"],
            roleId: localStorage.getItem("role_id"),
            ticketId: data.ticketsId,
            principleMappingId: data.principleMappingId,
            comment: text,
            isActive: 0,
            createdBy: localStorage.getItem("user_id")
          };
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["create_comment"], body);
        }
      }, {
        key: "delete_comment",
        value: function delete_comment(id) {
          var body = {
            ticketTalksId: id,
            clientId: this.config_data["clientId"],
            roleId: localStorage.getItem("role_id"),
            createdBy: localStorage.getItem("user_id")
          };
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["delete_comment"], body);
        }
      }, {
        key: "update_comment",
        value: function update_comment(value) {
          var body = {
            ticketTalksId: value.ticketTalksId,
            clientId: this.config_data["clientId"],
            roleId: localStorage.getItem("role_id"),
            ticketId: value.ticketId,
            principleMappingId: value.principleMappingId,
            talk: value.talk,
            isActive: 0,
            createdBy: localStorage.getItem("user_id")
          };
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["update_comment"], body);
        }
      }, {
        key: "getAttachment",
        value: function getAttachment(ticketId) {
          return this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["get_attachment"], {
            params: {
              ticketId: ticketId
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            if (res["code"] == 200) {
              return res["data"];
            }
          }));
        }
      }, {
        key: "downloadFile",
        value: function downloadFile(file) {
          var data = {
            attachmentName: file.attachmentName,
            attachmentType: file.attachmentType,
            attachmentPath: file.attachmentPath,
            clientId: this.config_data["clientId"],
            roleId: localStorage.getItem("role_id"),
            createdby: localStorage.getItem("user_id")
          };
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["download_attachment"], data, {
            responseType: "blob"
          });
        }
      }, {
        key: "deleteAttachment",
        value: function deleteAttachment(file) {
          var data = {
            clientId: this.config_data["clientId"],
            roleId: localStorage.getItem("role_id"),
            createdby: localStorage.getItem("user_id"),
            ticketAttachmentIds: [file.ticketAttachmentId],
            attachmentPaths: [file.attachmentPath + "" + file.attachmentName]
          };
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["delete_attachment"], data);
        }
      }, {
        key: "disableAttachment",
        value: function disableAttachment(file) {
          var data = {
            clientId: this.config_data["clientId"],
            roleId: localStorage.getItem("role_id"),
            createdby: localStorage.getItem("user_id"),
            ticketAttachmentId: file.ticketAttachmentId,
            isactive: 1
          };
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["disable_attachment"], data);
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(formdata) {
          // const form = new FormData();
          // let isactive: any = 0;
          // data.forEach((fileitem, i) => form.append(`ticketDocument`, fileitem._file));
          // form.append("roleId", localStorage.getItem("role_id"));
          // form.append("isactive", isactive);
          // form.append("department", departmentName);
          // form.append("createdby", localStorage.getItem("user_id"));
          // form.append("clientId", this.config_data["clientId"]);
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["upload_attachment"], formdata);
        }
      }, {
        key: "getTransactionHistory",
        value: function getTransactionHistory(value, id) {
          console.log(id);

          if (id != undefined && id != 0) {
            return this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["get_history"], {
              params: {
                ticketsId: value.ticketsId,
                transactionCategoryType: id
              }
            });
          } else {
            return this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["get_history"], {
              params: {
                ticketsId: value.ticketsId
              }
            });
          }
        }
      }, {
        key: "getDefaultValue",
        value: function getDefaultValue(data) {
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["get_default_value"], data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            if (response["code"] == 200) {
              return response["data"];
            }
          }));
        }
      }, {
        key: "updateAttachment",
        value: function updateAttachment(data) {
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["update_attachment"], data);
        }
      }, {
        key: "getDelegateUser",
        value: function getDelegateUser(ticketdata) {
          var data = {
            clientId: this.config_data["clientId"],
            roleId: localStorage.getItem("role_id"),
            userId: localStorage.getItem("user_id"),
            createdby: localStorage.getItem("user_id"),
            departmentId: ticketdata.departmentId,
            principleMappingId: ticketdata.principleMappingId
          };
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["get-user-details-for-approval"], data);
        }
      }, {
        key: "sendDelegate",
        value: function sendDelegate(ticketData, approvalLevel, delegateapproval, currentApprovalItem) {
          var data = {
            roleId: localStorage.getItem("role_id"),
            actionBy: localStorage.getItem("user_id"),
            createdBy: localStorage.getItem("user_id"),
            clientId: this.config_data["clientId"],
            ticketId: ticketData.ticketsId,
            ticketPrefixId: ticketData.ticketPrefixId,
            departmentId: ticketData.departmentId,
            principleMappingId: ticketData.principleMappingId,
            isApproved: 4,
            delegatedUserIds: delegateapproval.map(function (id) {
              return id.usersId;
            }),
            delegatedUsers: delegateapproval.map(function (e) {
              return e.email;
            }),
            approvalLevel: approvalLevel,
            maxLevel: 5,
            isActive: 0,
            isDelegate: 0,
            approvalRuleMappingId: ticketData.approvalRuleMappingId,
            ticketApprovalActionId: currentApprovalItem.ticketApprovalActionId,
            comments: currentApprovalItem.comments,
            isEmailNotification: ticketData.isApprovalEmailNotification == 0,
            isUINotification: ticketData.isApprovalUINotification == 0,
            subject: ticketData.subject,
            isUnderApproval: 1,
            nextLevel: ticketData.approvalLevel < ticketData.maxLevel ? ticketData.approvalLevel + 1 : ticketData.maxLevel,
            requestor: localStorage.getItem("userEmail"),
            requestorMailAddress: localStorage.getItem("userEmail")
          };

          if (ticketData['approvalRuleMappingConfigId']) {
            data['approvalRuleMappingConfigId'] = ticketData['approvalRuleMappingConfigId'];
          }

          console.log(data);
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["create-ticket-approval"], data);
        }
      }, {
        key: "getSimilarTicket",
        value: function getSimilarTicket(data, id, mappingId) {
          return this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["get-similar-ticket"] + "=" + data + "&ticketId=" + id + "&principleMappingId=" + mappingId);
        }
      }, {
        key: "getArticle",
        value: function getArticle(id) {
          return this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["get-article-by-id"] + "=" + id);
        }
      }, {
        key: "ticketLink",
        value: function ticketLink(data) {
          data.createdBy = localStorage.getItem("user_id");
          data.clientId = this.config_data["clientId"];
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["ticket-link"], data);
        }
      }, {
        key: "getCategoryArticle",
        value: function getCategoryArticle(data) {
          return this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["get-kb"], {
            params: {
              ticketId: data.ticketsId,
              principleMappingId: data.principleMappingId
            }
          });
        }
      }, {
        key: "approveaAllLevels",
        value: function approveaAllLevels(ticketData, pendingLevels) {
          console.log(ticketData);
          debugger;
          var data = [];
          pendingLevels.forEach(function (value) {
            var item = {
              actionBy: localStorage.getItem("user_id"),
              ticketId: ticketData.ticketsId,
              ticketPrefixId: ticketData.ticketPrefixId,
              departmentId: ticketData.departmentId,
              principleMappingId: ticketData.principleMappingId,
              isApproved: 0,
              approvalLevel: value.approvalLevel,
              maxLevel: value.maxLevel,
              isUnderApproval: value.maxLevel == value.approvalLevel ? 0 : 1,
              isActive: 0,
              approvalRuleMappingId: ticketData.approvalRuleMappingId,
              approvalType: "Ticket Approval",
              comments: ticketData.comments ? ticketData.comments : '',
              "roleId": localStorage.getItem("role_id"),
              "createdBy": localStorage.getItem("userEmail"),
              "isEmailNotification": ticketData.isApprovalEmailNotification == 0 ? true : false,
              "isUINotification": ticketData.isApprovalUINotification == 0 ? true : false,
              "requestorMailAddress": ticketData['requestorMailAddress'],
              "requestor": ticketData['requestor'],
              "ticketComment": ticketData.comments ? ticketData.comments : '',
              "ticketCommentPojo": null,
              "subject": ticketData['subject'],
              "approvalRuleMappingConfigId": value.approvalRuleMappingConfigId
            };

            if (value.ticketApprovalActionId) {
              item['ticketApprovalActionId'] = value.ticketApprovalActionId;
            }

            data.push(item);
          });
          console.log(data);
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["approve-all-ticket"], data);
        }
      }, {
        key: "statusApproval",
        value: function statusApproval(data) {
          return this.http.get(this.config_data["domain"] + "" + // this.config_data["url"]["get-approval-mapping-id-by-status"],
          this.config_data["url"]["get-approval-config-details"], {
            params: {
              fromStatusId: data.fromStatus,
              toStatusId: data.toStatus,
              principleMappingId: data.principleMappingId
            }
          });
        }
      }, {
        key: "getApprovalConfigDetails",
        value: function getApprovalConfigDetails(data) {
          return this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["get-approval-config-details"], {
            params: data
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            if (response["code"] == 200) {
              return response["data"];
            }
          }));
        }
      }, {
        key: "ticketgetTicketdetails",
        value: function ticketgetTicketdetails(data) {
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["ticket_get_ticket_details"], data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            if (response["code"] == 200) {
              return response["data"];
            }
          }));
        }
      }, {
        key: "getallActiveMail",
        value: function getallActiveMail(data) {
          return this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["get_all_active_mail"], {
            params: {
              ticketId: data.ticketsId,
              isActive: "0"
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            if (response["code"] == 200) {
              return response["data"];
            }
          }));
        }
      }, {
        key: "getSentMail",
        value: function getSentMail(data) {
          return this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["get_sent_mail"], {
            params: {
              ticketId: data.ticketsId,
              isActive: "0"
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            if (response["code"] == 200) {
              return response["data"];
            }
          }));
        }
      }, {
        key: "sendmailboxEmail",
        value: function sendmailboxEmail(data) {
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["send_mail_box_email"], data);
        }
      }, {
        key: "markreadmailboxEmail",
        value: function markreadmailboxEmail(data) {
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["update_read_unread_mailBox"], data);
        }
      }, {
        key: "setsearch",
        value: function setsearch(data) {
          this.search.next(data);
        }
      }, {
        key: "getTicketAccess",
        value: function getTicketAccess(data) {
          return this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["get_default_resolution_custom"], {
            params: {
              departmentId: data.departmentId
            }
          });
        }
      }, {
        key: "getTicketView",
        value: function getTicketView() {
          return this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["get_ticketqueue_view"]);
        }
      }, {
        key: "getTimer",
        value: function getTimer(data) {
          return this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["get-ticket-timer"] + "?ticketId=" + data);
        }
      }, {
        key: "saveTimer",
        value: function saveTimer(data) {
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["create-ticket-timer"], data);
        }
      }, {
        key: "refreshTicket",
        value: function refreshTicket(data) {
          this.refresh.next(data);
        }
      }, {
        key: "getUserOrgDetails",
        value: function getUserOrgDetails(data) {
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["get-user-org-details"], data);
        }
      }, {
        key: "getUserOrgDetailsNew",
        value: function getUserOrgDetailsNew(data) {
          return this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["get-users-org-details"], {
            params: data
          });
        }
      }, {
        key: "userSignatureGetAll",
        value: function userSignatureGetAll(usersId, newCompose) {
          var defaultsignatureurl = newCompose ? "/api/user-signature/get-new-mail-users-signature" : "/api/user-signature/get-reply-forward-mail-users-signature";
          var allsignature = this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["user_signature_get_all"], {
            params: {
              usersId: usersId
            }
          });
          var defaultsignature = this.http.get(this.config_data["domain"] + "" + defaultsignatureurl, {
            params: {
              usersId: usersId
            }
          });
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])([allsignature, defaultsignature]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var nosignaturre = {
              usersSignatureId: 0,
              usersSignatureName: "No signature",
              usersSignatureContent: "",
              defaultsignature: true
            };
            var signaturelist = {
              signaturelist: [nosignaturre],
              defaultsign: nosignaturre
            };

            if (response[0]["code"] == 200) {
              signaturelist["signaturelist"] = [].concat(_toConsumableArray(signaturelist["signaturelist"]), _toConsumableArray(response[0]["data"]));
            }

            if (response[1]["code"] == 200 && response[1]["data"]) {
              signaturelist["defaultsign"] = signaturelist["signaturelist"].find(function (item) {
                return item.usersSignatureId == response[1]["data"].usersSignatureId;
              });
              signaturelist["defaultsign"].defaultsignature = true;
            }

            return signaturelist;
          }));
        }
      }, {
        key: "assignTicket",
        value: function assignTicket(ticketdata, owner, responseStatus, commentData, changedStatus) {
          var moment = __webpack_require__(
          /*! moment */
          "./node_modules/moment/moment.js");

          var params = {
            ticketsId: ticketdata.ticketsId,
            owner: owner.ownerName,
            ownerId: owner.ownerId,
            principleMappingId: ticketdata.principleMappingId,
            systemstatus: responseStatus.systemStatus,
            systemTicketStatusId: responseStatus.systemStatusId,
            departmentId: ticketdata.departmentId,
            statusId: responseStatus.customTicketStatusId ? responseStatus.customTicketStatusId : responseStatus.statusId,
            status: responseStatus.customStatus ? responseStatus.customStatus : responseStatus.status,
            respondedDate: ticketdata.respondedDate ? ticketdata.respondedDate : moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss"),
            ticketPrefixId: ticketdata.ticketPrefixId,
            subject: ticketdata.subject,
            requestorUserId: ticketdata.requestorUserId,
            ticketComment: commentData ? commentData.comment : "",
            ticketCommentPojo: commentData ? commentData : null,
            staticTicketFields: changedStatus,
            createdDate: ticketdata.createdDate,
            dateToResolved: ticketdata.dateToResolved,
            channelId: ticketdata.channelId
          };

          if (ticketdata.ticketFieldsList && ticketdata.ticketFieldsList.length > 0) {
            var cfValueIds = [];
            cfValueIds = ticketdata.ticketFieldsList.map(function (id) {
              return id.newValueId;
            });
            params["cfValueIds"] = cfValueIds;
          }

          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["assign_ticket"], params);
        }
      }, {
        key: "getAllComments",
        value: function getAllComments(data) {
          var params = {
            principleMappingId: data.principleMappingId,
            isActive: 0
          };
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["get_all_config_comments"], params);
        }
      }, {
        key: "getCommentAction",
        value: function getCommentAction() {
          return this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["get_comment_actions"]);
        }
      }, {
        key: "saveTicketComment",
        value: function saveTicketComment(params) {
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["save_ticket_comment"], params);
        }
      }, {
        key: "getTransferConfig",
        value: function getTransferConfig(data) {
          return this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["get_transfer_deptConfig"], {
            params: data
          });
        }
      }, {
        key: "transferTicket",
        value: function transferTicket(params) {
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["transfer_ticket"], params);
        }
      }, {
        key: "getAllStatus",
        value: function getAllStatus(value) {
          return this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["get-all-custom-status"], {
            params: {
              departmentId: value
            }
          });
        }
      }, {
        key: "getMergeListValue",
        value: function getMergeListValue(data) {
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["get-merge-list"], data);
        }
      }, {
        key: "getChildTicket",
        value: function getChildTicket(id) {
          return this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["get-child-ticket"] + "=" + id);
        }
      }, {
        key: "getParentTicket",
        value: function getParentTicket(id) {
          return this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["get-parent-ticket"] + "=" + id);
        }
      }, {
        key: "MaxCount",
        value: function MaxCount(id) {
          return this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["max-count"] + "=" + id);
        }
      }, {
        key: "getChildTicketCount",
        value: function getChildTicketCount(id) {
          return this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["get-child-ticket-count"] + "=" + id);
        }
      }, {
        key: "mergeTicket",
        value: function mergeTicket(data) {
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["save-merge-ticket"], data);
        }
      }, {
        key: "revertTicket",
        value: function revertTicket(data) {
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["revert-ticket"], data);
        }
      }, {
        key: "getRequestorType",
        value: function getRequestorType(id) {
          return this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["requestor-type"] + "=" + id);
        }
      }, {
        key: "getSearchFields",
        value: function getSearchFields() {
          return this.http.get(this.config_data["domain"] + "" + this.config_data["url"]["get_search_fields"]);
        }
      }, {
        key: "filterTicket",
        value: function filterTicket(data) {
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["ticket_with_filter"], data);
        }
      }, {
        key: "sendImmediateApproval",
        value: function sendImmediateApproval(data) {
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["create-ticket-approval"], data);
        }
      }, {
        key: "getAllUser",
        value: function getAllUser() {
          var data = {
            clientId: this.config_data["clientId"]
          };
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["get-users"], data);
        }
      }, {
        key: "getemailSearchData",
        value: function getemailSearchData(param) {
          var url = this.config_data["domain"] + "" + this.config_data["url"]["get_users_with_filters"];
          if (!param) return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])([]);
          return this.http.get(url, {
            params: {
              searchValue: param
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            if (response["code"] == 200) {
              return response["data"].map(function (item) {
                return item.email;
              });
            }

            return [];
          }));
        }
      }, {
        key: "getTicketExternalMapping",
        value: function getTicketExternalMapping(ticketData) {
          var data = {
            clientId: this.config_data["clientId"],
            ticketId: ticketData.ticketsId
          };
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["get_ticket_external_mapping"], data);
        }
      }, {
        key: "ticketWithdraw",
        value: function ticketWithdraw(ticketId, comments) {
          //debugger
          var data = {
            ticketsId: ticketId,
            withdrawComments: comments
          };
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["withdraw-ticket"], data);
        }
      }, {
        key: "defaultFieldsEdit",
        value: function defaultFieldsEdit(payload) {
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["default-fields-edit"], payload);
        }
      }, {
        key: "starTicket",
        value: function starTicket(ticketId, is_stared, clientId, departmentId, principleMappingId, owner_id) {
          console.log('ok');
          var data = {
            staredTicketId: ticketId,
            ticketId: ticketId,
            isActive: is_stared,
            clientId: clientId,
            departmentId: departmentId,
            principleMappingId: principleMappingId,
            userId: owner_id
          };
          return this.http.post(this.config_data["domain"] + "" + this.config_data["url"]["star-ticket"], data);
        }
      }]);

      return TicketQueueService;
    }();

    TicketQueueService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_Config_config_resource_local__WEBPACK_IMPORTED_MODULE_5__["ConfigResourceService"]
      }];
    };

    TicketQueueService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], TicketQueueService);
    /***/
  },

  /***/
  "./src/environments/environment.prod.ts":
  /*!**********************************************!*\
    !*** ./src/environments/environment.prod.ts ***!
    \**********************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentProdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var environment = {
      production: true
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/rohithvenkatesh/Rohith/git/sf-v2/main/UI-NEW/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
