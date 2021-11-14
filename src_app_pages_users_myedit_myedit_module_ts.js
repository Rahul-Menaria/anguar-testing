"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_pages_users_myedit_myedit_module_ts"],{

/***/ 4677:
/*!*************************************************************!*\
  !*** ./src/app/pages/users/myedit/myedit-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyeditPageRoutingModule": () => (/* binding */ MyeditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _myedit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myedit.page */ 3295);




const routes = [
    {
        path: '',
        component: _myedit_page__WEBPACK_IMPORTED_MODULE_0__.MyeditPage
    }
];
let MyeditPageRoutingModule = class MyeditPageRoutingModule {
};
MyeditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyeditPageRoutingModule);



/***/ }),

/***/ 7741:
/*!*****************************************************!*\
  !*** ./src/app/pages/users/myedit/myedit.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyeditPageModule": () => (/* binding */ MyeditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _myedit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myedit-routing.module */ 4677);
/* harmony import */ var _myedit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myedit.page */ 3295);







let MyeditPageModule = class MyeditPageModule {
};
MyeditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _myedit_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyeditPageRoutingModule
        ],
        declarations: [_myedit_page__WEBPACK_IMPORTED_MODULE_1__.MyeditPage]
    })
], MyeditPageModule);



/***/ }),

/***/ 3295:
/*!***************************************************!*\
  !*** ./src/app/pages/users/myedit/myedit.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyeditPage": () => (/* binding */ MyeditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _F_Work_Deepak_fronthandtesting_node_modules_ngtools_webpack_src_loaders_direct_resource_js_myedit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./myedit.page.html */ 7512);
/* harmony import */ var _myedit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myedit.page.scss */ 3322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tokenstorage.service */ 2727);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ 3071);






let MyeditPage = class MyeditPage {
    constructor(userService, tokenStorage) {
        this.userService = userService;
        this.tokenStorage = tokenStorage;
    }
    ngOnInit() {
        this.getUser();
        this.getTemplates();
    }
    getUser() {
        let user = this.tokenStorage.DecodeToken();
        this.user_id = user['user_id'];
    }
    getTemplates() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.userService.getEditedTemplate(this.user_id).subscribe(data => {
                this.templates = data['template'];
            });
        });
    }
};
MyeditPage.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_2__.TokenStorageService }
];
MyeditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-myedit',
        template: _F_Work_Deepak_fronthandtesting_node_modules_ngtools_webpack_src_loaders_direct_resource_js_myedit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_myedit_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyeditPage);



/***/ }),

/***/ 7512:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/users/myedit/myedit.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>My Edits</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"grid\">\r\n    <ion-card *ngFor=\"let template of templates\">\r\n      <ion-card-content >\r\n        <ion-img [src]=\"'data:image/png;base64,'+template.template_name\"></ion-img>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 3322:
/*!*****************************************************!*\
  !*** ./src/app/pages/users/myedit/myedit.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = ".grid {\n  margin: 1rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-gap: 1rem;\n}\n\n.grid ion-card {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.grid ion-card ion-img {\n  opacity: 0.6;\n  z-index: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15ZWRpdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDREQUEyRDtFQUMzRCxjQUFjO0FBQ2hCOztBQUxBO0VBTUksa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBR3ZCOztBQVpBO0VBWU0sWUFBWTtFQUNaLFVBQVU7QUFJaEIiLCJmaWxlIjoibXllZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlke1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCxtaW5tYXgoMzAwcHgsIDFmcikpO1xyXG4gIGdyaWQtZ2FwOiAxcmVtO1xyXG4gIGlvbi1jYXJke1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG4gICAgaW9uLWltZ3tcclxuICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_users_myedit_myedit_module_ts.js.map