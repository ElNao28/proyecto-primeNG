import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './shared/pages/error-404/error-404.component';
import { Error400Component } from './shared/pages/error-400/error-400.component';
import { Error500Component } from './shared/pages/error-500/error-500.component';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: '400',
    component: Error400Component
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '500',
    component: Error500Component
  },
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
