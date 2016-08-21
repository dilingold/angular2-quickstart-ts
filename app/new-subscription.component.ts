import { Component } from '@angular/core';

import './rxjs-operators';

import { Subscription } from './subscription';
import { SubscriptionService } from './subscription.service';

@Component({
  selector: 'new-subscription',
  templateUrl: './new-subscription.component.tpl.html',
  providers: [SubscriptionService]
})
export class NewSubscriptionComponent {
  errorMessage: string;
  subscriptions: Subscription[];
  mode = 'Observable';

  constructor (private subService: SubscriptionService) {}

  addSubscription (subName: string, groupId: string, sensorId: string) {
    if (!subName || !groupId || !sensorId) { return; }
    this.subService.addSubscription(subName, groupId, sensorId)
        .subscribe(
            subscription => this.subscriptions.push(subscription),
            error => this.errorMessage = <any>error);
  }
}