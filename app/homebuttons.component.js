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
var router_1 = require('@angular/router');
var ButtonContent = (function () {
    function ButtonContent() {
    }
    return ButtonContent;
}());
exports.ButtonContent = ButtonContent;
var HomeButtonComponent = (function () {
    function HomeButtonComponent(router) {
        this.router = router;
        this.buttons = BUTTONS;
    }
    HomeButtonComponent.prototype.goToManage = function () {
        this.router.navigate(['/manage-subscriptions']);
    };
    HomeButtonComponent.prototype.goToApply = function () {
        this.router.navigate(['/apply-subscriptions']);
    };
    HomeButtonComponent = __decorate([
        core_1.Component({
            selector: 'home-buttons',
            template: "\n            <div id=\"content1\">\n                    <button (click)=\"goToManage()\" class=\"home-button\">Manage Subscriptions</button>\n                    <div class=\"divider\"></div>\n                    <button (click)=\"goToApply()\" class=\"home-button\">Apply Subscriptions</button>\n                </div>\n            "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HomeButtonComponent);
    return HomeButtonComponent;
}());
exports.HomeButtonComponent = HomeButtonComponent;
var BUTTONS = [
    {
        name: "Policy"
    },
    {
        name: "Visualization"
    }
];
//# sourceMappingURL=homebuttons.component.js.map