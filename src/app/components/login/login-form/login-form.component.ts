import { Component } from '@angular/core';
import { async } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DefaultCrudService } from 'src/app/shared/services/default-crud.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  public hidePassword = true;
  public form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.nullValidator,
    ]),
  });
  public requestedLogin = false;
  http: any;
  constructor(
    public authService: DefaultCrudService,
    public router: Router,
    public dialog: MatDialog
  ) {}

  async onLoginSubmit(): Promise<void> {
    const data = this.form.value;
    const auth = await this.authService.httpPost('authentication/login', data);
    console.log(auth.data.accessToken);

    if (auth.data.error) {
      alert(auth.data.message);
      return;
    }

    sessionStorage.setItem('access_token', auth.data.accessToken);
    sessionStorage.setItem('user', JSON.stringify(auth.data.user));
    this.router.navigateByUrl('home');
  }
  public users = [];

  ngOnInit(): void {}
}
