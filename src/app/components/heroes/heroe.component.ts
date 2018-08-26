import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';

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

  constructor() { }

  ngOnInit() {
  }

  save() {
    console.log(this.hero);
  }

}
