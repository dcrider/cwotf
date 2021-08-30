import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path: '', component: BlogComponent, data: {breadcrumb: {alias: 'Blog'}}},
  {path: ':id', component: PostComponent, data: {breadcrumb: {alias: 'Post'}}},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BlogRoutingModule { }
