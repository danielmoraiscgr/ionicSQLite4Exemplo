(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/@ionic-native/sqlite/ngx/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@ionic-native/sqlite/ngx/index.js ***!
  \********************************************************/
/*! exports provided: SQLiteObject, SQLite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SQLiteObject", function() { return SQLiteObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SQLite", function() { return SQLite; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SQLiteObject = /** @class */ (function () {
    function SQLiteObject(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    SQLiteObject.prototype.addTransaction = function (transaction) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "addTransaction", { "sync": true }, arguments); };
    SQLiteObject.prototype.transaction = function (fn) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "transaction", { "successIndex": 2, "errorIndex": 1 }, arguments); };
    SQLiteObject.prototype.readTransaction = function (fn) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "readTransaction", {}, arguments); };
    SQLiteObject.prototype.startNextTransaction = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "startNextTransaction", { "sync": true }, arguments); };
    SQLiteObject.prototype.open = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "open", {}, arguments); };
    SQLiteObject.prototype.close = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "close", {}, arguments); };
    SQLiteObject.prototype.executeSql = function (statement, params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "executeSql", {}, arguments); };
    SQLiteObject.prototype.sqlBatch = function (sqlStatements) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "sqlBatch", {}, arguments); };
    SQLiteObject.prototype.abortallPendingTransactions = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "abortallPendingTransactions", { "sync": true }, arguments); };
    Object.defineProperty(SQLiteObject.prototype, "databaseFeatures", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertyGet"])(this, "databaseFeatures"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertySet"])(this, "databaseFeatures", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SQLiteObject.prototype, "openDBs", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertyGet"])(this, "openDBs"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertySet"])(this, "openDBs", value); },
        enumerable: true,
        configurable: true
    });
    return SQLiteObject;
}());

