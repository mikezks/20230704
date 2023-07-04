import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../model/flight';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private http = inject(HttpClient);

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'https://demo.angulararchitects.io/api/flight';

    const params = new HttpParams()
      .set('from', from)
      .set('to', to);

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.get<Flight[]>(url, { params, headers })
  }
}
