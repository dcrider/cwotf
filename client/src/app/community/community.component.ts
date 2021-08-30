import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { CommunityService } from './community.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {

  constructor(private communityService: CommunityService, private activatedRoute: ActivatedRoute, 
    private bcService: BreadcrumbService) { 
    //this.bcService.set('@community', '');
  }

  ngOnInit(): void {
  }

}
