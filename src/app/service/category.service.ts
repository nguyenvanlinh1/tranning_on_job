import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../types/DataCategory';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  API_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getCategory(): Observable<Category> {
    return this.http.get<Category>(`${this.API_URL}/category`);
  }
}
