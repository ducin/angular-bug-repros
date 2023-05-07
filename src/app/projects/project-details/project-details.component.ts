import { Component, Input } from '@angular/core';
import { Project } from 'src/app/api/dto';
import { projectImageUrl } from './project-image';

@Component({
  selector: 'itcorpo-project-details',
  templateUrl: './project-details.component.html'
})
export class ProjectDetailsComponent {
  @Input()
  project: Project

  url(){
    return projectImageUrl(this.project)
  }
}
