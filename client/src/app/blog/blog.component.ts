import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  

  constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute, 
    private bcService: BreadcrumbService) { }

  ngOnInit(): void {
  }

}
