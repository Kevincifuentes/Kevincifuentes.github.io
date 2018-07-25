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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.content-page { \n    background: url('/assets/img/bg.jpg');\n    background-size: auto;\n    min-height: 100%; \n    color: white;\n    font-family: 'IBM Plex Sans', sans-serif;\n}\n.navbar {\n    margin-bottom: 0;\n    font-family: 'IBM Plex Sans', sans-serif;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-static-top\">\n  <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n          <a class=\"navbar-brand\">\n            <img src=\"assets/img/web.gif\" class=\"logo\">\n          </a>\n          <span class=\"navbar-brand\">Kevin Cifuentes</span>\n      </div>\n      <ul class=\"nav navbar-nav mr-auto\">\n          <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a [routerLink]=\"['/']\">\n            Home \n            </a></li>\n          <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <a [routerLink]=\"['/timeline']\">Timeline</a></li>\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <a [routerLink]=\"['/projects']\">Projects</a></li>\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a [routerLink]=\"['/skills']\">General skills</a></li>\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a [routerLink]=\"['/skills']\">Technical skills</a></li>\n          <li class=\"dropdown\" dropdown> <!-- {1} -->\n              <a dropdownToggle role=\"button\"> <!-- {2} -->\n                Further information <span class=\"caret\"></span></a>\n              <ul *dropdownMenu class=\"dropdown-menu\"> <!-- {3} -->\n                  <li><a target=\"_blank\" href=\"https://linkedin.com/in/kevin-cifuentes-salas\n                    \"><i class=\"fa fa-linkedin-square\" style=\"font-size:20px\"></i> LinkedIn Profile</a></li>\n                  <li><a target=\"_blank\" href=\"https://github.com/Kevincifuentes\"><i class=\"fa fa-github\" style=\"font-size:20px\"></i> Github</a></li>\n                  <!--<li><a href=\"#\">Something else here</a></li>\n                  <li role=\"separator\" class=\"divider\"></li>\n                  <li><a href=\"#\">Separated link</a></li>\n                  <li role=\"separator\" class=\"divider\"></li>\n                  <li><a href=\"#\">One more separated link</a></li>-->\n              </ul>\n          </li>\n      </ul>\n      <span class=\"navbar-text\">\n            Welcome to my Online CV! Here you will find all that you should know about me!\n      </span>\n  </div>\n</nav>\n<div class=\"content-page\">\n    <div class=\"container\">\n            <div class=\"row\">\n                    <router-outlet></router-outlet>\n            </div>\n    </div>\n</div>\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Kevin Cifuentes';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var angular2_fontawesome_angular2_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-fontawesome/angular2-fontawesome */ "./node_modules/angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var angular2_fontawesome_angular2_fontawesome__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_fontawesome_angular2_fontawesome__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/timeline/timeline.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//imported by me


//modal widget

//Linkedin, github icons

//







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_10__["TimelineComponent"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_12__["ProjectComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_13__["SkillsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_14__["routing"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                angular2_fontawesome_angular2_fontawesome__WEBPACK_IMPORTED_MODULE_7__["Angular2FontawesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/timeline/timeline.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");






var appRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'timeline', component: _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_2__["TimelineComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectComponent"] },
    { path: 'skills', component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__["SkillsComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], pathMatch: 'full' },
    { path: '**', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel{\n    color: black;\n    font-family: 'Gaegu';\n    font-size: 140%;\n}\n.panel-body{\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n        <h1>{{welcome}} <small>{{subtitle}}</small></h1>\n</div>\n\n<div class=\"panel panel-default\">\n        <div [innerHTML]=\"description\" class=\"panel-body\">\n        </div>\n        <hr />\n        <blockquote>\n                <p>I know one thing; that I know nothing</p>\n                <div>- Socrates</div>\n        </blockquote>\n    </div>\n    <hr />\n    <div class=\"row\">\n            <div class=\"col-xs-6 col-md-3\">\n                <a target=\"_blank\" href=\"/assets/img/kevin.jpeg\" class=\"thumbnail\">\n                    <img src=\"/assets/img/kevin.jpeg\" alt=\"...\">\n                </a>\n            </div>\n            <div class=\"col-xs-6 col-md-3\">\n                    <a target=\"_blank\" href=\"/assets/img/kevin2.jpg\" class=\"thumbnail\">\n                        <img src=\"/assets/img/kevin2.jpg\" alt=\"...\">\n                </a>\n            </div>\n            <div class=\"col-xs-6 col-md-3\">\n                <a target=\"_blank\" href=\"/assets/img/kevin3.jpg\" class=\"thumbnail\">\n                        <img src=\"/assets/img/kevin3.jpg\" alt=\"...\">\n                </a>\n            </div>\n            <div class=\"col-xs-6 col-md-3\">\n                <a target=\"_blank\" href=\"/assets/img/kevin4.jpg\" class=\"thumbnail\">\n                    <img src=\"/assets/img/kevin4.jpg\" alt=\"...\">\n                </a>\n            </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_information_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/information.service */ "./src/app/services/information.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

//services

var HomeComponent = /** @class */ (function () {
    function HomeComponent(informationService) {
        this.informationService = informationService;
        this.welcome = "Who am I?";
        this.subtitle = "A little description about myself.";
        this.description = "Loading...";
    }
    HomeComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.informationService.getDescription()];
                    case 1:
                        _a.description = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
            providers: [_services_information_service__WEBPACK_IMPORTED_MODULE_1__["InformationService"]]
        }),
        __metadata("design:paramtypes", [_services_information_service__WEBPACK_IMPORTED_MODULE_1__["InformationService"]])
    ], HomeComponent);
    return HomeComponent;
}());

;


/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/*!*************************************************!*\
  !*** ./src/app/notfound/notfound.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-page { \n  height: 100%;\n}\n\np, h1 { \n  color: black; \n}\n\n.jumbotron{\n  margin-top: 5%;\n}"

/***/ }),

