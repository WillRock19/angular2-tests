import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: '../html/hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {

    @Input()
    hero: Hero;

    constructor(private heroService: HeroService, private route: ActivatedRoute) { }

    ngOnInit(){
        this.route.params.forEach((params: Params) => {
            let id = +params['id']; //+ sign is converting the string id to an number element
            this.heroService.getHero(id).then((hero) => {
                this.hero = hero;
            });
        });   
    }

    goBack(){
        window.history.back();
    }
 }