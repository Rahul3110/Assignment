import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from './info';
import { Observable, Subscription } from 'rxjs';
import { InfoPost } from './infopost';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  // private _url: string = "https://jsonplaceholder.typicode.com/users";
  private _url: string = "/assets/data/data.json";
  private _urlpost: string = "https://jsonplaceholder.typicode.com/posts?userId=";
  private _urlComment: string = "https://jsonplaceholder.typicode.com/comments?postId=";

  invokeFirstComponentFunction = new EventEmitter();
  subsVar: Subscription;

  invokeCommentFunction = new EventEmitter();
  subsVar1: Subscription;

  onFirstComponentButtonClick(userId) {
    this.invokeFirstComponentFunction.emit(userId);
  }

  onClickComment(postId) {
    this.invokeCommentFunction.emit(postId);
  }

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<Info[]> {
    return this.http.get<Info[]>(this._url);
  }

  getPost(userId): Observable<InfoPost[]> {
    return this.http.get<InfoPost[]>(this._urlpost + userId);
  }

  getComment(postId): Observable<InfoPost[]> {
    return this.http.get<InfoPost[]>(this._urlComment + postId);
  }
}
