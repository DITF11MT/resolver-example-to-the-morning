import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos');
  }
}
