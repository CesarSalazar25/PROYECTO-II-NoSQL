webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_datos_fauna_fauna_component__ = __webpack_require__("./src/app/components/datos/fauna/fauna.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_datos_flora_flora_component__ = __webpack_require__("./src/app/components/datos/flora/flora.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: ' https://cesarsalazar25.github.io/datos', pathMatch: 'full' },
    { path: ' https://cesarsalazar25.github.io/fauna', component: __WEBPACK_IMPORTED_MODULE_2__components_datos_fauna_fauna_component__["a" /* FaunaComponent */] },
    { path: ' https://cesarsalazar25.github.io/flora', component: __WEBPACK_IMPORTED_MODULE_3__components_datos_flora_flora_component__["a" /* FloraComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--¡Hola mami! ¡Mira soy un comentario en HTML! <3-->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" href=\"#\">Aechmea - Fauna y Flora de Venezuela</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n\t<a class=\"nav-item nav-link active\" href=\" /fauna\">Fauna <span class=\"sr-only\">(current)</span></a>\r\n\t<a class=\"nav-item nav-link\" href=\"flora\">Flora</a>\r\n</nav>\r\n\r\n<div class=\"text-center\">\r\n  <img width=\"400\" src=\"https://firebasestorage.googleapis.com/v0/b/aechmea-flora-y-fauna-de-vzla.appspot.com/o/Recursos%2Faechmea_applogo.png?alt=media&token=db6d4528-dbad-4f33-88db-915bbbbbecf0\" class=\"rounded\" alt=\"Aechmea Logo\">\r\n</div>\r\n    <hr style=\"color: #0056b2;\" />\r\n    <div class=\"card text-center\">\r\n  <div class=\"card-body\">\r\n    ¡Bienvenido a Aechmea! Tu aplicación confiable y actualizada sobre la fauna y flora de Venezuela, paséate por ambas secciones y descubre las diversas y exóticas especies que habitan en los diversos ecosistemas del país.\r\n  </div>\r\n</div>\r\n  <app-datos></app-datos>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Aechmea';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_datos_datos_component__ = __webpack_require__("./src/app/components/datos/datos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_datos_fauna_list_fauna_list_component__ = __webpack_require__("./src/app/components/datos/fauna-list/fauna-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_datos_flora_list_flora_list_component__ = __webpack_require__("./src/app/components/datos/flora-list/flora-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_datos_fauna_fauna_component__ = __webpack_require__("./src/app/components/datos/fauna/fauna.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_datos_flora_flora_component__ = __webpack_require__("./src/app/components/datos/flora/flora.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_fauna_service__ = __webpack_require__("./src/app/services/fauna.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_flora_service__ = __webpack_require__("./src/app/services/flora.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//Imports para usar RealTime DB:


//Import de la conexión con Firebase:

//Import de los Componentes (components):





//Import de los Servicios (services):


//Import del Toastr:


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_datos_datos_component__["a" /* DatosComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_datos_fauna_fauna_component__["a" /* FaunaComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_datos_flora_flora_component__["a" /* FloraComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_datos_fauna_list_fauna_list_component__["a" /* FaunaListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_datos_flora_list_flora_list_component__["a" /* FloraListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */],
                //Para RealTime DB:
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_17_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__services_fauna_service__["a" /* FaunaService */], __WEBPACK_IMPORTED_MODULE_15__services_flora_service__["a" /* FloraService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/datos/datos.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/datos/datos.component.html":
/***/ (function(module, exports) {

module.exports = "<app-router><app-router>\n\n"

/***/ }),

/***/ "./src/app/components/datos/datos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatosComponent = /** @class */ (function () {
    function DatosComponent() {
    }
    DatosComponent.prototype.ngOnInit = function () {
    };
    DatosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-datos',
            template: __webpack_require__("./src/app/components/datos/datos.component.html"),
            styles: [__webpack_require__("./src/app/components/datos/datos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DatosComponent);
    return DatosComponent;
}());



/***/ }),

