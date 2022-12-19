import { DefaultCrudService } from 'src/app/shared/services/default-crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {
  public allDestino: any = []

  constructor(
    public http: DefaultCrudService
  ) { }

  ngOnInit(): void {
    this.http.httpGet("destino").then(response => {
      this.allDestino = response.data
    })
  }
}
