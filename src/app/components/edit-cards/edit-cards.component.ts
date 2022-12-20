import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-cards',
  templateUrl: './edit-cards.component.html',
  styleUrls: ['./edit-cards.component.scss']
})
export class EditCardsComponent {
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
async handleEdit() {
  const data = this.form.value;
  const response = await this.authService.httpPost('destino/register', data);

  if (response.data.error) {
    alert(response.data.message);
    return;
  }

  alert('Editado com sucesso!');
  this.router.navigateByUrl('destino');
}
}

