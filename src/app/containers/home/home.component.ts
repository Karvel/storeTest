import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { INCREMENT, DECREMENT, RESET } from '../../store/reducers/counter/couter';


import { UPDATE_NAME, UPDATE_FINGERPRINT, UPDATE_TOKEN } from '../../store/reducers/user/user';
import {UpdateName} from '../../store/reducers/user/user-actions/user-actions';
import {ActivatedRoute, Router} from '@angular/router';

export interface AppState {
  counter: number;
  user: Object;
  router: Object;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  counter: Observable<number>;
  user: Observable<Object>;
  name = 'test';
  route = '';
  routerState: Observable<Object>;
  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute) {
    this.counter = store.select('counter');
    this.user = store.select('user');
    this.routerState = store.select('router');
  }

  ngOnInit() {
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }

  updateUserName(event) {
    if (!this.name || event.key !== 'Enter') { return; }
    console.log('this.name', this.name)
    this.store.dispatch(new UpdateName({name: this.name}));
  }

  routerGo() {
   console.log('go');
  }

}
