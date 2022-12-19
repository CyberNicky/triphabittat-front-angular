import { Component, OnInit } from '@angular/core';
import { DefaultCrudService } from 'src/app/shared/services/default-crud.service';

@Component({
  selector: 'app-destination-details',
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.scss']
})
export class DestinationDetailsComponent implements OnInit{
  public destino: any = []

  constructor(
    public http: DefaultCrudService
  ) { }
 ngOnInit(): void {
   
 }

}
