import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private baseUrl = 'https://rlt-website-2.onrender.com';

  constructor(private http:HttpClient) { }

  submitForm(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/register`, data);
  
  }
}
