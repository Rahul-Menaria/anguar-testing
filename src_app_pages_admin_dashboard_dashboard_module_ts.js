"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_pages_admin_dashboard_dashboard_module_ts"],{

/***/ 4673:
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": () => (/* binding */ DashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 3932);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 2477:
/*!***********************************************************!*\
  !*** ./src/app/pages/admin/dashboard/dashboard.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": () => (/* binding */ DashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 4673);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 3932);







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
    })
], DashboardPageModule);



/***/ }),

/***/ 3932:
/*!*********************************************************!*\
  !*** ./src/app/pages/admin/dashboard/dashboard.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _F_Work_Deepak_fronthandtesting_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./dashboard.page.html */ 8202);
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss */ 1512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ 7501);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);
/* harmony import */ var src_app_services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tokenstorage.service */ 2727);








let DashboardPage = class DashboardPage {
    constructor(tokenStorage, adminService, alertService, router) {
        this.tokenStorage = tokenStorage;
        this.adminService = adminService;
        this.alertService = alertService;
        this.router = router;
    }
    ngOnInit() {
        this.getCategory();
        this.getReferals();
    }
    getReferals() {
        this.adminService.getReferals().subscribe(data => {
            this.referals = data;
        });
    }
    deleteReferal(val) {
        this.adminService.deleteReferal(val).subscribe(data => {
            this.referals = data;
        });
    }
    generateReferal() {
        this.adminService.generateReferal().subscribe(data => {
            this.referals = data;
        });
    }
    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            this.template_name = event.target.files[0].name;
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (event) => {
                this.template_url = (event.target.result);
            };
        }
    }
    onSubmit() {
        this.adminService.addTemplate(this.template_url, this.template_name, this.business_id1, this.image_name).subscribe(data => {
            this.alertService.presentToast(data['msg'], 'success');
            this.template_url = '';
            this.image_name = '';
            document.querySelector('ion-input').value = '';
            this.business_id1 = null;
        });
    }
    addCategory() {
        this.adminService.addBusiness(this.category).subscribe(data => {
            this.alertService.presentToast(data['msg'], 'success');
            this.category = '';
        });
    }
    addMessage() {
        this.adminService.addMessage(1, this.business_id2, this.Message).subscribe(data => {
            this.alertService.presentToast(data['msg'], 'success');
            this.Message = '';
            document.querySelector('ion-input').value = '';
            this.business_id2 = null;
        });
    }
    addService() {
        this.adminService.addService(1, this.business_id3, this.service).subscribe(data => {
            this.alertService.presentToast(data['msg'], 'success');
            this.service = '';
            document.querySelector('ion-input').value = '';
            this.business_id3 = null;
        });
    }
    getCategory() {
        this.adminService.getCategory().subscribe(data => {
            this.business_category = data['business'];
        });
    }
    logout() {
        this.tokenStorage.logout();
        this.router.navigateByUrl('/', { replaceUrl: true });
    }
};
DashboardPage.ctorParameters = () => [
    { type: src_app_services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_4__.TokenStorageService },
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__.AdminService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-dashboard',
        template: _F_Work_Deepak_fronthandtesting_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardPage);



/***/ }),

