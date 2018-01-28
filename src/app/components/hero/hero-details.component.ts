import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../../classes/Hero';
import { HeroService } from '../../hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.hero = new Hero();
    } else {
      this.heroService.getHero(id)
        .then(h => this.hero = {...h});
    }
  }

  goBack(): void {
    this.location.back();
  }

  upvoteHero(): void {
    this.heroService.upvoteHero(this.hero.id)
      .then(() => this.hero.upvotes++);
  }

  downvoteHero(): void {
    this.heroService.downvoteHero(this.hero.id)
      .then(() => this.hero.upvotes--)
      .catch(() => console.error('cannot downvote'));
  }

  saveHero(): void {
    this.heroService.updateHero(this.hero)
      .then(() => this.goBack())
      .catch(() => console.error('cannot update'));
  }

}
