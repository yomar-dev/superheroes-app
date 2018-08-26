import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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

  id: string;

  constructor(
                private _heroesService: HeroesService,
                private router: Router,
                private activatedRoute: ActivatedRoute
              ) {
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];

      if (this.id !== 'new') {
        this._heroesService.getHero(this.id).subscribe((data: any) => this.hero = data);
      }
    });
  }

  ngOnInit() {
  }

  save() {
    if (this.id === 'new') {
      this._heroesService.newHero(this.hero)
        .subscribe((data: any) => {
          this.router.navigate(['/hero', data.name]);
        },
        error => {
          console.error('Errors => ', error);
        });
    } else {
      this._heroesService.updateHero(this.hero, this.id)
        .subscribe((data: any) => {
        },
        error => {
          console.error('Errors => ', error);
        });
    }
  }

  addNew(form: NgForm) {
    this.router.navigate(['/hero', 'new']);
    form.reset({
      house: 'Marvel'
    });
  }

}