/***/ "./src/app/notfound/notfound.component.html":
/*!**************************************************!*\
  !*** ./src/app/notfound/notfound.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <div class=\"jumbotron\">\n                <div class=\"text-center\"><i class=\"fa fa-5x fa-frown-o\" style=\"color:#d9534f;\"></i></div>\n                <h1 class=\"text-center\">404 Not Found<p> </p><p><small class=\"text-center\"> This is a bit embarrasing, but the page that you are looking doesn't exist.</small></p></h1>\n                <p class=\"text-center\">Try pressing the back button or clicking on this button.</p>\n                <p class=\"text-center\"><a class=\"btn btn-primary\" href=\"/\"><i class=\"fa fa-home\"></i> Take Me Home</a></p>\n        </div>\n</div>"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    ;
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());

;


/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* CSS used here will be applied after bootstrap.css */\n@media only screen and (min-width : 481px) {\n    .row.equal-height {\n        display: flex;\n        flex-wrap: wrap;\n    }\n    .row.equal-height > [class*='col-'] {\n        display: flex;\n        flex-direction: column;\n    }\n    .row.equal-height.row:after,\n    .row.equal-height.row:before {\n        display: flex;\n    }\n\n    .row.equal-height > [class*='col-'] > .thumbnail,\n    .row.equal-height > [class*='col-'] > .thumbnail > .caption {\n        display: flex;\n        flex: 1 0 auto;\n        flex-direction: column;\n    }\n    .row.equal-height > [class*='col-'] > .thumbnail > .caption > .flex-text {\n        flex-grow: 1;\n    }\n    .row.equal-height > [class*='col-'] > .thumbnail > a > img {\n        width: 100%;\n        height: 200px; /* force image's height */\n\n        /* force image fit inside it's \"box\" */\n        -webkit-object-fit: cover;\n           -moz-object-fit: cover;\n            -ms-object-fit: cover;\n             -o-object-fit: cover;\n                object-fit: cover;\n    }\n}\np {\n    text-align: justify;\n}\n.projectNum{\n    text-align: center;\n}\n.panel{\n    color: black;\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n        <h1>{{welcome}} <small>{{subtitle}}</small></h1>\n</div>\n<div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n      In this page you will find a selection of the projects that I have done during my education and work experience. Of course, there are more, though this ones are the most representative ones in my opinion.\n      <div class=\"alert alert-info projectNum\" role=\"alert\">Number of projects: <span class=\"badge\">{{projects.length}}</span></div>\n    </div>\n</div>\n<div class=\"panel panel-default\">\n    <div class=\"row equal-height\">\n        <div *ngFor=\"let project of projects\" class=\"col-sm-6 col-md-4\"\n        id=\"{{project.name}}\">\n          <div class=\"thumbnail\">\n              <a target=\"_blank\" href=\"{{project.image}}\">\n                <img src=\"{{project.image}}\" alt=\"...\">\n              </a>\n            \n            <div class=\"caption\">\n              <h3>{{project.header}}</h3>\n              <p><small class=\"text-muted\">\n                <i class=\"glyphicon glyphicon-time\"></i> {{project.date}}</small>\n              </p>\n              <p [innerHTML]=\"project.content\"></p>\n              <p *ngIf=\"project.button.enabled\"><a target=\"_blank\" href=\"{{project.button.url}}\" class=\"btn btn-primary\" role=\"button\">{{project.button.text}}</a>\n            </p>\n            </div>\n          </div>\n        </div>\n      </div>\n</div>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_information_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/information.service */ "./src/app/services/information.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//services

var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(informationService, router) {
        this.informationService = informationService;
        this.projects = [];
        this.welcome = "What I have done?";
        this.subtitle = "Some of the interesting projects and works done surprisingly by me!";
        this.router = router;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.informationService.getProjects().subscribe(function (response) { _this.projects = response.json(); });
        var tree = this.router.parseUrl(this.router.url);
        if (tree.fragment) {
            setTimeout(function () {
                var element = document.querySelector("#" + tree.fragment);
                if (element) {
                    element.scrollIntoView();
                }
            }, 300);
        }
    };
    ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")],
            providers: [_services_information_service__WEBPACK_IMPORTED_MODULE_2__["InformationService"]]
        }),
        __metadata("design:paramtypes", [_services_information_service__WEBPACK_IMPORTED_MODULE_2__["InformationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProjectComponent);
    return ProjectComponent;
}());

;


/***/ }),

