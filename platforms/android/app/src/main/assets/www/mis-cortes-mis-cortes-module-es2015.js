(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mis-cortes-mis-cortes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mis-cortes/mis-cortes.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mis-cortes/mis-cortes.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button disabled=\"true\">\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button><ion-icon name=\"menu-outline\"></ion-icon></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Historial</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <div class=\"contenido\">\r\n    <ion-row style=\"border-bottom: groove; text-align: right;\">\r\n      <ion-col col-4>\r\n        <ion-label><strong>Cliente</strong></ion-label>\r\n      </ion-col>\r\n      <ion-col col-4>\r\n        <ion-label><strong>Celular</strong></ion-label>\r\n      </ion-col>\r\n      <!-- <ion-col col-3>\r\n        <ion-label><strong>Descripción</strong></ion-label>\r\n      </ion-col> -->\r\n      <ion-col col-4>\r\n        <ion-label><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  \r\n    <ion-row style=\"border-bottom: groove;text-align: center;\" *ngFor=\"let element of hoja_calculo_perfil$ \">          \r\n      <ion-col >\r\n        <ion-label>{{element.nombre_cliente }}</ion-label>\r\n      </ion-col>\r\n      <ion-col >\r\n        <ion-label>{{element.celular}}</ion-label>\r\n      </ion-col>\r\n      <!-- <ion-col style=\"max-width: 35%;\">\r\n        <ion-label>{{element.descripcion }}</ion-label>\r\n      </ion-col> -->\r\n     \r\n      <ion-button size=\"small\" color=\"light\" (click)=\"selectOptionHojaPerfil(element)\">\r\n        <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\r\n      </ion-button>      \r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"div\" *ngIf=\"btnbool == true\">\r\n  <div style=\"padding: 2px 1px 2px 2px;overflow: scroll;max-height: 60.5%;\">\r\n    <ion-row style=\"border-bottom: groove;text-align: center !important;\">\r\n      <ion-col col-4>\r\n        <ion-label><strong>Combinacion</strong></ion-label>\r\n      </ion-col>\r\n      <ion-col col-4>\r\n        <ion-label><strong>Linea</strong></ion-label>\r\n      </ion-col>\r\n      <ion-col col-4>\r\n        <ion-label><strong>Ancho</strong> </ion-label>\r\n      </ion-col>\r\n      <ion-col col-4>\r\n        <ion-label><strong>Alto</strong></ion-label>\r\n      </ion-col>\r\n      <ion-col col-4>\r\n        <ion-label><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row style=\"border-bottom: groove;text-align: center !important;\" *ngFor=\"let element of calculoPerfil$ \">\r\n      <ion-col class=\"col\" col-4 *ngIf=\"element.combinacion == 'combinacion1'\">\r\n        <ion-label>Dos Hojas</ion-label>\r\n      </ion-col>\r\n      <ion-col class=\"col\" col-4 *ngIf=\"element.combinacion == 'combinacion4'\">\r\n        <ion-label>Tres Hojas</ion-label>\r\n      </ion-col>\r\n      <ion-col class=\"col\" col-4 *ngIf=\"element.combinacion == 'combinacion5'\">\r\n        <ion-label>Cuatro Hojas</ion-label>\r\n      </ion-col>\r\n      <ion-col col-4 style=\"text-align: center !important;\">\r\n        <ion-label>{{ element.linea }}</ion-label>\r\n      </ion-col>\r\n\r\n      <ion-col col-4 style=\"text-align: center !important;\">\r\n        <ion-label>{{ element.ancho | number:'0.3-3' }}</ion-label>\r\n      </ion-col>\r\n      <ion-col col-4>\r\n        <ion-label>{{ element.alto | number:'0.3-3' }}</ion-label>\r\n      </ion-col>\r\n\r\n      <!-- <ion-input [(ngModel)]=\"hoja_id\" value=\"{{ element.id }}\">{{ element.id }}</ion-input> -->\r\n      <ion-button size=\"small\" color=\"light\" (click)=\"selectOptionPerfil(element)\">\r\n        <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-row>\r\n  </div>\r\n \r\n    <div style=\"overflow: scroll;max-height: 90%;\">\r\n      <ion-row>\r\n        <ion-col class=\"md-12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Nombre Cliente</ion-label>\r\n            <ion-input [(ngModel)]=\"nombre_cliente\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\"><a href=\"tel:{{celular}}\"><ion-icon name=\"call-outline\" slot=\"end\" ></ion-icon></a> Celular *</ion-label>\r\n            <ion-input [(ngModel)]=\"celular\" type=\"tel\" pattern=\"[0-9]*\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    \r\n      <ion-row>\r\n        <ion-col class=\"md-12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Descripcion *</ion-label>\r\n           <ion-input [(ngModel)]=\"descripcion\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-button color=\"dark\" (click)=\"guardarOperacionHoja()\" class=\"float\" style=\"float: right;\">\r\n        <ion-icon name=\"save\"></ion-icon> Guardar\r\n      </ion-button>\r\n\r\n      <ion-button color=\"dark\" (click)=\"cerrarHoja()\" class=\"float\" style=\"float: right;\">\r\n        <ion-icon name=\"close\"></ion-icon> Cerrar\r\n      </ion-button>\r\n    </div>\r\n</ion-footer>\r\n\r\n\r\n<ion-footer class=\"div\" *ngIf=\"btnboolPefil == true\">\r\n  <div style=\"padding: 2px 1px 2px 2px;overflow: scroll;max-height: 31.5%;\">\r\n    <ion-row style=\"border-bottom: groove;text-align: center !important;\" *ngFor=\"let element of calculo_hoja$ \">\r\n      <ion-col col-4>\r\n        <ion-label>{{element.numero1 | number:'0.3-3'}}</ion-label>\r\n      </ion-col>\r\n      <ion-col col-4>\r\n        <ion-label>{{element.numero2 | number:'0.3-3'}}</ion-label>\r\n      </ion-col>\r\n      <ion-col col-4 class=\"col\">\r\n        <ion-label>{{element.resultado }}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"col\">\r\n        <ion-label></ion-label>\r\n      </ion-col>\r\n      <ion-col  class=\"col\">\r\n        <ion-label></ion-label>\r\n      </ion-col>\r\n      <ion-col class=\"col\" style=\"float: right;\">\r\n        <ion-label>&nbsp;&nbsp;{{ suma_m2 | number:'0.1-1' }}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n \r\n    <div style=\"overflow: scroll;max-height: 80%;\">\r\n      <ion-row>\r\n        <ion-col class=\"md-12\">\r\n          <ion-item>\r\n            <ion-label>Combinación</ion-label>\r\n            <ion-select okText=\"Ok\" cancelText=\"Cancelar\" [(ngModel)]=\"combinacion\">\r\n              <ion-select-option value=\"combinacion1\">Dos Hojas</ion-select-option>\r\n              <ion-select-option value=\"combinacion4\">Tres Hojas</ion-select-option>\r\n              <ion-select-option value=\"combinacion5\">Cuatro Hojas</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Ancho *</ion-label>\r\n            <ion-input [(ngModel)]=\"ancho\"  type=\"number\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Alto *</ion-label>\r\n            <ion-input [(ngModel)]=\"alto\" form type=\"number\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"md-12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Linea *</ion-label>\r\n            <ion-select okText=\"Ok\" cancelText=\"Cancelar\" [(ngModel)]=\"linea\">\r\n              <ion-select-option value=\"L-20\">Linea 20</ion-select-option>\r\n              <ion-select-option value=\"L-25\">Linea 25</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-button color=\"dark\" (click)=\"guardarOperacionPerfil()\" class=\"float\" style=\"float: right;\">\r\n        <ion-icon name=\"save\"></ion-icon> Guardar\r\n      </ion-button>\r\n\r\n      <ion-button color=\"dark\" (click)=\"cerrarHoja()\" class=\"float\" style=\"float: right;\">\r\n        <ion-icon name=\"close\"></ion-icon> Cerrar\r\n      </ion-button>\r\n    </div>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/mis-cortes/mis-cortes-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/mis-cortes/mis-cortes-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: MisCortesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisCortesPageRoutingModule", function() { return MisCortesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mis_cortes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mis-cortes.page */ "./src/app/mis-cortes/mis-cortes.page.ts");




const routes = [
    {
        path: '',
        component: _mis_cortes_page__WEBPACK_IMPORTED_MODULE_3__["MisCortesPage"]
    }
];
let MisCortesPageRoutingModule = class MisCortesPageRoutingModule {
};
MisCortesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MisCortesPageRoutingModule);



