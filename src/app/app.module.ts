import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { HomeComponent }   from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent }     from './heroes/heroes.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center/crisis-center-home.component';


import { HeroService } from './services/hero.service';

import { AppRoutingModule }   from './app-routing.module';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule,
	  AppRoutingModule	
  ],
  declarations: [
  	AppComponent,
  	HomeComponent,
  	DashboardComponent,
  	HeroDetailComponent,
  	HeroesComponent,
    CrisisCenterComponent,
    CrisisCenterHomeComponent
  ],
  providers: [ HeroService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }