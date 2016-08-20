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
var subscription_service_1 = require('./subscription.service');
require('./rxjs-operators');
var SubscriptionListComponent = (function () {
    function SubscriptionListComponent(subService) {
        this.subService = subService;
        this.mode = 'Observable';
    }
    SubscriptionListComponent.prototype.ngOnInit = function () { this.getSubscriptions(); };
    SubscriptionListComponent.prototype.getSubscriptions = function () {
        var _this = this;
        this.subService.getSubscriptions()
            .subscribe(function (subscriptions) { return _this.subscriptions = subscriptions; }, function (error) { return _this.errorMessage = error; });
    };
    SubscriptionListComponent = __decorate([
        core_1.Component({
            selector: 'subscription-list',
            templateUrl: './subscription-list.component.tpl.html',
            providers: [subscription_service_1.SubscriptionService]
        }), 
        __metadata('design:paramtypes', [subscription_service_1.SubscriptionService])
    ], SubscriptionListComponent);
    return SubscriptionListComponent;
}());
exports.SubscriptionListComponent = SubscriptionListComponent;
//# sourceMappingURL=subscription-list.component.js.map