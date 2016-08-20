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
var TabsComponent = (function () {
    function TabsComponent() {
        this.tabs = [];
    }
    TabsComponent.prototype.addTab = function (tab) {
        if (this.tabs.length === 0) {
            tab.selected = true;
        }
        this.tabs.push(tab);
    };
    TabsComponent.prototype.selectTab = function (tab) {
        this.tabs.forEach(function (tab) {
            tab.selected = false;
        });
        tab.selected = true;
    };
    TabsComponent = __decorate([
        core_1.Component({
            selector: 'tabs',
            templateUrl: './tabs.component.tpl.html',
            styleUrls: ['./tabs.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=tabs.component.js.map