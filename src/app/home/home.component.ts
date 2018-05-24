import { Component, OnInit } from '@angular/core';
import { Hero } from './../services/hero';

@Component({
	moduleId: module.id,
	//selector: 'my-home',
	template: `
	  	<h2>{{title}}</h2>
  	`,
	styleUrls: ['home.component.css'],
	providers: []
})

export class HomeComponent {
	title = 'Welcome to Home';
	
	constructor() { }
}