import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { SidekickComponent } from './sidekick/sidekick.component';

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'sidekicks', component: SidekickComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
