import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  public hidePassword = true;
  public form: FormGroup = new FormGroup({
    email: new FormControl('', []),
    password: new FormControl('', []),
    name: new FormControl('', []),

  });

}
