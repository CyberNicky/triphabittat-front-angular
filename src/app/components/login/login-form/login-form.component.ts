import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  public hidePassword = true;
  public form: FormGroup = new FormGroup({
    email: new FormControl('', []),
    password: new FormControl('', []),
  });
  public requestedLogin = false;

}

