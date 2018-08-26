import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from '../interfaces/hero.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  herosURL = 'https://superheroes-app.firebaseio.com/heros.json';

  constructor(private http: HttpClient) { }

  newHero(hero: Hero) {
    const body = JSON.stringify(hero);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.herosURL, body, { headers }).pipe(map( res => {
      return res;
    }));
  }
}
