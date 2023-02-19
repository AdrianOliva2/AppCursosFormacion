import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonDatetime } from '@ionic/angular';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public form: FormGroup;
  public username: FormControl;
  public email: FormControl;
  public password: FormControl;
  public confirmPassword: FormControl;
  public birthDate: FormControl;

  public constructor(private userAuth: UserAuthService, private router: Router, private alertController: AlertController) {
    this.username = new FormControl('', [Validators.required, Validators.minLength(3)]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    const passwordMatch = (control: FormControl) => {
      const password = control.root.get('password');
      if (password) {
        const passwordValue = password.value;
        const confirmPasswordValue = control.value;
        if (passwordValue !== confirmPasswordValue && confirmPasswordValue !== '') {
          return {
            passwordsNotMatch: true
          };
        }
      }
      return null;
    };
    this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.confirmPassword = new FormControl('', [Validators.required, passwordMatch]);
    this.birthDate = new FormControl('', [Validators.required]);

    this.form = new FormGroup({
      username: this.username,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
      birthDate: this.birthDate
    });
  }

  public ngOnInit() {
  }

  public async register() {
    if (this.password.value === this.confirmPassword.value && this.password.value !== '' && this.email.value !== '') {
      let age = 0;
      if (this.birthDate.value !== '') {
        age = new Date().getTime() - new Date(this.birthDate.value).getTime();
        age = Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));
      }
      await this.userAuth.register(this.username.value, this.email.value, this.password.value, age)
      .then()
      .catch(async (err: any) => {
        console.log(err);
        const alert = this.alertController.create({
          header: 'Error',
          subHeader: 'El usuario o la contraseña son incorrectos',
          message: 'Por favor, inténtelo de nuevo',
          buttons: ['OK'],
        });

        (await alert).present();
      });
    }
  }

  public login() {
    this.router.navigate(['/login']);
  }

}
