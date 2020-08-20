import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../shared/post';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private httpClient : HttpClient) { }

  getPost(id): Observable<Post[]>{
    return this.httpClient.get<Post[]>(`${this.baseUrl}?userId=${id}`)
    .pipe(
      catchError(this.handleError)
    );
  }
  
  private handleError(error : any){
    console.error('server error:', error);
    if(error.error instanceof Error){
      const errorMessage = error.error.message;
      return Observable.throw(errorMessage);
    }

    return Observable.throw(error || 'Server error');
  }
}
