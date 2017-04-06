import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: 'projects', loadChildren: 'app/projects/projects.module#ProjectsModule'},
  { path: 'jobs', loadChildren: 'app/jobs/jobs.module#JobsModule'},
  { path: '', redirectTo: 'projects', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
