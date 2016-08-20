import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Subscription } from './subscription';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SubscriptionService {
    constructor (private http: Http) {}

    private subscriptionUrl = 'http://localhost:5002/CreatePolicy';

    getSubscriptions(): Observable<Subscription[]> {
        return this.http.get(this.subscriptionUrl)
            .map(this.extractData);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body.Policies || { };
    }

    private handleError (error: any) {
        //In real world app use a remote logging infrastructure
        //and dig deeper in to the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? '${error.status} - ${error.statusText}' : 'Server error';
        console.error(errMsg); //log to console instead
        return Observable.throw(errMsg);
    }
}