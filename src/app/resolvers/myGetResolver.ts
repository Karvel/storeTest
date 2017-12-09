

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {AppState} from '../containers/home/home.component';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TodoResolver implements Resolve<string> {
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    console.log('===============================================================resolver1');
    const router = this.store.select('router');


    return new Promise( (resolve, reject) => {
      router.subscribe( (url: any) => {

        console.log(JSON.stringify(url));

        if (url.to.url && url.to.url.indexOf('95') > -1) {
          console.log('true');
          this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(todos => {
            resolve(todos);
          });
        }else {
          console.log('false');
          resolve([]);
        }
      });
    });
  }
}

@Injectable()
export class TodoResolver2 implements Resolve<string> {
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    console.log('===============================================================resolver2')
    const router = this.store.select('router');


    return new Promise( (resolve, reject) => {
      router.subscribe( (url: any) => {

        console.log(JSON.stringify(url));

        if (url.to.url && url.to.url.indexOf('95') > -1) {
          console.log('true');
          this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(todos => {
            resolve(todos);
          });
        }else {
          console.log('false');
          resolve([]);
        }
      });
    });
  }
}

@Injectable()
export class TodoResolver3 implements Resolve<string> {
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {

    console.log('===============================================================resolver3');
    const router = this.store.select('router');


    return new Promise( (resolve, reject) => {
      router.subscribe( (url: any) => {

        console.log(JSON.stringify(url));

        if (url.to.url && url.to.url.indexOf('95') > -1) {
          console.log('true');
          this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(todos => {
            resolve(todos);
          });
        }else {
          console.log('false');
          resolve([]);
        }
      });
    });

  }
}

@Injectable()
export class TodoResolver4 implements Resolve<string> {
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    console.log('===============================================================resolver4')
    const router = this.store.select('router');


    return new Promise( (resolve, reject) => {
      router.subscribe( (url: any) => {

        console.log(JSON.stringify(url));

        if (url.to.url && url.to.url.indexOf('95') > -1) {
          console.log('true');
          this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(todos => {
            resolve(todos);
          });
        }else {
          console.log('false');
          resolve([]);
        }
      });
    });
  }
}

