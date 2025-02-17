(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~importadoras-importadoras-module~mis-productos-mis-productos-module~pedidomodal-pedidomodal-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pedidomodal/pedidomodal.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pedidomodal/pedidomodal.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content >\n  <ion-card style=\"padding: 14px;\">\n    <form [formGroup]=\"dataCarrito\" (ngSubmit)=crearCarrito()>\n     <ion-input [(ngModel)]=\"usuarios$.id\" formControlName=\"user_id\" disabled=\"true\" hidden=\"true\"></ion-input>\n    \n    </form>\n    <div *ngIf=\"btnCarrito == true\">\n      <ion-button color=\"primary\" (click)=\"crearCarrito();\">Crear Carrito</ion-button>\n    </div>\n\n    <ion-item>\n      <p>Codigo: </p>\n      <ion-note slot=\"end\" color=\"dark\">{{ codigo }}</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <p>Producto: </p>\n      <ion-note slot=\"end\" color=\"dark\">{{ nombre }}</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <p>Importadora: </p>\n      <ion-note slot=\"end\" color=\"dark\">{{ importadora }}</ion-note>\n    </ion-item>\n\n    \n    <form [formGroup]=\"dataForm\" (ngSubmit)=postPedido()>\n      <ion-input type=\"text\" formControlName=\"importadora_carrito\" value=\"{{carrito$.importadora}}\" hidden=\"true\"></ion-input>\n      <ion-row>\n          <h5 class=\"h5s\">Cantidad a pedir</h5> \n      </ion-row>\n      <ion-row >\n        <input type=\"text\" value=\"{{carrito$.id}}\" [(ngModel)]=\"carrito$.id\" hidden=\"true\" formControlName=\"carro_id\">\n        \n        <ion-col col-4>\n          <div class=\"wrapper\">\n          <ion-button color=\"dark\" class=\"plusminus\" (click)=\"handleMinus()\"><strong>-</strong></ion-button>&nbsp;\n          <!-- <input type=\"number\" class=\"num\" formControlName=\"cantidad_pedido\" \n          [(ngModel)]=\"value\" [ngModelOptions]='{standalone: true}'/> -->\n          <input type=\"number\" class=\"num\" formControlName=\"cantidad_pedido\" \n          [(ngModel)]=\"value\" />\n          <ion-button color=\"dark\" class=\"plusminus\" (click)=\"handlePlus()\" style=\"margin-left: 2.5px;\"><strong>+</strong></ion-button>\n        </div>\n        </ion-col>\n        <ion-col col-4>\n          <ion-item class=\"backItem\">\n            <ion-label>Color</ion-label>\n            <ion-select cancelText=\"Cancelar\" okText=\"Enviar\" formControlName=\"color\">\n              <ion-select-option value=\"Natural\">Natural</ion-select-option>\n              <ion-select-option value=\"Titanio\">Titanio</ion-select-option>\n              <ion-select-option value=\"Champagne\">Champagne</ion-select-option>\n              <ion-select-option value=\"Bronce\">Bronce</ion-select-option>\n              <ion-select-option value=\"Negro\">Negro</ion-select-option>\n              <ion-select-option value=\"Blanco\">Blanco</ion-select-option>\n              <ion-select-option value=\"Madera\">Madera</ion-select-option>\n              <!-- <ion-select-option value=\"Rojo\">Rojo</ion-select-option>\n              <ion-select-option value=\"Verde\">Verde</ion-select-option>\n              <ion-select-option value=\"Azul\">Azul</ion-select-option>\n              <ion-select-option value=\"Amarillo\">Amarillo</ion-select-option>\n              <ion-select-option value=\"Plomo\">Plomo</ion-select-option>\n              <ion-select-option value=\"Rosado\">Rosado</ion-select-option>\n              <ion-select-option value=\"Turquesa\">Turquesa</ion-select-option>\n              <ion-select-option value=\"Cafe\">Cafe</ion-select-option>\n              <ion-select-option value=\"Violeta\">Violeta</ion-select-option>\n              <ion-select-option value=\"Naranja\">Naranja</ion-select-option> -->\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"md-12\">\n          <ion-item>\n            <ion-label position=\"floating\">Descripción</ion-label>\n            <ion-input formControlName=\"descripcion\" type=\"text\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <br>\n      <ion-row>\n        <p><Strong>* Nota:</Strong>&nbsp; Se mandarán la solicitud de pedido y \n          el proveedor(importadora) se comunicara con usted.</p>\n      </ion-row><br> \n      <ion-input  formControlName=\"importadora_producto\" value=\"{{importadora}}\" hidden=\"true\"></ion-input>\n      <ion-input [(ngModel)]=\"usuarios$.id\" formControlName=\"user_id\" disabled=\"true\" hidden=\"true\"></ion-input>\n\n      <ion-row style=\"float: right;\">\n        <ion-button color=\"dark\"  type=\"submit\">\n          <ion-icon slot=\"start\" name=\"cart-sharp\">\n        </ion-icon>Mandar Pedido</ion-button>\n      </ion-row>\n    </form>\n    \n    <ion-row style=\"float: left;\">\n      <ion-button color=\"dark\" (click)=\"dismiss()\">\n        <ion-icon slot=\"start\" name=\"arrow-back-sharp\">\n      </ion-icon>Atras</ion-button>\n    </ion-row>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pedidomodal/pedidomodal.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pedidomodal/pedidomodal.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input {\n  text-align: center;\n  border: 1px solid #6C757D;\n}\n\ninput[type=number] {\n  -webkit-appearance: textfield !important;\n  -moz-appearance: textfield !important;\n  appearance: textfield !important;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n}\n\n.wrapper {\n  border: 2px #dcd3d3 solid;\n  width: 41vw;\n  height: 50px;\n  padding: 10px;\n  display: flex;\n  border-radius: 15px;\n}\n\n.plusminus {\n  height: 80%;\n  width: 24%;\n  margin-right: 1.5px;\n  border: none;\n  font-size: 0.9rem;\n}\n\n.num {\n  height: 100%;\n  width: 39%;\n  border: none;\n  font-size: 30px;\n}\n\nhr {\n  border-top: 1px solid gray;\n}\n\n.h5s {\n  padding-left: 5px;\n  margin-bottom: 6px;\n}\n\nh2 {\n  color: black;\n}\n\n.item-native {\n  background: transparent !important;\n}\n\nion-note {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVkaWRvbW9kYWwvcGVkaWRvbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUdFO0VBQ0Usd0NBQUE7RUFDQSxxQ0FBQTtFQUNBLGdDQUFBO0FBQUo7O0FBR0U7O0VBRUksd0JBQUE7QUFBTjs7QUFHRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUU7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBREo7O0FBR0U7RUFDRSwwQkFBQTtBQUFKOztBQUVFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNFO0VBQ0MsWUFBQTtBQUVIOztBQUFDO0VBQ0Msa0NBQUE7QUFHRjs7QUFBQztFQUNFLGlCQUFBO0FBR0giLCJmaWxlIjoic3JjL2FwcC9wZWRpZG9tb2RhbC9wZWRpZG9tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL0JVVFRPTlxyXG5pbnB1dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2Qzc1N0Q7XHJcbiAgfSBcclxuICBcclxuICBpbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkICFpbXBvcnRhbnQ7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZCAhaW1wb3J0YW50O1xyXG4gICAgYXBwZWFyYW5jZTogdGV4dGZpZWxkICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG4gIGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAud3JhcHBlciB7XHJcbiAgICBib3JkZXI6IDJweCAjZGNkM2QzIHNvbGlkO1xyXG4gICAgd2lkdGg6IDQxdnc7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wbHVzbWludXMge1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICB3aWR0aDogMjQlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVweDtcclxuICAgIC8vIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5udW0ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDM5JTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbiAgaHJ7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcclxuICB9XHJcbiAgLmg1c3tcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gIH1cclxuICBoMntcclxuICAgY29sb3I6IGJsYWNrO1xyXG4gfVxyXG4gLml0ZW0tbmF0aXZle1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuIH1cclxuIGlvbi1ub3Rle1xyXG4gICBmb250LXNpemU6IDAuOXJlbTtcclxuIH0iXX0= */");

