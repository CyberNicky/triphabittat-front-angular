import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DefaultCrudService } from 'src/app/shared/services/default-crud.service';

@Component({
  selector: 'app-destination-details',
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.scss'],
})
export class DestinationDetailsComponent implements OnInit {
  public destino!: any;
  public destId!: number;
  public avaliacoes!: any;
  public form: FormGroup = new FormGroup({
    conteudo: new FormControl('', []),
  });

  constructor(
    public http: DefaultCrudService,
    public activatedRoute: ActivatedRoute,
    public crudService: DefaultCrudService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.destId = params['id'];
    });
  }
  ngOnInit(): void {
    this.crudService.httpGet(`destino/${this.destId}`).then((response) => {
      this.destino = response.data;

      this.crudService
        .httpGet(`avaliacao/dest/${this.destId}`)
        .then((response) => (this.avaliacoes = response.data.reverse()));
    });
  }
  handleSubmitAvaliation() {
    const form = this.form.value;
    const userData = sessionStorage.getItem('user');
    console.log(userData)
    const user = userData && JSON.parse(userData);
    const data = { ...form, idUser: user.id, idDestino: this.destId };
    this.crudService.httpPost('avaliacao', data).then(r => {
      console.log(r)
      window.location.reload()
    })
  }
}
