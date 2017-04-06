import { Router } from '@angular/router';
import { OnDestroy } from '@angular/core/core';
import { ProjectsService } from './../../services/projects.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit, OnDestroy {
  projectForm;
  projectsServiceSub;

  constructor(
    private projectsService: ProjectsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.projectForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }
  ngOnDestroy() {
    this.projectsServiceSub.unsubscribe();
  }

  submitForm(value) {
    this.projectsServiceSub = this.projectsService.createProject(value)
      .subscribe(
        project => {
          this.router.navigate(['../projects']);
        }
      );

  }

}
