import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
    <h1>{{title}} Hello</h1>
    <nav>
	    <a routerLink="/" routerLinkActive="active">Home</a>
	    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
	    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/crisis" routerLinkActive="active">Crisis Center</a>
    </nav>
   	<router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css'],
})

export class AppComponent {
  title = 'Tour of Heroes';
}