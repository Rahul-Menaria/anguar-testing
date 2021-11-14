"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_pages_users_add-customer_add-customer_module_ts"],{

/***/ 1219:
/*!*************************************************************************!*\
  !*** ./src/app/pages/users/add-customer/add-customer-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCustomerPageRoutingModule": () => (/* binding */ AddCustomerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _add_customer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-customer.page */ 1734);




const routes = [
    {
        path: '',
        component: _add_customer_page__WEBPACK_IMPORTED_MODULE_0__.AddCustomerPage
    }
];
let AddCustomerPageRoutingModule = class AddCustomerPageRoutingModule {
};
AddCustomerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddCustomerPageRoutingModule);



/***/ }),

/***/ 9771:
/*!*****************************************************************!*\
  !*** ./src/app/pages/users/add-customer/add-customer.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCustomerPageModule": () => (/* binding */ AddCustomerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _add_customer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-customer-routing.module */ 1219);
/* harmony import */ var _add_customer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-customer.page */ 1734);







let AddCustomerPageModule = class AddCustomerPageModule {
};
AddCustomerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_customer_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddCustomerPageRoutingModule,
        ],
        declarations: [_add_customer_page__WEBPACK_IMPORTED_MODULE_1__.AddCustomerPage]
    })
], AddCustomerPageModule);



/***/ }),

/***/ 1734:
/*!***************************************************************!*\
  !*** ./src/app/pages/users/add-customer/add-customer.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCustomerPage": () => (/* binding */ AddCustomerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _F_Work_Deepak_fronthandtesting_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_customer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add-customer.page.html */ 8480);
/* harmony import */ var _add_customer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-customer.page.scss */ 4470);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ 3071);
/* harmony import */ var _services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/tokenstorage.service */ 2727);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/alert.service */ 5970);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);








let AddCustomerPage = class AddCustomerPage {
    constructor(userService, tokenStorage, alertService, router) {
        this.userService = userService;
        this.tokenStorage = tokenStorage;
        this.alertService = alertService;
        this.router = router;
    }
    ngOnInit() {
        this.getUserId();
    }
    getUserId() {
        let user = this.tokenStorage.DecodeToken();
        this.user_id = user['user_id'];
    }
    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            this.image_name = event.target.files[0].name;
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (event) => {
                this.image_url = (event.target.result);
            };
        }
    }
    onSubmit(data) {
        console.log(data);
        this.userService.addUser(this.user_id, data, this.image_url, this.image_name).subscribe(data => {
            this.alertService.presentToast(data['msg'], 'success');
            setTimeout(() => {
                this.router.navigate(['/customer']);
            }, 1500);
        });
    }
};
AddCustomerPage.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_3__.TokenStorageService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
AddCustomerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-add-customer',
        template: _F_Work_Deepak_fronthandtesting_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_customer_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_customer_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddCustomerPage);



/***/ }),

/***/ 8480:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/users/add-customer/add-customer.page.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>\r\n        Add a New Customer\r\n      </ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form.value)\">\r\n        <div class=\"grid\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">First Name</ion-label>\r\n            <ion-input type=\"text\" name=\"first_name\" ngModel></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label type=\"text\" position=\"floating\">Last Name</ion-label>\r\n            <ion-input name=\"last_name\" ngModel></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"stacked\">Last Visit Date</ion-label>\r\n            <ion-input type=\"Date\" name=\"last_visit\" ngModel></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"stacked\">Anniversary</ion-label>\r\n            <ion-input type=\"Date\" name=\"anniversary\" ngModel></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Service\r\n            </ion-label>\r\n            <ion-select type=\"text\" name=\"service\" ngModel>\r\n              <ion-select-option value=\"facial\" color=\"black\">Facial</ion-select-option>\r\n              <ion-select-option value=\"oil massage\">Oil Massage</ion-select-option>\r\n              <ion-select-option value=\"head massage\">Head Massage</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Payment Status</ion-label>\r\n            <ion-input type=\"text\" name=\"payment\" ngModel></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"stacked\">Profile Picture</ion-label>\r\n            <div class=\"img\">\r\n              <ion-input type=\"file\" (change)=\"onSelectFile($event)\" accept=\"image/*\"></ion-input>\r\n            </div>\r\n          </ion-item>\r\n\r\n          <div>\r\n            <img [src]=\"image_url\" *ngIf=\"image_url\">\r\n          </div>\r\n          \r\n          <!-- <ion-item>\r\n            <ion-label position=\"floating\">Custom Message</ion-label>\r\n            <ion-select type=\"text\" name=\"custom_message\">\r\n              <ion-select-option value=\"\"></ion-select-option>\r\n              <ion-select-option value=\"\"></ion-select-option>\r\n              <ion-select-option value=\"\"></ion-select-option>\r\n            </ion-select>\r\n          </ion-item> -->\r\n        </div>\r\n        \r\n          <ion-item>\r\n            <ion-label position=\"floating\">Message</ion-label>\r\n            <ion-textarea name=\"message\" ngModel></ion-textarea>\r\n          </ion-item>\r\n\r\n        <ion-button slot=\"end\" type=\"submit\">Submit</ion-button>\r\n      </form>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ 4470:
/*!*****************************************************************!*\
  !*** ./src/app/pages/users/add-customer/add-customer.page.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = ".grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 1rem;\n}\n\n.grid .img {\n  display: flex;\n}\n\nion-title {\n  color: #0a005f;\n}\n\nion-card-title {\n  color: #0e0091;\n}\n\nion-input {\n  color: #3f3f3f;\n}\n\nion-select .text {\n  color: #2000aa;\n}\n\n@media (max-width: 550px) {\n  .grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jdXN0b21lci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGNBQWM7QUFDaEI7O0FBSkE7RUFNSSxhQUFhO0FBRWpCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGNBQWM7QUFFaEI7O0FBQUE7RUFDRSxjQUFjO0FBR2hCOztBQURBO0VBRUksY0FBYztBQUdsQjs7QUFBQTtFQUNFO0lBQ0UsMEJBQTBCO0VBRzVCO0FBQ0YiLCJmaWxlIjoiYWRkLWN1c3RvbWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlke1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdyaWQtZ2FwOiAxcmVtO1xyXG5cclxuICAuaW1ne1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIFxyXG4gIH1cclxufVxyXG5pb24tdGl0bGV7XHJcbiAgY29sb3I6ICMwYTAwNWY7XHJcbn1cclxuaW9uLWNhcmQtdGl0bGV7XHJcbiAgY29sb3I6ICMwZTAwOTE7XHJcbn1cclxuaW9uLWlucHV0e1xyXG4gIGNvbG9yOiAjM2YzZjNmO1xyXG59XHJcbmlvbi1zZWxlY3R7XHJcbiAgLnRleHR7XHJcbiAgICBjb2xvcjogIzIwMDBhYTtcclxuICB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAuZ3JpZHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_users_add-customer_add-customer_module_ts.js.map