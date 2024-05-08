import { Component, OnInit, signal } from '@angular/core';
import { ProjectsService } from 'src/app/api/projects.service';

import { Observable } from 'rxjs';

import { Project } from 'src/app/api/dto';

@Component({
  selector: 'itcorpo-project-listing',
  templateUrl: './project-listing.component.html',
  styleUrls: ['./project-listing.component.css']
})
export class ProjectListingComponent implements OnInit {
  projects$!: Observable<Project[]>

  constructor(
    private projectSvc: ProjectsService,
  ) { }

  ngOnInit() {
    this.projects$ = this.projectSvc.getAllProjects()
  }

  value = signal('')

}
