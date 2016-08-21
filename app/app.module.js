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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var homebuttons_component_1 = require("./homebuttons.component");
var tabs_component_1 = require('./tabs.component');
var tab_component_1 = require('./tab.component');
var home_component_1 = require('./home.component');
var setconfig_component_1 = require('./setconfig.component');
var manage_subscriptions_component_1 = require("./manage-subscriptions.component");
var apply_subscriptions_component_1 = require("./apply-subscriptions.component");
var subscription_list_component_1 = require("./subscription-list.component");
var subscription_service_1 = require('./subscription.service');
var new_subscription_component_1 = require('./new-subscription.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing,
                http_1.HttpModule,
                http_1.JsonpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                manage_subscriptions_component_1.ManageSubscriptionsComponent,
                subscription_list_component_1.SubscriptionListComponent,
                apply_subscriptions_component_1.ApplySubscriptionsComponent,
                homebuttons_component_1.HomeButtonComponent,
                tabs_component_1.TabsComponent,
                tab_component_1.TabComponent,
                home_component_1.HomeComponent,
                setconfig_component_1.SetConfigComponent,
                new_subscription_component_1.NewSubscriptionComponent
            ],
            providers: [
                subscription_service_1.SubscriptionService,
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map