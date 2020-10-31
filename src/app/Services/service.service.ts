import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { 
  
  }

  getAll(): Observable<ServiceService[]> {
    return this.http.get<ServiceService[]>('http://localhost:3000/cats');
  }
}
