import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPage } from './index.page';


const routes: Routes = [
  {
  path: '',
  component: IndexPage,
  children: [
  {
  path: '',
  loadChildren: () =>
  import('../pages/welcome/welcome.module').then(
  m => m.WelcomePageModule
  )
  },
  {
  path: 'auth',
  loadChildren: () =>
  import('../auth/auth/auth.module').then(m => m.AuthPageModule)
  },
  {
  path: 'type',
  loadChildren: () =>
  import('../auth/type/type.module').then(m => m.TypePageModule)
  },
  {
  path: 'login',
  loadChildren: () =>
  import('../auth/login/login.module').then(m => m.LoginPageModule)
  },
  {
  path: 'signup/:type',
  loadChildren: () =>
  import('../auth/signup/signup.module').then(m => m.SignupPageModule)
  }
  ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
