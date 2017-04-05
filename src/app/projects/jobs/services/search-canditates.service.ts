import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchCanditatesService {

  private baseUrl: string;
  constructor(private http: Http) {
    this.baseUrl = 'https://randomuser.me/api/';
  }

  searchCandidates(params): Observable<any> {
    const results = `?results=${params.times}`;
    const gender = params.gender ? `&gender=${params.gender}` : '';
    const nat = params.nationality ? `&nat=${params.nationality}` : '';

    return this.http.get(`${this.baseUrl}${results}${gender}${nat}`)
        .map(response => response.json());
  }

}
