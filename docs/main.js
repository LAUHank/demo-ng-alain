(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./_mock/_user.ts":
/*!************************!*\
  !*** ./_mock/_user.ts ***!
  \************************/
/*! exports provided: USERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return USERS; });
var list = [];
var total = 50;
for (var i = 0; i < total; i += 1) {
    list.push({
        id: i + 1,
        disabled: i % 6 === 0,
        href: 'https://ant.design',
        avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        ][i % 2],
        no: "TradeCode " + i,
        title: "\u4E00\u4E2A\u4EFB\u52A1\u540D\u79F0 " + i,
        owner: '曲丽丽',
        description: '这是一段描述',
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 4,
        updatedAt: new Date("2017-07-" + (Math.floor(i / 2) + 1)),
        createdAt: new Date("2017-07-" + (Math.floor(i / 2) + 1)),
        progress: Math.ceil(Math.random() * 100),
    });
}
function genData(params) {
    var ret = list.slice();
    var pi = +params.pi, ps = +params.ps, start = (pi - 1) * ps;
    if (params.no) {
        ret = ret.filter(function (data) { return data.no.indexOf(params.no) > -1; });
    }
    return { total: ret.length, list: ret.slice(start, ps * pi) };
}
function saveData(id, value) {
    var item = list.find(function (w) { return w.id === id; });
    if (!item)
        return { msg: '无效用户信息' };
    Object.assign(item, value);
    return { msg: 'ok' };
}
var USERS = {
    '/user': function (req) { return genData(req.queryString); },
    '/user/:id': function (req) { return list.find(function (w) { return w.id === +req.params.id; }); },
    'POST /user/:id': function (req) { return saveData(+req.params.id, req.body); },
    '/user/current': {
        name: 'Cipchk',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
        userid: '00000001',
        email: 'cipchk@qq.com',
        signature: '海纳百川，有容乃大',
        title: '交互专家',
        group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
        tags: [
            {
                key: '0',
                label: '很有想法的',
            },
            {
                key: '1',
                label: '专注撩妹',
            },
            {
                key: '2',
                label: '帅~',
            },
            {
                key: '3',
                label: '通吃',
            },
            {
                key: '4',
                label: '专职后端',
            },
            {
                key: '5',
                label: '海纳百川',
            },
        ],
        notifyCount: 12,
        country: 'China',
        geographic: {
            province: {
                label: '上海',
                key: '330000',
            },
            city: {
                label: '市辖区',
                key: '330100',
            },
        },
        address: 'XX区XXX路 XX 号',
        phone: '你猜-你猜你猜猜猜',
    },
    'POST /user/avatar': 'ok',
    'POST /login/account': function (req) {
        var data = req.body;
        if (!(data.userName === 'admin' || data.userName === 'user') ||
            data.password !== 'ng-alain.com') {
            return { msg: "Invalid username or password\uFF08admin/ng-alain.com\uFF09" };
        }
        return {
            msg: 'ok',
            user: {
                token: '123456789',
                name: data.userName,
                email: data.userName + "@qq.com",
                id: 10000,
                time: +new Date(),
            },
        };
    },
    'POST /register': {
        msg: 'ok',
    },
};


/***/ }),

/***/ "./_mock/index.ts":
/*!************************!*\
  !*** ./_mock/index.ts ***!
  \************************/
/*! exports provided: USERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_user */ "./_mock/_user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return _user__WEBPACK_IMPORTED_MODULE_0__["USERS"]; });




/***/ }),

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(el, renderer, router, titleSrv, modalSrv) {
        this.router = router;
        this.titleSrv = titleSrv;
        this.modalSrv = modalSrv;
        renderer.setAttribute(el.nativeElement, 'ng-alain-version', _delon_theme__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full);
        renderer.setAttribute(el.nativeElement, 'ng-zorro-version', ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["VERSION"].full);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (evt) { return evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .subscribe(function () {
            _this.titleSrv.setTitle();
            _this.modalSrv.closeAll();
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "<router-outlet></router-outlet>",
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_3__["TitleService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: StartupServiceFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupServiceFactory", function() { return StartupServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_json_schema_json_schema_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/json-schema/json-schema.module */ "./src/app/shared/json-schema/json-schema.module.ts");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/fesm5/auth.js");
/* harmony import */ var _core_net_default_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/net/default.interceptor */ "./src/app/core/net/default.interceptor.ts");
/* harmony import */ var _core_startup_startup_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/startup/startup.service */ "./src/app/core/startup/startup.service.ts");
/* harmony import */ var _delon_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./delon.module */ "./src/app/delon.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _routes_routes_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./routes/routes.module */ "./src/app/routes/routes.module.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// #region default language
// 参考：https://ng-alain.com/docs/i18n



var LANG = {
    abbr: 'zh',
    ng: _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4___default.a,
    zorro: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["zh_CN"],
    delon: _delon_theme__WEBPACK_IMPORTED_MODULE_6__["zh_CN"],
};
// register angular

Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["registerLocaleData"])(LANG.ng, LANG.abbr);
var LANG_PROVIDES = [
    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], useValue: LANG.abbr },
    { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NZ_I18N"], useValue: LANG.zorro },
    { provide: _delon_theme__WEBPACK_IMPORTED_MODULE_6__["DELON_LOCALE"], useValue: LANG.delon },
];
// #endregion
// #region JSON Schema form (using @delon/form)

var FORM_MODULES = [_shared_json_schema_json_schema_module__WEBPACK_IMPORTED_MODULE_8__["JsonSchemaModule"]];
// #endregion
// #region Http Interceptors



var INTERCEPTOR_PROVIDES = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _delon_auth__WEBPACK_IMPORTED_MODULE_9__["SimpleInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _core_net_default_interceptor__WEBPACK_IMPORTED_MODULE_10__["DefaultInterceptor"], multi: true }
];
// #endregion
// #region global third module
var GLOBAL_THIRD_MODULES = [];
// #endregion
// #region Startup Service

function StartupServiceFactory(startupService) {
    return function () { return startupService.load(); };
}
var APPINIT_PROVIDES = [
    _core_startup_startup_service__WEBPACK_IMPORTED_MODULE_11__["StartupService"],
    {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
        useFactory: StartupServiceFactory,
        deps: [_core_startup_startup_service__WEBPACK_IMPORTED_MODULE_11__["StartupService"]],
        multi: true
    }
];
// #endregion






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _delon_module__WEBPACK_IMPORTED_MODULE_12__["DelonModule"].forRoot(),
                _core_core_module__WEBPACK_IMPORTED_MODULE_13__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"],
                _routes_routes_module__WEBPACK_IMPORTED_MODULE_16__["RoutesModule"]
            ].concat(FORM_MODULES, GLOBAL_THIRD_MODULES),
            providers: LANG_PROVIDES.concat(INTERCEPTOR_PROVIDES, APPINIT_PROVIDES),
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-import-guard */ "./src/app/core/module-import-guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_1__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: []
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/module-import-guard.ts":
/*!*********************************************!*\
  !*** ./src/app/core/module-import-guard.ts ***!
  \*********************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
// https://angular.io/guide/styleguide#style-04-12
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "./src/app/core/net/default.interceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/core/net/default.interceptor.ts ***!
  \*************************************************/
/*! exports provided: DefaultInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultInterceptor", function() { return DefaultInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * 默认HTTP拦截器，其注册细节见 `app.module.ts`
 */
var DefaultInterceptor = /** @class */ (function () {
    function DefaultInterceptor(injector) {
        this.injector = injector;
    }
    Object.defineProperty(DefaultInterceptor.prototype, "msg", {
        get: function () {
            return this.injector.get(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"]);
        },
        enumerable: true,
        configurable: true
    });
    DefaultInterceptor.prototype.goTo = function (url) {
        var _this = this;
        setTimeout(function () { return _this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]).navigateByUrl(url); });
    };
    DefaultInterceptor.prototype.handleData = function (event) {
        // 可能会因为 `throw` 导出无法执行 `_HttpClient` 的 `end()` 操作
        this.injector.get(_delon_theme__WEBPACK_IMPORTED_MODULE_6__["_HttpClient"]).end();
        // 业务处理：一些通用操作
        switch (event.status) {
            case 200:
                // 业务层级错误处理，以下是假定restful有一套统一输出格式（指不管成功与否都有相应的数据格式）情况下进行处理
                // 例如响应内容：
                //  错误内容：{ status: 1, msg: '非法参数' }
                //  正确内容：{ status: 0, response: {  } }
                // 则以下代码片断可直接适用
                // if (event instanceof HttpResponse) {
                //     const body: any = event.body;
                //     if (body && body.status !== 0) {
                //         this.msg.error(body.msg);
                //         // 继续抛出错误中断后续所有 Pipe、subscribe 操作，因此：
                //         // this.http.get('/').subscribe() 并不会触发
                //         return throwError({});
                //     } else {
                //         // 重新修改 `body` 内容为 `response` 内容，对于绝大多数场景已经无须再关心业务状态码
                //         return of(new HttpResponse(Object.assign(event, { body: body.response })));
                //         // 或者依然保持完整的格式
                //         return of(event);
                //     }
                // }
                break;
            case 401: // 未登录状态码
                this.goTo('/passport/login');
                break;
            case 403:
            case 404:
            case 500:
                this.goTo("/" + event.status);
                break;
            default:
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                    console.warn('未可知错误，大部分是由于后端不支持CORS或无效配置引起', event);
                    this.msg.error(event.message);
                }
                break;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(event);
    };
    DefaultInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        // 统一加上服务端前缀
        var url = req.url;
        if (!url.startsWith('https://') && !url.startsWith('http://')) {
            url = _env_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].SERVER_URL + url;
        }
        var newReq = req.clone({
            url: url,
        });
        return next.handle(newReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (event) {
            // 允许统一对请求错误处理，这是因为一个请求若是业务上错误的情况下其HTTP请求的状态是200的情况下需要
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"] && event.status === 200)
                return _this.handleData(event);
            // 若一切都正常，则后续操作
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(event);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return _this.handleData(err); }));
    };
    DefaultInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], DefaultInterceptor);
    return DefaultInterceptor;
}());



/***/ }),

/***/ "./src/app/core/startup/startup.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/startup/startup.service.ts ***!
  \*************************************************/
/*! exports provided: StartupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupService", function() { return StartupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/fesm5/auth.js");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/acl */ "./node_modules/@delon/acl/fesm5/acl.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _style_icons_auto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../style-icons-auto */ "./src/style-icons-auto.ts");
/* harmony import */ var _style_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../style-icons */ "./src/style-icons.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
var StartupService = /** @class */ (function () {
    function StartupService(iconSrv, menuService, settingService, aclService, titleService, tokenService, httpClient, injector) {
        this.menuService = menuService;
        this.settingService = settingService;
        this.aclService = aclService;
        this.titleService = titleService;
        this.tokenService = tokenService;
        this.httpClient = httpClient;
        this.injector = injector;
        iconSrv.addIcon.apply(iconSrv, _style_icons_auto__WEBPACK_IMPORTED_MODULE_8__["ICONS_AUTO"].concat(_style_icons__WEBPACK_IMPORTED_MODULE_9__["ICONS"]));
    }
    StartupService.prototype.viaHttp = function (resolve, reject) {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["zip"])(this.httpClient.get('assets/tmp/app-data.json')).pipe(
        // 接收其他拦截器后产生的异常消息
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (_a) {
            var appData = _a[0];
            resolve(null);
            return [appData];
        })).subscribe(function (_a) {
            var appData = _a[0];
            // application data
            var res = appData;
            // 应用信息：包括站点名、描述、年份
            _this.settingService.setApp(res.app);
            // 用户信息：包括姓名、头像、邮箱地址
            _this.settingService.setUser(res.user);
            // ACL：设置权限为全量
            _this.aclService.setFull(true);
            // 初始化菜单
            _this.menuService.add(res.menu);
            // 设置页面标题的后缀
            _this.titleService.suffix = res.app.name;
        }, function () { }, function () {
            resolve(null);
        });
    };
    StartupService.prototype.viaMock = function (resolve, reject) {
        // const tokenData = this.tokenService.get();
        // if (!tokenData.token) {
        //   this.injector.get(Router).navigateByUrl('/passport/login');
        //   resolve({});
        //   return;
        // }
        // mock
        var app = {
            name: "ng-alain",
            description: "Ng-zorro admin panel front-end framework"
        };
        var user = {
            name: 'Admin',
            avatar: './assets/tmp/img/avatar.jpg',
            email: 'cipchk@qq.com',
            token: '123456789'
        };
        // 应用信息：包括站点名、描述、年份
        this.settingService.setApp(app);
        // 用户信息：包括姓名、头像、邮箱地址
        this.settingService.setUser(user);
        // ACL：设置权限为全量
        this.aclService.setFull(true);
        // 初始化菜单
        this.menuService.add([
            {
                text: '主导航',
                group: true,
                children: [
                    {
                        text: '仪表盘',
                        link: '/dashboard',
                        icon: { type: 'icon', value: 'appstore' }
                    },
                    {
                        text: '快捷菜单',
                        icon: { type: 'icon', value: 'rocket' },
                        shortcutRoot: true
                    }
                ]
            }
        ]);
        // 设置页面标题的后缀
        this.titleService.suffix = app.name;
        resolve({});
    };
    StartupService.prototype.load = function () {
        var _this = this;
        // only works with promises
        // https://github.com/angular/angular/issues/15088
        return new Promise(function (resolve, reject) {
            // http
            // this.viaHttp(resolve, reject);
            // mock：请勿在生产环境中这么使用，viaMock 单纯只是为了模拟一些数据使脚手架一开始能正常运行
            _this.viaMock(resolve, reject);
        });
    };
    StartupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_delon_auth__WEBPACK_IMPORTED_MODULE_5__["DA_SERVICE_TOKEN"])),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzIconService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_4__["MenuService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_4__["SettingsService"],
            _delon_acl__WEBPACK_IMPORTED_MODULE_6__["ACLService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_4__["TitleService"], Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], StartupService);
    return StartupService;
}());



/***/ }),

/***/ "./src/app/delon.module.ts":
/*!*********************************!*\
  !*** ./src/app/delon.module.ts ***!
  \*********************************/
/*! exports provided: fnPageHeaderConfig, fnDelonAuthConfig, fnSTConfig, DelonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnPageHeaderConfig", function() { return fnPageHeaderConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnDelonAuthConfig", function() { return fnDelonAuthConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnSTConfig", function() { return fnSTConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelonModule", function() { return DelonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_module_import_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/module-import-guard */ "./src/app/core/module-import-guard.ts");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/abc */ "./node_modules/@delon/abc/fesm5/abc.js");
/* harmony import */ var _delon_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/chart */ "./node_modules/@delon/chart/fesm5/chart.js");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/fesm5/auth.js");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/acl */ "./node_modules/@delon/acl/fesm5/acl.js");
/* harmony import */ var _delon_cache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/cache */ "./node_modules/@delon/cache/fesm5/cache.js");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @delon/util */ "./node_modules/@delon/util/fesm5/util.js");
/* harmony import */ var _delon_mock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @delon/mock */ "./node_modules/@delon/mock/fesm5/mock.js");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../_mock */ "./_mock/index.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * 进一步对基础模块的导入提炼
 * 有关模块注册指导原则请参考：https://github.com/ng-alain/ng-alain/issues/180
 */









