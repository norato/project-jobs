import { ProjectsService } from './../../services/projects.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
  projectForm;
  projectsServiceSub;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projectForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  submitForm(value) {
    this.projectsServiceSub = this.projectsService.createProject(value)
      .subscribe(
        project => {
          console.log(project);
        }
      )

  }

}
