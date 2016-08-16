import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Router } from '@angular/router';


@Component({
    selector: 'my-heroes',
    templateUrl: '../html/heroes.component.html',
    styleUrls: ['../css/heroes.component.css']
})

export class HeroesComponent implements OnInit { 

    public heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService, private router: Router) { }

    onSelect(hero: Hero) { 
        this.selectedHero = hero; 
    }

    getHeroes(){
        this.heroService.getHeroes().then((heroes) => { this.heroes = heroes  });
    }

    ngOnInit(){
        this.getHeroes();
    }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}