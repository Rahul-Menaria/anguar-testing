"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_pages_users_service_service_module_ts"],{

/***/ 5686:
/*!***************************************************************!*\
  !*** ./src/app/pages/users/service/service-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicePageRoutingModule": () => (/* binding */ ServicePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _service_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service.page */ 3744);




const routes = [
    {
        path: '',
        component: _service_page__WEBPACK_IMPORTED_MODULE_0__.ServicePage
    }
];
let ServicePageRoutingModule = class ServicePageRoutingModule {
};
ServicePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ServicePageRoutingModule);



/***/ }),

/***/ 333:
/*!*******************************************************!*\
  !*** ./src/app/pages/users/service/service.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicePageModule": () => (/* binding */ ServicePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _service_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-routing.module */ 5686);
/* harmony import */ var _service_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service.page */ 3744);







let ServicePageModule = class ServicePageModule {
};
ServicePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _service_routing_module__WEBPACK_IMPORTED_MODULE_0__.ServicePageRoutingModule
        ],
        declarations: [_service_page__WEBPACK_IMPORTED_MODULE_1__.ServicePage]
    })
], ServicePageModule);



/***/ }),

/***/ 3744:
/*!*****************************************************!*\
  !*** ./src/app/pages/users/service/service.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicePage": () => (/* binding */ ServicePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _F_Work_Deepak_fronthandtesting_node_modules_ngtools_webpack_src_loaders_direct_resource_js_service_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./service.page.html */ 3438);
/* harmony import */ var _service_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service.page.scss */ 4379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ 3071);
/* harmony import */ var src_app_services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tokenstorage.service */ 2727);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);







let ServicePage = class ServicePage {
    constructor(tokenStorage, userService, alertServie) {
        this.tokenStorage = tokenStorage;
        this.userService = userService;
        this.alertServie = alertServie;
    }
    ngOnInit() {
        this.getUser();
        this.getService();
        this.getMessage();
        this.getBusinessDetails();
    }
    getUser() {
        let user = this.tokenStorage.DecodeToken();
        this.user_id = user['user_id'];
        this.business_id = user['business_id'];
    }
    show(content) {
        document.getElementById(content).style.display = 'block';
    }
    getBusinessDetails() {
        this.userService.getBusinessDetails(this.user_id).subscribe(data => {
            this.businessName = data['businessName'];
            this.contactNo = data['contactNo'];
        });
    }
    addBusinessDetails() {
        this.userService.addBusinessDetails(this.user_id, this.businessName, this.contactNo).subscribe(data => {
            this.alertServie.presentToast(data['msg'], 'success');
        });
    }
    getService() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.userService.getService(this.user_id).subscribe(data => {
                this.services = data['service'];
            });
        });
    }
    addService() {
        this.userService.addService(this.user_id, this.business_id, this.service).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.alertServie.presentToast(data['msg'], 'success');
            this.service = '';
            document.getElementById('service').style.display = 'none';
            yield this.getService();
        }));
    }
    deleteService(data) {
        this.userService.deleteService(data).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.alertServie.presentToast(data['msg'], 'success');
            yield this.getService();
        }));
    }
    getMessage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.userService.getMessage(this.user_id).subscribe(data => {
                this.messages = data['message'];
            });
        });
    }
    addMessage() {
        this.userService.addMessage(this.user_id, this.business_id, this.message).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.alertServie.presentToast(data['msg'], 'success');
            this.message = '';
            document.getElementById('message').style.display = 'none';
            yield this.getMessage();
        }));
    }
    deleteMessage(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.userService.deleteMessage(data).subscribe(data => {
                this.alertServie.presentToast(data['msg'], 'success');
                this.getMessage();
            });
        });
    }
};
ServicePage.ctorParameters = () => [
    { type: src_app_services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_3__.TokenStorageService },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService }
];
ServicePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-service',
        template: _F_Work_Deepak_fronthandtesting_node_modules_ngtools_webpack_src_loaders_direct_resource_js_service_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_service_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ServicePage);



/***/ }),

/***/ 3438:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/users/service/service.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Service</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      Business Details\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Business Name</ion-label>\r\n        <ion-input name=\"businessName\" type=\"text\" [(ngModel)]=\"businessName\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Contact Info</ion-label>\r\n        <ion-input name=\"contactNo\" type=\"number\" [(ngModel)]=\"contactNo\"></ion-input>\r\n      </ion-item>\r\n      <ion-button (click)=\"addBusinessDetails()\">Add</ion-button>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-item>\r\n        <ion-label>\r\n          Customer Service\r\n        </ion-label>\r\n        <ion-icon name=\"add-circle-outline\" (click)=\"show('service')\" slot=\"end\" color=\"primary\"></ion-icon>\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item *ngFor=\"let service of services\">\r\n          <ion-label>{{service.service_data}}</ion-label>\r\n          <ion-icon (click)=\"deleteService(service.service_id)\" name=\"trash\" slot=\"end\" color=\"danger\"></ion-icon>\r\n        </ion-item>\r\n        <ion-item id=\"service\">\r\n          <ion-label position=\"floating\">Add Service</ion-label>\r\n          <ion-input name=\"service\" [(ngModel)]=\"service\"></ion-input>\r\n          <ion-button slot=\"end\" (click)=\"addService()\">Add</ion-button>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-item>\r\n        <ion-label>\r\n          Custom Messages\r\n        </ion-label>\r\n        <ion-icon name=\"add-circle-outline\" (click)=\"show('message')\" slot=\"end\" color=\"primary\"></ion-icon>\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item *ngFor=\"let message of messages\">\r\n          <ion-label>{{message.text_data}}</ion-label>\r\n          <ion-icon (click)=\"deleteMessage(message.text_id)\" name=\"trash\" slot=\"end\" color=\"danger\"></ion-icon>\r\n        </ion-item>\r\n        <ion-item id=\"message\">\r\n          <ion-label position=\"floating\">Add Message</ion-label>\r\n          <ion-input name=\"message\" [(ngModel)]=\"message\"></ion-input>\r\n          <ion-button slot=\"end\" (click)=\"addMessage()\">Add</ion-button>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ 4379:
/*!*******************************************************!*\
  !*** ./src/app/pages/users/service/service.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "#service, #message {\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNlcnZpY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NlcnZpY2UsICNtZXNzYWdle1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_users_service_service_module_ts.js.map