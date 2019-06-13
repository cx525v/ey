(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_doctor_doctor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/doctor/doctor.component */ "./src/app/components/doctor/doctor.component.ts");
/* harmony import */ var _components_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/doctors/doctors.component */ "./src/app/components/doctors/doctors.component.ts");





var routes = [
    { path: '', component: _components_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_4__["DoctorsComponent"] },
    { path: 'doctors', component: _components_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_4__["DoctorsComponent"] },
    { path: 'doctor/:id', component: _components_doctor_doctor_component__WEBPACK_IMPORTED_MODULE_3__["DoctorComponent"] },
    { path: '**', component: _components_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_4__["DoctorsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<a routerLink=\"/\">Home</a>\n <br /><br />\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Doctor';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ../../node_modules/@progress/kendo-theme-default/dist/all.css */ "./node_modules/@progress/kendo-theme-default/dist/all.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_doctor_doctor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/doctor/doctor.component */ "./src/app/components/doctor/doctor.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm5/index.js");
/* harmony import */ var _components_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/doctors/doctors.component */ "./src/app/components/doctors/doctors.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_doctor_doctor_component__WEBPACK_IMPORTED_MODULE_5__["DoctorComponent"],
                _components_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_8__["DoctorsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__["GridModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/appsettings.json":
/*!**********************************!*\
  !*** ./src/app/appsettings.json ***!
  \**********************************/
/*! exports provided: apiURL, default */
/***/ (function(module) {

module.exports = {"apiURL":"http://localhost:5000/api"};

/***/ }),

/***/ "./src/app/components/doctor/doctor.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/doctor/doctor.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9jdG9yL2RvY3Rvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/doctor/doctor.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/doctor/doctor.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Doctor Detail:\n</p>\n\n  <div style=\"padding-left: 20px;\">\n    <div>Name: <span style=\"font-size:larger\">{{doctor?.name}}</span> <span *ngIf=\"doctor?.isSuperStar\" style=\"color:red; font-size:small\"> Superstar</span>  </div>\n    <div>Language Spoken: <span style=\"font-size:larger\">{{doctor?.language?.name}}</span></div>\n    <div>Medical School: <span style=\"font-size:larger\">{{doctor?.medicalSchool?.name}}</span></div>  \n\n    <p>Specialties</p>\n    \n    <div style=\"padding-left: 20px;\">\n      <ng-template ngFor let-item [ngForOf]=\"doctor?.doctorSpecialties\" let-i=\"index\">\n        <li>{{item.specialty?.name}}</li>\n      </ng-template>\n    </div>\n\n  </div>\n \n"

/***/ }),

/***/ "./src/app/components/doctor/doctor.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/doctor/doctor.component.ts ***!
  \*******************************************************/
/*! exports provided: DoctorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorComponent", function() { return DoctorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_doctor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/doctor.service */ "./src/app/services/doctor.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DoctorComponent = /** @class */ (function () {
    function DoctorComponent(srv, activatedRoute) {
        this.srv = srv;
        this.activatedRoute = activatedRoute;
    }
    DoctorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            var Id = params["id"];
            _this.getDoctorDetails(Id);
        });
    };
    DoctorComponent.prototype.getDoctorDetails = function (Id) {
        var _this = this;
        this.srv.getDoctorDetails(Id).subscribe(function (r) {
            _this.doctor = r;
        });
    };
    DoctorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-doctor',
            template: __webpack_require__(/*! ./doctor.component.html */ "./src/app/components/doctor/doctor.component.html"),
            providers: [_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__["DoctorService"]],
            styles: [__webpack_require__(/*! ./doctor.component.css */ "./src/app/components/doctor/doctor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__["DoctorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DoctorComponent);
    return DoctorComponent;
}());



/***/ }),

/***/ "./src/app/components/doctors/doctors.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/doctors/doctors.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".k-grid .no-padding {\r\n    padding: 0;\r\n}\r\n\r\n.whole-cell {\r\n  display: block;\r\n  padding: 8px 12px; /* depends on theme */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb2N0b3JzL2RvY3RvcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUIsRUFBRSxxQkFBcUI7QUFDMUMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RvY3RvcnMvZG9jdG9ycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmstZ3JpZCAubm8tcGFkZGluZyB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ud2hvbGUtY2VsbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogOHB4IDEycHg7IC8qIGRlcGVuZHMgb24gdGhlbWUgKi9cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/doctors/doctors.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/doctors/doctors.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kendo-grid [data]=\"doctors\" \n            [height]=\"410\" \n            [resizable] =\"true\" >\n    <kendo-grid-command-column width=\"220\" title=\"Name\">\n        <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\">\n            <a href='/doctor/{{dataItem.id}}'>\n              {{dataItem.name}}\n            </a>     \n            <span *ngIf=\"dataItem.isSuperStar\" style=\"color:red; font-size:small\">Superstar</span>     \n        </ng-template>\n    </kendo-grid-command-column>  \n  <kendo-grid-column field=\"gender\" title=\"Gender\" width=\"80\">\n  </kendo-grid-column>\n  <kendo-grid-column field=\"averageRating\" title=\"Average Rating\" width=\"120\">\n  </kendo-grid-column>\n  <kendo-grid-column field=\"specialties\" title=\"Specialties\" width=\"400\">\n  </kendo-grid-column>  \n\n</kendo-grid>"

/***/ }),

/***/ "./src/app/components/doctors/doctors.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/doctors/doctors.component.ts ***!
  \*********************************************************/
/*! exports provided: DoctorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorsComponent", function() { return DoctorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_doctor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/doctor.service */ "./src/app/services/doctor.service.ts");



var DoctorsComponent = /** @class */ (function () {
    function DoctorsComponent(srv) {
        this.srv = srv;
    }
    DoctorsComponent.prototype.ngOnInit = function () {
        this.getDoctors();
    };
    DoctorsComponent.prototype.getDoctors = function () {
        var _this = this;
        this.srv.getDoctors().subscribe(function (r) {
            _this.doctors = r;
        });
    };
    DoctorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-doctors',
            template: __webpack_require__(/*! ./doctors.component.html */ "./src/app/components/doctors/doctors.component.html"),
            providers: [_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__["DoctorService"]],
            styles: [__webpack_require__(/*! ./doctors.component.css */ "./src/app/components/doctors/doctors.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__["DoctorService"]])
    ], DoctorsComponent);
    return DoctorsComponent;
}());



/***/ }),

/***/ "./src/app/services/doctor.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/doctor.service.ts ***!
  \********************************************/
/*! exports provided: DoctorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorService", function() { return DoctorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DoctorService = /** @class */ (function () {
    function DoctorService(httpClient) {
        this.httpClient = httpClient;
        this.apiURL = __webpack_require__(/*! ../appsettings.json */ "./src/app/appsettings.json").apiURL;
    }
    DoctorService.prototype.getDoctors = function () {
        return this.httpClient.get(this.apiURL + "/doctor");
    };
    DoctorService.prototype.getDoctorDetails = function (Id) {
        return this.httpClient.get(this.apiURL + "/doctor/" + Id);
    };
    DoctorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DoctorService);
    return DoctorService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\xuch\Downloads\netcore-master\netcore-master\DoctorApp\Angular\Doctor\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map