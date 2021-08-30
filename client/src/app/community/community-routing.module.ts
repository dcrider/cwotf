import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './community.component';
import { CommunityThreadComponent } from './community-thread/community-thread.component';

const routes: Routes = [
  {path: '', component: CommunityComponent, data: {breadcrumb: {alias: 'Community'}}},
  {path: ':id', component: CommunityThreadComponent, data: {breadcrumb: {alias: 'Thread'}}},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CommunityRoutingModule { }