/***/ "./src/app/services/information.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/information.service.ts ***!
  \*************************************************/
/*! exports provided: InformationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationService", function() { return InformationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var InformationService = /** @class */ (function () {
    function InformationService(_http) {
        this._http = _http;
        this._descriptionUrl = '/assets/txt/description.txt';
        this._timelineUrl = '/assets/json/timeline.json';
        this._projectsUrl = '/assets/json/projects.json';
        this._languagesUrl = '/assets/json/languages.json';
        this._awardsUrl = '/assets/json/awards.json';
        this._othersUrl = '/assets/json/others_info.json';
    }
    InformationService.prototype.getDescription = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._http.get(this._descriptionUrl).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.text()];
                }
            });
        });
    };
    InformationService.prototype.getTimeline = function () {
        return this._http.get(this._timelineUrl);
    };
    InformationService.prototype.getProjects = function () {
        return this._http.get(this._projectsUrl);
    };
    InformationService.prototype.getLanguages = function () {
        return this._http.get(this._languagesUrl);
    };
    InformationService.prototype.getAwards = function () {
        return this._http.get(this._awardsUrl);
    };
    InformationService.prototype.getOthers = function () {
        return this._http.get(this._othersUrl);
    };
    InformationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], InformationService);
    return InformationService;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/*!*********************************************!*\
  !*** ./src/app/skills/skills.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel{\n    color: black;\n}\n\n.list-group-item{\n    text-align: center;\n}\n\n.page-heading{\n    position: relative;\n    margin-bottom: 20px;\n}\n\n.page-heading h1 {\n  font-size: 24px;\n  margin-bottom: 5px;\n}\n\n.page-heading p {\n  font-size: 14px;\n  color: #777;\n}\n\n.skill-block {\n  overflow: hidden;\n  padding: 5px 15px 15px;\n  text-align: center;\n  box-shadow:1px 2px 6px 2px rgba(0, 0, 0, 0.1);\n  margin: 15px auto;\n}\n\n.sk-border h2 {\n  color: #777;\n  display: inline-block;\n  font-size: 48px;\n  font-weight: 900;\n  height: 200px;\n  width: 180px;\n}\n\n.sk-border{\n    text-align: center;\n    line-height: 100px;\n    position:relative;\n    z-index:0;\n    margin: 70px auto;\n}\n\n.imgAward {\n   max-width: 50%;\n}\n\n.sk-border,\n.sk-border:before,\n.sk-border:after{\n    border-style: solid;\n    border-color: #ff6633;\n    border-width: 7px;\n    border-top: none;\n    border-bottom: none;\n    height: 105px;\n    width: 183px;\n}\n\n.sk-border:after,\n.sk-border:before{\n    content: \"\";\n    position: absolute;\n    top:0;\n    left: -7px;\n    z-index: -1;\n}\n\n.sk-border:before{\n    -webkit-transform: rotate(60deg);\n            transform: rotate(60deg);\n}\n\n.sk-border:after{\n    -webkit-transform: rotate(-60deg);\n            transform: rotate(-60deg);\n}\n\n.sk-text h4 {\n  font-size: 18px;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n}"

/***/ }),

