import { Component, OnInit } from '@angular/core';
import { Hero } from './../services/hero';
import { HeroService } from './../services/hero.service';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'my-heroes',
	templateUrl: 'heroes.component.html',
	styleUrls: ['heroes.component.css'],
	providers: [HeroService]
})

export class HeroesComponent implements OnInit {
	title = 'Tour of Heroes';
	heroes: Hero[];
	selectedHero: Hero;

	constructor(
		private router: Router,
		private heroService: HeroService
	) { }
	
	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedHero.id]);
	}

	onSelect(hero: Hero): void {
	  this.selectedHero = hero;
	}

	ngOnInit(): void {
		this.getHeroes();
	}
}