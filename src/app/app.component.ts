import { Component } from '@angular/core';
import {
  ActivatedRoute, ActivatedRouteSnapshot, ActivationEnd, ActivationStart, ChildActivationEnd, ChildActivationStart,
  GuardsCheckEnd,
  GuardsCheckStart,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart, ResolveEnd, ResolveStart,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router, RouterEvent,
  RouterStateSnapshot,
  RoutesRecognized
} from '@angular/router';
import {LocationStrategy} from '@angular/common';
import {Store} from '@ngrx/store';
import {AppState} from './containers/home/home.component';
import {
  NAVIGATION_CANCEL, NAVIGATION_END, NAVIGATION_RECOGNIZED,
  NAVIGATION_START
} from './store/reducers/router/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private locationStrategy: LocationStrategy
  ) {

    this.router.events.subscribe( ( event: RouterEvent ) => {
      // console.log('event', event);
      // console.log('this.route', this.route);
      // console.log('this.route.query', this.route.snapshot.queryParams);
      // console.log('this.route.params', this.route.snapshot.params);
      const state = router.routerState;
      const snapshot = state.snapshot;
      let route = snapshot.root;
      while (route.firstChild) {
        route = route.firstChild;
      }

      const url = event.url;
      const queryParams = snapshot.root.queryParams;
      const params = route.params;
      console.log( event);
      if (event instanceof NavigationStart) {
        console.log('NavigationStart');
        this.store.dispatch({type: NAVIGATION_START, payload: { url,  params, queryParams} });
      }

      if (event instanceof RoutesRecognized) {
        console.log('RoutesRecognized');
        // this.store.dispatch({type: NAVIGATION_RECOGNIZED, payload: {url,  params, queryParams} });
      }

      if (event instanceof GuardsCheckStart) {
        console.log('GuardsCheckStart');
      }

      if (event instanceof ChildActivationStart) {
        console.log('ChildActivationStart');
      }
      if (event instanceof ActivationStart) {
        console.log('ActivationStart');
      }

      if (event instanceof GuardsCheckEnd) {
        console.log('GuardsCheckEnd');
      }

      if (event instanceof ResolveStart) {
        console.log('ResolveStart');
      }

      if (event instanceof ResolveEnd) {
        console.log('ResolveEnd');
      }

      if (event instanceof ActivationEnd) {
        console.log('ActivationEnd');
      }

      if (event instanceof ChildActivationEnd) {
        console.log('ChildActivationEnd');
      }

      if (event instanceof RouteConfigLoadStart) {
        console.log('RouteConfigLoadStart');
      }

      if (event instanceof RouteConfigLoadEnd) {
        console.log('RouteConfigLoadEnd');
      }

      if (event instanceof NavigationEnd) {
        console.log('NavigationEnd');
        this.store.dispatch({type: NAVIGATION_END, payload: {url,  params, queryParams} });
      }

      if (event instanceof NavigationCancel) {
        console.log('NavigationCancel');
        this.store.dispatch({type: NAVIGATION_CANCEL, payload: {url,  params, queryParams} });
      }

      if (event instanceof NavigationError) {
        console.log('NavigationError');
      }


      // console.log('location', this.locationStrategy);


      console.log('all', url,  params, queryParams);
      console.log('________________');

    });

    // this.route.paramMap.subscribe(params => {
    //   console.log('params', params);
    // });
  }
}