/***/ }),

/***/ "./src/app/pedidomodal/pedidomodal.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pedidomodal/pedidomodal.page.ts ***!
  \*************************************************/
/*! exports provided: PedidomodalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidomodalPage", function() { return PedidomodalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _providers_auth_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/auth/auth */ "./src/app/providers/auth/auth.ts");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");






let PedidomodalPage = class PedidomodalPage {
    constructor(modalController, _formBuilder, auth, loadingController, alertController, restangular, toastController) {
        this.modalController = modalController;
        this._formBuilder = _formBuilder;
        this.auth = auth;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.restangular = restangular;
        this.toastController = toastController;
        this.data = '';
        this.carrito$ = [];
        this.logs = [];
        this.usuarios$ = [];
        this.name = 'Angular ' + _angular_core__WEBPACK_IMPORTED_MODULE_1__["VERSION"].major;
        this.value = 0;
    }
    ngOnInit() {
        this.getUser();
        this.dataForm = this.createForm();
        this.dataCarrito = this.data_Carrito();
    }
    getmyCars(user_id) {
        this.auth.getCarrito('getCartAttribute/', user_id)
            .subscribe((res) => {
            this.carrito$ = res;
            // console.log(this.carrito$.importadora);
            //this.carrito$ = Object.values(this.carrito$);
            if (this.carrito$.estado == 'false') {
                this.btnCarrito = false;
                //console.log("si hay algo");
            }
            else {
                //console.log("no lo hay");
                this.btnCarrito = true;
            }
            //this.loadData();
        });
    }
    createForm() {
        return this._formBuilder.group({
            //id : [this.id], //pertenece al id del producto
            //estado: [this.estado,Validators.compose([Validators.required])],
            carro_id: [this.data.carro_id],
            importadora: [this.importadora, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            descripcion: [this.descripcion],
            color: [this.data.color],
            cantidad_pedido: [this.data.cantidad_pedido],
            nombre: [this.nombre],
            imagen: [this.imagen],
            precio: [this.precio],
            ancho: [this.ancho],
            alto: [this.alto],
            importadora_carrito: [this.importadora_carrito],
            codigo: [this.codigo],
            tipo_medida: [this.tipo_medida],
            categorias_id: [this.categorias_id],
            subcategorias_id: [this.subcategorias_id],
        });
    }
    postPedido() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: '¿Agregar Producto a Carrito?',
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
                            this.submitData();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    submitData() {
        let data_producto = this.dataForm.value;
        console.log(data_producto);
        let carrito_importadora = data_producto.importadora_carrito;
        let importadora_producto = data_producto.importadora;
        if (this.btnCarrito == false) {
            if (carrito_importadora === importadora_producto) {
                this.restangular.all('guardarPedido').post(data_producto).subscribe((datav) => {
                    this.dismiss();
                    this.presentLoading("Guardando Pedido");
                });
            }
            else {
                this.dismiss();
                this.presentToast("Solo agregar productos de una misma importadora");
            }
        }
        else {
            this.dismiss();
            this.presentToast("Primero Cree un Carrito");
            (error) => {
                console.log(error);
            };
        }
    }
    data_Carrito() {
        let estado = "false";
        let confirmacion = "false";
        return this._formBuilder.group({
            estado: [estado],
            confirmacion: [confirmacion],
            importadora: [this.importadora],
            descripcion: [this.descripcion],
            user_id: [this.user_id],
        });
    }
    crearCarrito() {
        let data = this.dataCarrito.value;
        console.log(data);
        if (data) {
            this.restangular.all('guardarCarrito').post(data).subscribe((datav) => {
                this.dismiss();
                this.presentLoading("Creando Carrito");
            });
        }
        else {
            (error) => {
                console.log(error);
            };
        }
    }
    presentLoading(mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'loading',
                message: mensaje,
                duration: 4000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
        });
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Carrito',
                //subHeader: 'Subtitle',
                message: 'Se añadio a Carrito',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    handleMinus() {
        this.value--;
    }
    handlePlus() {
        this.value++;
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
    getUser() {
        this.logs = JSON.parse(localStorage.getItem('Usuario'));
        this.auth.getUsers('usuariosStorage/', this.logs).subscribe((res) => {
            this.usuarios$ = res;
            let user_id = this.usuarios$.id;
            this.getmyCars(user_id);
        });
    }
};
PedidomodalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _providers_auth_auth__WEBPACK_IMPORTED_MODULE_4__["AuthProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_5__["Restangular"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
PedidomodalPage.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nombre: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    importadora: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disponibilidad: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    confirmacion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    codigo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    descripcion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    imagen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    novedad: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    precio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    alto: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    ancho: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    puntuacion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    categorias_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    subcategorias_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    tipo_medida: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
PedidomodalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pedidomodal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pedidomodal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pedidomodal/pedidomodal.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pedidomodal.page.scss */ "./src/app/pedidomodal/pedidomodal.page.scss")).default]
    })
], PedidomodalPage);



/***/ })

}]);
//# sourceMappingURL=default~importadoras-importadoras-module~mis-productos-mis-productos-module~pedidomodal-pedidomodal-module-es2015.js.map