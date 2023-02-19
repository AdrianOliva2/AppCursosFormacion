import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private authClient: HttpClient, private router: Router) { }

  public async register(userName: string, email: string, password: string, age: number): Promise<Boolean> {
    try {
      this.authClient.post('http://localhost:3000/users/register', {
        name: userName, 
        email: email,
        password: password,
        age: age
      }).subscribe((res: any) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/home']);
          return true;
        } else {
          return false;
        }
      });
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      if (localStorage.getItem('token')) {
        return true;
      } else {
        return false;
      }
    }
  }

  public async login(email: string, password: string): Promise<Boolean> {
    try {
      this.authClient.post('http://localhost:3000/users/login', {
        email: email,
        password: password
      }).subscribe((res: any) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/home']);
          return true;
        } else {
          return false;
        }
      });
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      if (localStorage.getItem('token')) {
        return true;
      } else {
        return false;
      }
    }
  }

  public logout(): Observable<any> {
    return this.authClient.post('http://localhost:3000/users/logout', null);
  }

}
