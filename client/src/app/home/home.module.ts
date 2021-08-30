import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
//import { NgMasonryGridModule } from 'ng-masonry-grid';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    //NgMasonryGridModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
