import { Observable } from 'rxjs/Rx';
import { environment } from './../../../../environments/environment';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OffersService {

  private apiBase;

  constructor(private http: Http) {
    this.apiBase = environment.endpoint;
  }

  saveOffer(projectId, offer): Observable<any> {
    const params = {
      name: offer.name,
      description: offer.description,
      nationality: offer.nationality,
      gender: offer.gender,
      positions: offer.positions,
      factor: offer.factor,
      candidates: offer.candidates
    };
    return this.http.post(`${this.apiBase}/api/v1/projects/${projectId}/jobs`, params)
                  .map(response => response.json());
  }

}
