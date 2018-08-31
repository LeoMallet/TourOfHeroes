import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { SidekickComponent } from './sidekick/sidekick.component';
import { SidekickDetailComponent } from './sidekick-detail/sidekick-detail.component';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'dasboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'detail-sidekick/:id', component: SidekickDetailComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'sidekicks', component: SidekickComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
