import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../Response';
import { Moments } from '../Moments';

@Injectable({
  providedIn: 'root',
})
export class MomentsService {
  private baseApiUrl = 'http://localhost:3333/';
  private apiUrl = `${this.baseApiUrl}api/moments`;

  constructor(private http: HttpClient) {}

  getMoments(): Observable<Response<Moments[]>> {
    return this.http.get<Response<Moments[]>>(this.apiUrl);
  }

  createMoment(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }
}
