(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-erziehungsberechtigte-erziehungsberechtigte-dashboard-erziehungsberechtigte-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/erziehungsberechtigte/erziehungsberechtigte-dashboard/erziehungsberechtigte-dashboard.page.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/erziehungsberechtigte/erziehungsberechtigte-dashboard/erziehungsberechtigte-dashboard.page.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-button click=\"logout()\">\n            <ion-icon name=\"log-out\"></ion-icon>\n      </ion-button>\n      </ion-buttons>\n      <ion-title>Eltern-dashboard</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n  \n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/erziehungsberechtigte/erziehungsberechtigte-dashboard/erziehungsberechtigte-dashboard.module.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/erziehungsberechtigte/erziehungsberechtigte-dashboard/erziehungsberechtigte-dashboard.module.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ErziehungsberechtigteDashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErziehungsberechtigteDashboardPageModule", function() { return ErziehungsberechtigteDashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _erziehungsberechtigte_dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./erziehungsberechtigte-dashboard.page */ "./src/app/pages/erziehungsberechtigte/erziehungsberechtigte-dashboard/erziehungsberechtigte-dashboard.page.ts");







var routes = [
    {
        path: '',
        component: _erziehungsberechtigte_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["ErziehungsberechtigteDashboardPage"]
    }
];
var ErziehungsberechtigteDashboardPageModule = /** @class */ (function () {
    function ErziehungsberechtigteDashboardPageModule() {
    }
    ErziehungsberechtigteDashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_erziehungsberechtigte_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["ErziehungsberechtigteDashboardPage"]]
        })
    ], ErziehungsberechtigteDashboardPageModule);
    return ErziehungsberechtigteDashboardPageModule;
}());



/***/ }),

/***/ "./src/app/pages/erziehungsberechtigte/erziehungsberechtigte-dashboard/erziehungsberechtigte-dashboard.page.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/erziehungsberechtigte/erziehungsberechtigte-dashboard/erziehungsberechtigte-dashboard.page.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VyemllaHVuZ3NiZXJlY2h0aWd0ZS9lcnppZWh1bmdzYmVyZWNodGlndGUtZGFzaGJvYXJkL2VyemllaHVuZ3NiZXJlY2h0aWd0ZS1kYXNoYm9hcmQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/erziehungsberechtigte/erziehungsberechtigte-dashboard/erziehungsberechtigte-dashboard.page.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/erziehungsberechtigte/erziehungsberechtigte-dashboard/erziehungsberechtigte-dashboard.page.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ErziehungsberechtigteDashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErziehungsberechtigteDashboardPage", function() { return ErziehungsberechtigteDashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");



var ErziehungsberechtigteDashboardPage = /** @class */ (function () {
    function ErziehungsberechtigteDashboardPage(auth) {
        this.auth = auth;
    }
    ErziehungsberechtigteDashboardPage.prototype.ngOnInit = function () {
    };
    ErziehungsberechtigteDashboardPage.prototype.logout = function () {
        this.auth.logout();
    };
    ErziehungsberechtigteDashboardPage.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    ErziehungsberechtigteDashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-erziehungsberechtigte-dashboard',
            template: __webpack_require__(/*! raw-loader!./erziehungsberechtigte-dashboard.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/erziehungsberechtigte/erziehungsberechtigte-dashboard/erziehungsberechtigte-dashboard.page.html"),
            styles: [__webpack_require__(/*! ./erziehungsberechtigte-dashboard.page.scss */ "./src/app/pages/erziehungsberechtigte/erziehungsberechtigte-dashboard/erziehungsberechtigte-dashboard.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], ErziehungsberechtigteDashboardPage);
    return ErziehungsberechtigteDashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-erziehungsberechtigte-erziehungsberechtigte-dashboard-erziehungsberechtigte-dashboard-module-es5.js.map