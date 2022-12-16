import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DefaultCrudService } from 'src/app/shared/services/default-crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    DefaultCrudService
  ]
})
export class LoginComponent {
  constructor(public http: DefaultCrudService) {}
  // public users = []

  // ngOnInit(): void {
  //   this.http.httpGet('user').then(teste => {
  //     this.users = teste.data
  //     console.log(this.users)
  //   })
  // }
}
