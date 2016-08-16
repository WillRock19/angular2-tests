import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({

    selector: 'my-dashboard',
    templateUrl: '../html/dashboard.component.html'
})

export class DashboardComponent implements OnInit{

    heroes: Hero[] = [];

    constructor(private heroService: HeroService, private router: Router){ }

    ngOnInit(){
        this.heroService.getHeroes().then((list) => {
            this.heroes = list.slice(1, 5);
        });
    }

    gotoDetail(hero: Hero) {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}