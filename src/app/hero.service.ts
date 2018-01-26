import { Injectable } from '@angular/core';
import orderBy from 'lodash-es/orderBy';

import { Hero } from './classes/Hero';
import { heroes } from './data/heroes';

@Injectable()
export class HeroService {

  constructor() { }

  private findHero(id: number): Hero {
    return heroes.find(hero => hero.id === id);
  }

  private canDownvote(id: number): boolean {
    const h = this.findHero(id);

    return h.upvotes > 0;
  }

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
      const h = this.findHero(id);
      resolve(h);
    });
  }

  upvoteHero(id: number): Promise<boolean> {
    return new Promise(resolve => {
      this.findHero(id).upvotes++;
      resolve(true);
    });
  }

  downvoteHero(id: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this.canDownvote(id)) {
        this.findHero(id).upvotes--;
        resolve(true);
      } else {
        reject(false);
      }
    });
  }
}
