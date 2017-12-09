import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../home.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  public router;
  public todos = [];

  constructor( private activatedRoute: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit() {
    console.log('router data', this.activatedRoute.snapshot.data);
    this.todos = this.activatedRoute.snapshot.data['todos'];
    this.router = this.store.select('router');
    this.router.subscribe( router => {
      this.todos = this.activatedRoute.snapshot.data['todos'];
    });
  }

  ngOnDestroy() {
    if (this.router && this.router.unsubscribe) {
      this.router.unsubscribe();
    }

  }

}
