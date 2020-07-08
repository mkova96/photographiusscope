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


    var _photograph_admin_photographs_admin_photographs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../photograph/admin-photographs/admin-photographs.component */
    "./src/app/photograph/admin-photographs/admin-photographs.component.ts");

    var routesConfig = [{
      path: 'users',
      component: _users_users_component__WEBPACK_IMPORTED_MODULE_13__["UsersComponent"]
    }, {
      path: 'transaction/SESSIONID/:session',
      component: _transaction_add_transaction_add_transaction_component__WEBPACK_IMPORTED_MODULE_2__["AddTransactionComponent"]
    },
    /*********************************************** */
    {
      path: 'user/photographs',
      component: _photograph_photographs_photographs_component__WEBPACK_IMPORTED_MODULE_7__["PhotographsComponent"]
    }, {
      path: 'admin/photographs',
      component: _photograph_admin_photographs_admin_photographs_component__WEBPACK_IMPORTED_MODULE_14__["AdminPhotographsComponent"]
    }, {
      path: 'myphotographs/SESSIONID/:session',
      component: _photograph_my_photographs_my_photographs_component__WEBPACK_IMPORTED_MODULE_10__["MyPhotographsComponent"]
    }, {
      path: 'photographs/add',
      component: _photograph_add_photograph_add_photograph_component__WEBPACK_IMPORTED_MODULE_8__["AddPhotographComponent"]
    }, {
      path: 'photographs/:id',
      component: _photograph_edit_photograph_edit_photograph_component__WEBPACK_IMPORTED_MODULE_9__["EditPhotographComponent"]
    },
    /*********************************************** */
    {
      path: 'photographers',
      component: _photographer_photographers_photographers_component__WEBPACK_IMPORTED_MODULE_4__["PhotographersComponent"]
    }, {
      path: 'photographers/add',
      component: _photographer_add_photographer_add_photographer_component__WEBPACK_IMPORTED_MODULE_5__["AddPhotographerComponent"]
    }, {
      path: 'photographers/:id',
      component: _photographer_edit_photographer_edit_photographer_component__WEBPACK_IMPORTED_MODULE_6__["EditPhotographerComponent"]
    },
    /*********************************************** */
    {
      path: 'messages/SESSIONID/:session',
      component: _message_messages_messages_component__WEBPACK_IMPORTED_MODULE_11__["MessagesComponent"]
    }, {
      path: 'messages/add/SESSIONID/:session',
      component: _message_add_message_add_message_component__WEBPACK_IMPORTED_MODULE_12__["AddMessageComponent"]
    },
    /*********************************************** */
    {
      path: 'transactions/:email',
      component: _transaction_mytransactions_mytransactions_component__WEBPACK_IMPORTED_MODULE_3__["MyTransactionsComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]
    }, {
      path: 'signup',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__["SignupComponent"]
    }, {
      path: '',
      redirectTo: '/user/photographs',
      pathMatch: 'full'
    }];
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
      profileLink: ''
    };

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        var _this = this;

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
          return _this.subject.next(user ? user : ANONYMOUS_USER);
        });
      }

      _createClass(AuthService, [{
        key: "signUp",
        value: function signUp(email, password, firstName, lastName, profileLink) {
          var _this2 = this;

          return this.http.post('/api/signup', {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            profileLink: profileLink
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (user) {
            return _this2.subject.next(user);
          }));
        }
      }, {
        key: "login",
        value: function login(email, password) {
          var _this3 = this;

          return this.http.post('/api/login', {
            email: email,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (user) {
            return _this3.subject.next(user);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this4 = this;

          return this.http.post('/api/logout', null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (user) {
            return _this4.subject.next(ANONYMOUS_USER);
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
        value: function getMessages(session) {
          return this.http.get("/api/messages/SESSIONID/".concat(session));
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
        value: function getPhotographs(name, session) {
          var params = {
            param1: name
          };
          return this.http.get("/api/photographs", {
            params: params
          });
        }
      }, {
        key: "getMyPhotographs",
        value: function getMyPhotographs(session) {
          return this.http.get("/api/myphotographs/SESSIONID/".concat(session));
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
        value: function ping(ipaddress) {
          var params = {
            param1: ipaddress
          };
          return this.http.get('/api/ping', {
            params: params
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
      } //http://bank.com/transfer.do?acct=MARIA&amount=100000


      _createClass(TransactionService, [{
        key: "sendMoney",
        value: function sendMoney(receiverEmail, amount) {
          return this.http.get("/api/sendmoney/receiver=".concat(receiverEmail, "&amount=").concat(amount));
        } //api/transactions/mail@rg.hr

      }, {
        key: "getTransactions",
        value: function getTransactions(email) {
          return this.http.get("/api/transactions/".concat(email));
        }
      }, {
        key: "addTransactionSerialize",
        value: function addTransactionSerialize(data) {
          return this.http.post("/api/addtransactionserial", {
            data: data
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])());
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppComponent_ul_1_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r98.loggedUser$).email);
      }
    }

    function AppComponent_ul_1_li_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ul_1_li_15_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101);

          var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r100.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_ul_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ul_1_li_1_Template, 4, 3, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Transactions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Photographs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Photographers");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Users");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_ul_1_li_15_Template, 3, 0, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx_r93.isLoggedIn$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/transactions/", ctx_r93.email, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 5, ctx_r93.isLoggedIn$));
      }
    }

    function AppComponent_ul_2_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r102.loggedUser$).email);
      }
    }

    function AppComponent_ul_2_li_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Photographs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_ul_2_li_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Photographs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/myphotographs/SESSIONID/", ctx_r104.session, "");
      }
    }

    function AppComponent_ul_2_li_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Transactions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/transactions/", ctx_r105.email, "");
      }
    }

    function AppComponent_ul_2_li_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Messages");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/messages/SESSIONID/", ctx_r106.session, "");
      }
    }

    function AppComponent_ul_2_li_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Users");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_ul_2_li_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r108.money, "$");
      }
    }

    function AppComponent_ul_2_li_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ul_2_li_15_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111);

          var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r110.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_ul_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ul_2_li_1_Template, 4, 3, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ul_2_li_3_Template, 3, 0, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_ul_2_li_5_Template, 3, 1, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_ul_2_li_7_Template, 3, 1, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_ul_2_li_9_Template, 3, 1, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_ul_2_li_11_Template, 3, 0, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_ul_2_li_13_Template, 3, 1, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_ul_2_li_15_Template, 3, 0, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 8, ctx_r94.isLoggedIn$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 10, ctx_r94.isLoggedIn$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 12, ctx_r94.isLoggedIn$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 14, ctx_r94.isLoggedIn$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 16, ctx_r94.isLoggedIn$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 18, ctx_r94.isLoggedIn$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 20, ctx_r94.isLoggedIn$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 22, ctx_r94.isLoggedIn$));
      }
    }

    function AppComponent_ul_3_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign Up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_ul_3_li_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_ul_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ul_3_li_1_Template, 3, 0, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ul_3_li_3_Template, 3, 0, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r95.isLoggedOut$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx_r95.isLoggedOut$));
      }
    }

    function AppComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Success");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r96.successMessage, " ");
      }
    }

    function AppComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r97.errorMessage, " ");
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(authService, router) {
        var _this5 = this;

        _classCallCheck(this, AppComponent);

        this.authService = authService;
        this.router = router;
        this.title = 'TestApp';
        this.authService.user$.subscribe(function (a) {
          return _this5.email = a.email;
        });
        this.authService.user$.subscribe(function (a) {
          return _this5.money = a.money;
        });

        if (document.cookie) {
          this.session = document.cookie.split("=")[1].substring(0, document.cookie.split("=")[1].length);
        }
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLoggedIn$ = this.authService.isLoggedIn$;
          this.isLoggedOut$ = this.authService.isLoggedOut$;
          this.loggedUser$ = this.authService.user$;

          if (document.cookie) {
            this.session = document.cookie.split("=")[1].substring(0, document.cookie.split("=")[1].length);
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this6 = this;

          this.authService.logout().subscribe(function () {
            _this6.successMessage = "You have been successfully logged out";
            setTimeout(function () {
              _this6.router.navigateByUrl("/login");
            }, 0);
          }, function (err) {
            _this6.errorMessage = err.error.error;
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 8,
      vars: 5,
      consts: [[1, "l-header"], ["class", "top-menu disable-link-styles", 4, "ngIf"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "top-menu", "disable-link-styles"], [4, "ngIf"], [3, "routerLink"], ["routerLink", "/admin/photographs"], ["routerLink", "/photographers"], ["routerLink", "/users"], [3, "click", 4, "ngIf"], [3, "click"], ["routerLink", "/user/photographs"], ["routerLink", "/signup"], ["routerLink", "/login"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ul_1_Template, 17, 7, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_ul_2_Template, 17, 24, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ul_3_Template, 5, 6, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_5_Template, 7, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_6_Template, 7, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email && ctx.email == "admin@mail.hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email && ctx.email != "admin@mail.hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
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

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
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


    var _photograph_admin_photographs_admin_photographs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./photograph/admin-photographs/admin-photographs.component */
    "./src/app/photograph/admin-photographs/admin-photographs.component.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _services_transaction_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./_services/transaction.service */
    "./src/app/_services/transaction.service.ts");
    /* harmony import */


    var _services_photograph_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./_services/photograph.service */
    "./src/app/_services/photograph.service.ts");
    /* harmony import */


    var _services_message_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./_services/message.service */
    "./src/app/_services/message.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _transaction_add_transaction_add_transaction_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./transaction/add-transaction/add-transaction.component */
    "./src/app/transaction/add-transaction/add-transaction.component.ts");
    /* harmony import */


    var _transaction_mytransactions_mytransactions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./transaction/mytransactions/mytransactions.component */
    "./src/app/transaction/mytransactions/mytransactions.component.ts");
    /* harmony import */


    var _photographer_photographers_photographers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./photographer/photographers/photographers.component */
    "./src/app/photographer/photographers/photographers.component.ts");
    /* harmony import */


    var _services_photographerService__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./_services/photographerService */
    "./src/app/_services/photographerService.ts");
    /* harmony import */


    var _photographer_add_photographer_add_photographer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./photographer/add-photographer/add-photographer.component */
    "./src/app/photographer/add-photographer/add-photographer.component.ts");
    /* harmony import */


    var _photographer_edit_photographer_edit_photographer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./photographer/edit-photographer/edit-photographer.component */
    "./src/app/photographer/edit-photographer/edit-photographer.component.ts");
    /* harmony import */


    var _photograph_photographs_photographs_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./photograph/photographs/photographs.component */
    "./src/app/photograph/photographs/photographs.component.ts");
    /* harmony import */


    var _photograph_add_photograph_add_photograph_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./photograph/add-photograph/add-photograph.component */
    "./src/app/photograph/add-photograph/add-photograph.component.ts");
    /* harmony import */


    var _photograph_edit_photograph_edit_photograph_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./photograph/edit-photograph/edit-photograph.component */
    "./src/app/photograph/edit-photograph/edit-photograph.component.ts");
    /* harmony import */


    var _photograph_my_photographs_my_photographs_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./photograph/my-photographs/my-photographs.component */
    "./src/app/photograph/my-photographs/my-photographs.component.ts");
    /* harmony import */


    var _message_add_message_add_message_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./message/add-message/add-message.component */
    "./src/app/message/add-message/add-message.component.ts");
    /* harmony import */


    var _message_messages_messages_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./message/messages/messages.component */
    "./src/app/message/messages/messages.component.ts");
    /* harmony import */


    var _users_users_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./users/users.component */
    "./src/app/users/users.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _services_transaction_service__WEBPACK_IMPORTED_MODULE_10__["TransactionService"], _services_photographerService__WEBPACK_IMPORTED_MODULE_17__["PhotographerService"], _services_photograph_service__WEBPACK_IMPORTED_MODULE_11__["PhotographService"], _services_message_service__WEBPACK_IMPORTED_MODULE_12__["MessageService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(_common_routes_config__WEBPACK_IMPORTED_MODULE_5__["routesConfig"]), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"], _transaction_add_transaction_add_transaction_component__WEBPACK_IMPORTED_MODULE_14__["AddTransactionComponent"], _transaction_mytransactions_mytransactions_component__WEBPACK_IMPORTED_MODULE_15__["MyTransactionsComponent"], _photographer_photographers_photographers_component__WEBPACK_IMPORTED_MODULE_16__["PhotographersComponent"], _photographer_add_photographer_add_photographer_component__WEBPACK_IMPORTED_MODULE_18__["AddPhotographerComponent"], _photographer_edit_photographer_edit_photographer_component__WEBPACK_IMPORTED_MODULE_19__["EditPhotographerComponent"], _photograph_photographs_photographs_component__WEBPACK_IMPORTED_MODULE_20__["PhotographsComponent"], _photograph_add_photograph_add_photograph_component__WEBPACK_IMPORTED_MODULE_21__["AddPhotographComponent"], _photograph_edit_photograph_edit_photograph_component__WEBPACK_IMPORTED_MODULE_22__["EditPhotographComponent"], _photograph_my_photographs_my_photographs_component__WEBPACK_IMPORTED_MODULE_23__["MyPhotographsComponent"], _message_add_message_add_message_component__WEBPACK_IMPORTED_MODULE_24__["AddMessageComponent"], _message_messages_messages_component__WEBPACK_IMPORTED_MODULE_25__["MessagesComponent"], _users_users_component__WEBPACK_IMPORTED_MODULE_26__["UsersComponent"], _photograph_admin_photographs_admin_photographs_component__WEBPACK_IMPORTED_MODULE_7__["AdminPhotographsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"], _transaction_add_transaction_add_transaction_component__WEBPACK_IMPORTED_MODULE_14__["AddTransactionComponent"], _transaction_mytransactions_mytransactions_component__WEBPACK_IMPORTED_MODULE_15__["MyTransactionsComponent"], _photographer_photographers_photographers_component__WEBPACK_IMPORTED_MODULE_16__["PhotographersComponent"], _photographer_add_photographer_add_photographer_component__WEBPACK_IMPORTED_MODULE_18__["AddPhotographerComponent"], _photographer_edit_photographer_edit_photographer_component__WEBPACK_IMPORTED_MODULE_19__["EditPhotographerComponent"], _photograph_photographs_photographs_component__WEBPACK_IMPORTED_MODULE_20__["PhotographsComponent"], _photograph_add_photograph_add_photograph_component__WEBPACK_IMPORTED_MODULE_21__["AddPhotographComponent"], _photograph_edit_photograph_edit_photograph_component__WEBPACK_IMPORTED_MODULE_22__["EditPhotographComponent"], _photograph_my_photographs_my_photographs_component__WEBPACK_IMPORTED_MODULE_23__["MyPhotographsComponent"], _message_add_message_add_message_component__WEBPACK_IMPORTED_MODULE_24__["AddMessageComponent"], _message_messages_messages_component__WEBPACK_IMPORTED_MODULE_25__["MessagesComponent"], _users_users_component__WEBPACK_IMPORTED_MODULE_26__["UsersComponent"], _photograph_admin_photographs_admin_photographs_component__WEBPACK_IMPORTED_MODULE_7__["AdminPhotographsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(_common_routes_config__WEBPACK_IMPORTED_MODULE_5__["routesConfig"]), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
          providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _services_transaction_service__WEBPACK_IMPORTED_MODULE_10__["TransactionService"], _services_photographerService__WEBPACK_IMPORTED_MODULE_17__["PhotographerService"], _services_photograph_service__WEBPACK_IMPORTED_MODULE_11__["PhotographService"], _services_message_service__WEBPACK_IMPORTED_MODULE_12__["MessageService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Success");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.successMessage, " ");
      }
    }

    function LoginComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(fb, authService, router) {
        _classCallCheck(this, LoginComponent);

        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.refresh = false;
        this.form = this.fb.group({
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.refresh) {
            this.router.navigateByUrl("/user/photographs");
          }
        }
      }, {
        key: "login",
        value: function login() {
          var _this7 = this;

          var val = this.form.value;

          if (val.email && val.password) {
            this.authService.login(val.email, val.password).subscribe(function () {
              _this7.successMessage = "You have been successfully logged in";
              _this7.refresh = true;
              setTimeout(function () {
                location.reload(true);
              }, 1500);
            }, function (err) {
              _this7.errorMessage = err.error.error;
            });
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["login"]],
      decls: 17,
      vars: 4,
      consts: [["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "naslov"], ["autocomplete", "off", "novalidate", "", 1, "form-center", 3, "formGroup"], [1, "form-field"], ["name", "email", "formControlName", "email", "required", "", 1, "form-control"], ["name", "password", "formControlName", "password", "type", "password", "required", "", 1, "form-control"], [1, "form-buttons"], [1, "btn", "btn-dark", 3, "disabled", "click"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginComponent_div_0_Template, 7, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 7, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_15_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */", "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21tb24vZm9ybXMuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css', '../_common/forms.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
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


    var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../_services/message.service */
    "./src/app/_services/message.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_transaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../_services/transaction.service */
    "./src/app/_services/transaction.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AddMessageComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Success");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r75.successMessage, " ");
      }
    }

    function AddMessageComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r76.errorMessage, " ");
      }
    }

    function AddMessageComponent_option_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r78 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", user_r78.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", user_r78.firstName, " ", user_r78.lastName, " ");
      }
    }

    var AddMessageComponent = /*#__PURE__*/function () {
      function AddMessageComponent(fb, messageService, router, transactionService, sanitizer, authService) {
        _classCallCheck(this, AddMessageComponent);

        this.fb = fb;
        this.messageService = messageService;
        this.router = router;
        this.transactionService = transactionService;
        this.sanitizer = sanitizer;
        this.authService = authService;
        this.form = this.fb.group({
          content: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(400)])),
          receiverEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]))
        });
        this.session = this.router.url.split("SESSIONID/")[1].toString();

        if (!this.session) {
          this.session = document.cookie.split("=")[1].substring(0, document.cookie.split("=")[1].length);
        }
      }

      _createClass(AddMessageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.users$ = this.authService.getAllUsers();
          this.session = this.router.url.split("SESSIONID/")[1].toString();

          if (!this.session) {
            this.session = document.cookie.split("=")[1].substring(0, document.cookie.split("=")[1].length);
          }
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          var _this8 = this;

          var val = this.form.value;

          if (val.content && val.receiverEmail) {
            this.messageService.addMessage(val.content, val.receiverEmail).subscribe(function () {
              _this8.successMessage = "Message has been sent";
              setTimeout(function () {
                _this8.router.navigateByUrl("messages/SESSIONID/".concat(_this8.session));
              }, 1500);
            }, function (err) {
              _this8.errorMessage = err.error.error;
            });
          }
        }
      }]);

      return AddMessageComponent;
    }();

    AddMessageComponent.ɵfac = function AddMessageComponent_Factory(t) {
      return new (t || AddMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_transaction_service__WEBPACK_IMPORTED_MODULE_4__["TransactionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]));
    };

    AddMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddMessageComponent,
      selectors: [["app-add-message"]],
      decls: 19,
      vars: 7,
      consts: [["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "naslov"], ["autocomplete", "off", "novalidate", "", 1, "form-center", 3, "formGroup"], [1, "form-field"], ["id", "receiverEmail", "name", "receiverEmail", "formControlName", "receiverEmail", "required", "", 1, "form-control"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "text", "name", "content", "formControlName", "content", "required", "", 1, "form-control"], [1, "form-buttons"], [1, "btn", "btn-dark", 3, "disabled", "click"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [3, "ngValue"]],
      template: function AddMessageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddMessageComponent_div_0_Template, 7, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddMessageComponent_div_1_Template, 7, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "New message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Receiver:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AddMessageComponent_option_10_Template, 2, 3, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Content:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "textarea", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddMessageComponent_Template_button_click_17_listener() {
            return ctx.sendMessage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Send");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 5, ctx.users$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
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
          type: _services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_transaction_service__WEBPACK_IMPORTED_MODULE_4__["TransactionService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
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


    var _services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../_services/message.service */
    "./src/app/_services/message.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../_services/auth.service */
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
        var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesComponent_div_5_tr_3_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var p_r69 = ctx.$implicit;

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r70.openModal(p_r69.sender.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sender");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesComponent_div_5_tr_3_Template_span_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var p_r69 = ctx.$implicit;

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r72.closeModal(p_r69.sender.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Profile link on Secursy: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Click here");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesComponent_div_5_tr_3_Template_a_click_24_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var p_r69 = ctx.$implicit;

          var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r73.openModal(p_r69.receiver.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Receiver");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesComponent_div_5_tr_3_Template_span_click_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var p_r69 = ctx.$implicit;

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r74.closeModal(p_r69.receiver.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h1", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Profile link on Secursy: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Click here");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r69 = ctx.$implicit;

        var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", p_r69.sender.firstName, " ", p_r69.sender.lastName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "myModal", p_r69.sender.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", p_r69.sender.firstName, " ", p_r69.sender.lastName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email: ", p_r69.sender.email, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r68.desanitizeURL(p_r69.sender.profileLink), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", p_r69.receiver.firstName, " ", p_r69.receiver.lastName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "myModal", p_r69.receiver.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", p_r69.receiver.firstName, " ", p_r69.receiver.lastName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email: ", p_r69.receiver.email, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r68.desanitizeURL(p_r69.receiver.profileLink), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r69.date, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", p_r69.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function MessagesComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MessagesComponent_div_5_tr_3_Template, 49, 16, "tr", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r67.messages$));
      }
    }

    var MessagesComponent = /*#__PURE__*/function () {
      function MessagesComponent(messageService, router, authService, sanitizer) {
        _classCallCheck(this, MessagesComponent);

        this.messageService = messageService;
        this.router = router;
        this.authService = authService;
        this.sanitizer = sanitizer;
        this.contents = []; //this.message1=this.sanitizer.bypassSecurityTrustUrl('javascript:document.location="https://localhost:4200/api/addmessage/receiver=zupan@gmail.com&content="+document.cookie;document.body.innerHTML = "";');
        //this.message2=this.sanitizer.bypassSecurityTrustUrl('javascript:document.cookie="SESSIONID=";document.body.innerHTML = "";');
        //this.message3=this.sanitizer.bypassSecurityTrustHtml('<svg onload="var i;for (i=0;i<50;++i){alert(404)}"></svg>');

        this.session = this.router.url.split("SESSIONID/")[1].toString();

        if (!this.session) {
          this.session = document.cookie.split("=")[1].substring(0, document.cookie.split("=")[1].length);
        }

        this.messages$ = this.messageService.getMessages(this.session);
        this.loggedUser$ = this.authService.user$;
      }

      _createClass(MessagesComponent, [{
        key: "desanitizeURL",
        value: function desanitizeURL(text) {
          return this.sanitizer.bypassSecurityTrustUrl(text);
        }
      }, {
        key: "get",
        value: function get() {
          return this.sanitizer.bypassSecurityTrustHtml('<svg onload="alert(1)"></svg>');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.session = this.router.url.split("SESSIONID/")[1].toString();

          if (!this.session) {
            this.session = document.cookie.split("=")[1].substring(0, document.cookie.split("=")[1].length);
          }

          this.messages$ = this.messageService.getMessages(this.session);
          this.loggedUser$ = this.authService.user$;
        }
      }, {
        key: "openModal",
        value: function openModal(num) {
          // Get the modal
          var modal = document.getElementById("myModal" + num); // When the user clicks the button, open the modal 

          modal.style.display = "block";
        }
      }, {
        key: "closeModal",
        value: function closeModal(num) {
          // Get the <span> element that closes the modal
          // When the user clicks on <span> (x), close the modal
          var modal = document.getElementById("myModal" + num);
          modal.style.display = "none"; // When the user clicks anywhere outside of the modal, close it

          window.onclick = function (event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          };
        }
      }]);

      return MessagesComponent;
    }();

    MessagesComponent.ɵfac = function MessagesComponent_Factory(t) {
      return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]));
    };

    MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MessagesComponent,
      selectors: [["app-messages"]],
      decls: 7,
      vars: 4,
      consts: [[1, "naslov"], [1, "btn", "btn-dark", "btn-center", 3, "routerLink"], ["class", "lessons-list-container v-h-center-block-parent", 4, "ngIf"], [1, "lessons-list-container", "v-h-center-block-parent"], [1, "table", "lessons-list", "card", "card-strong"], [4, "ngFor", "ngForOf"], [1, "lesson-title", "messy"], ["id", "myBtn", 3, "click"], [1, "modal", 3, "id"], [1, "modal-content"], [1, "close", 3, "click"], [2, "text-align", "center"], ["target", "_blank", 3, "href"], [1, "msg_date"], [1, "message-content", 3, "innerHtml"]],
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/messages/add/SESSIONID/", ctx.session, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.messages$));
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
          type: _services_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
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


    var _services_photograph_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../_services/photograph.service */
    "./src/app/_services/photograph.service.ts");
    /* harmony import */


    var _services_photographerService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../_services/photographerService */
    "./src/app/_services/photographerService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AddPhotographComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Success");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r44.successMessage, " ");
      }
    }

    function AddPhotographComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r45.errorMessage, " ");
      }
    }

    function AddPhotographComponent_option_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r47 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", p_r47.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", p_r47.firstName, " ", p_r47.lastName, " ");
      }
    }

    var AddPhotographComponent = /*#__PURE__*/function () {
      function AddPhotographComponent(fb, photographService, photographerService, router) {
        _classCallCheck(this, AddPhotographComponent);

        this.fb = fb;
        this.photographService = photographService;
        this.photographerService = photographerService;
        this.router = router;
        this.form = this.fb.group({
          year: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
          price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
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
          var _this9 = this;

          var val = this.form.value;

          if (val.name && val.photographerId && val.year && val.price) {
            this.photographService.addPhotograph(val.name, val.photographerId, val.year, val.price).subscribe(function () {
              _this9.successMessage = "Photograph has been created";
              setTimeout(function () {
                _this9.router.navigateByUrl("admin/photographs");
              }, 1500);
            }, function (err) {
              _this9.errorMessage = err.error.error;
            });
          }
        }
      }]);

      return AddPhotographComponent;
    }();

    AddPhotographComponent.ɵfac = function AddPhotographComponent_Factory(t) {
      return new (t || AddPhotographComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_photograph_service__WEBPACK_IMPORTED_MODULE_2__["PhotographService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_photographerService__WEBPACK_IMPORTED_MODULE_3__["PhotographerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    AddPhotographComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddPhotographComponent,
      selectors: [["app-add-photograph"]],
      decls: 27,
      vars: 7,
      consts: [["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "naslov"], ["autocomplete", "off", "novalidate", "", 1, "form-center", 3, "formGroup"], [1, "form-group"], ["formControlName", "name", "type", "text", "required", "", 1, "form-control"], [1, "form-field"], ["id", "photographerId", "name", "photographerId", "formControlName", "photographerId", "required", "", 1, "form-control"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "number", "name", "year", "formControlName", "year", "required", "", 1, "form-control"], ["type", "number", "name", "price", "formControlName", "price", "required", "", 1, "form-control"], [1, "form-buttons"], [1, "btn", "btn-dark", 3, "disabled", "click"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [3, "ngValue"]],
      template: function AddPhotographComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddPhotographComponent_div_0_Template, 7, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddPhotographComponent_div_1_Template, 7, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "New photograph");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 5, ctx.photographers$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
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
          type: _services_photograph_service__WEBPACK_IMPORTED_MODULE_2__["PhotographService"]
        }, {
          type: _services_photographerService__WEBPACK_IMPORTED_MODULE_3__["PhotographerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/photograph/admin-photographs/admin-photographs.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/photograph/admin-photographs/admin-photographs.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: AdminPhotographsComponent */

  /***/
  function srcAppPhotographAdminPhotographsAdminPhotographsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminPhotographsComponent", function () {
      return AdminPhotographsComponent;
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


    var _services_photograph_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../_services/photograph.service */
    "./src/app/_services/photograph.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AdminPhotographsComponent_div_0_tr_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminPhotographsComponent_div_0_tr_7_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

          var p_r90 = ctx.$implicit;

          var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r91.deletePhotograph(p_r90.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r90 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r90.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](", ", p_r90.year, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", p_r90.photographer.firstName, " ", p_r90.photographer.lastName, " (", p_r90.photographer.age, ") ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r90.price, "$ ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", p_r90.photoLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/photos/", p_r90.photoLink, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/photographs/", p_r90.id, "");
      }
    }

    function AdminPhotographsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Admin Panel - Photographs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " New photograph ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminPhotographsComponent_div_0_tr_7_Template, 16, 9, "tr", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 1, ctx_r88.photos$));
      }
    }

    var AdminPhotographsComponent = /*#__PURE__*/function () {
      function AdminPhotographsComponent(photographService, router, authService, fb) {
        _classCallCheck(this, AdminPhotographsComponent);

        this.photographService = photographService;
        this.router = router;
        this.authService = authService;
        this.fb = fb;
        this.form = this.fb.group({
          ipaddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]))
        });
        this.form2 = this.fb.group({
          search: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
      }

      _createClass(AdminPhotographsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.photos$ = this.photographService.getPhotographs("", this.session);
          this.loggedUser$ = this.authService.user$;
        }
      }, {
        key: "deletePhotograph",
        value: function deletePhotograph(id) {
          var _this10 = this;

          this.photographService.deletePhotograph(id).subscribe(function () {
            _this10.successMessage = "Photograph has been deleted";

            if (_this10.photographService.getPhotographs("", _this10.session) == null) {
              _this10.photos$ = null;
            } else {
              _this10.photos$ = _this10.photographService.getPhotographs("", _this10.session);
            }
          }, function (err) {
            _this10.errorMessage = err.error.error;
          });
        }
      }]);

      return AdminPhotographsComponent;
    }();

    AdminPhotographsComponent.ɵfac = function AdminPhotographsComponent_Factory(t) {
      return new (t || AdminPhotographsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_photograph_service__WEBPACK_IMPORTED_MODULE_2__["PhotographService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    AdminPhotographsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminPhotographsComponent,
      selectors: [["app-admin-photographs"]],
      decls: 2,
      vars: 3,
      consts: [["class", "lessons-list-container v-h-center-block-parent", 4, "ngIf"], [1, "lessons-list-container", "v-h-center-block-parent"], [1, "naslov"], ["routerLink", "/photographs/add", 1, "btn", "btn-dark", "btn-center"], [1, "table", "lessons-list", "card", "card-strong"], [4, "ngFor", "ngForOf"], [1, "title"], [1, "photo"], ["target", "_blank", 3, "href"], ["alt", "photo", "height", "130", "width", "160", 3, "src"], ["type", "button", 1, "btn", "btn-warning", 3, "routerLink"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]],
      template: function AdminPhotographsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdminPhotographsComponent_div_0_Template, 9, 3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.photos$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvZ3JhcGgvYWRtaW4tcGhvdG9ncmFwaHMvYWRtaW4tcGhvdG9ncmFwaHMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminPhotographsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-photographs',
          templateUrl: './admin-photographs.component.html',
          styleUrls: ['./admin-photographs.component.css']
        }]
      }], function () {
        return [{
          type: _services_photograph_service__WEBPACK_IMPORTED_MODULE_2__["PhotographService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
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


    var _services_photographerService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../_services/photographerService */
    "./src/app/_services/photographerService.ts");
    /* harmony import */


    var _services_photograph_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../_services/photograph.service */
    "./src/app/_services/photograph.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EditPhotographComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Success");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r48.successMessage, " ");
      }
    }

    function EditPhotographComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r49.errorMessage, " ");
      }
    }

    function EditPhotographComponent_form_4_option_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r52 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", p_r52.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", p_r52.firstName, " ", p_r52.lastName, " ");
      }
    }

    function EditPhotographComponent_form_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditPhotographComponent_form_4_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r53.photograph.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Photographer:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditPhotographComponent_form_4_Template_select_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r55.photograph.photographerId = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EditPhotographComponent_form_4_option_10_Template, 2, 3, "option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Year:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditPhotographComponent_form_4_Template_input_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r56.photograph.year = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Price:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditPhotographComponent_form_4_Template_input_ngModelChange_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r57.photograph.price = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPhotographComponent_form_4_Template_button_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r58.editPhotograph();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r50.form);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r50.photograph.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r50.photograph.photographerId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, ctx_r50.photographers$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r50.photograph.year);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r50.photograph.price);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r50.form.valid);
      }
    }

    var EditPhotographComponent = /*#__PURE__*/function () {
      function EditPhotographComponent(route, fb, photographerService, photographService, router) {
        _classCallCheck(this, EditPhotographComponent);

        this.route = route;
        this.fb = fb;
        this.photographerService = photographerService;
        this.photographService = photographService;
        this.router = router;
        this.form = this.fb.group({
          year: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
          price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
          photographerId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]))
        });
      }

      _createClass(EditPhotographComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) {
            return params.get("id");
          })).subscribe(function (id) {
            _this11.photographId = parseInt(id, 10);

            _this11.load();

            _this11.photographers$ = _this11.photographerService.getPhotographers();
          });
        }
      }, {
        key: "load",
        value: function load() {
          var _this12 = this;

          var onlyTasks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this.photographService.getPhotograph(this.photographId).subscribe(function (a) {
            _this12.photograph = {
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
          var _this13 = this;

          var val = this.form.value;

          if (val.name && val.photographerId && val.year && val.price) {
            this.photographService.editPhotograph(this.photographId, val.name, val.photographerId, val.year, val.price).subscribe(function () {
              _this13.successMessage = "Photograph has been edited";
              setTimeout(function () {
                _this13.router.navigateByUrl("admin/photographs");
              }, 1500);
            }, function (err) {
              _this13.errorMessage = err.error.error;
            });
          }
        }
      }]);

      return EditPhotographComponent;
    }();

    EditPhotographComponent.ɵfac = function EditPhotographComponent_Factory(t) {
      return new (t || EditPhotographComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_photographerService__WEBPACK_IMPORTED_MODULE_4__["PhotographerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_photograph_service__WEBPACK_IMPORTED_MODULE_5__["PhotographService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    EditPhotographComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditPhotographComponent,
      selectors: [["app-edit-photograph"]],
      decls: 5,
      vars: 3,
      consts: [["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "naslov"], ["autocomplete", "off", "novalidate", "", "class", "form-center", 3, "formGroup", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], ["autocomplete", "off", "novalidate", "", 1, "form-center", 3, "formGroup"], [1, "form-group"], ["formControlName", "name", "type", "text", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-field"], ["id", "photographerId", "name", "photographerId", "formControlName", "photographerId", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "number", "name", "year", "formControlName", "year", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "price", "formControlName", "price", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-buttons"], [1, "btn", "btn-dark", 3, "disabled", "click"], [3, "ngValue"]],
      template: function EditPhotographComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditPhotographComponent_div_0_Template, 7, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditPhotographComponent_div_1_Template, 7, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit photograph");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditPhotographComponent_form_4_Template, 23, 9, "form", 3);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.photograph);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
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
          type: _services_photographerService__WEBPACK_IMPORTED_MODULE_4__["PhotographerService"]
        }, {
          type: _services_photograph_service__WEBPACK_IMPORTED_MODULE_5__["PhotographService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
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


    var _services_photograph_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../_services/photograph.service */
    "./src/app/_services/photograph.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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
        var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyPhotographsComponent_div_2_tr_6_button_10_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66);

          var p_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r64.sellPhotograph(p_r62.id);
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
        var p_r62 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", p_r62.name, ", ", p_r62.year, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", p_r62.photographer.firstName, " ", p_r62.photographer.lastName, " (", p_r62.photographer.age, ") ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r62.price, "$ ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", p_r62.photoLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/photos/", p_r62.photoLink, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r62.userId);
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
        var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 1, ctx_r60.photos$));
      }
    }

    var MyPhotographsComponent = /*#__PURE__*/function () {
      function MyPhotographsComponent(photographService, authService, router) {
        _classCallCheck(this, MyPhotographsComponent);

        this.photographService = photographService;
        this.authService = authService;
        this.router = router;
        this.session = this.router.url.split("SESSIONID/")[1].toString();

        if (!this.session) {
          this.session = document.cookie.split("=")[1].substring(0, document.cookie.split("=")[1].length);
        }
      }

      _createClass(MyPhotographsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.photos$ = this.photographService.getMyPhotographs(this.session);
          this.session = this.router.url.split("SESSIONID/")[1].toString();

          if (!this.session) {
            this.session = document.cookie.split("=")[1].substring(0, document.cookie.split("=")[1].length);
          }
        }
      }, {
        key: "sellPhotograph",
        value: function sellPhotograph(id) {
          var _this14 = this;

          this.photographService.sellPhotograph(id).subscribe(function () {
            _this14.successMessage = "Photograph has been sold";
            location.reload(true);

            if (_this14.photographService.getMyPhotographs(_this14.session) == null) {
              _this14.photos$ = null;
            } else {
              _this14.photos$ = _this14.photographService.getMyPhotographs(_this14.session);
            }
          }, function (err) {
            _this14.errorMessage = err.error.error;
          });
        }
      }]);

      return MyPhotographsComponent;
    }();

    MyPhotographsComponent.ɵfac = function MyPhotographsComponent_Factory(t) {
      return new (t || MyPhotographsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_photograph_service__WEBPACK_IMPORTED_MODULE_1__["PhotographService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
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
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
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
          type: _services_photograph_service__WEBPACK_IMPORTED_MODULE_1__["PhotographService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
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


    var _services_photograph_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../_services/photograph.service */
    "./src/app/_services/photograph.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PhotographsComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Success");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r30.successMessage, " ");
      }
    }

    function PhotographsComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r31.errorMessage, " ");
      }
    }

    function PhotographsComponent_div_4_tr_5_button_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotographsComponent_div_4_tr_5_button_12_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var p_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r38.buyPhotograph(p_r35.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Buy ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PhotographsComponent_div_4_tr_5_button_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotographsComponent_div_4_tr_5_button_13_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var p_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r41.sellPhotograph(p_r35.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sell ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PhotographsComponent_div_4_tr_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PhotographsComponent_div_4_tr_5_button_12_Template, 2, 0, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PhotographsComponent_div_4_tr_5_button_13_Template, 2, 0, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r35 = ctx.$implicit;

        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r35.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](", ", p_r35.year, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", p_r35.photographer.firstName, " ", p_r35.photographer.lastName, " (", p_r35.photographer.age, ") ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r35.price, "$ ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", p_r35.photoLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/photos/", p_r35.photoLink, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !p_r35.userId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r35.userId === _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 10, ctx_r34.loggedUser$).id);
      }
    }

    function PhotographsComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Photographs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PhotographsComponent_div_4_tr_5_Template, 15, 12, "tr", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, ctx_r32.photos$));
      }
    }

    function PhotographsComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r33.response.response, " ");
      }
    }

    var PhotographsComponent = /*#__PURE__*/function () {
      function PhotographsComponent(photographService, router, authService, fb) {
        _classCallCheck(this, PhotographsComponent);

        this.photographService = photographService;
        this.router = router;
        this.authService = authService;
        this.fb = fb;
        this.form = this.fb.group({
          ipaddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]))
        });
      }

      _createClass(PhotographsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.photos$ = this.photographService.getPhotographs("", this.session);
          this.loggedUser$ = this.authService.user$;
        }
      }, {
        key: "deletePhotograph",
        value: function deletePhotograph(id) {
          var _this15 = this;

          this.photographService.deletePhotograph(id).subscribe(function () {
            if (_this15.photographService.getPhotographs("", _this15.session) == null) {
              _this15.photos$ = null;
            } else {
              _this15.photos$ = _this15.photographService.getPhotographs("", _this15.session);
            }
          }, function (err) {
            _this15.errorMessage = err.error.error;
          });
        }
      }, {
        key: "buyPhotograph",
        value: function buyPhotograph(id) {
          var _this16 = this;

          this.photographService.buyPhotograph(id).subscribe(function () {
            _this16.successMessage = "Photograph has been bought";
            setTimeout(function () {
              location.reload(true);
            }, 1500);
          }, function (err) {
            _this16.errorMessage = err.error.error;
          });
        }
      }, {
        key: "sellPhotograph",
        value: function sellPhotograph(id) {
          var _this17 = this;

          this.photographService.sellPhotograph(id).subscribe(function () {
            _this17.successMessage = "Photograph has been sold";
            setTimeout(function () {
              location.reload(true);
            }, 1500);
          }, function (err) {
            _this17.errorMessage = err.error.error;
          });
        }
      }, {
        key: "ping",
        value: function ping() {
          var _this18 = this;

          var val = this.form.value;

          if (val.ipaddress) {
            this.photographService.ping(val.ipaddress).subscribe(function (resp) {
              _this18.response = resp;
            });
          }
        }
      }]);

      return PhotographsComponent;
    }();

    PhotographsComponent.ɵfac = function PhotographsComponent_Factory(t) {
      return new (t || PhotographsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_photograph_service__WEBPACK_IMPORTED_MODULE_2__["PhotographService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    PhotographsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PhotographsComponent,
      selectors: [["app-photographs"]],
      decls: 19,
      vars: 8,
      consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "lessons-list-container v-h-center-block-parent", 4, "ngIf"], [1, "ipsearch"], ["novalidate", "", 3, "formGroup"], [1, "form-group"], ["formControlName", "ipaddress", "type", "text", "placeholder", "IPv4 address", "required", "", 1, "form-control", "search"], [1, "form-buttons"], [1, "btn", "btn-dark", "src-btn", 3, "disabled", "click"], ["class", "ipresponse", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "lessons-list-container", "v-h-center-block-parent"], [1, "naslov"], [1, "table", "lessons-list", "card", "card-strong"], [4, "ngFor", "ngForOf"], [1, "title"], [1, "photo"], ["target", "_blank", 3, "href"], ["alt", "photo", "height", "130", "width", "160", 3, "src"], ["type", "button", "class", "btn btn-light", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-dark", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-light", 3, "click"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], [1, "ipresponse"]],
      template: function PhotographsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PhotographsComponent_div_2_Template, 7, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PhotographsComponent_div_3_Template, 7, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PhotographsComponent_div_4_Template, 7, 3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Bored of photographs?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ping an address to waste time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotographsComponent_Template_button_click_16_listener() {
            return ctx.ping();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Ping it!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PhotographsComponent_div_18_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, ctx.photos$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.response);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
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
          type: _services_photograph_service__WEBPACK_IMPORTED_MODULE_2__["PhotographService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AddPhotographerComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Success");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r20.successMessage, " ");
      }
    }

    function AddPhotographerComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r21.errorMessage, " ");
      }
    }

    var AddPhotographerComponent = /*#__PURE__*/function () {
      function AddPhotographerComponent(fb, photographerService, router) {
        _classCallCheck(this, AddPhotographerComponent);

        this.fb = fb;
        this.photographerService = photographerService;
        this.router = router;
        this.form = this.fb.group({
          firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
          lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
          age: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]))
        });
      }

      _createClass(AddPhotographerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "createPhotographer",
        value: function createPhotographer() {
          var _this19 = this;

          var val = this.form.value;

          if (val.firstName && val.lastName && val.age) {
            this.photographerService.addPhotographer(val.firstName, val.lastName, val.age).subscribe(function () {
              _this19.successMessage = "Photographer has been created";
              setTimeout(function () {
                _this19.router.navigateByUrl("photographers");
              }, 1500);
            }, function (err) {
              _this19.errorMessage = err.error.error;
            });
          }
        }
      }]);

      return AddPhotographerComponent;
    }();

    AddPhotographerComponent.ɵfac = function AddPhotographerComponent_Factory(t) {
      return new (t || AddPhotographerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_photographerService__WEBPACK_IMPORTED_MODULE_2__["PhotographerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    AddPhotographerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddPhotographerComponent,
      selectors: [["app-add-photographer"]],
      decls: 21,
      vars: 4,
      consts: [["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "naslov"], ["autocomplete", "off", "novalidate", "", 1, "form-center", 3, "formGroup"], [1, "form-group"], ["formControlName", "firstName", "type", "text", "required", "", 1, "form-control"], [1, "form-field"], ["formControlName", "lastName", "type", "text", "required", "", 1, "form-control"], ["type", "number", "name", "age", "formControlName", "age", "required", "", 1, "form-control"], [1, "form-buttons"], [1, "btn", "btn-dark", 3, "disabled", "click"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"]],
      template: function AddPhotographerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddPhotographerComponent_div_0_Template, 7, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddPhotographerComponent_div_1_Template, 7, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "new Photographer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "First Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Last Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Age");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPhotographerComponent_Template_button_click_19_listener() {
            return ctx.createPhotographer();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]],
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


    var _services_photographerService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../_services/photographerService */
    "./src/app/_services/photographerService.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EditPhotographerComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Success");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r22.successMessage, " ");
      }
    }

    function EditPhotographerComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r23.errorMessage, " ");
      }
    }

    function EditPhotographerComponent_form_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "First Name:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditPhotographerComponent_form_4_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.photographer.firstName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Last Name:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditPhotographerComponent_form_4_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.photographer.lastName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Age");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditPhotographerComponent_form_4_Template_input_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.photographer.age = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPhotographerComponent_form_4_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.editPhotographer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r24.form);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r24.photographer.firstName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r24.photographer.lastName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r24.photographer.age);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r24.form.valid);
      }
    }

    var EditPhotographerComponent = /*#__PURE__*/function () {
      function EditPhotographerComponent(route, fb, photographerService, router) {
        _classCallCheck(this, EditPhotographerComponent);

        this.route = route;
        this.fb = fb;
        this.photographerService = photographerService;
        this.router = router;
        this.form = this.fb.group({
          firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
          lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
          age: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]))
        });
      }

      _createClass(EditPhotographerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) {
            return params.get("id");
          })).subscribe(function (id) {
            _this20.photographerId = parseInt(id, 10);

            _this20.load();
          });
        }
      }, {
        key: "load",
        value: function load() {
          var _this21 = this;

          var onlyTasks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this.photographerService.getPhotographer(this.photographerId).subscribe(function (a) {
            _this21.photographer = {
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
          var _this22 = this;

          var val = this.form.value;

          if (val.firstName && val.lastName && val.age) {
            this.photographerService.editPhotographer(this.photographerId, val.firstName, val.lastName, val.age).subscribe(function () {
              _this22.successMessage = "Photographer has been edited";
              setTimeout(function () {
                _this22.router.navigateByUrl("photographers");
              }, 1500);
            }, function (err) {
              _this22.errorMessage = err.error.error;
            });
          }
        }
      }]);

      return EditPhotographerComponent;
    }();

    EditPhotographerComponent.ɵfac = function EditPhotographerComponent_Factory(t) {
      return new (t || EditPhotographerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_photographerService__WEBPACK_IMPORTED_MODULE_4__["PhotographerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    EditPhotographerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditPhotographerComponent,
      selectors: [["app-edit-photographer"]],
      decls: 5,
      vars: 3,
      consts: [["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "naslov"], ["autocomplete", "off", "novalidate", "", "class", "form-center", 3, "formGroup", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], ["autocomplete", "off", "novalidate", "", 1, "form-center", 3, "formGroup"], [1, "form-group"], ["formControlName", "firstName", "type", "text", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-field"], ["formControlName", "lastName", "type", "text", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "age", "formControlName", "age", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-buttons"], [1, "btn", "btn-dark", 3, "disabled", "click"]],
      template: function EditPhotographerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditPhotographerComponent_div_0_Template, 7, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditPhotographerComponent_div_1_Template, 7, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit photographer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditPhotographerComponent_form_4_Template, 17, 5, "form", 3);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.photographer);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]],
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
          type: _services_photographerService__WEBPACK_IMPORTED_MODULE_4__["PhotographerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PhotographersComponent_div_0_tr_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var p_r17 = ctx.$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r18.deletePhotographer(p_r17.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", p_r17.firstName, " ", p_r17.lastName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r17.age, " years old ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/photographers/", p_r17.id, "");
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
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 1, ctx_r15.photographers$));
      }
    }

    var PhotographersComponent = /*#__PURE__*/function () {
      function PhotographersComponent(photographerService, router) {
        _classCallCheck(this, PhotographersComponent);

        this.photographerService = photographerService;
        this.router = router;
      }

      _createClass(PhotographersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.photographers$ = this.photographerService.getPhotographers();
        }
      }, {
        key: "deletePhotographer",
        value: function deletePhotographer(id) {
          var _this23 = this;

          this.photographerService.deletePhotographer(id).subscribe(function () {
            _this23.successMessage = "Photographer has been deleted";
            setTimeout(function () {
              _this23.router.navigateByUrl("photographers");
            }, 1500);
          }, function (err) {
            _this23.errorMessage = err.error.error;
          });
          this.photographers$ = this.photographerService.getPhotographers();
        }
      }]);

      return PhotographersComponent;
    }();

    PhotographersComponent.ɵfac = function PhotographersComponent_Factory(t) {
      return new (t || PhotographersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_photographerService__WEBPACK_IMPORTED_MODULE_1__["PhotographerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
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
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SignupComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Success");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.successMessage, " ");
      }
    }

    function SignupComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.errorMessage, " ");
      }
    }

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(formBuilder, authService, router, sanitizer) {
        _classCallCheck(this, SignupComponent);

        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.refresh = false;
        this.form = this.formBuilder.group({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
          confirmpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
          firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
          lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
          profileLink: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([]))
        });
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.refresh) {
            this.router.navigateByUrl("/user/photographs");
          }
        }
      }, {
        key: "signUp",
        value: function signUp() {
          var _this24 = this;

          var val = this.form.value;

          if (val.email && val.firstName && val.lastName && val.password && val.password === val.confirmpassword) {
            this.authService.signUp(val.email, val.password, val.firstName, val.lastName, val.profileLink).subscribe(function () {
              _this24.successMessage = "You have successfully signed in";
              _this24.refresh = true;
              setTimeout(function () {
                location.reload(true);
              }, 1500);
            }, function (err) {
              _this24.errorMessage = err.error.error;
            });
          }
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["signup"]],
      decls: 33,
      vars: 4,
      consts: [["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "naslov"], ["autocomplete", "on", 1, "form-center", 3, "formGroup"], [1, "form-group"], ["formControlName", "firstName", "type", "text", "required", "", "autocomplete", "on", 1, "form-control"], ["formControlName", "lastName", "type", "text", "required", "", "autocomplete", "on", 1, "form-control"], ["formControlName", "profileLink", "type", "url", "autocomplete", "on", "placeholder", "Optional..", 1, "form-control"], ["formControlName", "email", "type", "email", "required", "", "autocomplete", "on", 1, "form-control"], ["formControlName", "password", "type", "password", "required", "", 1, "form-control"], ["formControlName", "confirmpassword", "type", "password", "required", "", 1, "form-control"], [1, "form-buttons"], [1, "btn", "btn-dark", 3, "disabled", "click"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SignupComponent_div_0_Template, 7, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_1_Template, 7, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Profile link on Secursy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Confirm Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_31_listener() {
            return ctx.signUp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */", "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21tb24vZm9ybXMuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.css', '../_common/forms.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AddTransactionComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Success");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.successMessage, " ");
      }
    }

    function AddTransactionComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.errorMessage, " ");
      }
    }

    function AddTransactionComponent_option_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", user_r8.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", user_r8.firstName, " ", user_r8.lastName, " ");
      }
    }

    function AddTransactionComponent_div_25_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "File is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddTransactionComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddTransactionComponent_div_25_div_1_Template, 2, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.f.file.errors.required);
      }
    }

    var AddTransactionComponent = /*#__PURE__*/function () {
      function AddTransactionComponent(fb, authService, router, transactionService) {
        var _this25 = this;

        _classCallCheck(this, AddTransactionComponent);

        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.transactionService = transactionService;
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          file: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          fileSource: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        this.fileExample = "{\n    \"receiver\": \"markomail.hr\",\n    \"amount\": 200\n  }";
        this.form = this.fb.group({
          amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
          receiverEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]))
        });
        this.authService.user$.subscribe(function (a) {
          return _this25.email = a.email;
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
          var _this26 = this;

          var val = this.form.value;

          if (val.amount && val.receiverEmail) {
            this.transactionService.sendMoney(val.receiverEmail, val.amount).subscribe(function () {
              _this26.successMessage = "Money has been sent";
              setTimeout(function () {
                _this26.router.navigateByUrl("/transactions/".concat(_this26.email));
              }, 1500);
            }, function (err) {
              _this26.errorMessage = err.error.error;
            });
          }
        }
      }, {
        key: "onFileChange",
        value: function onFileChange(event) {
          this.file = event.target.files[0];
        }
      }, {
        key: "uploadFile",
        value: function uploadFile() {
          var _this27 = this;

          if (!this.file) return;
          var reader = new FileReader();

          reader.onload = function (evt) {
            var data = evt.target.result;

            _this27.transactionService.addTransactionSerialize(data).subscribe(function () {
              _this27.successMessage = "Money has been sent";
              setTimeout(function () {
                _this27.router.navigateByUrl("/transactions/".concat(_this27.email));
              }, 1500);
            }, function (err) {
              _this27.errorMessage = err.error.error;
            });
          };

          reader.readAsText(this.file);
        }
      }, {
        key: "f",
        get: function get() {
          return this.myForm.controls;
        }
      }]);

      return AddTransactionComponent;
    }();

    AddTransactionComponent.ɵfac = function AddTransactionComponent_Factory(t) {
      return new (t || AddTransactionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_transaction_service__WEBPACK_IMPORTED_MODULE_4__["TransactionService"]));
    };

    AddTransactionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddTransactionComponent,
      selectors: [["app-add-transaction"]],
      decls: 35,
      vars: 10,
      consts: [["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "naslov"], ["autocomplete", "on", "novalidate", "", 1, "form-center", 3, "formGroup"], [1, "form-field"], ["type", "number", "name", "amount", "formControlName", "amount", "required", "", 1, "form-control"], ["id", "receiverEmail", "name", "receiverEmail", "formControlName", "receiverEmail", "required", "", 1, "form-control"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "form-buttons"], [1, "btn", "btn-dark", 3, "disabled", "click"], [1, "form-center"], [1, "form-center", 3, "formGroup"], [1, "form-group"], ["formControlName", "file", "id", "file", "type", "file", "required", "", 1, "form-control", 3, "change"], ["class", "alert alert-danger", 4, "ngIf"], [1, "btn", "btn-dark", 3, "click"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [3, "ngValue"], [1, "alert", "alert-danger"], [4, "ngIf"]],
      template: function AddTransactionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddTransactionComponent_div_0_Template, 7, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddTransactionComponent_div_1_Template, 7, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "New transaction");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Amount:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Receiver:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddTransactionComponent_option_14_Template, 2, 3, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddTransactionComponent_Template_button_click_17_listener() {
            return ctx.sendMoney();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Send money");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Or just upload your file with proper data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddTransactionComponent_Template_input_change_24_listener($event) {
            return ctx.onFileChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AddTransactionComponent_div_25_Template, 2, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddTransactionComponent_Template_button_click_27_listener() {
            return ctx.uploadFile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "File example:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 8, ctx.users$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.myForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.file.touched && ctx.f.file.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fileExample);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MyTransactionsComponent_button_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " New transaction ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/transaction/SESSIONID/", ctx_r10.session, "");
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
        var transaction_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", transaction_r14.amount, "$ ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", transaction_r14.sender.email, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", transaction_r14.receiver.email, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", transaction_r14.date, " ");
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
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r12.transactions$));
      }
    }

    var MyTransactionsComponent = /*#__PURE__*/function () {
      function MyTransactionsComponent(authService, router, transactionService) {
        var _this28 = this;

        _classCallCheck(this, MyTransactionsComponent);

        this.authService = authService;
        this.router = router;
        this.transactionService = transactionService;
        this.email = this.router.url.split("transactions/")[1].toString();

        if (!this.email) {
          this.authService.user$.subscribe(function (a) {
            return _this28.email = a.email;
          });
        }

        this.user$ = this.authService.user$;
        this.transactions$ = this.transactionService.getTransactions(this.email);

        if (document.cookie) {
          this.session = document.cookie.split("=")[1].substring(0, document.cookie.split("=")[1].length);
        }
      }

      _createClass(MyTransactionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          this.user$ = this.authService.user$;
          this.email = this.router.url.split("transactions/")[1].toString();

          if (!this.email) {
            this.authService.user$.subscribe(function (a) {
              return _this29.email = a.email;
            });
          }

          if (document.cookie) {
            this.session = document.cookie.split("=")[1].substring(0, document.cookie.split("=")[1].length);
          }
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
      vars: 7,
      consts: [[1, "naslov"], ["class", "btn btn-dark btn-center", 3, "routerLink", 4, "ngIf"], [4, "ngIf"], ["class", "lessons-list-container v-h-center-block-parent", 4, "ngIf"], [1, "btn", "btn-dark", "btn-center", 3, "routerLink"], [1, "lessons-list-container", "v-h-center-block-parent"], [1, "table", "lessons-list", "card", "card-strong"], [4, "ngFor", "ngForOf"], [1, "lesson-title"], [1, "lesson-description"]],
      template: function MyTransactionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Transactions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MyTransactionsComponent_button_3_Template, 2, 1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MyTransactionsComponent_h2_4_Template, 2, 0, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MyTransactionsComponent_div_6_Template, 5, 3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email && ctx.email != "admin@mail.hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, ctx.transactions$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, ctx.transactions$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UsersComponent_div_10_td_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Profile on Secursy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Click here");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r81.profileLink1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function UsersComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UsersComponent_div_10_td_15_Template, 6, 1, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 10);

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
        var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, ctx_r79.loggedUser$).firstName, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, ctx_r79.loggedUser$).lastName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 9, ctx_r79.loggedUser$).email, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 11, ctx_r79.loggedUser$).profileLink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 13, ctx_r79.loggedUser$).money, "$ ");
      }
    }

    function UsersComponent_div_14_tr_3_td_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Profile on Secursy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Click here");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r84.unsanitize(p_r83.profileLink), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function UsersComponent_div_14_tr_3_td_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Money");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r83.money, "$ ");
      }
    }

    function UsersComponent_div_14_tr_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Email address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UsersComponent_div_14_tr_3_td_9_Template, 6, 1, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UsersComponent_div_14_tr_3_td_10_Template, 5, 1, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r83 = ctx.$implicit;

        var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", p_r83.firstName, " ", p_r83.lastName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r83.email, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r83.profileLink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 5, ctx_r82.loggedUser$).email == "admin@mail.hr");
      }
    }

    function UsersComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UsersComponent_div_14_tr_3_Template, 12, 7, "tr", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r80.users$));
      }
    }

    var UsersComponent = /*#__PURE__*/function () {
      function UsersComponent(authService, fb, sanitizer, router) {
        _classCallCheck(this, UsersComponent);

        this.authService = authService;
        this.fb = fb;
        this.sanitizer = sanitizer;
        this.router = router;
        this.form = this.fb.group({
          search: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]))
        });
        this.xss = this.sanitizer.bypassSecurityTrustHtml('<svg onload="var i;for (i=0;i<1;++i){alert()}"></svg>');
      }

      _createClass(UsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this30 = this;

          this.loggedUser$ = this.authService.user$;
          this.xss = this.sanitizer.bypassSecurityTrustHtml('<svg onload="var i;for (i=0;i<1;++i){alert()}"></svg>');
          this.loggedUser$.subscribe(function (resp) {
            _this30.profileLink1 = _this30.sanitizer.bypassSecurityTrustUrl(resp.profileLink);

            if (resp.email == 'admin@mail.hr') {
              _this30.users$ = _this30.authService.getAllUsers();
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
      }, {
        key: "unsanitize",
        value: function unsanitize(text) {
          return this.sanitizer.bypassSecurityTrustUrl(text);
        }
      }]);

      return UsersComponent;
    }();

    UsersComponent.ɵfac = function UsersComponent_Factory(t) {
      return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UsersComponent,
      selectors: [["app-users"]],
      decls: 16,
      vars: 13,
      consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], [1, "naslov"], [2, "display", "none", 3, "innerHtml"], [1, "form-center", "user_search", 3, "formGroup"], ["type", "text", "placeholder", "Search..", "formControlName", "search", "required", "", 1, "form-control"], ["type", "submit", 3, "disabled", "click"], [1, "fa", "fa-search"], ["class", "lessons-list-container v-h-center-block-parent", 4, "ngIf"], [1, "lessons-list-container", "v-h-center-block-parent"], [1, "table", "lessons-list", "card", "card-strong", "search_card"], [1, "lesson-title", "mess"], ["class", "lesson-title mess", 4, "ngIf"], ["target", "_blank", 3, "href"], [4, "ngFor", "ngForOf"]],
      template: function UsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_8_listener() {
            return ctx.search();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UsersComponent_div_10_Template, 23, 15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UsersComponent_div_14_Template, 5, 3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.xss, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 5, ctx.users$) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, ctx.loggedUser$) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 9, ctx.loggedUser$).email != "admin@mail.hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 11, ctx.users$));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
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
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
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
    /*! C:\Users\mario\Desktop\RANJIVA - LOCAL\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map