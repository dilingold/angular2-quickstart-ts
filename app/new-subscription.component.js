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
require('./rxjs-operators');
var subscription_service_1 = require('./subscription.service');
var NewSubscriptionComponent = (function () {
    function NewSubscriptionComponent(subService) {
        this.subService = subService;
        this.mode = 'Observable';
    }
    NewSubscriptionComponent.prototype.addSubscription = function (subName, groupId, sensorId) {
        var _this = this;
        if (!subName || !groupId || !sensorId) {
            return;
        }
        this.subService.addSubscription(subName, groupId, sensorId)
            .subscribe(function (subscription) { return _this.subscriptions.push(subscription); }, function (error) { return _this.errorMessage = error; });
    };
    NewSubscriptionComponent = __decorate([
        core_1.Component({
            selector: 'new-subscription',
            templateUrl: './new-subscription.component.tpl.html',
            providers: [subscription_service_1.SubscriptionService]
        }), 
        __metadata('design:paramtypes', [subscription_service_1.SubscriptionService])
    ], NewSubscriptionComponent);
    return NewSubscriptionComponent;
}());
exports.NewSubscriptionComponent = NewSubscriptionComponent;
//# sourceMappingURL=new-subscription.component.js.map