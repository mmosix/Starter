import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { HomeGuard } from '../guards/home.guard';
import { UserDataResolver } from '../resolvers/user-data.resolver';

const routes: Routes = [
  {
  path: 'home',
  component: HomePage,
  canActivate: [HomeGuard],
  resolve:{
  userData: UserDataResolver
  },
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
