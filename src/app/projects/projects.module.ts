import { SearchCanditatesService } from './jobs/services/search-canditates.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsService } from './services/projects.service';
import { ProjectsRoutingModule } from './projects.routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectFormComponent } from './project/project-form/project-form.component';
import { NewJobComponent } from './jobs/new-job/new-job.component';
import { FormComponent } from './jobs/form/form.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ProjectsComponent,
    ProjectFormComponent,
    NewJobComponent,
    FormComponent,
  ],
  providers: [
    ProjectsService,
    SearchCanditatesService
  ]
})
export class ProjectsModule { }