/***/ "./src/app/components/datos/fauna-list/fauna-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/datos/fauna-list/fauna-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-5 text-center\">  \n  <div class=\"table\">\n    <!--<h3 class=\"font-weight-bold\">Lista de Fauna</h3>\n    <hr style=\"color: #0056b2;\" />-->\n    <table class=\"table table-sm table-hover table-bordered\">\n        <thead class=\"thead-dark\">\n          <th scope=\"col\">Foto</th>\n          <th scope=\"col\">Nombre</th>\n          <th scope=\"col\">Dieta</th>\n          <th scope=\"col\">Biomedio</th>\n          <th scope=\"col\">Conservación</th>\n        </thead>\n      <tbody>\n        <tr *ngFor=\"let fauna of faunaList | slice:0:10\">\n          <td><img width=\"100\" src=\"{{fauna.foto}}\" alt=\"...\"></td>\n          <td>{{fauna.nombre}}</td>\n          <td>{{fauna.dieta}}</td>\n          <td>{{fauna.bioma}}</td>\n          <td>{{fauna.estado}}</td>\n          <td>\n            <a class=\"btn btn-secondary text-white\" (click)=\"onEdit(fauna)\">\n                <i class=\"far fa-edit\"></i>\n            </a>\n            <a class=\"btn btn-danger text-white\" (click)=\"onDelete(fauna.$key)\">\n                <i class=\"fas fa-trash-alt\"></i>\n            </a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/datos/fauna-list/fauna-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaunaListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_fauna_service__ = __webpack_require__("./src/app/services/fauna.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Imports del Service:

//Imports del toastr:

var FaunaListComponent = /** @class */ (function () {
    function FaunaListComponent(faunaService, toastr) {
        this.faunaService = faunaService;
        this.toastr = toastr;
    }
    FaunaListComponent.prototype.ngOnInit = function () {
        var _this = this;
        return this.faunaService.getFauna()
            .snapshotChanges().subscribe(function (item) {
            _this.faunaList = [];
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;
                _this.faunaList.push(x);
            });
        });
    };
    FaunaListComponent.prototype.onEdit = function (fauna) {
        this.faunaService.selectedFauna = Object.assign({}, fauna);
    };
    FaunaListComponent.prototype.onDelete = function ($key) {
        if (confirm('¿Estás seguro que quieres borrar el elemento?')) {
            this.faunaService.deleteFauna($key);
            this.toastr.warning('Borrado éxitosamente', 'Animal removido');
        }
    };
    FaunaListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fauna-list',
            template: __webpack_require__("./src/app/components/datos/fauna-list/fauna-list.component.html"),
            styles: [__webpack_require__("./src/app/components/datos/fauna-list/fauna-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_fauna_service__["a" /* FaunaService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], FaunaListComponent);
    return FaunaListComponent;
}());



/***/ }),