// #region mock



var MOCK_MODULES = !_env_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production
    ? [_delon_mock__WEBPACK_IMPORTED_MODULE_9__["DelonMockModule"].forRoot({ data: _mock__WEBPACK_IMPORTED_MODULE_10__ })]
    : [];
var REUSETAB_PROVIDES = [
// {
//   provide: RouteReuseStrategy,
//   useClass: ReuseTabStrategy,
//   deps: [ReuseTabService],
// },
];
// #endregion
// #region global config functions

function fnPageHeaderConfig() {
    return Object.assign(new _delon_abc__WEBPACK_IMPORTED_MODULE_3__["PageHeaderConfig"](), { homeI18n: 'home' });
}

function fnDelonAuthConfig() {
    return Object.assign(new _delon_auth__WEBPACK_IMPORTED_MODULE_5__["DelonAuthConfig"](), {
        login_url: '/passport/login',
    });
}
function fnSTConfig() {
    return Object.assign(new _delon_abc__WEBPACK_IMPORTED_MODULE_3__["STConfig"](), {
        modal: { size: 'lg' },
    });
}
var GLOBAL_CONFIG_PROVIDES = [
    // TIPS：@delon/abc 有大量的全局配置信息，例如设置所有 `st` 的页码默认为 `20` 行
    { provide: _delon_abc__WEBPACK_IMPORTED_MODULE_3__["STConfig"], useFactory: fnSTConfig },
    { provide: _delon_abc__WEBPACK_IMPORTED_MODULE_3__["PageHeaderConfig"], useFactory: fnPageHeaderConfig },
    { provide: _delon_auth__WEBPACK_IMPORTED_MODULE_5__["DelonAuthConfig"], useFactory: fnDelonAuthConfig },
];
// #endregion
var DelonModule = /** @class */ (function () {
    function DelonModule(parentModule) {
        Object(_core_module_import_guard__WEBPACK_IMPORTED_MODULE_1__["throwIfAlreadyLoaded"])(parentModule, 'DelonModule');
    }
    DelonModule_1 = DelonModule;
    DelonModule.forRoot = function () {
        return {
            ngModule: DelonModule_1,
            providers: REUSETAB_PROVIDES.concat(GLOBAL_CONFIG_PROVIDES),
        };
    };
    var DelonModule_1;
    DelonModule = DelonModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _delon_theme__WEBPACK_IMPORTED_MODULE_2__["AlainThemeModule"].forRoot(),
                _delon_abc__WEBPACK_IMPORTED_MODULE_3__["DelonABCModule"].forRoot(),
                _delon_chart__WEBPACK_IMPORTED_MODULE_4__["DelonChartModule"].forRoot(),
                _delon_auth__WEBPACK_IMPORTED_MODULE_5__["DelonAuthModule"].forRoot(),
                _delon_acl__WEBPACK_IMPORTED_MODULE_6__["DelonACLModule"].forRoot(),
                _delon_cache__WEBPACK_IMPORTED_MODULE_7__["DelonCacheModule"].forRoot(),
                _delon_util__WEBPACK_IMPORTED_MODULE_8__["DelonUtilModule"].forRoot()
            ].concat(MOCK_MODULES),
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [DelonModule])
    ], DelonModule);
    return DelonModule;
}());



/***/ }),

/***/ "./src/app/layout/default/default.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/default/default.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__progress-bar\" *ngIf=\"isFetching\"></div>\n<layout-header class=\"alain-default__header\"></layout-header>\n<layout-sidebar class=\"alain-default__aside\"></layout-sidebar>\n<section class=\"alain-default__content\">\n  <router-outlet></router-outlet>\n</section>\n<ng-template #settingHost></ng-template>\n"

/***/ }),

/***/ "./src/app/layout/default/default.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/default/default.component.ts ***!
  \*****************************************************/
/*! exports provided: LayoutDefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutDefaultComponent", function() { return LayoutDefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/util */ "./node_modules/@delon/util/fesm5/util.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm5/ant-design-icons-angular-icons.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _setting_drawer_setting_drawer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./setting-drawer/setting-drawer.component */ "./src/app/layout/default/setting-drawer/setting-drawer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






// #region icons

var ICONS = [
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["MenuFoldOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["MenuUnfoldOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["SearchOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["SettingOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["FullscreenOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["FullscreenExitOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["BellOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["LockOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["PlusOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["UserOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["LogoutOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["EllipsisOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["GlobalOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["ArrowDownOutline"],
    // Optional
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["GithubOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["AppstoreOutline"],
];
// #endregion


var LayoutDefaultComponent = /** @class */ (function () {
    function LayoutDefaultComponent(iconSrv, router, scroll, _message, resolver, menuSrv, settings, el, renderer, doc) {
        var _this = this;
        this.resolver = resolver;
        this.menuSrv = menuSrv;
        this.settings = settings;
        this.el = el;
        this.renderer = renderer;
        this.doc = doc;
        this.isFetching = false;
        iconSrv.addIcon.apply(iconSrv, ICONS);
        // scroll to top in change page
        router.events.subscribe(function (evt) {
            if (!_this.isFetching && evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteConfigLoadStart"]) {
                _this.isFetching = true;
            }
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"] || evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]) {
                _this.isFetching = false;
                if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                    _message.error("\u65E0\u6CD5\u52A0\u8F7D" + evt.url + "\u8DEF\u7531", { nzDuration: 1000 * 3 });
                }
                return;
            }
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            setTimeout(function () {
                scroll.scrollToTop();
                _this.isFetching = false;
            }, 100);
        });
    }
    LayoutDefaultComponent.prototype.setClass = function () {
        var _a;
        var _b = this, el = _b.el, renderer = _b.renderer, settings = _b.settings;
        var layout = settings.layout;
        Object(_delon_util__WEBPACK_IMPORTED_MODULE_4__["updateHostClass"])(el.nativeElement, renderer, (_a = {},
            _a['alain-default'] = true,
            _a["alain-default__fixed"] = layout.fixed,
            _a["alain-default__boxed"] = layout.boxed,
            _a["alain-default__collapsed"] = layout.collapsed,
            _a), true);
        this.doc.body.classList[layout.colorWeak ? 'add' : 'remove']('color-weak');
    };
    LayoutDefaultComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Setting componet for only developer
        if (!_env_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production) {
            setTimeout(function () {
                var settingFactory = _this.resolver.resolveComponentFactory(_setting_drawer_setting_drawer_component__WEBPACK_IMPORTED_MODULE_8__["SettingDrawerComponent"]);
                _this.settingHost.createComponent(settingFactory);
            }, 22);
        }
    };
    LayoutDefaultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notify$ = this.settings.notify.subscribe(function () { return _this.setClass(); });
        this.setClass();
    };
    LayoutDefaultComponent.prototype.ngOnDestroy = function () {
        this.notify$.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('settingHost', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], LayoutDefaultComponent.prototype, "settingHost", void 0);
    LayoutDefaultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'layout-default',
            template: __webpack_require__(/*! ./default.component.html */ "./src/app/layout/default/default.component.html"),
            preserveWhitespaces: false,
            host: {
                '[class.alain-default]': 'true',
            },
        }),
        __param(9, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzIconService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_5__["ScrollService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_5__["MenuService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_5__["SettingsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], Object])
    ], LayoutDefaultComponent);
    return LayoutDefaultComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/components/fullscreen.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/default/header/components/fullscreen.component.ts ***!
  \**************************************************************************/
/*! exports provided: HeaderFullScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFullScreenComponent", function() { return HeaderFullScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderFullScreenComponent = /** @class */ (function () {
    function HeaderFullScreenComponent() {
        this.status = false;
    }
    HeaderFullScreenComponent.prototype._resize = function () {
        this.status = screenfull__WEBPACK_IMPORTED_MODULE_1__["isFullscreen"];
    };
    HeaderFullScreenComponent.prototype._click = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_1__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_1__["toggle"]();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderFullScreenComponent.prototype, "_resize", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderFullScreenComponent.prototype, "_click", null);
    HeaderFullScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header-fullscreen',
            template: "\n    <i nz-icon [type]=\"status ? 'fullscreen' : 'fullscreen-exit'\"></i>\n    {{ status ? '\u9000\u51FA\u5168\u5C4F' : '\u5168\u5C4F' }}\n  ",
            host: {
                '[class.d-block]': 'true',
            },
        })
    ], HeaderFullScreenComponent);
    return HeaderFullScreenComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/components/icon.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/default/header/components/icon.component.ts ***!
  \********************************************************************/
/*! exports provided: HeaderIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderIconComponent", function() { return HeaderIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderIconComponent = /** @class */ (function () {
    function HeaderIconComponent() {
        this.loading = true;
    }
    HeaderIconComponent.prototype.change = function () {
        var _this = this;
        setTimeout(function () { return (_this.loading = false); }, 500);
    };
    HeaderIconComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header-icon',
            template: "\n  <nz-dropdown nzTrigger=\"click\" nzPlacement=\"bottomRight\" (nzVisibleChange)=\"change()\">\n    <div class=\"alain-default__nav-item\" nz-dropdown>\n      <i class=\"anticon anticon-appstore-o\"></i>\n    </div>\n    <div nz-menu class=\"wd-xl animated jello\">\n      <nz-spin [nzSpinning]=\"loading\" [nzTip]=\"'\u6B63\u5728\u8BFB\u53D6\u6570\u636E...'\">\n        <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"app-icons\">\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-calendar bg-error text-white\"></i>\n            <small>Calendar</small>\n          </div>\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-file bg-geekblue text-white\"></i>\n            <small>Files</small>\n          </div>\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-cloud bg-success text-white\"></i>\n            <small>Cloud</small>\n          </div>\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-star-o bg-magenta text-white\"></i>\n            <small>Star</small>\n          </div>\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-team bg-purple text-white\"></i>\n            <small>Team</small>\n          </div>\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-scan bg-warning text-white\"></i>\n            <small>QR</small>\n          </div>\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-pay-circle-o bg-cyan text-white\"></i>\n            <small>Pay</small>\n          </div>\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-printer bg-grey text-white\"></i>\n            <small>Print</small>\n          </div>\n        </div>\n      </nz-spin>\n    </div>\n  </nz-dropdown>\n  ",
        })
    ], HeaderIconComponent);
    return HeaderIconComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/components/notify.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/default/header/components/notify.component.ts ***!
  \**********************************************************************/
/*! exports provided: HeaderNotifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNotifyComponent", function() { return HeaderNotifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/distance_in_words_to_now */ "./node_modules/date-fns/distance_in_words_to_now/index.js");
/* harmony import */ var date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * 菜单通知
 */
var HeaderNotifyComponent = /** @class */ (function () {
    function HeaderNotifyComponent(msg) {
        this.msg = msg;
        this.data = [
            {
                title: '通知',
                list: [],
                emptyText: '你已查看所有通知',
                emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg',
                clearText: '清空通知',
            },
            {
                title: '消息',
                list: [],
                emptyText: '您已读完所有消息',
                emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg',
                clearText: '清空消息',
            },
            {
                title: '待办',
                list: [],
                emptyText: '你已完成所有待办',
                emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg',
                clearText: '清空待办',
            },
        ];
        this.count = 5;
        this.loading = false;
    }
    HeaderNotifyComponent.prototype.updateNoticeData = function (notices) {
        var data = this.data.slice();
        data.forEach(function (i) { return (i.list = []); });
        notices.forEach(function (item) {
            var newItem = __assign({}, item);
            if (newItem.datetime)
                newItem.datetime = date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_1__(item.datetime, {
                    locale: window.__locale__,
                });
            if (newItem.extra && newItem.status) {
                newItem.color = {
                    todo: undefined,
                    processing: 'blue',
                    urgent: 'red',
                    doing: 'gold',
                }[newItem.status];
            }
            data.find(function (w) { return w.title === newItem.type; }).list.push(newItem);
        });
        return data;
    };
    HeaderNotifyComponent.prototype.loadData = function () {
        var _this = this;
        if (this.loading)
            return;
        this.loading = true;
        setTimeout(function () {
            _this.data = _this.updateNoticeData([
                {
                    id: '000000001',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
                    title: '你收到了 14 份新周报',
                    datetime: '2017-08-09',
                    type: '通知',
                },
                {
                    id: '000000002',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
                    title: '你推荐的 曲妮妮 已通过第三轮面试',
                    datetime: '2017-08-08',
                    type: '通知',
                },
                {
                    id: '000000003',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
                    title: '这种模板可以区分多种通知类型',
                    datetime: '2017-08-07',
                    read: true,
                    type: '通知',
                },
                {
                    id: '000000004',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
                    title: '左侧图标用于区分不同的类型',
                    datetime: '2017-08-07',
                    type: '通知',
                },
                {
                    id: '000000005',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
                    title: '内容不要超过两行字，超出时自动截断',
                    datetime: '2017-08-07',
                    type: '通知',
                },
                {
                    id: '000000006',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                    title: '曲丽丽 评论了你',
                    description: '描述信息描述信息描述信息',
                    datetime: '2017-08-07',
                    type: '消息',
                },
                {
                    id: '000000007',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                    title: '朱偏右 回复了你',
                    description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
                    datetime: '2017-08-07',
                    type: '消息',
                },
                {
                    id: '000000008',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                    title: '标题',
                    description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
                    datetime: '2017-08-07',
                    type: '消息',
                },
                {
                    id: '000000009',
                    title: '任务名称',
                    description: '任务需要在 2017-01-12 20:00 前启动',
                    extra: '未开始',
                    status: 'todo',
                    type: '待办',
                },
                {
                    id: '000000010',
                    title: '第三方紧急代码变更',
                    description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
                    extra: '马上到期',
                    status: 'urgent',
                    type: '待办',
                },
                {
                    id: '000000011',
                    title: '信息安全考试',
                    description: '指派竹尔于 2017-01-09 前完成更新并发布',
                    extra: '已耗时 8 天',
                    status: 'doing',
                    type: '待办',
                },
                {
                    id: '000000012',
                    title: 'ABCD 版本发布',
                    description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
                    extra: '进行中',
                    status: 'processing',
                    type: '待办',
                },
            ]);
            _this.loading = false;
        }, 1000);
    };
    HeaderNotifyComponent.prototype.clear = function (type) {
        this.msg.success("\u6E05\u7A7A\u4E86 " + type);
    };
    HeaderNotifyComponent.prototype.select = function (res) {
        this.msg.success("\u70B9\u51FB\u4E86 " + res.title + " \u7684 " + res.item.title);
    };
    HeaderNotifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header-notify',
            template: "\n  <notice-icon\n    [data]=\"data\"\n    [count]=\"count\"\n    [loading]=\"loading\"\n    (select)=\"select($event)\"\n    (clear)=\"clear($event)\"\n    (popoverVisibleChange)=\"loadData()\"></notice-icon>\n  ",
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]])
    ], HeaderNotifyComponent);
    return HeaderNotifyComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/components/search.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/default/header/components/search.component.ts ***!
  \**********************************************************************/