/***/ 8202:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/admin/dashboard/dashboard.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Welcome To Dashboard</ion-title>\r\n    <ion-button slot=\"end\" fill=\"outline\" (click)=\"logout()\">\r\n      <ion-icon name=\"log-out\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>Add Category</ion-card-header>\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Add Category</ion-label>\r\n        <ion-input type=\"text\" name=\"category\" [(ngModel)]=\"category\"></ion-input>\r\n      </ion-item>\r\n      <ion-button (click)=\"addCategory()\">Add</ion-button>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  \r\n  <ion-card>\r\n    <ion-card-header>Add Template</ion-card-header>\r\n      <div class=\"wrapper\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Bussiness Category</ion-label>\r\n          <ion-select [(ngModel)]=\"business_id1\" name=\"business_id1\">\r\n            <ion-select-option *ngFor=\"let business of business_category\" value={{business.business_id}}>{{business.business_name}}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Template Name</ion-label>\r\n          <ion-input name=\"image_name\" [(ngModel)]=\"image_name\"></ion-input>\r\n        </ion-item>\r\n        <ion-input type=\"file\" (change)=\"onSelectFile($event)\" accept=\"image/*\"></ion-input>\r\n        <ion-img [src]=\"template_url\" *ngIf=\"template_url\"></ion-img>\r\n        <ion-button (click)=\"onSubmit()\">Upload</ion-button>\r\n      </div>\r\n  </ion-card>\r\n  \r\n  <ion-card>\r\n    <ion-card-header>Add Default Message</ion-card-header>\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Bussiness Category</ion-label>\r\n        <ion-select [(ngModel)]=\"business_id2\" name=\"business_id2\">\r\n          <ion-select-option *ngFor=\"let business of business_category\" value={{business.business_id}}>{{business.business_name}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Default Message</ion-label>\r\n        <ion-input type=\"text\" name=\"Message\" [(ngModel)]=\"Message\"></ion-input>\r\n      </ion-item>\r\n      <ion-button (click)=\"addMessage()\">Add</ion-button>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  \r\n  <ion-card>\r\n    <ion-card-header>Add Default Services</ion-card-header>\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Bussiness Category</ion-label>\r\n        <ion-select [(ngModel)]=\"business_id3\" name=\"business_id3\">\r\n          <ion-select-option *ngFor=\"let business of business_category\" value={{business.business_id}}>{{business.business_name}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Default Services</ion-label>\r\n        <ion-input type=\"text\" name=\"service\" [(ngModel)]=\"service\"></ion-input>\r\n      </ion-item>\r\n      <ion-button (click)=\"addService()\">Add</ion-button>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card id=\"referal\">\r\n    <ion-card-header >\r\n      <p>Generate Referal</p>\r\n      <ion-button (click)=\"generateReferal()\">Generate Referal</ion-button>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-item id=\"header\">\r\n        <ion-chip>\r\n          <ion-label>Referal Code</ion-label>\r\n          <ion-label>Assigned Status</ion-label>\r\n        </ion-chip>\r\n      </ion-item>\r\n      <ion-item *ngFor=\"let referal of referals\" id=\"content\">\r\n        <ion-chip>{{referal.code}}</ion-chip>\r\n        <ion-chip>{{referal.assigned_status}}</ion-chip>\r\n        <ion-icon name=\"trash\" color=\"danger\" (click)=\"deleteReferal(referal.id)\"></ion-icon>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>");

/***/ }),

/***/ 1512:
/*!***********************************************************!*\
  !*** ./src/app/pages/admin/dashboard/dashboard.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".wrapper {\n  display: flex;\n  flex-direction: column;\n  padding: 0.4rem;\n}\n\n.wrapper ion-item {\n  padding: 0.4rem 0;\n}\n\n.wrapper ion-img {\n  padding: 0.3rem;\n}\n\n#referal ion-card-header {\n  padding: 0.2rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n\n#referal ion-card-header ion-button {\n  margin-top: 2rem;\n}\n\n#referal ion-card-content #header ion-chip {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n#referal ion-card-content #content {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBSkE7RUFLSSxpQkFBaUI7QUFHckI7O0FBUkE7RUFRSSxlQUFlO0FBSW5COztBQUFBO0VBRUksZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBRWpDOztBQVBBO0VBT00sZ0JBQWdCO0FBSXRCOztBQVhBO0VBYVEsV0FBVztFQUNYLGFBQWE7RUFDYiw2QkFBNkI7QUFFckM7O0FBakJBO0VBbUJNLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUVwQyIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDAuNHJlbTtcclxuICBpb24taXRlbXtcclxuICAgIHBhZGRpbmc6IDAuNHJlbSAwO1xyXG4gIH1cclxuICBpb24taW1ne1xyXG4gICAgcGFkZGluZzogMC4zcmVtO1xyXG4gIH1cclxufVxyXG5cclxuI3JlZmVyYWx7XHJcbiAgaW9uLWNhcmQtaGVhZGVye1xyXG4gICAgcGFkZGluZzogMC4ycmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAjaGVhZGVye1xyXG4gICAgICBpb24tY2hpcHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAjY29udGVudHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_admin_dashboard_dashboard_module_ts.js.map