var SQLite = /** @class */ (function (_super) {
    __extends(SQLite, _super);
    function SQLite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SQLite.prototype.create = function (config) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["checkAvailability"])(_this) === true) {
                return new Promise(function (resolve, reject) {
                    sqlitePlugin.openDatabase(config, function (db) { return resolve(new SQLiteObject(db)); }, reject);
                });
            }
        })();
    };
    SQLite.prototype.echoTest = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "echoTest", {}, arguments); };
    SQLite.prototype.selfTest = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "selfTest", {}, arguments); };
    SQLite.prototype.deleteDatabase = function (config) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "deleteDatabase", {}, arguments); };
    SQLite.pluginName = "SQLite";
    SQLite.pluginRef = "sqlitePlugin";
    SQLite.plugin = "cordova-sqlite-storage";
    SQLite.repo = "https://github.com/litehelpers/Cordova-sqlite-storage";
    SQLite.platforms = ["Android", "iOS", "macOS", "Windows"];
    SQLite = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SQLite);
    return SQLite;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NxbGl0ZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw0R0FPTixNQUFNLG9CQUFvQixDQUFDOztJQXlEMUIsc0JBQW1CLGVBQW9CO1FBQXBCLG9CQUFlLEdBQWYsZUFBZSxDQUFLO0lBQUcsQ0FBQztJQVEzQyxxQ0FBYyxhQUFDLFdBQTRDO0lBVTNELGtDQUFXLGFBQUMsRUFBK0I7SUFTM0Msc0NBQWUsYUFBQyxFQUFtQztJQU9uRCwyQ0FBb0I7SUFNcEIsMkJBQUk7SUFRSiw0QkFBSztJQVNMLGlDQUFVLGFBQUMsU0FBaUIsRUFBRSxNQUFjO0lBUzVDLCtCQUFRLGFBQUMsYUFBMEM7SUFPbkQsa0RBQTJCOzBCQXZFUCwwQ0FBZ0I7Ozs7OzswQkFDaEIsaUNBQU87Ozs7Ozt1QkFwRTdCOzs7O0lBMkw0QiwwQkFBaUI7Ozs7SUFVM0MsdUJBQU0sYUFBQyxNQUE0Qjs7O21EQUF5QjtnQkFDMUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO29CQUNqQyxZQUFZLENBQUMsWUFBWSxDQUN2QixNQUFNLEVBQ04sVUFBQyxFQUFPLElBQUssT0FBQSxPQUFPLENBQUMsSUFBSSxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBN0IsQ0FBNkIsRUFDMUMsTUFBTSxDQUNQLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLENBQUM7YUFDSjs7O0lBT0QseUJBQVE7SUFTUix5QkFBUTtJQVVSLCtCQUFjLGFBQUMsTUFBNEI7Ozs7OztJQTVDaEMsTUFBTTtRQURsQixVQUFVLEVBQUU7T0FDQSxNQUFNO2lCQTNMbkI7RUEyTDRCLGlCQUFpQjtTQUFoQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29yZG92YSxcbiAgQ29yZG92YUNoZWNrLFxuICBDb3Jkb3ZhSW5zdGFuY2UsXG4gIEluc3RhbmNlUHJvcGVydHksXG4gIElvbmljTmF0aXZlUGx1Z2luLFxuICBQbHVnaW5cbn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZGVjbGFyZSBjb25zdCBzcWxpdGVQbHVnaW46IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBTUUxpdGVEYXRhYmFzZUNvbmZpZyB7XG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBkYXRhYmFzZS4gRXhhbXBsZTogJ215LmRiJ1xuICAgKi9cbiAgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogTG9jYXRpb24gb2YgdGhlIGRhdGFiYXNlLiBFeGFtcGxlOiAnZGVmYXVsdCdcbiAgICovXG4gIGxvY2F0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgICogaU9TIERhdGFiYXNlIExvY2F0aW9uLiBFeGFtcGxlOiAnTGlicmFyeSdcbiAgICovXG4gIGlvc0RhdGFiYXNlTG9jYXRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBzdXBwb3J0IG9wZW5pbmcgcHJlLWZpbGxlZCBkYXRhYmFzZXMgd2l0aCBodHRwczovL2dpdGh1Yi5jb20vbGl0ZWhlbHBlcnMvY29yZG92YS1zcWxpdGUtZXh0XG4gICAqL1xuICBjcmVhdGVGcm9tTG9jYXRpb24/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBzdXBwb3J0IGVuY3J5cHRlZCBkYXRhYmFzZXMgd2l0aCBodHRwczovL2dpdGh1Yi5jb20vbGl0ZWhlbHBlcnMvQ29yZG92YS1zcWxjaXBoZXItYWRhcHRlclxuICAgKi9cbiAga2V5Pzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEYlRyYW5zYWN0aW9uIHtcbiAgZXhlY3V0ZVNxbDogKFxuICAgIHNxbDogYW55LFxuICAgIHZhbHVlcz86IGFueVtdLFxuICAgIHN1Y2Nlc3M/OiBGdW5jdGlvbixcbiAgICBlcnJvcj86IEZ1bmN0aW9uXG4gICkgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1FMaXRlVHJhbnNhY3Rpb24gZXh0ZW5kcyBEYlRyYW5zYWN0aW9uIHtcbiAgc3RhcnQ6ICgpID0+IHZvaWQ7XG4gIGFkZFN0YXRlbWVudDogRGJUcmFuc2FjdGlvblsnZXhlY3V0ZVNxbCddO1xuICBoYW5kbGVTdGF0ZW1lbnRTdWNjZXNzOiAoaGFuZGxlcjogRnVuY3Rpb24sIHJlc3BvbnNlOiBhbnkpID0+IHZvaWQ7XG4gIGhhbmRsZVN0YXRlbWVudEZhaWx1cmU6IChoYW5kbGVyOiBGdW5jdGlvbiwgcmVzcG9uc2U6IGFueSkgPT4gdm9pZDtcbiAgcnVuOiAoKSA9PiB2b2lkO1xuICBhYm9ydDogKHR4RmFpbHVyZTogYW55KSA9PiB2b2lkO1xuICBmaW5pc2g6ICgpID0+IHZvaWQ7XG4gIGFib3J0RnJvbVE6IChzcWxlcnJvcjogYW55KSA9PiB2b2lkO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFNRTGl0ZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfb2JqZWN0SW5zdGFuY2U6IGFueSkge31cblxuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGRhdGFiYXNlRmVhdHVyZXM6IHsgaXNTUUxpdGVQbHVnaW5EYXRhYmFzZTogYm9vbGVhbiB9O1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIG9wZW5EQnM6IGFueTtcblxuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBzeW5jOiB0cnVlXG4gIH0pXG4gIGFkZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uOiAodHg6IFNRTGl0ZVRyYW5zYWN0aW9uKSA9PiB2b2lkKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gZm4ge0Z1bmN0aW9ufVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgc3VjY2Vzc0luZGV4OiAyLFxuICAgIGVycm9ySW5kZXg6IDFcbiAgfSlcbiAgdHJhbnNhY3Rpb24oZm46ICh0eDogRGJUcmFuc2FjdGlvbikgPT4gdm9pZCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBmbiB7RnVuY3Rpb259XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVhZFRyYW5zYWN0aW9uKGZuOiAodHg6IFNRTGl0ZVRyYW5zYWN0aW9uKSA9PiB2b2lkKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBzeW5jOiB0cnVlXG4gIH0pXG4gIHN0YXJ0TmV4dFRyYW5zYWN0aW9uKCk6IHZvaWQge31cblxuICAvKipcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBvcGVuKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgY2xvc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZSBTUUwgb24gdGhlIG9wZW5lZCBkYXRhYmFzZS4gTm90ZSwgeW91IG11c3QgY2FsbCBgY3JlYXRlYCBmaXJzdCwgYW5kXG4gICAqIGVuc3VyZSBpdCByZXNvbHZlZCBhbmQgc3VjY2Vzc2Z1bGx5IG9wZW5lZCB0aGUgZGF0YWJhc2UuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgZXhlY3V0ZVNxbChzdGF0ZW1lbnQ6IHN0cmluZywgcGFyYW1zPzogYW55W10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gc3FsU3RhdGVtZW50cyB7c3RyaW5nW10gfCBzdHJpbmdbXVtdIHwgYW55W119XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgc3FsQmF0Y2goc3FsU3RhdGVtZW50czogKHN0cmluZyB8IHN0cmluZ1tdIHwgYW55KVtdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBzeW5jOiB0cnVlXG4gIH0pXG4gIGFib3J0YWxsUGVuZGluZ1RyYW5zYWN0aW9ucygpOiB2b2lkIHt9XG59XG5cbi8qKlxuICogQG5hbWUgU1FMaXRlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBY2Nlc3MgU1FMaXRlIGRhdGFiYXNlcyBvbiB0aGUgZGV2aWNlLlxuICpcbiAqIEB1c2FnZVxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNRTGl0ZSwgU1FMaXRlT2JqZWN0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zcWxpdGUvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNxbGl0ZTogU1FMaXRlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnNxbGl0ZS5jcmVhdGUoe1xuICogICBuYW1lOiAnZGF0YS5kYicsXG4gKiAgIGxvY2F0aW9uOiAnZGVmYXVsdCdcbiAqIH0pXG4gKiAgIC50aGVuKChkYjogU1FMaXRlT2JqZWN0KSA9PiB7XG4gKlxuICpcbiAqICAgICBkYi5leGVjdXRlU3FsKCdjcmVhdGUgdGFibGUgZGFuY2VNb3ZlcyhuYW1lIFZBUkNIQVIoMzIpKScsIFtdKVxuICogICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ0V4ZWN1dGVkIFNRTCcpKVxuICogICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xuICpcbiAqXG4gKiAgIH0pXG4gKiAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcbiAqXG4gKiBgYGBcbiAqXG4gKiBAY2xhc3Nlc1xuICogU1FMaXRlT2JqZWN0XG4gKiBAaW50ZXJmYWNlc1xuICogU1FMaXRlRGF0YWJhc2VDb25maWdcbiAqIFNRTGl0ZVRyYW5zYWN0aW9uXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU1FMaXRlJyxcbiAgcGx1Z2luUmVmOiAnc3FsaXRlUGx1Z2luJyxcbiAgcGx1Z2luOiAnY29yZG92YS1zcWxpdGUtc3RvcmFnZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbGl0ZWhlbHBlcnMvQ29yZG92YS1zcWxpdGUtc3RvcmFnZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdtYWNPUycsICdXaW5kb3dzJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1FMaXRlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogT3BlbiBvciBjcmVhdGUgYSBTUUxpdGUgZGF0YWJhc2UgZmlsZS5cbiAgICpcbiAgICogU2VlIHRoZSBwbHVnaW4gZG9jcyBmb3IgYW4gZXhwbGFuYXRpb24gb2YgYWxsIG9wdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9saXRlaGVscGVycy9Db3Jkb3ZhLXNxbGl0ZS1zdG9yYWdlI29wZW5pbmctYS1kYXRhYmFzZVxuICAgKlxuICAgKiBAcGFyYW0gY29uZmlnIHtTUUxpdGVEYXRhYmFzZUNvbmZpZ30gZGF0YWJhc2UgY29uZmlndXJhdGlvblxuICAgKiBAcmV0dXJuIFByb21pc2U8U1FMaXRlT2JqZWN0PlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGNyZWF0ZShjb25maWc6IFNRTGl0ZURhdGFiYXNlQ29uZmlnKTogUHJvbWlzZTxTUUxpdGVPYmplY3Q+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc3FsaXRlUGx1Z2luLm9wZW5EYXRhYmFzZShcbiAgICAgICAgY29uZmlnLFxuICAgICAgICAoZGI6IGFueSkgPT4gcmVzb2x2ZShuZXcgU1FMaXRlT2JqZWN0KGRiKSksXG4gICAgICAgIHJlamVjdFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZnkgdGhhdCBib3RoIHRoZSBKYXZhc2NyaXB0IGFuZCBuYXRpdmUgcGFydCBvZiB0aGlzIHBsdWdpbiBhcmUgaW5zdGFsbGVkIGluIHlvdXIgYXBwbGljYXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZWNob1Rlc3QoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQXV0b21hdGljYWxseSB2ZXJpZnkgYmFzaWMgZGF0YWJhc2UgYWNjZXNzIG9wZXJhdGlvbnMgaW5jbHVkaW5nIG9wZW5pbmcgYSBkYXRhYmFzZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZWxmVGVzdCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgZGF0YWJhc2VcbiAgICogQHBhcmFtIGNvbmZpZyB7U1FMaXRlRGF0YWJhc2VDb25maWd9IGRhdGFiYXNlIGNvbmZpZ3VyYXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGVsZXRlRGF0YWJhc2UoY29uZmlnOiBTUUxpdGVEYXRhYmFzZUNvbmZpZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let HomePage = class HomePage {
    constructor(sqlite, platform) {
        this.sqlite = sqlite;
        this.platform = platform;
        this.name_model = ""; // Input field model
        this.row_data = []; // Table rows
        this.database_name = "ipec.db"; // DB name
        this.table_name = "tbProdutor"; // Table name
        this.platform.ready().then(() => {
            this.createDB();
        }).catch(error => {
            console.log(error);
        });
    } // todos sao publicos como se fosse set get 
    createDB() {
        this.sqlite.create({
            name: this.database_name,
            location: 'default'
        })
            .then((db) => {
            this.databaseObj = db;
            alert('Database criado !');
        })
            .catch(e => {
            alert("erro : " + JSON.stringify(e)); // convert objeto para string
        });
    }
    createTable() {
        this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.table_name + ' (pid INTEGER PRIMARY KEY, Name varchar(255))', [])
            .then(() => {
            alert('Tabela criada !');
        })
            .catch(e => {
            alert("erro : " + JSON.stringify(e));
        });
    }
    insertRow() {
        if (!this.name_model.length) {
            alert("Enter Name");
            return;
        }
        this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (Name) VALUES ("' + this.name_model + '")', [])
            .then(() => {
            alert('Registro inserido !');
            this.getRows();
        })
            .catch(e => {
            alert("erro : " + JSON.stringify(e));
        });
    }
    editRow(item) {
        if (!this.name_model.length) {
            alert("Enter Name");
            return;
        }
        this.databaseObj.executeSql("update " + this.table_name + "set name=" + this.name_model + " WHERE pid = " + item.pid, [])
            .then(() => {
            alert('Registro alterado !');
            this.getRows();
        })
            .catch(e => {
            alert("erro : " + JSON.stringify(e));
        });
    }
    getRows() {
        this.databaseObj.executeSql("SELECT * FROM " + this.table_name, [])
            .then((res) => {
            this.row_data = []; // atribui row_data como array vazio para preencher 
            if (res.rows.length > 0) { // quantidade de registros da tabela
                for (var i = 0; i < res.rows.length; i++) {
                    this.row_data.push(res.rows.item(i)); // inserindo registro na array
                }
            }
        })
            .catch(e => {
            alert("erro : " + JSON.stringify(e));
        });
    }
    deleteRow(item) {
        this.databaseObj.executeSql("DELETE FROM " + this.table_name + " WHERE pid = " + item.pid, [])
            .then((res) => {
            alert("Registro removido !");
            this.getRows();
        })
            .catch(e => {
            alert("erro : " + JSON.stringify(e));
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map