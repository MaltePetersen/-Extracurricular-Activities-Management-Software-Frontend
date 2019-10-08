(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fjoerdeLeitung-fjoerde-leitung-dashboard-fjoerde-leitung-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/fjoerdeLeitung/fjoerde-leitung-dashboard/fjoerde-leitung-dashboard.page.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/fjoerdeLeitung/fjoerde-leitung-dashboard/fjoerde-leitung-dashboard.page.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n        <ion-button click=\"logout()\">\n          <ion-icon name=\"log-out\"></ion-icon>\n    </ion-button>\n    </ion-buttons>\n    <ion-title>fjoerdeLeitung-dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/fjoerdeLeitung/fjoerde-leitung-dashboard/fjoerde-leitung-dashboard.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/fjoerdeLeitung/fjoerde-leitung-dashboard/fjoerde-leitung-dashboard.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: FjoerdeLeitungDashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FjoerdeLeitungDashboardPageModule", function() { return FjoerdeLeitungDashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fjoerde_leitung_dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fjoerde-leitung-dashboard.page */ "./src/app/pages/fjoerdeLeitung/fjoerde-leitung-dashboard/fjoerde-leitung-dashboard.page.ts");







var routes = [
    {
        path: '',
        component: _fjoerde_leitung_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["FjoerdeLeitungDashboardPage"]
    }
];
var FjoerdeLeitungDashboardPageModule = /** @class */ (function () {
    function FjoerdeLeitungDashboardPageModule() {
    }
    FjoerdeLeitungDashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_fjoerde_leitung_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["FjoerdeLeitungDashboardPage"]]
        })
    ], FjoerdeLeitungDashboardPageModule);
    return FjoerdeLeitungDashboardPageModule;
}());



/***/ }),

/***/ "./src/app/pages/fjoerdeLeitung/fjoerde-leitung-dashboard/fjoerde-leitung-dashboard.page.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/fjoerdeLeitung/fjoerde-leitung-dashboard/fjoerde-leitung-dashboard.page.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zqb2VyZGVMZWl0dW5nL2Zqb2VyZGUtbGVpdHVuZy1kYXNoYm9hcmQvZmpvZXJkZS1sZWl0dW5nLWRhc2hib2FyZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/fjoerdeLeitung/fjoerde-leitung-dashboard/fjoerde-leitung-dashboard.page.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/fjoerdeLeitung/fjoerde-leitung-dashboard/fjoerde-leitung-dashboard.page.ts ***!
  \**************************************************************************************************/
/*! exports provided: FjoerdeLeitungDashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FjoerdeLeitungDashboardPage", function() { return FjoerdeLeitungDashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");



var FjoerdeLeitungDashboardPage = /** @class */ (function () {
    function FjoerdeLeitungDashboardPage(auth) {
        this.auth = auth;
    }
    FjoerdeLeitungDashboardPage.prototype.ngOnInit = function () {
    };
    FjoerdeLeitungDashboardPage.prototype.logout = function () {
        this.auth.logout();
    };
    FjoerdeLeitungDashboardPage.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    FjoerdeLeitungDashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fjoerde-leitung-dashboard',
            template: __webpack_require__(/*! raw-loader!./fjoerde-leitung-dashboard.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/fjoerdeLeitung/fjoerde-leitung-dashboard/fjoerde-leitung-dashboard.page.html"),
            styles: [__webpack_require__(/*! ./fjoerde-leitung-dashboard.page.scss */ "./src/app/pages/fjoerdeLeitung/fjoerde-leitung-dashboard/fjoerde-leitung-dashboard.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], FjoerdeLeitungDashboardPage);
    return FjoerdeLeitungDashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-fjoerdeLeitung-fjoerde-leitung-dashboard-fjoerde-leitung-dashboard-module-es5.js.map