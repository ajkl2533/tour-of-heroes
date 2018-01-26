import { Injectable } from '@angular/core';
import orderBy from 'lodash-es/orderBy';

import { Hero } from './classes/Hero';
import { heroes } from './data/heroes';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Promise<Hero[]> {
    return new Promise(resolve => {
      resolve(heroes);
    });
  }

  getTopHeroes(length: number = 4): Promise<Hero[]> {
    return new Promise(resolve => {
      const h = orderBy(heroes, ['upvotes', 'name'], ['desc', 'asc']);
      resolve(h.slice(0, length));
    });
  }

  getHero(id: number): Promise<Hero> {
    return new Promise(resolve => {
      const h = heroes.find(hero => hero.id === id);
      resolve(h);
    });
  }
}
