import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SidekickComponent } from './sidekick/sidekick.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { SidekickDetailComponent } from './sidekick-detail/sidekick-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    SidekickComponent,
    HeroDetailComponent,
    SidekickDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
