import { ProjectsService } from './services/projects.service';
import { ProjectsRoutingModule } from './projects.routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ],
  declarations: [
    ProjectsComponent
  ],
  providers: [
    ProjectsService
  ]
})
export class ProjectsModule { }
