import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from '../interfaces/hero.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  herosURL = 'https://superheroes-app.firebaseio.com/heros.json';
  heroURL = 'https://superheroes-app.firebaseio.com/heros';

  constructor(private http: HttpClient) { }

  newHero(hero: Hero) {
    const body = JSON.stringify(hero);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.herosURL, body, { headers }).pipe(map( res => {
      return res;
    }));
  }

  updateHero(hero: Hero, key$: string) {
    const body = JSON.stringify(hero);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const URL = `${ this.heroURL }/${ key$ }.json`;

    return this.http.put(URL, body, { headers }).pipe(map( res => {
      return res;
    }));
  }

  getHero(key$: string) {
    const URL = `${ this.heroURL }/${ key$ }.json`;
    return this.http.get(URL).pipe(map(data => data));
  }

  getHeros() {
    return this.http.get(this.herosURL).pipe(map(data => data));
  }

  deleteHero(key$: string) {
    const URL = `${ this.heroURL }/${ key$ }.json`;
    return this.http.delete(URL).pipe(map(data => data));
  }
}
