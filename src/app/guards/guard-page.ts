


import {Injectable} from '@angular/core';
import {CanActivateChild} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../containers/home/home.component';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';



@Injectable()
export class CanActivatePage implements CanActivateChild {
  private url: any = {};
  constructor(private store: Store<AppState>) {}

  canActivateChild(
  ): Promise<boolean> {


    const router = this.store.select('router');
    router.subscribe( url => {
      console.log('can url', JSON.stringify(url));
      this.url = url;
    })
    return new Promise((resolve, reject) => {
      setTimeout( () => {
        console.log('url', JSON.stringify(this.url));
        console.log('time');

        if (this.url.to.url.indexOf('99') > -1) {
          resolve(false);
        } else {
          resolve(true);
        }

      }, 5000);
    });

  }
}
