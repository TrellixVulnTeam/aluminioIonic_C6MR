(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-select-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/select/select.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select/select.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSelectSelectPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>select</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content [fullscreen]=\"true\" class=\"body\" scroll-y=\"true\">\r\n<br><br><br>\r\n  <div *ngIf=\"this.role != 'user' && this.role != 'vendedor'\">\r\n    <h4>Seleccione que desea ver en su recorido.</h4>\r\n    <a (click)=\"goCalculator()\">\r\n      <ion-card class=\"cardProduct\">\r\n        <div style=\"padding: 70px;\">\r\n          <h2></h2>\r\n        </div>\r\n      </ion-card>\r\n    </a><br>\r\n  \r\n    <a (click)=\"goImportadoras()\">\r\n      <ion-card class=\"cardImportadora\">\r\n        <div style=\"padding: 70px;\">\r\n          <h2></h2>\r\n        </div>\r\n      </ion-card>\r\n    </a>\r\n  </div>\r\n\r\n  <div *ngIf=\"this.role != 'admin' && this.role != 'empresa'\"><br>\r\n    <h4>Seleccione que desea ver en su recorido.</h4><br>\r\n    <a (click)=\"goCortadora()\">\r\n      <ion-card style=\"background: transparent !important;padding: 20px;\">\r\n        <div class=\"cardCortadora\">\r\n          \r\n          <h1>Optimizador</h1>\r\n        </div>\r\n      </ion-card>\r\n    </a>\r\n\r\n    <a (click)=\"goImportadoras()\">\r\n      <ion-card class=\"cardImportadora\">\r\n        <div style=\"padding: 70px;\">\r\n          <h2></h2>\r\n        </div>\r\n      </ion-card>\r\n    </a>\r\n  </div>\r\n\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/select/select-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/select/select-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: SelectPageRoutingModule */

    /***/
    function srcAppSelectSelectRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectPageRoutingModule", function () {
        return SelectPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _select_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./select.page */
      "./src/app/select/select.page.ts");

      var routes = [{
        path: '',
        component: _select_page__WEBPACK_IMPORTED_MODULE_3__["SelectPage"]
      }];

      var SelectPageRoutingModule = function SelectPageRoutingModule() {
        _classCallCheck(this, SelectPageRoutingModule);
      };

      SelectPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SelectPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/select/select.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/select/select.module.ts ***!
      \*****************************************/

    /*! exports provided: SelectPageModule */

    /***/
    function srcAppSelectSelectModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectPageModule", function () {
        return SelectPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _select_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./select-routing.module */
      "./src/app/select/select-routing.module.ts");
      /* harmony import */


      var _select_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./select.page */
      "./src/app/select/select.page.ts");

      var SelectPageModule = function SelectPageModule() {
        _classCallCheck(this, SelectPageModule);
      };

      SelectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _select_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectPageRoutingModule"]],
        declarations: [_select_page__WEBPACK_IMPORTED_MODULE_6__["SelectPage"]]
      })], SelectPageModule);
      /***/
    },

    /***/
    "./src/app/select/select.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/select/select.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppSelectSelectPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".body {\n  --ion-background-color: #2A2A2A !important;\n}\n\nh4 {\n  color: white;\n  text-align: center;\n  padding: 34px;\n}\n\nh2 {\n  text-align: center;\n  color: darkslategrey;\n}\n\n.cardProduct {\n  --background: url(\"/assets/img/slide/sd.png\") no-repeat 50% 50%;\n  background-size: 60%;\n  height: 17%;\n}\n\n.cardImportadora {\n  --background: url(\"/assets/img/slide/importadoras.png\") no-repeat 50% 50%;\n  background-size: 78%;\n  height: 30%;\n  width: 100%;\n}\n\n.cardCortadora {\n  color: white;\n  font-size: 1.8rem;\n  text-align: center;\n}\n\n.icon {\n  font-size: 2.1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0L3NlbGVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQ0FBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtBQUdKOztBQURBO0VBQ0ksK0RBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFJSjs7QUFGQTtFQUNJLHlFQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUtKOztBQUhBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFNSjs7QUFKQTtFQUNJLGlCQUFBO0FBT0oiLCJmaWxlIjoic3JjL2FwcC9zZWxlY3Qvc2VsZWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzJBMkEyQSAhaW1wb3J0YW50O1xyXG59XHJcbmg0e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMzRweDtcclxufVxyXG5oMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG59XHJcbi5jYXJkUHJvZHVjdHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9zbGlkZS9zZC5wbmcnKSBuby1yZXBlYXQgNTAlIDUwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNjAlO1xyXG4gICAgaGVpZ2h0OiAxNyU7ICAgXHJcbn0gICAgXHJcbi5jYXJkSW1wb3J0YWRvcmF7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvc2xpZGUvaW1wb3J0YWRvcmFzLnBuZycpIG5vLXJlcGVhdCA1MCUgNTAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA3OCU7XHJcbiAgICBoZWlnaHQ6IDMwJTsgXHJcbiAgICB3aWR0aDogMTAwJTsgIFxyXG59XHJcbi5jYXJkQ29ydGFkb3Jhe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmljb257XHJcbiAgICBmb250LXNpemU6IDIuMXJlbTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/select/select.page.ts":
    /*!***************************************!*\
      !*** ./src/app/select/select.page.ts ***!
      \***************************************/

    /*! exports provided: SelectPage */

    /***/
    function srcAppSelectSelectPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectPage", function () {
        return SelectPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _providers_auth_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../providers/auth/auth */
      "./src/app/providers/auth/auth.ts");

      var SelectPage = /*#__PURE__*/function () {
        function SelectPage(router, auth) {
          _classCallCheck(this, SelectPage);

          this.router = router;
          this.auth = auth;
          this.isLogged = false;
          this.logs = [];
          this.usuarios$ = [];
        }

        _createClass(SelectPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.onCheckUser();
            this.getUser();
          }
        }, {
          key: "goCalculator",
          value: function goCalculator() {
            this.router.navigate(['/calculadora']);
          }
        }, {
          key: "goImportadoras",
          value: function goImportadoras() {
            this.router.navigate(['/importadoras']);
          }
        }, {
          key: "goCortadora",
          value: function goCortadora() {
            this.router.navigate(['/cortadora-perfil']);
          }
        }, {
          key: "getCurrentUser",
          value: function getCurrentUser() {
            var user_string = localStorage.getItem("currentUser");

            if (user_string) {
              var user = JSON.parse(user_string);
              return user;
            } else {
              return null;
            }
          }
        }, {
          key: "onCheckUser",
          value: function onCheckUser() {
            if (this.getCurrentUser() === null) {
              this.isLogged = false;
            } else {
              this.isLogged = true;
            }
          }
        }, {
          key: "getUser",
          value: function getUser() {
            var _this = this;

            this.logs = JSON.parse(localStorage.getItem('Usuario'));
            this.auth.getUsers('usuariosStorage/', this.logs).subscribe(function (res) {
              _this.usuarios$ = res;
              var user_id = _this.usuarios$.id;
              _this.role = _this.usuarios$.role;
            });
          }
        }]);

        return SelectPage;
      }();

      SelectPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _providers_auth_auth__WEBPACK_IMPORTED_MODULE_3__["AuthProvider"]
        }];
      };

      SelectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./select.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/select/select.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./select.page.scss */
        "./src/app/select/select.page.scss"))["default"]]
      })], SelectPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=select-select-module-es5.js.map