function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/_common/error.interceptor.ts":
  /*!**********************************************!*\
    !*** ./src/app/_common/error.interceptor.ts ***!
    \**********************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcApp_commonErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var ErrorInterceptor = /*#__PURE__*/function () {
      function ErrorInterceptor(toasterService) {
        _classCallCheck(this, ErrorInterceptor);

        this.toasterService = toasterService;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this = this;

          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
              _this.toasterService.error(err.error.error, 'Error', {
                positionClass: 'toast-top-center',
                timeOut: 5000
              });
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(err);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
      return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
    };

    ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ErrorInterceptor,
      factory: ErrorInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_common/password-policy.ts":
  /*!********************************************!*\
    !*** ./src/app/_common/password-policy.ts ***!
    \********************************************/

  /*! exports provided: PasswordPolicy */

  /***/
  function srcApp_commonPasswordPolicyTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordPolicy", function () {
      return PasswordPolicy;
    });

    var PasswordPolicy = /*#__PURE__*/function () {
      function PasswordPolicy() {
        _classCallCheck(this, PasswordPolicy);
      }

      _createClass(PasswordPolicy, null, [{
        key: "patternValidator",
        value: function patternValidator(regex, error) {
          return function (control) {
            if (!control.value) {
              // if control is empty return no error
              return null;
            } // test the value of the control against the regexp supplied


            var valid = regex.test(control.value); // if true, return no error (no error), else return error passed in the second parameter

            return valid ? null : error;
          };
        }
      }, {
        key: "passwordMatchValidator",
        value: function passwordMatchValidator(control) {
          var password = control.get('password').value; // get password from our password form control

          var confirmPassword = control.get('confirmPassword').value; // get password from our confirmPassword form control
          // compare is the password math

          if (password !== confirmPassword) {
            // if they don't match, set an error in our confirmPassword form control
            control.get('confirmPassword').setErrors({
              NoPassswordMatch: true
            });
          }
        }
      }, {
        key: "checkTop1000",
        value: function checkTop1000(error) {
          var _this2 = this;

          return function (control) {
            if (!control.value) {
              // if control is empty return no error
              return null;
            }

            var valid = _this2.pass.includes(control.value); // if true, return no error (no error), else return error passed in the second parameter


            return valid ? error : null;
          };
        }
      }]);

      return PasswordPolicy;
    }();

    PasswordPolicy.pass = ["1v7Upjw3nT", "YAgjecc826", "a838hfiD", "PolniyPizdec0211", "Password1", "Sojdlg123aljg", "j38ifUbn", "3rJs1la7qE", "iw14Fi9j"];
    /***/
  },

  /***/
  "./src/app/_common/rbac-allow.directive.ts":
  /*!*************************************************!*\
    !*** ./src/app/_common/rbac-allow.directive.ts ***!
    \*************************************************/

  /*! exports provided: RbacAllowDirective */

  /***/
  function srcApp_commonRbacAllowDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RbacAllowDirective", function () {
      return RbacAllowDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_services/auth.service */
    "./src/app/_services/auth.service.ts");

    var RbacAllowDirective = /*#__PURE__*/function () {
      function RbacAllowDirective(templateRef, viewContainer, authService) {
        var _this3 = this;

        _classCallCheck(this, RbacAllowDirective);

        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.authService = authService;
        this.sub = authService.user$.subscribe(function (user) {
          _this3.user = user;

          _this3.showIfUserAllowed();
        });
      }

      _createClass(RbacAllowDirective, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }, {
        key: "showIfUserAllowed",
        value: function showIfUserAllowed() {
          if (!this.allowedRole || !this.user) {
            this.viewContainer.clear();
            return;
          }

          if (this.allowedRole == this.user.role) {
            this.viewContainer.createEmbeddedView(this.templateRef);
          } else {
            this.viewContainer.clear();
          }
        }
      }, {
        key: "rbacAllow",
        set: function set(allowedRole) {
          this.allowedRole = allowedRole;
          this.showIfUserAllowed();
        }
      }]);

      return RbacAllowDirective;
    }();

    RbacAllowDirective.ɵfac = function RbacAllowDirective_Factory(t) {
      return new (t || RbacAllowDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    RbacAllowDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: RbacAllowDirective,
      selectors: [["", "rbacAllow", ""]],
      inputs: {
        rbacAllow: "rbacAllow"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RbacAllowDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: "[rbacAllow]"
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, {
        rbacAllow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/_common/routes.config.ts":
  /*!******************************************!*\
    !*** ./src/app/_common/routes.config.ts ***!
    \******************************************/

  /*! exports provided: routesConfig */

  /***/
  function srcApp_commonRoutesConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routesConfig", function () {
      return routesConfig;
    });
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _transaction_add_transaction_add_transaction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../transaction/add-transaction/add-transaction.component */
    "./src/app/transaction/add-transaction/add-transaction.component.ts");
    /* harmony import */


    var _transaction_mytransactions_mytransactions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../transaction/mytransactions/mytransactions.component */
    "./src/app/transaction/mytransactions/mytransactions.component.ts");
    /* harmony import */


    var _photographer_photographers_photographers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../photographer/photographers/photographers.component */
    "./src/app/photographer/photographers/photographers.component.ts");
    /* harmony import */


    var _photographer_add_photographer_add_photographer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../photographer/add-photographer/add-photographer.component */
    "./src/app/photographer/add-photographer/add-photographer.component.ts");
    /* harmony import */


    var _photographer_edit_photographer_edit_photographer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../photographer/edit-photographer/edit-photographer.component */
    "./src/app/photographer/edit-photographer/edit-photographer.component.ts");
    /* harmony import */


    var _photograph_photographs_photographs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../photograph/photographs/photographs.component */
    "./src/app/photograph/photographs/photographs.component.ts");
    /* harmony import */


    var _photograph_add_photograph_add_photograph_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../photograph/add-photograph/add-photograph.component */
    "./src/app/photograph/add-photograph/add-photograph.component.ts");
    /* harmony import */


    var _photograph_edit_photograph_edit_photograph_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../photograph/edit-photograph/edit-photograph.component */
    "./src/app/photograph/edit-photograph/edit-photograph.component.ts");
    /* harmony import */


    var _photograph_my_photographs_my_photographs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../photograph/my-photographs/my-photographs.component */
    "./src/app/photograph/my-photographs/my-photographs.component.ts");
    /* harmony import */


    var _message_messages_messages_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../message/messages/messages.component */
    "./src/app/message/messages/messages.component.ts");
    /* harmony import */


    var _message_add_message_add_message_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../message/add-message/add-message.component */
    "./src/app/message/add-message/add-message.component.ts");
    /* harmony import */


    var _users_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../users/users.component */
    "./src/app/users/users.component.ts");
    /* harmony import */


    var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../welcome/welcome.component */
    "./src/app/welcome/welcome.component.ts");

    var routesConfig = [
    /*********************************************** */
    {
      path: 'photographs',
      component: _photograph_photographs_photographs_component__WEBPACK_IMPORTED_MODULE_7__["PhotographsComponent"],
      canActivate: ["authenticationGuard"]
    }, {
      path: 'myphotographs',
      component: _photograph_my_photographs_my_photographs_component__WEBPACK_IMPORTED_MODULE_10__["MyPhotographsComponent"],
      canActivate: ["usersOnlyGuard"]
    }, {
      path: 'photographs/add',
      component: _photograph_add_photograph_add_photograph_component__WEBPACK_IMPORTED_MODULE_8__["AddPhotographComponent"],
      canActivate: ["adminsOnlyGuard"]
    }, {
      path: 'photographs/:id',
      component: _photograph_edit_photograph_edit_photograph_component__WEBPACK_IMPORTED_MODULE_9__["EditPhotographComponent"],
      canActivate: ["adminsOnlyGuard"]
    },
    /*********************************************** */
    {
      path: 'photographers',
      component: _photographer_photographers_photographers_component__WEBPACK_IMPORTED_MODULE_4__["PhotographersComponent"],
      canActivate: ["adminsOnlyGuard"]
    }, {
      path: 'photographers/add',
      component: _photographer_add_photographer_add_photographer_component__WEBPACK_IMPORTED_MODULE_5__["AddPhotographerComponent"],
      canActivate: ["adminsOnlyGuard"]
    }, {
      path: 'photographers/:id',
      component: _photographer_edit_photographer_edit_photographer_component__WEBPACK_IMPORTED_MODULE_6__["EditPhotographerComponent"],
      canActivate: ["adminsOnlyGuard"]
    },
    /*********************************************** */
    {
      path: 'messages',
      component: _message_messages_messages_component__WEBPACK_IMPORTED_MODULE_11__["MessagesComponent"],
      canActivate: ["usersOnlyGuard"]
    }, {
      path: 'messages/add',
      component: _message_add_message_add_message_component__WEBPACK_IMPORTED_MODULE_12__["AddMessageComponent"],
      canActivate: ["usersOnlyGuard"]
    },
    /*********************************************** */
    {
      path: 'transactions',
      component: _transaction_mytransactions_mytransactions_component__WEBPACK_IMPORTED_MODULE_3__["MyTransactionsComponent"],
      canActivate: ["authenticationGuard"]
    }, {
      path: 'transaction',
      component: _transaction_add_transaction_add_transaction_component__WEBPACK_IMPORTED_MODULE_2__["AddTransactionComponent"],
      canActivate: ["usersOnlyGuard"]
    },
    /*********************************************** */
    {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]
    }, {
      path: 'signup',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__["SignupComponent"]
    },
    /*********************************************** */
    {
      path: 'users',
      component: _users_users_component__WEBPACK_IMPORTED_MODULE_13__["UsersComponent"],
      canActivate: ["authenticationGuard"]
    }, {
      path: 'welcome',
      component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_14__["WelcomeComponent"]
    }, {
      path: '',
      redirectTo: '/welcome',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: '/welcome',
      pathMatch: 'full'
    }];
    /***/
  },

  /***/
  "./src/app/_common/user-search.validator.ts":
  /*!**************************************************!*\
    !*** ./src/app/_common/user-search.validator.ts ***!
    \**************************************************/

  /*! exports provided: validSearch */

  /***/
  function srcApp_commonUserSearchValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validSearch", function () {
      return validSearch;
    });

    function validSearch() {
      return function (control) {
        if (control.value.toString().includes(';') || control.value.toString().includes('--') || control.value.toString().includes('=') || control.value.toString().toLowerCase().includes('insert') || control.value.toString().toLowerCase().includes('drop table') || /\d/.test(control.value.toString())) {
          return {
            validSearch: true
          };
        } else {
          return null;
        }
      };
    }
    /***/

  },

  /***/
  "./src/app/_services/auth.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/_services/auth.service.ts ***!
    \*******************************************/

  /*! exports provided: ANONYMOUS_USER, AuthService */

  /***/
  function srcApp_servicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ANONYMOUS_USER", function () {
      return ANONYMOUS_USER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ANONYMOUS_USER = {
      id: undefined,
      email: '',
      money: undefined,
      firstName: '',
      lastName: '',
      profileLink: '',
      role: ''
    };

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        var _this4 = this;

        _classCallCheck(this, AuthService);

        this.http = http;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.user$ = this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (user) {
          return !!user;
        }));
        this.isLoggedIn$ = this.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (user) {
          return !!user.id;
        }));
        this.isLoggedOut$ = this.isLoggedIn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (isLoggedIn) {
          return !isLoggedIn;
        }));
        http.get('/api/user').subscribe(function (user) {
          return _this4.subject.next(user ? user : ANONYMOUS_USER);
        });
      }

      _createClass(AuthService, [{
        key: "signUp",
        value: function signUp(email, password, firstName, lastName, profileLink) {
          var _this5 = this;

          return this.http.post('/api/signup', {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            profileLink: profileLink
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (user) {
            return _this5.subject.next(user);
          }));
        }
      }, {
        key: "login",
        value: function login(email, password) {
          var _this6 = this;

          return this.http.post('/api/login', {
            email: email,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (user) {
            return _this6.subject.next(user);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this7 = this;

          return this.http.post('/api/logout', null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (user) {
            return _this7.subject.next(ANONYMOUS_USER);
          }));
        }
      }, {
        key: "getAllUsers",
        value: function getAllUsers() {
          return this.http.get('/api/users-all');
        }
      }, {
        key: "getUsers",
        value: function getUsers(input) {
          return this.http.post("/api/users", {
            input: input
          });
        }
      }, {
        key: "validateCaptcha",
        value: function validateCaptcha(captcha) {
          return this.http.post('/api/validatecaptcha', {
            captcha: captcha
          });
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/authentication.guard.ts":
  /*!***************************************************!*\
    !*** ./src/app/_services/authentication.guard.ts ***!
    \***************************************************/

  /*! exports provided: AuthenticationGuard */

  /***/
  function srcApp_servicesAuthenticationGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function () {
      return AuthenticationGuard;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthenticationGuard = /*#__PURE__*/function () {
      function AuthenticationGuard(authService, router) {
        _classCallCheck(this, AuthenticationGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthenticationGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var _this8 = this;

          return this.authService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (user) {
            return user.id != undefined;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (allowed) {
            if (!allowed) {
              _this8.router.navigateByUrl('/');
            }
          }));
        }
      }]);

      return AuthenticationGuard;
    }();
    /***/

  },

  /***/
  "./src/app/_services/authorization.guard.ts":
  /*!**************************************************!*\
    !*** ./src/app/_services/authorization.guard.ts ***!
    \**************************************************/

  /*! exports provided: AuthorizationGuard */

  /***/
  function srcApp_servicesAuthorizationGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthorizationGuard", function () {
      return AuthorizationGuard;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthorizationGuard = /*#__PURE__*/function () {
      function AuthorizationGuard(allowedRole, authService, router) {
        _classCallCheck(this, AuthorizationGuard);

        this.allowedRole = allowedRole;
        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthorizationGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var _this9 = this;

          return this.authService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (user) {
            return _this9.allowedRole == user.role;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (allowed) {
            if (!allowed) {
              _this9.router.navigateByUrl('/');
            }
          }));
        }
      }]);

      return AuthorizationGuard;
    }();
    /***/

  },

  /***/
  "./src/app/_services/message.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/_services/message.service.ts ***!
    \**********************************************/

  /*! exports provided: MessageService */

  /***/
  function srcApp_servicesMessageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageService", function () {
      return MessageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var MessageService = /*#__PURE__*/function () {
      function MessageService(http) {
        _classCallCheck(this, MessageService);

        this.http = http;
      }

      _createClass(MessageService, [{
        key: "getMessages",
        value: function getMessages() {
          return this.http.get('/api/messages');
        }
      }, {
        key: "addMessage",
        value: function addMessage(content, receiverEmail) {
          return this.http.post('/api/addmessage', {
            content: content,
            receiverEmail: receiverEmail
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])());
        }
      }]);

      return MessageService;
    }();

    MessageService.ɵfac = function MessageService_Factory(t) {
      return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MessageService,
      factory: MessageService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/photograph.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/_services/photograph.service.ts ***!
    \*************************************************/

  /*! exports provided: PhotographService */

  /***/
  function srcApp_servicesPhotographServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotographService", function () {
      return PhotographService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var PhotographService = /*#__PURE__*/function () {
      function PhotographService(http) {
        _classCallCheck(this, PhotographService);

        this.http = http;
      }

      _createClass(PhotographService, [{
        key: "getPhotographs",
        value: function getPhotographs() {
          return this.http.get("/api/photographs");
        }
      }, {
        key: "getMyPhotographs",
        value: function getMyPhotographs() {
          return this.http.get("/api/myphotographs");
        }
      }, {
        key: "getPhotograph",
        value: function getPhotograph(id) {
          var address = '/api/photographs/' + id.toString();
          return this.http.get(address);
        }
      }, {
        key: "addPhotograph",
        value: function addPhotograph(name, photographerId, year, price) {
          return this.http.post('/api/addphotograph', {
            name: name,
            photographerId: photographerId,
            year: year,
            price: price
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])());
        }
      }, {
        key: "editPhotograph",
        value: function editPhotograph(id, name, photographerId, year, price) {
          var address = '/api/photographs/' + id.toString();
          return this.http.put(address, {
            id: id,
            name: name,
            photographerId: photographerId,
            year: year,
            price: price
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])());
        }
      }, {
        key: "deletePhotograph",
        value: function deletePhotograph(id) {
          var address = '/api/photographs/' + id.toString();
          return this.http["delete"](address).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])());
        }
      }, {
        key: "buyPhotograph",
        value: function buyPhotograph(id) {
          var address = "/api/buyphotograph/" + id.toString();
          return this.http.post(address, {
            id: id
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])());
        }
      }, {
        key: "sellPhotograph",
        value: function sellPhotograph(id) {
          var address = "/api/sellphotograph/" + id.toString();
          return this.http.post(address, {
            id: id
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])());
        }
      }, {
        key: "ping",
        value: function ping(input) {
          return this.http.post('/api/ping', {
            input: input
          });
        }
      }]);

      return PhotographService;
    }();

    PhotographService.ɵfac = function PhotographService_Factory(t) {
      return new (t || PhotographService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    PhotographService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PhotographService,
      factory: PhotographService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotographService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/photographerService.ts":
  /*!**************************************************!*\
    !*** ./src/app/_services/photographerService.ts ***!
    \**************************************************/

  /*! exports provided: PhotographerService */

  /***/
  function srcApp_servicesPhotographerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotographerService", function () {
      return PhotographerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var PhotographerService = /*#__PURE__*/function () {
      function PhotographerService(http) {
        _classCallCheck(this, PhotographerService);

        this.http = http;
      }

      _createClass(PhotographerService, [{
        key: "getPhotographers",
        value: function getPhotographers() {
          return this.http.get('/api/photographers');
        }
      }, {
        key: "getPhotographer",
        value: function getPhotographer(id) {
          var address = '/api/photographers/' + id.toString();
          return this.http.get(address);
        }
      }, {
        key: "addPhotographer",
        value: function addPhotographer(firstName, lastName, age) {
          return this.http.post('/api/addphotographer', {
            firstName: firstName,
            lastName: lastName,
            age: age
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])());
        }
      }, {
        key: "editPhotographer",
        value: function editPhotographer(id, firstName, lastName, age) {
          var address = '/api/photographers/' + id.toString();
          return this.http.put(address, {
            id: id,
            firstName: firstName,
            lastName: lastName,
            age: age
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])());
        }
      }, {
        key: "deletePhotographer",
        value: function deletePhotographer(id) {
          var address = '/api/photographers/' + id.toString();
          return this.http["delete"](address).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])());
        }
      }]);

      return PhotographerService;
    }();

    PhotographerService.ɵfac = function PhotographerService_Factory(t) {
      return new (t || PhotographerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    PhotographerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PhotographerService,
      factory: PhotographerService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotographerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/transaction.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/_services/transaction.service.ts ***!
    \**************************************************/

  /*! exports provided: TransactionService */

  /***/
  function srcApp_servicesTransactionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionService", function () {
      return TransactionService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var TransactionService = /*#__PURE__*/function () {
      function TransactionService(http) {
        _classCallCheck(this, TransactionService);

        this.http = http;
      }

      _createClass(TransactionService, [{
        key: "sendMoney",
        value: function sendMoney(receiverEmail, amount, password) {
          return this.http.post('/api/sendmoney', {
            receiverEmail: receiverEmail,
            amount: amount,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])());
        }
      }, {
        key: "getTransactions",
        value: function getTransactions() {
          return this.http.get('/api/transactions');
        }
      }]);

      return TransactionService;
    }();

    TransactionService.ɵfac = function TransactionService_Factory(t) {
      return new (t || TransactionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    TransactionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TransactionService,
      factory: TransactionService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_rbac_allow_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./_common/rbac-allow.directive */
    "./src/app/_common/rbac-allow.directive.ts");

    function AppComponent_li_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign Up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_li_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_li_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Photographers");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Photographs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Photographs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_li_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Transactions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_li_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Transactions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_li_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Messages");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_li_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Users");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_li_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r152.loggedUser$).email);
      }
    }

    function AppComponent_li_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r153.loggedUser$).money, "$");
      }
    }

    function AppComponent_li_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_li_19_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r156);

          var ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r155.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["ADMIN"];
    };

    var _c1 = function _c1() {
      return ["USER"];
    };

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(authService, router, toasterService) {
        var _this10 = this;

        _classCallCheck(this, AppComponent);

        this.authService = authService;
        this.router = router;
        this.toasterService = toasterService;
        this.title = 'TestApp';
        this.authService.user$.subscribe(function (a) {
          return _this10.email = a.email;
        });
        this.authService.user$.subscribe(function (a) {
          return _this10.money = a.money;
        });
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLoggedIn$ = this.authService.isLoggedIn$;
          this.isLoggedOut$ = this.authService.isLoggedOut$;
          this.loggedUser$ = this.authService.user$;
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this11 = this;

          this.authService.logout().subscribe(function () {
            _this11.successMessage = "You have been successfully logged out";

            _this11.toasterService.success(_this11.successMessage, 'Success', {
              positionClass: 'toast-top-center',
              timeOut: 5000
            });

            setTimeout(function () {
              _this11.router.navigateByUrl('welcome');
            }, 1500);
          }, function (err) {
            _this11.errorMessage = err.error.error;
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 23,
      vars: 30,
      consts: [[1, "l-header"], [1, "top-menu", "disable-link-styles"], [4, "ngIf"], [4, "rbacAllow"], [3, "click", 4, "ngIf"], ["routerLink", "/signup"], ["routerLink", "/login"], ["routerLink", "/photographers"], ["routerLink", "/photographs"], ["routerLink", "/myphotographs"], ["routerLink", "/transactions"], ["routerLink", "/messages"], ["routerLink", "/users"], [3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_li_3_Template, 3, 0, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_li_5_Template, 3, 0, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_li_7_Template, 3, 0, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_li_8_Template, 3, 0, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_li_10_Template, 3, 0, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_li_11_Template, 3, 0, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_li_12_Template, 3, 0, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_li_13_Template, 3, 0, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_li_14_Template, 3, 0, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppComponent_li_16_Template, 4, 3, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_li_18_Template, 4, 3, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AppComponent_li_19_Template, 3, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 12, ctx.isLoggedOut$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 14, ctx.isLoggedOut$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rbacAllow", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 16, ctx.isLoggedIn$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rbacAllow", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rbacAllow", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rbacAllow", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rbacAllow", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 18, ctx.isLoggedIn$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 20, ctx.isLoggedIn$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rbacAllow", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 22, ctx.isLoggedIn$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _common_rbac_allow_directive__WEBPACK_IMPORTED_MODULE_5__["RbacAllowDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: [".l-header[_ngcontent-%COMP%] {\n    display: block;\n}\n\nmain[_ngcontent-%COMP%] {\n    padding-top: 50px;\n    margin: 0 auto;\n    width: 100%;\n}\n\n.course-header[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 30px;\n    margin-bottom: 30px;\n}\n\n.course-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\ntd.title[_ngcontent-%COMP%] {\n    display: block;\n}\n\n.card[_ngcontent-%COMP%] {\n    width:600px;\n    margin-left: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ubC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5tYWluIHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNvdXJzZS1oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5jb3Vyc2UtaGVhZGVyIGgzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRkLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNhcmQge1xuICAgIHdpZHRoOjYwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: createAdminOnlyGuard, createUserOnlyGuard, createAuthenticationGuard, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createAdminOnlyGuard", function () {
      return createAdminOnlyGuard;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createUserOnlyGuard", function () {
      return createUserOnlyGuard;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createAuthenticationGuard", function () {
      return createAuthenticationGuard;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _common_routes_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./_common/routes.config */
    "./src/app/_common/routes.config.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _services_transaction_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./_services/transaction.service */
    "./src/app/_services/transaction.service.ts");
    /* harmony import */


    var _services_photograph_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./_services/photograph.service */
    "./src/app/_services/photograph.service.ts");
    /* harmony import */


    var _services_message_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./_services/message.service */
    "./src/app/_services/message.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _transaction_add_transaction_add_transaction_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./transaction/add-transaction/add-transaction.component */
    "./src/app/transaction/add-transaction/add-transaction.component.ts");
    /* harmony import */


    var _transaction_mytransactions_mytransactions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./transaction/mytransactions/mytransactions.component */
    "./src/app/transaction/mytransactions/mytransactions.component.ts");
    /* harmony import */


    var _photographer_photographers_photographers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./photographer/photographers/photographers.component */
    "./src/app/photographer/photographers/photographers.component.ts");
    /* harmony import */


    var _services_photographerService__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./_services/photographerService */
    "./src/app/_services/photographerService.ts");
    /* harmony import */


    var _photographer_add_photographer_add_photographer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./photographer/add-photographer/add-photographer.component */
    "./src/app/photographer/add-photographer/add-photographer.component.ts");
    /* harmony import */


    var _photographer_edit_photographer_edit_photographer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./photographer/edit-photographer/edit-photographer.component */
    "./src/app/photographer/edit-photographer/edit-photographer.component.ts");
    /* harmony import */


    var _photograph_photographs_photographs_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./photograph/photographs/photographs.component */
    "./src/app/photograph/photographs/photographs.component.ts");
    /* harmony import */


    var _photograph_add_photograph_add_photograph_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./photograph/add-photograph/add-photograph.component */
    "./src/app/photograph/add-photograph/add-photograph.component.ts");
    /* harmony import */


    var _photograph_edit_photograph_edit_photograph_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./photograph/edit-photograph/edit-photograph.component */
    "./src/app/photograph/edit-photograph/edit-photograph.component.ts");
    /* harmony import */


    var _photograph_my_photographs_my_photographs_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./photograph/my-photographs/my-photographs.component */
    "./src/app/photograph/my-photographs/my-photographs.component.ts");
    /* harmony import */


    var _message_add_message_add_message_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./message/add-message/add-message.component */
    "./src/app/message/add-message/add-message.component.ts");
    /* harmony import */


    var _message_messages_messages_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./message/messages/messages.component */
    "./src/app/message/messages/messages.component.ts");
    /* harmony import */


    var _users_users_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./users/users.component */
    "./src/app/users/users.component.ts");
    /* harmony import */


    var _services_authorization_guard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./_services/authorization.guard */
    "./src/app/_services/authorization.guard.ts");
    /* harmony import */


    var _services_authentication_guard__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./_services/authentication.guard */
    "./src/app/_services/authentication.guard.ts");
    /* harmony import */


    var _common_error_interceptor__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./_common/error.interceptor */
    "./src/app/_common/error.interceptor.ts");
    /* harmony import */


    var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./welcome/welcome.component */
    "./src/app/welcome/welcome.component.ts");
    /* harmony import */


    var _common_rbac_allow_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./_common/rbac-allow.directive */
    "./src/app/_common/rbac-allow.directive.ts");
    /* harmony import */


    var ng_recaptcha__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ng-recaptcha */
    "./node_modules/ng-recaptcha/__ivy_ngcc__/fesm2015/ng-recaptcha.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    function createAdminOnlyGuard(authService, router) {
      return new _services_authorization_guard__WEBPACK_IMPORTED_MODULE_26__["AuthorizationGuard"]('ADMIN', authService, router);
    }

    function createUserOnlyGuard(authService, router) {
      return new _services_authorization_guard__WEBPACK_IMPORTED_MODULE_26__["AuthorizationGuard"]('USER', authService, router);
    }

    function createAuthenticationGuard(authService, router) {
      return new _services_authentication_guard__WEBPACK_IMPORTED_MODULE_27__["AuthenticationGuard"](authService, router);
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _services_transaction_service__WEBPACK_IMPORTED_MODULE_9__["TransactionService"], _services_photographerService__WEBPACK_IMPORTED_MODULE_16__["PhotographerService"], _services_photograph_service__WEBPACK_IMPORTED_MODULE_10__["PhotographService"], _services_message_service__WEBPACK_IMPORTED_MODULE_11__["MessageService"], {
        provide: 'adminsOnlyGuard',
        useFactory: createAdminOnlyGuard,
        deps: [_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]
      }, {
        provide: 'usersOnlyGuard',
        useFactory: createUserOnlyGuard,
        deps: [_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]
      }, {
        provide: 'authenticationGuard',
        useFactory: createAuthenticationGuard,
        deps: [_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
        useClass: _common_error_interceptor__WEBPACK_IMPORTED_MODULE_28__["ErrorInterceptor"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientXsrfModule"].withOptions({
        cookieName: 'XSRF-TOKEN',
        headerName: 'x-xsrf-token'
      }), _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(_common_routes_config__WEBPACK_IMPORTED_MODULE_5__["routesConfig"]), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_31__["RecaptchaModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_31__["RecaptchaFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_33__["ToastrModule"].forRoot() // ToastrModule added
      ]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"], _transaction_add_transaction_add_transaction_component__WEBPACK_IMPORTED_MODULE_13__["AddTransactionComponent"], _transaction_mytransactions_mytransactions_component__WEBPACK_IMPORTED_MODULE_14__["MyTransactionsComponent"], _photographer_photographers_photographers_component__WEBPACK_IMPORTED_MODULE_15__["PhotographersComponent"], _photographer_add_photographer_add_photographer_component__WEBPACK_IMPORTED_MODULE_17__["AddPhotographerComponent"], _photographer_edit_photographer_edit_photographer_component__WEBPACK_IMPORTED_MODULE_18__["EditPhotographerComponent"], _photograph_photographs_photographs_component__WEBPACK_IMPORTED_MODULE_19__["PhotographsComponent"], _photograph_add_photograph_add_photograph_component__WEBPACK_IMPORTED_MODULE_20__["AddPhotographComponent"], _photograph_edit_photograph_edit_photograph_component__WEBPACK_IMPORTED_MODULE_21__["EditPhotographComponent"], _photograph_my_photographs_my_photographs_component__WEBPACK_IMPORTED_MODULE_22__["MyPhotographsComponent"], _message_add_message_add_message_component__WEBPACK_IMPORTED_MODULE_23__["AddMessageComponent"], _message_messages_messages_component__WEBPACK_IMPORTED_MODULE_24__["MessagesComponent"], _users_users_component__WEBPACK_IMPORTED_MODULE_25__["UsersComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_29__["WelcomeComponent"], _common_rbac_allow_directive__WEBPACK_IMPORTED_MODULE_30__["RbacAllowDirective"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientXsrfModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_31__["RecaptchaModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_31__["RecaptchaFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_33__["ToastrModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"], _transaction_add_transaction_add_transaction_component__WEBPACK_IMPORTED_MODULE_13__["AddTransactionComponent"], _transaction_mytransactions_mytransactions_component__WEBPACK_IMPORTED_MODULE_14__["MyTransactionsComponent"], _photographer_photographers_photographers_component__WEBPACK_IMPORTED_MODULE_15__["PhotographersComponent"], _photographer_add_photographer_add_photographer_component__WEBPACK_IMPORTED_MODULE_17__["AddPhotographerComponent"], _photographer_edit_photographer_edit_photographer_component__WEBPACK_IMPORTED_MODULE_18__["EditPhotographerComponent"], _photograph_photographs_photographs_component__WEBPACK_IMPORTED_MODULE_19__["PhotographsComponent"], _photograph_add_photograph_add_photograph_component__WEBPACK_IMPORTED_MODULE_20__["AddPhotographComponent"], _photograph_edit_photograph_edit_photograph_component__WEBPACK_IMPORTED_MODULE_21__["EditPhotographComponent"], _photograph_my_photographs_my_photographs_component__WEBPACK_IMPORTED_MODULE_22__["MyPhotographsComponent"], _message_add_message_add_message_component__WEBPACK_IMPORTED_MODULE_23__["AddMessageComponent"], _message_messages_messages_component__WEBPACK_IMPORTED_MODULE_24__["MessagesComponent"], _users_users_component__WEBPACK_IMPORTED_MODULE_25__["UsersComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_29__["WelcomeComponent"], _common_rbac_allow_directive__WEBPACK_IMPORTED_MODULE_30__["RbacAllowDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientXsrfModule"].withOptions({
            cookieName: 'XSRF-TOKEN',
            headerName: 'x-xsrf-token'
          }), _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(_common_routes_config__WEBPACK_IMPORTED_MODULE_5__["routesConfig"]), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_31__["RecaptchaModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_31__["RecaptchaFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_33__["ToastrModule"].forRoot() // ToastrModule added
          ],
          providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _services_transaction_service__WEBPACK_IMPORTED_MODULE_9__["TransactionService"], _services_photographerService__WEBPACK_IMPORTED_MODULE_16__["PhotographerService"], _services_photograph_service__WEBPACK_IMPORTED_MODULE_10__["PhotographService"], _services_message_service__WEBPACK_IMPORTED_MODULE_11__["MessageService"], {
            provide: 'adminsOnlyGuard',
            useFactory: createAdminOnlyGuard,
            deps: [_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]
          }, {
            provide: 'usersOnlyGuard',
            useFactory: createUserOnlyGuard,
            deps: [_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]
          }, {
            provide: 'authenticationGuard',
            useFactory: createAuthenticationGuard,
            deps: [_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _common_error_interceptor__WEBPACK_IMPORTED_MODULE_28__["ErrorInterceptor"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-recaptcha */
    "./node_modules/ng-recaptcha/__ivy_ngcc__/fesm2015/ng-recaptcha.js");

    function LoginComponent_ng_container_4_label_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r2.message, " ");
      }
    }

    function LoginComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_ng_container_4_label_1_Template, 2, 1, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r2 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("email").hasError(error_r2.type) && (ctx_r0.form.get("email").dirty || ctx_r0.form.get("email").touched));
      }
    }

    function LoginComponent_ng_container_6_label_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r5.message, " ");
      }
    }

    function LoginComponent_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_ng_container_6_label_1_Template, 2, 1, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r5 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("password").hasError(error_r5.type) && (ctx_r1.form.get("password").dirty || ctx_r1.form.get("password").touched));
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(fb, authService, router, toasterService) {
        _classCallCheck(this, LoginComponent);

        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.toasterService = toasterService;
        this.error_messages = {
          'email': [{
            type: 'required',
            message: 'Email is required.'
          }, {
            type: 'minlength',
            message: 'Email length.'
          }, {
            type: 'maxlength',
            message: 'Email length.'
          }, {
            type: 'pattern',
            message: 'please enter a email address of a proper type.'
          }],
          'password': [{
            type: 'required',
            message: 'password is required.'
          }, {
            type: 'minlength',
            message: 'password length.'
          }, {
            type: 'maxlength',
            message: 'password length.'
          }],
          'captcha': [{
            type: 'required',
            message: 'captcha is required.'
          }]
        };
        this.form = this.fb.group({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)])),
          recaptchaReactive: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]))
        }, {
          validators: this.captcha.bind(this)
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} //function to resolve the reCaptcha and retrieve a token

      }, {
        key: "resolved",
        value: function () {
          var _resolved = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(captchaResponse) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.sendTokenToBackend(captchaResponse); //declaring the token send function with a token parameter

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function resolved(_x) {
            return _resolved.apply(this, arguments);
          }

          return resolved;
        }() //function to send the token to the node server

      }, {
        key: "sendTokenToBackend",
        value: function sendTokenToBackend(tok) {
          var _this12 = this;

          //calling the service and passing the token to the service
          this.authService.validateCaptcha(tok).subscribe(function (data) {
            _this12.cap = data.success;

            _this12.captcha();
          }, function (err) {}, function () {});
        }
      }, {
        key: "captcha",
        value: function captcha() {
          return this.cap == true ? null : {
            robot: true
          };
        }
      }, {
        key: "login",
        value: function login() {
          var _this13 = this;

          var val = this.form.value;

          if (val.email && val.password) {
            this.authService.login(val.email, val.password).subscribe(function () {
              _this13.successMessage = "You have been successfully logged in";

              _this13.toasterService.success(_this13.successMessage, 'Success', {
                positionClass: 'toast-top-center',
                timeOut: 5000
              });

              setTimeout(function () {
                _this13.router.navigateByUrl('welcome');
              }, 1500);
            }, function (err) {
              _this13.errorMessage = err.error.error;
            });
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["login"]],
      decls: 22,
      vars: 4,
      consts: [[1, "naslov"], [1, "error-messages"], [4, "ngFor", "ngForOf"], ["autocomplete", "off", "novalidate", "", 1, "form-center", 3, "formGroup"], ["formControlName", "recaptchaReactive", "siteKey", "6LfePfAUAAAAAGa6FIBtAHMku9gAzvgwZsYD1cXu", 3, "resolved"], [1, "form-group"], ["name", "email", "formControlName", "email", 1, "form-control"], ["name", "password", "formControlName", "password", "type", "password", 1, "form-control"], [1, "form-buttons"], [1, "btn", "btn-dark", 3, "disabled", "click"], ["class", "text-danger errors", 4, "ngIf"], [1, "text-danger", "errors"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_ng_container_4_Template, 2, 1, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginComponent_ng_container_6_Template, 2, 1, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "re-captcha", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resolved", function LoginComponent_Template_re_captcha_resolved_10_listener($event) {
            return ctx.resolved($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_20_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__["RecaptchaComponent"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__["RecaptchaValueAccessorDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/message/add-message/add-message.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/message/add-message/add-message.component.ts ***!
    \**************************************************************/

  /*! exports provided: AddMessageComponent */

  /***/
  function srcAppMessageAddMessageAddMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddMessageComponent", function () {
      return AddMessageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_services/message.service */
    "./src/app/_services/message.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_transaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_services/transaction.service */
    "./src/app/_services/transaction.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AddMessageComponent_option_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r129 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", user_r129.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", user_r129.firstName, " ", user_r129.lastName, " ");
      }
    }

    var AddMessageComponent = /*#__PURE__*/function () {
      function AddMessageComponent(fb, messageService, router, transactionService, sanitizer, authService, toasterService) {
        _classCallCheck(this, AddMessageComponent);

        this.fb = fb;
        this.messageService = messageService;
        this.router = router;
        this.transactionService = transactionService;
        this.sanitizer = sanitizer;
        this.authService = authService;
        this.toasterService = toasterService;
        this.form = this.fb.group({
          content: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(300)])),
          receiverEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]))
        });
      }

      _createClass(AddMessageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.users$ = this.authService.getAllUsers();
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          var _this14 = this;

          var val = this.form.value;

          if (val.content && val.receiverEmail) {
            this.messageService.addMessage(val.content, val.receiverEmail).subscribe(function () {
              _this14.successMessage = "Message has been sent";

              _this14.toasterService.success(_this14.successMessage, 'Success', {
                positionClass: 'toast-top-center',
                timeOut: 5000
              });

              setTimeout(function () {
                _this14.router.navigateByUrl("messages");
              }, 1500);
            }, function (err) {
              _this14.errorMessage = err.error.error;
            });
          }
        }
      }]);

      return AddMessageComponent;
    }();

    AddMessageComponent.ɵfac = function AddMessageComponent_Factory(t) {
      return new (t || AddMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_transaction_service__WEBPACK_IMPORTED_MODULE_4__["TransactionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]));
    };

    AddMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddMessageComponent,
      selectors: [["app-add-message"]],
      decls: 17,
      vars: 5,
      consts: [[1, "naslov"], ["autocomplete", "off", "novalidate", "", 1, "form-center", 3, "formGroup"], [1, "form-field"], ["id", "receiverEmail", "name", "receiverEmail", "formControlName", "receiverEmail", "required", "", 1, "form-control"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "text", "name", "content", "formControlName", "content", "required", "", "maxlength", "300", 1, "form-control"], [1, "form-buttons"], [1, "btn", "btn-dark", 3, "disabled", "click"], [3, "ngValue"]],
      template: function AddMessageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Receiver:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddMessageComponent_option_8_Template, 2, 3, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Content:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "textarea", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddMessageComponent_Template_button_click_15_listener() {
            return ctx.sendMessage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Send");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 3, ctx.users$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2UvYWRkLW1lc3NhZ2UvYWRkLW1lc3NhZ2UuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-message',
          templateUrl: './add-message.component.html',
          styleUrls: ['./add-message.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_transaction_service__WEBPACK_IMPORTED_MODULE_4__["TransactionService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/message/messages/messages.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/message/messages/messages.component.ts ***!
    \********************************************************/

  /*! exports provided: MessagesComponent */

  /***/
  function srcAppMessageMessagesMessagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesComponent", function () {
      return MessagesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/_services/message.service */
    "./src/app/_services/message.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MessagesComponent_div_5_tr_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sender");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Receiver");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r127 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", p_r127.sender.firstName, " ", p_r127.sender.lastName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", p_r127.receiver.firstName, " ", p_r127.receiver.lastName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r127.date, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", p_r127.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function MessagesComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MessagesComponent_div_5_tr_3_Template, 17, 6, "tr", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r125.messages$));
      }
    }

    var MessagesComponent = /*#__PURE__*/function () {
      function MessagesComponent(messageService, router, authService, sanitizer) {
        _classCallCheck(this, MessagesComponent);

        this.messageService = messageService;
        this.router = router;
        this.authService = authService;
        this.sanitizer = sanitizer;
        this.contents = [];
        this.messages$ = this.messageService.getMessages();
        this.loggedUser$ = this.authService.user$;
      }

      _createClass(MessagesComponent, [{
        key: "desanitizeURL",
        value: function desanitizeURL(text) {
          return this.sanitizer.bypassSecurityTrustUrl(text);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.messages$ = this.messageService.getMessages();
          this.loggedUser$ = this.authService.user$;
        }
      }]);

      return MessagesComponent;
    }();

    MessagesComponent.ɵfac = function MessagesComponent_Factory(t) {
      return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]));
    };

    MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MessagesComponent,
      selectors: [["app-messages"]],
      decls: 7,
      vars: 3,
      consts: [[1, "naslov"], ["routerLink", "/messages/add", 1, "btn", "btn-dark", "btn-center"], ["class", "lessons-list-container v-h-center-block-parent", 4, "ngIf"], [1, "lessons-list-container", "v-h-center-block-parent"], [1, "table", "lessons-list", "card", "card-strong"], [4, "ngFor", "ngForOf"], [1, "lesson-title", "mess"], [1, "mess"], [1, "message-content", 3, "innerHtml"]],
      template: function MessagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Messages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " New message ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MessagesComponent_div_5_Template, 5, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, ctx.messages$));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: ["body[_ngcontent-%COMP%] {font-family: Arial, Helvetica, sans-serif;}\r\n    \r\n\r\n    \r\n.modal[_ngcontent-%COMP%] {\r\n  display: none; \r\n  position: fixed; \r\n  z-index: 1; \r\n  padding-top: 100px; \r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; \r\n  height: 100%; \r\n  overflow: auto; \r\n  background-color: rgb(0,0,0); \r\n  background-color: rgba(0,0,0,0.4); \r\n}\r\n    \r\n\r\n    \r\n.modal-content[_ngcontent-%COMP%] {\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 80%;\r\n}\r\n    \r\n\r\n    \r\n.close[_ngcontent-%COMP%] {\r\n  color: #aaaaaa;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n    \r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n  color: #000;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0seUNBQXlDLENBQUM7O0FBRWhELDJCQUEyQjs7QUFDM0I7RUFDRSxhQUFhLEVBQUUsc0JBQXNCO0VBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7RUFDbkMsVUFBVSxFQUFFLGVBQWU7RUFDM0Isa0JBQWtCLEVBQUUsd0JBQXdCO0VBQzVDLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVyxFQUFFLGVBQWU7RUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtFQUM5QixjQUFjLEVBQUUsNEJBQTRCO0VBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtFQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7QUFDMUQ7O0FBRUEsa0JBQWtCOztBQUNsQjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7O0FBRUEscUJBQXFCOztBQUNyQjtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjt9XHJcbiAgICBcclxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xyXG4ubW9kYWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbn1cclxuXHJcbi8qIE1vZGFsIENvbnRlbnQgKi9cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXHJcbi5jbG9zZSB7XHJcbiAgY29sb3I6ICNhYWFhYWE7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNsb3NlOmhvdmVyLFxyXG4uY2xvc2U6Zm9jdXMge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-messages',
          templateUrl: './messages.component.html',
          styleUrls: ['./messages.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/photograph/add-photograph/add-photograph.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/photograph/add-photograph/add-photograph.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AddPhotographComponent */

  /***/
  function srcAppPhotographAddPhotographAddPhotographComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPhotographComponent", function () {
      return AddPhotographComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_photograph_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_services/photograph.service */
    "./src/app/_services/photograph.service.ts");
    /* harmony import */


    var src_app_services_photographerService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_services/photographerService */
    "./src/app/_services/photographerService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AddPhotographComponent_ng_container_2_label_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r93.message, " ");
      }
    }

    function AddPhotographComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddPhotographComponent_ng_container_2_label_1_Template, 2, 1, "label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r93 = ctx.$implicit;

        var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r90.form.get("name").hasError(error_r93.type) && (ctx_r90.form.get("name").dirty || ctx_r90.form.get("name").touched));
      }
    }

    function AddPhotographComponent_ng_container_3_label_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r96.message, " ");
      }
    }

    function AddPhotographComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddPhotographComponent_ng_container_3_label_1_Template, 2, 1, "label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r96 = ctx.$implicit;

        var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r91.form.get("year").hasError(error_r96.type) && (ctx_r91.form.get("year").dirty || ctx_r91.form.get("year").touched));
      }
    }

    function AddPhotographComponent_option_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r99 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", p_r99.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", p_r99.firstName, " ", p_r99.lastName, " ");
      }
    }

    var AddPhotographComponent = /*#__PURE__*/function () {
      function AddPhotographComponent(fb, photographService, photographerService, router, toasterService) {
        _classCallCheck(this, AddPhotographComponent);

        this.fb = fb;
        this.photographService = photographService;
        this.photographerService = photographerService;
        this.router = router;
        this.toasterService = toasterService;
        this.error_messages = {
          'name': [{
            type: 'maxlength',
            message: 'Input cannot be more than 50 characters long'
          }],
          'year': [{
            type: 'max',
            message: 'Year must be between 1800 and 2020'
          }, {
            type: 'min',
            message: 'Year must be between 1800 and 2020'
          }]
        };
        this.form = this.fb.group({
          year: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1800), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2020)])),
          price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)])),
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)])),
          photographerId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]))
        });
      }

      _createClass(AddPhotographComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.photographers$ = this.photographerService.getPhotographers();
        }
      }, {
        key: "createPhotograph",
        value: function createPhotograph() {
          var _this15 = this;

          var val = this.form.value;

          if (val.name && val.photographerId && val.year && val.price) {
            this.photographService.addPhotograph(val.name, val.photographerId, val.year, val.price).subscribe(function () {
              _this15.successMessage = "Photograph has been created";

              _this15.toasterService.success(_this15.successMessage, 'Success', {
                positionClass: 'toast-top-center',
                timeOut: 5000
              });

              setTimeout(function () {
                _this15.router.navigateByUrl("/photographs");
              }, 1500);
            }, function (err) {
              _this15.errorMessage = err.error.error;
            });
          }
        }
      }]);

      return AddPhotographComponent;
    }();

    AddPhotographComponent.ɵfac = function AddPhotographComponent_Factory(t) {
      return new (t || AddPhotographComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_photograph_service__WEBPACK_IMPORTED_MODULE_2__["PhotographService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_photographerService__WEBPACK_IMPORTED_MODULE_3__["PhotographerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]));
    };

    AddPhotographComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddPhotographComponent,
      selectors: [["app-add-photograph"]],
      decls: 27,
      vars: 7,
      consts: [[1, "naslov"], [4, "ngFor", "ngForOf"], ["class", "errors", 4, "ngFor", "ngForOf"], ["autocomplete", "off", "novalidate", "", 1, "form-center", 3, "formGroup"], [1, "form-group"], ["formControlName", "name", "type", "text", "required", "", 1, "form-control"], [1, "form-field"], ["id", "photographerId", "name", "photographerId", "formControlName", "photographerId", "required", "", 1, "form-control"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "number", "name", "year", "formControlName", "year", "required", "", 1, "form-control"], ["type", "number", "name", "price", "formControlName", "price", "required", "", 1, "form-control"], [1, "form-buttons"], [1, "btn", "btn-dark", 3, "disabled", "click"], ["class", "text-danger errors", 4, "ngIf"], [1, "text-danger", "errors"], [1, "errors"], [3, "ngValue"]],
      template: function AddPhotographComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New photograph");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddPhotographComponent_ng_container_2_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddPhotographComponent_ng_container_3_Template, 2, 1, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Photographer:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddPhotographComponent_option_14_Template, 2, 3, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Year:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Price:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPhotographComponent_Template_button_click_25_listener() {
            return ctx.createPhotograph();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.year);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 5, ctx.photographers$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvZ3JhcGgvYWRkLXBob3RvZ3JhcGgvYWRkLXBob3RvZ3JhcGguY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddPhotographComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-photograph',
          templateUrl: './add-photograph.component.html',
          styleUrls: ['./add-photograph.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_services_photograph_service__WEBPACK_IMPORTED_MODULE_2__["PhotographService"]
        }, {
          type: src_app_services_photographerService__WEBPACK_IMPORTED_MODULE_3__["PhotographerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/photograph/edit-photograph/edit-photograph.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/photograph/edit-photograph/edit-photograph.component.ts ***!
    \*************************************************************************/

  /*! exports provided: EditPhotographComponent */

  /***/
  function srcAppPhotographEditPhotographEditPhotographComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditPhotographComponent", function () {
      return EditPhotographComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_photographerService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_services/photographerService */
    "./src/app/_services/photographerService.ts");
    /* harmony import */


    var src_app_services_photograph_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_services/photograph.service */
    "./src/app/_services/photograph.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EditPhotographComponent_ng_container_2_label_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r103.message, " ");
      }
    }

    function EditPhotographComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditPhotographComponent_ng_container_2_label_1_Template, 2, 1, "label", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r103 = ctx.$implicit;

        var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r100.form.get("name").hasError(error_r103.type) && (ctx_r100.form.get("name").dirty || ctx_r100.form.get("name").touched));
      }
    }

    function EditPhotographComponent_ng_container_3_label_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r106.message, " ");
      }
    }

    function EditPhotographComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditPhotographComponent_ng_container_3_label_1_Template, 2, 1, "label", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r106 = ctx.$implicit;

        var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r101.form.get("year").hasError(error_r106.type) && (ctx_r101.form.get("year").dirty || ctx_r101.form.get("year").touched));
      }
    }

    function EditPhotographComponent_form_4_option_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r110 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", p_r110.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", p_r110.firstName, " ", p_r110.lastName, " ");
      }
    }

    function EditPhotographComponent_form_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditPhotographComponent_form_4_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112);

          var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r111.photograph.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Photographer:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditPhotographComponent_form_4_Template_select_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112);

          var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r113.photograph.photographerId = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EditPhotographComponent_form_4_option_10_Template, 2, 3, "option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Year:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditPhotographComponent_form_4_Template_input_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112);

          var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r114.photograph.year = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Price:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditPhotographComponent_form_4_Template_input_ngModelChange_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112);

          var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r115.photograph.price = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPhotographComponent_form_4_Template_button_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112);

          var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r116.editPhotograph();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r102.form);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r102.photograph.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r102.photograph.photographerId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, ctx_r102.photographers$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r102.photograph.year);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r102.photograph.price);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r102.form.valid);
      }
    }

    var EditPhotographComponent = /*#__PURE__*/function () {
      function EditPhotographComponent(route, fb, photographerService, photographService, router, toasterService) {
        _classCallCheck(this, EditPhotographComponent);

        this.route = route;
        this.fb = fb;
        this.photographerService = photographerService;
        this.photographService = photographService;
        this.router = router;
        this.toasterService = toasterService;
        this.error_messages = {
          'name': [{
            type: 'maxlength',
            message: 'Input cannot be more than 50 characters long'
          }],
          'year': [{
            type: 'max',
            message: 'Year must be between 1800 and 2020'
          }, {
            type: 'min',
            message: 'Year must be between 1800 and 2020'
          }]
        };
        this.form = this.fb.group({
          year: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1800), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2020)])),
          price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)])),
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)])),
          photographerId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]))
        });
      }

      _createClass(EditPhotographComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) {
            return params.get("id");
          })).subscribe(function (id) {
            _this16.photographId = parseInt(id, 10);

            _this16.load();

            _this16.photographers$ = _this16.photographerService.getPhotographers();
          });
        }
      }, {
        key: "load",
        value: function load() {
          var _this17 = this;

          var onlyTasks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this.photographService.getPhotograph(this.photographId).subscribe(function (a) {
            _this17.photograph = {
              id: a.id,
              name: a.name,
              year: a.year,
              photoLink: a.photoLink,
              photographer: null,
              photographerId: a.photographerId,
              price: a.price,
              userId: null
            };
          });
        }
      }, {
        key: "editPhotograph",
        value: function editPhotograph() {
          var _this18 = this;

          var val = this.form.value;

          if (val.name && val.photographerId && val.year && val.price) {
            this.photographService.editPhotograph(this.photographId, val.name, val.photographerId, val.year, val.price).subscribe(function () {
              _this18.successMessage = "Photograph has been edited";

              _this18.toasterService.success(_this18.successMessage, 'Success', {
                positionClass: 'toast-top-center',
                timeOut: 5000
              });

              setTimeout(function () {
                _this18.router.navigateByUrl("admin/photographs");
              }, 1500);
            }, function (err) {
              _this18.errorMessage = err.error.error;
            });
          }
        }
      }]);

      return EditPhotographComponent;
    }();

    EditPhotographComponent.ɵfac = function EditPhotographComponent_Factory(t) {
      return new (t || EditPhotographComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_photographerService__WEBPACK_IMPORTED_MODULE_4__["PhotographerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_photograph_service__WEBPACK_IMPORTED_MODULE_5__["PhotographService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]));
    };

    EditPhotographComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditPhotographComponent,
      selectors: [["app-edit-photograph"]],
      decls: 5,
      vars: 3,
      consts: [[1, "naslov"], ["class", "errors", 4, "ngFor", "ngForOf"], ["autocomplete", "off", "novalidate", "", "class", "form-center", 3, "formGroup", 4, "ngIf"], [1, "errors"], ["class", "text-danger errors", 4, "ngIf"], [1, "text-danger", "errors"], ["autocomplete", "off", "novalidate", "", 1, "form-center", 3, "formGroup"], [1, "form-group"], ["formControlName", "name", "type", "text", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-field"], ["id", "photographerId", "name", "photographerId", "formControlName", "photographerId", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "number", "name", "year", "formControlName", "year", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "price", "formControlName", "price", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-buttons"], [1, "btn", "btn-dark", 3, "disabled", "click"], [3, "ngValue"]],
      template: function EditPhotographComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit photograph");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditPhotographComponent_ng_container_2_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditPhotographComponent_ng_container_3_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditPhotographComponent_form_4_Template, 23, 9, "form", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.year);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.photograph);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvZ3JhcGgvZWRpdC1waG90b2dyYXBoL2VkaXQtcGhvdG9ncmFwaC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditPhotographComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-photograph',
          templateUrl: './edit-photograph.component.html',
          styleUrls: ['./edit-photograph.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_services_photographerService__WEBPACK_IMPORTED_MODULE_4__["PhotographerService"]
        }, {
          type: src_app_services_photograph_service__WEBPACK_IMPORTED_MODULE_5__["PhotographService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/photograph/my-photographs/my-photographs.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/photograph/my-photographs/my-photographs.component.ts ***!
    \***********************************************************************/

  /*! exports provided: MyPhotographsComponent */

  /***/
  function srcAppPhotographMyPhotographsMyPhotographsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyPhotographsComponent", function () {
      return MyPhotographsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_photograph_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/_services/photograph.service */
    "./src/app/_services/photograph.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MyPhotographsComponent_h2_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You currently don't own any photographs..");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyPhotographsComponent_div_2_tr_6_button_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyPhotographsComponent_div_2_tr_6_button_10_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124);

          var p_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r122.sellPhotograph(p_r120.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sell ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyPhotographsComponent_div_2_tr_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MyPhotographsComponent_div_2_tr_6_button_10_Template, 2, 0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r120 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", p_r120.name, ", ", p_r120.year, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", p_r120.photographer.firstName, " ", p_r120.photographer.lastName, " (", p_r120.photographer.age, ") ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r120.price, "$ ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", p_r120.photoLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/photos/", p_r120.photoLink, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r120.userId);
      }
    }

    function MyPhotographsComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Photographs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MyPhotographsComponent_div_2_tr_6_Template, 11, 9, "tr", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 1, ctx_r118.photos$));
      }
    }

    var MyPhotographsComponent = /*#__PURE__*/function () {
      function MyPhotographsComponent(photographService, authService, router, toasterService) {
        _classCallCheck(this, MyPhotographsComponent);

        this.photographService = photographService;
        this.authService = authService;
        this.router = router;
        this.toasterService = toasterService;
      }

      _createClass(MyPhotographsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.photos$ = this.photographService.getMyPhotographs();
        }
      }, {
        key: "sellPhotograph",
        value: function sellPhotograph(id) {
          var _this19 = this;

          this.photographService.sellPhotograph(id).subscribe(function () {
            _this19.successMessage = "Photograph has been sold";

            _this19.toasterService.success(_this19.successMessage, 'Success', {
              positionClass: 'toast-top-center',
              timeOut: 5000
            });

            location.reload(true);

            if (_this19.photographService.getMyPhotographs() == null) {
              _this19.photos$ = null;
            } else {
              _this19.photos$ = _this19.photographService.getMyPhotographs();
            }
          }, function (err) {
            _this19.errorMessage = err.error.error;
          });
        }
      }]);

      return MyPhotographsComponent;
    }();

    MyPhotographsComponent.ɵfac = function MyPhotographsComponent_Factory(t) {
      return new (t || MyPhotographsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_photograph_service__WEBPACK_IMPORTED_MODULE_1__["PhotographService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
    };

    MyPhotographsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyPhotographsComponent,
      selectors: [["app-my-photographs"]],
      decls: 4,
      vars: 6,
      consts: [["class", "naslov", 4, "ngIf"], ["class", "lessons-list-container v-h-center-block-parent", 4, "ngIf"], [1, "naslov"], [1, "lessons-list-container", "v-h-center-block-parent"], [1, "table", "lessons-list", "card", "card-strong"], [4, "ngFor", "ngForOf"], [1, "title"], [1, "photo"], ["target", "_blank", 3, "href"], ["alt", "photo", "height", "130", "width", "160", 3, "src"], ["type", "button", "class", "btn btn-dark", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-dark", 3, "click"]],
      template: function MyPhotographsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MyPhotographsComponent_h2_0_Template, 2, 0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyPhotographsComponent_div_2_Template, 8, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.photos$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.photos$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvZ3JhcGgvbXktcGhvdG9ncmFwaHMvbXktcGhvdG9ncmFwaHMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyPhotographsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-my-photographs',
          templateUrl: './my-photographs.component.html',
          styleUrls: ['./my-photographs.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_photograph_service__WEBPACK_IMPORTED_MODULE_1__["PhotographService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/photograph/photographs/photographs.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/photograph/photographs/photographs.component.ts ***!
    \*****************************************************************/

  /*! exports provided: PhotographsComponent */

  /***/
  function srcAppPhotographPhotographsPhotographsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotographsComponent", function () {
      return PhotographsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_photograph_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_services/photograph.service */
    "./src/app/_services/photograph.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_rbac_allow_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../_common/rbac-allow.directive */
    "./src/app/_common/rbac-allow.directive.ts");

    function PhotographsComponent_div_0_button_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " New photograph ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PhotographsComponent_div_0_tr_6_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotographsComponent_div_0_tr_6_div_12_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var p_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r71.deletePhotograph(p_r68.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/photographs/", p_r68.id, "");
      }
    }

    function PhotographsComponent_div_0_tr_6_div_13_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotographsComponent_div_0_tr_6_div_13_button_1_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var p_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r77.buyPhotograph(p_r68.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Buy ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PhotographsComponent_div_0_tr_6_div_13_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotographsComponent_div_0_tr_6_div_13_button_2_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82);

          var p_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r80.sellPhotograph(p_r68.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sell ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PhotographsComponent_div_0_tr_6_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PhotographsComponent_div_0_tr_6_div_13_button_1_Template, 2, 0, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PhotographsComponent_div_0_tr_6_div_13_button_2_Template, 2, 0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !p_r68.userId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r68.userId === _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r70.loggedUser$).id);
      }
    }

    var _c0 = function _c0() {
      return ["ADMIN"];
    };

    var _c1 = function _c1() {
      return ["USER"];
    };

    function PhotographsComponent_div_0_tr_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PhotographsComponent_div_0_tr_6_div_12_Template, 5, 1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PhotographsComponent_div_0_tr_6_div_13_Template, 4, 4, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r68 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r68.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](", ", p_r68.year, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", p_r68.photographer.firstName, " ", p_r68.photographer.lastName, " (", p_r68.photographer.age, ") ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r68.price, "$ ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", p_r68.photoLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/photos/", p_r68.photoLink, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rbacAllow", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rbacAllow", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
      }
    }

    function PhotographsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Photographs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PhotographsComponent_div_0_button_3_Template, 2, 0, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PhotographsComponent_div_0_tr_6_Template, 14, 12, "tr", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rbacAllow", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, ctx_r63.photos$));
      }
    }

    function PhotographsComponent_div_2_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r84.response.response, " ");
      }
    }

    function PhotographsComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bored of photographs?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ping an address to waste time");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotographsComponent_div_2_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86);

          var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r85.ping();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ping it!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PhotographsComponent_div_2_div_12_Template, 2, 1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r64.form);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r64.form.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r64.response);
      }
    }

    function PhotographsComponent_ng_container_3_label_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r87.message, " ");
      }
    }

    function PhotographsComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PhotographsComponent_ng_container_3_label_1_Template, 2, 1, "label", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r87 = ctx.$implicit;

        var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r65.form.get("ipaddress").hasError(error_r87.type) && (ctx_r65.form.get("ipaddress").dirty || ctx_r65.form.get("ipaddress").touched));
      }
    }

    var PhotographsComponent = /*#__PURE__*/function () {
      function PhotographsComponent(photographService, router, authService, fb, toasterService) {
        _classCallCheck(this, PhotographsComponent);

        this.photographService = photographService;
        this.router = router;
        this.authService = authService;
        this.fb = fb;
        this.toasterService = toasterService;
        this.error_messages = {
          'ipaddress': [{
            type: 'maxlength',
            message: 'Ip address must be beetween 7 and 15 characters long'
          }, {
            type: 'minlength',
            message: 'Ip address must be beetween 7 and 15 characters long'
          }, {
            type: 'pattern',
            message: 'That is not a valid ip address'
          }]
        };
        this.form = this.fb.group({
          ipaddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]))
        });
      }

      _createClass(PhotographsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.photos$ = this.photographService.getPhotographs();
          this.loggedUser$ = this.authService.user$;
        }
      }, {
        key: "deletePhotograph",
        value: function deletePhotograph(id) {
          var _this20 = this;

          this.photographService.deletePhotograph(id).subscribe(function () {
            _this20.toasterService.success(_this20.successMessage, 'Success', {
              positionClass: 'toast-top-center',
              timeOut: 5000
            });

            if (_this20.photographService.getPhotographs() == null) {
              _this20.photos$ = null;
            } else {
              _this20.photos$ = _this20.photographService.getPhotographs();
            }
          }, function (err) {
            _this20.errorMessage = err.error.error;
          });
        }
      }, {
        key: "buyPhotograph",
        value: function buyPhotograph(id) {
          var _this21 = this;

          this.photographService.buyPhotograph(id).subscribe(function () {
            _this21.successMessage = "Photograph has been bought";

            _this21.toasterService.success(_this21.successMessage, 'Success', {
              positionClass: 'toast-top-center',
              timeOut: 5000
            });

            setTimeout(function () {
              location.reload(true);
            }, 1500);
          }, function (err) {
            _this21.errorMessage = err.error.error;
          });
        }
      }, {
        key: "sellPhotograph",
        value: function sellPhotograph(id) {
          var _this22 = this;

          this.photographService.sellPhotograph(id).subscribe(function () {
            _this22.successMessage = "Photograph has been sold";

            _this22.toasterService.success(_this22.successMessage, 'Success', {
              positionClass: 'toast-top-center',
              timeOut: 5000
            });

            setTimeout(function () {
              location.reload(true);
            }, 1500);
          }, function (err) {
            _this22.errorMessage = err.error.error;
          });
        }
      }, {
        key: "ping",
        value: function ping() {
          var _this23 = this;

          var val = this.form.value;

          if (val.ipaddress) {
            this.photographService.ping(val.ipaddress).subscribe(function (resp) {
              _this23.response = resp;
            });
          }
        }
      }]);

      return PhotographsComponent;
    }();

    PhotographsComponent.ɵfac = function PhotographsComponent_Factory(t) {
      return new (t || PhotographsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_photograph_service__WEBPACK_IMPORTED_MODULE_2__["PhotographService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]));
    };

    PhotographsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PhotographsComponent,
      selectors: [["app-photographs"]],
      decls: 4,
      vars: 6,
      consts: [["class", "lessons-list-container v-h-center-block-parent", 4, "ngIf"], [4, "rbacAllow"], [4, "ngFor", "ngForOf"], [1, "lessons-list-container", "v-h-center-block-parent"], [1, "naslov"], ["routerLink", "/photographs/add", "class", "btn btn-dark btn-center", 4, "rbacAllow"], [1, "table", "lessons-list", "card", "card-strong"], ["routerLink", "/photographs/add", 1, "btn", "btn-dark", "btn-center"], [1, "title"], [1, "photo"], ["target", "_blank", 3, "href"], ["alt", "photo", "height", "130", "width", "160", 3, "src"], ["type", "button", 1, "btn", "btn-warning", 3, "routerLink"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "button", "class", "btn btn-light", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-dark", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-light", 3, "click"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], [1, "ipsearch"], ["novalidate", "", 3, "formGroup"], [1, "form-group"], ["formControlName", "ipaddress", "type", "text", "placeholder", "IPv4 address", "required", "", "minlength", "7", "maxlength", "15", "pattern", "^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$", 1, "form-control", "search"], [1, "form-buttons"], [1, "btn", "btn-dark", "src-btn", 3, "disabled", "click"], ["class", "ipresponse", 4, "ngIf"], [1, "ipresponse"], ["class", "text-danger errors", 4, "ngIf"], [1, "text-danger", "errors"]],
      template: function PhotographsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PhotographsComponent_div_0_Template, 8, 5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PhotographsComponent_div_2_Template, 13, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PhotographsComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.photos$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rbacAllow", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.ipaddress);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _common_rbac_allow_directive__WEBPACK_IMPORTED_MODULE_7__["RbacAllowDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvZ3JhcGgvcGhvdG9ncmFwaHMvcGhvdG9ncmFwaHMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotographsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-photographs',
          templateUrl: './photographs.component.html',
          styleUrls: ['./photographs.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_photograph_service__WEBPACK_IMPORTED_MODULE_2__["PhotographService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/photographer/add-photographer/add-photographer.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/photographer/add-photographer/add-photographer.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: AddPhotographerComponent */

  /***/
  function srcAppPhotographerAddPhotographerAddPhotographerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPhotographerComponent", function () {
      return AddPhotographerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_photographerService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../_services/photographerService */
    "./src/app/_services/photographerService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AddPhotographerComponent_ng_container_2_label_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r36.message, " ");
      }
    }

    function AddPhotographerComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddPhotographerComponent_ng_container_2_label_1_Template, 2, 1, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r36 = ctx.$implicit;

        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.form.get("firstName").hasError(error_r36.type) && (ctx_r33.form.get("firstName").dirty || ctx_r33.form.get("firstName").touched));
      }
    }

    function AddPhotographerComponent_ng_container_3_label_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r39.message, " ");
      }
    }

    function AddPhotographerComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddPhotographerComponent_ng_container_3_label_1_Template, 2, 1, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r39 = ctx.$implicit;

        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r34.form.get("lastName").hasError(error_r39.type) && (ctx_r34.form.get("lastName").dirty || ctx_r34.form.get("lastName").touched));
      }
    }

    function AddPhotographerComponent_ng_container_4_label_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r42.message, " ");
      }
    }

    function AddPhotographerComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddPhotographerComponent_ng_container_4_label_1_Template, 2, 1, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r42 = ctx.$implicit;

        var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r35.form.get("age").hasError(error_r42.type) && (ctx_r35.form.get("age").dirty || ctx_r35.form.get("age").touched));
      }
    }

    var AddPhotographerComponent = /*#__PURE__*/function () {
      function AddPhotographerComponent(fb, photographerService, router, toasterService) {
        _classCallCheck(this, AddPhotographerComponent);

        this.fb = fb;
        this.photographerService = photographerService;
        this.router = router;
        this.toasterService = toasterService;
        this.error_messages = {
          'firstName': [{
            type: 'maxlength',
            message: 'Input cannot be more than 30 characters long'
          }],
          'lastName': [{
            type: 'maxlength',
            message: 'Input cannot be more than 30 characters long'
          }],
          'age': [{
            type: 'max',
            message: 'Age must be between 18 and 100'
          }, {
            type: 'min',
            message: 'Age must be between 18 and 100'
          }]
        };
        this.form = this.fb.group({
          firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)])),
          lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)])),
          age: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(18), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100)]))
        });
      }

      _createClass(AddPhotographerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "createPhotographer",
        value: function createPhotographer() {
          var _this24 = this;

          var val = this.form.value;

          if (val.firstName && val.lastName && val.age) {
            this.photographerService.addPhotographer(val.firstName, val.lastName, val.age).subscribe(function () {
              _this24.successMessage = "Photographer has been created";

              _this24.toasterService.success(_this24.successMessage, 'Success', {
                positionClass: 'toast-top-center',
                timeOut: 5000
              });

              setTimeout(function () {
                _this24.router.navigateByUrl("photographers");
              }, 1500);
            }, function (err) {
              _this24.errorMessage = err.error.error;
            });
          }
        }
      }]);

      return AddPhotographerComponent;
    }();

    AddPhotographerComponent.ɵfac = function AddPhotographerComponent_Factory(t) {
      return new (t || AddPhotographerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_photographerService__WEBPACK_IMPORTED_MODULE_2__["PhotographerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
    };

    AddPhotographerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddPhotographerComponent,
      selectors: [["app-add-photographer"]],
      decls: 22,
      vars: 5,
      consts: [[1, "naslov"], [4, "ngFor", "ngForOf"], ["autocomplete", "off", "novalidate", "", 1, "form-center", 3, "formGroup"], [1, "form-group"], ["formControlName", "firstName", "type", "text", "required", "", 1, "form-control"], [1, "form-field"], ["formControlName", "lastName", "type", "text", "required", "", 1, "form-control"], ["type", "number", "name", "age", "formControlName", "age", "required", "", 1, "form-control"], [1, "form-buttons"], [1, "btn", "btn-dark", 3, "disabled", "click"], ["class", "text-danger errors", 4, "ngIf"], [1, "text-danger", "errors"]],
      template: function AddPhotographerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "new Photographer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddPhotographerComponent_ng_container_2_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddPhotographerComponent_ng_container_3_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AddPhotographerComponent_ng_container_4_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "First Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Last Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Age");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPhotographerComponent_Template_button_click_20_listener() {
            return ctx.createPhotographer();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.age);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvZ3JhcGhlci9hZGQtcGhvdG9ncmFwaGVyL2FkZC1waG90b2dyYXBoZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddPhotographerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-photographer',
          templateUrl: './add-photographer.component.html',
          styleUrls: ['./add-photographer.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_photographerService__WEBPACK_IMPORTED_MODULE_2__["PhotographerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/photographer/edit-photographer/edit-photographer.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/photographer/edit-photographer/edit-photographer.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: EditPhotographerComponent */

  /***/
  function srcAppPhotographerEditPhotographerEditPhotographerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditPhotographerComponent", function () {
      return EditPhotographerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_photographerService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_services/photographerService */
    "./src/app/_services/photographerService.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EditPhotographerComponent_ng_container_2_label_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r49.message, " ");
      }
    }

    function EditPhotographerComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditPhotographerComponent_ng_container_2_label_1_Template, 2, 1, "label", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r49 = ctx.$implicit;

        var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r45.form.get("firstName").hasError(error_r49.type) && (ctx_r45.form.get("firstName").dirty || ctx_r45.form.get("firstName").touched));
      }
    }

    function EditPhotographerComponent_ng_container_3_label_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r52.message, " ");
      }
    }

    function EditPhotographerComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditPhotographerComponent_ng_container_3_label_1_Template, 2, 1, "label", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r52 = ctx.$implicit;

        var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.form.get("lastName").hasError(error_r52.type) && (ctx_r46.form.get("lastName").dirty || ctx_r46.form.get("lastName").touched));
      }
    }

    function EditPhotographerComponent_ng_container_4_label_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r55.message, " ");
      }
    }

    function EditPhotographerComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditPhotographerComponent_ng_container_4_label_1_Template, 2, 1, "label", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r55 = ctx.$implicit;

        var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.form.get("age").hasError(error_r55.type) && (ctx_r47.form.get("age").dirty || ctx_r47.form.get("age").touched));
      }
    }

    function EditPhotographerComponent_form_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "First Name:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditPhotographerComponent_form_5_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r58.photographer.firstName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Last Name:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditPhotographerComponent_form_5_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r60.photographer.lastName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Age");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditPhotographerComponent_form_5_Template_input_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r61.photographer.age = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPhotographerComponent_form_5_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r62.editPhotographer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r48.form);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r48.photographer.firstName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r48.photographer.lastName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r48.photographer.age);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r48.form.valid);
      }
    }

    var EditPhotographerComponent = /*#__PURE__*/function () {
      function EditPhotographerComponent(route, fb, photographerService, router, toasterService) {
        _classCallCheck(this, EditPhotographerComponent);

        this.route = route;
        this.fb = fb;
        this.photographerService = photographerService;
        this.router = router;
        this.toasterService = toasterService;
        this.error_messages = {
          'firstName': [{
            type: 'maxlength',
            message: 'Input cannot be more than 30 characters long'
          }],
          'lastName': [{
            type: 'maxlength',
            message: 'Input cannot be more than 30 characters long'
          }],
          'age': [{
            type: 'max',
            message: 'Age must be between 18 and 100'
          }, {
            type: 'min',
            message: 'Age must be between 18 and 100'
          }]
        };
        this.form = this.fb.group({
          firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)])),
          lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)])),
          age: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(18), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100)]))
        });
      }

      _createClass(EditPhotographerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) {
            return params.get("id");
          })).subscribe(function (id) {
            _this25.photographerId = parseInt(id, 10);

            _this25.load();
          });
        }
      }, {
        key: "load",
        value: function load() {
          var _this26 = this;

          var onlyTasks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this.photographerService.getPhotographer(this.photographerId).subscribe(function (a) {
            _this26.photographer = {
              id: a.id,
              firstName: a.firstName,
              lastName: a.lastName,
              age: a.age
            };
          });
        }
      }, {
        key: "editPhotographer",
        value: function editPhotographer() {
          var _this27 = this;

          var val = this.form.value;

          if (val.firstName && val.lastName && val.age) {
            this.photographerService.editPhotographer(this.photographerId, val.firstName, val.lastName, val.age).subscribe(function () {
              _this27.successMessage = "Photographer has been edited";

              _this27.toasterService.success(_this27.successMessage, 'Success', {
                positionClass: 'toast-top-center',
                timeOut: 5000
              });

              setTimeout(function () {
                _this27.router.navigateByUrl("photographers");
              }, 1500);
            }, function (err) {
              _this27.errorMessage = err.error.error;
            });
          }
        }
      }]);

      return EditPhotographerComponent;
    }();

    EditPhotographerComponent.ɵfac = function EditPhotographerComponent_Factory(t) {
      return new (t || EditPhotographerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_photographerService__WEBPACK_IMPORTED_MODULE_4__["PhotographerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]));
    };

    EditPhotographerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditPhotographerComponent,
      selectors: [["app-edit-photographer"]],
      decls: 6,
      vars: 4,
      consts: [[1, "naslov"], [4, "ngFor", "ngForOf"], ["autocomplete", "off", "novalidate", "", "class", "form-center", 3, "formGroup", 4, "ngIf"], ["class", "text-danger errors", 4, "ngIf"], [1, "text-danger", "errors"], ["autocomplete", "off", "novalidate", "", 1, "form-center", 3, "formGroup"], [1, "form-group"], ["formControlName", "firstName", "type", "text", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-field"], ["formControlName", "lastName", "type", "text", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "age", "formControlName", "age", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-buttons"], [1, "btn", "btn-dark", 3, "disabled", "click"]],
      template: function EditPhotographerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit photographer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditPhotographerComponent_ng_container_2_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditPhotographerComponent_ng_container_3_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditPhotographerComponent_ng_container_4_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditPhotographerComponent_form_5_Template, 17, 5, "form", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.age);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.photographer);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvZ3JhcGhlci9lZGl0LXBob3RvZ3JhcGhlci9lZGl0LXBob3RvZ3JhcGhlci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditPhotographerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-photographer',
          templateUrl: './edit-photographer.component.html',
          styleUrls: ['./edit-photographer.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_services_photographerService__WEBPACK_IMPORTED_MODULE_4__["PhotographerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/photographer/photographers/photographers.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/photographer/photographers/photographers.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PhotographersComponent */

  /***/
  function srcAppPhotographerPhotographersPhotographersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotographersComponent", function () {
      return PhotographersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_photographerService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../_services/photographerService */
    "./src/app/_services/photographerService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PhotographersComponent_div_0_tr_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotographersComponent_div_0_tr_8_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var p_r30 = ctx.$implicit;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r31.deletePhotographer(p_r30.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r30 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", p_r30.firstName, " ", p_r30.lastName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r30.age, " years old ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/photographers/", p_r30.id, "");
      }
    }

    function PhotographersComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Photographers");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " New photographer ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PhotographersComponent_div_0_tr_8_Template, 11, 4, "tr", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 1, ctx_r28.photographers$));
      }
    }

    var PhotographersComponent = /*#__PURE__*/function () {
      function PhotographersComponent(photographerService, router, toasterService) {
        _classCallCheck(this, PhotographersComponent);

        this.photographerService = photographerService;
        this.router = router;
        this.toasterService = toasterService;
      }

      _createClass(PhotographersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.photographers$ = this.photographerService.getPhotographers();
        }
      }, {
        key: "deletePhotographer",
        value: function deletePhotographer(id) {
          var _this28 = this;

          this.photographerService.deletePhotographer(id).subscribe(function () {
            _this28.successMessage = "Photographer has been deleted";

            _this28.toasterService.success(_this28.successMessage, 'Success', {
              positionClass: 'toast-top-center',
              timeOut: 5000
            });

            setTimeout(function () {
              _this28.router.navigateByUrl("photographers");
            }, 1500);
          }, function (err) {
            _this28.errorMessage = err.error.error;
          });
          this.photographers$ = this.photographerService.getPhotographers();
        }
      }]);

      return PhotographersComponent;
    }();

    PhotographersComponent.ɵfac = function PhotographersComponent_Factory(t) {
      return new (t || PhotographersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_photographerService__WEBPACK_IMPORTED_MODULE_1__["PhotographerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
    };

    PhotographersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PhotographersComponent,
      selectors: [["app-photographers"]],
      decls: 2,
      vars: 3,
      consts: [["class", "lessons-list-container v-h-center-block-parent", 4, "ngIf"], [1, "lessons-list-container", "v-h-center-block-parent"], [1, "naslov"], ["routerLink", "/photographers/add", 1, "btn", "btn-dark", "btn-center"], [1, "table", "lessons-list", "card", "card-strong"], [4, "ngFor", "ngForOf"], [1, "lesson-title"], [1, "btn", "btn-warning", 3, "routerLink"], [1, "btn", "btn-danger", 3, "click"]],
      template: function PhotographersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PhotographersComponent_div_0_Template, 10, 3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.photographers$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvZ3JhcGhlci9waG90b2dyYXBoZXJzL3Bob3RvZ3JhcGhlcnMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotographersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-photographers',
          templateUrl: './photographers.component.html',
          styleUrls: ['./photographers.component.css']
        }]
      }], function () {
        return [{
          type: _services_photographerService__WEBPACK_IMPORTED_MODULE_1__["PhotographerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/signup/signup.component.ts":
  /*!********************************************!*\
    !*** ./src/app/signup/signup.component.ts ***!
    \********************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _common_password_policy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_common/password-policy */
    "./src/app/_common/password-policy.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SignupComponent_label_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name cannot be longer than 30 characters long ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_label_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last name cannot be longer than 30 characters long ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_label_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " That is not a valid Secursy profile link! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_label_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " That is not a valid email address! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_label_51_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password do not match ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(formBuilder, authService, router, sanitizer, toasterService) {
        _classCallCheck(this, SignupComponent);

        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.toasterService = toasterService;
        this.frmSignup = this.createSignupForm();
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submit",
        value: function submit() {
          var _this29 = this;

          var val = this.frmSignup.value;

          if (val.email && val.firstName && val.lastName && val.password && val.password === val.confirmPassword) {
            this.authService.signUp(val.email, val.password, val.firstName, val.lastName, val.profileLink).subscribe(function () {
              _this29.successMessage = "You have successfully signed in";

              _this29.toasterService.success(_this29.successMessage, 'Success', {
                positionClass: 'toast-top-center',
                timeOut: 5000
              });

              setTimeout(function () {
                _this29.router.navigateByUrl('welcome');
              }, 1500);
            }, function (err) {
              _this29.errorMessage = err.error.error;
            });
          }
        }
      }, {
        key: "createSignupForm",
        value: function createSignupForm() {
          return this.formBuilder.group({
            profileLink: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(60), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("http://localhost:8081/secure/[a-zA-Z.-]{2,}[.]{1}html")])],
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)])],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)])],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, // check whether the entered password has a number
            _common_password_policy__WEBPACK_IMPORTED_MODULE_2__["PasswordPolicy"].patternValidator(/\d/, {
              hasNumber: true
            }), // check whether the entered password has upper case letter
            _common_password_policy__WEBPACK_IMPORTED_MODULE_2__["PasswordPolicy"].patternValidator(/[A-Z]/, {
              hasCapitalCase: true
            }), // check whether the entered password has a lower case letter
            _common_password_policy__WEBPACK_IMPORTED_MODULE_2__["PasswordPolicy"].patternValidator(/[a-z]/, {
              hasSmallCase: true
            }), _common_password_policy__WEBPACK_IMPORTED_MODULE_2__["PasswordPolicy"].checkTop1000({
              goodPass: true
            }), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)])],
            confirmPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])]
          }, {
            // check whether our password and confirm password match
            validator: _common_password_policy__WEBPACK_IMPORTED_MODULE_2__["PasswordPolicy"].passwordMatchValidator
          });
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["signup"]],
      decls: 55,
      vars: 23,
      consts: [[1, "naslov"], ["autocomplete", "off", 1, "form-center", 3, "formGroup", "submit"], [1, "form-group"], ["for", "firstName"], ["id", "firstName", "formControlName", "firstName", "type", "firstName", 1, "form-control", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], ["for", "lastName"], ["id", "lastName", "formControlName", "lastName", "type", "lastName", 1, "form-control", 3, "ngClass"], ["for", "profileLink"], ["onchange", "", "placeholder", "Optional..", "id", "profileLink", "formControlName", "profileLink", "type", "profileLink", 1, "form-control", 3, "ngClass"], ["for", "email"], ["id", "email", "formControlName", "email", "type", "email", 1, "form-control", 3, "ngClass"], ["for", "password"], ["id", "password", "formControlName", "password", "type", "password", 1, "form-control", 3, "ngClass"], [1, "col", 3, "ngClass"], [1, "material-icons"], ["for", "confirmPassword"], ["id", "confirmPassword", "formControlName", "confirmPassword", "type", "password", 1, "form-control", 3, "ngClass"], [1, "form-buttons"], ["type", "submit", 1, "btn", "btn-dark", 3, "disabled"], [1, "text-danger"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SignupComponent_Template_form_submit_2_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "First name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SignupComponent_label_7_Template, 2, 0, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Last name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SignupComponent_label_12_Template, 2, 0, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Profile link on Secursy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SignupComponent_label_17_Template, 2, 0, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SignupComponent_label_22_Template, 2, 0, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Must be at least 8 characters! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Must contain at least 1 number! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Must contain at least 1 in Capital Case! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Must contain at least 1 Letter in Small Case! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Must be secure! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Confirm Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, SignupComponent_label_51_Template, 2, 0, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Sign up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.frmSignup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.frmSignup.controls["firstName"].invalid ? "is-invalid" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.frmSignup.controls["firstName"].hasError("firstName"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.frmSignup.controls["lastName"].invalid ? "is-invalid" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.frmSignup.controls["lastName"].hasError("lastName"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.frmSignup.controls["profileLink"].invalid ? "is-invalid" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.frmSignup.controls["profileLink"].hasError("profileLink"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.frmSignup.controls["email"].invalid ? "is-invalid" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.frmSignup.controls["email"].hasError("email"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.frmSignup.controls["password"].invalid ? "is-invalid" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.frmSignup.controls["password"].hasError("required") || ctx.frmSignup.controls["password"].hasError("minlength") ? "text-danger" : "text-success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.frmSignup.controls["password"].hasError("required") || ctx.frmSignup.controls["password"].hasError("minlength") ? "cancel" : "check_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.frmSignup.controls["password"].hasError("required") || ctx.frmSignup.controls["password"].hasError("hasNumber") ? "text-danger" : "text-success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.frmSignup.controls["password"].hasError("required") || ctx.frmSignup.controls["password"].hasError("hasNumber") ? "cancel" : "check_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.frmSignup.controls["password"].hasError("required") || ctx.frmSignup.controls["password"].hasError("hasCapitalCase") ? "text-danger" : "text-success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.frmSignup.controls["password"].hasError("required") || ctx.frmSignup.controls["password"].hasError("hasCapitalCase") ? "cancel" : "check_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.frmSignup.controls["password"].hasError("required") || ctx.frmSignup.controls["password"].hasError("hasSmallCase") ? "text-danger" : "text-success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.frmSignup.controls["password"].hasError("required") || ctx.frmSignup.controls["password"].hasError("hasSmallCase") ? "cancel" : "check_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.frmSignup.controls["password"].hasError("required") || ctx.frmSignup.controls["password"].hasError("goodPass") ? "text-danger" : "text-success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.frmSignup.controls["password"].hasError("required") || ctx.frmSignup.controls["password"].hasError("goodPass") ? "cancel" : "check_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.frmSignup.controls["confirmPassword"].invalid ? "is-invalid" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.frmSignup.controls["confirmPassword"].hasError("NoPassswordMatch"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.frmSignup.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      styles: ["main[_ngcontent-%COMP%] {\r\n    width:900px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5tYWluIHtcclxuICAgIHdpZHRoOjkwMHB4O1xyXG59Il19 */", "main[_ngcontent-%COMP%] {\n          width: 900px;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/transaction/add-transaction/add-transaction.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/transaction/add-transaction/add-transaction.component.ts ***!
    \**************************************************************************/

  /*! exports provided: AddTransactionComponent */

  /***/
  function srcAppTransactionAddTransactionAddTransactionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddTransactionComponent", function () {
      return AddTransactionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_transaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../_services/transaction.service */
    "./src/app/_services/transaction.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AddTransactionComponent_ng_container_2_label_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r16.message, " ");
      }
    }

    function AddTransactionComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddTransactionComponent_ng_container_2_label_1_Template, 2, 1, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r16 = ctx.$implicit;

        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.form.get("amount").hasError(error_r16.type) && (ctx_r13.form.get("amount").dirty || ctx_r13.form.get("amount").touched));
      }
    }

    function AddTransactionComponent_ng_container_3_label_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r19.message, " ");
      }
    }

    function AddTransactionComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddTransactionComponent_ng_container_3_label_1_Template, 2, 1, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r19 = ctx.$implicit;

        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.form.get("password").hasError(error_r19.type) && (ctx_r14.form.get("password").dirty || ctx_r14.form.get("password").touched));
      }
    }

    function AddTransactionComponent_option_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", user_r22.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", user_r22.firstName, " ", user_r22.lastName, " ");
      }
    }

    var AddTransactionComponent = /*#__PURE__*/function () {
      function AddTransactionComponent(fb, authService, router, transactionService, toasterService) {
        _classCallCheck(this, AddTransactionComponent);

        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.transactionService = transactionService;
        this.toasterService = toasterService;
        this.error_messages = {
          'amount': [{
            type: 'max',
            message: 'Amount must be between $1 and $10 000'
          }, {
            type: 'min',
            message: 'Amount must be between $1 and $10 000'
          }],
          'password': [{
            type: 'minlength',
            message: 'Password length must be at least 8'
          }]
        };
        this.form = this.fb.group({
          amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(10000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
          receiverEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]))
        });
      }

      _createClass(AddTransactionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.users$ = this.authService.getAllUsers();
        }
      }, {
        key: "sendMoney",
        value: function sendMoney() {
          var _this30 = this;

          var val = this.form.value;

          if (val.amount && val.receiverEmail && val.password) {
            this.transactionService.sendMoney(val.receiverEmail, val.amount, val.password).subscribe(function () {
              _this30.successMessage = "Money has been sent";

              _this30.toasterService.success(_this30.successMessage, 'Success', {
                positionClass: 'toast-top-center',
                timeOut: 5000
              });

              setTimeout(function () {
                _this30.router.navigateByUrl("/transactions");
              }, 1500);
            }, function (err) {
              _this30.errorMessage = err.error.error;
            });
          }
        }
      }]);

      return AddTransactionComponent;
    }();

    AddTransactionComponent.ɵfac = function AddTransactionComponent_Factory(t) {
      return new (t || AddTransactionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_transaction_service__WEBPACK_IMPORTED_MODULE_4__["TransactionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]));
    };

    AddTransactionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddTransactionComponent,
      selectors: [["app-add-transaction"]],
      decls: 23,
      vars: 7,
      consts: [[1, "naslov"], [4, "ngFor", "ngForOf"], ["autocomplete", "off", "novalidate", "", 1, "form-center", 3, "formGroup"], [1, "form-field"], ["type", "number", "name", "amount", "formControlName", "amount", "required", "", 1, "form-control"], ["id", "receiverEmail", "name", "receiverEmail", "formControlName", "receiverEmail", "required", "", 1, "form-control"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["name", "password", "formControlName", "password", "type", "password", "required", "", 1, "form-control"], [1, "form-buttons"], [1, "btn", "btn-dark", 3, "disabled", "click"], ["class", "text-danger errors", 4, "ngIf"], [1, "text-danger", "errors"], [3, "ngValue"]],
      template: function AddTransactionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New transaction");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddTransactionComponent_ng_container_2_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddTransactionComponent_ng_container_3_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Amount:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Receiver:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddTransactionComponent_option_14_Template, 2, 3, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddTransactionComponent_Template_button_click_21_listener() {
            return ctx.sendMoney();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 5, ctx.users$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9uL2FkZC10cmFuc2FjdGlvbi9hZGQtdHJhbnNhY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddTransactionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-transaction',
          templateUrl: './add-transaction.component.html',
          styleUrls: ['./add-transaction.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_transaction_service__WEBPACK_IMPORTED_MODULE_4__["TransactionService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/transaction/mytransactions/mytransactions.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/transaction/mytransactions/mytransactions.component.ts ***!
    \************************************************************************/

  /*! exports provided: MyTransactionsComponent */

  /***/
  function srcAppTransactionMytransactionsMytransactionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyTransactionsComponent", function () {
      return MyTransactionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_transaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../_services/transaction.service */
    "./src/app/_services/transaction.service.ts");
    /* harmony import */


    var _common_rbac_allow_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../_common/rbac-allow.directive */
    "./src/app/_common/rbac-allow.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MyTransactionsComponent_button_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " New transaction ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyTransactionsComponent_h2_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You currently don't own any transactions..");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyTransactionsComponent_div_6_tr_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Amount");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sender");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Receiver");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var transaction_r27 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", transaction_r27.amount, "$ ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", transaction_r27.sender.email, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", transaction_r27.receiver.email, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", transaction_r27.date, " ");
      }
    }

    function MyTransactionsComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MyTransactionsComponent_div_6_tr_3_Template, 21, 4, "tr", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r25.transactions$));
      }
    }

    var _c0 = function _c0() {
      return ["USER"];
    };

    var MyTransactionsComponent = /*#__PURE__*/function () {
      function MyTransactionsComponent(authService, router, transactionService) {
        _classCallCheck(this, MyTransactionsComponent);

        this.authService = authService;
        this.router = router;
        this.transactionService = transactionService;
        this.user$ = this.authService.user$;
        this.transactions$ = this.transactionService.getTransactions();
      }

      _createClass(MyTransactionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user$ = this.authService.user$;
          this.transactions$ = this.transactionService.getTransactions();
        }
      }]);

      return MyTransactionsComponent;
    }();

    MyTransactionsComponent.ɵfac = function MyTransactionsComponent_Factory(t) {
      return new (t || MyTransactionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_transaction_service__WEBPACK_IMPORTED_MODULE_3__["TransactionService"]));
    };

    MyTransactionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyTransactionsComponent,
      selectors: [["app-mytransactions"]],
      decls: 8,
      vars: 8,
      consts: [[1, "naslov"], ["routerLink", "/transaction", "class", "btn btn-dark btn-center", 4, "rbacAllow"], [4, "ngIf"], ["class", "lessons-list-container v-h-center-block-parent", 4, "ngIf"], ["routerLink", "/transaction", 1, "btn", "btn-dark", "btn-center"], [1, "lessons-list-container", "v-h-center-block-parent"], [1, "table", "lessons-list", "card", "card-strong"], [4, "ngFor", "ngForOf"], [1, "lesson-title"], [1, "lesson-description"]],
      template: function MyTransactionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Transactions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MyTransactionsComponent_button_3_Template, 2, 0, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MyTransactionsComponent_h2_4_Template, 2, 0, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MyTransactionsComponent_div_6_Template, 5, 3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rbacAllow", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, ctx.transactions$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, ctx.transactions$));
        }
      },
      directives: [_common_rbac_allow_directive__WEBPACK_IMPORTED_MODULE_4__["RbacAllowDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9uL215dHJhbnNhY3Rpb25zL215dHJhbnNhY3Rpb25zLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyTransactionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mytransactions',
          templateUrl: './mytransactions.component.html',
          styleUrls: ['./mytransactions.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_transaction_service__WEBPACK_IMPORTED_MODULE_3__["TransactionService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/users/users.component.ts":
  /*!******************************************!*\
    !*** ./src/app/users/users.component.ts ***!
    \******************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _common_user_search_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_common/user-search.validator */
    "./src/app/_common/user-search.validator.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_rbac_allow_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../_common/rbac-allow.directive */
    "./src/app/_common/rbac-allow.directive.ts");

    function UsersComponent_ng_container_4_label_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r133.message, " ");
      }
    }

    function UsersComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UsersComponent_ng_container_4_label_1_Template, 2, 1, "label", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r133 = ctx.$implicit;

        var ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r130.form.get("search").hasError(error_r133.type) && (ctx_r130.form.get("search").dirty || ctx_r130.form.get("search").touched));
      }
    }

    function UsersComponent_div_9_td_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Profile on Secursy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Click here");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r136.profileLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function UsersComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UsersComponent_div_9_td_15_Template, 6, 1, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Money");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, ctx_r131.loggedUser$).firstName, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, ctx_r131.loggedUser$).lastName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 9, ctx_r131.loggedUser$).email, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 11, ctx_r131.loggedUser$).profileLink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 13, ctx_r131.loggedUser$).money, "$ ");
      }
    }

    function UsersComponent_div_13_tr_3_td_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Profile on Secursy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Click here");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r139.profileLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function UsersComponent_div_13_tr_3_td_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Money");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r138.money, "$ ");
      }
    }

    var _c0 = function _c0() {
      return ["ADMIN"];
    };

    function UsersComponent_div_13_tr_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Email address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UsersComponent_div_13_tr_3_td_9_Template, 6, 1, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UsersComponent_div_13_tr_3_td_10_Template, 5, 1, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r138 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", p_r138.firstName, " ", p_r138.lastName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r138.email, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r138.profileLink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rbacAllow", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
      }
    }

    function UsersComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UsersComponent_div_13_tr_3_Template, 11, 6, "tr", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r132.users$));
      }
    }

    var UsersComponent = /*#__PURE__*/function () {
      function UsersComponent(authService, fb, sanitizer, router) {
        _classCallCheck(this, UsersComponent);

        this.authService = authService;
        this.fb = fb;
        this.sanitizer = sanitizer;
        this.router = router;
        this.error_messages = {
          'search': [{
            type: 'maxlength',
            message: 'Input cannot be more than 25 characters long'
          }, {
            type: 'validSearch',
            message: 'Your input is not valid'
          }]
        };
        this.form = this.fb.group({
          search: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_common_user_search_validator__WEBPACK_IMPORTED_MODULE_2__["validSearch"])(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25)]))
        });
      }

      _createClass(UsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this31 = this;

          this.loggedUser$ = this.authService.user$;
          this.loggedUser$.subscribe(function (resp) {
            _this31.profileLink = _this31.sanitizer.bypassSecurityTrustUrl(resp.profileLink);

            if (resp.email == 'admin@mail.hr') {
              _this31.users$ = _this31.authService.getAllUsers();
            }
          });
        }
      }, {
        key: "search",
        value: function search() {
          var val = this.form.value;

          if (val.search) {
            this.users$ = this.authService.getUsers(val.search);
          }
        }
      }]);

      return UsersComponent;
    }();

    UsersComponent.ɵfac = function UsersComponent_Factory(t) {
      return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UsersComponent,
      selectors: [["app-users"]],
      decls: 15,
      vars: 13,
      consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], [1, "naslov"], ["class", "errors", 4, "ngFor", "ngForOf"], [1, "form-center", "user_search", 3, "formGroup"], ["type", "text", "placeholder", "Search..", "formControlName", "search", "required", "", 1, "form-control"], ["type", "submit", 3, "disabled", "click"], [1, "fa", "fa-search"], ["class", "lessons-list-container v-h-center-block-parent", 4, "ngIf"], [1, "errors"], ["class", "text-danger errors", 4, "ngIf"], [1, "text-danger", "errors"], [1, "lessons-list-container", "v-h-center-block-parent"], [1, "table", "lessons-list", "card", "card-strong", "search_card"], [1, "lesson-title", "mess"], ["class", "lesson-title mess", 4, "ngIf"], ["target", "_blank", 3, "href"], [4, "ngFor", "ngForOf"], ["class", "lesson-title mess", 4, "rbacAllow"]],
      template: function UsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UsersComponent_ng_container_4_Template, 2, 1, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_7_listener() {
            return ctx.search();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UsersComponent_div_9_Template, 23, 15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UsersComponent_div_13_Template, 5, 3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.search);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, ctx.users$) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, ctx.loggedUser$) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 9, ctx.loggedUser$).role == "USER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 11, ctx.users$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _common_rbac_allow_directive__WEBPACK_IMPORTED_MODULE_7__["RbacAllowDirective"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-users',
          templateUrl: './users.component.html',
          styleUrls: ['./users.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/welcome/welcome.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/welcome/welcome.component.ts ***!
    \**********************************************/

  /*! exports provided: WelcomeComponent */

  /***/
  function srcAppWelcomeWelcomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
      return WelcomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_rbac_allow_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_common/rbac-allow.directive */
    "./src/app/_common/rbac-allow.directive.ts");

    function WelcomeComponent_h1_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ADMIN");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["ADMIN"];
    };

    var WelcomeComponent = /*#__PURE__*/function () {
      function WelcomeComponent() {
        _classCallCheck(this, WelcomeComponent);
      }

      _createClass(WelcomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WelcomeComponent;
    }();

    WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) {
      return new (t || WelcomeComponent)();
    };

    WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WelcomeComponent,
      selectors: [["app-welcome"]],
      decls: 6,
      vars: 2,
      consts: [[1, "bgimg", "w3-display-container", "w3-animate-opacity", "w3-text-white", "bck"], [1, "w3-display-middle"], [1, "w3-jumbo", "w3-animate-top", 2, "color", "white", "padding-top", "20px"], [1, "w3-border-grey", 2, "margin", "auto", "width", "40%"], ["class", "w3-jumbo w3-animate-top", "style", "color: white; padding-top: 20px;", 4, "rbacAllow"]],
      template: function WelcomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome to PhotographiusScope");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WelcomeComponent_h1_5_Template, 2, 0, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rbacAllow", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_common_rbac_allow_directive__WEBPACK_IMPORTED_MODULE_1__["RbacAllowDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */", ".bgimg[_ngcontent-%COMP%] {\n      background-image:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(../../assets/photos/background1.jpg);\n      min-height: 100%;\n      background-position: center;\n      background-size: cover;\n    }\n\n    .bck[_ngcontent-%COMP%] {\n        height: 667px;\n        background-attachment: fixed;\n    }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-welcome',
          templateUrl: './welcome.component.html',
          styleUrls: ['./welcome.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\mario\Desktop\LOCAL - sigurna\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map