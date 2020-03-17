import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from './info';
import { Observable } from 'rxjs';
import { InfoPost } from './infopost';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  private _url: string = "https://jsonplaceholder.typicode.com/users";
  private _urlpost: string = "https://jsonplaceholder.typicode.com/posts?userId=";

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<Info[]>{
    return this.http.get<Info[]>(this._url);
  }

  getPost(userId): Observable<InfoPost[]>{
    return this.http.get<InfoPost[]>(this._urlpost+userId);
  }
}
