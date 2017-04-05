import { Observable } from 'rxjs/Rx';
import { OnDestroy } from '@angular/core/core';
import { ProjectsService } from './../services/projects.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  projects: Observable<Array<any>>;
  projectsSub;
  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projectsSub = this.projectsService.getProjects()
      .subscribe(
        projects => this.projects = projects
      );
  }

  ngOnDestroy() {
    this.projectsSub.unsubscribe();
  }


}
