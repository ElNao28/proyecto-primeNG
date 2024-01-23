import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './pages/error-404/error-404.component';
import { Error400Component } from './pages/error-400/error-400.component';
import { Error500Component } from './pages/error-500/error-500.component';



@NgModule({
  declarations: [
    Error404Component,
    Error400Component,
    Error500Component
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