/***/ }),

/***/ "./src/app/mis-cortes/mis-cortes.module.ts":
/*!*************************************************!*\
  !*** ./src/app/mis-cortes/mis-cortes.module.ts ***!
  \*************************************************/
/*! exports provided: MisCortesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisCortesPageModule", function() { return MisCortesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _mis_cortes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mis-cortes-routing.module */ "./src/app/mis-cortes/mis-cortes-routing.module.ts");
/* harmony import */ var _mis_cortes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mis-cortes.page */ "./src/app/mis-cortes/mis-cortes.page.ts");







let MisCortesPageModule = class MisCortesPageModule {
};
MisCortesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _mis_cortes_routing_module__WEBPACK_IMPORTED_MODULE_5__["MisCortesPageRoutingModule"]
        ],
        declarations: [_mis_cortes_page__WEBPACK_IMPORTED_MODULE_6__["MisCortesPage"]]
    })
], MisCortesPageModule);



/***/ }),

/***/ "./src/app/mis-cortes/mis-cortes.page.scss":
/*!*************************************************!*\
  !*** ./src/app/mis-cortes/mis-cortes.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  color: black;\n  font-size: 1.1rem;\n}\n\n.contenido {\n  padding: 10px;\n}\n\n.div {\n  margin: auto;\n  background: steelblue;\n}\n\n.col {\n  Word-wrap: break-Word;\n  max-width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWlzLWNvcnRlcy9taXMtY29ydGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNFO0VBQ0UsYUFBQTtBQUVKOztBQUFFO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0FBR0o7O0FBQ0U7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9taXMtY29ydGVzL21pcy1jb3J0ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVse1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgfVxyXG4gIC5jb250ZW5pZG97XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICAuZGl2e1xyXG4gICAgbWFyZ2luOiAgICAgYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHN0ZWVsYmx1ZTtcclxuICAgIC8vIGhlaWdodDogNDAlO1xyXG4gICAgLy8gb3ZlcmZsb3c6IHNjcm9sbDtcclxuICB9IFxyXG4gIC5jb2x7XHJcbiAgICBXb3JkLXdyYXA6IGJyZWFrLVdvcmQ7XHJcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gIH1cclxuIl19 */");

