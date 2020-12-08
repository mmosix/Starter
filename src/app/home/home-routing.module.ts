import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
  path: 'home',
  component: HomePage,
  children: [
  {
  path: 'default',
  loadChildren: () =>
  import('../pages/default/default.module').then(m => m.DefaultPageModule)
  }
  ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
