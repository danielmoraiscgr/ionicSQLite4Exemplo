(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Aplicação SQLite\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding text-center>\n  <ion-button expand=\"block\" (click)=\"createDB()\">\n      Criar Banco de dados\n  </ion-button>\n\n  <ion-button expand=\"block\" (click)=\"createTable()\">\n    Criar tabela\n  </ion-button>\n \n  <ion-button expand=\"block\" (click)=\"getRows()\">\n    Listar registros\n  </ion-button>\n\n\n  <ion-item-divider>\n    <ion-input placeholder=\"Digite o nome\" [(ngModel)]=\"name_model\"></ion-input>\n    <ion-button expand=\"block\" (click)=\"insertRow()\">\n      Inserir registros\n    </ion-button>\n  </ion-item-divider>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n       ID\n      </ion-col>\n      <ion-col>\n        Nome\n      </ion-col>\n      <ion-col>\n        Excluir\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let item of row_data\">   \n      <ion-col>\n        {{item.pid}}\n      </ion-col>\n      <ion-col>\n         <ion-input placeholder=\"Enter name\" [(ngModel)]=\"item.pid\"  value={{item.value}}></ion-input>>\n           <ion-button (click)=\"editRow(item)\" size=\"small\" color=\"danger\">\n               <ion-icon name=\"pencil\"></ion-icon>\n           </ion-button>  \n      </ion-col>      \n      <ion-col>\n        <ion-button (click)=\"deleteRow(item)\" size=\"small\" color=\"danger\">\n          <ion-icon name=\"trash\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var HomePage = /** @class */ (function () {
    function HomePage(sqlite, platform) {
        var _this = this;
        this.sqlite = sqlite;
        this.platform = platform;
        this.name_model = ""; // Input field model
        this.row_data = []; // Table rows
        this.database_name = "ipec.db"; // DB name
        this.table_name = "tbProdutor"; // Table name
        this.platform.ready().then(function () {
            _this.createDB();
        }).catch(function (error) {
            console.log(error);
        });
    } // todos sao publicos como se fosse set get 
    HomePage.prototype.createDB = function () {
        var _this = this;
        this.sqlite.create({
            name: this.database_name,
            location: 'default'
        })
            .then(function (db) {
            _this.databaseObj = db;
            alert('Database criado !');
        })
            .catch(function (e) {
            alert("erro : " + JSON.stringify(e)); // convert objeto para string
        });
    };
    HomePage.prototype.createTable = function () {
        this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.table_name + ' (pid INTEGER PRIMARY KEY, Name varchar(255))', [])
            .then(function () {
            alert('Tabela criada !');
        })
            .catch(function (e) {
            alert("erro : " + JSON.stringify(e));
        });
    };
    HomePage.prototype.insertRow = function () {
        var _this = this;
        if (!this.name_model.length) {
            alert("Enter Name");
            return;
        }
        this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (Name) VALUES ("' + this.name_model + '")', [])
            .then(function () {
            alert('Registro inserido !');
            _this.getRows();
        })
            .catch(function (e) {
            alert("erro : " + JSON.stringify(e));
        });
    };
    HomePage.prototype.editRow = function (item) {
        var _this = this;
        if (!this.name_model.length) {
            alert("Enter Name");
            return;
        }
        this.databaseObj.executeSql("update " + this.table_name + "set name=" + this.name_model + " WHERE pid = " + item.pid, [])
            .then(function () {
            alert('Registro alterado !');
            _this.getRows();
        })
            .catch(function (e) {
            alert("erro : " + JSON.stringify(e));
        });
    };
    HomePage.prototype.getRows = function () {
        var _this = this;
        this.databaseObj.executeSql("SELECT * FROM " + this.table_name, [])
            .then(function (res) {
            _this.row_data = []; // atribui row_data como array vazio para preencher 
            if (res.rows.length > 0) { // quantidade de registros da tabela
                for (var i = 0; i < res.rows.length; i++) {
                    _this.row_data.push(res.rows.item(i)); // inserindo registro na array
                }
            }
        })
            .catch(function (e) {
            alert("erro : " + JSON.stringify(e));
        });
    };
    HomePage.prototype.deleteRow = function (item) {
        var _this = this;
        this.databaseObj.executeSql("DELETE FROM " + this.table_name + " WHERE pid = " + item.pid, [])
            .then(function (res) {
            alert("Registro removido !");
            _this.getRows();
        })
            .catch(function (e) {
            alert("erro : " + JSON.stringify(e));
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map