/***/ "./src/app/components/datos/fauna/fauna.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/datos/fauna/fauna.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-5\">  \n      <div class=\"card mt-5 text-center\">\n        <div class=\"card-body\">\n          <h3 class=\"font-weight-bold\">Fauna</h3>\n          <hr style=\"color: #0056b2;\" />\n          <h5>-Datos Generales-</h5>\n            <form #faunaForm=\"ngForm\" (ngSubmit)=\"onSubmit(faunaForm)\">\n                <!-- Para actualizar los campos de un animal -->\n                <input type=\"hidden\" name=\"$key\" #$key=\"ngModel\" [(ngModel)]=\"faunaService.selectedFauna.$key\">\n\n                <div class=\"form-group\">\n                  <input disabled \n                    type=\"url\"\n                    class=\"form-control\"\n                    name=\"foto\"\n                    #foto=\"ngModel\"\n                    [(ngModel)]=\"faunaService.selectedFauna.foto\"\n                    placeholder=\"Foto de animal\"\n                  >\n                </div>\n\n                <div class=\"form-group\">\n                  <input \n                    type=\"text\"\n                    class=\"form-control\"\n                    name=\"nombre\"\n                    #nombre=\"ngModel\"\n                    [(ngModel)]=\"faunaService.selectedFauna.nombre\"\n                    placeholder=\"Añade el nombre del animal\"\n                    >\n                </div>\n                <div class=\"form-group\">\n                    <input \n                      type=\"text\"\n                      class=\"form-control\"\n                      name=\"dieta\"\n                      #dieta=\"ngModel\"\n                      [(ngModel)]=\"faunaService.selectedFauna.dieta\"\n                      placeholder=\"Añade la dieta del animal\"\n                      >\n                  </div>\n                <div class=\"form-group\">\n                  <input \n                    type=\"text\"\n                    class=\"form-control\"\n                    name=\"bioma\"\n                    #bioma=\"ngModel\"\n                    [(ngModel)]=\"faunaService.selectedFauna.bioma\"\n                    placeholder=\"Añade el biomedio del animal\"\n                    >\n                </div>\n                <div class=\"form-group\">\n                    <input \n                      type=\"text\"\n                      class=\"form-control\"\n                      name=\"estado\"\n                      #estado=\"ngModel\"\n                      [(ngModel)]=\"faunaService.selectedFauna.estado\"\n                      placeholder=\"Añade el estado de conservación\"\n                      >\n                </div>\n                <hr style=\"color: #0056b2;\" />\n                <h5>-Datos Etimológicos-</h5>\n                <div class=\"form-group\">\n                    <input \n                      type=\"text\"\n                      class=\"form-control\"\n                      name=\"clase\"\n                      #clase=\"ngModel\"\n                      [(ngModel)]=\"faunaService.selectedFauna.clase\"\n                      placeholder=\"Añade la Clase\"\n                      >\n                </div>\n                <div class=\"form-group\">\n                    <input \n                      type=\"text\"\n                      class=\"form-control\"\n                      name=\"orden\"\n                      #orden=\"ngModel\"\n                      [(ngModel)]=\"faunaService.selectedFauna.orden\"\n                      placeholder=\"Añade el Orden\"\n                      >\n                </div>\n                <div class=\"form-group\">\n                    <input \n                      type=\"text\"\n                      class=\"form-control\"\n                      name=\"familia\"\n                      #familia=\"ngModel\"\n                      [(ngModel)]=\"faunaService.selectedFauna.familia\"\n                      placeholder=\"Añade la Familia\"\n                      >\n                </div>\n                <div class=\"form-group\">\n                    <input \n                      type=\"text\"\n                      class=\"form-control\"\n                      name=\"genero\"\n                      #genero=\"ngModel\"\n                      [(ngModel)]=\"faunaService.selectedFauna.genero\"\n                      placeholder=\"Añade el Género\"\n                      >\n                </div> \n                <div class=\"form-group\">\n                    <input \n                      type=\"text\"\n                      class=\"form-control\"\n                      name=\"especie\"\n                      #especie=\"ngModel\"\n                      [(ngModel)]=\"faunaService.selectedFauna.especie\"\n                      placeholder=\"Añade la Especie\"\n                      >\n                </div>\n                <div class=\"form-group\">\n                    <input \n                      type=\"text\"\n                      class=\"form-control\"\n                      name=\"subespecie\"\n                      #subespecie=\"ngModel\"\n                      [(ngModel)]=\"faunaService.selectedFauna.subespecie\"\n                      placeholder=\"Añade la Subespecie\"\n                      >\n                </div>\n\n                <div class=\"form-group\">\n                  <button class=\"btn btn-primary\" type=\"submit\">\n                      <i class=\"fas fa-plus-circle\"></i> Añade un Animal\n                  </button>\n                  <button class=\"btn btn-secondary\" type=\"reset\" (click)=\"resetForm(faunaForm)\">\n                      <i class=\"fas fa-sync-alt\"></i> Reiniciar\n                  </button>\n                </div>\n              </form>\n        </div>\n</div>\n      </div>\n      <div class=\"col-md-7 text-center\">\n        <app-fauna-list></app-fauna-list>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/datos/fauna/fauna.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaunaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_fauna_service__ = __webpack_require__("./src/app/services/fauna.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_fauna__ = __webpack_require__("./src/app/models/fauna.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Import de Service: 

//Import de la Clase:

//Import del toastr:

var FaunaComponent = /** @class */ (function () {
    function FaunaComponent(faunaService, toastr) {
        this.faunaService = faunaService;
        this.toastr = toastr;
    }
    FaunaComponent.prototype.ngOnInit = function () {
        this.faunaService.getFauna();
        this.resetForm();
    };
    //Se aceptan los datos introducidos del animal:
    FaunaComponent.prototype.onSubmit = function (faunaForm) {
        if (faunaForm.value.$key == null)
            this.faunaService.insertFauna(faunaForm.value);
        else
            this.faunaService.updateFauna(faunaForm.value);
        this.resetForm(faunaForm);
        this.toastr.success('Operación exitosa', 'Animal Registrado');
    };
    //Se ponen en blanco los campos de introducción de datos:
    FaunaComponent.prototype.resetForm = function (faunaForm) {
        if (faunaForm != null)
            faunaForm.reset();
        this.faunaService.selectedFauna = new __WEBPACK_IMPORTED_MODULE_2__models_fauna__["a" /* Fauna */]();
    };
    FaunaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fauna',
            template: __webpack_require__("./src/app/components/datos/fauna/fauna.component.html"),
            styles: [__webpack_require__("./src/app/components/datos/fauna/fauna.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_fauna_service__["a" /* FaunaService */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], FaunaComponent);
    return FaunaComponent;
}());



/***/ }),

/***/ "./src/app/components/datos/flora-list/flora-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/datos/flora-list/flora-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-5 text-center\">\n  <div class=\"table\">\n    <table class=\"table table-sm table-hover table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Foto</th>\n          <th scope=\"col\">Nombre</th>\n          <th scope=\"col\">Biomedio</th>\n          <th scope=\"col\">Conservación</th>\n        </tr>\n        </thead>\n      <tbody>\n        <tr *ngFor=\"let flora of floraList | slice:0:10 \">\n          <td><img width=\"100\" src=\"{{flora.foto}}\" alt=\"...\"></td>\n          <td>{{flora.nombre}}</td>\n          <td>{{flora.bioma}}</td>\n          <td>{{flora.estado}}</td>\n          <td>\n            <a class=\"btn btn-secondary text-white\" (click)=\"onEdit(flora)\">\n                <i class=\"far fa-edit\"></i>\n            </a>\n            <a class=\"btn btn-danger text-white\" (click)=\"onDelete(flora.$key)\">\n                <i class=\"fas fa-trash-alt\"></i>\n            </a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/datos/flora-list/flora-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FloraListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_flora_service__ = __webpack_require__("./src/app/services/flora.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Imports del Service:

//Imports del toastr:

var FloraListComponent = /** @class */ (function () {
    function FloraListComponent(floraService, toastr) {
        this.floraService = floraService;
        this.toastr = toastr;
    }
    FloraListComponent.prototype.ngOnInit = function () {
        var _this = this;
        return this.floraService.getFlora()
            .snapshotChanges().subscribe(function (item) {
            _this.floraList = [];
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;
                _this.floraList.push(x);
            });
        });
    };
    FloraListComponent.prototype.onEdit = function (flora) {
        this.floraService.selectedFlora = Object.assign({}, flora);
    };
    FloraListComponent.prototype.onDelete = function ($key) {
        if (confirm('¿Estás seguro que quieres borrar el elemento?')) {
            this.floraService.deleteFlora($key);
            this.toastr.warning('Borrado éxitosamente', 'Planta removida');
        }
    };
    FloraListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-flora-list',
            template: __webpack_require__("./src/app/components/datos/flora-list/flora-list.component.html"),
            styles: [__webpack_require__("./src/app/components/datos/flora-list/flora-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_flora_service__["a" /* FloraService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], FloraListComponent);
    return FloraListComponent;
}());



/***/ }),

