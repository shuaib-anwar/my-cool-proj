import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';


const routes: Routes = [
	{
	    path: '',
	    //component: HomeComponent,
	    redirectTo: '/home',
	    pathMatch: 'full'
	},
	{
	  	path: 'home',
	  	component: HomeComponent
	},
	{
	  	path: 'dashboard',
	  	component: DashboardComponent
	},
	{
	    path: 'heroes',
	    component: HeroesComponent
	},
	{
		path: 'detail/:id',
		component: HeroDetailComponent
	},
	{
		path: 'crisis',
		component: CrisisCenterComponent
	}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}