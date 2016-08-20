"use strict";
var router_1 = require('@angular/router');
var policies_component_1 = require('./policies.component');
var visualization_component_1 = require('./visualization.component');
var home_component_1 = require('./home.component');
var manage_subscriptions_component_1 = require("./manage-subscriptions.component");
var apply_subscriptions_component_1 = require("./apply-subscriptions.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'manage-subscriptions',
        component: manage_subscriptions_component_1.ManageSubscriptionsComponent
    },
    {
        path: 'apply-subscriptions',
        component: apply_subscriptions_component_1.ApplySubscriptionsComponent
    },
    {
        path: 'policies',
        component: policies_component_1.PoliciesComponent
    },
    {
        path: 'visualization',
        component: visualization_component_1.VisualizationComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map