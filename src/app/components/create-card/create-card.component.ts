import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent {
  public form: FormGroup = new FormGroup({
    name: new FormControl('', []),
    descricao: new FormControl('', []),
    imgUrl: new FormControl('', []),
    estado: new FormControl('', []),

  });
  authService: any;
  constructor(
    public router: Router 
  ){}
  async handleCreate() {
    const data = this.form.value;
    const response = await this.authService.httpPost('destino/register', data);

    if (response.data.error) {
      alert(response.data.message);
      return;
    }

    alert('Registrado com sucesso!');
    this.router.navigateByUrl('destino');
  }
}

