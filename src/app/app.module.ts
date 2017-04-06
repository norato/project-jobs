import { AppChartsModule } from './charts/charts.module';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ChartsModule,
    AppChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