/*! exports provided: HeaderSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSearchComponent", function() { return HeaderSearchComponent; });
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

var HeaderSearchComponent = /** @class */ (function () {
    function HeaderSearchComponent(el) {
        this.el = el;
        this.focus = false;
        this.searchToggled = false;
    }
    Object.defineProperty(HeaderSearchComponent.prototype, "toggleChange", {
        set: function (value) {
            var _this = this;
            if (typeof value === 'undefined')
                return;
            this.searchToggled = true;
            this.focus = true;
            setTimeout(function () { return _this.qIpt.focus(); }, 300);
        },
        enumerable: true,
        configurable: true
    });
    HeaderSearchComponent.prototype.ngAfterViewInit = function () {
        this.qIpt = this.el.nativeElement.querySelector('.ant-input');
    };
    HeaderSearchComponent.prototype.qFocus = function () {
        this.focus = true;
    };
    HeaderSearchComponent.prototype.qBlur = function () {
        this.focus = false;
        this.searchToggled = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.alain-default__search-focus'),
        __metadata("design:type", Object)
    ], HeaderSearchComponent.prototype, "focus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.alain-default__search-toggled'),
        __metadata("design:type", Object)
    ], HeaderSearchComponent.prototype, "searchToggled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], HeaderSearchComponent.prototype, "toggleChange", null);
    HeaderSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header-search',
            template: "\n  <nz-input-group [nzAddOnBeforeIcon]=\"focus ? 'anticon anticon-arrow-down' : 'anticon anticon-search'\">\n    <input nz-input [(ngModel)]=\"q\" (focus)=\"qFocus()\" (blur)=\"qBlur()\"\n      [placeholder]=\"'\u641C\u7D22\uFF1A\u5458\u5DE5\u3001\u6587\u4EF6\u3001\u7167\u7247\u7B49'\">\n  </nz-input-group>\n  ",
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HeaderSearchComponent);
    return HeaderSearchComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/components/storage.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/default/header/components/storage.component.ts ***!
  \***********************************************************************/
/*! exports provided: HeaderStorageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderStorageComponent", function() { return HeaderStorageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderStorageComponent = /** @class */ (function () {
    function HeaderStorageComponent(confirmServ, messageServ) {
        this.confirmServ = confirmServ;
        this.messageServ = messageServ;
    }
    HeaderStorageComponent.prototype._click = function () {
        var _this = this;
        this.confirmServ.confirm({
            nzTitle: 'Make sure clear all local storage?',
            nzOnOk: function () {
                localStorage.clear();
                _this.messageServ.success('Clear Finished!');
            },
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderStorageComponent.prototype, "_click", null);
    HeaderStorageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header-storage',
            template: "\n  <i nz-icon type=\"tool\"></i>\n  \u6E05\u7406\u672C\u5730\u7F13\u5B58\n  ",
            host: {
                '[class.d-block]': 'true',
            },
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzModalService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], HeaderStorageComponent);
    return HeaderStorageComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/components/task.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/default/header/components/task.component.ts ***!
  \********************************************************************/
/*! exports provided: HeaderTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTaskComponent", function() { return HeaderTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderTaskComponent = /** @class */ (function () {
    function HeaderTaskComponent() {
        this.loading = true;
    }
    HeaderTaskComponent.prototype.change = function () {
        var _this = this;
        setTimeout(function () { return (_this.loading = false); }, 500);
    };
    HeaderTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header-task',
            template: "\n  <nz-dropdown nzTrigger=\"click\" nzPlacement=\"bottomRight\" (nzVisibleChange)=\"change()\">\n    <div class=\"alain-default__nav-item\" nz-dropdown>\n      <nz-badge [nzDot]=\"true\">\n        <i nz-icon type=\"bell\" class=\"alain-default__nav-item-icon\"></i>\n      </nz-badge>\n    </div>\n    <div nz-menu class=\"wd-lg\">\n      <nz-card nzTitle=\"Notifications\" [nzLoading]=\"loading\" nzBordered=\"false\" class=\"ant-card__body-nopadding\">\n        <ng-template #extra><i nz-icon type=\"plus\"></i></ng-template>\n        <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\">\n          <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n            <nz-avatar [nzSrc]=\"'./assets/tmp/img/1.png'\"></nz-avatar>\n          </div>\n          <div nz-col [nzSpan]=\"20\">\n            <strong>cipchk</strong>\n            <p class=\"mb0\">Please tell me what happened in a few words, don't go into details.</p>\n          </div>\n        </div>\n        <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\">\n          <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n            <nz-avatar [nzSrc]=\"'./assets/tmp/img/2.png'\"></nz-avatar>\n          </div>\n          <div nz-col [nzSpan]=\"20\">\n            <strong>\u306F\u306A\u3055\u304D</strong>\n            <p class=\"mb0\">\u30CF\u30EB\u30AB\u30BD\u30E9\u30C8\u30AD\u30D8\u30C0\u30C4\u30D2\u30AB\u30EA </p>\n          </div>\n        </div>\n        <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\">\n          <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n            <nz-avatar [nzSrc]=\"'./assets/tmp/img/3.png'\"></nz-avatar>\n          </div>\n          <div nz-col [nzSpan]=\"20\">\n            <strong>\u82CF\u5148\u751F</strong>\n            <p class=\"mb0\">\u8BF7\u544A\u8BC9\u6211\uFF0C\u6211\u5E94\u8BE5\u8BF4\u70B9\u4EC0\u4E48\u597D\uFF1F</p>\n          </div>\n        </div>\n        <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\">\n          <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n            <nz-avatar [nzSrc]=\"'./assets/tmp/img/4.png'\"></nz-avatar>\n          </div>\n          <div nz-col [nzSpan]=\"20\">\n            <strong>Kent</strong>\n            <p class=\"mb0\">Please tell me what happened in a few words, don't go into details.</p>\n          </div>\n        </div>\n        <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\">\n          <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n            <nz-avatar [nzSrc]=\"'./assets/tmp/img/5.png'\"></nz-avatar>\n          </div>\n          <div nz-col [nzSpan]=\"20\">\n            <strong>Jefferson</strong>\n            <p class=\"mb0\">Please tell me what happened in a few words, don't go into details.</p>\n          </div>\n        </div>\n        <div nz-row>\n          <div nz-col [nzSpan]=\"24\" class=\"pt-md border-top-1 text-center text-grey point\">\n            See All\n          </div>\n        </div>\n      </nz-card>\n    </div>\n  </nz-dropdown>\n  ",
        })
    ], HeaderTaskComponent);
    return HeaderTaskComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/components/user.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/default/header/components/user.component.ts ***!
  \********************************************************************/
/*! exports provided: HeaderUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderUserComponent", function() { return HeaderUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/fesm5/auth.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var HeaderUserComponent = /** @class */ (function () {
    function HeaderUserComponent(settings, router, tokenService) {
        this.settings = settings;
        this.router = router;
        this.tokenService = tokenService;
    }
    HeaderUserComponent.prototype.logout = function () {
        this.tokenService.clear();
        this.router.navigateByUrl(this.tokenService.login_url);
    };
    HeaderUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header-user',
            template: "\n  <nz-dropdown nzPlacement=\"bottomRight\">\n    <div class=\"alain-default__nav-item d-flex align-items-center px-sm\" nz-dropdown>\n      <nz-avatar [nzSrc]=\"settings.user.avatar\" nzSize=\"small\" class=\"mr-sm\"></nz-avatar>\n      {{settings.user.name}}\n    </div>\n    <div nz-menu class=\"width-sm\">\n      <div nz-menu-item routerLink=\"/pro/account/center\"><i nz-icon type=\"user\" class=\"mr-sm\"></i>\n        \u4E2A\u4EBA\u4E2D\u5FC3\n      </div>\n      <div nz-menu-item routerLink=\"/pro/account/settings\"><i nz-icon type=\"setting\" class=\"mr-sm\"></i>\n        \u4E2A\u4EBA\u8BBE\u7F6E\n      </div>\n      <li nz-menu-divider></li>\n      <div nz-menu-item (click)=\"logout()\"><i nz-icon type=\"logout\" class=\"mr-sm\"></i>\n        \u9000\u51FA\u767B\u5F55\n      </div>\n    </div>\n  </nz-dropdown>\n  ",
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_delon_auth__WEBPACK_IMPORTED_MODULE_3__["DA_SERVICE_TOKEN"])),
        __metadata("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object])
    ], HeaderUserComponent);
    return HeaderUserComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/header.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/default/header/header.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__header-logo\">\n  <a [routerLink]=\"['/']\" class=\"alain-default__header-logo-link\">\n    <img class=\"alain-default__header-logo-expanded\" src=\"./assets/logo-full.svg\" alt=\"{{settings.app.name}}\" style=\"max-height:40px;\" />\n    <img class=\"alain-default__header-logo-collapsed\" src=\"./assets/logo.svg\" alt=\"{{settings.app.name}}\" style=\"max-height:30px;\" />\n  </a>\n</div>\n<div class=\"alain-default__nav-wrap\">\n  <ul class=\"alain-default__nav\">\n    <!-- Menu -->\n    <li>\n      <div class=\"alain-default__nav-item\" (click)=\"toggleCollapsedSidebar()\">\n        <i nz-icon type=\"menu-{{settings.layout.collapsed ? 'unfold' : 'fold'}}\"></i>\n      </div>\n    </li>\n    <!-- Github Page -->\n    <li>\n      <a class=\"alain-default__nav-item\" href=\"//github.com/ng-alain/ng-alain\" target=\"_blank\">\n        <i nz-icon type=\"github\"></i>\n      </a>\n    </li>\n    <!-- Lock Page -->\n    <li class=\"hidden-mobile\">\n      <div class=\"alain-default__nav-item\" [routerLink]=\"['/lock']\">\n        <i nz-icon type=\"lock\"></i>\n      </div>\n    </li>\n    <!-- Search Button -->\n    <li class=\"hidden-pc\" (click)=\"searchToggleChange()\">\n      <div class=\"alain-default__nav-item\">\n        <i nz-icon type=\"search\"></i>\n      </div>\n    </li>\n  </ul>\n  <header-search class=\"alain-default__search\" [toggleChange]=\"searchToggleStatus\"></header-search>\n  <ul class=\"alain-default__nav\">\n    <!-- Notify -->\n    <li>\n      <header-notify></header-notify>\n    </li>\n    <!-- Task -->\n    <li class=\"hidden-mobile\">\n      <header-task></header-task>\n    </li>\n    <!-- App Icons -->\n    <li class=\"hidden-mobile\">\n      <header-icon></header-icon>\n    </li>\n    <!-- Settings -->\n    <li class=\"hidden-mobile\">\n      <nz-dropdown nzTrigger=\"click\" nzPlacement=\"bottomRight\">\n        <div class=\"alain-default__nav-item\" nz-dropdown>\n          <i nz-icon type=\"setting\"></i>\n        </div>\n        <div nz-menu style=\"width:200px;\">\n          <div nz-menu-item>\n            <header-fullscreen></header-fullscreen>\n          </div>\n          <div nz-menu-item>\n            <header-storage></header-storage>\n          </div>\n        </div>\n      </nz-dropdown>\n    </li>\n    <li class=\"hidden-mobile\">\n      <header-user></header-user>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/default/header/header.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/default/header/header.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(settings) {
        this.settings = settings;
    }
    HeaderComponent.prototype.toggleCollapsedSidebar = function () {
        this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
    };
    HeaderComponent.prototype.searchToggleChange = function () {
        this.searchToggleStatus = !this.searchToggleStatus;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'layout-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/default/header/header.component.html"),
        }),
        __metadata("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_1__["SettingsService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/setting-drawer/setting-drawer-item.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/default/setting-drawer/setting-drawer-item.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>{{i.label}}<span class=\"pl-sm text-grey\">{{i.tip}}</span></span>\n<div [ngSwitch]=\"i.type\">\n  <ng-container *ngSwitchCase=\"'color'\">\n    <input nz-input type=\"color\" style=\"min-width: 88px\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{standalone: true}\">\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'input'\">\n    <input nz-input style=\"min-width: 88px\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{standalone: true}\">\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'px'\">\n    <nz-input-number [(ngModel)]=\"pxVal\" (ngModelChange)=\"pxChange($event)\" [nzMin]=\"i.min\" [nzMax]=\"i.max\"\n                     [nzStep]=\"i.step || 2\" [nzFormatter]=\"format\"></nz-input-number>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'switch'\">\n    <nz-switch nzSize=\"small\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{standalone: true}\"></nz-switch>\n  </ng-container>\n  <ng-container *ngSwitchDefault>\n    <ng-content></ng-content>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/default/setting-drawer/setting-drawer-item.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/default/setting-drawer/setting-drawer-item.component.ts ***!
  \********************************************************************************/
/*! exports provided: SettingDrawerItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingDrawerItemComponent", function() { return SettingDrawerItemComponent; });
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

var SettingDrawerItemComponent = /** @class */ (function () {
    function SettingDrawerItemComponent() {
        this.i = {};
        this.format = function (value) { return value + " px"; };
    }
    Object.defineProperty(SettingDrawerItemComponent.prototype, "data", {
        set: function (val) {
            this.i = val;
            if (val.type === 'px') {
                this.pxVal = +val.value.replace('px', '');
            }
        },
        enumerable: true,
        configurable: true
    });
    SettingDrawerItemComponent.prototype.pxChange = function (val) {
        this.i.value = val + "px";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SettingDrawerItemComponent.prototype, "data", null);
    SettingDrawerItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'setting-drawer-item',
            template: __webpack_require__(/*! ./setting-drawer-item.component.html */ "./src/app/layout/default/setting-drawer/setting-drawer-item.component.html"),
            preserveWhitespaces: false,
            host: {
                '[class.setting-drawer__body-item]': 'true',
            },
        })
    ], SettingDrawerItemComponent);
    return SettingDrawerItemComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/setting-drawer/setting-drawer.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/default/setting-drawer/setting-drawer.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-drawer [(nzVisible)]=\"collapse\" [nzWidth]=\"500\" (nzOnClose)=\"toggle()\">\n  <div class=\"setting-drawer__content\">\n    <div class=\"setting-drawer__body setting-drawer__theme\">\n      <h3 class=\"setting-drawer__title\">主题色</h3>\n      <span *ngFor=\"let c of colors\" nz-tooltip [ngStyle]=\"{ 'background-color': c.color }\" (click)=\"changeColor(c.color)\"\n            nz-tooltip [nzTitle]=\"c.key\" class=\"setting-drawer__theme-tag\"><i *ngIf=\"color === c.color\"\n           class=\"anticon anticon-check\"></i></span>\n    </div>\n    <nz-divider></nz-divider>\n    <div class=\"setting-drawer__body\">\n      <h3 class=\"setting-drawer__title\">设置</h3>\n      <nz-tabset>\n        <nz-tab nzTitle=\"顶部\">\n          <div class=\"setting-drawer__body\">\n            <setting-drawer-item [data]=\"data['alain-default-header-hg']\"></setting-drawer-item>\n            <setting-drawer-item [data]=\"data['alain-default-header-bg']\"></setting-drawer-item>\n            <setting-drawer-item [data]=\"data['alain-default-header-padding']\"></setting-drawer-item>\n          </div>\n        </nz-tab>\n        <nz-tab nzTitle=\"侧边栏\">\n          <setting-drawer-item [data]=\"data['alain-default-aside-wd']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-aside-bg']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-aside-collapsed-wd']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-aside-nav-padding-top-bottom']\"></setting-drawer-item>\n        </nz-tab>\n        <nz-tab nzTitle=\"内容\">\n          <setting-drawer-item [data]=\"data['alain-default-content-bg']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-bg']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-border']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-content-padding']\"></setting-drawer-item>\n        </nz-tab>\n        <nz-tab nzTitle=\"其它\">\n          <setting-drawer-item [data]=\"data['form-state-visual-feedback-enabled']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['preserve-white-spaces-enabled']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-radius']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-margin-right']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-max-width']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-max-height']\"></setting-drawer-item>\n        </nz-tab>\n      </nz-tabset>\n    </div>\n    <nz-divider></nz-divider>\n    <div class=\"setting-drawer__body\">\n      <div class=\"setting-drawer__body-item\">\n        固定头和侧边栏\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"layout.fixed\" (ngModelChange)=\"setLayout('fixed', layout.fixed)\"></nz-switch>\n      </div>\n      <div class=\"setting-drawer__body-item\">\n        色弱模式\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"layout.colorWeak\" (ngModelChange)=\"setLayout('colorWeak', layout.colorWeak)\"></nz-switch>\n      </div>\n    </div>\n    <nz-divider></nz-divider>\n    <button (click)=\"apply()\" type=\"button\" nz-button nzType=\"primary\">预览</button>\n    <button (click)=\"reset()\" type=\"button\" nz-button>重置</button>\n    <button (click)=\"copyVar()\" type=\"button\" nz-button>拷贝</button>\n    <nz-alert class=\"mt-md\" nzType=\"warning\" nzMessage=\"配置栏只在开发环境用于预览，生产环境不会展现，请拷贝后手动修改参数配置文件 src/styles/theme.less\"></nz-alert>\n  </div>\n</nz-drawer>\n<div class=\"setting-drawer__handle\" [ngClass]=\"{'setting-drawer__handle-opened': collapse}\" (click)=\"toggle()\">\n  <i class=\"anticon anticon-{{!collapse ? 'setting' : 'close'}} setting-drawer__handle-icon\"></i>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/default/setting-drawer/setting-drawer.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/default/setting-drawer/setting-drawer.component.ts ***!
  \***************************************************************************/
