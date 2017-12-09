import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { DashboardComponent } from './containers/home/dashboard/dashboard.component';
import { StoreModule } from '@ngrx/store';
import {reducers} from './store/reducers/reducersIndex';
import {FormsModule} from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {CanActivatePage} from './guards/guard-page';
import {HttpClientModule} from '@angular/common/http';
import {TodoResolver} from './resolvers/myGetResolver';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),
  ],
  providers: [CanActivatePage],
  bootstrap: [AppComponent]
})
export class AppModule { }
