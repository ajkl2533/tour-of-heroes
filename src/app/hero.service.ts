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

  private getNextIndex(): number {
    const lastIndex = Math.max.apply(Math, heroes.map(hero => hero.id));
    return lastIndex + 1;
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

  updateHero(hero: Hero): Promise<Hero> {
    return new Promise((resolve, reject) => {
      let h: Hero;
      if (hero.id) {
        h = this.findHero(hero.id);

        !h ? reject() : resolve({...h, ...hero});
      } else {
        h = {...hero, id: this.getNextIndex()};

        heroes.push(h);
        resolve(h);
      }
    });
  }
}
