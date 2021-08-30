import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityComponent } from './community.component';
import { CommunityThreadComponent } from './community-thread/community-thread.component';
import { CommunityRoutingModule } from './community-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CommunityComponent,
    CommunityThreadComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CommunityRoutingModule
  ]
})
export class CommunityModule { }
