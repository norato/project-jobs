import { OfferComponent } from './jobs/offer/offer.component';
import { NewJobComponent } from './jobs/new-job/new-job.component';
import { ProjectFormComponent } from './project/project-form/project-form.component';
import { ProjectsComponent } from './projects/projects.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const projectsRoutes: Routes = [
  { path: 'new', component: ProjectFormComponent},
  { path: ':project_id/jobs/new', component: NewJobComponent},
  { path: ':project_id/jobs/:offer_id', component: OfferComponent},
  { path: '', component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(projectsRoutes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
