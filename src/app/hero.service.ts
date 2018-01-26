import { Injectable } from '@angular/core';

import { Hero } from './classes/Hero';
import { heroes } from './data/heroes';
import { resolve } from 'q';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Promise<Hero[]> {
    return new Promise(resolve => {
      resolve(heroes);
    });
  }

  getHero(id: number): Promise<Hero> {
    return new Promise(resolve => {
      const h = heroes.find(hero => hero.id === id);
      console.log(h);
      resolve(h);
    });
  }
}
