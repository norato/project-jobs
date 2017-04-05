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
     return this.http.get('http://lvh.me:3001/api/v1/projects')
                  .map(response => response.json());
  }

}
