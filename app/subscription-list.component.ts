import { Component, OnInit } from '@angular/core';

import { Subscription } from './subscription';
import { SubscriptionService } from './subscription.service';
import './rxjs-operators';

@Component({
  selector: 'subscription-list',
  templateUrl: './subscription-list.component.tpl.html',
  providers: [SubscriptionService]
})
export class SubscriptionListComponent implements OnInit {
  errorMessage: string;
  subscriptions: Subscription[];
  mode = 'Observable';

  constructor (private subService: SubscriptionService) {}

  ngOnInit() { this.getSubscriptions(); }

  getSubscriptions() {
    this.subService.getSubscriptions()
        .subscribe(
            subscriptions => this.subscriptions = subscriptions,
            error => this.errorMessage = <any>error);
  }

}