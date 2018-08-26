import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Hero } from '../../interfaces/hero.interface';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
  hero: Hero = {
    name: '',
    house: 'Marvel',
    bio: ''
  };

  constructor(private _heroesService: HeroesService, private router: Router) { }

  ngOnInit() {
  }

  save() {
    this._heroesService.newHero(this.hero)
        .subscribe((data: any) => {
          this.router.navigate(['/hero', data.name]);
        },
        error => {
          console.error('Errors => ', error);
        });
  }

}
