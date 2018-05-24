import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService } from './../services/hero.service';
import { Hero } from './../services/hero';

@Component({
	moduleId: module.id,
  	selector: 'hero-detail',
  	templateUrl: 'hero-detail.component.html',
  	styleUrls: ['hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location
	) {}

	goBack(): void {
		this.location.back();
	}

	ngOnInit(): void {
		this.route.params
		    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
		    .subscribe(hero => this.hero = hero);
	}

	@Input() hero: Hero;
}