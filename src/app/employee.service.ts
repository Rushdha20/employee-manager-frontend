import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl = '';

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/employee/all`);
  }
}
