import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsService } from './services/projects.service';
import { ProjectsRoutingModule } from './projects.routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectFormComponent } from './project/project-form/project-form.component';

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
  ],
  providers: [
    ProjectsService
  ]
})
export class ProjectsModule { }
