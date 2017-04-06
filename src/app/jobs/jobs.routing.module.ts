import { NewJobComponent } from './new-job/new-job.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const jobsRoutes: Routes = [
  { path: '', component: NewJobComponent},
];

@NgModule({
  imports: [RouterModule.forChild(jobsRoutes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
