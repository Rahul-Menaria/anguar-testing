"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_errors_pagenotfound_pagenotfound_module_ts"],{

/***/ 2694:
/*!********************************************************************!*\
  !*** ./src/app/errors/pagenotfound/pagenotfound-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagenotfoundPageRoutingModule": () => (/* binding */ PagenotfoundPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _pagenotfound_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagenotfound.page */ 1735);




const routes = [
    {
        path: '',
        component: _pagenotfound_page__WEBPACK_IMPORTED_MODULE_0__.PagenotfoundPage
    }
];
let PagenotfoundPageRoutingModule = class PagenotfoundPageRoutingModule {
};
PagenotfoundPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PagenotfoundPageRoutingModule);



/***/ }),

/***/ 4234:
/*!************************************************************!*\
  !*** ./src/app/errors/pagenotfound/pagenotfound.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagenotfoundPageModule": () => (/* binding */ PagenotfoundPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _pagenotfound_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagenotfound-routing.module */ 2694);
/* harmony import */ var _pagenotfound_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagenotfound.page */ 1735);







let PagenotfoundPageModule = class PagenotfoundPageModule {
};
PagenotfoundPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pagenotfound_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagenotfoundPageRoutingModule
        ],
        declarations: [_pagenotfound_page__WEBPACK_IMPORTED_MODULE_1__.PagenotfoundPage]
    })
], PagenotfoundPageModule);



/***/ }),

/***/ 1735:
/*!**********************************************************!*\
  !*** ./src/app/errors/pagenotfound/pagenotfound.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagenotfoundPage": () => (/* binding */ PagenotfoundPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _F_Work_Deepak_fronthandtesting_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pagenotfound_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./pagenotfound.page.html */ 4493);
/* harmony import */ var _pagenotfound_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagenotfound.page.scss */ 1836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




let PagenotfoundPage = class PagenotfoundPage {
    constructor() { }
    ngOnInit() {
    }
};
PagenotfoundPage.ctorParameters = () => [];
PagenotfoundPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pagenotfound',
        template: _F_Work_Deepak_fronthandtesting_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pagenotfound_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pagenotfound_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PagenotfoundPage);



/***/ }),

/***/ 4493:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/errors/pagenotfound/pagenotfound.page.html ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Oops! 404 Page not found</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 1836:
/*!************************************************************!*\
  !*** ./src/app/errors/pagenotfound/pagenotfound.page.scss ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlbm90Zm91bmQucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_errors_pagenotfound_pagenotfound_module_ts.js.map