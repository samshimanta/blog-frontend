import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private baseUrl = 'http://localhost:3000'; // Replace with your API base URL

  constructor(private http: HttpClient) {}

  // Example: GET request
  getData(endpoint: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${'users'}`);
  }

  // Example: POST request
  postData(endpoint: string, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${endpoint}`, data);
  }

  // Add more methods as needed (PUT, DELETE, etc.)
}

