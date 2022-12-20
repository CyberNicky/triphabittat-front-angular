import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DefaultCrudService } from 'src/app/shared/services/default-crud.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  public hidePassword = true;
  public form: FormGroup = new FormGroup({
    email: new FormControl('', []),
    password: new FormControl('', []),
    name: new FormControl('', []),
  });
  constructor(
    public authService: DefaultCrudService,
    public router: Router,
    public dialog: MatDialog
  ) {}
  async handleRegister() {
    const data = this.form.value;
    const response = await this.authService.httpPost('user/register', data);

    if (response.data.error) {
      alert(response.data.message);
      return;
    }

    alert('Cadastrado com sucesso!');
    this.router.navigateByUrl('');
  }
}