/*! exports provided: SettingDrawerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingDrawerComponent", function() { return SettingDrawerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/util */ "./node_modules/@delon/util/fesm5/util.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ALAINDEFAULTVAR = 'alain-default-vars';
var DEFAULT_COLORS = [
    {
        key: 'dust',
        color: '#F5222D',
    },
    {
        key: 'volcano',
        color: '#FA541C',
    },
    {
        key: 'sunset',
        color: '#FAAD14',
    },
    {
        key: 'cyan',
        color: '#13C2C2',
    },
    {
        key: 'green',
        color: '#52C41A',
    },
    {
        key: 'daybreak',
        color: '#1890ff',
    },
    {
        key: 'geekblue',
        color: '#2F54EB',
    },
    {
        key: 'purple',
        color: '#722ED1',
    },
];
var DEFAULT_VARS = {
    'primary-color': { label: '主颜色', type: 'color', default: '#1890ff' },
    'alain-default-header-hg': {
        label: '高',
        type: 'px',
        default: '64px',
        max: 300,
        min: 24,
    },
    'alain-default-header-bg': {
        label: '背景色',
        type: 'color',
        default: '@primary-color',
        tip: '默认同主色系',
    },
    'alain-default-header-padding': {
        label: '顶部左右内边距',
        type: 'px',
        default: '16px',
    },
    // 侧边栏
    'alain-default-aside-wd': { label: '宽度', type: 'px', default: '200px' },
    'alain-default-aside-bg': {
        label: '背景',
        type: 'color',
        default: '#ffffff',
    },
    'alain-default-aside-collapsed-wd': {
        label: '收缩宽度',
        type: 'px',
        default: '64px',
    },
    'alain-default-aside-nav-padding-top-bottom': {
        label: '项上下内边距',
        type: 'px',
        default: '8px',
        step: 8,
    },
    // 主菜单
    'alain-default-aside-nav-fs': {
        label: '菜单字号',
        type: 'px',
        default: '14px',
        min: 14,
        max: 30,
    },
    'alain-default-aside-collapsed-nav-fs': {
        label: '收缩菜单字号',
        type: 'px',
        default: '24px',
        min: 24,
        max: 32,
    },
    'alain-default-aside-nav-item-height': {
        label: '菜单项高度',
        type: 'px',
        default: '38px',
        min: 24,
        max: 64,
    },
    'alain-default-aside-nav-text-color': {
        label: '菜单文本颜色',
        type: 'color',
        default: 'rgba(0, 0, 0, 0.65)',
        rgba: true,
    },
    'alain-default-aside-nav-text-hover-color': {
        label: '菜单文本悬停颜色',
        type: 'color',
        default: '@primary-color',
        tip: '默认同主色系',
    },
    'alain-default-aside-nav-group-text-color': {
        label: '菜单分组文本颜色',
        type: 'color',
        default: 'rgba(0, 0, 0, 0.43)',
        rgba: true,
    },
    'alain-default-aside-nav-selected-text-color': {
        label: '菜单激活时文本颜色',
        type: 'color',
        default: '@primary-color',
        tip: '默认同主色系',
    },
    'alain-default-aside-nav-selected-bg': {
        label: '菜单激活时背景颜色',
        type: 'color',
        default: '#fcfcfc',
    },
    // 内容
    'alain-default-content-bg': {
        label: '背景色',
        type: 'color',
        default: '#f5f7fa',
    },
    'alain-default-content-heading-bg': {
        label: '标题背景色',
        type: 'color',
        default: '#fafbfc',
    },
    'alain-default-content-heading-border': {
        label: '标题底部边框色',
        type: 'color',
        default: '#efe3e5',
    },
    'alain-default-content-padding': {
        label: '内边距',
        type: 'px',
        default: '24px',
        min: 0,
        max: 128,
        step: 8,
    },
    // zorro组件修正
    'form-state-visual-feedback-enabled': {
        label: '开启表单元素的视觉反馈',
        type: 'switch',
        default: true,
    },
    'preserve-white-spaces-enabled': {
        label: '开启 preserveWhitespaces',
        type: 'switch',
        default: true,
    },
    'nz-table-img-radius': {
        label: '表格中：图片圆角',
        type: 'px',
        default: '4px',
        min: 0,
        max: 128,
    },
    'nz-table-img-margin-right': {
        label: '表格中：图片右外边距',
        type: 'px',
        default: '4px',
        min: 0,
        max: 128,
    },
    'nz-table-img-max-width': {
        label: '表格中：图片最大宽度',
        type: 'px',
        default: '32px',
        min: 8,
        max: 128,
    },
    'nz-table-img-max-height': {
        label: '表格中：图片最大高度',
        type: 'px',
        default: '32px',
        min: 8,
        max: 128,
    },
};
var SettingDrawerComponent = /** @class */ (function () {
    function SettingDrawerComponent(cd, msg, settingSrv, lazy, zone, doc) {
        this.cd = cd;
        this.msg = msg;
        this.settingSrv = settingSrv;
        this.lazy = lazy;
        this.zone = zone;
        this.doc = doc;
        this.loadedLess = false;
        this.collapse = false;
        this.data = {};
        this.colors = DEFAULT_COLORS;
        this.color = this.cachedData['@primary-color'] || this.DEFAULT_PRIMARY;
        this.resetData(this.cachedData, false);
    }
    Object.defineProperty(SettingDrawerComponent.prototype, "layout", {
        get: function () {
            return this.settingSrv.layout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingDrawerComponent.prototype, "cachedData", {
        get: function () {
            return this.settingSrv.layout[ALAINDEFAULTVAR] || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingDrawerComponent.prototype, "DEFAULT_PRIMARY", {
        get: function () {
            return DEFAULT_VARS['primary-color'].default;
        },
        enumerable: true,
        configurable: true
    });
    SettingDrawerComponent.prototype.loadLess = function () {
        var _this = this;
        if (this.loadedLess)
            return Promise.resolve();
        return this.lazy
            .loadStyle('./assets/alain-default.less', 'stylesheet/less')
            .then(function () {
            var lessConfigNode = _this.doc.createElement('script');
            lessConfigNode.innerHTML = "\n          window.less = {\n            async: true,\n            env: 'production',\n            javascriptEnabled: true\n          };\n        ";
            _this.doc.body.appendChild(lessConfigNode);
        })
            .then(function () {
            return _this.lazy.loadScript('https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js');
        })
            .then(function () {
            _this.loadedLess = true;
        });
    };
    SettingDrawerComponent.prototype.genVars = function () {
        var _a;
        var _b = this, data = _b.data, color = _b.color, validKeys = _b.validKeys;
        var vars = (_a = {},
            _a["@primary-color"] = color,
            _a);
        validKeys
            .filter(function (key) { return key !== 'primary-color'; })
            .forEach(function (key) { return (vars["@" + key] = data[key].value); });
        this.setLayout(ALAINDEFAULTVAR, vars);
        return vars;
    };
    SettingDrawerComponent.prototype.runLess = function () {
        var _this = this;
        var _a = this, zone = _a.zone, msg = _a.msg, cd = _a.cd;
        var msgId = msg.loading("\u6B63\u5728\u7F16\u8BD1\u4E3B\u9898\uFF01", { nzDuration: 0 }).messageId;
        setTimeout(function () {
            zone.runOutsideAngular(function () {
                _this.loadLess().then(function () {
                    window.less.modifyVars(_this.genVars()).then(function () {
                        msg.success('成功');
                        msg.remove(msgId);
                        zone.run(function () { return cd.detectChanges(); });
                    });
                });
            });
        }, 200);
    };
    SettingDrawerComponent.prototype.toggle = function () {
        this.collapse = !this.collapse;
    };
    SettingDrawerComponent.prototype.changeColor = function (color) {
        var _this = this;
        this.color = color;
        Object.keys(DEFAULT_VARS)
            .filter(function (key) { return DEFAULT_VARS[key].default === '@primary-color'; })
            .forEach(function (key) { return delete _this.cachedData["@" + key]; });
        this.resetData(this.cachedData, false);
    };
    SettingDrawerComponent.prototype.setLayout = function (name, value) {
        this.settingSrv.setLayout(name, value);
    };
    SettingDrawerComponent.prototype.resetData = function (nowData, run) {
        var _this = this;
        if (run === void 0) { run = true; }
        nowData = nowData || {};
        var data = Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["deepCopy"])(DEFAULT_VARS);
        Object.keys(data).forEach(function (key) {
            var value = nowData["@" + key] || data[key].default || '';
            data[key].value = value === "@primary-color" ? _this.color : value;
        });
        this.data = data;
        if (run) {
            this.cd.detectChanges();
            this.runLess();
        }
    };
    Object.defineProperty(SettingDrawerComponent.prototype, "validKeys", {
        get: function () {
            var _this = this;
            return Object.keys(this.data).filter(function (key) { return _this.data[key].value !== _this.data[key].default; });
        },
        enumerable: true,
        configurable: true
    });
    SettingDrawerComponent.prototype.apply = function () {
        this.runLess();
    };
    SettingDrawerComponent.prototype.reset = function () {
        this.color = this.DEFAULT_PRIMARY;
        this.settingSrv.setLayout(ALAINDEFAULTVAR, {});
        this.resetData({});
    };
    SettingDrawerComponent.prototype.copyVar = function () {
        var vars = this.genVars();
        var copyContent = Object.keys(vars)
            .map(function (key) { return key + ": " + vars[key] + ";"; })
            .join('\n');
        Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["copy"])(copyContent);
        this.msg.success('Copy success');
    };
    SettingDrawerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'setting-drawer',
            template: __webpack_require__(/*! ./setting-drawer.component.html */ "./src/app/layout/default/setting-drawer/setting-drawer.component.html"),
            preserveWhitespaces: false,
            host: {
                '[class.setting-drawer]': 'true',
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_4__["SettingsService"],
            _delon_util__WEBPACK_IMPORTED_MODULE_3__["LazyService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], Object])
    ], SettingDrawerComponent);
    return SettingDrawerComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/sidebar/sidebar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/default/sidebar/sidebar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__aside-inner\">\n  <nz-dropdown nzTrigger=\"click\" class=\"alain-default__aside-user\">\n    <div nz-dropdown class=\"user-block-dropdown\">\n      <nz-avatar class=\"alain-default__aside-user-avatar\" [nzSrc]=\"settings.user.avatar\"></nz-avatar>\n      <div class=\"alain-default__aside-user-info\">\n        <strong>{{settings.user.name}}</strong>\n        <p class=\"text-truncate mb0\">{{settings.user.email}}</p>\n      </div>\n    </div>\n    <ul nz-menu>\n      <li nz-menu-item routerLink=\"/pro/account/center\">个人中心</li>\n      <li nz-menu-item routerLink=\"/pro/account/settings\">个人设置</li>\n    </ul>\n  </nz-dropdown>\n  <sidebar-nav class=\"d-block py-lg\"></sidebar-nav>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/default/sidebar/sidebar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/default/sidebar/sidebar.component.ts ***!
  \*************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(settings, msgSrv) {
        this.settings = settings;
        this.msgSrv = msgSrv;
    }
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'layout-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/layout/default/sidebar/sidebar.component.html"),
        }),
        __metadata("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layout/fullscreen/fullscreen.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/fullscreen/fullscreen.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/layout/fullscreen/fullscreen.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/fullscreen/fullscreen.component.ts ***!
  \***********************************************************/
/*! exports provided: LayoutFullScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutFullScreenComponent", function() { return LayoutFullScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LayoutFullScreenComponent = /** @class */ (function () {
    function LayoutFullScreenComponent() {
    }
    LayoutFullScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'layout-fullscreen',
            template: __webpack_require__(/*! ./fullscreen.component.html */ "./src/app/layout/fullscreen/fullscreen.component.html"),
            host: {
                '[class.alain-fullscreen]': 'true',
            },
        })
    ], LayoutFullScreenComponent);
    return LayoutFullScreenComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default/default.component */ "./src/app/layout/default/default.component.ts");
