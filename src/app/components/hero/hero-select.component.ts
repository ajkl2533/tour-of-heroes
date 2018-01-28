import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../../classes/Hero';
import { HeroService } from '../../hero.service';

@Component({
  selector: 'app-hero-select',
  templateUrl: './hero-select.component.html',
  styleUrls: ['./hero-select.component.scss']
})
export class HeroSelectComponent implements OnInit {
  @Input() hero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

  downvote() {
    this.heroService.downvoteHero(this.hero.id);
  }

  upvote() {
    this.heroService.upvoteHero(this.hero.id);
  }
}
