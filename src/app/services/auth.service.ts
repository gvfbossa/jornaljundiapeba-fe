import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/login'; // Rota de autenticação no backend.
  private authHeader: string | null = null;

  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }): Observable<any> {
    // Decodifica a senha antes de enviar ao backend
    const encodedPassword = btoa(credentials.password);
  
    // Faz a requisição ao backend
    return this.http.post<{ token: string }>(this.apiUrl, {
      username: credentials.username,
      password: encodedPassword,
    }).pipe(
      tap((response: { token: string; }) => {
        // Salva o token retornado no localStorage
        localStorage.setItem('authHeader', response.token);
        console.log(response.token)
      })
    );
  }
  

  logout(): void {
    localStorage.removeItem('authHeader');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authHeader');
  }

  getAuthHeader(): string | null {
    return localStorage.getItem('authHeader');
  }
}