/***/ "./src/app/components/datos/flora/flora.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/datos/flora/flora.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-5\">  \n        <div class=\"card mt-5 text-center\">\n          <div class=\"card-body\">\n          \t<h3 class=\"font-weight-bold\">Flora</h3>\n          \t<hr style=\"color: #0056b2;\" />\n          \t<h5>-Datos Generales-</h5>\n              <form #floraForm=\"ngForm\" (ngSubmit)=\"onSubmit(floraForm)\">\n                  <!-- Para actualizar los campos de una planta -->\n                  <input type=\"hidden\" name=\"$key\" #$key=\"ngModel\" [(ngModel)]=\"floraService.selectedFlora.$key\">\n\n                  <div class=\"form-group\">\n                    <input  disabled\n                      typeblock=\"null\"\n                      class=\"form-control\"\n                      name=\"foto\"\n                      #foto=\"ngModel\"\n                      [(ngModel)]=\"floraService.selectedFlora.foto\"\n                      placeholder=\"Foto de la planta\"\n                      >\n                  </div>\n\n                  <div class=\"form-group\">\n                    <input \n                      type=\"text\"\n                      class=\"form-control\"\n                      name=\"nombre\"\n                      #nombre=\"ngModel\"\n                      [(ngModel)]=\"floraService.selectedFlora.nombre\"\n                      placeholder=\"Añade el nombre de la planta\"\n                      >\n                  </div>\n                  <div class=\"form-group\">\n                    <input \n                      type=\"text\"\n                      class=\"form-control\"\n                      name=\"bioma\"\n                      #bioma=\"ngModel\"\n                      [(ngModel)]=\"floraService.selectedFlora.bioma\"\n                      placeholder=\"Añade el biomedio de la planta\"\n                      >\n                  </div>\n                  <div class=\"form-group\">\n                      <input \n                        type=\"text\"\n                        class=\"form-control\"\n                        name=\"estado\"\n                        #estado=\"ngModel\"\n                        [(ngModel)]=\"floraService.selectedFlora.estado\"\n                        placeholder=\"Añade el estado de conservación\"\n                        >\n                  </div>\n                  <hr style=\"color: #0056b2;\" />\n                  <h5>-Datos Etimológicos-</h5>\n                  <div class=\"form-group\">\n                      <input \n                        type=\"text\"\n                        class=\"form-control\"\n                        name=\"clase\"\n                        #clase=\"ngModel\"\n                        [(ngModel)]=\"floraService.selectedFlora.clase\"\n                        placeholder=\"Añade la Clase\"\n                        >\n                  </div>\n                  <div class=\"form-group\">\n                      <input \n                        type=\"text\"\n                        class=\"form-control\"\n                        name=\"orden\"\n                        #orden=\"ngModel\"\n                        [(ngModel)]=\"floraService.selectedFlora.orden\"\n                        placeholder=\"Añade el Orden\"\n                        >\n                  </div>\n                  <div class=\"form-group\">\n                      <input \n                        type=\"text\"\n                        class=\"form-control\"\n                        name=\"familia\"\n                        #familia=\"ngModel\"\n                        [(ngModel)]=\"floraService.selectedFlora.familia\"\n                        placeholder=\"Añade la Familia\"\n                        >\n                  </div>\n                  <div class=\"form-group\">\n                      <input \n                        type=\"text\"\n                        class=\"form-control\"\n                        name=\"genero\"\n                        #genero=\"ngModel\"\n                        [(ngModel)]=\"floraService.selectedFlora.genero\"\n                        placeholder=\"Añade el Género\"\n                        >\n                  </div> \n                  <div class=\"form-group\">\n                      <input \n                        type=\"text\"\n                        class=\"form-control\"\n                        name=\"especie\"\n                        #especie=\"ngModel\"\n                        [(ngModel)]=\"floraService.selectedFlora.especie\"\n                        placeholder=\"Añade la Especie\"\n                        >\n                  </div>\n\n                  <div class=\"form-group\">\n                    <button class=\"btn btn-primary\" type=\"submit\">\n                        <i class=\"fas fa-plus-circle\"></i> Añade una Planta\n                    </button>\n                    <button class=\"btn btn-secondary\" type=\"reset\" (click)=\"resetForm(floraForm)\">\n                        <i class=\"fas fa-sync-alt\"></i> Reiniciar\n                    </button>\n                  </div>\n                </form>\n          </div>\n        </div>\n    </div>\n  <div class=\"col-md-7 text-center\">\n        <app-flora-list></app-flora-list>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/datos/flora/flora.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FloraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_flora_service__ = __webpack_require__("./src/app/services/flora.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_flora__ = __webpack_require__("./src/app/models/flora.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Import de Service: 

//Import de la Clase:

//Import del toastr:

var FloraComponent = /** @class */ (function () {
    function FloraComponent(floraService, toastr) {
        this.floraService = floraService;
        this.toastr = toastr;
    }
    FloraComponent.prototype.ngOnInit = function () {
        this.floraService.getFlora();
        this.resetForm();
    };
    //Se aceptan los datos introducidos del animal:
    FloraComponent.prototype.onSubmit = function (floraForm) {
        if (floraForm.value.$key == null)
            this.floraService.insertFlora(floraForm.value);
        else
            this.floraService.updateFlora(floraForm.value);
        this.resetForm(floraForm);
        this.toastr.success('Operación exitosa', 'Planta Registrada');
    };
    //Se ponen en blanco los campos de introducción de datos:
    FloraComponent.prototype.resetForm = function (floraForm) {
        if (floraForm != null)
            floraForm.reset();
        this.floraService.selectedFlora = new __WEBPACK_IMPORTED_MODULE_2__models_flora__["a" /* Flora */]();
    };
    FloraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-flora',
            template: __webpack_require__("./src/app/components/datos/flora/flora.component.html"),
            styles: [__webpack_require__("./src/app/components/datos/flora/flora.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_flora_service__["a" /* FloraService */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], FloraComponent);
    return FloraComponent;
}());



/***/ }),

/***/ "./src/app/models/fauna.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fauna; });
var Fauna = /** @class */ (function () {
    function Fauna() {
    }
    return Fauna;
}());



/***/ }),