/* harmony import */ var _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fullscreen/fullscreen.component */ "./src/app/layout/fullscreen/fullscreen.component.ts");
/* harmony import */ var _default_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default/header/header.component */ "./src/app/layout/default/header/header.component.ts");
/* harmony import */ var _default_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./default/sidebar/sidebar.component */ "./src/app/layout/default/sidebar/sidebar.component.ts");
/* harmony import */ var _default_header_components_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default/header/components/search.component */ "./src/app/layout/default/header/components/search.component.ts");
/* harmony import */ var _default_header_components_notify_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./default/header/components/notify.component */ "./src/app/layout/default/header/components/notify.component.ts");
/* harmony import */ var _default_header_components_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./default/header/components/task.component */ "./src/app/layout/default/header/components/task.component.ts");
/* harmony import */ var _default_header_components_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./default/header/components/icon.component */ "./src/app/layout/default/header/components/icon.component.ts");
/* harmony import */ var _default_header_components_fullscreen_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./default/header/components/fullscreen.component */ "./src/app/layout/default/header/components/fullscreen.component.ts");
/* harmony import */ var _default_header_components_storage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./default/header/components/storage.component */ "./src/app/layout/default/header/components/storage.component.ts");
/* harmony import */ var _default_header_components_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./default/header/components/user.component */ "./src/app/layout/default/header/components/user.component.ts");
/* harmony import */ var _default_setting_drawer_setting_drawer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./default/setting-drawer/setting-drawer.component */ "./src/app/layout/default/setting-drawer/setting-drawer.component.ts");
/* harmony import */ var _default_setting_drawer_setting_drawer_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./default/setting-drawer/setting-drawer-item.component */ "./src/app/layout/default/setting-drawer/setting-drawer-item.component.ts");
/* harmony import */ var _passport_passport_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./passport/passport.component */ "./src/app/layout/passport/passport.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var SETTINGDRAWER = [_default_setting_drawer_setting_drawer_component__WEBPACK_IMPORTED_MODULE_13__["SettingDrawerComponent"], _default_setting_drawer_setting_drawer_item_component__WEBPACK_IMPORTED_MODULE_14__["SettingDrawerItemComponent"]];
var COMPONENTS = [
    _default_default_component__WEBPACK_IMPORTED_MODULE_2__["LayoutDefaultComponent"],
    _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_3__["LayoutFullScreenComponent"],
    _default_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
    _default_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
].concat(SETTINGDRAWER);
var HEADERCOMPONENTS = [
    _default_header_components_search_component__WEBPACK_IMPORTED_MODULE_6__["HeaderSearchComponent"],
    _default_header_components_notify_component__WEBPACK_IMPORTED_MODULE_7__["HeaderNotifyComponent"],
    _default_header_components_task_component__WEBPACK_IMPORTED_MODULE_8__["HeaderTaskComponent"],
    _default_header_components_icon_component__WEBPACK_IMPORTED_MODULE_9__["HeaderIconComponent"],
    _default_header_components_fullscreen_component__WEBPACK_IMPORTED_MODULE_10__["HeaderFullScreenComponent"],
    _default_header_components_storage_component__WEBPACK_IMPORTED_MODULE_11__["HeaderStorageComponent"],
    _default_header_components_user_component__WEBPACK_IMPORTED_MODULE_12__["HeaderUserComponent"]
];
// passport

var PASSPORT = [
    _passport_passport_component__WEBPACK_IMPORTED_MODULE_15__["LayoutPassportComponent"]
];
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]],
            entryComponents: SETTINGDRAWER,
            declarations: COMPONENTS.concat(HEADERCOMPONENTS, PASSPORT),
            exports: COMPONENTS.concat(PASSPORT)
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/passport/passport.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/passport/passport.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  \n  <div class=\"wrap\">\n    <div class=\"top\">\n      <div class=\"head\">\n        <img class=\"logo\" src=\"./assets/logo-color.svg\">\n        <span class=\"title\">ng-alain</span>\n      </div>\n      <div class=\"desc\">武林中最有影响力的《葵花宝典》；欲练神功，挥刀自宫</div>\n    </div>\n    <router-outlet></router-outlet>\n    <global-footer [links]=\"links\">\n      Copyright\n      <i class=\"anticon anticon-copyright\"></i> 2017\n      <a href=\"//github.com/cipchk\" target=\"_blank\">卡色</a>出品\n    </global-footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/passport/passport.component.less":
/*!*********************************************************!*\
  !*** ./src/app/layout/passport/passport.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n:host ::ng-deep .container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  background: #f0f2f5;\n}\n:host ::ng-deep .langs {\n  text-align: right;\n  width: 100%;\n  height: 40px;\n  line-height: 44px;\n}\n:host ::ng-deep .langs .anticon {\n  margin-top: 24px;\n  margin-right: 24px;\n  font-size: 14px;\n  vertical-align: top;\n  cursor: pointer;\n}\n:host ::ng-deep .wrap {\n  padding: 32px 0;\n  flex: 1;\n}\n:host ::ng-deep .ant-form-item {\n  margin-bottom: 24px;\n}\n@media (min-width: 768px) {\n  :host ::ng-deep .container {\n    background-image: url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg');\n    background-repeat: no-repeat;\n    background-position: center 110px;\n    background-size: 100%;\n  }\n  :host ::ng-deep .wrap {\n    padding: 32px 0 24px;\n  }\n}\n:host ::ng-deep .top {\n  text-align: center;\n}\n:host ::ng-deep .header {\n  height: 44px;\n  line-height: 44px;\n}\n:host ::ng-deep .header a {\n  text-decoration: none;\n}\n:host ::ng-deep .logo {\n  height: 44px;\n  margin-right: 16px;\n}\n:host ::ng-deep .title {\n  font-size: 33px;\n  color: rgba(0, 0, 0, 0.85);\n  font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;\n  font-weight: 600;\n  position: relative;\n  vertical-align: middle;\n}\n:host ::ng-deep .desc {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.45);\n  margin-top: 12px;\n  margin-bottom: 40px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Bhc3Nwb3J0L3Bhc3Nwb3J0LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9sYXlvdXQvcGFzc3BvcnQvRDovSmF2YS1zcGFjZS93cy8wL2RlbW8tbmctYWxhaW4vc3JjL2FwcC9sYXlvdXQvcGFzc3BvcnQvcGFzc3BvcnQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkZBQTZGO0FBQzdGLDhDQUE4QztBQUM5Qyx1QkFBdUI7QUFDdkIsOEZBQThGO0FDRjlGO0VBR00sY0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtDREVMO0FDUkQ7RUFTTSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7Q0RFTDtBQ2REO0VBY1EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtDREdQO0FDckJEO0VBc0JNLGdCQUFBO0VBQ0EsUUFBQTtDREVMO0FDekJEO0VBMEJNLG9CQUFBO0NERUw7QUNDRztFQUFBO0lBRUksNkZBQUE7SUFDQSw2QkFBQTtJQUNBLGtDQUFBO0lBQ0Esc0JBQUE7R0RDTDtFQ05DO0lBUUkscUJBQUE7R0RDTDtDQUNGO0FDdkNEO0VBeUNNLG1CQUFBO0NEQ0w7QUMxQ0Q7RUE0Q00sYUFBQTtFQUNBLGtCQUFBO0NEQ0w7QUM5Q0Q7RUErQ1Esc0JBQUE7Q0RFUDtBQ2pERDtFQW1ETSxhQUFBO0VBQ0EsbUJBQUE7Q0RDTDtBQ3JERDtFQXVETSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7Q0RDTDtBQzdERDtFQStETSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtDRENMIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3Bhc3Nwb3J0L3Bhc3Nwb3J0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgYXQtcnVsZS1lbXB0eS1saW5lLWJlZm9yZSxhdC1ydWxlLW5hbWUtc3BhY2UtYWZ0ZXIsYXQtcnVsZS1uby11bmtub3duICovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBuby1kdXBsaWNhdGUtc2VsZWN0b3JzICovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSAqL1xuLyogc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tYmFuZy1zcGFjZS1iZWZvcmUsbm8tZHVwbGljYXRlLXNlbGVjdG9ycyxzdHJpbmctbm8tbmV3bGluZSAqL1xuOmhvc3QgOjpuZy1kZWVwIC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZjBmMmY1O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5sYW5ncyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDRweDtcbn1cbjpob3N0IDo6bmctZGVlcCAubGFuZ3MgLmFudGljb24ge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgOjpuZy1kZWVwIC53cmFwIHtcbiAgcGFkZGluZzogMzJweCAwO1xuICBmbGV4OiAxO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtZm9ybS1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICA6aG9zdCA6Om5nLWRlZXAgLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvVFZZVGJBWFdoZVFwUmNXRGFETXUuc3ZnJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgMTEwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAud3JhcCB7XG4gICAgcGFkZGluZzogMzJweCAwIDI0cHg7XG4gIH1cbn1cbjpob3N0IDo6bmctZGVlcCAudG9wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5oZWFkZXIge1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5oZWFkZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbjpob3N0IDo6bmctZGVlcCAubG9nbyB7XG4gIGhlaWdodDogNDRweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzNweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XG4gIGZvbnQtZmFtaWx5OiAnTXlyaWFkIFBybycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGVzYyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4iLCJAaW1wb3J0ICd+QGRlbG9uL3RoZW1lL3N0eWxlcy9kZWZhdWx0Jztcbjpob3N0IHtcbiAgOjpuZy1kZWVwIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6ICNmMGYyZjU7XG4gICAgfVxuICAgIC5sYW5ncyB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gICAgICAuYW50aWNvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuICAgIC53cmFwIHtcbiAgICAgIHBhZGRpbmc6IDMycHggMDtcbiAgICAgIGZsZXg6IDE7XG4gICAgfVxuICAgIC5hbnQtZm9ybS1pdGVtIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IEBzY3JlZW4tbWQtbWluKSB7XG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvVFZZVGJBWFdoZVFwUmNXRGFETXUuc3ZnJyk7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAxMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgICAgfVxuICAgICAgLndyYXAge1xuICAgICAgICBwYWRkaW5nOiAzMnB4IDAgMjRweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLnRvcCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5oZWFkZXIge1xuICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgICAubG9nbyB7XG4gICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgfVxuICAgIC50aXRsZSB7XG4gICAgICBmb250LXNpemU6IDMzcHg7XG4gICAgICBjb2xvcjogQGhlYWRpbmctY29sb3I7XG4gICAgICBmb250LWZhbWlseTogJ015cmlhZCBQcm8nLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuICAgIC5kZXNjIHtcbiAgICAgIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1iYXNlO1xuICAgICAgY29sb3I6IEB0ZXh0LWNvbG9yLXNlY29uZGFyeTtcbiAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/layout/passport/passport.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/passport/passport.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutPassportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutPassportComponent", function() { return LayoutPassportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LayoutPassportComponent = /** @class */ (function () {
    function LayoutPassportComponent() {
        this.links = [
            {
                title: '帮助',
                href: '',
            },
            {
                title: '隐私',
                href: '',
            },
            {
                title: '条款',
                href: '',
            },
        ];
    }
    LayoutPassportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'layout-passport',
            template: __webpack_require__(/*! ./passport.component.html */ "./src/app/layout/passport/passport.component.html"),
            styles: [__webpack_require__(/*! ./passport.component.less */ "./src/app/layout/passport/passport.component.less")],
        })
    ], LayoutPassportComponent);
    return LayoutPassportComponent;
}());



/***/ }),

/***/ "./src/app/routes/callback/callback.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/routes/callback/callback.component.ts ***!
  \*******************************************************/
/*! exports provided: CallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackComponent", function() { return CallbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/fesm5/auth.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CallbackComponent = /** @class */ (function () {
    function CallbackComponent(socialService, route) {
        this.socialService = socialService;
        this.route = route;
    }
    CallbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router$ = this.route.params.subscribe(function (params) {
            _this.type = params['type'];
            _this.mockModel();
        });
    };
    CallbackComponent.prototype.mockModel = function () {
        this.socialService.callback({
            token: '123456789',
            name: 'cipchk',
            email: this.type + "@" + this.type + ".com",
            id: 10000,
            time: +new Date(),
        });
    };
    CallbackComponent.prototype.ngOnDestroy = function () {
        this.router$.unsubscribe();
    };
    CallbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-callback',
            template: "",
            providers: [_delon_auth__WEBPACK_IMPORTED_MODULE_2__["SocialService"]],
        }),
        __metadata("design:paramtypes", [_delon_auth__WEBPACK_IMPORTED_MODULE_2__["SocialService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "./src/app/routes/dashboard/dashboard.component.html":
/*!***********************************************************!*\
  !*** ./src/app/routes/dashboard/dashboard.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__content-title\">\n  <h1>\n    Page Name\n    <small>Welcome !</small>\n  </h1>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/dashboard/dashboard.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(http) {
        this.http = http;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/routes/dashboard/dashboard.component.html"),
        }),
        __metadata("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_1__["_HttpClient"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/routes/exception/403.component.ts":
/*!***************************************************!*\
  !*** ./src/app/routes/exception/403.component.ts ***!
  \***************************************************/
/*! exports provided: Exception403Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exception403Component", function() { return Exception403Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Exception403Component = /** @class */ (function () {
    function Exception403Component(modalSrv) {
        modalSrv.closeAll();
    }
    Exception403Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'exception-403',
            template: "<exception type=\"403\" style=\"min-height: 500px; height: 80%;\"></exception>",
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzModalService"]])
    ], Exception403Component);
    return Exception403Component;
}());



/***/ }),

/***/ "./src/app/routes/exception/404.component.ts":
/*!***************************************************!*\
  !*** ./src/app/routes/exception/404.component.ts ***!
  \***************************************************/
/*! exports provided: Exception404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exception404Component", function() { return Exception404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Exception404Component = /** @class */ (function () {
    function Exception404Component(modalSrv) {
        modalSrv.closeAll();
    }
    Exception404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'exception-404',
            template: "<exception type=\"404\" style=\"min-height: 500px; height: 80%;\"></exception>",
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzModalService"]])
    ], Exception404Component);
    return Exception404Component;
}());



/***/ }),

/***/ "./src/app/routes/exception/500.component.ts":
/*!***************************************************!*\
  !*** ./src/app/routes/exception/500.component.ts ***!
  \***************************************************/
/*! exports provided: Exception500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exception500Component", function() { return Exception500Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Exception500Component = /** @class */ (function () {
    function Exception500Component(modalSrv) {
        modalSrv.closeAll();
    }
    Exception500Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'exception-500',
            template: "<exception type=\"500\" style=\"min-height: 500px; height: 80%;\"></exception>",
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzModalService"]])
    ], Exception500Component);
    return Exception500Component;
}());



/***/ }),

