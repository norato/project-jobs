import { ProjectFormComponent } from './project/project-form/project-form.component';
import { ProjectsComponent } from './projects/projects.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const projectsRoutes: Routes = [
  { path: 'new', component: ProjectFormComponent},
  { path: '', component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(projectsRoutes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