/***/ "./src/app/skills/skills.component.html":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n        <h1>{{welcome}} <small>{{subtitle}}</small></h1>\n</div>\n\n<div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Languages</h3>\n        </div>\n        <div class=\"panel-body\">\n          <div *ngIf=\"languages.length == 0\">{{loading}}</div>\n          <div *ngFor=\"let language of languages\" class=\"list-group\">\n            <a class=\"list-group-item\">\n              <h4 class=\"list-group-item-heading\"><span class=\"flag-icon flag-icon-{{language.flag}}\"></span>\n                {{language.name}}</h4>\n              <div class=\"list-group-item-text\">\n                <table class=\"table table-condensed table-responsive table-user-information\">\n                <tbody>\n                <tr *ngFor=\"let row of language.table\">\n                    <td><b>{{row.name}}</b></td>\n                    <td>{{row.text}}</td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n            </a>\n          </div>\n        </div>\n</div>\n<hr>\n<div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Awards</h3>\n        </div>\n        <div class=\"panel-body\">\n          <div *ngIf=\"awards.length == 0\">{{loading}}</div>\n          <div>\n            <div class=\"row\">\n              <div class=\"col-sm-12\">\n                  <div class=\"row\">\n                      <div *ngFor=\"let award of awards\" class=\"col-xs-12 col-sm-6 col-md-3\">\n                          <div class=\"skill-block\">\n                              <div class=\"sk-border\">\n                                <img src=\"/assets/img/award.png\" class=\"imgAward\">\n                              </div>\n                              <div class=\"sk-text\">\n                                  <h4>{{award.name}}</h4>\n                                  <h3>{{award.expeditedBy}}</h3>\n                                  <p [innerHTML]=\"award.comment\"></p>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              \n          </div>\n          </div>\n        </div>\n</div>\n<hr>\n<div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Other information</h3>\n        </div>\n        <div class=\"panel-body\">\n          <div *ngIf=\"others.length == 0\">{{loading}}</div>\n          <div>\n            <ul>\n              <li *ngFor=\"let other of others\">\n                {{other.comment}} <b *ngIf=\"other.extra\"> ({{other.extra}})</b>\n              </li>\n            </ul>\n          </div>\n        </div>\n</div>\n"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_information_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/information.service */ "./src/app/services/information.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//services

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(informationService) {
        this.informationService = informationService;
        this.languages = [];
        this.awards = [];
        this.others = [];
        this.welcome = "What else?";
        this.subtitle = "Not about George Clooney, just a couple of skills and abilities that I have!";
        this.loading = "Loading...";
    }
    SkillsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.informationService.getLanguages().subscribe(function (response) { _this.languages = response.json(); });
        this.informationService.getAwards().subscribe(function (response) { _this.awards = response.json(); });
        this.informationService.getOthers().subscribe(function (response) { _this.others = response.json(); });
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/skills/skills.component.css")],
            providers: [_services_information_service__WEBPACK_IMPORTED_MODULE_1__["InformationService"]]
        }),
        __metadata("design:paramtypes", [_services_information_service__WEBPACK_IMPORTED_MODULE_1__["InformationService"]])
    ], SkillsComponent);
    return SkillsComponent;
}());

