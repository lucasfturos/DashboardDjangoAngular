import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private httpOptions!: any;
  private apiRoot = 'http://localhost:8000/'

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  login(username: string, senha: string) {
    return this.http.post<any>(this.apiRoot + `accounts/api/auth/`, {
      username, senha
    }, this.httpOptions).pipe(
      map(user => {
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
