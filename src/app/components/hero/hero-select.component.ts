import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Hero } from '../../classes/Hero';
import { HeroService } from '../../hero.service';

@Component({
  selector: 'app-hero-select',
  templateUrl: './hero-select.component.html',
  styleUrls: ['./hero-select.component.scss']
})
export class HeroSelectComponent implements OnInit {
  @Input() hero: Hero;
  @Output() deleted: EventEmitter<any> = new EventEmitter();

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

  downvote() {
    this.heroService.downvoteHero(this.hero.id);
  }

  upvote() {
    this.heroService.upvoteHero(this.hero.id);
  }

  delete() {
    this.heroService.deleteHero(this.hero.id)
      .then(() => this.deleted.emit());
  }
}
