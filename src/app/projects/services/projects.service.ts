import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectsService {

  private apiBase;

  constructor(private http: Http) {
    this.apiBase = environment.endpoint;
  }

  getProjects(): Observable<any> {
     return this.http.get(`${this.apiBase}/api/v1/projects`)
                  .map(response => response.json());
  }

  createProject(project): Observable<any> {
    const params = {
      name: project.name,
      description: project.description
    };
    return this.http.post(`${this.apiBase}/api/v1/projects`, params)
                  .map(response => response.json());
  }

}
