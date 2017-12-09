import { NgModule } from '@angular/core';



import {Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {HomeComponent} from './containers/home/home.component';
import {DashboardComponent} from './containers/home/dashboard/dashboard.component';

import { CanActivatePage } from './guards/guard-page';
import {TodoResolver, TodoResolver2, TodoResolver3, TodoResolver4} from './resolvers/myGetResolver';

const routes: Routes = [
  {path: '', component: HomeComponent,
    children: [
      {path: 'dashboard/:book', component: DashboardComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          todos: TodoResolver3,
        }
      },
      {path: 'dashboard/:book/:page', component: DashboardComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          todos: TodoResolver4,
        }
      },
      {path: 'dashboard', component: DashboardComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          todos: TodoResolver2,
        }
      },
    ],
    canActivateChild: [CanActivatePage],
    runGuardsAndResolvers: 'always',
    resolve: {
      todos: TodoResolver,
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    TodoResolver, TodoResolver2, TodoResolver3, TodoResolver4
  ]
})
export class AppRoutingModule { }
