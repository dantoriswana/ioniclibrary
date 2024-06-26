import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient, private toastController: ToastController) {}

  login(credentials: { email: string, password: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, credentials).pipe(
      tap(async response => {
        localStorage.setItem('token', response.token);
        await this.showToast('Login berhasil!', 'success');
      }),
      catchError(err => {
        this.showToast('Login gagal. Periksa kembali email dan password Anda.', 'danger');
        return throwError(err);  // Perbaikan dilakukan di sini
      })
    );
  }

  // register(userData: any): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/register`, userData).pipe(
  //     tap(async () => {
  //       await this.showToast('Registrasi berhasil!', 'success');
  //     }),
  //     catchError(err => {
  //       this.showToast('Registrasi gagal. Periksa kembali data yang Anda masukkan.', 'danger');
  //       return throwError(err);  // Perbaikan dilakukan di sini
  //     })
  //   );
  // }

  register(user: { email: string, password: string, name: string, password_confirmation : string }) {
    return this.http.post(`${this.apiUrl}/register`, user).toPromise();
  }

  logout(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.post(`${this.apiUrl}/logout`, {}, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    }).pipe(
      tap(async () => {
        localStorage.removeItem('token');
        await this.showToast('Logout berhasil!', 'success');
      })
    );
  }

  getLoggedInUser(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get<any>(`${this.apiUrl}/user`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    });
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  private async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color
    });
    await toast.present();
  }
}
