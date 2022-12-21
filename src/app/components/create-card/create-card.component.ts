import { RegionalServices } from './../../shared/regional.service';
import { DefaultCrudService } from './../../shared/services/default-crud.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss'],
})
export class CreateCardComponent implements OnInit {
  public cities: any = [];
  public states: any = [];
  public form: FormGroup = new FormGroup({
    name: new FormControl('', []),
    descricao: new FormControl('', []),
    imgUrl: new FormControl('', []),
    state: new FormControl('', []),
  });
  constructor(
    public router: Router,
    public crudService: DefaultCrudService,
    public regionalService: RegionalServices
  ) {}

  ngOnInit(): void {
    this.regionalService.getStates().then((response) => {
      this.states = response;
      console.log(response);
    });
  }

  handleSelectState() {
    const state = this.states.find(
      (state: any) => state.nome === this.form.get('state')?.value
    );
    console.log(state);
    this.regionalService.getCities(state.sigla).then((response) => {
      this.cities = response;
      console.log(response);
    });
  }

  async handleCreate() {
    const data = this.form.value;
    const response = await this.crudService.httpPost('destino/register', data);

    if (response.data.error) {
      alert(response.data.message);
      return;
    }

    alert('Registrado com sucesso!');
    this.router.navigateByUrl('destino');
  }
}
