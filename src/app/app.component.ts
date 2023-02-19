import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from './services/user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private userAuth: UserAuthService, private router: Router) {}

  public onLogout(): void {
    try {
      this.userAuth.logout()
      .subscribe(result => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      });
    } catch {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }
  }
}
