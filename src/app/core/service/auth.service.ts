import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tokenDto } from '../dto/tokenDto';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:8080/auth/signIn"

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<tokenDto>(this.url, { email, password }).pipe(
      tap(reponse => {
        sessionStorage.setItem('token', reponse.token);
      })
    );
  }
}