/***/ "./src/app/models/flora.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Flora; });
var Flora = /** @class */ (function () {
    function Flora() {
    }
    return Flora;
}());



/***/ }),

/***/ "./src/app/services/fauna.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaunaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_fauna__ = __webpack_require__("./src/app/models/fauna.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Import de Firebase:

//Import del Modelo:

var FaunaService = /** @class */ (function () {
    function FaunaService(firebase) {
        this.firebase = firebase;
        this.selectedFauna = new __WEBPACK_IMPORTED_MODULE_2__models_fauna__["a" /* Fauna */]();
    }
    FaunaService.prototype.getFauna = function () {
        return this.faunaList = this.firebase.list('Fauna');
    };
    //Método para insertar un animal:
    FaunaService.prototype.insertFauna = function (fauna) {
        this.faunaList.push({
            nombre: fauna.nombre,
            dieta: fauna.dieta,
            bioma: fauna.bioma,
            estado: fauna.estado,
            clase: fauna.clase,
            orden: fauna.orden,
            familia: fauna.familia,
            genero: fauna.genero,
            especie: fauna.especie,
            subespecie: fauna.subespecie
        });
    };
    //Método para actualizar los datos de un animal:
    FaunaService.prototype.updateFauna = function (fauna) {
        this.faunaList.update(fauna.$key, {
            nombre: fauna.nombre,
            dieta: fauna.dieta,
            bioma: fauna.bioma,
            estado: fauna.estado,
            clase: fauna.clase,
            orden: fauna.orden,
            familia: fauna.familia,
            genero: fauna.genero,
            especie: fauna.especie,
            subespecie: fauna.subespecie
        });
    };
    //Método para borrar un animal:
    FaunaService.prototype.deleteFauna = function ($key) {
        this.faunaList.remove($key);
    };
    FaunaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FaunaService);
    return FaunaService;
}());



