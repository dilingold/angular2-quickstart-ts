import { NgModule }      from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { routing } from './app.routing';

import { HomeButtonComponent } from "./homebuttons.component";
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab.component';
import { HomeComponent } from './home.component';
import { SetConfigComponent } from './setconfig.component';
import {ManageSubscriptionsComponent} from "./manage-subscriptions.component";
import {ApplySubscriptionsComponent} from "./apply-subscriptions.component";
import {SubscriptionListComponent} from "./subscription-list.component";
import { SubscriptionService } from './subscription.service';
import { NewSubscriptionComponent } from './new-subscription.component';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      routing,
      HttpModule,
      JsonpModule
  ],
  declarations: [
      AppComponent,
      ManageSubscriptionsComponent,
      SubscriptionListComponent,
      ApplySubscriptionsComponent,
      HomeButtonComponent,
      TabsComponent,
      TabComponent,
      HomeComponent,
      SetConfigComponent,
      NewSubscriptionComponent
  ],
    providers: [
        SubscriptionService,
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
