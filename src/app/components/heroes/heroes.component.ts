import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  heros: any;

  constructor(private _heroesService: HeroesService) {
    this._heroesService.getHeros().subscribe(data => {
      this.heros = data;
    });
  }

  ngOnInit() {
  }



}