/***/ }),

/***/ "./src/app/mis-cortes/mis-cortes.page.ts":
/*!***********************************************!*\
  !*** ./src/app/mis-cortes/mis-cortes.page.ts ***!
  \***********************************************/
/*! exports provided: MisCortesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisCortesPage", function() { return MisCortesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_auth_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/auth/auth */ "./src/app/providers/auth/auth.ts");
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ "./node_modules/@awesome-cordova-plugins/in-app-browser/__ivy_ngcc__/ngx/index.js");







let MisCortesPage = class MisCortesPage {
    constructor(auth, alertController, actionSheetController, _formBuilder, toastController, iab) {
        this.auth = auth;
        this.alertController = alertController;
        this.actionSheetController = actionSheetController;
        this._formBuilder = _formBuilder;
        this.toastController = toastController;
        this.iab = iab;
        this.calculoPerfil$ = [];
        this.hoja_calculo_perfil$ = [];
        this.logs = [];
        this.usuarios$ = [];
        this.data = [];
        this.data1 = [];
        this.estado = "false";
    }
    ngOnInit() {
        this.getUser();
        this.dataFormHistorial = this.createFormHist();
    }
    getHojaCalculo(user_id) {
        this.auth.getAllObjectById('getHojaCalculoPerfilEditapp/', user_id)
            .subscribe((res) => {
            this.hoja_calculo_perfil$ = res;
            // console.log(this.hoja_calculo_perfil$);
        });
    }
    getPerfils(user_id, hoja_id) {
        console.log(this.hoja_id);
        this.auth.getAllObjectByIdPerfils('getHistorialCalculos/', user_id, hoja_id)
            .subscribe((res) => {
            this.calculoPerfil$ = res;
            // console.log(this.calculoPerfil$);
        });
    }
    selectOptionHojaPerfil(element) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Opciones Historial Cortes',
                cssClass: 'my-custom-class',
                buttons: [{
                        text: 'Eliminar',
                        role: 'destructive',
                        icon: 'trash',
                        handler: () => {
                            this.deleteHojaCalculo(element);
                        }
                    }, {
                        text: 'Editar',
                        icon: 'create',
                        handler: () => {
                            this.btnboolean();
                            this.id = element.id;
                            this.nombre_cliente = element.nombre_cliente;
                            this.celular = element.celular;
                            this.descripcion = element.descripcion;
                            this.user_id = element.user_id;
                            this.getPerfils(this.user_id, this.id);
                        }
                    }, {
                        text: 'Cancelar',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            actionSheet.dismiss();
                        }
                    },
                    {
                        text: 'Ver Historial en la Web',
                        role: 'view',
                        icon: 'globe',
                        handler: () => {
                            this.goWeb(element.id);
                        }
                    }]
            });
            yield actionSheet.present();
            const { role } = yield actionSheet.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    goWeb(id) {
        const browser = this.iab.create('https://altools.es/hojaCalculo/' + id);
        // browser.executeScript( { code: "\
        //   var message = 'this is the message';\
        //   var messageObj = {my_message: message};\
        //   var stringifiedMessageObj = JSON.stringify(messageObj);\
        //   webkit.messageHandlers.cordova_iab.postMessage(stringifiedMessageObj);"
        // });
        browser.on('loadstop').subscribe(event => {
            browser.insertCSS({ code: "body{color: black;" });
        });
        browser.show();
        // this.router.navigateByUrl('https://altools.es/api/hojaCalculo/'+ id);
        // window.open('https://altools.es/hojaCalculo/'+id, '_system', 'location=yes'); return false;
    }
    selectOptionPerfil(element) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Opciones Perfiles',
                cssClass: 'my-custom-class',
                buttons: [{
                        text: 'Eliminar',
                        role: 'destructive',
                        icon: 'trash',
                        handler: () => {
                            this.deletePerfil(element);
                        }
                    }, {
                        text: 'Editar',
                        icon: 'create',
                        handler: () => {
                            this.cerrar();
                            this.btnbooleanPerfil();
                            this.id = element.id;
                            this.alto = element.alto;
                            this.ancho = element.ancho;
                            this.linea = element.linea;
                            this.combinacion = element.combinacion;
                        }
                    }, {
                        text: 'Cancelar',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            actionSheet.dismiss();
                        }
                    }]
            });
            yield actionSheet.present();
            const { role } = yield actionSheet.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    btnbooleanPerfil() {
        return this.btnboolPefil = true;
    }
    cerrarHoja() {
        return this.btnboolPefil = false;
    }
    btnboolean() {
        return this.btnbool = true;
    }
    cerrar() {
        return this.btnbool = false;
    }
    createFormHist() {
        return this._formBuilder.group({
            combinacion: [this.combinacion],
            ancho: [this.ancho, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            alto: [this.alto, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            linea: [this.linea, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
    }
    guardarOperacionHoja(element) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Actualización',
                message: '¿Desea Actualizar este Item?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            let data = this._formBuilder.group({
                                id: [this.id],
                                nombre_cliente: [this.nombre_cliente, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                                celular: [this.celular, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                                descripcion: [this.descripcion, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                            });
                            this.data1 = data.value;
                            let a = this.data1.id;
                            console.log(this.data1);
                            if (data.valid) {
                                this.auth.updateObjectById('updateStatusHojaAll/', a, this.data1).subscribe((datav) => {
                                    console.log(datav);
                                    window.location.reload();
                                });
                            }
                            else {
                                this.presentToast("Ingrese Datos para Actualizar");
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    guardarOperacionPerfil() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Actualización',
                message: '¿Desea Actualizar este Item?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            let data = this._formBuilder.group({
                                id: this.id,
                                ancho: this.ancho,
                                alto: this.alto,
                                linea: [this.linea, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                                combinacion: [this.combinacion, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                                estado: [this.estado, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                            });
                            this.data1 = data.value;
                            let a = this.data1.id;
                            // console.log(this.data1);
                            if (data.valid) {
                                this.auth.updateObjectById('actualizarPerfil/', a, this.data1).subscribe((datav) => {
                                    // console.log(datav);
                                    window.location.reload();
                                });
                            }
                            else {
                                this.presentToast("Ingrese Datos para Actualizar");
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000
            });
            toast.present();
        });
    }
    deleteHojaCalculo(element) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: '¿Desea Eliminar este Elemento?',
                message: '',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            return false;
                            //console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Si',
                        handler: () => {
                            this.auth.deleteObjectById('deleteHojaPerfil/', element.id).subscribe(res => {
                                console.log("Hoja Eliminada");
                                window.location.reload();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deletePerfil(element) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: '¿Desea Eliminar este Elemento?',
                message: '',
                buttons: [{
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            return false;
                            //console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Si',
                        handler: () => {
                            this.postDeletePerfil(element);
                            window.location.reload();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    postDeletePerfil(element) {
        this.auth.deleteObjectById('deletePerfil/', element.id).subscribe(res => {
        });
    }
    doRefresh(event) {
        window.location.reload();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    getUser() {
        this.logs = JSON.parse(localStorage.getItem('Usuario'));
        this.auth.getUsers('usuariosStorage/', this.logs).subscribe((res) => {
            this.usuarios$ = res;
            let user_id = this.usuarios$.id;
            this.role = this.usuarios$.role;
            console.log(this.role);
            // this.getPerfils(user_id);
            this.getHojaCalculo(user_id);
        });
    }
};
MisCortesPage.ctorParameters = () => [
    { type: _providers_auth_auth__WEBPACK_IMPORTED_MODULE_4__["AuthProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] }
];
MisCortesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mis-cortes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mis-cortes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mis-cortes/mis-cortes.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mis-cortes.page.scss */ "./src/app/mis-cortes/mis-cortes.page.scss")).default]
    })
], MisCortesPage);



/***/ })

}]);
//# sourceMappingURL=mis-cortes-mis-cortes-module-es2015.js.map