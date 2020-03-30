import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from './info';
import { Observable, Subscription } from 'rxjs';
import { InfoPost } from './infopost';
import { InfoComment } from './infoComment';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  private _url: string = "https://jsonplaceholder.typicode.com/users";
  private _urlpost: string = "https://jsonplaceholder.typicode.com/posts?userId=";
  private _urlComment: string = "https://jsonplaceholder.typicode.com/comments?postId=";

  emitId = new EventEmitter();
  subsVar: Subscription;

  onUserClick(userId) {
    this.emitId.emit(userId);
  }

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<Info[]> {
    return this.http.get<Info[]>(this._url);
  }

  getPost(userId): Observable<InfoPost[]> {
    return this.http.get<InfoPost[]>(this._urlpost + userId);
  }

  getComment(postId): Observable<InfoComment[]> {
    return this.http.get<InfoComment[]>(this._urlComment + postId);
  }
}
