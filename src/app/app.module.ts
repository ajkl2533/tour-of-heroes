import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { HeroService } from './hero.service';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent } from './components/hero/heroes.component';
import { HeroDetailsComponent } from './components/hero/hero-details.component';
import { HeroSelectComponent } from './components/hero/hero-select.component';
import { HeaderComponent } from './components/header/header.component';
import { ReplaceNewlinesPipe } from './pipes/replace-newlines.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    DashboardComponent,
    HeroSelectComponent,
    HeaderComponent,
    ReplaceNewlinesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
