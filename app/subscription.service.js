"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var Observable_1 = require('rxjs/Observable');
var SubscriptionService = (function () {
    function SubscriptionService(http) {
        this.http = http;
        this.subscriptionUrl = 'http://localhost:5002/subscriptions';
    }
    SubscriptionService.prototype.getSubscriptions = function () {
        return this.http.get(this.subscriptionUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    SubscriptionService.prototype.addSubscription = function (subName, groupId, sensorId) {
        var body = JSON.stringify({ subName: subName, groupId: groupId, sensorId: sensorId });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.subscriptionUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    SubscriptionService.prototype.extractData = function (res) {
        var body = res.json();
        return body.subscription || {};
    };
    SubscriptionService.prototype.extractData1 = function (res) {
        var body = res.json();
        return body || {};
    };
    SubscriptionService.prototype.handleError = function (error) {
        //In real world app use a remote logging infrastructure
        //and dig deeper in to the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? '${error.status} - ${error.statusText}' : 'Server error';
        console.error(errMsg); //log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    SubscriptionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SubscriptionService);
    return SubscriptionService;
}());
exports.SubscriptionService = SubscriptionService;
//# sourceMappingURL=subscription.service.js.map