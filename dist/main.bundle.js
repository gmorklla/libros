webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contenedor {\n  margin: 10px;\n}\n\n.selecciones {\n  width: 100%;\n  height: 230px;\n  overflow: hidden;\n}\n\napp-user-selection {\n  overflow-x: scroll;\n  width: 100%;\n  height: 100%;\n  padding-bottom: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-bar></app-header-bar>\n<div class=\"contenedor\">\n    <div class=\"selecciones\">\n        <app-user-selection></app-user-selection>\n    </div>\n    <app-book-selected [book]=\"selected\"></app-book-selected>\n    <app-search (dataToEmit)=\"getData($event)\"></app-search>\n    <app-book-list *ngIf=\"data\" [data]=\"data\" (selectedBook)=\"bookSelection($event)\"></app-book-list>\n    <app-comments></app-comments>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.getData = function (e) {
        this.data = e;
    };
    AppComponent.prototype.bookSelection = function (e) {
        this.selected = e;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_progress_bar__ = __webpack_require__("../../../material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_chips__ = __webpack_require__("../../../material/esm5/chips.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_snack_bar__ = __webpack_require__("../../../material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_tooltip__ = __webpack_require__("../../../material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_radio__ = __webpack_require__("../../../material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_http_requests_service__ = __webpack_require__("../../../../../src/app/services/http-requests.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_messaging_service__ = __webpack_require__("../../../../../src/app/services/messaging.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__book_list_book_list_component__ = __webpack_require__("../../../../../src/app/book-list/book-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__book_selected_book_selected_component__ = __webpack_require__("../../../../../src/app/book-selected/book-selected.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__header_bar_header_bar_component__ = __webpack_require__("../../../../../src/app/header-bar/header-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__user_selection_user_selection_component__ = __webpack_require__("../../../../../src/app/user-selection/user-selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__sortear_sortear_component__ = __webpack_require__("../../../../../src/app/sortear/sortear.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__comments_comments_component__ = __webpack_require__("../../../../../src/app/comments/comments.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































__WEBPACK_IMPORTED_MODULE_23_firebase__["initializeApp"](__WEBPACK_IMPORTED_MODULE_21__environments_environment__["a" /* environment */].firebase);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_24__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_29__book_list_book_list_component__["a" /* BookListComponent */],
                __WEBPACK_IMPORTED_MODULE_30__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_31__book_selected_book_selected_component__["a" /* BookSelectedComponent */],
                __WEBPACK_IMPORTED_MODULE_32__header_bar_header_bar_component__["a" /* HeaderBarComponent */],
                __WEBPACK_IMPORTED_MODULE_33__user_selection_user_selection_component__["a" /* UserSelectionComponent */],
                __WEBPACK_IMPORTED_MODULE_34__sortear_sortear_component__["a" /* SortearComponent */],
                __WEBPACK_IMPORTED_MODULE_35__comments_comments_component__["a" /* CommentsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_progress_bar__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_chips__["a" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_snack_bar__["b" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_tooltip__["a" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_radio__["a" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_21__environments_environment__["a" /* environment */].firebase, 'angular-auth-firebase'),
                __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_25__services_http_requests_service__["a" /* HttpRequestsService */],
                __WEBPACK_IMPORTED_MODULE_26__services_firebase_service__["a" /* FirebaseService */],
                __WEBPACK_IMPORTED_MODULE_27__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_28__services_messaging_service__["a" /* MessagingService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_24__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/book-list/book-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bookList {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    width: 100%;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}\n\n.bookList div {\n    width: 100%;\n    height: 150px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin: 10px 0;\n}\n\n.bookList div mat-card {\n    height: 100px;\n    width: 100%;\n}\n\n.bookList div mat-card mat-card-content {\n    width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/book-list/book-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bookList\">\n  <div *ngFor=\"let book of data\">\n    <mat-card (click)=\"selectBook(book)\">\n      <mat-card-header>\n        <mat-card-title>{{book.title}}</mat-card-title>\n        <mat-card-subtitle *ngIf=\"book.authors\">{{book.authors[0]}}</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n          <a href=\"{{book.link}}\" target=\"blank\">\n            {{book.link}}\n          </a>\n        </mat-card-content>\n    </mat-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/book-list/book-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookListComponent = (function () {
    function BookListComponent() {
        this.selectedBook = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    BookListComponent.prototype.ngOnInit = function () {
    };
    BookListComponent.prototype.selectBook = function (book) {
        this.selectedBook.emit(book);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], BookListComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], BookListComponent.prototype, "selectedBook", void 0);
    BookListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-book-list',
            template: __webpack_require__("../../../../../src/app/book-list/book-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/book-list/book-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/book-selected/book-selected.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 10px;\n    margin: 10px 0;\n    background-color: white;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n\np {\n    margin: 0;\n    margin-right: 10px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-weight: bold;\n    color: #3f51b5;\n}\n\nmat-icon {\n    margin-right: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/book-selected/book-selected.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"book; else noBook\">\n  <p><mat-icon>book</mat-icon> {{book.title}}</p>\n  <button mat-raised-button color=\"accent\" (click)=\"seleccionar()\">Seleccionar</button>\n</div>\n<ng-template #noBook>\n  <div>\n    <p style=\"color: lightgrey;\"><mat-icon>book</mat-icon> Busca un libro para seleccionarlo</p>\n    <button mat-raised-button color=\"accent\" disabled>Seleccionar</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/book-selected/book-selected.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookSelectedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookSelectedComponent = (function () {
    function BookSelectedComponent(snackBar, db, auth) {
        this.snackBar = snackBar;
        this.db = db;
        this.auth = auth;
        this.turnos = [];
        this.updateOrNot = false;
    }
    BookSelectedComponent.prototype.ngOnInit = function () {
        this.booksList = this.db.object('/books');
    };
    BookSelectedComponent.prototype.seleccionar = function () {
        if (this.auth.isLoggedIn()) {
            this.setData();
        }
        else {
            this.snackBar.open('Debes ingresar primero', 'Ok', {
                duration: 2000,
            });
        }
    };
    BookSelectedComponent.prototype.setData = function () {
        var _this = this;
        var currentUser = this.auth.getUser();
        var indice;
        var name = currentUser.displayName;
        this.booksList.snapshotChanges().take(1).subscribe(function (action) {
            var values = action.payload.val();
            if (values) {
                var objKeys = Object.keys(values);
                indice = objKeys.findIndex(function (val) { return currentUser.displayName === val; });
            }
            else {
                indice = -1;
            }
            if (indice === -1) {
                var obj = {
                    autor: _this.book.authors[0],
                    nombre: name,
                    title: _this.book.title,
                    orden: '#'
                };
                _this.db.list('/books').set(name, obj).then(function (val) {
                    _this.sortea();
                }).catch(function (err) {
                    console.log('Error', err);
                });
            }
            else {
                _this.snackBar.open('Ya escogiste un libro', 'Ok', {
                    duration: 2000,
                });
            }
        });
    };
    BookSelectedComponent.prototype.sortea = function () {
        var _this = this;
        this.turnos = [];
        this.booksList.snapshotChanges().take(1).subscribe(function (action) {
            var values = action.payload.val();
            var objKeys = Object.keys(values);
            objKeys.forEach(function (val) {
                var turno = _this.getTurno(objKeys.length);
                _this.turnos.push(turno);
                values[val].orden = turno;
            });
            _this.update(values);
        });
    };
    BookSelectedComponent.prototype.update = function (values) {
        var path = '/';
        var objToUpdate = this.db.list(path);
        objToUpdate.set('books', values);
    };
    BookSelectedComponent.prototype.getTurno = function (cantidad) {
        var turno;
        var findIndex;
        do {
            turno = Math.floor(Math.random() * cantidad) + 1;
            findIndex = this.turnos.findIndex(function (val) { return val === turno; });
        } while (findIndex != -1);
        return turno;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], BookSelectedComponent.prototype, "book", void 0);
    BookSelectedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-book-selected',
            template: __webpack_require__("../../../../../src/app/book-selected/book-selected.component.html"),
            styles: [__webpack_require__("../../../../../src/app/book-selected/book-selected.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], BookSelectedComponent);
    return BookSelectedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/comments/comments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    margin: 25px 0;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.iconName {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.icon {\n    margin-right: 10px;\n}\n\n.date {\n    font-size: small;\n}\n\nform, mat-form-field {\n    width: 100%;\n}\n\nform {\n    margin-bottom: 20px;\n}\n\nh3 {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    text-transform: uppercase;\n    padding: 10px 20px;\n    background-color: #ff4081;\n    color: white;\n    margin: 25px 0 10px;\n    width: 170px;\n    border-bottom-right-radius: 20px;\n    border-top-right-radius: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comments/comments.component.html":
/***/ (function(module, exports) {

module.exports = "<h3><mat-icon class=\"icon\">comment</mat-icon> Comentarios</h3>\n\n<form>\n  <mat-form-field>\n      <textarea matInput placeholder=\"Escribe un comentario\" matTextareaAutosize matAutosizeMinRows=\"2\"\n      matAutosizeMaxRows=\"5\" #comment></textarea>\n  </mat-form-field>\n  <button mat-raised-button color=\"primary\" (click)=\"comentar(comment.value)\" [disabled]=\"comment.value === ''\">Comentar</button>\n</form>\n<mat-card *ngFor=\"let comentario of commentsList | async\">\n  <div class=\"title\">\n    <div class=\"iconName\">\n        <mat-icon class=\"icon\">account_box</mat-icon>\n        {{comentario.nombre}}\n    </div>\n    <div class=\"date\">{{comentario.fecha | date : 'dd/MM/yyyy h.mma'}}</div>\n  </div>\n  <mat-card-content>\n    <p>\n      {{comentario.comentario}}\n    </p>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/comments/comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentsComponent = (function () {
    function CommentsComponent(firebaseS, snackBar, auth) {
        this.firebaseS = firebaseS;
        this.snackBar = snackBar;
        this.auth = auth;
    }
    CommentsComponent.prototype.ngOnInit = function () {
        this.commentsList = this.firebaseS.getList('/comentarios', 'fecha').map(function (val) {
            val.sort(function (a, b) { return new Date(a.fecha).getTime() - new Date(b.fecha).getTime(); });
            return val;
        });
    };
    CommentsComponent.prototype.comentar = function (comment) {
        if (this.auth.isLoggedIn()) {
            var fecha = new Date().getTime();
            var name_1 = this.auth.getUser().displayName + ' ' + fecha;
            var obj = {
                comentario: comment,
                fecha: fecha,
                nombre: this.auth.getUser().displayName
            };
            this.firebaseS.setInList('/comentarios', name_1, obj);
        }
        else {
            this.snackBar.open('Debes ingresar primero', 'Ok', {
                duration: 2000,
            });
        }
    };
    CommentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-comments',
            template: __webpack_require__("../../../../../src/app/comments/comments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/comments/comments.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-bar/header-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n.picture {\n  width: 50px;\n  height: 50px;\n  overflow: hidden;\n}\n\n.picture img {\n  width: 45px;\n  height: 45px;\n  border-radius: 50px;\n  border: 1px solid white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.name {\n  margin-right: 10px;\n}\n\nspan {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.submenu {\n  color: crimson;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.submenu mat-icon {\n  color: crimson;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-bar/header-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <span><mat-icon style=\"margin-right: 10px;\">group</mat-icon> Sociedad</span>\n    <span class=\"example-spacer\"></span>\n    <!-- {{ message | async | json }} -->\n    <button mat-icon-button (click)=\"login()\" *ngIf=\"!user; else userInfo\">\n        <mat-icon class=\"example-icon\">account_box</mat-icon>\n    </button>\n    <ng-template #userInfo>\n      <div class=\"name\">{{user.displayName}}</div>\n      <div class=\"picture\" [matMenuTriggerFor]=\"menu\">\n        <img src=\"{{user.photoURL}}\" alt=\"Profile picture\">\n      </div>\n    </ng-template>\n</mat-toolbar>\n\n<mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\">\n  <button class=\"submenu\" mat-menu-item (click)=\"logout()\">\n    <mat-icon>exit_to_app</mat-icon>\n    <span>Salir</span>\n  </button>\n</mat-menu>"

/***/ }),

/***/ "../../../../../src/app/header-bar/header-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { MessagingService } from "../services/messaging.service";
var HeaderBarComponent = (function () {
    function HeaderBarComponent(auth) {
        this.auth = auth;
    }
    HeaderBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getAuthState().subscribe(function (user) { return _this.user = user; });
        // this.msgService.getPermission();
        // this.msgService.receiveMessage();
        // this.message = this.msgService.currentMessage;
    };
    HeaderBarComponent.prototype.login = function () {
        var _this = this;
        this.auth.signInWithFacebook().then(function (res) {
            _this.getUserData(res);
        })
            .catch(function (err) { return console.log(err); });
    };
    HeaderBarComponent.prototype.getUserData = function (res) {
        this.user = res.additionalUserInfo.profile;
    };
    HeaderBarComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout().then(function () {
            _this.user = null;
        });
    };
    HeaderBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-header-bar',
            template: __webpack_require__("../../../../../src/app/header-bar/header-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-bar/header-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], HeaderBarComponent);
    return HeaderBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-form {\n  min-width: 150px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\nmat-progress-bar {\n  margin: 10px 0;\n}\n\n.example-radio-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin-bottom: 15px;\n}\n\n.example-radio-button {\n  margin: 5px;\n}\n\n.example-selected-value {\n  margin: 15px 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading\"></mat-progress-bar>\n<form class=\"example-form\" onSubmit=\"return false\">\n  <mat-form-field class=\"example-full-width\">\n    <input #book matInput placeholder=\"{{'Busca por ' + titleOrAuthor}}\" value=\"\">\n  </mat-form-field>\n  <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"titleOrAuthor\" name=\"titleOrAuthor\">\n    <mat-radio-button class=\"example-radio-button\" [value]=\"'título'\">\n      Título\n    </mat-radio-button>\n    <mat-radio-button class=\"example-radio-button\" [value]=\"'autor'\">\n      Autor\n    </mat-radio-button>\n  </mat-radio-group>\n</form>\n<button mat-raised-button color=\"primary\" (click)=\"busca(book.value)\" [disabled]=\"book.value === ''\">Buscar</button>"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_requests_service__ = __webpack_require__("../../../../../src/app/services/http-requests.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = (function () {
    function SearchComponent(http) {
        this.http = http;
        this.dataToEmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.loading = false;
        this.titleOrAuthor = 'título';
    }
    SearchComponent.prototype.keyEvent = function (e) {
        if (e.code === "Enter") {
            if (this.bookEle.nativeElement.value !== '') {
                this.busca(this.bookEle.nativeElement.value);
            }
        }
    };
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.busca = function (book) {
        var _this = this;
        this.loading = true;
        var type = '';
        if (this.titleOrAuthor === 'título') {
            type = 'title';
        }
        else {
            type = 'author';
        }
        var url = 'https://infinite-journey-77948.herokuapp.com/api';
        var params = { book: book, type: type };
        var sus = this.http.getRequest(url, params).first().subscribe(function (res) {
            _this.dataToEmit.emit(res);
            _this.loading = false;
        }, function (err) {
            console.log('Error', err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], SearchComponent.prototype, "dataToEmit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('book'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SearchComponent.prototype, "bookEle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], SearchComponent.prototype, "keyEvent", null);
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_http_requests_service__["a" /* HttpRequestsService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(_firebaseAuth) {
        var _this = this;
        this._firebaseAuth = _firebaseAuth;
        this.currentUser = null;
        this.authState = _firebaseAuth.authState;
        this.authState.subscribe(function (user) {
            if (user) {
                _this.currentUser = user;
            }
            else {
                _this.currentUser = null;
            }
        });
    }
    AuthService.prototype.getAuthState = function () {
        return this.authState;
    };
    AuthService.prototype.signInWithFacebook = function () {
        return this._firebaseAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].FacebookAuthProvider());
    };
    AuthService.prototype.isLoggedIn = function () {
        if (this.currentUser == null) {
            return false;
        }
        else {
            return true;
        }
    };
    AuthService.prototype.logout = function () {
        return this._firebaseAuth.auth.signOut()
            .then(function (res) {
            console.log('Logout!');
        });
    };
    AuthService.prototype.getUser = function () {
        return this.currentUser;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseService = (function () {
    function FirebaseService(db) {
        this.db = db;
    }
    FirebaseService.prototype.getList = function (listPath, orderBy) {
        return this.db.list(listPath, function (ref) { return ref.orderByChild('orden'); }).valueChanges();
    };
    FirebaseService.prototype.setInList = function (listPath, name, obj) {
        this.db.list(listPath).set(name, obj).then(function () {
            console.log('Guardado');
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    FirebaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "../../../../../src/app/services/http-requests.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpRequestsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpRequestsService = (function () {
    function HttpRequestsService(http) {
        this.http = http;
    }
    // Standard get request
    HttpRequestsService.prototype.getRequest = function (url, param) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in param) {
            if (param.hasOwnProperty(key)) {
                var val = param[key];
                params.set(key, val);
            }
        }
        return this.http.get(url, { headers: headers, search: params })
            .retry(3)
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(err);
        });
        // .finally(() => console.log('Finally http get request'));
    };
    HttpRequestsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HttpRequestsService);
    return HttpRequestsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/messaging.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MessagingService = (function () {
    function MessagingService(db, afAuth) {
        this.db = db;
        this.afAuth = afAuth;
        this.messaging = __WEBPACK_IMPORTED_MODULE_3_firebase__["messaging"]();
        this.currentMessage = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
    }
    MessagingService.prototype.updateToken = function (token) {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (user) {
            if (!user)
                return;
            var data = (_a = {}, _a[user.uid] = token, _a);
            _this.db.object('fcmTokens/').update(data);
            var _a;
        });
    };
    MessagingService.prototype.getPermission = function () {
        var _this = this;
        this.messaging.requestPermission()
            .then(function () {
            console.log('Notification permission granted.');
            return _this.messaging.getToken();
        })
            .then(function (token) {
            console.log(token);
            _this.updateToken(token);
        })
            .catch(function (err) {
            console.log('Unable to get permission to notify.', err);
        });
    };
    MessagingService.prototype.receiveMessage = function () {
        var _this = this;
        this.messaging.onMessage(function (payload) {
            console.log("Message received. ", payload);
            _this.currentMessage.next(payload);
        });
    };
    MessagingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MessagingService);
    return MessagingService;
}());



/***/ }),

/***/ "../../../../../src/app/sortear/sortear.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n    width: 100%;\n    margin: 10px 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sortear/sortear.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"accent\" (click)=\"sortea()\" [disabled]=\"!booksList\">Sortear</button>"

/***/ }),

/***/ "../../../../../src/app/sortear/sortear.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortearComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SortearComponent = (function () {
    function SortearComponent(db) {
        this.db = db;
        this.turnos = [];
    }
    SortearComponent.prototype.ngOnInit = function () {
        this.booksList = this.db.object('/books');
    };
    SortearComponent.prototype.sortea = function () {
        var _this = this;
        this.turnos = [];
        this.booksList.snapshotChanges().take(1).subscribe(function (action) {
            var values = action.payload.val();
            var objKeys = Object.keys(values);
            objKeys.forEach(function (val) {
                var turno = _this.getTurno(objKeys.length);
                _this.turnos.push(turno);
                values[val].orden = turno;
            });
            _this.update(values);
        });
    };
    SortearComponent.prototype.update = function (values) {
        var path = '/';
        var objToUpdate = this.db.list(path);
        objToUpdate.set('books', values);
    };
    SortearComponent.prototype.getTurno = function (cantidad) {
        var turno;
        var findIndex;
        do {
            turno = Math.floor(Math.random() * cantidad) + 1;
            findIndex = this.turnos.findIndex(function (val) { return val === turno; });
        } while (findIndex != -1);
        return turno;
    };
    SortearComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-sortear',
            template: __webpack_require__("../../../../../src/app/sortear/sortear.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sortear/sortear.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], SortearComponent);
    return SortearComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-selection/user-selection.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-card {\n    width: 150px;\n    max-width: 150px;\n    min-width: 150px;\n    margin: 5px;\n    background-color: whitesmoke;\n    border: 5px solid #ffffff;\n}\n\n.headerInfo {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n\np {\n    font-size: small;\n    margin-top: 5px;\n}\n\nh4 {\n    width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin-bottom: 0px;\n    margin-top: 50px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-selection/user-selection.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card *ngFor=\"let book of booksList | async\">\n  <div class=\"headerInfo\">\n    <p style=\"margin-top: 10px;\">{{book.nombre}}</p>\n    <mat-chip-list>\n      <mat-chip color=\"accent\" selected=\"true\">{{book.orden}}</mat-chip>\n    </mat-chip-list>\n  </div>\n  <mat-card-content>\n    <hr>\n    <h4 mat-line matTooltip=\"{{book.title}}\" [matTooltipPosition]=\"'below'\">{{book.title}}</h4>\n    <p mat-line> {{book.autor}} </p>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/user-selection/user-selection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSelectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserSelectionComponent = (function () {
    function UserSelectionComponent(firebaseS) {
        this.firebaseS = firebaseS;
    }
    UserSelectionComponent.prototype.ngOnInit = function () {
        this.booksList = this.firebaseS.getList('/books', 'orden');
    };
    UserSelectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-user-selection',
            template: __webpack_require__("../../../../../src/app/user-selection/user-selection.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-selection/user-selection.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]])
    ], UserSelectionComponent);
    return UserSelectionComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAkzPRSjejsXAUXl8x92O7bznsxKNd27Q4",
        authDomain: "books-project-190821.firebaseapp.com",
        databaseURL: "https://books-project-190821.firebaseio.com",
        projectId: "books-project-190821",
        storageBucket: "",
        messagingSenderId: "163957268936"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map