/***/ "./src/app/routes/passport/lock/lock.component.html":
/*!**********************************************************!*\
  !*** ./src/app/routes/passport/lock/lock.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ant-card width-lg\" style=\"margin: 0 auto;\">\n  <div class=\"ant-card-body\">\n    <div class=\"avatar\">\n      <nz-avatar\n        [nzSrc]=\"settings.user.avatar\"\n        nzIcon=\"anticon anticon-user\"\n        nzSize=\"large\"\n      ></nz-avatar>\n    </div>\n    <form nz-form [formGroup]=\"f\" (ngSubmit)=\"submit()\" role=\"form\" class=\"mt-md\">\n      <nz-form-item>\n        <nz-form-control>\n          <nz-input-group nzSuffixIcon=\"anticon anticon-lock\">\n            <input type=\"password\" nz-input formControlName=\"password\" />\n          </nz-input-group>\n          <nz-form-explain *ngIf=\"f.get('password').dirty && f.get('password').errors\">\n            请输入密码！\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-row nzType=\"flex\" nzAlign=\"middle\">\n        <nz-col [nzOffset]=\"12\" [nzSpan]=\"12\" style=\"text-align:right;\">\n          <button nz-button [disabled]=\"!f.valid\" nzType=\"primary\">锁屏</button>\n        </nz-col>\n      </nz-row>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/passport/lock/lock.component.less":
/*!**********************************************************!*\
  !*** ./src/app/routes/passport/lock/lock.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .ant-card-body {\n  position: relative;\n  margin-top: 80px;\n}\n:host ::ng-deep .avatar {\n  position: absolute;\n  top: -20px;\n  left: 50%;\n  margin-left: -20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3Bhc3Nwb3J0L2xvY2svRDovSmF2YS1zcGFjZS93cy8wL2RlbW8tbmctYWxhaW4vc3JjL2FwcC9yb3V0ZXMvcGFzc3BvcnQvbG9jay9sb2NrLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9yb3V0ZXMvcGFzc3BvcnQvbG9jay9sb2NrLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQUE7RUFDQSxpQkFBQTtDQ0FIO0FESEQ7RUFNSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7Q0NBSCIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9wYXNzcG9ydC9sb2NrL2xvY2suY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xuICAuYW50LWNhcmQtYm9keSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gIH1cbiAgLmF2YXRhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTIwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgfVxufVxuIiwiOmhvc3QgOjpuZy1kZWVwIC5hbnQtY2FyZC1ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hdmF0YXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTIwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/routes/passport/lock/lock.component.ts":
/*!********************************************************!*\
  !*** ./src/app/routes/passport/lock/lock.component.ts ***!
  \********************************************************/
/*! exports provided: UserLockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLockComponent", function() { return UserLockComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserLockComponent = /** @class */ (function () {
    function UserLockComponent(fb, settings, router) {
        this.settings = settings;
        this.router = router;
        this.f = fb.group({
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    UserLockComponent.prototype.submit = function () {
        // tslint:disable-next-line:forin
        for (var i in this.f.controls) {
            this.f.controls[i].markAsDirty();
            this.f.controls[i].updateValueAndValidity();
        }
        if (this.f.valid) {
            console.log('Valid!');
            console.log(this.f.value);
            this.router.navigate(['dashboard']);
        }
    };
    UserLockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'passport-lock',
            template: __webpack_require__(/*! ./lock.component.html */ "./src/app/routes/passport/lock/lock.component.html"),
            styles: [__webpack_require__(/*! ./lock.component.less */ "./src/app/routes/passport/lock/lock.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], UserLockComponent);
    return UserLockComponent;
}());



/***/ }),

/***/ "./src/app/routes/passport/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/routes/passport/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"form\" (ngSubmit)=\"submit()\" role=\"form\">\n  <nz-tabset [nzAnimated]=\"false\" class=\"tabs\" (nzSelectChange)=\"switch($event)\">\n    <nz-tab [nzTitle]=\"'账户密码登录'\">\n      <nz-alert *ngIf=\"error\" [nzType]=\"'error'\" [nzMessage]=\"error\" [nzShowIcon]=\"true\" class=\"mb-lg\"></nz-alert>\n      <nz-form-item>\n        <nz-form-control>\n          <nz-input-group nzSize=\"large\" nzPrefixIcon=\"anticon anticon-user\">\n            <input nz-input formControlName=\"userName\" placeholder=\"username: admin or user\">\n          </nz-input-group>\n          <nz-form-explain *ngIf=\"userName.dirty && userName.errors\">\n            Please enter mobile number!\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-control>\n          <nz-input-group nzSize=\"large\" nzPrefixIcon=\"anticon anticon-lock\">\n            <input nz-input type=\"password\" formControlName=\"password\" placeholder=\"password: ng-alain.com\">\n          </nz-input-group>\n          <nz-form-explain *ngIf=\"password.dirty && password.errors\">\n            Please enter password!\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n    </nz-tab>\n    <nz-tab [nzTitle]=\"'手机号登录'\">\n      <nz-form-item>\n        <nz-form-control>\n          <nz-input-group nzSize=\"large\" nzPrefixIcon=\"anticon anticon-user\">\n            <input nz-input formControlName=\"mobile\" placeholder=\"mobile number\">\n          </nz-input-group>\n          <nz-form-explain *ngIf=\"mobile.dirty && mobile.errors\">\n            <ng-container *ngIf=\"mobile.errors.required\">\n              请输入手机号！\n            </ng-container>\n            <ng-container *ngIf=\"mobile.errors.pattern\">\n              手机号格式错误！\n            </ng-container>\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-control>\n          <nz-row [nzGutter]=\"8\">\n            <nz-col [nzSpan]=\"16\">\n              <nz-input-group nzSize=\"large\" nzPrefixIcon=\"anticon anticon-mail\">\n                <input nz-input formControlName=\"captcha\" placeholder=\"captcha\">\n              </nz-input-group>\n              <nz-form-explain *ngIf=\"captcha.dirty && captcha.errors\">\n                请输入验证码！\n              </nz-form-explain>\n            </nz-col>\n            <nz-col [nzSpan]=\"8\">\n              <button type=\"button\" nz-button nzSize=\"large\" (click)=\"getCaptcha()\" [disabled]=\"count\" nzBlock [nzLoading]=\"http.loading\">\n                {{ count ? count + 's' : '获取验证码'}}\n              </button>\n            </nz-col>\n          </nz-row>\n        </nz-form-control>\n      </nz-form-item>\n    </nz-tab>\n  </nz-tabset>\n  <nz-form-item>\n    <nz-col [nzSpan]=\"12\">\n      <label nz-checkbox formControlName=\"remember\">自动登录</label>\n    </nz-col>\n    <nz-col [nzSpan]=\"12\" class=\"text-right\">\n      <a class=\"forgot\" (click)=\"msg.error('请找欧阳锋')\">忘记密码</a>\n    </nz-col>\n  </nz-form-item>\n  <nz-form-item>\n    <button nz-button type=\"submit\" nzType=\"primary\" nzSize=\"large\" [nzLoading]=\"http.loading\" nzBlock>\n      登录\n    </button>\n  </nz-form-item>\n</form>\n<div class=\"other\">\n  其他登录方式\n  <i title=\"in fact Auth0 via window\" (click)=\"open('auth0', 'window')\" nz-icon type=\"alipay-circle\" class=\"icon\"></i>\n  <i title=\"in fact Github via redirect\" (click)=\"open('taobao')\" nz-icon type=\"taobao-circle\" class=\"icon\"></i>\n  <i title=\"真的是微博\" (click)=\"open('weibo', 'window')\" nz-icon type=\"weibo-circle\" class=\"icon\"></i>\n  <a class=\"register\" routerLink=\"/passport/register\">注册账户</a>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/passport/login/login.component.less":
/*!************************************************************!*\
  !*** ./src/app/routes/passport/login/login.component.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n:host {\n  display: block;\n  width: 368px;\n  margin: 0 auto;\n}\n:host ::ng-deep .ant-tabs .ant-tabs-bar {\n  border-bottom: 0;\n  margin-bottom: 24px;\n  text-align: center;\n}\n:host ::ng-deep .ant-tabs-tab {\n  font-size: 16px;\n  line-height: 24px;\n}\n:host ::ng-deep .ant-input-affix-wrapper .ant-input:not(:first-child) {\n  padding-left: 34px;\n}\n:host ::ng-deep .icon {\n  font-size: 24px;\n  color: rgba(0, 0, 0, 0.2);\n  margin-left: 16px;\n  vertical-align: middle;\n  cursor: pointer;\n  transition: color 0.3s;\n}\n:host ::ng-deep .icon:hover {\n  color: #1890ff;\n}\n:host ::ng-deep .other {\n  text-align: left;\n  margin-top: 24px;\n  line-height: 22px;\n}\n:host ::ng-deep .other nz-tooltip {\n  vertical-align: middle;\n}\n:host ::ng-deep .other .register {\n  float: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3Bhc3Nwb3J0L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9yb3V0ZXMvcGFzc3BvcnQvbG9naW4vRDovSmF2YS1zcGFjZS93cy8wL2RlbW8tbmctYWxhaW4vc3JjL2FwcC9yb3V0ZXMvcGFzc3BvcnQvbG9naW4vbG9naW4uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkZBQTZGO0FBQzdGLDhDQUE4QztBQUM5Qyx1QkFBdUI7QUFDdkIsOEZBQThGO0FDRjlGO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0NESUQ7QUNQRDtFQU1NLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtDRElMO0FDWkQ7RUFXTSxnQkFBQTtFQUNBLGtCQUFBO0NESUw7QUNoQkQ7RUFlTSxtQkFBQTtDRElMO0FDbkJEO0VBa0JNLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtDRElMO0FDSEs7RUFDRSxlQUFBO0NES1A7QUM5QkQ7RUE2Qk0saUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0NESUw7QUNuQ0Q7RUFpQ1EsdUJBQUE7Q0RLUDtBQ3RDRDtFQW9DUSxhQUFBO0NES1AiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvcGFzc3BvcnQvbG9naW4vbG9naW4uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBhdC1ydWxlLWVtcHR5LWxpbmUtYmVmb3JlLGF0LXJ1bGUtbmFtZS1zcGFjZS1hZnRlcixhdC1ydWxlLW5vLXVua25vd24gKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlIG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMgKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlICovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1iYW5nLXNwYWNlLWJlZm9yZSxuby1kdXBsaWNhdGUtc2VsZWN0b3JzLHN0cmluZy1uby1uZXdsaW5lICovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzY4cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtdGFicyAuYW50LXRhYnMtYmFyIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtdGFicy10YWIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlciAuYW50LWlucHV0Om5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgcGFkZGluZy1sZWZ0OiAzNHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5pY29uOmhvdmVyIHtcbiAgY29sb3I6ICMxODkwZmY7XG59XG46aG9zdCA6Om5nLWRlZXAgLm90aGVyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLm90aGVyIG56LXRvb2x0aXAge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5vdGhlciAucmVnaXN0ZXIge1xuICBmbG9hdDogcmlnaHQ7XG59XG4iLCJAaW1wb3J0ICd+QGRlbG9uL3RoZW1lL3N0eWxlcy9kZWZhdWx0Jztcbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzNjhweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIDo6bmctZGVlcCB7XG4gICAgLmFudC10YWJzIC5hbnQtdGFicy1iYXIge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5hbnQtdGFicy10YWIge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgfVxuICAgIC5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlciAuYW50LWlucHV0Om5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMzRweDtcbiAgICB9XG4gICAgLmljb24ge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IEBwcmltYXJ5LWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgICAub3RoZXIge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgIG56LXRvb2x0aXAge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgfVxuICAgICAgLnJlZ2lzdGVyIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/routes/passport/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/routes/passport/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/fesm5/auth.js");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/abc */ "./node_modules/@delon/abc/fesm5/abc.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_startup_startup_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/startup/startup.service */ "./src/app/core/startup/startup.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(fb, modalSrv, msg, router, settingsService, socialService, reuseTabService, tokenService, startupSrv, http) {
        this.msg = msg;
        this.router = router;
        this.settingsService = settingsService;
        this.socialService = socialService;
        this.reuseTabService = reuseTabService;
        this.tokenService = tokenService;
        this.startupSrv = startupSrv;
        this.http = http;
        this.error = '';
        this.type = 0;
        // #region get captcha
        this.count = 0;
        this.form = fb.group({
            userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            mobile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^1\d{10}$/)]],
            captcha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            remember: [true],
        });
        modalSrv.closeAll();
    }
    Object.defineProperty(UserLoginComponent.prototype, "userName", {
        // #region fields
        get: function () {
            return this.form.controls.userName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserLoginComponent.prototype, "password", {
        get: function () {
            return this.form.controls.password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserLoginComponent.prototype, "mobile", {
        get: function () {
            return this.form.controls.mobile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserLoginComponent.prototype, "captcha", {
        get: function () {
            return this.form.controls.captcha;
        },
        enumerable: true,
        configurable: true
    });
    // #endregion
    UserLoginComponent.prototype.switch = function (ret) {
        this.type = ret.index;
    };
    UserLoginComponent.prototype.getCaptcha = function () {
        var _this = this;
        if (this.mobile.invalid) {
            this.mobile.markAsDirty({ onlySelf: true });
            this.mobile.updateValueAndValidity({ onlySelf: true });
            return;
        }
        this.count = 59;
        this.interval$ = setInterval(function () {
            _this.count -= 1;
            if (_this.count <= 0)
                clearInterval(_this.interval$);
        }, 1000);
    };
    // #endregion
    UserLoginComponent.prototype.submit = function () {
        var _this = this;
        this.error = '';
        if (this.type === 0) {
            this.userName.markAsDirty();
            this.userName.updateValueAndValidity();
            this.password.markAsDirty();
            this.password.updateValueAndValidity();
            if (this.userName.invalid || this.password.invalid)
                return;
        }
        else {
            this.mobile.markAsDirty();
            this.mobile.updateValueAndValidity();
            this.captcha.markAsDirty();
            this.captcha.updateValueAndValidity();
            if (this.mobile.invalid || this.captcha.invalid)
                return;
        }
        // 默认配置中对所有HTTP请求都会强制 [校验](https://ng-alain.com/auth/getting-started) 用户 Token
        // 然一般来说登录请求不需要校验，因此可以在请求URL加上：`/login?_allow_anonymous=true` 表示不触发用户 Token 校验
        this.http
            .post('/login/account?_allow_anonymous=true', {
            type: this.type,
            userName: this.userName.value,
            password: this.password.value,
        })
            .subscribe(function (res) {
            if (res.msg !== 'ok') {
                _this.error = res.msg;
                return;
            }
            // 清空路由复用信息
            _this.reuseTabService.clear();
            // 设置用户Token信息
            _this.tokenService.set(res.user);
            // 重新获取 StartupService 内容，我们始终认为应用信息一般都会受当前用户授权范围而影响
            _this.startupSrv.load().then(function () { return _this.router.navigate(['/']); });
        });
    };
    // #region social
    UserLoginComponent.prototype.open = function (type, openType) {
        var _this = this;
        if (openType === void 0) { openType = 'href'; }
        var url = "";
        var callback = "";
        if (_env_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production)
            callback = 'https://ng-alain.github.io/ng-alain/callback/' + type;
        else
            callback = 'http://localhost:4200/callback/' + type;
        switch (type) {
            case 'auth0':
                url = "//cipchk.auth0.com/login?client=8gcNydIDzGBYxzqV0Vm1CX_RXH-wsWo5&redirect_uri=" + decodeURIComponent(callback);
                break;
            case 'github':
                url = "//github.com/login/oauth/authorize?client_id=9d6baae4b04a23fcafa2&response_type=code&redirect_uri=" + decodeURIComponent(callback);
                break;
            case 'weibo':
                url = "https://api.weibo.com/oauth2/authorize?client_id=1239507802&response_type=code&redirect_uri=" + decodeURIComponent(callback);
                break;
        }
        if (openType === 'window') {
            this.socialService
                .login(url, '/', {
                type: 'window',
            })
                .subscribe(function (res) {
                if (res) {
                    _this.settingsService.setUser(res);
                    _this.router.navigateByUrl('/');
                }
            });
        }
        else {
            this.socialService.login(url, '/', {
                type: 'href',
            });
        }
    };
    // #endregion
    UserLoginComponent.prototype.ngOnDestroy = function () {
        if (this.interval$)
            clearInterval(this.interval$);
    };
    UserLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'passport-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/routes/passport/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.less */ "./src/app/routes/passport/login/login.component.less")],
            providers: [_delon_auth__WEBPACK_IMPORTED_MODULE_5__["SocialService"]],
        }),
        __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_delon_abc__WEBPACK_IMPORTED_MODULE_6__["ReuseTabService"])),
        __param(7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_delon_auth__WEBPACK_IMPORTED_MODULE_5__["DA_SERVICE_TOKEN"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_0__["SettingsService"],
            _delon_auth__WEBPACK_IMPORTED_MODULE_5__["SocialService"],
            _delon_abc__WEBPACK_IMPORTED_MODULE_6__["ReuseTabService"],
            _delon_auth__WEBPACK_IMPORTED_MODULE_5__["TokenService"],
            _core_startup_startup_service__WEBPACK_IMPORTED_MODULE_8__["StartupService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_0__["_HttpClient"]])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "./src/app/routes/passport/register-result/register-result.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/routes/passport/register-result/register-result.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<result type=\"success\" [title]=\"title\" description=\"激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。\">\n  <ng-template #title>\n    <div class=\"title\" style=\"font-size: 20px;\">\n      你的账户：{{email}} 注册成功\n    </div>\n  </ng-template>\n  <button (click)=\"msg.success('email')\" nz-button nzSize=\"large\" [nzType]=\"'primary'\">\n    查看邮箱\n  </button>\n  <button routerLink=\"/\" nz-button nzSize=\"large\">\n    返回首页\n  </button>\n</result>\n"

/***/ }),

/***/ "./src/app/routes/passport/register-result/register-result.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/routes/passport/register-result/register-result.component.ts ***!
  \******************************************************************************/
/*! exports provided: UserRegisterResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterResultComponent", function() { return UserRegisterResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserRegisterResultComponent = /** @class */ (function () {
    function UserRegisterResultComponent(route, msg) {
        this.msg = msg;
        this.params = { email: '' };
        this.email = '';
        this.params.email = this.email = route.snapshot.queryParams.email || 'ng-alain@example.com';
    }
    UserRegisterResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'passport-register-result',
            template: __webpack_require__(/*! ./register-result.component.html */ "./src/app/routes/passport/register-result/register-result.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], UserRegisterResultComponent);
    return UserRegisterResultComponent;
}());



/***/ }),

/***/ "./src/app/routes/passport/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/routes/passport/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>注册</h3>\n<form nz-form [formGroup]=\"form\" (ngSubmit)=\"submit()\" role=\"form\">\n  <nz-alert *ngIf=\"error\" [nzType]=\"'error'\" [nzMessage]=\"error\" [nzShowIcon]=\"true\" class=\"mb-lg\"></nz-alert>\n  <nz-form-item>\n    <nz-form-control>\n      <nz-input-group nzSize=\"large\" nzAddonBeforeIcon=\"anticon anticon-user\">\n        <input nz-input formControlName=\"mail\" placeholder=\"Email\">\n      </nz-input-group>\n      <ng-container *ngIf=\"mail.dirty && mail.errors\">\n        <nz-form-explain *ngIf=\"mail.errors?.required\">请输入邮箱地址！</nz-form-explain>\n        <nz-form-explain *ngIf=\"mail.errors?.email\">邮箱地址格式错误！</nz-form-explain>\n      </ng-container>\n    </nz-form-control>\n  </nz-form-item>\n  <nz-form-item>\n    <nz-form-control>\n      <nz-popover [nzPlacement]=\"'right'\" [nzTrigger]=\"'focus'\" [(nzVisible)]=\"visible\" nzOverlayClassName=\"register-password-cdk\"\n        [nzOverlayStyle]=\"{'width.px': 240}\">\n        <nz-input-group nzSize=\"large\" nz-popover nzAddonBeforeIcon=\"anticon anticon-lock\">\n          <input nz-input type=\"password\" formControlName=\"password\" placeholder=\"Password\">\n        </nz-input-group>\n        <nz-form-explain *ngIf=\"password.dirty && password.errors\">请输入密码！</nz-form-explain>\n        <ng-template #nzTemplate>\n          <div style=\"padding: 4px 0;\">\n            <ng-container [ngSwitch]=\"status\">\n              <div *ngSwitchCase=\"'ok'\" class=\"success\">强度：强</div>\n              <div *ngSwitchCase=\"'pass'\" class=\"warning\">强度：中</div>\n              <div *ngSwitchDefault class=\"error\">强度：太短</div>\n            </ng-container>\n            <div class=\"progress-{{status}}\">\n              <nz-progress [nzPercent]=\"progress\" [nzStatus]=\"passwordProgressMap[status]\" [nzStrokeWidth]=\"6\"\n                [nzShowInfo]=\"false\"></nz-progress>\n            </div>\n            <p class=\"mt-sm\">请至少输入 6 个字符。请不要使用容易被猜到的密码。</p>\n          </div>\n        </ng-template>\n      </nz-popover>\n    </nz-form-control>\n  </nz-form-item>\n  <nz-form-item>\n    <nz-form-control>\n      <nz-input-group nzSize=\"large\" nzAddonBeforeIcon=\"anticon anticon-lock\">\n        <input nz-input type=\"password\" formControlName=\"confirm\" placeholder=\"Confirm Password\">\n      </nz-input-group>\n      <nz-form-explain *ngIf=\"confirm.dirty && confirm.errors\">\n        <ng-container *ngIf=\"confirm.errors.required\">\n          请确认密码！\n        </ng-container>\n        <ng-container *ngIf=\"confirm.errors.equar\">\n          两次输入的密码不匹配!\n        </ng-container>\n      </nz-form-explain>\n    </nz-form-control>\n  </nz-form-item>\n  <nz-form-item>\n    <nz-form-control>\n      <nz-input-group nzSize=\"large\" [nzAddOnBefore]=\"addOnBeforeTemplate\">\n        <ng-template #addOnBeforeTemplate>\n          <nz-select formControlName=\"mobilePrefix\" style=\"width: 100px;\">\n            <nz-option [nzLabel]=\"'+86'\" [nzValue]=\"'+86'\"></nz-option>\n            <nz-option [nzLabel]=\"'+87'\" [nzValue]=\"'+87'\"></nz-option>\n          </nz-select>\n        </ng-template>\n        <input formControlName=\"mobile\" nz-input placeholder=\"Phone number\">\n      </nz-input-group>\n      <nz-form-explain *ngIf=\"mobile.dirty && mobile.errors\">\n        <ng-container *ngIf=\"mobile.errors.required\">\n          请输入手机号！\n        </ng-container>\n        <ng-container *ngIf=\"mobile.errors.pattern\">\n          手机号格式错误！\n        </ng-container>\n      </nz-form-explain>\n    </nz-form-control>\n  </nz-form-item>\n  <nz-form-item>\n    <nz-form-control>\n      <nz-row [nzGutter]=\"8\">\n        <nz-col [nzSpan]=\"16\">\n          <nz-input-group nzSize=\"large\" nzAddonBeforeIcon=\"anticon anticon-mail\">\n            <input nz-input formControlName=\"captcha\" placeholder=\"Captcha\">\n          </nz-input-group>\n          <nz-form-explain *ngIf=\"captcha.dirty && captcha.errors\">\n            请输入验证码！\n          </nz-form-explain>\n        </nz-col>\n        <nz-col [nzSpan]=\"8\">\n          <button type=\"button\" nz-button nzSize=\"large\" (click)=\"getCaptcha()\" [disabled]=\"count\" nzBlock [nzLoading]=\"http.loading\">\n            {{ count ? count + 's' : '获取验证码'}}</button>\n        </nz-col>\n      </nz-row>\n    </nz-form-control>\n  </nz-form-item>\n  <nz-form-item>\n    <button nz-button nzType=\"primary\" nzSize=\"large\" type=\"submit\" [nzLoading]=\"http.loading\" class=\"submit\">\n      注册\n    </button>\n    <a class=\"login\" routerLink=\"/passport/login\">使用已有账户登录</a>\n  </nz-form-item>\n</form>\n"

/***/ }),

