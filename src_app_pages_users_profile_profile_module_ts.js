"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_pages_users_profile_profile_module_ts"],{

/***/ 9463:
/*!***************************************************************!*\
  !*** ./src/app/pages/users/profile/profile-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 6178);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 4628:
/*!*******************************************************!*\
  !*** ./src/app/pages/users/profile/profile.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-apexcharts */ 4664);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 9463);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 6178);








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__.NgApexchartsModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 6178:
/*!*****************************************************!*\
  !*** ./src/app/pages/users/profile/profile.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _F_Work_Deepak_fronthandtesting_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./profile.page.html */ 9869);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ 3071);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);







let ProfilePage = class ProfilePage {
    constructor(router, userService, alertService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.Payment = [];
        this.Date = [];
        this.currentYear = "2021";
    }
    ngOnInit() {
        this.getCustomer();
        this.getGraphData();
        this.getCurrentYear();
        this.Chart();
        this.Data();
    }
    getCustomer() {
        this.customer = JSON.parse(this.userService.getCustomerFromStorage());
        this.last_visit = this.customer.last_visit;
        this.service = this.customer.service;
        this.payment = this.customer.payment;
    }
    update() {
        let editedDate = this.last_visit.toString();
        if (editedDate.split('-')[1] === this.customer.last_visit.split('-')[1]) {
            this.userService.editProfile(this.customer.customer_data_id, this.customer.customer_id, this.service, this.payment, this.last_visit).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                yield this.alertService.presentToast(data['msg'], 'success');
                yield this.userService.addCusomerToStorage(JSON.stringify(data['customer']));
            }));
        }
        else {
            this.userService.updateProfile(this.customer.customer_id, this.service, this.payment, this.last_visit).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                this.alertService.presentToast(data['msg'], 'success');
                this.userService.addCusomerToStorage(JSON.stringify(data['customer']));
            }));
        }
    }
    getCurrentYear() {
        let date = new Date();
        this.currentYear = String(date.getFullYear());
    }
    getGraphData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.userService.getGraphData(this.customer.customer_id).subscribe(data => {
                data['Payment'].forEach(element => {
                    this.Payment.push(element);
                });
                data['Date'].forEach(element => {
                    this.Date.push(element);
                });
            });
        });
    }
    Data() {
        let i = 0;
        let series = [];
        // while(i<this.Date.length) {
        //   var x = this.Date[i];
        //   var y = this.Payment[i];
        //   series.push([x,y])
        //   i++;
        // }
        for (i = 0; i < this.Date.length; i++) {
            console.log("Hello");
        }
        return series;
    }
    Chart() {
        this.chartOptions = {
            series: [
                {
                    // data: this.Data()
                    data: this.Payment
                }
            ],
            chart: {
                height: 360,
                type: "line",
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false,
                }
            },
            stroke: {
                curve: 'smooth',
            },
            markers: {
                size: 6,
                hover: {
                    size: 10
                }
            },
            fill: {
                colors: ["#00E396"],
                opacity: 0.8,
            },
            tooltip: {
                followCursor: false,
                theme: "dark",
                marker: {
                    show: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function () {
                            return "₹";
                        }
                    }
                }
            },
            xaxis: {
                title: {
                    text: "Year " + this.currentYear
                },
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
            yaxis: {
                title: {
                    text: "Money Spend"
                },
                labels: {
                    minWidth: 10
                },
                min: 0,
                max: 2000,
                tickAmount: 6
            }
        };
    }
    ngOnDestroy() {
        this.userService.remove('customer');
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService }
];
ProfilePage.propDecorators = {
    chart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ["chart",] }]
};
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-profile',
        template: _F_Work_Deepak_fronthandtesting_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 9869:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/users/profile/profile.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{customer.first_name}} {{customer.last_name}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <div class=\"grid\">\r\n        <div>\r\n          <ion-card>\r\n            <ion-card-content>\r\n              <img [src]=\"'data:image/png;base64,'+customer.image_name\">\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </div>\r\n        <div class=\"wrapper\">\r\n          <ion-item>\r\n            <ion-label>First Name:</ion-label>\r\n            <ion-label>{{customer.first_name}}</ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Last Name:</ion-label>\r\n            <ion-label>{{customer.last_name}}</ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Last Visit:</ion-label>\r\n            <ion-input value=\"{{customer.last_visit}}\" type=\"date\" name=\"last_visit\" [(ngModel)]=\"last_visit\"></ion-input>\r\n            <ion-icon name=\"pencil-outline\"></ion-icon>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Service:</ion-label>\r\n            <ion-input value=\"{{customer.service}}\" type=\"text\" name=\"service\" [(ngModel)]=\"service\"></ion-input>\r\n            <ion-icon name=\"pencil-outline\"></ion-icon>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Payment Status:</ion-label>\r\n            <ion-input value=\"{{customer.payment}}\" type=\"number\" name=\"payment\" [(ngModel)]=\"payment\"></ion-input>\r\n            <ion-icon name=\"pencil-outline\"></ion-icon>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Important Dates:</ion-label>\r\n            <ion-label>{{customer.anniversary}}</ion-label>\r\n          </ion-item>\r\n          <ion-button slot=\"end\" (click)=\"update()\">Update</ion-button>\r\n        </div>\r\n      </div>\r\n      <ion-item>\r\n        <ion-label>About Customer</ion-label>\r\n        <ion-label>{{customer.message}}</ion-label>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <apx-chart\r\n      [series]=\"chartOptions.series\"\r\n      [chart]=\"chartOptions.chart\"\r\n      [xaxis]=\"chartOptions.xaxis\"\r\n      [yaxis]=\"chartOptions.yaxis\"\r\n      [stroke]=\"chartOptions.stroke\"\r\n      [markers]=\"chartOptions.markers\"\r\n      [tooltip]=\"chartOptions.tooltip\"\r\n      [fill]=\"chartOptions.fill\"\r\n    ></apx-chart>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ 235:
/*!*******************************************************!*\
  !*** ./src/app/pages/users/profile/profile.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = ".grid {\n  display: grid;\n  grid-template-columns: 0.5fr 1fr;\n}\n\n.grid img {\n  background-position: center;\n  background-size: cover;\n}\n\n.grid .wrapper ion-input {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztBQUNsQzs7QUFIQTtFQUlJLDJCQUEyQjtFQUMzQixzQkFBc0I7QUFHMUI7O0FBUkE7RUFTTSxrQkFBa0I7QUFHeEIiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMWZyO1xyXG4gIGltZ3tcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIC53cmFwcGVye1xyXG4gICAgaW9uLWlucHV0e1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_users_profile_profile_module_ts.js.map