/***/ }),

/***/ "./src/app/services/flora.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FloraService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_flora__ = __webpack_require__("./src/app/models/flora.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Import de Firebase:

//Import del Modelo:

var FloraService = /** @class */ (function () {
    function FloraService(firebase) {
        this.firebase = firebase;
        this.selectedFlora = new __WEBPACK_IMPORTED_MODULE_2__models_flora__["a" /* Flora */]();
    }
    FloraService.prototype.getFlora = function () {
        return this.floraList = this.firebase.list('Flora');
    };
    //Método para insertar un animal:
    FloraService.prototype.insertFlora = function (flora) {
        this.floraList.push({
            nombre: flora.nombre,
            bioma: flora.bioma,
            estado: flora.estado,
            clase: flora.clase,
            orden: flora.orden,
            familia: flora.familia,
            genero: flora.genero,
            especie: flora.especie,
        });
    };
    //Método para actualizar los datos de un animal:
    FloraService.prototype.updateFlora = function (flora) {
        this.floraList.update(flora.$key, {
            foto: flora.foto,
            nombre: flora.nombre,
            bioma: flora.bioma,
            estado: flora.estado,
            clase: flora.clase,
            orden: flora.orden,
            familia: flora.familia,
            genero: flora.genero,
            especie: flora.especie,
        });
    };
    //Método para borrar un animal:
    FloraService.prototype.deleteFlora = function ($key) {
        this.floraList.remove($key);
    };
    FloraService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FloraService);
    return FloraService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    //Se conecta con la base de datos Realtime hecha en Firebase:
    firebase: {
        apiKey: "AIzaSyDbfn_hdvvMu46afLwJrF6SUmBJK4YZexg",
        authDomain: "aechmea-flora-y-fauna-de-vzla.firebaseapp.com",
        databaseURL: "https://aechmea-flora-y-fauna-de-vzla.firebaseio.com",
        projectId: "aechmea-flora-y-fauna-de-vzla",
        storageBucket: "aechmea-flora-y-fauna-de-vzla.appspot.com",
        messagingSenderId: "491749486362"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map