/***/ "./src/app/routes/passport/register/register.component.less":
/*!******************************************************************!*\
  !*** ./src/app/routes/passport/register/register.component.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n:host {\n  display: block;\n  width: 368px;\n  margin: 0 auto;\n}\n:host ::ng-deep h3 {\n  font-size: 16px;\n  margin-bottom: 20px;\n}\n:host ::ng-deep .submit {\n  width: 50%;\n}\n:host ::ng-deep .login {\n  float: right;\n  line-height: 40px;\n}\n::ng-deep .register-password-cdk .success,\n::ng-deep .register-password-cdk .warning,\n::ng-deep .register-password-cdk .error {\n  transition: color 0.3s;\n}\n::ng-deep .register-password-cdk .success {\n  color: #52c41a;\n}\n::ng-deep .register-password-cdk .warning {\n  color: #faad14;\n}\n::ng-deep .register-password-cdk .error {\n  color: #f5222d;\n}\n::ng-deep .register-password-cdk .progress-pass > .progress .ant-progress-bg {\n  background-color: #faad14;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3Bhc3Nwb3J0L3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9yb3V0ZXMvcGFzc3BvcnQvcmVnaXN0ZXIvRDovSmF2YS1zcGFjZS93cy8wL2RlbW8tbmctYWxhaW4vc3JjL2FwcC9yb3V0ZXMvcGFzc3BvcnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkZBQTZGO0FBQzdGLDhDQUE4QztBQUM5Qyx1QkFBdUI7QUFDdkIsOEZBQThGO0FDRjlGO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0NESUQ7QUNQRDtFQU1NLGdCQUFBO0VBQ0Esb0JBQUE7Q0RJTDtBQ1hEO0VBVU0sV0FBQTtDRElMO0FDZEQ7RUFhTSxhQUFBO0VBQ0Esa0JBQUE7Q0RJTDtBQ0FEOzs7RUFLTSx1QkFBQTtDREFMO0FDTEQ7RUFRTSxlQUFBO0NEQUw7QUNSRDtFQVdNLGVBQUE7Q0RBTDtBQ1hEO0VBY00sZUFBQTtDREFMO0FDZEQ7RUFrQlEsMEJBQUE7Q0REUCIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9wYXNzcG9ydC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlIGF0LXJ1bGUtZW1wdHktbGluZS1iZWZvcmUsYXQtcnVsZS1uYW1lLXNwYWNlLWFmdGVyLGF0LXJ1bGUtbm8tdW5rbm93biAqL1xuLyogc3R5bGVsaW50LWRpc2FibGUgbm8tZHVwbGljYXRlLXNlbGVjdG9ycyAqL1xuLyogc3R5bGVsaW50LWRpc2FibGUgKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLWJhbmctc3BhY2UtYmVmb3JlLG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMsc3RyaW5nLW5vLW5ld2xpbmUgKi9cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzNjhweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG46aG9zdCA6Om5nLWRlZXAgaDMge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnN1Ym1pdCB7XG4gIHdpZHRoOiA1MCU7XG59XG46aG9zdCA6Om5nLWRlZXAgLmxvZ2luIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBsaW5lLWhlaWdodDogNDBweDtcbn1cbjo6bmctZGVlcCAucmVnaXN0ZXItcGFzc3dvcmQtY2RrIC5zdWNjZXNzLFxuOjpuZy1kZWVwIC5yZWdpc3Rlci1wYXNzd29yZC1jZGsgLndhcm5pbmcsXG46Om5nLWRlZXAgLnJlZ2lzdGVyLXBhc3N3b3JkLWNkayAuZXJyb3Ige1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xufVxuOjpuZy1kZWVwIC5yZWdpc3Rlci1wYXNzd29yZC1jZGsgLnN1Y2Nlc3Mge1xuICBjb2xvcjogIzUyYzQxYTtcbn1cbjo6bmctZGVlcCAucmVnaXN0ZXItcGFzc3dvcmQtY2RrIC53YXJuaW5nIHtcbiAgY29sb3I6ICNmYWFkMTQ7XG59XG46Om5nLWRlZXAgLnJlZ2lzdGVyLXBhc3N3b3JkLWNkayAuZXJyb3Ige1xuICBjb2xvcjogI2Y1MjIyZDtcbn1cbjo6bmctZGVlcCAucmVnaXN0ZXItcGFzc3dvcmQtY2RrIC5wcm9ncmVzcy1wYXNzID4gLnByb2dyZXNzIC5hbnQtcHJvZ3Jlc3MtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFhZDE0O1xufVxuIiwiQGltcG9ydCAnfkBkZWxvbi90aGVtZS9zdHlsZXMvZGVmYXVsdCc7XG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzY4cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICA6Om5nLWRlZXAge1xuICAgIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIC5zdWJtaXQge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gICAgLmxvZ2luIHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIGxpbmUtaGVpZ2h0OiBAYnRuLWhlaWdodC1sZztcbiAgICB9XG4gIH1cbn1cbjo6bmctZGVlcCB7XG4gIC5yZWdpc3Rlci1wYXNzd29yZC1jZGsge1xuICAgIC5zdWNjZXNzLFxuICAgIC53YXJuaW5nLFxuICAgIC5lcnJvciB7XG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xuICAgIH1cbiAgICAuc3VjY2VzcyB7XG4gICAgICBjb2xvcjogQHN1Y2Nlc3MtY29sb3I7XG4gICAgfVxuICAgIC53YXJuaW5nIHtcbiAgICAgIGNvbG9yOiBAd2FybmluZy1jb2xvcjtcbiAgICB9XG4gICAgLmVycm9yIHtcbiAgICAgIGNvbG9yOiBAZXJyb3ItY29sb3I7XG4gICAgfVxuICAgIC5wcm9ncmVzcy1wYXNzID4gLnByb2dyZXNzIHtcbiAgICAgIC5hbnQtcHJvZ3Jlc3MtYmcge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2FybmluZy1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/routes/passport/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/routes/passport/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: UserRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterComponent", function() { return UserRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserRegisterComponent = /** @class */ (function () {
    function UserRegisterComponent(fb, router, http, msg) {
        this.router = router;
        this.http = http;
        this.msg = msg;
        this.error = '';
        this.type = 0;
        this.visible = false;
        this.status = 'pool';
        this.progress = 0;
        this.passwordProgressMap = {
            ok: 'success',
            pass: 'normal',
            pool: 'exception',
        };
        // #endregion
        // #region get captcha
        this.count = 0;
        this.form = fb.group({
            mail: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                    UserRegisterComponent_1.checkPassword.bind(this),
                ],
            ],
            confirm: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                    UserRegisterComponent_1.passwordEquar,
                ],
            ],
            mobilePrefix: ['+86'],
            mobile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^1\d{10}$/)]],
            captcha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    UserRegisterComponent_1 = UserRegisterComponent;
    UserRegisterComponent.checkPassword = function (control) {
        if (!control)
            return null;
        var self = this;
        self.visible = !!control.value;
        if (control.value && control.value.length > 9) {
            self.status = 'ok';
        }
        else if (control.value && control.value.length > 5) {
            self.status = 'pass';
        }
        else {
            self.status = 'pool';
        }
        if (self.visible) {
            self.progress =
                control.value.length * 10 > 100 ? 100 : control.value.length * 10;
        }
    };
    UserRegisterComponent.passwordEquar = function (control) {
        if (!control || !control.parent) {
            return null;
        }
        if (control.value !== control.parent.get('password').value) {
            return { equar: true };
        }
        return null;
    };
    Object.defineProperty(UserRegisterComponent.prototype, "mail", {
        // #region fields
        get: function () {
            return this.form.controls.mail;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserRegisterComponent.prototype, "password", {
        get: function () {
            return this.form.controls.password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserRegisterComponent.prototype, "confirm", {
        get: function () {
            return this.form.controls.confirm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserRegisterComponent.prototype, "mobile", {
        get: function () {
            return this.form.controls.mobile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserRegisterComponent.prototype, "captcha", {
        get: function () {
            return this.form.controls.captcha;
        },
        enumerable: true,
        configurable: true
    });
    UserRegisterComponent.prototype.getCaptcha = function () {
        var _this = this;
        if (this.mobile.invalid) {
            this.mobile.markAsDirty({ onlySelf: true });
            this.mobile.updateValueAndValidity({ onlySelf: true });
            return;
        }
        this.count = 59;
        this.interval$ = setInterval(function () {
            _this.count -= 1;
            if (_this.count <= 0)
                clearInterval(_this.interval$);
        }, 1000);
    };
    // #endregion
    UserRegisterComponent.prototype.submit = function () {
        var _this = this;
        this.error = '';
        for (var i in this.form.controls) {
            this.form.controls[i].markAsDirty();
            this.form.controls[i].updateValueAndValidity();
        }
        if (this.form.invalid) {
            return;
        }
        var data = this.form.value;
        this.http.post('/register', data).subscribe(function () {
            _this.router.navigateByUrl('/passport/register-result', {
                queryParams: { email: data.mail },
            });
        });
    };
    UserRegisterComponent.prototype.ngOnDestroy = function () {
        if (this.interval$)
            clearInterval(this.interval$);
    };
    var UserRegisterComponent_1;
    UserRegisterComponent = UserRegisterComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'passport-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/routes/passport/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.less */ "./src/app/routes/passport/register/register.component.less")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_4__["_HttpClient"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]])
    ], UserRegisterComponent);
    return UserRegisterComponent;
}());



/***/ }),

/***/ "./src/app/routes/routes-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/routes/routes-routing.module.ts ***!
  \*************************************************/
/*! exports provided: RouteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteRoutingModule", function() { return RouteRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/fesm5/auth.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _layout_default_default_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/default/default.component */ "./src/app/layout/default/default.component.ts");
/* harmony import */ var _layout_passport_passport_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout/passport/passport.component */ "./src/app/layout/passport/passport.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/routes/dashboard/dashboard.component.ts");
/* harmony import */ var _passport_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./passport/login/login.component */ "./src/app/routes/passport/login/login.component.ts");
/* harmony import */ var _passport_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./passport/register/register.component */ "./src/app/routes/passport/register/register.component.ts");
/* harmony import */ var _passport_register_result_register_result_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./passport/register-result/register-result.component */ "./src/app/routes/passport/register-result/register-result.component.ts");
/* harmony import */ var _callback_callback_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./callback/callback.component */ "./src/app/routes/callback/callback.component.ts");
/* harmony import */ var _passport_lock_lock_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./passport/lock/lock.component */ "./src/app/routes/passport/lock/lock.component.ts");
/* harmony import */ var _exception_403_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./exception/403.component */ "./src/app/routes/exception/403.component.ts");
/* harmony import */ var _exception_404_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./exception/404.component */ "./src/app/routes/exception/404.component.ts");
/* harmony import */ var _exception_500_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./exception/500.component */ "./src/app/routes/exception/500.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// layout


