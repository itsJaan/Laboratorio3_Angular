import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario} from '../shared/usuario';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpClient : HttpClient) { }

  getUsuarios(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.baseUrl)
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
