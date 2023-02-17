import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private authClient: HttpClient) { }

  public async login(email: string, password: string): Promise<Boolean> {
    try {
      this.authClient.post('http://localhost:3000/users/login', {
        email: email,
        password: password
      }).subscribe((res: any) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
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

}
