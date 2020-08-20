import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment} from '../shared/comment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  baseUrl: string = "https://jsonplaceholder.typicode.com/comments";

  constructor(private httpClient : HttpClient) { }

  getComment(id : number): Observable<Comment[]>{
    return this.httpClient.get<Comment[]>(`${this.baseUrl}?postId=${id}`)
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
