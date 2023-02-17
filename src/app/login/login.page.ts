import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email: FormControl;
  public password: FormControl;
  public form: FormGroup;

  constructor(private userAuthService: UserAuthService, private router: Router, private alertController: AlertController) {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.form = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  ngOnInit() {
  }

  public async login() {
    if (this.email.value !== '' || this.password.value !== '') {
      await this.userAuthService.login(this.email.value, this.password.value).then((res: any) => {
        this.router.navigate(['/home']);
      }).catch(async (err: any) => {
        console.log(err);
        const alert = this.alertController.create({
          header: 'Error',
          subHeader: 'El usuario o la contraseña son incorrectos',
          message: 'Por favor, inténtelo de nuevo',
          buttons: ['OK'],
        });
    
        await alert.present();
      });
    }
  }

  public register() {
    console.log('register');
  }

}