;


/***/ }),

/***/ "./src/app/timeline/timeline.component.css":
/*!*************************************************!*\
  !*** ./src/app/timeline/timeline.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel {\n  color: black;\n  font-size: 130%;\n}\n\n.panel-body {\n  text-align: center;\n}\n\n.label{\n  margin: 1px;\n}\n\n.timeline {\n  list-style: none;\n  padding: 20px 0 20px;\n  position: relative;\n}\n\n.timeline:before {\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  content: \" \";\n  width: 3px;\n  background-color: #eeeeee;\n  left: 50%;\n  margin-left: -1.5px;\n}\n\n.timeline>li {\n  margin-bottom: 20px;\n  position: relative;\n}\n\n.timeline>li:before,\n.timeline>li:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline>li:after {\n  clear: both;\n}\n\n.timeline>li:before,\n.timeline>li:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline>li:after {\n  clear: both;\n}\n\n.timeline>li>.timeline-panel {\n  width: 46%;\n  float: left;\n  border: 1px solid #d4d4d4;\n  border-radius: 2px;\n  padding: 20px;\n  position: relative;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\n}\n\n.timeline>li>.timeline-panel:before {\n  position: absolute;\n  top: 26px;\n  right: -15px;\n  display: inline-block;\n  border-top: 15px solid transparent;\n  border-left: 15px solid #ccc;\n  border-right: 0 solid #ccc;\n  border-bottom: 15px solid transparent;\n  content: \" \";\n}\n\n.timeline>li>.timeline-panel:after {\n  position: absolute;\n  top: 27px;\n  right: -14px;\n  display: inline-block;\n  border-top: 14px solid transparent;\n  border-left: 14px solid #fff;\n  border-right: 0 solid #fff;\n  border-bottom: 14px solid transparent;\n  content: \" \";\n}\n\n.timeline>li>.timeline-badge {\n  color: #fff;\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  font-size: 1.4em;\n  text-align: center;\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  margin-left: -25px;\n  background-color: #999999;\n  z-index: 100;\n  border-top-right-radius: 50%;\n  border-top-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n  border-bottom-left-radius: 50%;\n}\n\n.timeline>li.timeline-inverted>.timeline-panel {\n  float: right;\n}\n\n.timeline>li.timeline-inverted>.timeline-panel:before {\n  border-left-width: 0;\n  border-right-width: 15px;\n  left: -15px;\n  right: auto;\n}\n\n.timeline>li.timeline-inverted>.timeline-panel:after {\n  border-left-width: 0;\n  border-right-width: 14px;\n  left: -14px;\n  right: auto;\n}\n\n.timeline-badge.primary {\n  background-color: #2e6da4 !important;\n}\n\n.timeline-badge.success {\n  background-color: #3f903f !important;\n}\n\n.timeline-badge.warning {\n  background-color: #f0ad4e !important;\n}\n\n.timeline-badge.danger {\n  background-color: #d9534f !important;\n}\n\n.timeline-badge.info {\n  background-color: #5bc0de !important;\n}\n\n.timeline-badge.other {\n  background-color: #5bdecd !important;\n}\n\n.timeline-title {\n  margin-top: 0;\n  color: inherit;\n}\n\n.timeline-body>p,\n.timeline-body>ul {\n  margin-bottom: 0;\n}\n\n.timeline-body>p+p {\n  margin-top: 5px;\n}\n\n@media (max-width: 767px) {\n  ul.timeline:before {\n    left: 40px;\n  }\n  ul.timeline>li>.timeline-panel {\n    width: calc(100% - 90px);\n    width: -webkit-calc(100% - 90px);\n  }\n  ul.timeline>li>.timeline-badge {\n    left: 15px;\n    margin-left: 0;\n    top: 16px;\n  }\n  ul.timeline>li>.timeline-panel {\n    float: right;\n  }\n  ul.timeline>li>.timeline-panel:before {\n    border-left-width: 0;\n    border-right-width: 15px;\n    left: -15px;\n    right: auto;\n  }\n  ul.timeline>li>.timeline-panel:after {\n    border-left-width: 0;\n    border-right-width: 14px;\n    left: -14px;\n    right: auto;\n  }\n}\n"

/***/ }),

