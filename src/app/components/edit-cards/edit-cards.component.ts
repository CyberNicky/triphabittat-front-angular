import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegionalServices } from 'src/app/shared/regional.service';
import { DefaultCrudService } from 'src/app/shared/services/default-crud.service';

@Component({
  selector: 'app-edit-cards',
  templateUrl: './edit-cards.component.html',
  styleUrls: ['./edit-cards.component.scss'],
})
export class EditCardsComponent implements OnInit {
  public cities: any = [];
  public states: any = [];
  public destId!: number;
  public form: FormGroup = new FormGroup({
    name: new FormControl('', []),
    descricao: new FormControl('', []),
    imgUrl: new FormControl('', []),
    state: new FormControl('', []),
  });
  authService: any;
  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public crudService: DefaultCrudService,
    public regionalService: RegionalServices
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.destId = params['id'];
    });
  }

  ngOnInit(): void {
    this.crudService.httpGet(`destino/${this.destId}`).then((response) => {
      this.form.patchValue(response.data);
    });

    this.regionalService.getStates().then((response) => {
      this.states = response;
      this.handleSelectState();
    });
  }
  handleSelectState() {
    const state = this.states.find(
      (state: any) => state.nome === this.form.get('state')?.value
    );

    this.regionalService.getCities(state.sigla).then((response) => {
      this.cities = response;
    });
  }

  async handleEdit() {
    const data = this.form.value;
    const response = await this.crudService.httpPut(`destino/${this.destId}`, data);

    if (response.data.error) {
      alert(response.data.message);
      return;
    }

    alert('Editado com sucesso!');
    this.router.navigate(['destinos']);
  }
}
