import { Routes, RouterModule } from '@angular/router';

import { PoliciesComponent } from './policies.component';
import { VisualizationComponent } from './visualization.component';
import { HomeComponent } from './home.component';
import {ManageSubscriptionsComponent} from "./manage-subscriptions.component";
import {ApplySubscriptionsComponent} from "./apply-subscriptions.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'manage-subscriptions',
        component: ManageSubscriptionsComponent
    },
    {
        path: 'apply-subscriptions',
        component: ApplySubscriptionsComponent
    },
    {
        path: 'policies',
        component: PoliciesComponent
    },
    {
        path: 'visualization',
        component: VisualizationComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);