/***/ "./src/app/timeline/timeline.component.html":
/*!**************************************************!*\
  !*** ./src/app/timeline/timeline.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n        <h1>{{label}}\n                <small>{{subtitle}}</small>\n        </h1>\n</div>\n\n<div class=\"panel panel-default\">\n                \n        <ul class=\"timeline\">\n                <li *ngFor=\"let entry of entries\" [class.timeline-inverted]=\"entry.displaySide=='right'\">\n                        <div class=\"timeline-badge\" [ngClass]=\"{'info':entry.refersTo==='education', 'success': entry.refersTo==='job', 'warning':entry.refersTo==='none', 'other':entry.refersTo==='others'}\">\n                                <i class=\"glyphicon\" [ngClass]=\"{'glyphicon-education':entry.refersTo==='education', 'glyphicon-folder-close': entry.refersTo==='job', 'glyphicon-user':entry.refersTo==='others'\n                                , 'glyphicon-question-sign':entry.refersTo==='none', 'glyphicon-globe':entry.refersTo==='big bang', 'glyphicon-baby-formula':entry.refersTo==='born'}\"\n                                        ></i>\n                        </div>\n                        <div class=\"timeline-panel\">\n                                <div class=\"timeline-heading\">\n                                        <h4 class=\"timeline-title\"><b>{{entry.header}}</b></h4>\n                                        <p>\n                                                <small class=\"text-muted\">\n                                                        <i class=\"glyphicon glyphicon-time\"></i> {{entry.date}}</small>\n                                        </p>\n                                        <p>\n                                                       \n                                                        <a target=\"_blank\" href=\"https://www.google.com/maps/search/?api=1&query={{entry.whereLatLng.lat}},{{entry.whereLatLng.lng}}\n                                                        \"><small class=\"text-muted\">\n                                                                        <i class=\"glyphicon glyphicon-map-marker\"></i> {{entry.where}}</small></a>\n                                        </p>\n                                </div>\n                                <div class=\"timeline-body\">\n                                        <p [innerHTML]=\"entry.content\"></p>\n                                </div>\n                                <div *ngIf=\"entry.related.enabled\">\n                                                <b>Related: </b> <a *ngFor=\"let project of entry.related.projects\" [routerLink]=\"['/projects']\" fragment=\"{{project.url}}\"><span class=\"label label-default\">{{project.name}}</span></a> \n                                </div>\n                                <hr>\n                                <div *ngIf=\"entry.button.enabled\" class=\"btn-group\">\n                                        <a class=\"btn btn-primary btn-sm dropdown-toggle\" target=\"_blank\" href=\"{{entry.button.url}}\">{{entry.button.text}}</a>\n                                </div>\n                                \n                        </div>\n                </li>\n        </ul>\n</div>"

/***/ }),

/***/ "./src/app/timeline/timeline.component.ts":
/*!************************************************!*\
  !*** ./src/app/timeline/timeline.component.ts ***!
  \************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_information_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/information.service */ "./src/app/services/information.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimelineComponent = /** @class */ (function () {
    function TimelineComponent(informationService, sanitizer) {
        this.informationService = informationService;
        this.sanitizer = sanitizer;
        this.entries = [];
        this.label = "Where I came from?";
        this.subtitle = "A timeline for my profesional career.";
    }
    ;
    TimelineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.informationService.getTimeline().subscribe(function (response) { _this.entries = response.json(); });
    };
    TimelineComponent.prototype.sanitize = function (url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    };
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.css */ "./src/app/timeline/timeline.component.css")],
            providers: [_services_information_service__WEBPACK_IMPORTED_MODULE_1__["InformationService"]]
        }),
        __metadata("design:paramtypes", [_services_information_service__WEBPACK_IMPORTED_MODULE_1__["InformationService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], TimelineComponent);
    return TimelineComponent;
}());

;


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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kevincifu/Documents/Projects/ServerLookiero/webroot/web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map