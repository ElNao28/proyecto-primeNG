import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SpeedDialModule } from 'primeng/speeddial';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    CarouselModule,
    TagModule,
    ButtonModule,
    InputTextModule,
    SplitButtonModule,
    SpeedDialModule,
    MenubarModule,
    CardModule

  ]
})
export class PrimerNgModule { }