// dashboard pages

// passport pages



// single pages





var routes = [
    {
        path: '',
        component: _layout_default_default_component__WEBPACK_IMPORTED_MODULE_4__["LayoutDefaultComponent"],
        canActivate: [_delon_auth__WEBPACK_IMPORTED_MODULE_2__["SimpleGuard"]],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], data: { title: '仪表盘', titleI18n: 'dashboard' } },
        ]
    },
    // 全屏布局
    // {
    //     path: 'fullscreen',
    //     component: LayoutFullScreenComponent,
    //     children: [
    //     ]
    // },
    // passport
    {
        path: 'passport',
        component: _layout_passport_passport_component__WEBPACK_IMPORTED_MODULE_5__["LayoutPassportComponent"],
        children: [
            { path: 'login', component: _passport_login_login_component__WEBPACK_IMPORTED_MODULE_7__["UserLoginComponent"], data: { title: '登录', titleI18n: 'pro-login' } },
            { path: 'register', component: _passport_register_register_component__WEBPACK_IMPORTED_MODULE_8__["UserRegisterComponent"], data: { title: '注册', titleI18n: 'pro-register' } },
            { path: 'register-result', component: _passport_register_result_register_result_component__WEBPACK_IMPORTED_MODULE_9__["UserRegisterResultComponent"], data: { title: '注册结果', titleI18n: 'pro-register-result' } }
        ]
    },
    // 单页不包裹Layout
    { path: 'callback/:type', component: _callback_callback_component__WEBPACK_IMPORTED_MODULE_10__["CallbackComponent"] },
    { path: 'lock', component: _passport_lock_lock_component__WEBPACK_IMPORTED_MODULE_11__["UserLockComponent"], data: { title: '锁屏', titleI18n: 'lock' } },
    { path: '403', component: _exception_403_component__WEBPACK_IMPORTED_MODULE_12__["Exception403Component"] },
    { path: '404', component: _exception_404_component__WEBPACK_IMPORTED_MODULE_13__["Exception404Component"] },
    { path: '500', component: _exception_500_component__WEBPACK_IMPORTED_MODULE_14__["Exception500Component"] },
    { path: '**', redirectTo: 'dashboard' }
];
var RouteRoutingModule = /** @class */ (function () {
    function RouteRoutingModule() {
    }
    RouteRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].useHash })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RouteRoutingModule);
    return RouteRoutingModule;
}());



/***/ }),

/***/ "./src/app/routes/routes.module.ts":
/*!*****************************************!*\
  !*** ./src/app/routes/routes.module.ts ***!
  \*****************************************/
/*! exports provided: RoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesModule", function() { return RoutesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _routes_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes-routing.module */ "./src/app/routes/routes-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/routes/dashboard/dashboard.component.ts");
/* harmony import */ var _passport_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./passport/login/login.component */ "./src/app/routes/passport/login/login.component.ts");
/* harmony import */ var _passport_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./passport/register/register.component */ "./src/app/routes/passport/register/register.component.ts");
/* harmony import */ var _passport_register_result_register_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./passport/register-result/register-result.component */ "./src/app/routes/passport/register-result/register-result.component.ts");
/* harmony import */ var _callback_callback_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./callback/callback.component */ "./src/app/routes/callback/callback.component.ts");
/* harmony import */ var _passport_lock_lock_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./passport/lock/lock.component */ "./src/app/routes/passport/lock/lock.component.ts");
/* harmony import */ var _exception_403_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./exception/403.component */ "./src/app/routes/exception/403.component.ts");
/* harmony import */ var _exception_404_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./exception/404.component */ "./src/app/routes/exception/404.component.ts");
/* harmony import */ var _exception_500_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./exception/500.component */ "./src/app/routes/exception/500.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// dashboard pages

// passport pages



// single pages





var COMPONENTS = [
    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
    // passport pages
    _passport_login_login_component__WEBPACK_IMPORTED_MODULE_4__["UserLoginComponent"],
    _passport_register_register_component__WEBPACK_IMPORTED_MODULE_5__["UserRegisterComponent"],
    _passport_register_result_register_result_component__WEBPACK_IMPORTED_MODULE_6__["UserRegisterResultComponent"],
    // single pages
    _callback_callback_component__WEBPACK_IMPORTED_MODULE_7__["CallbackComponent"],
    _passport_lock_lock_component__WEBPACK_IMPORTED_MODULE_8__["UserLockComponent"],
    _exception_403_component__WEBPACK_IMPORTED_MODULE_9__["Exception403Component"],
    _exception_404_component__WEBPACK_IMPORTED_MODULE_10__["Exception404Component"],
    _exception_500_component__WEBPACK_IMPORTED_MODULE_11__["Exception500Component"]
];
var COMPONENTS_NOROUNT = [];
var RoutesModule = /** @class */ (function () {
    function RoutesModule() {
    }
    RoutesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _routes_routing_module__WEBPACK_IMPORTED_MODULE_2__["RouteRoutingModule"]],
            declarations: COMPONENTS.concat(COMPONENTS_NOROUNT),
            entryComponents: COMPONENTS_NOROUNT
        })
    ], RoutesModule);
    return RoutesModule;
}());



/***/ }),

/***/ "./src/app/shared/json-schema/json-schema.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/json-schema/json-schema.module.ts ***!
  \**********************************************************/
/*! exports provided: SCHEMA_THIRDS_COMPONENTS, JsonSchemaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHEMA_THIRDS_COMPONENTS", function() { return SCHEMA_THIRDS_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonSchemaModule", function() { return JsonSchemaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _delon_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/form */ "./node_modules/@delon/form/fesm5/form.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { TinymceWidget } from './widgets/tinymce/tinymce.widget';
// import { UEditorWidget } from './widgets/ueditor/ueditor.widget';
var SCHEMA_THIRDS_COMPONENTS = [
// TinymceWidget,
// UEditorWidget
];
var JsonSchemaModule = /** @class */ (function () {
    function JsonSchemaModule(widgetRegistry) {
        // widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
        // widgetRegistry.register(UEditorWidget.KEY, UEditorWidget);
    }
    JsonSchemaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: SCHEMA_THIRDS_COMPONENTS,
            entryComponents: SCHEMA_THIRDS_COMPONENTS,
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _delon_form__WEBPACK_IMPORTED_MODULE_2__["DelonFormModule"].forRoot()
            ],
            exports: SCHEMA_THIRDS_COMPONENTS.slice()
        }),
        __metadata("design:paramtypes", [_delon_form__WEBPACK_IMPORTED_MODULE_2__["WidgetRegistry"]])
    ], JsonSchemaModule);
    return JsonSchemaModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/abc */ "./node_modules/@delon/abc/fesm5/abc.js");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/acl */ "./node_modules/@delon/acl/fesm5/acl.js");
/* harmony import */ var _delon_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/form */ "./node_modules/@delon/form/fesm5/form.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/fesm5/ngx-countdown.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// delon




// #region third libs


var THIRDMODULES = [
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NgZorroAntdModule"],
    ngx_countdown__WEBPACK_IMPORTED_MODULE_9__["CountdownModule"]
];
// #endregion
// #region your componets & directives
var COMPONENTS = [];
var DIRECTIVES = [];
// #endregion
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _delon_theme__WEBPACK_IMPORTED_MODULE_4__["AlainThemeModule"].forChild(),
                _delon_abc__WEBPACK_IMPORTED_MODULE_5__["DelonABCModule"],
                _delon_acl__WEBPACK_IMPORTED_MODULE_6__["DelonACLModule"],
                _delon_form__WEBPACK_IMPORTED_MODULE_7__["DelonFormModule"]
            ].concat(THIRDMODULES),
            declarations: COMPONENTS.concat(DIRECTIVES),
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _delon_theme__WEBPACK_IMPORTED_MODULE_4__["AlainThemeModule"],
                _delon_abc__WEBPACK_IMPORTED_MODULE_5__["DelonABCModule"],
                _delon_acl__WEBPACK_IMPORTED_MODULE_6__["DelonACLModule"],
                _delon_form__WEBPACK_IMPORTED_MODULE_7__["DelonFormModule"]
            ].concat(THIRDMODULES, COMPONENTS, DIRECTIVES)
        })
    ], SharedModule);
    return SharedModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    SERVER_URL: "./",
    production: false,
    useHash: true,
    hmr: false,
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/hmr.ts":
/*!********************!*\
  !*** ./src/hmr.ts ***!
  \********************/
/*! exports provided: hmrBootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hmrBootstrap", function() { return hmrBootstrap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angularclass/hmr */ "./node_modules/@angularclass/hmr/dist/index.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");



var hmrBootstrap = function (module, bootstrap) {
    var ngModule;
    module.hot.accept();
    bootstrap().then(function (mod) { return (ngModule = mod); });
    module.hot.dispose(function () {
        var appRef = ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]);
        var modalService = ngModule.injector.get(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"], null);
        if (modalService)
            modalService.closeAll();
        var elements = appRef.components.map(function (c) { return c.location.nativeElement; });
        var makeVisible = Object(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__["createNewHosts"])(elements);
        ngModule.destroy();
        makeVisible();
    });
};


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
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _hmr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hmr */ "./src/hmr.ts");





Object(_delon_theme__WEBPACK_IMPORTED_MODULE_4__["preloaderFinished"])();

if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
var bootstrap = function () {
    return Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
        defaultEncapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
        preserveWhitespaces: false,
    }).then(function (res) {
        if (window.appBootstrap) {
            window.appBootstrap();
        }
        return res;
    });
};
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].hmr) {
    if (false) {}
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
}
else {
    bootstrap();
}


/***/ }),

/***/ "./src/style-icons-auto.ts":
/*!*********************************!*\
  !*** ./src/style-icons-auto.ts ***!
  \*********************************/
/*! exports provided: ICONS_AUTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICONS_AUTO", function() { return ICONS_AUTO; });
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm5/ant-design-icons-angular-icons.js");
/*
* Automatically generated by 'ng g ng-alain:plugin icon'
* @see https://ng-alain.com/cli/plugin#icon
*/

var ICONS_AUTO = [
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["AlipayCircleOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ApiOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["AppstoreOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ArrowDownOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["BookOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["CloudOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["CopyrightOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["CustomerServiceOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["DashboardOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["DatabaseOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["DingdingOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["DislikeOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["DownloadOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["EditOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["EllipsisOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["FileOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ForkOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["FrownOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["FullscreenExitOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["FullscreenOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["GithubOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["GlobalOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["HddOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["LaptopOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["LikeOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["LockOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["LogoutOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["MailOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["MenuFoldOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["MenuUnfoldOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["MessageOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["PayCircleOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["PieChartOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["PrinterOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["RocketOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ScanOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["SearchOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["SettingOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ShareAltOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ShoppingCartOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["SoundOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["StarOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["TaobaoCircleOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["TaobaoOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["TeamOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ToolOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["TrophyOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["UsbOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["UserOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["WeiboCircleOutline"]
];


/***/ }),

/***/ "./src/style-icons.ts":
/*!****************************!*\
  !*** ./src/style-icons.ts ***!
  \****************************/
/*! exports provided: ICONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICONS", function() { return ICONS; });
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm5/ant-design-icons-angular-icons.js");
// Custom icon static resources

var ICONS = [
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["InfoOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["BulbOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ProfileOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ExceptionOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["LinkOutline"],
];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Java-space\ws\0\demo-ng-alain\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map